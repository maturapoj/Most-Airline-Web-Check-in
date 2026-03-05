# ✈️ Premium Airline Web Check-in System

A high-fidelity, 5-step web check-in application built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. This project features a modern, airline-inspired UI with a seamless dark mode experience, fluid animations, and a responsive, production-ready layout.

![checkin-demo](https://github.com/user-attachments/assets/88d2245c-0ba0-4abd-a8d6-e9bca3229d73)

## 🚀 Key Features

- **✅ Multi-Step Check-in Flow**: A logical, 5-stage process derived from real-world airline SaaS patterns.
- **✅ Intelligent Route Protection**: Integrated `StepGuard` to ensure linear progression and prevent unauthorized step skipping.
- **✅ Seamless Dark Mode**: Context-aware theme management with a beautiful slate-dark aesthetic across all components and alerts.
- **✅ Real-time State Management**: Powered by React Context API for instant passenger selection and detail synchronization.
- **✅ Realistic Feedback**: Simulated API delays and polished loading states for a premium, non-instantaneous feel.
- **✅ Robust Error Handling**: Form validation and scannable error alerts for incorrect booking information.
- **✅ Premium UI/UX**: Mobile-first design using blue gradients, glassmorphism, and smooth micro-animations.
- **✅ Scannable Boarding Passes**: High-fidelity visual cards with mock barcodes and "Add to Apple Wallet" integration.
- **✅ Production Ready**: Fully containerized with Docker and optimized for performance using standalone output.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Core logic**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State**: React Context API
- **Tooling**: [Bun](https://bun.sh/)
- **DevOps**: Docker & Docker Compose

## 📂 Project Structure

```bash
├── app/
│   ├── checkin/         # Step 1: Booking retrieval & PNR lookup
│   ├── select-pax/      # Step 2: Passenger selection & group check-in
│   ├── pax-info/        # Step 3: Passenger details (Nationality/Phone)
│   ├── dangerous-good/  # Step 4: Safety policy & DG acknowledgement
│   ├── boarding-pass/   # Step 5: Final boarding pass generation
│   ├── globals.css      # Design system & Tailwind v4 config
│   └── layout.tsx       # Root layout with ThemeWrapper & StepGuard
├── components/          # Reusable UI components
│   ├── BoardingCard.tsx # High-fidelity boarding pass component
│   ├── PassengerCard.tsx # Selectable passenger unit
│   ├── StepGuard.tsx    # Intelligent route management
│   ├── ThemeToggle.tsx  # Smooth theme switcher
│   └── ...
└── store/
    └── CheckinContext.tsx # Centralized business logic & global state
```

## 🏁 Getting Started

### 1. Prerequisites
Ensure you have [Bun](https://bun.sh/) installed.

### 2. Installation
```bash
git clone <your-repo-url>
cd my-check-in
bun install
```

### 3. Development
Run the development server:
```bash
bun run dev
```
Access the app at [http://localhost:3000](http://localhost:3000). Use **HUUM** and **ABC123** to bypass validation.

## 🛠️ Mock API
The project uses [stubby](https://www.npmjs.com/package/stubby) to provide a mock backend for testing.

To run the mock API independently:
```bash
bun run mock-api
```
The mock server runs on port `8882`.

## 🐳 Docker Support

The application is fully containerized for consistent deployment.

### Using Docker Compose
```bash
docker compose up --build
```

### Using Docker
```bash
docker build -t airline-checkin .
docker run -p 3000:3000 airline-checkin
```

## 🌙 Technical Highlights

### 🛡️ Step Guard & Route Protection
The application utilizes a custom `StepGuard` component that monitors the user's progress. It prevents manual URL entry into later steps (e.g., trying to access `/boarding-pass` directly) and redirects users to their furthest qualified step.

### ⏳ Simulated API & Loading Logic
To provide a realistic user experience, `async` loading states and artificial delays are implemented across the flow, ensuring that the interface provides clear feedback during transitions.

### 🎨 Tailwind v4 Dark Mode
The system implements a manual theme toggle using a custom Tailwind v4 variant. This allows for precise control over the dark mode transition without relying strictly on system preferences.

```css
/* globals.css */
@custom-variant dark (&:where(.dark, .dark *));
```

## 📄 License
This project is licensed under the MIT License.
