# 🛒 বাজার দর (Bazar Dor)

A responsive web app that shows daily prices of essential goods (rice, lentils, oil, vegetables, fish, meat, eggs & dairy, spices) across different markets in Bangladesh. All content is in Bangla, with Bengali digits.

---

## ✨ Features

- **Navbar** with logo, Bangla date, category links (active category highlighted) and auth buttons
- **Price ticker (marquee)**: infinite scrolling strip with `emoji + name + price/unit + ▲/▼ %`
- **Hero banner** with a CTA that smooth-scrolls to the `#সব-পণ্য` section
- **Home sections**
  - আজ দাম বেড়েছে ▲ (top 6 risers)
  - আজ দাম কমেছে ▼ (top 6 fallers)
  - সব পণ্য (all products in a responsive grid)
- **Product card**: emoji, name, unit, today's price and change badge (red = up, green = down, gray = flat)
- **Category page**: sort by price (default / low to high / high to low), skeleton loading, 404-style empty state
- **Product detail page** (protected): min / max / average price and a market-wise price table
- **Authentication** with BetterAuth: email + password, Google and GitHub
- **Profile page** with name update and sign out
- **Toast notifications** for sign in, sign up, sign out, validation and errors
- **Skeleton loaders** for cards, header user menu, profile and detail page
- Fully responsive: mobile, tablet and desktop

---

## 🧰 Tech Stack

| Area | Tech |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) + TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/) |
| Auth | [Better Auth](https://www.better-auth.com/) |
| Database | MongoDB (via the Better Auth MongoDB adapter) |
| Toasts | [Sonner](https://sonner.emilkowal.ski/) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| Ticker | [react-marquee-text](https://www.npmjs.com/package/react-marquee-text) |

---

## 🔌 API

Product and category data come from a public API:

| Endpoint | Description |
|---|---|
| `GET https://api.api-store.workers.dev/api/bazardor/products` | All products with prices, change and market data |
| `GET https://api.api-store.workers.dev/api/bazardor/categories` | All categories |

---

## 🗺️ Routes

| Route | Description | Access |
|---|---|---|
| `/` | Home: banner + price sections | Public |
| `/category/[slug]` | Products of one category, with sorting | Public |
| `/product/[slug]` | Product detail with market-wise prices | **Login required** |
| `/profile` | User profile | **Login required** |
| `/signin` | Sign in | Public |
| `/signup` | Sign up | Public |

Protected routes are guarded by `proxy.ts` (cookie check, redirects to `/signin`) and by a session check inside the product detail page.

---

## 📁 Project Structure

```
src/
├── proxy.ts                     # Protected route guard
├── app/
│   ├── layout.tsx               # Header, Marquee, Footer, Toaster
│   ├── page.tsx                 # Home
│   ├── (auth)/
│   │   ├── signin/page.tsx
│   │   └── signup/page.tsx
│   ├── api/auth/[...all]/route.ts   # Better Auth handler
│   ├── category/[slug]/         # Category page + loading skeleton
│   ├── product/[slug]/          # Detail page + loading skeleton
│   └── profile/page.tsx
├── components/
│   ├── auth/                    # SignIn, SignUp, SocialButtons, UserMenu, UserAvatar
│   ├── category/                # SortControl, CardSkeleton, EmptyState
│   ├── home/                    # ProductSection, ProductCard, ChangeBadge
│   ├── product/                 # PriceSummary, MarketList
│   ├── Banner.tsx
│   ├── CurrentDate.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Marquee.tsx
│   ├── NavItem.tsx
│   └── NavLink.tsx
├── lib/
│   ├── auth.ts                  # Better Auth server config
│   └── auth-client.ts           # Better Auth client
└── types/
    └── product.ts
```

---

## 🚀 Getting Started

### 1. Clone and install

```bash
git clone https://github.com/<your-username>/bazar-dor.git
cd bazar-dor
npm install
```

### 2. Environment variables

Create a `.env.local` file in the project root:

```env
BETTER_AUTH_SECRET=your_long_random_secret
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=mongodb+srv://USER:PASS@cluster.mongodb.net/bazardor

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

Generate a secret with:

```bash
openssl rand -base64 32
```

### 3. OAuth setup (for Google / GitHub login)

| Provider | Callback URL |
|---|---|
| Google | `http://localhost:3000/api/auth/callback/google` |
| GitHub | `http://localhost:3000/api/auth/callback/github` |

For production, replace `http://localhost:3000` with your live domain and update `BETTER_AUTH_URL`.

### 4. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

---

## 🔐 Authentication Flow

- **Sign up** (name, email, password, confirm password): on success, redirects to `/signin`
- **Sign in** (email, password): on success, redirects to `/`; shows an error toast on failure
- **Social login** (Google / GitHub): on success, redirects to `/`
- **Sign out**: from the header dropdown or the profile page, with a toast
- Email verification and forgot-password are intentionally not implemented

---

## 📱 Responsive Design

- Product grid: 1 column (mobile) → 2 (`sm`) → 3 (`lg`) → 4 (`xl`)
- Banner stacks on screens below `lg`
- Category nav and price table scroll horizontally on small screens
- Footer stacks on mobile

---

---

## Live Link
- https://bazar-dor-x3nc.vercel.app/


