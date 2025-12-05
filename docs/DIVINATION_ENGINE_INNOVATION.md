8-Bit Oracle - Key Features for Resume

1. Alan Watts Classroom - Anti-Looping Pedagogical AI

Problem: AI tutors often repeat concepts users have already learned, creating frustrating loops.

Solution:

- 14-part structured curriculum with 42 lesson variations teaching I-Ching fundamentals to advanced applications
- Knowledge Component (KC) tracking system - Maps each lesson to specific concepts (e.g., Lesson 1 = ["iching-origins",
  "yin-yang-concept"])
- Lookback context injection - System prompt includes "KNOWLEDGE STATE" section listing previously covered topics
- Anti-repetition directive - Explicit instructions: "Do not re-explain concepts in coveredKCs"
- Session persistence - JSONB conversation history in Supabase with lesson index tracking
- Esalen/Big Sur aesthetic - Immersive lecture hall theme with timeline sidebar

Tech: Multi-locale persona (EN/ZH/ZH-CN/TH), thought bubble extraction via regex, 55-second per-model timeouts with failover

---

2. Group Divination - Real-Time Multi-Language Collaboration

Problem: Cross-language users fragmenting into separate communities.

Solution:

- Master-child architecture - English topic stores all functional data; ZH/TH users reference master ID but see localized
  display
- Parallel AI generation - Simultaneous readings in EN/ZH/TH with unique request IDs per locale
- Supabase real-time subscriptions - Monitors group_divination_requests and group_divination_readings tables
- State machine pattern - IDLE → REQUEST_INITIATED → GENERATING → SAVING → FETCHING → COMPLETE
- Shared Matrix digital rain - Visual synchronization across all participants during reading generation
- Race condition handling - Inline UUID fallback + closure-captured cleanup for slow networks

Tech: Zustand stores, slug-based channel isolation, exponential backoff reconnection, 90-second flow timeout

---

3. Pathways Scenario Planning - Multi-Advisor Futures Thinking

Problem: Strategic decisions benefit from multiple perspectives, not just one oracle voice.

Solution:

- Three distinct advisor personas:
  - Sun Tzu - Military strategy, terrain analysis, force dynamics, timing
  - Carl Jung - Archetypal psychology, unconscious patterns, transformation
  - Philip K. Dick - Reality-questioning, systemic implications, paradigm shifts
- Question enhancement pipeline - Brief input → multi-dimensional strategic question with stakeholder/temporal dimensions
- Hexagram-advisor assignment - Thematic scoring (strategic/psychological/systemic 0-1 scale) assigns optimal advisor
- Parallel AI generation - All three advisors analyze simultaneously with 55-second timeouts
- Shareable analyses - Public URL links for strategic planning outputs

Tech: Server Actions, dual auth (authenticated + anonymous), RLS policies, serialized JSONB sharing

---

4. Polymarket Integration - Prediction Markets as Divination Questions

Problem: Users need real-world events to ask the oracle about.

Solution:

- Gamma API proxy - Server-side endpoint with Redis caching (24h TTL, chunk-based storage)
- Distributed locking - Prevents thundering herd on cache miss
- Event-to-divination flow - One-click: select Polymarket event → auto-populate question → submit for reading
- Live market data - Outcome odds (Yes/No percentages), 24h volume, total volume
- Dual caching - Server (Redis) + Client (localStorage) with graceful fallback

Tech: 3-attempt retry with exponential backoff, 10-second per-request timeout, deduplication

---

5. Hexagram Commentaries - Multi-Language Cultural Grounding

Problem: Standard I-Ching apps present dry, decontextualized interpretations.

Solution:

- v2-iconic cultural artifacts (49 active) - Each hexagram interpreted through a cultural lens:
  - Hexagram 62: Bitcoin Genesis Block (Satoshi, 2009)
  - Hexagram 59: Blade Runner (Ridley Scott, 1982)
  - Hexagram 51: Joy Division Unknown Pleasures (pulsar waveforms)
  - Hexagram 15: Ada Lovelace Note G (first algorithm, 1843)
  - Hexagram 58: The Haçienda Acid House (Factory Records, 1988)
- DFW-style prose - David Foster Wallace-inspired ekphrastic descriptions (1800-2500 words per hexagram)
- Multi-locale translations - EN/ZH/ZH-CN/TH with lazy loading and English fallback
- Harvard-Yenching integration - Classical Chinese judgment texts for scholarly grounding
- Non-destructive versioning - v1 base layer + v2 overlay; new content adds, never replaces

Tech: TypeScript interfaces, ISR (3600s), 256 statically generated pages, Schema.org ArticleSchema

---

6. Cultural RAG Context System

Problem: AI responses lack authentic cultural grounding.

Solution:

- Wu Xing correspondence tables embedded in prompts:
  - 5 Elements → Colors, Directions, Seasons, Emotions, Animals
  - Trigram-Animal syncretic mappings (8bitoracle custom system)
- Locale-aware model routing - MODEL_CONFIG matrix maps 8 use cases × 4 locales to optimized model chains
- Modular prompt composition - 5-layer architecture (Personas → Templates → Enhancements → Composers → Voices)
- Semantic embeddings - Xenova/all-MiniLM-L6-v2 (384-dim) for context retrieval
- Language guidelines per locale - Explicit rules avoiding clichés ("embrace change", "go with the flow")

Tech: OpenRouter multi-provider failover, 55-second per-model timeouts, PostgreSQL vectors

---

Resume Positioning for HSBC AI Team

These features demonstrate:

1. Production AI Systems - Not prototypes; deployed infrastructure handling real traffic with failover, caching, and monitoring
2. Novel AI Patterns - Anti-looping pedagogy, multi-advisor parallel generation, prediction market integration
3. Cross-Cultural AI - 4-language system with locale-aware routing and cultural grounding (relevant for global bank)
4. Collaborative AI - Real-time multi-user systems with complex state synchronization
5. Mentorship Material - Each pattern is documented and teachable to junior engineers:

   - Knowledge component tracking for pedagogical AI
   - Master-child architecture for multi-language collaboration
   - Multi-persona routing for strategic analysis
   - Cultural RAG grounding for authentic responses

6. Side Project → Enterprise Transfer - These patterns directly apply to:

   - Customer service bots that don't repeat themselves
   - Multi-region financial advisory systems
   - Scenario planning for risk assessment
   - Market event analysis with I-Ching framing (novel differentiator)
