# Al-Aarif Islamic Institute Website

A modern, responsive website for Al-Aarif Islamic Institute featuring registration information, program details, donation capabilities, and daily Islamic inspiration.

![Al-Aarif Islamic Institute](public/hero_student.jpg)

## Features

- **Announcement Section** - Registration announcements for new academic year
- **Daily Inspiration** - Hadith and Quran verse of the day
- **Current Campaigns** - Fundraising campaigns with visual materials
- **Programs Information** - Detailed information about Qur'an and Aalim programs
- **Online Registration** - Student registration form with Gmail integration
- **Donation Section** - Multiple donation methods with pledge form download
- **Contact Information** - Easy contact via Gmail integration

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 3.4
- **UI Components:** shadcn/ui
- **Animations:** GSAP + ScrollTrigger
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd al-aarif-islamic-institute
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── public/              # Static assets
│   ├── campaign1.png
│   ├── campaign2.png
│   ├── classroom.jpg
│   ├── hero_student.jpg
│   ├── mosque_sky.jpg
│   ├── students_group.jpg
│   └── *.pdf           # Pledge forms and documents
├── src/
│   ├── components/     # UI components
│   │   └── ui/        # shadcn/ui components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── App.tsx        # Main application component
│   ├── index.css      # Global styles
│   └── main.tsx       # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Key Features Explained

### Registration System
- Clicking "Register Now" opens a registration form modal
- Form data is pre-filled into a Gmail compose window
- Email is sent to: `alaarifislamicins@gmail.com`

### Donation Integration
- E-Transfer: `alaarifislamicins@gmail.com`
- Downloadable pledge form (PDF)
- Email signup for campaign updates
- Charity #: 81184 5189 RR0001

### Contact Functionality
- "Send a Message" button opens Gmail with pre-filled recipient
- Contact email: `alaarifislamicins@gmail.com`

## Color Scheme

- **Primary Background:** `#F6F7F4` (Soft off-white)
- **Secondary Background:** `#0B3A2C` (Deep forest green)
- **Accent:** `#C9A45C` (Warm gold)
- **Text Primary:** `#111111`
- **Text Secondary:** `#6B6F5A`

## Fonts

- **Headings:** Playfair Display
- **Body:** Inter

## License

This project is created for Al-Aarif Islamic Institute.

## Contact

- **Email:** alaarifislamicins@gmail.com
- **Phone:** +1 (613) 662-7043
- **Address:** 4269 Limebank Rd, Ottawa, ON K1V 1G5
- **Website:** https://al-aarif.org/
