Technical Innovations Summary for Resume

1. Content Variety System - Semantic Deduplication & Format Balancing

Problem Solved: Preventing content fatigue from repetitive topics, format monotony, and over-representation of
specific domains.

Architecture:

- Topic Deduplication: Uses sentence-transformer embeddings to compute semantic similarity between content
  titles. Content with >70% cosine similarity to recent posts is demoted, preventing repetitive coverage.
- Format Balancing: Rolling quota system tracks recent format distribution. If "social_banger" exceeds its
  quota, alternatives are promoted. Configurable rolling windows and per-format quotas.
- Domain Diversity: Tag saturation detection reorders content when specific domains (e.g., "cryptography")
  dominate the queue. Promotes underrepresented topics.

Technical Highlights:

- Sentence-transformers for real-time embedding comparison
- Rolling window statistics with configurable thresholds
- Priority queue reordering without content filtering

---

2. News Feed Ranking - AI Quality + Time-Decay Physics

Problem Solved: Ranking news items by both relevance quality AND freshness, with source-appropriate decay rates.

Architecture:

- Two-Stage Hybrid Ranking:
  - Stage 1: AI relevance scoring (1-10 scale) using "hyperstition lens" - how likely content is to become
    culturally significant
  - Stage 2: Exponential time-decay multiplier using physics-inspired formula

Time-Decay Formula:
decay_multiplier = exp(-λ × hours_since_publication)
final_score = ai_score × decay_multiplier

Source-Specific Half-Lives:
| Source Type | Half-Life | Rationale |
|-------------|---------------------|----------------------------|
| Twitter | 36 hours | Fast-moving, ephemeral |
| RSS Feeds | 18 hours | News cycle timing |
| arXiv | 672 hours (28 days) | Academic papers age slowly |

Technical Highlights:

- Exponential decay with configurable lambda per source
- Half-life abstraction for intuitive configuration
- Combined scoring preserves both quality signal and temporal relevance

---

3. Image Generation Pipeline - fal.ai + Vercel Blob CDN

Problem Solved: Generating and serving Victorian newspaper-style OG images at scale with reliable CDN delivery.

Architecture:

- Dual Image System:
  - OG Image: 800-char text capacity, full correspondent attribution
  - Viral Image: Compact visual for tweet attachment
- Pluggable Storage Abstraction:
  - Strategy/Factory pattern for storage backends
  - Vercel Blob CDN (production) with automatic content-addressing
  - Local filesystem (development) with same interface
- Generation Pipeline:
  - fal.ai with FLUX models for high-quality generation
  - Template-based Victorian newspaper layouts
  - Automated text rendering with overflow handling

Technical Highlights:

- Research-backed timeouts (60s generation, 30s upload)
- Security sanitization for user-provided content
- Graceful degradation when image generation fails
- Content-addressed URLs for deduplication

---

4. Narrative Profile System - Data-Driven Worldview Pattern

Problem Solved: Replacing hardcoded persona logic with configurable JSONB profiles, enabling A/B testing and
iteration without code changes.

Architecture:

- Correspondent Personas: Victorian journalist characters with distinct voices (A.H. Pemberton, Clara Winthrop,
  etc.)
- Stage-Based Assignment: Content intensity stages (quantum dawn, accelerating revelation, reality cascade)
  influence tone selection
- JSONB Profile Storage: All persona data, templates, and stage mappings stored in database

Pattern Implementation:
class NarrativeProfile(BaseModel):
correspondent: str
stage: str
tone_keys: list[str]
templates: dict[str, str]
worldview_modifiers: dict[str, float]

Technical Highlights:

- Eliminated 500+ lines of hardcoded conditionals
- Hot-reloadable profiles without deployment
- Combinatorial testing of personas × stages × templates
- Audit trail for profile changes

---

5. DSPy Integration - Modular AI Generators with Optimization

Problem Solved: Moving from ad-hoc prompt engineering to structured, optimizable AI signatures with caching and
tracing.

Architecture:

- DSPy Signatures: Typed input/output contracts for all AI operations
  class ThreatAssessmentSignature(dspy.Signature):
  topic: str = dspy.InputField()
  content: str = dspy.InputField()
  bluf: str = dspy.OutputField()
  threat_id: str = dspy.OutputField()
  probability: str = dspy.OutputField()
- Three-Layer Caching:
  - L1: In-memory LRU (fastest, volatile)
  - L2: On-disk FanoutCache (persistent, shared)
  - L3: Server-side LLM provider caching
- LLM Call Tracing:
  - Automatic logging of all DSPy calls via monkey-patch
  - Server timing from OpenRouter (response_time_ms)
  - Token usage, model, and use-case tracking
  - Analytics dashboard for cost and performance

Technical Highlights:

- Timestamp-based cache bypass for fresh results
- Optimization tracking tables for A/B testing
- Structured outputs eliminate parsing fragility
- Cost analysis by model/use-case/day

---

6. Pydantic JSONB Schema System (Just Implemented)

Problem Solved: Type safety gap between code writing to JSONB columns and code reading from them.

Architecture:

- Single Source of Truth: Pydantic schemas define canonical structure
- Backwards Compatibility: from_dict() methods handle legacy formats
- Utility Functions: create_X_metadata() and parse_X_metadata() enforce consistency

# Writing (validated)

metadata = PostMetadata(og_image_url="...", correspondent_hook="...")
db.post_metadata = metadata.model_dump(exclude_none=True)

# Reading (typed)

metadata = parse_post_metadata(db.post_metadata)
hook = metadata.get_correspondent_hook() # Typed access

---

Key Technical Patterns Demonstrated

1. Physics-Inspired Algorithms: Time-decay ranking using exponential decay formulas
2. Pluggable Architecture: Strategy/Factory patterns for storage backends
3. Data-Driven Configuration: Moving hardcoded logic to database profiles
4. Type Safety at Boundaries: Pydantic schemas for JSONB columns
5. Multi-Layer Caching: Hierarchical cache strategy for AI operations
6. Semantic Similarity: Embedding-based content deduplication
7. Observability: Comprehensive LLM call tracing and analytics

These innovations demonstrate experience in building production AI systems with attention to scalability,
maintainability, and operational visibility.
