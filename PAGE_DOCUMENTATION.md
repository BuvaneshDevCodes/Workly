# Workly - Complete Page Documentation

## 📄 All Pages Overview

### 1. Landing Page (`/`) 
**File**: `src/app/page.tsx`

**Purpose**: Public-facing homepage for the Workly platform

**Key Sections**:
- Fixed Navbar with backdrop blur
- Hero Section with GSAP animations
  - Floating blob parallax effects
  - Animated title and description
  - CTA buttons
  - Stats cards (Jobs, Users, Companies)
- Features Section (6 cards)
  - Easy Job Search
  - Smart Matching
  - Real-time Notifications
  - Secure Payments
  - Career Growth
  - Expert Support
- Why Us Section with checklist
- Call-to-Action Section with gradient
- Footer with 4-column link grid

**Components Used**:
- HeroSection (with GSAP animations)
- Button
- Navigation links
- Icons (lucide-react)

**Animations**:
- Fade in/down/up effects
- Parallax scrolling
- Floating animations

---

### 2. Login Page (`/auth/login`)
**File**: `src/app/auth/login/page.tsx`

**Purpose**: User authentication entry point

**Key Features**:
- Email address input with icon
- Password input with icon
- "Sign In" button
- Form validation
- Error message display
- "Create Account" link
- "Forgot Password" link

**Form Validation**:
- Email: Required, valid format
- Password: Required field

**On Submit**:
- Validates form
- Shows loading state
- Redirects to `/admin` (dashboard)

**Components Used**:
- Card, CardHeader, CardTitle, CardDescription, CardContent
- Input
- Label
- Button
- lucide-react icons (Mail, Lock)

---

### 3. Register Page (`/auth/register`)
**File**: `src/app/auth/register/page.tsx`

**Purpose**: New user account creation

**Key Fields**:
- Full Name input
- Email input
- Password input (8+ characters)
- Confirm Password input
- Password validation error display
- Terms & Privacy links
- "Create Account" button
- "Already have account? Sign In" link

**Form Validation**:
- All fields required
- Email format validation
- Password minimum 8 characters
- Password confirmation match
- Real-time error display in red

**Components Used**:
- Card components
- Input fields
- Label
- Button
- Icons

---

### 4. Admin Dashboard (`/admin`)
**File**: `src/app/admin/page.tsx`

**Purpose**: Main admin control center with analytics

**Key Sections**:

#### Stats Grid (4 Cards)
- Total Jobs: 2,543 (+12.5%)
- Active Users: 12,847 (+8.2%)
- Total Views: 54,231 (+23.1%)
- Conversions: 8,932 (+5.7%)

Each card includes:
- Icon with colored background
- Percentage change (green indicator)
- Label and value
- Hover shadow effect

#### Performance Overview Chart
- Placeholder for analytics visualization
- Quick stats: Week, Month, Year views
- (Ready for recharts integration)

#### Quick Actions Panel
- 4 buttons: Post New Job, View All Users, Generate Report, Settings
- Primary and outline variants
- System Status section with 3 indicators (Server, Database, API)

#### Recent Applications Table
- Columns: Applicant, Position, Status, Date
- Status badges with color coding:
  - Green: Approved
  - Yellow: Pending
  - Blue: Reviewing
  - Red: Rejected
- Hover effects

**Animations**:
- Fade in up on load
- Slide in left with stagger for stat cards
- Fade in for sections

**Components Used**:
- Card
- Button (primary, outline)
- Table components
- Status badges
- Icons from lucide-react

---

### 5. Jobs Management (`/admin/jobs`)
**File**: `src/app/admin/jobs/page.tsx`

**Purpose**: Create, view, edit, and delete job postings

**Key Features**:

#### Header Section
- Title: "Jobs"
- Description: "Manage all job postings and applicants"
- "Post New Job" button (primary)

#### Search & Filter
- Search bar with icon
- Filter by job title or company name
- Real-time search filtering

