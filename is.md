# React + Tailwind Portfolio Layout Prompt

Create a responsive portfolio layout using **React + Tailwind CSS**:

- **Layout Structure**
  - Desktop/Large screens:
    - Left side: fixed column containing an **About Me/Profile section** (photo, name, short bio, social links).
    - Right side: main content area with scrollable **sections** (Hero, Projects/Portfolio, Contact).
    - Footer spans full width at the bottom.
  - Mobile/Small screens:
    - The **About Me/Profile section** moves to the **top** (above all other sections).
    - The main content sections stack vertically below it.
    - Footer remains at the bottom.

- **Styling Requirements**
  - Use Tailwind CSS utility classes for layout, spacing, and responsiveness.
  - Left column should have a distinct background (e.g., `bg-gray-100`) and fixed width on desktop.
  - Right column should be scrollable (`overflow-y-auto`) with padding.
  - Mobile view should collapse into a single column (`flex-col`).
  - Footer should be styled with a dark background (`bg-gray-900 text-white`) and centered text.

- **Dynamic Behavior**
  - Responsive design: use Tailwind breakpoints (`md:`, `lg:`) to switch layout.
  - Ensure smooth scrolling between sections.
  - About/Profile section should remain visible on desktop while the right side scrolls.

- **Sections to Include**
  - About Me/Profile (left/top)
  - Hero (intro headline, call-to-action)
  - Portfolio/Projects (cards with title, description, tech stack, link)
  - Contact (email + social links)
  - Footer (copyright)

Deliver the code in **TypeScript (.tsx)** components with a clean folder structure:
