# Licence Saathi

Licence Saathi is a simple, offline-friendly guide for first-time driving-licence applicants in India. It turns a confusing journey across Sarathi/mParivahan-style steps into one clear next action at a time.

It is a prototype with sample data and does not connect to a government system.

## Who it is for

The main user is Ramesh, 19, applying for his first motorcycle licence. He uses a low-cost Android phone, may have a slow or patchy connection, and is most comfortable in Hindi. The app also supports English and Tamil.

## What the app does

- **Home:** Shows “Where are you in your licence journey?”, four starting points, and a six-stage journey map with the next step.
- **Can I apply?:** Checks age, vehicle type and state, then gives a clear yes/no answer and an estimated eligibility date.
- **Documents:** Builds a checklist from the applicant’s answers and explains each document with simple examples.
- **Learner’s licence application:** Runs an eight-step simulated application, saves answers, allows review and changes, shows fees, and gives a sample receipt.
- **Learn:** Teaches 18 traffic signs, rules of the road and flashcards with inline SVG illustrations.
- **Mock test:** Provides Practice mode with instant explanations and Test mode with the configured timer, question count and pass mark.
- **Test day:** Explains the online learner-test screen and includes a three-question practice run in the same layout.
- **Permanent licence:** Calculates the 30-day application date and six-month expiry, then simulates RTO, date and time booking.
- **Driving test:** Explains common two-wheeler and car test steps and five common reasons people fail.
- **Track my application:** Uses three sample application numbers to show a simulated timeline.
- **Chat helper:** Answers 25+ common questions in English, Hindi and Tamil, offers quick replies and suggests the next saved step.
- **Settings:** Changes language, text size, high contrast, read-aloud and installation when the browser offers it.

## Design decisions

- **Plain language:** Every screen uses short sentences and explains terms such as LL, DL and RTO when they first appear.
- **One step per screen:** The application and test flows reduce memory load and make it easier to recover from mistakes.
- **Offline-first:** The app is an installable PWA. The built app, data bundle and static assets are precached after the first visit, while progress is saved in `localStorage`.
- **Three languages:** English, हिंदी and தமிழ் are available throughout the interface, lessons, quiz, explanations and helper.
- **Accessible controls:** Body text starts at 16px, controls are at least 48px high, keyboard focus is visible, fields have labels, SVG signs have accessible names, and correct/wrong quiz answers use words and icons—not colour alone.
- **Low bandwidth:** There are no downloaded photographs or large media files. Traffic signs are lightweight inline SVG components.
- **Safe simulation:** Payment, application numbers, appointments and tracking data are clearly simulated so the prototype never asks for Aadhaar or other personal details.

## How it improves the current process

The current process makes a first-time applicant join together rules, documents, fees, test preparation, waiting periods and RTO appointments from several places. Licence Saathi puts those pieces into one guided journey, makes the next action visible, gives practice before the learner test, remembers progress on the device, and keeps working when a connection drops.

## Run locally

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

To test the production PWA build:

```bash
npm run build
npm run preview
```

## Deploy from GitHub

First push this folder to a GitHub repository. The repository should contain `package.json`, `src/`, `public/`, `vite.config.js` and the deployment files in the project root.

If the project is not on GitHub yet:

