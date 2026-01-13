# BTQ Network Technical Update: Strengthening Infrastructure for Mainnet

*A transparent look at recent challenges, fixes, and the path forward*

---

## TL;DR

- **Mining pool crash resolved**: Fixed a sophisticated connection exploit that caused 6 hours of downtime
- **Payout delays addressed**: UTXO consolidation accelerated from 30-second to 10-second intervals
- **Explorer improvements incoming**: Race condition fix in progress, full features returning within days
- **Infrastructure hardening planned**: Separating critical components to prevent cascading failures

---

## What Happened

On testnet, we experienced a targeted attack against the BTQ mining pool that exploited a subtle bug in connection handling. An attacker used automated software to rapidly connect and disconnect from the pool, triggering a memory leak that eventually exhausted system resources and crashed both the mining pool and the co-located BTQ node.

The pool was down for approximately 6 hours before our team identified the root cause and deployed a fix.

**What the attack exploited**: Mining Core's ban logic attempted to ban clients that had already disconnected, causing memory to accumulate without release. By automating thousands of connect-disconnect cycles, the attacker could reliably crash the server.

**The fix**: We now verify connection status before attempting to ban clients, preventing the memory leak entirely. This fix has been deployed and the pool is stable.

---

## Why This Matters (And Why It's Actually Good News)

Testnet exists precisely for situations like this. We'd rather discover and fix these vulnerabilities now—when the stakes are low—than after mainnet launch when real value is at risk.

Key takeaways:

1. **The attack was sophisticated**: This wasn't a random script kiddie. The attacker understood Mining Core internals and crafted a specific exploit.

2. **We caught it and fixed it fast**: 6 hours from attack to fix is solid incident response for a complex issue.

3. **We're battle-testing before mainnet**: Every attack we survive on testnet is one we won't face unprepared on mainnet.

---

## Technical Deep Dive: BTQ Network Architecture

For those who want to understand how the pieces fit together, here's a simplified view of our infrastructure:

### The Three Node Types

**Seed Node**
- Helps new nodes discover the network
- Maintains peer lists and propagates blocks
- Runs on dedicated hardware

**Explorer Node**
- Indexes the blockchain for searchability
- Powers the block explorer web interface
- Shows mining difficulty, block distribution, wallet balances
- Runs on dedicated hardware

**Mining Pool Node**
- Coordinates mining operations
- Distributes work to miners via Stratum protocol
- Handles reward calculations and payouts
- Currently shares hardware with a BTQ node (this is changing)

### The Problem with Co-location

When the mining pool crashed, it took down the BTQ node on the same server. This cascading failure extended our downtime. We're now planning to separate these components so that a pool issue can't crash the underlying node.

---

## UTXO Consolidation: Why Payouts Were Delayed

After the outage, we had a backlog of approximately 22,000 unspent transaction outputs (UTXOs) that needed consolidation before rewards could be distributed efficiently.

**The bottleneck**: BTQ uses Lithium signatures, which are larger than traditional signatures. Combined with high transaction volume, this meant our consolidation service couldn't keep pace.

**The fix**: We increased consolidation frequency from every 30 seconds to every 10 seconds. This reduced the catch-up time from hours to approximately 30 minutes.

---

## Explorer Status Update

The block explorer is currently operating with reduced functionality. Our Rust-based indexer has a race condition that causes intermittent failures when syncing wallet balances and transaction history.

**What's working now**:
- Mining difficulty charts
- Block distribution views
- Basic block exploration

**What's temporarily unavailable**:
- Full wallet address inspection
- Complete transaction history

**ETA for full restoration**: Approximately 2 days. We're rewriting portions of the indexer to eliminate the race condition and will reindex the entire chain once complete.

---

## Network Security: Preparing for Mainnet

Low hash rate networks are inherently vulnerable. With testnet's current hash rate, the network could theoretically be attacked by anyone willing to rent enough compute power. This is expected for a pre-launch network.

Our strategy for mainnet security:

1. **Rapid hash rate growth**: The faster we grow hash rate post-launch, the harder attacks become
2. **Strategic early mining**: Mining a modest percentage (1-10%) during soft launch to ensure organizational presence without dominating the network
3. **Game theory modeling**: Understanding the relationship between pool sizes, pre-mined tokens, and emission schedules to maintain healthy decentralization

We're explicitly *not* doing a large pre-mine. Our philosophy is that network security comes from broad participation, not centralized control.

---

## What's Next

### Immediate (Next 72 Hours)
- [x] Mining pool fix deployed
- [x] UTXO consolidation accelerated
- [ ] Explorer indexer race condition fix
- [ ] Full chain reindex

### Short-term
- [ ] Separate BTQ node from mining pool server
- [ ] Enable Mining Core remote node connections
- [ ] Launch community Discord with developer alert channels

### Ongoing
- Continuous monitoring and incident response
- Documentation and architectural clarity
- Community communication and transparency

---

## A Note on Transparency

We're publishing this technical update because we believe the crypto community deserves to know what's happening under the hood. Too many projects hide their problems until they become catastrophes.

Our approach:
- **Acknowledge issues promptly**
- **Explain what happened technically**
- **Share our fixes and timelines**
- **Learn publicly**

This testnet period is our proving ground. We're going to make mistakes, find bugs, and occasionally have embarrassing outages. What matters is how we respond—and that we emerge stronger each time.

---

## Get Involved

- **Miners**: The pool is back online and accepting connections
- **Developers**: We're opening repository access for community review
- **Everyone**: Discord launching soon for real-time updates and discussion

Thank you for your patience during the outage, and thank you for being part of building something resilient.

---

*Published by the BTQ Core Team*

*Last updated: January 2026*
