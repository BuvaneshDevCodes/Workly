# Workly - Job Search Platform

A modern, full-featured job search and recruitment platform built with Next.js, React, Tailwind CSS, and GSAP animations.

## 🎯 Features

### Public Features
- **Landing Page** with animated hero section
- **Responsive Navigation** with backdrop blur effect
- **Feature Cards** showcasing platform benefits
- **GSAP Scroll Animations** with parallax effects
- **User Registration & Login** with form validation
- **Dark/Light Theme** support with CSS variables

### Admin Features
- **Dashboard** with performance metrics and analytics
- **Jobs Management** - Create, edit, delete, and manage job postings
- **Users Management** - View and manage user accounts
- **Settings Panel** - Configure platform settings
- **Responsive Sidebar** with mobile menu toggle
- **Quick Stats & Analytics** cards
- **Recent Applications** tracking
- **System Status** monitoring

## 📁 Project Structure

```
workly/
├── src/
│   ├── app/
│   │   ├── admin/              # Admin dashboard routes
│   │   │   ├── page.tsx        # Dashboard homepage
│   │   │   ├── layout.tsx      # Admin layout with sidebar
│   │   │   ├── jobs/
│   │   │   │   └── page.tsx    # Jobs management
│   │   │   ├── users/
│   │   │   │   └── page.tsx    # Users management
│   │   │   └── settings/
│   │   │       └── page.tsx    # Settings page
│   │   ├── auth/               # Authentication routes
│   │   │   ├── login/
│   │   │   │   └── page.tsx    # Login page
│   │   │   └── register/
│   │   │       └── page.tsx    # Registration page
│   │   ├── globals.css         # Global styles & animations
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Landing page
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   └── label.tsx
│   │   ├── hero-section.tsx    # Hero with GSAP animations
│   │   └── sidebar/
│   │       └── sidebar.tsx     # Admin sidebar navigation
│   └── lib/
│       └── utils.ts            # Utility functions (cn)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🎨 Theme & Colors

The platform uses a light theme with CSS variables for consistency:

- **Primary**: `#2563EB` (Blue)
- **Secondary**: `#10B981` (Green)
- **Background Main**: `#F8FAFC` (Light Slate)
- **Background Card**: `#FFFFFF` (White)
- **Text Heading**: `#0F172A` (Dark Slate)
- **Text Body**: `#334155` (Slate)
- **Text Muted**: `#64748B` (Light Slate)
- **Border**: `#E2E8F0` (Very Light Slate)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📋 Pages & Routes

### Public Routes
- `/` - Landing page with hero and features
- `/auth/login` - User login (redirects to /admin on success)
- `/auth/register` - User registration

### Admin Routes (Protected)
- `/admin` - Dashboard with analytics
- `/admin/jobs` - Jobs management table
- `/admin/users` - Users management table
- `/admin/settings` - Platform settings

## 🛠 Technology Stack

- **Framework**: Next.js 16.1.1
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4, CSS Variables
- **Icons**: lucide-react
- **Animations**: GSAP with ScrollTrigger
- **Components**: shadcn/ui (custom-built)
- **Utilities**: clsx, tailwind-merge, class-variance-authority
- **Accessibility**: Radix UI
- **Package Manager**: pnpm

## 📦 Key Dependencies

```json
{
  "next": "^16.1.1",
  "react": "^19.2.3",
  "tailwindcss": "^4.0.0",
  "gsap": "^3.12.2",
  "lucide-react": "^latest",
  "class-variance-authority": "^latest",
  "clsx": "^latest",
  "tailwind-merge": "^latest",
  "@radix-ui/react-label": "^latest",
  "@radix-ui/react-slot": "^latest"
}
```

## 🎬 Animation Features

### Scroll Animations (GSAP)
- Floating blob parallax effects
- Fade-in entrance animations
- Parallax text animations
- ScrollTrigger integration

### CSS Animations
- fadeInUp
- fadeInDown
- slideInLeft
- slideInRight
- scaleIn
- pulse-soft
- float
- glow

## 🔐 Authentication Flow

1. User navigates to `/auth/login`
2. Enters credentials (email & password)
3. Form validates input
4. On successful login, redirects to `/admin`
5. User sees dashboard with navigation sidebar

## 📊 Dashboard Components

### Admin Dashboard
- **Stats Cards**: Total Jobs, Active Users, Total Views, Conversions
- **Performance Chart**: Placeholder for analytics visualization
- **Quick Actions**: Common admin tasks
- **System Status**: Server, Database, API health indicators
- **Recent Applications**: Table of latest job applications

### Navigation
- Dashboard (home)
- Jobs management
- Users management
- Settings
- User profile & logout

## 🎯 Development Workflow

1. Create feature branch
2. Make changes following the existing structure
3. Test on localhost:3000
4. Run build to check for errors
5. Commit and push changes

## 📝 Component Guidelines

### Button Component
```tsx
<Button className="bg-[var(--primary)] hover:bg-[#1D4ED8] text-white">
  Click me
</Button>
```

### Input Component
```tsx
<Input
  placeholder="Enter text..."
  className="border-[var(--border-default)] bg-[var(--bg-section)]"
/>
```

### Card Component
```tsx
<Card className="bg-[var(--bg-card)] border-[var(--border-default)]">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

## 🎨 Color Usage in Components

Always use CSS variables for colors:
- Text: `text-[var(--text-heading)]`, `text-[var(--text-body)]`
- Background: `bg-[var(--bg-card)]`, `bg-[var(--bg-section)]`
- Border: `border-[var(--border-default)]`
- Primary Actions: `bg-[var(--primary)]`

## 📱 Responsive Design

- **Mobile First**: All designs start mobile
- **Breakpoints**: 
  - `md`: 768px (tablet)
  - `lg`: 1024px (desktop)
  - `xl`: 1280px (wide)
  - `2xl`: 1536px (ultra-wide)

## 🐛 Common Issues & Solutions

### GSAP animations not loading
- Ensure GSAP is installed: `pnpm add gsap`
- Check ScrollTrigger plugin is registered

### Sidebar not appearing on mobile
- Clear browser cache
- Check `isOpen` state in sidebar.tsx
- Verify mobile menu button is clickable

### Theme colors not applying
- Check CSS variable names in globals.css
- Ensure Tailwind CSS is properly configured
- Clear `.next` folder and rebuild

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP Documentation](https://greensock.com/docs)
- [Radix UI](https://www.radix-ui.com)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Workly Development Team

---

**Last Updated**: 2024
