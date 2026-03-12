# Digital Wedding Invitation Template

> A fully responsive, interactive digital wedding invitation built with
> Next.js App Router (v16) and modern React tooling. This repository serves
> as a customizable template for creating elegant wedding sites with
> RSVP, galleries, animations and more.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.0-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18.2-0055FF)](https://www.framer.com/motion/)

## 🚀 Overview

This project demonstrates a modern digital wedding invitation suitable for
couples looking to send interactive, mobile-friendly invites. The sample
site is configured for Vijay & Trisha's wedding (March 15, 2026) but can
be adapted for any event. Features include personalized greetings,
animated countdowns, photo galleries, RSVP forms, and celebratory effects.

Guests access the site with `?guest=Name` to see a tailored message, RSVP
through a custom form, and enjoy animations like temple doors, falling
flowers, and confetti.

---

## ✨ Key Features

- **Animated Intro** – Temple door opening using Framer Motion.
- **Background Effects** – Continuous falling flowers animation.
- **Countdown Timer** – Live countdown to the wedding date.
- **Personalization** – Query parameter support for guest names.
- **Gallery** – Lightbox carousel of photos.
- **RSVP & Confirmation** – Form with validation, API route, and optional
  email notification.
- **Celebration Screen** – Confetti and thank‑you message post‑RSVP.
- **Responsive & Accessible** – Mobile-first design with WCAG-friendly
  components using shadcn/ui (Radix primitives).
- **Dark/Light themes** – Toggleable color schemes via `next-themes`.
- **PDF Export** – Export invite as PDF using `html2pdf.js`.
- **Analytics** – Vercel Analytics integration.

---

## 🛠️ Tech Stack

- **Next.js 16 (App Router)**
- **React 19 + TypeScript 5**
- **Tailwind CSS 4** with PostCSS
- **Framer Motion** for animations
- **shadcn/ui** (Radix UI) component library
- **Zod + React Hook Form** for validation
- Additional libs: `sonner`, `embla-carousel-react`, `recharts`, `emailjs-com`,
  `@vercel/analytics`, `html2pdf.js`, `date-fns`, etc.

---

## 📁 Project Structure

```
app/
  layout.tsx
  page.tsx
  globals.css
  api/confirm-attendance/route.ts
  celebration/page.tsx
components/
  WeddingInvitation.tsx
  TempleDoorIntro.tsx
  HeroSection.tsx
  CountdownTimer.tsx
  WeddingDetails.tsx
  Gallery.tsx
  GuestConfirmation.tsx
  CelebrationScreen.tsx
  FallingFlowers.tsx
  LoadingScreen.tsx
  theme-provider.tsx
  ui/      shadcn/ui components
hooks/
  useInvitation.ts
  use-toast.ts
  use-mobile.ts
lib/
  utils.ts
public/
  images/
  music/
styles/
  globals.css
bckup/           backup components
components.json  shadcn/ui config
package.json
tsconfig.json
next.config.mjs
tailwind.config.js
README.md
```

---

## 🧑‍💻 Getting Started

### Requirements

- Node.js ≥18
- pnpm ≥8 (npm/yarn also supported)
- Git

### Installation

```bash
git clone <repo-url>
cd <repo-directory>
pnpm install
cp .env.example .env.local           # copy environment variables
```

### Development

```bash
pnpm dev
# open http://localhost:3000?guest=John
```

Hot reload is enabled; edits refresh automatically.

### Build & Production

```bash
pnpm build
pnpm start                     # runs on http://localhost:3000
```

### Linting

```bash
pnpm lint
```

pnpm build

# Start production server

pnpm start

# Server runs on http://localhost:3000

````

### Linting

Check code quality and TypeScript errors:

```bash
pnpm lint
````

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the project root with the following optional variables:

```ini
# EmailJS Configuration (for sending confirmation emails)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Database Configuration (optional - e.g., Supabase, MongoDB, Firebase)
DATABASE_URL=your_database_connection_string
```

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser and safe for public keys only.

### Customizing Wedding Details

Edit the following components to customize wedding information:

- **HeroSection.tsx** – Couple names and greeting messages
- **CountdownTimer.tsx** – Wedding date configuration (currently set to March 15, 2026)
- **WeddingDetails.tsx** – Venue name, address, time, and description
- **Gallery.tsx** – Photo URLs and gallery images

Example date configuration in CountdownTimer:

```typescript
const weddingDate = new Date("2026-03-15T17:00:00+05:30").getTime();
```

### Theme Customization

Colors and fonts are set in `app/globals.css` with a luxury royal sandal + gold palette:

```css
:root {
  /* Luxury Royal Sandal + Gold Palette */
  --background: #f7f3eb;
  --foreground: #4a3b2a;
  --card: #fff8e7;
  --card-foreground: #4a3b2a;
  --popover: #fff8e7;
  --popover-foreground: #4a3b2a;
  --primary: #d4af37; /* Gold */
  --primary-foreground: #4a3b2a;
  --secondary: #b8962e; /* Darker gold */
  --secondary-foreground: #4a3b2a;
  --muted: #e8d3a5; /* Light gold */
  --muted-foreground: #4a3b2a;
  --accent: #e8d3a5;
  --accent-foreground: #4a3b2a;
  --destructive: #dc2626;
  --destructive-foreground: #ffffff;
  --border: #d4af37;
  --input: #fff8e7;
  --input-foreground: #4a3b2a;
  --ring: #d4af37;
  --chart-1: #d4af37;
  --chart-2: #e8d3a5;
  --chart-3: #b8962e;
}
```

Fonts used: Playfair Display, Cinzel, Great Vibes, Cormorant Garamond, Lora.

---

## 📡 API Reference

### POST `/api/confirm-attendance`

Records guest attendance and RSVP information.

**Request Body:**

```json
{
  "name": "Guest Name",
  "email": "guest@example.com",
  "phone": "+1234567890",
  "dietary": "Vegetarian",
  "guests": 2,
  "message": "Looking forward to the celebration!",
  "attending": "yes"
}
```

**Response (Success):**

```json
{
  "success": true,
  "message": "Attendance recorded successfully"
}
```

**Response (Error):**

```json
{
  "error": "Invalid email format",
  "status": 400
}
```

**Validation Requirements:**

- `name` (required) – Guest's full name
- `email` (required) – Valid email address format
- `phone` (required) – Contact phone number
- `attending` (required) – "yes" or "no"
- `dietary` – Dietary restrictions (optional)
- `guests` – Number of additional guests (optional)
- `message` – Personal message (optional)

---

## 🎨 Component Guide

### Core Components

**WeddingInvitation.tsx**

- Main orchestrating component
- Manages flow: Door intro → Hero → Details → Gallery → Confirm → Celebration
- Passes guest name through the entire component tree

**TempleDoorIntro.tsx**

- Renders animated temple doors with Framer Motion
- Triggers on first load
- Can be skipped with user interaction

**CountdownTimer.tsx**

- Displays time remaining until wedding
- Updates every second
- Animated progress visualization

**GuestConfirmation.tsx**

- React Hook Form with Zod validation
- Collects guest details for RSVP
- Submits to `/api/confirm-attendance`

**CelebrationScreen.tsx**

- Post-RSVP celebration view
- Confetti animation
- Personalized thank you message

### UI Components Library

The `components/ui/` directory contains 27+ pre-built shadcn/ui components including:

- Buttons, inputs, forms, dialogs
- Accordion, tabs, dropdown menus
- Carousels, galleries, modals
- Notifications (toast, sonner)
- 100% accessible and customizable

---

## 🔌 Integration Guide

### EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add credentials to `.env.local`:
   ```ini
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_...
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_...
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=key_...
   ```
4. Initialize in your route handler or component

### Vercel Analytics

Analytics are pre-integrated via `@vercel/analytics`. No additional setup required for Vercel deployments.

### Database Integration

To persist RSVP data, add database integration to `/api/confirm-attendance/route.ts`:

```typescript
// Example: Supabase
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(URL, KEY);
await supabase.from("rsvps").insert([data]);
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com) and import project
3. Add environment variables in project settings
4. Deploy with one click

