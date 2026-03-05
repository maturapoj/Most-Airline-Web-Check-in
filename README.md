# ✈️ Premium Airline Web Check-in System

A high-fidelity, 5-step web check-in application built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. This project features a modern, airline-inspired UI with a seamless dark mode experience, fluid animations, and a responsive, production-ready layout.

![checkin-demo](https://github.com/user-attachments/assets/6cb278c4-f810-42d2-97f1-22f9936227fc)

## 🚀 Key Features

- **✅ Multi-Step Check-in Flow**: A logical, 5-stage process derived from real-world airline SaaS patterns.
- **✅ Seamless Dark Mode**: Context-aware theme management with a beautiful slate-dark aesthetic.
- **✅ Real-time State Management**: Powered by React Context API for instant passenger selection and detail synchronization.
- **✅ Premium UI/UX**: Mobile-first design using blue gradients, glassmorphism, and smooth micro-animations.
- **✅ Scannable Boarding Passes**: High-fidelity visual cards with mock barcodes and "Add to Apple Wallet" integration.
- **✅ Safety Compliance**: Dedicated dangerous goods policy verification step.
- **✅ Production Ready**: Fully containerized with Docker and optimized for speed and accessibility.

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
│   └── layout.tsx       # Root layout with ThemeWrapper & Context
├── components/          # Reusable UI components
│   ├── BoardingCard.tsx # High-fidelity boarding pass component
│   ├── PassengerCard.tsx # Selectable passenger unit
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
Access the app at [http://localhost:3000](http://localhost:3000).

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

### Tailwind v4 Dark Mode
The system implements a manual theme toggle using a custom Tailwind v4 variant. This allows for precise control over the dark mode transition without relying strictly on system preferences.

```css
/* globals.css */
@custom-variant dark (&:where(.dark, .dark *));
```

### Performance Optimization
The app leverages Next.js **Standalone Output** for Docker, significantly reducing image size by only including the necessary files for production.

## 📄 License
This project is licensed under the MIT License.