#### Jobs Table
**Columns**:
1. Job Title (with posted date)
2. Company name
3. Location
4. Salary range
5. Status (Active/Draft badge)
6. Number of applicants
7. Actions (View, Edit, Delete icons)

**Sample Data** (5 jobs):
- Senior React Developer (Tech Corp, San Francisco)
- UX/UI Designer (Creative Studio, New York)
- Backend Engineer (StartUp Inc, Remote)
- Product Manager (Scale Up, Boston)
- Data Scientist (AI Solutions, Remote)

**Responsive**:
- Table scrolls horizontally on mobile
- Full width on desktop

**Components Used**:
- Input (search)
- Button
- Table elements
- Status badges
- Icons (Eye, Edit2, Trash2, Plus, Search)

---

### 6. Users Management (`/admin/users`)
**File**: `src/app/admin/users/page.tsx`

**Purpose**: Manage user accounts and permissions

**Key Features**:

#### Header Section
- Title: "Users"
- Description: "Manage user accounts and permissions"
- "Add User" button

#### Search & Filter
- Search by name or email
- Role filter (All / Job Seeker / Recruiter)
- Two-column layout on desktop

#### Users Table
**Columns**:
1. Name
2. Email
3. Role (Job Seeker/Recruiter badge)
4. Status (Active/Inactive)
5. Join Date
6. Actions

**Sample Data** (6 users):
- Various roles (Job Seeker, Recruiter)
- Different statuses (Active, Inactive)
- Join dates ranging from 1 day to 3 months ago

**Role Colors**:
- Job Seeker: Green badge
- Recruiter: Blue badge

**Action Buttons**:
- Shield icon (Permissions)
- Edit icon (Modify user)
- Ban icon (Deactivate/Ban)

**Components Used**:
- Input (search)
- Select dropdown (role filter)
- Button
- Table
- Badges
- Icons (Plus, Search, Shield, Edit2, Ban)

---

### 7. Settings Page (`/admin/settings`)
**File**: `src/app/admin/settings/page.tsx`

**Purpose**: Configure platform settings and preferences

**Key Sections**:

#### 1. General Settings Card
- Platform Name input
- Email Address input
- Domain input
- Max Jobs Per Month input
- Save Changes button (primary)
- Icon: Globe

#### 2. Notifications Card
- Email Alerts toggle
- Job Applications toggle
- User Registrations toggle
- System Updates toggle
- Update Notifications button
- Icon: Bell

#### 3. Security Card
- Change Password button
- Enable Two-Factor Authentication button
- Manage API Keys button
- Icon: Lock

#### 4. Database & Backup Card
- Last Backup info display
- Create Backup button (primary)
- Restore from Backup button
- Icon: Database

**Features**:
- Each card has icon, title, description
- Toggle switches for notifications
- Input fields for general settings
- Success message on save (2-second display)
- Form state preserved during interactions

**Components Used**:
- Card, CardHeader, CardTitle, CardDescription, CardContent
- Input
- Label
- Button (primary, outline)
- Icons (Save, Bell, Lock, Globe, Database)
- Checkbox inputs

---

### 8. Admin Layout (`/admin/layout.tsx`)
**File**: `src/app/admin/layout.tsx`

**Purpose**: Wrapper layout for all admin pages

**Structure**:
- Flex container with Sidebar on left
- Main content area takes remaining space
- Responsive margin adjustments (md:ml-64)
- Page padding (4-8 units responsive)

**Metadata**:
- Title: "Admin Dashboard - Workly"
- Description: "Manage your job listings and user accounts"

---

### 9. Sidebar Navigation (`src/components/sidebar/sidebar.tsx`)
**File**: `src/components/sidebar/sidebar.tsx`

**Purpose**: Main navigation for admin panel

**Key Elements**:

#### Mobile Menu Toggle
- Hamburger menu icon (top-left fixed)
- Hidden on desktop (md+)
- Click to show/hide sidebar

