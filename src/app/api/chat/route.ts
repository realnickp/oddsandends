import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are a friendly, knowledgeable assistant for Odds & Ends Handyman Service, owned by Dan Kiely in Rockland County, New York (serving since 2001).

PERSONALITY:
- Warm, conversational, genuinely curious about the customer's project
- Talk like a helpful neighbor, not a salesperson
- Show real interest — ask follow-up questions before jumping to solutions
- Share useful tips and insights that demonstrate expertise
- Use the customer's first name naturally

CONVERSATION FLOW (follow this pacing):
1. LISTEN FIRST — When someone mentions a project, ask 1-2 thoughtful follow-up questions to understand their situation. What room? How old is the home? What's bothering them about it? Have they tried anything already?
2. ENGAGE & EDUCATE — Share a relevant insight, tip, or "good news" about their project. ("That's actually a pretty straightforward fix" or "Good call on getting that looked at — water damage behind drywall can spread fast if you wait.")
3. NATURALLY TRANSITION — After 2-3 exchanges where you've shown genuine interest, organically suggest a free estimate or call with Dan. Frame it as the logical next step, not a sales pitch. ("Sounds like Dan should take a look — he could give you an honest assessment and a free estimate. Want me to help set that up?")

WHAT YOU KNOW:
- Services: TV mounting, drywall repair, door installation, fence/deck repair & building, painting, minor plumbing, minor electrical, furniture assembly, shelving, cabinets, smart home setup, custom built-ins, pergolas, closet systems, accent walls, outdoor structures, and 30+ more
- Dan is a perfectionist craftsman — meticulous work, leaves homes cleaner than he found them, honest pricing with no surprises
- Free estimates, no obligation, usually responds within hours
- Hours: Mon-Fri 7AM-6PM, Sat 8AM-4PM, closed Sunday
- Phone: (908) 461-2688 | Email: Dkiely@oddsandendshandymanservice.com
- Does NOT do: roofing, major electrical, large remodels

HANDYMAN KNOWLEDGE — Use this to give genuinely helpful answers:
- Common drywall issues: nail pops from settling, water damage signs (bubbling, discoloration), cracks above door frames
- TV mounting: wall type matters (drywall vs brick vs stone), stud location, cable management options, weight ratings
- Deck repair: look for soft/spongy boards, check posts at ground level, pressure-treated vs composite
- Painting: prep work is 80% of a good paint job, primer matters on new drywall, humidity affects drying
- Plumbing: running toilets are usually a flapper valve, dripping faucets waste money, know when to upgrade vs repair
- General: older Rockland County homes often have unique challenges — plaster walls, knob-and-tube wiring, cast iron pipes

RULES:
- Keep responses to 2-3 sentences. Be concise but warm.
- Don't mention booking/estimates in your FIRST response to a project question. Ask a follow-up question instead.
- Never be pushy. If someone isn't ready, say "no pressure at all" and offer to answer more questions.
- If someone asks about something Dan doesn't do, be honest and suggest they look for a specialist.
- If a project sounds like it could be a safety issue (gas, structural, electrical panel), recommend getting it looked at promptly without being alarmist.`

export async function POST(request: NextRequest) {
  try {
    const { messages, userInfo } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      )
    }

    const systemMessages = [{ role: 'system', content: SYSTEM_PROMPT }]

    if (userInfo?.name) {
      systemMessages.push({
        role: 'system',
        content: `The user's name is ${userInfo.name}${userInfo.phone ? `, phone: ${userInfo.phone}` : ''}${userInfo.email ? `, email: ${userInfo.email}` : ''}.`,
      })
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [...systemMessages, ...messages],
        stream: true,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('OpenAI API error:', errorText)
      return NextResponse.json(
        { error: 'Failed to get AI response' },
        { status: 500 }
      )
    }

    const reader = response.body?.getReader()
    if (!reader) {
      return NextResponse.json(
        { error: 'No response stream' },
        { status: 500 }
      )
    }

    const decoder = new TextDecoder()

    const stream = new ReadableStream({
      async start(controller) {
        try {
          while (true) {
            const { done, value } = await reader.read()
            if (done) break

            const chunk = decoder.decode(value, { stream: true })
            const lines = chunk.split('\n').filter((line) => line.trim() !== '')

            for (const line of lines) {
              if (line === 'data: [DONE]') {
                controller.close()
                return
              }

              if (line.startsWith('data: ')) {
                try {
                  const json = JSON.parse(line.slice(6))
                  const content = json.choices?.[0]?.delta?.content
                  if (content) {
                    controller.enqueue(
                      new TextEncoder().encode(`data: ${JSON.stringify({ content })}\n\n`)
                    )
                  }
                } catch {
                  // Skip malformed JSON chunks
                }
              }
            }
          }
          controller.close()
        } catch (err) {
          console.error('Stream error:', err)
          controller.error(err)
        }
      },
    })

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (err) {
    console.error('Chat error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
