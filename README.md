# 🧮 React Calculator App (TypeScript + SCSS)

A stylish and responsive calculator built with **React**, **TypeScript**, and **SCSS** — featuring custom operator parsing and safe math evaluation using `mathjs`.

![screenshot]("./public/screenshots/calculator-screenshot.png") <!-- Optional: Add your screenshot here -->

---

## ✨ Features

- Built with **React + TypeScript**
- Responsive UI styled with **SCSS**
- Supports:
  - `+ − × ÷ % . ±` operators
  - Safe evaluation using [`mathjs`](https://mathjs.org/)
- Component-based architecture
- Clean and extendable code

---

## 📦 Tech Stack

- **React** (Functional Components)
- **TypeScript**
- **SCSS** (modular styling)
- **mathjs** (safe expression evaluation)

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ibogoeska/react-simple-calculator.git .

```

### 2. Install dependencies

bash

npm install

### 3. Run the app

bash

npm run dev

# 🧠 Folder Structure

src/
├── components/ # Reusable UI components
│ ├── Calculator.tsx
│ ├── Display.tsx
│ ├── Button.tsx
│ └── ButtonGrid.tsx
├── styles/
│ └── calculator.scss
├── App.tsx # Main App container
└── index.tsx # React entry point

# ✅ To Do / Ideas

- Add keyboard support
- Add parentheses ()
- Implement light/dark themes
- Add calculation history
- Add tests (Jest + React Testing Library)
