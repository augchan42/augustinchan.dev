# BTQ Network Architecture

## Overview

The BTQ network consists of several interconnected node types and services that work together to provide blockchain consensus, mining pool operations, and block exploration capabilities.

## Architecture Diagram

```
                                    EXTERNAL NETWORK
    ┌─────────────────────────────────────────────────────────────────────────┐
    │                              Miners (Solo & Pool)                        │
    │                                     │                                    │
    │                            Stratum Protocol                              │
    │                                     ▼                                    │
    │  ┌──────────────────────────────────────────────────────────────────┐   │
    │  │                    MINING POOL SERVER                             │   │
    │  │  ┌────────────────────────────────────────────────────────────┐  │   │
    │  │  │                   Mining Core                               │  │   │
    │  │  │  ┌─────────────────┐    ┌─────────────────────────────┐   │  │   │
    │  │  │  │ Connection Mgr  │    │  UTXO Consolidation Service │   │  │   │
    │  │  │  │ (Ban Logic)     │    │  (Every 10 seconds)         │   │  │   │
    │  │  │  └─────────────────┘    └─────────────────────────────┘   │  │   │
    │  │  │                              │                             │  │   │
    │  │  │            ┌─────────────────┘                             │  │   │
    │  │  │            ▼                                               │  │   │
    │  │  │  ┌─────────────────────────────────────────────────────┐  │  │   │
    │  │  │  │              Payout & Reward Distribution           │  │  │   │
    │  │  │  └─────────────────────────────────────────────────────┘  │  │   │
    │  │  └────────────────────────────────────────────────────────────┘  │   │
    │  │                              │                                    │   │
    │  │                     JSON-RPC (Local)                              │   │
    │  │                     [Planned: Remote]                             │   │
    │  │                              ▼                                    │   │
    │  │  ┌────────────────────────────────────────────────────────────┐  │   │
    │  │  │                      BTQ Node                               │  │   │
    │  │  │  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐  │  │   │
    │  │  │  │  Consensus   │  │  Mempool     │  │  Block Storage  │  │  │   │
    │  │  │  │  (Lithium)   │  │  Management  │  │                 │  │  │   │
    │  │  │  └──────────────┘  └──────────────┘  └─────────────────┘  │  │   │
    │  │  └────────────────────────────────────────────────────────────┘  │   │
    │  └──────────────────────────────────────────────────────────────────┘   │
    │                              │                                           │
    │                         P2P Network                                      │
    │                              │                                           │
    │  ┌───────────────────────────┼───────────────────────────────────────┐  │
    │  │                           ▼                                        │  │
    │  │  ┌────────────────────────────────────────────────────────────┐   │  │
    │  │  │                     SEED NODE                               │   │  │
    │  │  │  ┌──────────────────────────────────────────────────────┐  │   │  │
    │  │  │  │                   BTQ Core                            │  │   │  │
    │  │  │  │  • Peer Discovery & Bootstrap                        │  │   │  │
    │  │  │  │  • Network Health Monitoring                         │  │   │  │
    │  │  │  │  • Block Propagation                                 │  │   │  │
    │  │  │  └──────────────────────────────────────────────────────┘  │   │  │
    │  │  └────────────────────────────────────────────────────────────┘   │  │
    │  │                           SEPARATE PHYSICAL SERVER                 │  │
    │  └───────────────────────────────────────────────────────────────────┘  │
    │                              │                                           │
    │                         P2P Network                                      │
    │                              │                                           │
    │  ┌───────────────────────────┼───────────────────────────────────────┐  │
    │  │                           ▼                                        │  │
    │  │  ┌────────────────────────────────────────────────────────────┐   │  │
    │  │  │                   EXPLORER NODE                             │   │  │
    │  │  │  ┌──────────────────────────────────────────────────────┐  │   │  │
    │  │  │  │                   BTQ Core                            │  │   │  │
    │  │  │  │  • Full Chain Sync                                   │  │   │  │
    │  │  │  │  • Block Data Provider                               │  │   │  │
    │  │  │  └──────────────────────────────────────────────────────┘  │   │  │
    │  │  │                         │                                   │   │  │
    │  │  │                    Block Data                               │   │  │
    │  │  │                         ▼                                   │   │  │
    │  │  │  ┌──────────────────────────────────────────────────────┐  │   │  │
    │  │  │  │            Electors Indexer (Rust)                   │  │   │  │
    │  │  │  │  • Balance Indexing                                  │  │   │  │
    │  │  │  │  • Transaction History                               │  │   │  │
    │  │  │  │  • UTXO Tracking                                     │  │   │  │
    │  │  │  │  [Issue: Race condition under investigation]         │  │   │  │
    │  │  │  └──────────────────────────────────────────────────────┘  │   │  │
    │  │  │                         │                                   │   │  │
    │  │  │                    Indexed Data                             │   │  │
    │  │  │                         ▼                                   │   │  │
    │  │  │  ┌──────────────────────────────────────────────────────┐  │   │  │
    │  │  │  │              BTQ Core Explorer (Web UI)              │  │   │  │
    │  │  │  │  • Mining Difficulty Charts                          │  │   │  │
    │  │  │  │  • Block Distribution                                │  │   │  │
    │  │  │  │  • [Pending] Wallet Address Inspection               │  │   │  │
    │  │  │  │  • [Pending] Full Transaction History                │  │   │  │
    │  │  │  └──────────────────────────────────────────────────────┘  │   │  │
    │  │  └────────────────────────────────────────────────────────────┘   │  │
    │  │                           SEPARATE PHYSICAL SERVER                 │  │
    │  └───────────────────────────────────────────────────────────────────┘  │
    │                                                                          │
    └──────────────────────────────────────────────────────────────────────────┘


                              PUBLIC USERS
    ┌──────────────────────────────────────────────────────────────────────────┐
    │                                                                          │
    │   Browser ──────► Explorer Web UI ──────► Block/TX/Address Data          │
    │                                                                          │
    │   Mining Software ──────► Stratum ──────► Mining Pool ──────► Rewards    │
    │                                                                          │
    └──────────────────────────────────────────────────────────────────────────┘
```

