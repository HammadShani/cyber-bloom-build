# Projects Carousel Repair

## Goal
Fix only the existing Projects section so both categories always render the correct cards and the carousel never moves beyond available content.

## Changes
- Keep two explicit datasets: `webDevelopmentProjects` with 12 cards and `seoProjects` with exactly 2 cards.
- Give Web Development and SEO separate index state, reset the selected category to index 0 on every tab click, and clamp both indices after viewport changes.
- Render only the active category carousel through `AnimatePresence`, keyed by category, so outgoing cards cannot conflict with incoming cards.
- Calculate movement, control limits, counts, and indicators solely from the active category's array length and current visible-card count.
- Upgrade only Projects styling with a deeper premium surface, animated tab indicator, case-study numbering, refined previews, borders, shadows, tags, and hover motion.
- Preserve all other sections and portfolio content unchanged.

## Verification
- Exercise Web next/previous repeatedly, switch to SEO and verify both cards, then switch back and confirm Web resets correctly.
- Repeat category switching several times.
- Verify desktop, tablet, and mobile card counts, resizing behavior, button limits, pagination, and absence of blank space.
