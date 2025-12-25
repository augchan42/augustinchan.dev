# Architecture Decision Records (ADRs)

This directory contains Architecture Decision Records (ADRs) for augustinchan.dev.

## What is an ADR?

An Architecture Decision Record (ADR) documents an important architectural decision made in the project, including:
- The context and problem statement
- The decision that was made
- The consequences of that decision

ADRs help future maintainers (including yourself) understand **why** decisions were made, not just **what** was decided.

## Format

Each ADR follows this structure:

```markdown
# ADR XXXX: [Title]

## Status
[Proposed | Accepted | Rejected | Deprecated | Superseded]

## Context
[What is the issue that we're seeing that is motivating this decision or change?]

## Decision
[What is the change that we're proposing and/or doing?]

## Consequences
[What becomes easier or more difficult to do because of this change?]
```

## ADR Index

- [ADR 0001: Static RSS Feed Generation with Prebuild Script](./0001-static-rss-feed-generation.md) - Accepted (2025-12-25)

## Creating a New ADR

1. Copy the template or use the structure above
2. Number it sequentially (e.g., `0002-your-decision.md`)
3. Fill in all sections with relevant details
4. Add it to the index in this README
5. Commit it along with the implementation

## When to Write an ADR

Write an ADR when you make a decision that:
- Affects the architecture or structure of the application
- Has significant trade-offs
- Future developers might question or want to change
- Involves choosing between multiple viable options

## References

- [ADR GitHub Organization](https://adr.github.io/)
- [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
