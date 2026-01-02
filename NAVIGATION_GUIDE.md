# Workly Platform - User Navigation Flow

## 🗺️ Site Map

```
WORKLY
├── Landing Page (/)
│   ├── Hero Section with Animations
│   ├── 6 Feature Cards
│   ├── Why Us Section
│   ├── CTA Section
│   └── Footer with Links
│
├── Auth Routes (/auth)
│   ├── Login (/auth/login) 
│   │   ├── Email Input
│   │   ├── Password Input
│   │   ├── "Sign In" Button → /admin 🔄 REDIRECTS
│   │   ├── "Create Account" Link → /auth/register
│   │   └── "Forgot Password?" Link
│   │
│   └── Register (/auth/register)
│       ├── Full Name Input
│       ├── Email Input
│       ├── Password Input (8+ chars)
│       ├── Confirm Password
│       ├── "Sign Up" Button
│       ├── Terms & Privacy Links
│       └── "Sign In" Link → /auth/login
│
└── Admin Dashboard Routes (/admin) 🔒
    ├── Dashboard (/admin) - Home
    │   ├── 4 Stats Cards
    │   │   ├── Total Jobs (2,543)
    │   │   ├── Active Users (12,847)
    │   │   ├── Total Views (54,231)
    │   │   └── Conversions (8,932)
    │   ├── Performance Chart
    │   ├── Quick Actions (4 buttons)
    │   ├── System Status
    │   └── Recent Applications Table
    │
    ├── Jobs (/admin/jobs)
    │   ├── "Post New Job" Button
    │   ├── Search Bar
    │   └── Jobs Table
    │       ├── Columns: Title, Company, Location, Salary, Status, Applicants
    │       └── Actions: View, Edit, Delete
    │
    ├── Users (/admin/users)
    │   ├── "Add User" Button
    │   ├── Search Bar
    │   ├── Role Filter (All / Job Seeker / Recruiter)
    │   └── Users Table
    │       ├── Columns: Name, Email, Role, Status, Join Date
    │       └── Actions: Permissions, Edit, Ban
    │
    ├── Settings (/admin/settings)
    │   ├── General Settings
    │   │   ├── Platform Name
    │   │   ├── Email Address
    │   │   ├── Domain
    │   │   └── Max Jobs Per Month
    │   ├── Notifications (4 toggles)
    │   ├── Security (3 buttons)
    │   └── Database Backup
    │
    └── Sidebar Navigation (Fixed Left)
        ├── Logo/Brand
        ├── Dashboard 🔗
        ├── Jobs 🔗
        ├── Users 🔗
        ├── Settings 🔗
        ├── User Profile (Avatar + Name)
        └── Logout Button

```

## 🔄 User Flow - Step by Step

### Flow 1: New User Registration & Login

```
User visits workly.com
         ↓
   Sees Landing Page
         ↓
   Clicks "Get Started" or "Sign In"
         ↓
   Navigates to /auth/login
         ↓
   Clicks "Create Account"
         ↓
   Navigates to /auth/register
         ↓
   Fills Registration Form:
   - Full Name
   - Email
   - Password (8+ chars)
   - Confirm Password
         ↓
   Clicks "Sign Up"
         ↓
   Redirects to /auth/login
         ↓
   Fills Login Form:
   - Email
   - Password
         ↓
   Clicks "Sign In"
         ↓
   ✅ REDIRECTS TO /admin (Dashboard)
         ↓
   Sees Admin Dashboard with:
   - Stats Cards
   - Performance Chart
   - Recent Applications
   - Sidebar Navigation
```

### Flow 2: Existing User Login

```
User visits workly.com/auth/login
         ↓
   Fills Email & Password
         ↓
   Clicks "Sign In"
         ↓
   ✅ REDIRECTS TO /admin
         ↓
   Lands on Dashboard
```

### Flow 3: Exploring Admin Dashboard

