# Architecture Document: Budget Tracker

## 1. System Overview

Budget Tracker is a lightweight client-side application for personal finance management. It follows a simple SPA architecture using Vue.js with reactive state management and LocalStorage for persistence.

## 2. Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Budget Tracker App                        │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐  │
│  │                    Vue.js App                         │  │
│  │                    (index.html)                       │  │
│  └─────────────────────┬───────────────────────────────┘  │
│                        │                                    │
│  ┌─────────────────────┼───────────────────────────────┐  │
│  │              Component Layer                          │  │
│  │  ┌───────────┐  ┌───────────┐  ┌───────────────┐    │  │
│  │  │ Transaction│  │  Summary  │  │ Transaction   │    │  │
│  │  │   Form    │  │  Display  │  │     List      │    │  │
│  │  └───────────┘  └───────────┘  └───────────────┘    │  │
│  └─────────────────────┬───────────────────────────────┘  │
│                        │                                    │
│  ┌─────────────────────┼───────────────────────────────┐  │
│  │              Business Logic                          │  │
│  │  - addTransaction()                                  │  │
│  │  - calculateBalance()                                │  │
│  │  - getTotalByCategory()                              │  │
│  └─────────────────────┬───────────────────────────────┘  │
│                        │                                    │
│  ┌─────────────────────┴───────────────────────────────┐  │
│  │              Storage Layer (LocalStorage)            │  │
│  │  - budget_transactions[]                             │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## 3. Data Models

### Transaction
```typescript
interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description?: string;
  date: string;
}
```

## 4. File Structure

```
budget-tracker/
├── index.html          # Main application
├── SPEC.md            # Specification
├── API.md             # API documentation
├── specs/             # This documentation
└── test/              # Tests
```

---

*Document Version: 1.0*  
*Created: 2026-03-17*
