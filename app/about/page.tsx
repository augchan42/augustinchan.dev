export const metadata = {
  title: 'About | Augustin Chan',
  description: 'Software engineer and founder specializing in AI-powered experiences and Web3. Building systems that reason.',
}

export default function AboutPage() {
  return (
    <div>
      <h1 style={{ fontSize: '1.25em', marginBottom: '1rem' }}>Greetings</h1>

      <p style={{ fontSize: '1.1em', color: 'var(--color-text-secondary)', marginBottom: '3rem' }}>
        I build products from scratch in uncharted territory. Founder of <a href="https://digitalrain.studio/" target="_blank" rel="noopener noreferrer">Digital Rain Studios</a>.
      </p>

      {/* Current Work */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.3em', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border-strong)', paddingBottom: '0.5rem' }}>
          Current Projects
        </h2>

        <div style={{
          padding: '1.5rem',
          backgroundColor: 'var(--color-background-surface)',
          borderLeft: '4px solid var(--color-border-strong)',
          marginBottom: '1.5rem'
        }}>
          <h3 style={{ marginTop: 0, fontSize: '1.1em' }}>
            🎮 <a href="https://8bitoracle.ai" target="_blank" rel="noopener noreferrer">8-Bit Oracle</a>
          </h3>
          <p style={{ margin: '0.5rem 0', color: 'var(--color-text-muted)', fontSize: '0.9em' }}>
            Tech-noir I-Ching counselor | <a href="https://x.com/origin_trail/status/1892543087479505352" target="_blank" rel="noopener noreferrer">Consensus HK Hackathon Winner</a>
          </p>
          <p style={{ marginBottom: 0 }}>
            Multilingual divination experience with voice interaction, Web3 wallet integration, and live Polymarket event consultation.
            Powered by advanced LLMs (DeepSeek, OpenRouter) with token-gated features.
          </p>
        </div>

        <div style={{
          padding: '1.5rem',
          backgroundColor: 'var(--color-background-surface)',
          borderLeft: '4px solid var(--color-border-strong)'
        }}>
          <h3 style={{ marginTop: 0, fontSize: '1.1em' }}>
            🧬 <a href="https://qdayanon.com" target="_blank" rel="noopener noreferrer">QDayAnon Content Engine</a>
          </h3>
          <p style={{ margin: '0.5rem 0', color: 'var(--color-text-muted)', fontSize: '0.9em' }}>
            AI research platform for quantum computing content
          </p>
          <p style={{ marginBottom: '0.5rem' }}>
            Production system with DSPy voice evolution, agent workflows, and 170+ curated research papers.
            Features multi-dimensional voice lattices with Pareto optimization.
          </p>
          <p style={{ fontSize: '0.9em', marginBottom: 0 }}>
            → <a href="/posts/2025-09-02-dspy-voice-evolution-authenticity">Voice evolution deep-dive</a><br/>
            → <a href="/posts/2025-09-14-trusting-instincts-ai-architecture">Architecture insights</a>
          </p>
        </div>
      </section>

      {/* Open Source */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.3em', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border-strong)', paddingBottom: '0.5rem' }}>
          Open Source
        </h2>

        <div style={{
          padding: '1.5rem',
          backgroundColor: 'var(--color-background-surface)',
          borderLeft: '4px solid var(--color-border-strong)',
          marginBottom: '1.5rem'
        }}>
          <h3 style={{ marginTop: 0, fontSize: '1.1em' }}>
            🌱 <a href="https://github.com/augchan42/seeded-iching-engine" target="_blank" rel="noopener noreferrer">seeded-iching-engine</a>
          </h3>
          <p style={{ margin: '0.5rem 0', color: 'var(--color-text-muted)', fontSize: '0.9em' }}>
            Deterministic, replayable hexagram generation
          </p>
          <p style={{ marginBottom: 0 }}>
            Seeded PRNG architecture extracted from 8-Bit Oracle. Same seed → same hexagram → forever.
            Designed for verifiable compute and reproducible AI workflows.
          </p>
        </div>

        <div style={{
          padding: '1.5rem',
          backgroundColor: 'var(--color-background-surface)',
          borderLeft: '4px solid var(--color-border-strong)'
        }}>
          <h3 style={{ marginTop: 0, fontSize: '1.1em' }}>
            🎤 <a href="https://github.com/augchan42/use-stt" target="_blank" rel="noopener noreferrer">use-stt</a>
          </h3>
          <p style={{ margin: '0.5rem 0', color: 'var(--color-text-muted)', fontSize: '0.9em' }}>
            React hook for speech-to-text
          </p>
          <p style={{ marginBottom: 0 }}>
            Lightweight React hook powering voice input in 8-Bit Oracle.
            Browser-native speech recognition with simple API.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.3em', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border-strong)', paddingBottom: '0.5rem' }}>
          How I Work
        </h2>
        <p>
          I specialize in building products where requirements aren't clear because the solution hasn't been tried before.
          Using AI-assisted iteration (currently Claude Code), I rapidly explore approaches and create intuitive experiences in unfamiliar territory.
        </p>
      </section>

      {/* Consulting */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.3em', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border-strong)', paddingBottom: '0.5rem' }}>
          Consulting
        </h2>
        <p>
          I help startups build their MVPs. Recent collaborations: <a href="https://www.peepsapp.ai/" target="_blank" rel="noopener noreferrer">People App</a> and <a href="https://www.travelbox.tech/" target="_blank" rel="noopener noreferrer">Travelbox</a>.
        </p>
      </section>

      {/* Background */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.3em', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border-strong)', paddingBottom: '0.5rem' }}>
          Background
        </h2>
        <p>
          <strong>Informatica (10+ years)</strong> — Regional Development Architect for Master Data Management.
          Served enterprise customers across APAC and Europe on architecture reviews, systems design, and performance optimization.
          Enhanced core product performance (fuzzy match engine speedups) and firefighted critical issues for global customers.
        </p>
        <p style={{ marginBottom: 0 }}>
          <strong>Education:</strong> BS Cognitive Science (Computation), UC San Diego | Bronx High School of Science
        </p>
      </section>

      {/* Connect */}
      <section style={{
        padding: '1.5rem',
        backgroundColor: 'var(--color-background-surface)',
        borderRadius: 'var(--border-radius)',
        marginBottom: '2rem'
      }}>
        <p style={{ margin: 0, fontSize: '0.95em' }}>
          <a href="https://github.com/augchan42/" target="_blank" rel="noopener noreferrer">GitHub</a> ·
          <a href="https://x.com/aug_digitalrain" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem' }}>X</a> ·
          <a href="/_assets/files/auchan_resume_2025.pdf" target="_blank" rel="noopener noreferrer">CV</a>
        </p>
      </section>

      {/* Speaking */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.3em', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border-strong)', paddingBottom: '0.5rem' }}>
          Speaking & Interviews
        </h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li>
            <a href="https://youtu.be/SUXmMym8chk?si=PFfMz97gxkxa5WG8" target="_blank" rel="noopener noreferrer"><strong>5-minute group divination demo</strong></a> — AI Tinkerers HK/GBA at HKCEC
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=MBI8GY9xGPY" target="_blank" rel="noopener noreferrer"><strong>AI Agent technology discussion</strong></a> — with fullvaluedan
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=8N3PqINBBeY" target="_blank" rel="noopener noreferrer"><strong>8-Bit Oracle deep-dive</strong></a> — influences, life story, nostalgia (with Eddylive)
          </li>
        </ul>
      </section>

      {/* Tech Details (Collapsed) */}
      <details style={{ marginBottom: '2rem' }}>
        <summary style={{
          cursor: 'pointer',
          fontSize: '1.1em',
          fontWeight: 'bold',
          padding: '1rem',
          backgroundColor: 'var(--color-background-surface)',
          borderRadius: 'var(--border-radius)',
          userSelect: 'none'
        }}>
          Tech Stack Details
        </summary>
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'var(--color-background-surface)',
          border: '1px solid var(--color-border-default)',
          borderTop: 'none',
          borderRadius: '0 0 4px 4px'
        }}>
          <h3 style={{ marginTop: 0 }}>8-Bit Oracle</h3>
          <p style={{ fontSize: '0.9em', color: 'var(--color-text-muted)' }}>
            Next.js 14, React, TypeScript, Zustand, Supabase, Dynamic Labs (ETH/Solana),
            OpenRouter, use-stt, Shadcn/Radix UI, Tailwind, Recharts, next-intl, next-pwa
          </p>

          <h3>QDayAnon Content Engine</h3>
          <p style={{ fontSize: '0.9em', color: 'var(--color-text-muted)', marginBottom: 0 }}>
            FastAPI, Next.js 15, PostgreSQL, DSPy, WebSocket, MCP Protocol,
            multi-dimensional voice lattices, Pareto optimization
          </p>
        </div>
      </details>
    </div>
  )
}
