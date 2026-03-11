# Vijay & Trisha – Digital Wedding Invitation

> A fully responsive, animated web invitation built with Next.js 16

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.0-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18.2-0055FF)](https://www.framer.com/motion/)

This repository contains the source code for a digital wedding invitation website for Vijay & Trisha. The site offers a rich, interactive experience with personalized greetings, animated countdowns, photo galleries, RSVP forms, and more.

---

## 🎯 Features

- Temple-door opening animation with Framer Motion
- Query-parameter personalization (`?guest=Name`)
- Animated countdown clock to the wedding date
- Responsive, lightbox photo gallery
- RSVP form with client-side validation and confirmation animation
- Celebration confetti animation on successful submission
- Mobile-first, fully responsive design
- Dark and light color palettes with premium typography
- Accessible components based on shadcn/ui
- API route for attendance confirmations
- Optional EmailJS integration for notifications
- Easily customizable hard-coded details (date, venue, couple names)

---

## 🛠 Tech Stack

| Layer         | Technology                                        |
| ------------- | ------------------------------------------------- |
| Framework     | Next.js 16.1.6 (App Router)                       |
| Language      | TypeScript 5.7.3                                  |
| Runtime       | React 19.2.4                                      |
| Styling       | Tailwind CSS 4.2.0                                |
| Animations    | Framer Motion 11.18.2                             |
| UI Kit        | [shadcn/ui](https://ui.shadcn.com) + Lucide Icons |
| Forms         | React Hook Form 7.71.1                            |
| State & Hooks | Custom hooks under `hooks/`                       |
| Deployment    | Vercel / any Node.js compatible host              |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io/) (the repo uses `pnpm` for package management or npm/yarn)

### Installation

```bash
git clone https://github.com/your-org/wedding-invitation.git
cd wedding-invitation
pnpm install
# or npm install / yarn install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will reload on file changes.

### Build & Production

```bash
pnpm build
pnpm start           # serves the optimized build on localhost:3000
```

Deploy to Vercel with a single click or connect your repo to any CI/CD pipeline for automatic deployments.

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file (ignored by Git) and populate any of the following:

```ini
# Optional EmailJS integration for sending confirmation emails
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Optional database (e.g. Supabase, MongoDB, Firebase)
DATABASE_URL=your_database_connection_string
```

A sample file is included as `.env.example` in the repository.

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