```
User at /admin (Dashboard)
         ↓
   ┌─────────────────────────────┐
   │  Can Click on Sidebar Items │
   └──────────┬──────────────────┘
              ↓
       ┌──────┴──────┬──────────┬──────────┐
       ↓             ↓          ↓          ↓
    Jobs         Users    Settings   (Current Page)
       ↓             ↓          ↓
   /admin/     /admin/     /admin/
    jobs       users       settings
       ↓             ↓          ↓
   Table with   Table with   Form with
   Jobs list    User list    Settings
       ↓             ↓          ↓
   View/Edit/   Filter/     Save
   Delete       Manage      Changes
```

## 🎯 Key Navigation Points

### From Landing Page
- Logo/Home → `/`
- "Sign In" → `/auth/login`
- "Get Started" → `/auth/register`
- Footer links → Various external/internal routes

### From Login Page
- "Sign In" button → `/admin` (after validation)
- "Create Account" → `/auth/register`
- "Forgot Password" → (Future: password reset page)

### From Register Page
- "Sign Up" → `/auth/login` (after registration)
- "Sign In" → `/auth/login`

### From Admin Sidebar (Always Visible)
- Logo → `/admin`
- Dashboard → `/admin`
- Jobs → `/admin/jobs`
- Users → `/admin/users`
- Settings → `/admin/settings`
- User Profile → (Future: profile page)
- Logout → `/auth/login` (future implementation)

## 📱 Mobile Navigation

### On Mobile Devices (< 768px)
- Sidebar starts hidden
- Hamburger menu icon visible (top-left)
- Tap hamburger to show/hide sidebar
- Tap overlay to close sidebar
- Tap any sidebar link to navigate & close menu

### On Tablet/Desktop (≥ 768px)
- Sidebar always visible
- Hamburger menu hidden
- Full-width navigation
- Main content has left margin for sidebar

## 🎨 Visual Hierarchy

### Color Indicators
- **Blue (#2563EB)**: Primary actions, active states, primary buttons
- **Green (#10B981)**: Secondary actions, success states, status active
- **Gray**: Muted text, inactive states, borders
- **Red**: Error messages, rejection status
- **Yellow**: Warning, draft status

### Status Colors in Tables
- Active/Approved → Green background
- Draft/Pending → Yellow background
- Reviewing → Blue background
- Rejected/Inactive → Red background
- Default → Gray background

## ⌚ Time to Navigate

| Action | Time |
|--------|------|
| Landing → Login | 1 click |
| Login → Dashboard | Instant after sign in |
| Dashboard → Jobs | 1 click |
| Jobs → Users | 1 click |
| Users → Settings | 1 click |
| Settings → Dashboard | 1 click |

## 🔐 Protected Routes

Only accessible after login:
- ✅ `/admin`
- ✅ `/admin/jobs`
- ✅ `/admin/users`
- ✅ `/admin/settings`

Public routes (no login needed):
- ✅ `/` (Landing page)
- ✅ `/auth/login`
- ✅ `/auth/register`

*Note: Route protection will be implemented with middleware/NextAuth*

## 🎯 Quick Access Shortcuts

From Dashboard Quick Actions Panel:
- "Post New Job" → `/admin/jobs` + open job form
- "View All Users" → `/admin/users`
- "Generate Report" → (Future: reports page)
- "Settings" → `/admin/settings`

From Recent Applications:
- Click on applicant → View full application (Future)
- Accept/Reject → Update status (Future)

From Job Tables:
- View icon → View job details (Future)
- Edit icon → Edit job posting (Future)
- Delete icon → Remove job (Future)

## 📊 Data Flow

```
User Input
   ↓
Form Validation
   ↓
(Currently: Simulated)
(Future: API Call)
   ↓
Success/Error Response
   ↓
Update UI / Redirect
```

## 🚀 Next Steps for Enhanced Navigation

1. **Add Breadcrumbs**: `/admin > Jobs > View Job #123`
2. **Add Search**: Global search across all pages
3. **Add Filters**: More advanced filtering options
4. **Add Pagination**: For large data tables
5. **Add Favorites**: Save frequent actions
6. **Add Shortcuts**: Keyboard shortcuts for navigation
7. **Add History**: Remember recently visited pages
8. **Add Notifications**: Badge for updates on sidebar items

---

**Last Updated**: 2024
