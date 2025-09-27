export default function HomePage() {
  return (
    <div>      
      <p><strong>Building systems that reason</strong></p>

      <h2>About Me</h2>
      <p>
        Hi. I'm a builder who specializes in creating products from scratch, especially in spaces where there are no established patterns yet.
        Through <a href="https://digitalrain.studio/" target="_blank" rel="noopener noreferrer">Digital Rain Studios</a>, I'm exploring the frontiers of AI-powered experiences and Web3.
        My journey into tech began with a BS in Cognitive Science (specializing in Computation) from UC San Diego, after graduating from the Bronx High School of Science.
      </p>

      <p>
        These days, you'll find me deep in the code for <a href="https://8bitoracle.ai" target="_blank" rel="noopener noreferrer">8-Bit Oracle</a>,
        an I-Ching digital counselor in Open Beta and which <a href="https://x.com/origin_trail/status/1892543087479505352" target="_blank" rel="noopener noreferrer">won at the Consensus HK Hackathon</a>.
        It's an immersive tech-noir divination experience available in multiple languages, where users can interact with their destiny using voice,
        track their divination history, and share insights. The oracle's wisdom is powered by advanced LLMs like DeepSeek—ensuring high-quality readings —
        with OpenRouter providing ongoing flexibility for the latest AI models. Web3 wallet integration unlocks exclusive token-gated features,
        and users can even consult the I-Ching on active prediction market events via our live Polymarket integration, powered by the Gamma API.
      </p>

      <p>I build everything AI-assisted (currently Claude Code), a practice that's transformed my workflow.</p>

      <p>
        Recently, I've been building the <strong>QDayAnon Content Engine</strong>, a sophisticated AI-powered content generation system for quantum computing research.
        The project has involved fascinating technical challenges around <a href="/posts/2025-09-02-dspy-voice-evolution-authenticity">systematic voice evolution in DSPy</a> using multi-dimensional lattices and Pareto optimization,
        as well as <a href="/posts/2025-09-14-trusting-instincts-ai-architecture">architectural decision-making</a> when balancing AI suggestions with engineering principles.
      </p>

      <p>
        I thrive on designing and building products where the requirements aren't clear because the solution hasn't been tried before.
        Using AI-assisted iteration, I can rapidly explore different approaches and create novel user experiences that feel intuitive even in unfamiliar territory.
      </p>

      <p>
        I also lend my expertise to other startups, helping them with their MVPs – recent collaborations include <a href="https://www.peepsapp.ai/" target="_blank" rel="noopener noreferrer">People App</a> and <a href="https://www.travelbox.tech/" target="_blank" rel="noopener noreferrer">Travelbox</a>.
      </p>

      <p>
        Prior to founding Digital Rain Studios, I spent over a decade at <a href="https://www.informatica.com/" target="_blank" rel="noopener noreferrer">Informatica</a>.
        As a regional Development Architect in their Master Data Management division, I served large customers across APAC and sometimes Europe,
        helping them with architecture reviews, systems design, performance challenges, and firefighting urgent bugs and product enhancements.
        I was instrumental in enhancing core product performance, notably achieving significant speedups in the fuzzy match engine,
        and served as a go-to expert for our largest global customers facing tough technical hurdles.
        My earlier career spanned roles from Dun & Bradstreet to various tech consulting engagements.
      </p>

      <p>
        You can find more details on my projects here on the site, or <a href="https://github.com/augchan42/" target="_blank" rel="noopener noreferrer">dive into the code on GitHub</a>.
        <a href="/_assets/files/auchan_resume_2025.pdf" target="_blank" rel="noopener noreferrer">My CV has the full story</a>.
        You can also find me on <a href="https://x.com/hosermage_" target="_blank" rel="noopener noreferrer">X (formerly Twitter)</a>.
      </p>

      <h3>Speaking & Interviews</h3>
      <p>I've had the pleasure of discussing my work and thoughts on several occasions:</p>
      <ul>
        <li><a href="https://youtu.be/SUXmMym8chk?si=PFfMz97gxkxa5WG8" target="_blank" rel="noopener noreferrer"><strong>5-minute demo of group divination at HKCEC</strong></a> as part of AI Tinkerers HK/GBA, where together with the audience we explored: "How can HK become Asia's Leading City in AI?"</li>
        <li><a href="https://www.youtube.com/watch?v=MBI8GY9xGPY" target="_blank" rel="noopener noreferrer"><strong>Discussing AI Agent technology and speculation</strong></a> with my friend fullvaluedan</li>
        <li><a href="https://www.youtube.com/watch?v=8N3PqINBBeY" target="_blank" rel="noopener noreferrer"><strong>A more expansive interview</strong></a> covering influences for the 8-Bit Oracle, life growing up, and nostalgia with my friend Eddylive</li>
      </ul>

      <h2 id="projects">Projects</h2>

      <h3>🎮 8-Bit Oracle - Tech Noir I-Ching</h3>
      <p>
        <strong><a href="https://app.8bitoracle.ai" target="_blank" rel="noopener noreferrer">app.8bitoracle.ai</a> | <a href="https://x.com/8bitoracle" target="_blank" rel="noopener noreferrer">Follow on X</a></strong>
      </p>
      <p>
        A tech-noir digital counselor. Key tech: Next.js 14, React, TypeScript, Zustand (state), Supabase (auth), Dynamic Labs (ETH/Solana wallets),
        OpenRouter (AI), use-stt (voice input), Shadcn/Radix UI/Tailwind (UI), Recharts (data viz), next-intl (i18n), and PWA support via next-pwa.
      </p>

      <h3>🧬 QDayAnon Content Engine - AI Research Platform</h3>
      <p>
        Production AI content generation system with sophisticated DSPy voice evolution, agent workflow orchestration, and research paper management (170+ curated papers).
        Key tech: FastAPI, Next.js 15, PostgreSQL, DSPy optimization, WebSocket, MCP Protocol. Features multi-dimensional voice lattices with Pareto optimization and principled architectural patterns.
      </p>
      <p>
        <a href="/posts/2025-09-02-dspy-voice-evolution-authenticity">Technical deep-dive on voice evolution</a> | <a href="/posts/2025-09-14-trusting-instincts-ai-architecture">Architecture insights</a>
      </p>

      <h3>🏆 DKG OriginTrail Integration - Hackathon Winner</h3>
      <p><strong>(Consensus HK 2025 Hackathon Win, Feb 2025)</strong></p>
      <p>
        Built verifiable knowledge graph integration for 8-Bit Oracle using OriginTrail's DKG Protocol.
        This integration allows divination data to be stored immutably on the knowledge graph,
        creating a permanent record of insights that can be referenced and built upon by the community.
      </p>
    </div>
  )
}