### Deploy to Other Platforms

**Docker:**

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN pnpm install && pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

**Other Platforms:** Next.js is compatible with most Node.js hosting (Netlify, Heroku, Railway, etc.).

---

## 📱 Responsive Design

The site uses Tailwind CSS breakpoints:

- **Mobile** – Below 640px (sm)
- **Tablet** – 640px to 1024px
- **Desktop** – 1024px and above

All components are tested on:

- iPhone 12/13/14 (375px - 428px)
- iPad (768px - 1024px)
- Desktop (1280px+)

---

## ♿ Accessibility

**Implemented Standards:**

- WCAG 2.1 Level AA compliance
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Color contrast requirements
- Focus indicators on interactive elements

Test accessibility:

```bash
# Manual testing with keyboard navigation (Tab key)
# Screen reader testing with NVDA or JAWS
# Chrome DevTools → Lighthouse → Accessibility audit
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Create a feature branch (`git checkout -b feature/your-feature`)
2. Make your changes with clear commit messages
3. Test your changes locally
4. Submit a pull request with description

**Code Standards:**

- Use TypeScript for all components
- Follow existing component patterns
- Keep components small and focused
- Add comments for complex logic
- Test responsiveness across devices

---

## 📦 Package Management

Using **pnpm** for faster, more efficient dependency management:

```bash
# Add a new package
pnpm add package-name

# Update packages
pnpm update

# Remove a package
pnpm remove package-name

