# Website Performance & Optimization Checklist (Next.js)

Agar aapko Swift App page jaisa `90+ Lighthouse Score` chahiye, to development ke time in baaton ka dhyan rakhein:

## 1. Images & Media (Sabse Important)
Badi images site ko slow karne ka sabse bada reason hoti hain.
- [ ] **`next/image` use karein**: Kabhi bhi normal `<img>` tag use na karein. Hamesha Next.js ka `<Image />` component use karein.
  ```tsx
  import Image from 'next/image';
  <Image src="/hero.png" width={800} height={600} alt="Hero" priority />
  ```
- [ ] **Size Batana Zaroori Hai**: Hamesha `width` aur `height` define karein taaki page load hote time hile nahi (CLS issue na aaye).
- [ ] **Priority Set Karein**: Jo image sabse pehle dikhti hai (Hero image), uspe `priority` property lagayein.
- [ ] **Sahi Format**: Images ko WebP ya AVIF format mein rakhein.

## 2. Code Splitting (Page Speed Badhana)
Poora code ek saath load karne ki jagah, tukdon mein load karein.
- [ ] **Dynamic Imports**: Jo components neeche hain (fold ke neeche) aur turant nahi dikhte, unhein `lazy load` karein.
  ```tsx
  const FAQ = lazy(() => import('./FAQ'));
  <Suspense fallback={<Loader />}><FAQ /></Suspense>
  ```
- [ ] **Imports Check Karein**: Bahut badi files ko import karne se bachein agar unki zaroorat nahi hai.

## 3. Fonts (Text Jaldi Dikhna)
- [ ] **`next/font` use karein**: Google Fonts ko `next/font/google` se load karein. Ye automatic optimize ho jata hai.
- [ ] **Display Swap**: Font load hone tak text gayab na ho, isliye `display: 'swap'` zaroor lagayein.
  ```ts
  const inter = Inter({ subsets: ['latin'], display: 'swap' });
  ```

## 4. Animation & Interaction
- [ ] **Mobile ka Dhyan Rakhein**: Mobile phones par bhari animations (jaise blur effect ya infinite scroll) ko band kar dein (`hidden` use karein).
- [ ] **Light Animations**: Aisi animations use karein jo GPU pe chalein (`transform`, `opacity`), na ki CPU pe (`width`, `height`).

## 5. Scripts (Analytics wagera)
- [ ] **`next/script` use karein**: Google Analytics ya Chatbots ko load karne ke liye `next/script` use karein.
- [ ] **Lazy Load**: Inhe `strategy="lazyOnload"` ke saath load karein taaki ye site slow na karein.

## 6. CSS Best Practices
- [ ] **Tailwind CSS Best Hai**: Ye automatic unused styles hata deta hai, isliye site light rehti hai.
- [ ] **Imports Kam Karein**: CSS file ke andar dusri CSS file import karne se bachein.

## 7. Core Web Vitals (Google Score)
- **LCP (Loading Speed)**: 2.5 second se kam hona chahiye. (Images optimize karein).
- **INP (Response Time)**: Button click karne par response turant milna chahiye.
- **CLS (Stability)**: Page load hote time hilna nahi chahiye.