## Node Types

### 1. Seed Node
**Purpose**: Network bootstrap and peer discovery

**Components**:
- BTQ Core (full node)

**Responsibilities**:
- Maintain list of active network peers
- Help new nodes discover the network
- Propagate blocks and transactions
- Provide network health baseline

**Infrastructure**: Dedicated physical server

---

### 2. Explorer Node
**Purpose**: Blockchain data indexing and public exploration

**Components**:
- BTQ Core (full node)
- Electors Indexer (Rust)
- BTQ Core Explorer (Web UI)

**Responsibilities**:
- Full chain synchronization
- Index wallet balances and transaction history
- Provide mining difficulty and block distribution analytics
- Serve public block explorer interface

**Current Status**:
- Mining difficulty and block distribution: **Operational**
- Wallet address inspection: **Pending** (indexer race condition fix)
- Full transaction history: **Pending** (reindex required)

**Infrastructure**: Dedicated physical server

---

### 3. Mining Pool Node
**Purpose**: Coordinate mining operations and distribute rewards

**Components**:
- Mining Core
  - Connection Manager (with ban logic)
  - UTXO Consolidation Service
  - Payout & Reward Distribution
- BTQ Core (currently co-located)

**Responsibilities**:
- Accept miner connections via Stratum protocol
- Distribute work to miners
- Track shares and calculate rewards
- Consolidate UTXOs for efficient payouts
- Distribute mining rewards to participants

**Current Status**:
- Pool stability: **Fixed** (connection exploit patched)
- UTXO consolidation: **Accelerated** (10-second intervals)
- Remote node support: **Planned** (to separate BTQ node)

**Infrastructure**:
- Current: Shared server with BTQ node
- Planned: Separate BTQ node to dedicated server

---

## Data Flow

### Mining Flow
```
Miner → Stratum → Mining Core → BTQ Node → Network Consensus
                      ↓
              Share Tracking
                      ↓
           UTXO Consolidation
                      ↓
            Reward Distribution
                      ↓
                Miner Wallet
```

### Explorer Flow
```
BTQ Network → Explorer BTQ Core → Electors Indexer → Database
                                                         ↓
                            Web UI ← API ← Query Engine ←┘
```

### Network Consensus Flow
```
Seed Node ←──P2P──→ Mining Pool BTQ Node ←──P2P──→ Explorer BTQ Node
    ↑                       ↑                           ↑
    └───────────── New Peers / Block Propagation ───────┘
```

---

## Key Repositories

| Repository | Purpose | Maintainer |
|------------|---------|------------|
| BTQ Core | Blockchain node implementation | Core Team |
| Mining Core | Mining pool server | Barney |
| BTQ Core Explorer | Block explorer web UI | Oscar |
| Electors Indexer | Rust-based chain indexer | Oscar |

---

## Infrastructure Summary

| Node Type | Server | Status |
|-----------|--------|--------|
| Seed Node | Dedicated | Operational |
| Explorer Node | Dedicated | Partial (indexer rework in progress) |
| Mining Pool | Shared with BTQ Node | Operational (separation planned) |

---

## Planned Improvements

1. **Separate Mining Pool from BTQ Node**
   - Prevent cascading failures from resource exhaustion
   - Requires Mining Core code change for remote node connection

2. **Electors Indexer Rewrite**
   - Fix race condition causing intermittent indexing failures
   - Enable full wallet and transaction inspection features

3. **Monitoring & Alerts**
   - Discord integration for real-time network health alerts
   - Color-coded outage reporting for operational clarity

4. **Network Security**
   - Strategic hash rate accumulation pre-mainnet
   - Game-theory modeling for pool size vs network control
