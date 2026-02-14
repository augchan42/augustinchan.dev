import Link from 'next/link'

export default function HomePage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Augustin Chan',
    url: 'https://augustinchan.dev',
    image: 'https://augustinchan.dev/img/Xrn0Id68_400x400.jpg',
    jobTitle: 'CTO & Founder, Digital Rain Technologies',
    description: 'Building production AI systems including skill-based generative pipelines, cross-platform AI bots, and on-device ML applications.',
    sameAs: [
      'https://x.com/aug_digitalrain',
      'https://x.com/augchan42',
      'https://github.com/augchan42',
      'https://8bitoracle.ai',
    ],
    knowsAbout: ['AI', 'Machine Learning', 'Web3', 'Software Engineering', 'React', 'Next.js', 'TypeScript'],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'UC San Diego',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Digital Rain Technologies',
      url: 'https://digitalrain.studio',
    },
  }

  const sectionHeadingStyle = {
    fontSize: '1em',
    fontWeight: 700 as const,
    margin: '2.5rem 0 1rem',
    color: 'var(--color-text-primary, #1f1e1d)',
  }

  const linkItemStyle = {
    marginBottom: '0.6rem',
    lineHeight: '1.6',
  }

  const linkStyle = {
    color: 'var(--color-text-primary, #1f1e1d)',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
    textDecorationColor: 'var(--color-text-muted, #87867f)',
  }

  const yearStyle = {
    color: 'var(--color-text-muted, #87867f)',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div>
        {/* Bio */}
        <div style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
          <p style={{ marginBottom: '1rem' }}>
            Augustin Chan is the CTO and founder of{' '}
            <a href="https://digitalrain.studio/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Digital Rain Technologies
            </a>
            , building production AI systems including skill-based generative pipelines, cross-platform AI bots, and on-device ML applications.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Previously, Augustin served as Development Architect at Informatica for 12 years, leading enterprise architecture for Fortune 500 customers across APAC, MENA, and Europe. Before that, he was a Senior Consultant at Dun &amp; Bradstreet.
          </p>
          <p>
            Augustin holds a B.S. in Cognitive Science with Specialization in Computation from UC San Diego.
          </p>
        </div>

        {/* Essays */}
        <div style={sectionHeadingStyle}>Essays</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={linkItemStyle}>
            <Link href="/posts/2026-02-14-teaching-taste-to-agents-yilin-image-pipeline" style={linkStyle}>
              Teaching Taste to an Agent
            </Link>{' '}
            <span style={yearStyle}>(2026)</span>
          </li>
          <li style={linkItemStyle}>
            <Link href="/posts/2026-01-25-junzi-alignment-initial-weights-hypothesis" style={linkStyle}>
              The Junzi Hypothesis
            </Link>{' '}
            <span style={yearStyle}>(2026)</span>
          </li>
          <li style={linkItemStyle}>
            <Link href="/posts/2025-12-01-seeded-iching-engine" style={linkStyle}>
              Seeded I-Ching Engine
            </Link>{' '}
            <span style={yearStyle}>(2025)</span>
          </li>
          <li style={linkItemStyle}>
            <Link href="/posts/2025-10-28-memory-systems-and-the-graph-that-wasnt" style={linkStyle}>
              Memory Systems and the Graph That Wasn't
            </Link>{' '}
            <span style={yearStyle}>(2025)</span>
          </li>
          <li style={linkItemStyle}>
            <Link href="/posts/2025-09-27-llm-reasoning-pattern-classification-failure-modes" style={linkStyle}>
              LLM Reasoning Patterns and Failure Modes
            </Link>{' '}
            <span style={yearStyle}>(2025)</span>
          </li>
          <li style={linkItemStyle}>
            <Link href="/posts/2025-09-02-dspy-voice-evolution-authenticity" style={linkStyle}>
              DSPy, Voice, and the Evolution of Authenticity
            </Link>{' '}
            <span style={yearStyle}>(2025)</span>
          </li>
        </ul>

        {/* Short posts */}
        <div style={sectionHeadingStyle}>Short posts</div>
        <p style={linkItemStyle}>
          <Link href="/blog" style={linkStyle}>Full archive</Link>
        </p>

        {/* Projects */}
        <div style={sectionHeadingStyle}>Projects</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={linkItemStyle}>
            <a href="https://8bitoracle.ai" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              8-Bit Oracle
            </a>
          </li>
          <li style={linkItemStyle}>
            <a href="https://qdayanon.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              QDayAnon Research Platform
            </a>
          </li>
          <li style={linkItemStyle}>
            <a href="https://github.com/augchan42/pbc-consensus-hk-2026" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Plum Blossom Computer
            </a>{' '}
            <span style={yearStyle}>(Consensus HK 2026)</span>
          </li>
          <li style={linkItemStyle}>
            <a href="https://github.com/augchan42/seeded-iching-engine" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              seeded-iching-engine
            </a>{' '}
            <span style={yearStyle}>(GitHub)</span>
          </li>
        </ul>

        {/* Speaking */}
        <div style={sectionHeadingStyle}>Speaking</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={linkItemStyle}>
            <a href="https://youtu.be/SUXmMym8chk?si=PFfMz97gxkxa5WG8" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              5-minute group divination demo
            </a>
            {' '}— AI Tinkerers HK <span style={yearStyle}>(2025)</span>
          </li>
          <li style={linkItemStyle}>
            <a href="https://www.youtube.com/watch?v=MBI8GY9xGPY" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              AI Agent technology discussion
            </a>
            {' '}— with fullvaluedan <span style={yearStyle}>(2025)</span>
          </li>
          <li style={linkItemStyle}>
            <a href="https://www.youtube.com/watch?v=8N3PqINBBeY" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              8-Bit Oracle deep-dive
            </a>
            {' '}— with Eddylive <span style={yearStyle}>(2024)</span>
          </li>
        </ul>

        {/* Consulting */}
        <div style={sectionHeadingStyle}>Consulting</div>
        <p style={linkItemStyle}>
          People App, Travelbox
        </p>
      </div>
    </>
  )
}
