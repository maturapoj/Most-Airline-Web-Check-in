# ✈️ Premium Airline Web Check-in System

A high-fidelity, 5-step web check-in application built with **Next.js 15+**, **TypeScript**, and **Tailwind CSS v4**. This project features a modern, airline-inspired UI with a seamless dark mode experience and a responsive layout.

![checkin-demo](https://github.com/user-attachments/assets/6cb278c4-f810-42d2-97f1-22f9936227fc)

## 🚀 Key Features

- **Multi-Step Flow**: A complete 5-stage check-in process from booking retrieval to boarding pass.
- **Dark Mode Support**: Context-aware theme management with a beautiful slate-dark aesthetic.
- **Dynamic State Management**: Powered by React Context API for real-time passenger selection and detail updates.
- **High-Fidelity Boarding Passes**: Premium visual cards with scannable barcode mocks and "Add to Apple Wallet" styling.
- **Safety Compliance**: Integrated dangerous goods policy acceptance step.
- **Responsive & Premium UI**: Mobile-first design using blue gradients, glassmorphism, and smooth micro-animations.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API
- **Package Manager**: [Bun](https://bun.sh/)

## 📂 Project Structure

```bash
├── app/
│   ├── checkin/         # Step 1: Booking retrieval
│   ├── select-pax/      # Step 2: Passenger selection
│   ├── pax-info/        # Step 3: Passenger details
│   ├── dangerous-good/  # Step 4: Safety policy
│   ├── boarding-pass/   # Step 5: Final boarding pass
│   ├── globals.css      # Core styles & Tailwind v4 config
│   └── layout.tsx       # Root layout with ThemeWrapper
├── components/          # Reusable UI components
│   ├── BoardingCard.tsx
│   ├── PassengerCard.tsx
│   ├── ThemeToggle.tsx
│   └── ...
└── store/
    └── CheckinContext.tsx # Global state management
```

## 🏁 Getting Started

### 1. Prerequisites
Ensure you have [Bun](https://bun.sh/) installed on your machine.

### 2. Installation
Clone the repository and install dependencies:
```bash
bun install
```

### 3. Development
Run the development server:
```bash
bun run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🐳 Docker Support

You can also run the application using Docker and Docker Compose for a production-like environment.

### Using Docker Compose
```bash
docker compose up --build
```

### Using Docker
```bash
docker build -t airline-checkin .
docker run -p 3000:3000 airline-checkin
```


## 🌙 Dark Mode Implementation
The system uses a manual toggle managed in `CheckinContext`. Tailwind CSS v4 is configured to detect the `.dark` class on the root element using a custom variant:

```css
/* globals.css */
@custom-variant dark (&:where(.dark, .dark *));
```

## 📄 License
This project is licensed under the MIT License.