#### Logo Section
- Workly logo with gradient background
- Brand name
- Link to dashboard

#### Navigation Menu (4 items)
1. Dashboard → `/admin`
2. Jobs → `/admin/jobs`
3. Users → `/admin/users`
4. Settings → `/admin/settings`

**Active State**:
- Uses `usePathname()` hook
- Blue background (#2563EB) for active item
- White text for active state

#### User Profile Section
- Avatar circle with initials "JD"
- User name: "John Doe"
- User role: "Admin"
- Logout button

#### Features
- **Mobile**: `-translate-x-full` when closed, `translate-x-0` when open
- **Desktop**: Always visible, fixed width (w-64)
- **Overlay**: Semi-transparent background on mobile when open
- **Responsive**: Click overlay to close on mobile

**Components Used**:
- Icons (LayoutDashboard, Briefcase, Users, Settings, LogOut, Menu, X)
- Next.js Link
- usePathname hook
- useState for mobile menu

---

### 10. Hero Section Component (`src/components/hero-section.tsx`)
**File**: `src/components/hero-section.tsx`

**Purpose**: Animated hero section with GSAP scroll effects

**Features**:
- Animated title (0.8s fade-in)
- Animated description (0.6s fade-in with delay)
- Animated buttons (0.6s fade-in with delay)
- Animated stats cards (0.6s fade-in with delay)
- Floating blobs (parallax with sine easing)
- Scroll trigger animations (30% start point)
- Background parallax effects

**Uses**:
- GSAP timeline for staggered animations
- ScrollTrigger for scroll-based animations
- Refs for DOM element targeting
- Floating blob animations with infinite repeat

---

## 🎨 Design System Summary

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | #2563EB | Buttons, active states, links |
| Primary Hover | #1D4ED8 | Button hover state |
| Secondary Green | #10B981 | Success, secondary actions |
| Light Background | #F8FAFC | Page background |
| Card White | #FFFFFF | Card backgrounds |
| Section Gray | #F1F5F9 | Section backgrounds |
| Text Heading | #0F172A | Headings, primary text |
| Text Body | #334155 | Body text |
| Text Muted | #64748B | Muted/secondary text |
| Border | #E2E8F0 | Borders, dividers |

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, etc.)
- **Headings**: Bold, 2xl-4xl sizes
- **Body**: Regular weight, 14-16px
- **Small Text**: 12px for meta information

### Component Variants

#### Button
- **Variants**: default, destructive, outline, secondary, ghost, link
- **Sizes**: sm, default, lg, icon
- **States**: normal, hover, disabled, loading

#### Input
- **States**: default, focus (blue ring), disabled, error
- **Sizes**: Various with proper padding
- **Icons**: Support for left/right icons

#### Card
- **Padding**: Consistent spacing (6 units)
- **Border**: Thin border with default color
- **Shadow**: Light shadow on hover
- **Background**: White with light backgrounds inside

---

## 📊 Page Performance

| Page | Components | Animations | Features |
|------|-----------|-----------|----------|
| Landing | Hero, Cards, Footer | GSAP, CSS | 6+ animations |
| Login | Form, Inputs, Button | None | Validation, redirect |
| Register | Form, Inputs, Button | None | Validation, error handling |
| Dashboard | Stats, Chart, Table, Sidebar | Fade-in, slide-in | Real-time data |
| Jobs | Table, Search, Actions | Fade-in | Filter, search |
| Users | Table, Search, Filter | Fade-in | Multi-filter |
| Settings | Forms, Toggles, Buttons | Fade-in | Multiple sections |

---

## 🔗 Internal Links Flow

```
/ (Landing)
├─ /auth/login → [redirects to /admin after success]
├─ /auth/register → /auth/login
└─ /admin (Dashboard)
    ├─ /admin/jobs
    ├─ /admin/users
    └─ /admin/settings
```

---

**Last Updated**: 2024
**Version**: 1.0.0
**Status**: ✅ Complete & Ready for Integration
