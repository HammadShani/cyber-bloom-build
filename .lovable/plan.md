# Focused Portfolio Interaction Upgrade

## Goal
Upgrade only the existing Skills, Projects, and Services sections while preserving the current navbar, hero, about section, typography, page order, and overall visual direction.

## Changes
- Replace the current skill-pill layout with a two-column experience:
  - **Technical Proficiency:** 11 editable skill values with labeled percentage bars that fill once when scrolled into view.
  - **Tools & Technologies:** 9 polished tool cards with professional icons and restrained hover/reveal motion.
- Consolidate the existing seven service items into the requested three premium cards: Frontend Development, SEO, and Google Ads. Each card will retain the current glass styling while adding a service number, tailored icon treatment, concise description, skill tags, and a subtle hover CTA.
- Rebuild the project carousel interaction with Framer Motion while preserving the existing cards and category tabs:
  - Separate Web and SEO position state.
  - Reset the selected category to its first card every time it is opened.
  - Clamp movement to the number of cards visible at each screen width, preventing blank trailing space.
  - Smooth horizontal movement, opacity/scale emphasis, arrows, dots/progress, and category transitions.
  - Keep 12 Web Development cards and exactly 2 SEO cards, including DriftCreatives and the editable SEO project.

## Technical Details
- Add `framer-motion` and use viewport-aware motion with reduced-motion support.
- Track carousel width to show 3 cards on desktop, 2 on tablet, and 1 on mobile without page overflow or layout jumps.
- Keep project content in the existing editable arrays; no fabricated outcomes, clients, or links.
- Keep the existing semantic headings, buttons, keyboard labels, and section anchors.

## Verification
- Test desktop, tablet, and mobile widths.
- Switch categories repeatedly and verify Web always has 12 cards and SEO always has 2 visible cards.
- Test previous/next limits, pagination, resizing, no blank carousel area, and no horizontal page overflow.
- Confirm skill bars animate once on entry and remain readable on mobile.
