# Resume Claims Reference

Quick reference for defending resume claims in interviews. Keep specifics ready.

---

## Performance Claims

### "200% performance improvement" (Informatica MDM)

**What it means:** 3x faster (not 2x — that would be 100% improvement)

**How it was achieved:**
- Threads were already CPU-bound — scaling hardware wasn't the bottleneck
- Broke large work units into smaller chunks
- Used shared work queue for better load distribution across threads
- Distributed caching (Infinispan) for hotspot management
- Result: linear scaling across servers/threads
- **Key insight:** Understanding of keys/ranges (blocking) was essential — partitioning the search space to avoid O(n²) comparisons

**Interview answer:**
> "The threads were already CPU-bound, so adding more hardware wasn't the solution. The improvement came from understanding blocking — keys and ranges that partition the search space. We broke large work units into smaller chunks and used a shared work queue for better load distribution. That's the same principle behind modern ANN indexes like HNSW. I understand why it works, not just how to call the API."

---

## SSA-NAME3 / Matching Engine Expertise

**This is a killer differentiator** — most AI people today don't understand these fundamentals.

**What you actually did:**
- Worked with original SSA-NAME3 engineering team
- Custom population development (language-specific matching rules)
- Bigram/trigram tokenization for CJK languages
- Keys and ranges (blocking strategies) for scalable matching
- Built on top of the SDK
- Command line utilities, text file formatting, definitions

**How it maps to modern AI:**

| Classic Matching | Modern AI Equivalent |
|------------------|---------------------|
| Blocking (keys/ranges) | ANN indexing (HNSW, Faiss) |
| Custom populations | Domain-specific fine-tuning |
| Bigram/trigram tokenization | Subword tokenization (BPE, SentencePiece) |
| Confidence scoring | Similarity thresholds, softmax outputs |
| Match/merge decisioning | Entity resolution, deduplication |

**Interview answer:**
> "I worked with the original SSA-NAME3 engineering team. I've built custom populations, implemented bigram/trigram tokenization for CJK languages, and designed blocking strategies for scalable matching. When I look at modern embedding models, I see the same problems we solved differently — blocking is ANN indexing, population development is domain-specific fine-tuning. The fundamentals are the same."

**Why this matters for PII detection:**
> "Name matching is PII detection. I've spent years on confidence scoring, threshold tuning, and false positive reduction. That's exactly what you need for document classification and entity resolution."

---

## AI/LLM Claims

### "15+ LLMs evaluated"

**Methodology:**
- OpenRouter backend for model access
- Claude Code as the evaluation agent
- Same prompts reused across models for fair comparison
- "LLM as judge" evaluation pattern
- Different model arrays configured per use case

**Models evaluated:** (fill in specifics you can name)
- Claude (Sonnet, Opus, Haiku)
- GPT-4, GPT-4o, GPT-3.5
- Gemini Pro
- Llama variants
- Mistral variants
- (add others as needed)

**Blog post:** Reference your blog for detailed methodology

---

### "Intelligent failover chains"

**What it means:**
- OpenRouter-based model routing
- Different model arrays configured per use case
- Automatic fallback when primary model fails/rate-limits
- Not just random fallback — use-case-aware selection

**Example:** "For content generation we might prefer Claude Opus → GPT-4 → Claude Sonnet. For quick classification tasks, different chain optimized for speed/cost."

---

### "Voice integration" / "voice/chat systems"

**What it is:**
- OpenAI Whisper for transcription
- Audio input → text → LLM processing

**Clarification:** This is transcription/STT, not full voice assistant with TTS output (unless you have that too — update accordingly)

---

## Company/Role Claims

### "CTO & Founder — Digital Rain Studios"

**Reality:** Solo consulting/development practice

**How to frame it:**
> "Digital Rain Studios is my independent practice where I build AI-powered products and take on consulting work. I'm the sole technical contributor — I architect, code, and deploy everything myself."

**Don't say:** "I built a team" / "I manage engineers"

**Do say:** "I work with clients and collaborators" / "I've partnered with [X] on projects"

---

### "Regional technical advisor across APJ" (Informatica)

**Scope:**
- Primary technical contact for Asia-Pacific region
- Mentored delivery teams (not direct reports — advisory role)
- Architectural guidance for enterprise clients

**Clients you can mention:** Samsung, Renault, Capital Group, major financial institutions
- Be ready for: "What specifically did you do for Samsung?"
- If NDA-constrained: "I can speak to the technical patterns but not the specific business context"

---

## Project Claims

### ContentMind — "First production release shipped in ~10 weeks"

**Be ready to explain:**
- What "production" means (deployed, users, or internal?)
- Scope of v1 (what was included vs. what came later)
- Solo or with collaborators?

---

### 8-Bit Oracle — "Multi-turn conversational AI"

**Technical specifics:**
- Next.js 14 (App Router, RSC)
- Supabase (PostgreSQL)
- Vercel Edge Functions
- Claude API with custom XML-tagged prompts
- Streaming responses with token monitoring
- i18n: EN/ZH/ZH-CN/TH

**What "multi-turn" means:** Context preservation across conversation, not just single Q&A

---

### Pix — "Consensus HK 2025 Winner"

**Verifiable:** CoinDesk article linked in resume
**Category:** AI Agents
**What it does:** Autonomous Twitter agent with I-Ching divinations + OriginTrail DKG integration

---

## Claims Removed/Corrected

| Original Claim | Issue | Resolution |
|----------------|-------|------------|
| "40K+ monthly active users" | Not accurate | Removed from all resumes |
| "building technical teams from zero" | Solo practice, no team | Removed from enterprise AI resume |

---

## General Interview Prep

**When asked about Digital Rain Studios revenue/size:**
> "It's an independent practice. Revenue varies by project — I focus on AI agent systems and consulting work. Not venture-backed, intentionally lean."

**When asked why you left Informatica:**
> (Prepare your answer — was it layoffs, personal choice, opportunity cost, etc.)

**When asked about infrastructure/energy domain experience (for SJ Group):**
> "My background is enterprise data infrastructure rather than civil/energy engineering. But the core challenge — embedding AI into operational workflows, driving adoption across technical teams, measuring outcomes — is domain-agnostic. I'd be learning the domain context, not the AI transformation playbook."
