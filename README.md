# IEEE Student Branch ZHCET · AMU — Stable Stage 4

This version is rebuilt from the working Stage 4 base and keeps the project as a simple React + Vite app.

## What is updated

- Exact event branding: **TECHFIEEEESTA ’26**.
- Header IEEE Student Branch logo is moderately larger and more visible.
- Header brand is not underlined and the logo has no new click behavior beyond the normal Home anchor.
- Navigation/scroll order is fixed to: Home → About → Team → Events → TECHFIEEEESTA ’26 → Membership → Gallery → Contact.
- Active navigation now follows the actual section positions instead of IntersectionObserver competition between sections.
- About section is about **IEEE itself**, based on the old Student Branch About Us material supplied in the project conversation.
- Added dedicated IEEE community cards for Computer Society, Women in Engineering (WIE), SIGHT and Robotics & Automation Society (RAS).
- Removed the Branch Counsellor message/photo section.
- Team is presented as leadership cards, lead cards and separate member cards, following the supplied visual references.
- Event cards show date and venue/location directly on the card.
- TECHFIEEEESTA ’26 schedule is displayed as an editable schedule table.
- Contact section includes clickable official Facebook, Instagram, YouTube and LinkedIn profiles.

## Run locally

```bash
npm.cmd install
npm.cmd run dev
```

Open the local Vite URL shown in the terminal (normally `http://localhost:5173/`).

## Project structure (one file per tab)

```
src/
├── main.jsx                 # app entry (just mounts <App />)
├── App.jsx                  # page layout + navigation state
├── styles.css
├── config/navItems.js       # tab order / links
├── utils/profileImages.js   # loads team photos from src/profile-pic
├── components/              # Navbar, EventModal, ImageLightbox, SocialBrandIcon, AppErrorBoundary
├── sections/                # one component per tab
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Team.jsx
│   ├── Events.jsx
│   ├── Techfieeeesta26.jsx    # TECHFIEEEESTA ’26
│   ├── Membership.jsx
│   ├── Gallery.jsx
│   └── Contact.jsx
└── data/                    # one data file per tab (edit content here)
    ├── home.js              # hero text + announcements
    ├── about.js             # About IEEE + IEEE communities
    ├── team.js              # leadership, cell leads, members
    ├── events.js            # event cards
    ├── Techfieeeesta26.js     # TECHFIEEEESTA ’26 text + schedule
    ├── membership.js
    ├── gallery.js           # add gallery images to the `images` array
    └── contact.js           # contact text + social links
```

## Notes

The original old IEEE `edu.ieee.org` page was not directly fetchable in the current environment, so the About text used here is based on the About Us text supplied in the conversation. Gallery assets from the old site are intentionally not copied until the original gallery files/URL are accessible; this avoids adding unverified images.

## Important
This build avoids importing social-brand icons (Facebook, Instagram, LinkedIn, YouTube) from `lucide-react`, because those brand icons are not exported by lucide-react. The social cards use text badges instead, so the React app can load normally.
