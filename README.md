# 🛒 বাজার দর (BazarDor)

**Live demo:** https://bazar-dor-x3nc.vercel.app/

BazarDor is a responsive Bangla web app that shows the daily prices of essential goods in Bangladesh: rice, lentils, oil, vegetables, fish, meat, eggs and dairy, and spices. Users can compare prices across markets, see which products went up or down today, and browse by category. All content is in Bangla with Bengali digits.

---

## 🧰 Technologies Used

| Area | Tech |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) + TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/) |
| Authentication | [Better Auth](https://www.better-auth.com/) (Email/Password, Google, GitHub) |
| Database | MongoDB (Better Auth MongoDB adapter) |
| Notifications | [react-hot-toast](https://react-hot-toast.com/) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| Price ticker | [react-marquee-text](https://www.npmjs.com/package/react-marquee-text) |
| Deployment | [Vercel](https://vercel.com/) |

---

## ✨ Key Features

1. **Live price ticker and daily movers:** an infinite scrolling ticker (`emoji + name + price/unit + ▲/▼ %`), plus home sections for the top 6 risers, top 6 fallers, and all products in a responsive grid.
2. **Category browsing with sorting:** category pages with a sort dropdown (default, price low to high, price high to low), skeleton loading, and a friendly 404-style empty state.
3. **Detailed market-wise prices:** a protected product page showing minimum, maximum and average price, with a table of prices for each market and division.
4. **Secure authentication:** sign up and sign in with email/password, Google or GitHub using Better Auth, with protected routes and toast notifications for success, errors and redirects.
5. **Fully responsive UI:** works on mobile, tablet and desktop, with skeleton loaders and a custom 404 page.

---

## 🗺️ Routes

| Route | Description | Access |
|---|---|---|
| `/` | Home: banner and price sections | Public |
| `/category/[slug]` | Products of one category, with sorting | Public |
| `/product/[slug]` | Product detail with market-wise prices | **Login required** |
| `/profile` | User profile and name update | **Login required** |
| `/signin` | Sign in | Public |
| `/signup` | Sign up | Public |

Protected routes are guarded by `proxy.ts` (cookie check, redirects to `/signin`) and by a session check inside the product detail page.

---

## 🔌 API

| Endpoint | Description |
|---|---|
| `GET https://api.api-store.workers.dev/api/bazardor/products` | All products with prices, change and market data |
| `GET https://api.api-store.workers.dev/api/bazardor/categories` | All categories |

---

## 📁 Project Structure

```
src/
├── proxy.ts                         # Protected route guard
├── app/
│   ├── layout.tsx                   # Header, Marquee, Footer, Toaster
│   ├── page.tsx                     # Home
│   ├── loading.tsx                  # Home skeleton
│   ├── not-found.tsx                # 404 page
│   ├── (auth)/
│   │   ├── signin/page.tsx
│   │   └── signup/page.tsx
│   ├── api/auth/[...all]/route.ts   # Better Auth handler
│   ├── category/[slug]/             # Category page + loading skeleton
│   ├── product/[slug]/              # Product detail + loading skeleton
│   └── profile/page.tsx
├── components/
│   ├── auth/                        # SignIn, SignUp, SocialButtons, UserMenu,
│   │                                # UserAvatar, RedirectToast
│   ├── category/                    # SortControl, CardSkeleton, EmptyState
│   ├── home/                        # ProductSection, ProductCard, ChangeBadge
│   ├── product/                     # PriceSummary, MarketList
│   ├── Banner.tsx
│   ├── CurrentDate.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Marquee.tsx
│   ├── NavItem.tsx
│   └── NavLink.tsx
├── lib/
│   ├── auth.ts                      # Better Auth server config
│   └── auth-client.ts               # Better Auth client
└── Types/
    └── index.ts                     # Product type
```

---

## 🚀 Getting Started

### 1. Clone and install

```bash
git clone https://github.com/prottoym/Bazar-Dor.git
cd Bazar-Dor
npm install
```

### 2. Environment variables

Create a `.env` file in the project root:

```env
BETTER_AUTH_SECRET=your_long_random_secret
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URL=mongodb+srv://USER:PASS@cluster.mongodb.net/

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

Generate a secret with:

```bash
openssl rand -base64 32
```

### 3. OAuth callback URLs

| Provider | Callback URL |
|---|---|
| Google | `http://localhost:3000/api/auth/callback/google` |
| GitHub | `http://localhost:3000/api/auth/callback/github` |

For production, use your live domain (for example `https://bazar-dor-x3nc.vercel.app/api/auth/callback/google`) and set `BETTER_AUTH_URL` to the live URL.

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

- **Sign up** (name, email, password, confirm password): redirects to `/signin` on success
- **Sign in** (email, password): redirects to `/` on success, error toast on failure
- **Social login** (Google / GitHub): redirects to `/` on success
- **Sign out:** from the header dropdown or the profile page, with a toast
- Visiting a protected page while logged out redirects to `/signin` with a toast
- Email verification and forgot-password are intentionally not implemented

---

## 📱 Responsive Design

- Product grid: 1 column (mobile) → 2 → 3 (`md`) → 4 (`xl`)
- Banner stacks below `lg`
- Market list becomes a card list on mobile and a table on larger screens
- Category nav scrolls horizontally on small screens

---

GitHub: [@prottoym](https://github.com/prottoym)