```bash
git init
git add .
git commit -m "Prepare Licence Saathi hackathon submission"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the placeholder GitHub URL with the repository you created.

### Vercel

1. Open [vercel.com](https://vercel.com) and sign in with GitHub.
2. Select **Add New → Project**.
3. Import the Licence Saathi GitHub repository.
4. Use these settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
5. Select **Deploy**.
6. Open the generated `vercel.app` URL and test every main route.

The included `vercel.json` rewrites unknown routes to `/index.html`, so refreshing `/learn`, `/mock-test` or another React Router page does not show a 404.

### Netlify

1. Open [netlify.com](https://app.netlify.com) and sign in with GitHub.
2. Select **Add new site → Import an existing project**.
3. Choose GitHub and select the Licence Saathi repository.
4. Use these settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Select **Deploy site**.
6. Open the generated Netlify URL and test every main route.

The included `public/_redirects` file is copied into `dist` and contains `/* /index.html 200`. This is the Netlify setting that prevents a page refresh on a React Router route from returning 404.

## What is simulated

- Eligibility rules, fees, dates and RTO choices use sample values from `src/data`.
- The learner-licence form, payment, receipt and application number are simulated.
- The online test, score, timer, attempt history and readiness meter are simulated.
- Permanent-licence slot booking and application tracking are simulated.
- No government portal, payment service, Aadhaar service, login, backend or personal-data connection is used.

The footer reminds users: “Prototype with sample data. Check rules and fees with your state’s RTO.”

## What we would build next

1. Connect users to verified, state-specific RTO rules and current fees.
2. Add a secure backend for real applications without storing unnecessary personal data.
3. Add reminders for the 30-day waiting period, appointments and licence expiry.
4. Test the Tamil and Hindi wording with applicants in different states.
5. Add more state-specific driving-test formats and official document guidance.
6. Run usability, accessibility and offline tests with real low-cost Android phones.

## Content and code structure

- `src/data/`: rules, fees, signs, questions, FAQs, RTOs, applications and document content.
- `src/i18n/`: English, Hindi and Tamil interface translations.
- `src/components/`: layout, chat helper and inline SVG sign components.
- `src/pages/`: the working journey screens.
- `vite.config.js`: PWA manifest, icons and Workbox precaching.

## Demo checklist

Before presenting, open the deployed URL once, reload it, check the language picker, and confirm that the browser is not showing an old service-worker version. Keep the sample application number `LS24001` ready for the tracking screen.

## Three-minute judge demo script

### 0:00–0:20 — User and problem

“Meet Ramesh, 19, applying for his first motorcycle licence. He uses a low-cost Android phone and is most comfortable in Hindi. Today, the steps, documents, fees, learner test and waiting period are spread across confusing government-process screens. Licence Saathi gives him one clear next step at a time.”

### 0:20–0:45 — Home and eligibility

1. Open **Home**.
2. Say: “The home screen asks where Ramesh is in the journey and shows six stages, including the one next action.”
3. Click **Just starting**.
4. Enter age `19`, choose **Motorcycle with gears**, choose **Delhi**, and click **Check eligibility**.
5. Say: “This solves the first uncertainty: can I apply, and what should I do next?”

### 0:45–1:05 — Documents and application flow

1. Click **Continue** to **Documents**.
2. Tick two checklist items and point out the examples under each item.
3. Click **Continue** to **Learner’s licence application**.
4. Fill or demonstrate the eight short steps, using **Back** once to show that an answer remains saved.
5. At review, point out the **Change** buttons, fee summary and **Pay (simulated)**.
6. Say: “This replaces a long, error-prone form with a reviewable flow and makes the fee visible before the simulated payment.”

### 1:05–1:35 — Learning and mock test

1. Open **Learn → Traffic signs** and show the three categories.
2. Point to the inline SVG signs and press **Listen** if a voice is available.
3. Open **Flashcards**, then **Mock test → Practice mode**.
4. Answer one question incorrectly and show the immediate explanation.
5. Say: “This improves learning because the applicant sees the rule, the sign and the reason immediately instead of only receiving a final score.”

### 1:35–1:55 — Real-test preparation and permanent licence

1. Open **Test day** and click **Try the test screen**.
2. Complete the three-question run.
3. Open **Permanent licence**, enter a learner-licence date, and show the 30-day application date, six-month expiry and countdown.
4. Choose an RTO, date and time to show the simulated booking.
5. Say: “This makes the waiting period and test-day preparation visible, so Ramesh does not miss the next legal step.”

### 1:55–2:15 — Tracking and helper

1. Open **Track my application**.
2. Click sample number `LS24001` and show the timeline.
3. Open **Ask Licence Saathi** and click a quick reply such as **How do I prepare for the learner test?**
4. Say: “The tracker gives a safe example of status information, while the helper answers common questions without asking for Aadhaar or personal details.”

### 2:15–2:35 — Phone, Hindi and accessibility

1. Open **Settings**.
2. Select **हिंदी** and **Largest** text size.
3. Return to Home or Learn and show the larger Hindi layout on a phone-sized browser window.
4. Say: “This is the 20-second phone moment: the content remains readable at the largest size, buttons stay usable, Hindi is available throughout, and high contrast plus read-aloud are built in.”

### 2:35–2:55 — Offline and technical execution

1. In Chrome DevTools, open **Network**, choose **Offline**, and reload after the first visit.
2. Point out the small offline message.
3. Open Learn or Mock test and show that the saved journey still works.
4. Say: “The app is a Vite PWA with a service worker, no backend, inline SVG signs, local progress saving and precached app data for patchy connections.”

### 2:55–3:00 — Close

“Licence Saathi improves clarity without pretending to be a government service. It gives a first-time applicant a calm, multilingual and accessible path from ‘I want a licence’ to ‘my licence is on its way’.”

## Live-demo risks and prevention

- **The deployed URL shows an old version:** Open the URL once before presenting, hard-refresh once, and check the service-worker version in DevTools. If needed, use an incognito window for the latest deployment.
- **A route refresh shows 404:** Keep `vercel.json` for Vercel and `public/_redirects` for Netlify in the repository. Test refreshing `/learn` and `/mock-test` before the demo.
- **The install button is missing:** This is expected until Chrome offers `beforeinstallprompt`. Use localhost or HTTPS, open the site once, and demonstrate the browser install icon if the in-app button is not offered.
- **The offline test fails on the first visit:** Visit and reload the app once while online before selecting Offline; the service worker needs its first successful visit to cache the files.
- **Speech is unavailable:** The Listen button hides itself when the browser has no matching voice. Do not depend on speech for the demo; use the visible lesson text as the fallback.
- **The test timer expires during explanation:** Use Practice mode for the learning demonstration, or keep the Test mode explanation short and start a fresh test if needed.
- **Saved sample data changes the starting screen:** Use Settings → reset progress before the demo, then choose the intended path from Home.
- **Network or Wi-Fi drops unexpectedly:** The app is designed to continue offline, but keep the deployed page open in the browser and have a local `npm run dev` copy available as a backup.
- **Phone text wraps differently:** Use a 360px browser preview, choose Largest text size before presenting, and avoid zooming the browser beyond 100%.
- **A judge enters real personal information:** Explain that this is sample-only and ask them to use the provided sample values. Never enter Aadhaar, real mobile numbers or real application numbers.
- **The demo path takes too long:** Keep `LS24001` ready, use the quick replies, and demonstrate one application step plus the review screen instead of filling every field live.
