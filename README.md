# 🎓 Learnify – Team Project

> A collaborative clone of [learnhub-colorlib.pages.dev](https://learnhub-colorlib.pages.dev/)  
> Built with **React + Vite + Tailwind CSS**

---

## 👥 Team Task Split

| Member | Task |
|--------|------|
| **You (Leader)** | Repo setup, Theme, **Navbar** |
| Teammate 2 | Home page (Hero, Stats, Categories) |
| Teammate 3 | Courses & Categories pages |
| Teammate 4 | Instructors & Pricing sections |
| Teammate 5 | Login, Signup, About pages |

---

## 🚀 GitHub Setup Guide (Step by Step)

### 📌 Step 1 – Create the Repo (Leader only — أنت بتعملها مرة واحدة)

1. افتح [github.com](https://github.com) وادخل على أكونتك
2. اضغط **"New repository"** (الزرار الأخضر)
3. اختار الإعدادات دي:
   - **Repository name:** `learnify`
   - **Visibility:** `Public` (أو Private لو الفريق محتاج)
   - ✅ شيل تيك من "Add a README file" (لأن عندنا واحد جاهز)
4. اضغط **"Create repository"**

---

### 📌 Step 2 – Push الكود على GitHub (Leader)

افتح التيرمنال في فولدر البروجيكت وشغّل الأوامر دي:

```bash
# 1. ابدأ git في الفولدر
git init

# 2. أضف كل الفايلات
git add .

# 3. عمل أول commit
git commit -m "init: project setup with theme and Navbar"

# 4. ربط الـ repo (غيّر YOUR_USERNAME باسمك على GitHub)
git remote add origin https://github.com/YOUR_USERNAME/learnify.git

# 5. رفع الكود
git push -u origin main
```

---

### 📌 Step 3 – إضافة الزملاء كـ Collaborators

1. افتح الـ repo على GitHub
2. اضغط **Settings** (فوق في التاب)
3. من القائمة الجانبية اضغط **Collaborators**
4. اضغط **"Add people"**
5. ابحث عن كل زميل باسمه أو إيميله على GitHub واضغط **Add**
6. هيوصلهم إيميل بدعوة → لازم يقبلوها

---

### 📌 Step 4 – كل زميل يعمل Clone وييجي يشتغل

```bash
# كل زميل بيعمل clone مرة واحدة بس
git clone https://github.com/YOUR_USERNAME/learnify.git
cd learnify

# تثبيت الـ packages
npm install

# تشغيل السيرفر المحلي
npm run dev
```

---

### 📌 Step 5 – Workflow اليومي لكل زميل (مهم جداً 🔴)

**قبل ما تبدأ تشتغل كل يوم:**

```bash
# 1. نزّل آخر تحديثات من GitHub
git pull origin main

# 2. اعمل branch باسمك أو باسم التاسك
git checkout -b feature/home-page
# أو
git checkout -b feature/courses-page
```

**بعد ما تخلص شغلك:**

```bash
# 1. شوف الفايلات اللي اتغيرت
git status

# 2. أضفها
git add .

# 3. اعمل commit بوصف واضح
git commit -m "feat: add Home page hero section"

# 4. ارفعها على GitHub
git push origin feature/home-page
```

**بعدين:**
1. افتح GitHub
2. هيظهرلك زر **"Compare & pull request"** – اضغطه
3. اكتب وصف بسيط وابعت الـ PR للـ Leader يـ review ويـ merge

---

## 📁 Project Structure

```
learnify/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar/          ✅ Done (Leader)
│   │   │   ├── Navbar.jsx
│   │   │   └── index.js
│   │   └── ui/              → مكونات مشتركة زي Button, Card, Badge
│   ├── pages/
│   │   ├── Home.jsx         → Teammate 2
│   │   ├── Courses.jsx      → Teammate 3
│   │   ├── Categories.jsx   → Teammate 3
│   │   ├── Instructors.jsx  → Teammate 4
│   │   ├── About.jsx        → Teammate 5
│   │   ├── Login.jsx        → Teammate 5
│   │   └── Signup.jsx       → Teammate 5
│   ├── context/             → React Context لو هتحتاجوا state مشترك
│   ├── hooks/               → Custom hooks
│   ├── App.jsx              ✅ Done – Routing setup
│   ├── main.jsx             ✅ Done – Entry point
│   └── index.css            ✅ Done – Theme & global styles
├── index.html
├── tailwind.config.js       ✅ Done – Colors, fonts, animations
├── vite.config.js
├── postcss.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## 🎨 Theme & Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `primary-600` | `#2563eb` | Buttons, links, active states |
| `accent` | `#f59e0b` | Badges, highlights |
| `text` | `#0f172a` | Main body text |
| `text-muted` | `#64748b` | Secondary text |
| `surface-muted` | `#f8fafc` | Backgrounds, cards |

### Fonts
- **Headings:** `Plus Jakarta Sans` (bold, modern)
- **Body:** `DM Sans` (clean, readable)

### Ready-to-use CSS Classes

```jsx
// Buttons
<button className="btn-primary">Get Started</button>
<button className="btn-outline">Sign In</button>
<button className="btn-ghost">Learn More</button>

// Section titles
<span className="section-badge">Featured</span>
<h2 className="section-title">Our Courses</h2>
<p className="section-subtitle">Description here...</p>

// Card
<div className="card p-6">...</div>

// Text gradient
<span className="text-gradient">Learn Without Limits</span>

// Container
<div className="container-custom">...</div>
```

---

## 🧩 Adding Your Page (for teammates)

1. اعمل ملف جديد في `src/pages/` مثلاً `Home.jsx`
2. ابني الـ component:

```jsx
// src/pages/Home.jsx
export default function Home() {
  return (
    <main>
      <section className="bg-hero py-20">
        <div className="container-custom">
          <span className="section-badge">Welcome</span>
          <h1 className="section-title text-gradient">
            Learn Without Limits
          </h1>
          <p className="section-subtitle">...</p>
        </div>
      </section>
    </main>
  );
}
```

3. افتح `src/App.jsx` وفعّل الـ import بتاعتك:

```jsx
import Home from "./pages/Home";
// ...
<Route path="/" element={<Home />} />
```

---

## ⚡ Available Scripts

```bash
npm run dev      # Start development server → http://localhost:5173
npm run build    # Build for production
npm run preview  # Preview the production build
```

---

## 🔥 Tips لتجنب Conflicts

- **كل واحد يشتغل على صفحته بس** ومش يعدّل على ملفات التاني
- الـ `App.jsx`, `index.css`, `tailwind.config.js` → بس الـ **Leader** يعدّل فيهم
- لو محتاج component مشترك → قول للـ Leader يضيفه في `src/components/ui/`
- **دايماً** `git pull` قبل ما تبدأ تشتغل

---

*Happy coding! 🚀*
