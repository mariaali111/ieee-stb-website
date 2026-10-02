# IEEE STB ZHCET — Stage 1

Stage 1 contains the visual foundation:
- Navbar
- Responsive mobile navigation
- Hero section
- IEEE Student Branch logo
- Dark green / black / metallic cinematic visual system
- Quick-link preview strip
- Placeholder anchors for later sections

## Run

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Next

After approving the visual direction, Stage 2 will replace the placeholder sections with the actual About, Announcements and Events content.


### Updated navigation
The Stage 1 header now includes Home, About, Team, Events, IEEE Week, Membership, Gallery, and Contact. Membership and Gallery currently point to placeholder sections for later stages.


### Navigation behavior fix
The header now highlights only the current section, and the four preview cards (About Us, Our Team, Events, IEEE Week) are clickable and navigate to their sections.

### Stage 2
Stage 2 adds:
- A real About section with editable vision and mission content.
- A home-page announcements band.
- An Events & Activities section with editable event data.
- `src/data/stage2Data.js` as the first content/data file, so event and announcement copy can be updated without redesigning components.
- Improved active-section navigation and scroll-aware highlighting for the sections currently built.

### Stage 2 event update
- Event cards are now clickable and open an event-details panel.
- Added the user-provided Treasure Hunt and Hack-IEEE posters.
- Added Treasure Hunt details supplied in the branch WhatsApp message, clearly marked as team-shared information.
- Added the supplied Treasure Hunt Google Form registration link.
- Added Hack-IEEE poster details visible in the provided poster.
- Event content and media remain editable from `src/data/stage2Data.js` and `src/assets/events/`.

### Poster display fix
- Event detail posters now use `object-fit: contain` so the complete poster remains visible.
- The Treasure Hunt poster's QR code and other bottom content are no longer cropped in the event details panel.

### Poster display fix
Both supplied event posters now use a full-image `contain` layout in the event details panel, so no part of the original artwork, QR code, or text is cropped. The same preservation is used for event thumbnails.

### Image viewer update
Event posters now have a dedicated lightbox viewer. Click the poster inside an event's details panel to see the complete original image larger, with a very small enlargement while preserving the full image and its proportions. Click outside the image or the close button to return.

### Stage 3 update
- Added the full Team directory structure using the supplied branch team names and roles.
- Added leadership, cell leads and working-group member lists.
- Added `src/data/teamData.js` for future team updates.
- Changed the top navigation to a robust fixed header so it remains visible while scrolling.
- Preserved the active-section highlighting and smooth section navigation.

### Official team-data update
The Team directory has been reconciled against the three official selection-notice images supplied by the user. The official leadership, cell leads, and listed team members are kept in `src/data/teamData.js`. The page also records the academic session 2026–2027 and selection-notice date 26 September 2026.
