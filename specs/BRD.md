# Business Requirements Document (BRD): Budget Tracker

## 1. Project Overview

**Project Name:** Budget Tracker  
**Type:** Single-Page Web Application  
**Core Functionality:** A personal finance application to track income and expenses with category management, balance calculation, and localStorage persistence.

**Target Users:** Individuals who want a simple, browser-based tool to manage personal finances without accounts or servers.

---

## 2. Features

### Core Features
- **Add Income:** Record money received with category
- **Add Expenses:** Track spending with category
- **Category Tracking:** Organize transactions by category
- **Balance Calculation:** Real-time balance display
- **LocalStorage Persistence:** Data saved in browser

### UI Features
- **Simple Interface:** Clean, intuitive design
- **Transaction List:** View all transactions
- **Summary Display:** Show total income, expenses, balance

---

## 3. Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend Framework** | Vue.js (CDN) |
| **Styling** | CSS |
| **Storage** | LocalStorage |
| **Deployment** | Static HTML |

---

## 4. User Stories

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| US1 | As a user, I want to add income | Form to add income amount and category |
| US2 | As a user, I want to add expenses | Form to add expense amount and category |
| US3 | As a user, I want to see my balance | Display shows current balance |
| US4 | As a user, I want to view transaction history | List shows all past transactions |

---

## 5. Requirements

### Functional Requirements
- FR1: Add income transaction
- FR2: Add expense transaction
- FR3: Assign category to transaction
- FR4: Calculate total income
- FR5: Calculate total expenses
- FR6: Calculate current balance
- FR7: Display transaction history
- FR8: Persist data in LocalStorage

---

## 6. Future Enhancements

| Enhancement | Description | Priority |
|-------------|-------------|----------|
| FE1 | Charts and graphs | Medium |
| FE2 | Budget limits | Medium |
| FE3 | Export to CSV | Low |
| FE4 | Recurring transactions | Low |
| FE5 | Multiple accounts | Low |

---

*Document Version: 1.0*  
*Created: 2026-03-17*