# View installed versions
pnpm list
```

---

## 🐛 Troubleshooting

### Development Issues

**Port 3000 already in use:**

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

**Module not found errors:**

```bash
# Clear cache and reinstall
rm -rf node_modules .next
pnpm install
```

**TypeScript errors:**

```bash
# Rebuild TypeScript
pnpm build
```

### Build Issues

**Build fails with memory error:**

```bash
# Increase Node memory
NODE_OPTIONS=--max-old-space-size=4096 pnpm build
```

---

## 📄 License

This project is private and for personal use. All content, design, and code are the property of Vijay & Trisha.

---

## 👥 Credits & Support

**Built by:** The Development Team  
**For:** Vijay & Trisha  
**Powered by:** Next.js, React, Tailwind CSS, and the amazing open-source community

For support or questions, please contact the development team.

---

## 📞 Contact & Inquiries

For questions about this website or custom modifications, please reach out to the project maintainers.

**Last Updated:** March 2025  
**Project Version:** 1.0.0

### Hard-coded Details

Most wedding-specific data is defined in components:

| File                               | What to change                              |
| ---------------------------------- | ------------------------------------------- |
| `components/CountdownTimer.tsx`    | `targetDate` constant (wedding date & time) |
| `components/HeroSection.tsx`       | Couple names and greeting messages          |
| `components/WeddingDetails.tsx`    | Venue name, address, date, timings          |
| `components/GuestConfirmation.tsx` | Contact info, form copy, labels             |

Colors and fonts are set in `app/globals.css`:

```css
:root {
  --background: linear-gradient(135deg, #2b0000 0%, #8b0000 100%);
  --foreground: #ffffff;
  --primary: #8b0000; /* dark red */
  --secondary: #b22222; /* firebrick red */
  --accent: #ff3b3b; /* bright romantic red */
}
```

---

## 📁 Project Structure

```
.
├── app/
│   ├── api/
│   │   └── confirm-attendance/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   └── (shadcn/ui components)
│   ├── CelebrationScreen.tsx
│   ├── CountdownTimer.tsx
│   ├── FallingFlowers.tsx
│   ├── Gallery.tsx
│   ├── GuestConfirmation.tsx
│   ├── HeroSection.tsx
│   ├── LoadingScreen.tsx
│   ├── TempleDoorIntro.tsx
│   ├── WeddingDetails.tsx
│   ├── WeddingInvitation.tsx
│   └── theme-provider.tsx
├── hooks/
│   ├── use-mobile.ts
│   ├── use-toast.ts
│   └── useInvitation.ts
├── lib/
│   └── utils.ts
├── public/
│   ├── Background_Beach_image.png
│   ├── Background_Temple_image.png
│   └── (other assets)
└── styles/
    └── globals.css
```

---

## 🧩 API Endpoints

### `POST /api/confirm-attendance`

Accepts a JSON body with guest information:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+91 91234 56789",
  "attending": "yes",
  "guests": 2,
  "dietary": "vegetarian",
  "message": "Excited to celebrate!"
}
```

Returns:

```json
{
  "success": true,
  "message": "Thank you for confirming your attendance!",
  "data": {
    /* echo of submitted fields */
  }
}
```

The route currently echoes the request but can be extended to save data or trigger emails.

---

## ✨ Customization & Extension

- **Gallery Images**: Place wedding photos under `public/gallery/` and update image references in `components/Gallery.tsx`.
- **Animations**: Customize Framer Motion variants and animation timings in component files for a unique feel.
- **Color Scheme**: Modify the CSS variables in `app/globals.css` to match your wedding theme.
- **Localization**: Add multi-language support by extracting text literals into a translation file.
- **Email/Database Integration**: Extend `api/confirm-attendance/route.ts` to integrate EmailJS, SendGrid, Firebase, Supabase, or MongoDB for storing RSVPs.

---

## ✅ Contributing

This is a personal project created for Vijay & Trisha's wedding invitation. Contributions and improvements are welcome!

### Steps to Contribute

1. Fork the repository on GitHub.
2. Create a feature branch: `git checkout -b feature/my-improvement`.
3. Make your changes and commit with descriptive messages.
4. Push to your fork: `git push origin feature/my-improvement`.
5. Open a pull request describing your changes in detail.

---

## 📄 License

MIT License – see the [LICENSE](LICENSE) file for details.

---

## 🌐 Browser Support

- **Desktop**: Chrome/Edge (latest), Firefox (latest), Safari (latest)
- **Mobile**: iOS Safari, Chrome Mobile (latest versions)
- Full responsive design support across all modern browsers

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your project to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel automatically detects Next.js and deploys with optimal settings
4. Your site will be live with a custom domain option

### Environment Variables on Vercel

In your Vercel project settings:

- Navigate to Settings → Environment Variables
- Add `NEXT_PUBLIC_EMAILJS_*` and `DATABASE_URL` if using services
- Redeploy to apply changes

### Other Hosting Options

- **Netlify**: Deploy Next.js with `next build && next export`
- **AWS**: Use AWS Amplify for automated deployments
- **Self-Hosted**: Run on any Node.js server with `pnpm build && pnpm start`

## 🆘 Support

For issues or customization requests, modify the components directly or refer to the respective library documentation:

- [Next.js Documentation](https://nextjs.org)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Hook Form Documentation](https://react-hook-form.com)

---

Made with love for Vijay & Trisha 💕
