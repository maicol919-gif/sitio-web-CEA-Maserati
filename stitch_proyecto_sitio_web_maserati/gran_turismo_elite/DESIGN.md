# Design System Strategy: The High-Performance Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Precision Pilot."** 

To design for a brand with 27 years of heritage in Cali, we must move beyond the "driving school" trope. This system is an editorial homage to high-performance automotive engineering. We are not just building a functional interface; we are creating a digital cockpit. The aesthetic breaks the traditional "grid-in-a-box" template by utilizing intentional asymmetry, overlapping typography, and deep tonal layering. This reflects the dynamic movement of driving—where trust is earned through precision and stability is felt through quality.

## 2. Colors & Surface Architecture

The palette is anchored in the authority of Navy Blue (`#102142`) and the adrenaline of Maserati Red (`#C3142B`). 

### The "No-Line" Rule
Standard UI relies on thin grey borders to separate content. **This design system prohibits 1px solid borders for sectioning.** Boundaries must be defined through background color shifts. For instance, a `surface-container-low` section should sit against a `surface` background to create a clear but soft distinction.

### Surface Hierarchy & Nesting
Treat the interface as a physical stack of premium materials.
- **Base Layer:** `surface` (#faf9ff) for the main canvas.
- **Mid Layer:** `surface-container-low` (#f1f3ff) for secondary content areas.
- **Top Layer:** `surface-container-highest` (#d9e2ff) for high-priority interactive cards.
By nesting these tiers, we create a sense of mechanical depth without the clutter of lines.

### The "Glass & Gradient" Rule
To evoke the feel of a high-end dashboard, use **Glassmorphism** for floating headers or navigation bars. Use a semi-transparent `primary-container` (#102142) with a 20px backdrop-blur. 
- **Signature Textures:** Apply a subtle linear gradient (from `primary` #000a24 to `primary-container` #102142) on hero sections and primary CTAs to add a "metallic" soul to the interface.

## 3. Typography: The Editorial Edge

We use **Manrope** exclusively. Its geometric yet humanist form echoes the modern automotive spirit.

*   **Display Scale (`display-lg` 3.5rem):** Reserved for hero headlines. Use "Extra Bold" with tight letter-spacing (-0.02em) to command attention.
*   **Headline Scale (`headline-md` 1.75rem):** Used for section titles. Implement intentional asymmetry—align these to the left of a container with a significant `spacing-12` top margin to create breathing room.
*   **Body Scale (`body-lg` 1rem):** High-readability weight. This is the "trust" factor. Keep line-height generous (1.6) to maintain an premium, editorial feel.
*   **The Contrast Rule:** Use `secondary` (Maserati Red) sparingly for small `label-md` tokens to highlight "27 Years of Experience," creating a focal point against the deep `primary` navy backgrounds.

## 4. Elevation & Depth: Tonal Layering

We reject traditional, high-contrast drop shadows. Depth is an ambient property.

*   **The Layering Principle:** Rather than "lifting" an element with a shadow, "step" it up using color. A `surface-container-lowest` card placed on a `surface-container-low` background creates a natural, sophisticated lift.
*   **Ambient Shadows:** If a floating element (like a FAB or Menu) requires a shadow, use a large blur (32px) at 6% opacity. The shadow color must be a tinted version of `on-surface` (#081a3b), never pure black.
*   **The "Ghost Border" Fallback:** If containment is strictly necessary for accessibility, use a "Ghost Border": `outline-variant` (#c5c6cf) at **15% opacity**. It should be felt, not seen.

## 5. Components

### Buttons (High-Performance Interaction)
*   **Primary:** Solid `secondary` (Maserati Red) with `on-secondary` (White) text. Use `DEFAULT` (8px) roundness. Apply a subtle inner-glow (top-down) for a tactile, "push-button" feel.
*   **Secondary:** `surface-container-highest` background with `primary` text. No border.
*   **States:** On hover, the primary button should shift to a `secondary-container` gradient, mimicking the glow of a dashboard light.

### Cards & Lists
*   **Constraint:** **Strictly forbid divider lines.** 
*   **Separation:** Use `spacing-6` (1.5rem) or background color shifts to define list items.
*   **Layout:** Cards should use `surface-container-lowest` with a `DEFAULT` (8px) radius.

### Input Fields
*   **Style:** Minimalist. Use a `surface-container-low` background with a `primary` bottom-only highlight (2px) when focused. 
*   **Labels:** Use `label-md` in `on-surface-variant` for a clean, professional aesthetic.

### Additional Signature Component: The "Heritage Badge"
A specialized component for this brand: A floating, glassmorphic badge using the `tertiary` gold/tan tones to highlight the "27 Years" anniversary logo element, placed at the intersection of two containers to break the grid.

## 6. Do's and Don'ts

### Do:
*   **Do use asymmetric white space.** Use `spacing-24` to separate major thematic sections.
*   **Do use "Primary Fixed" colors** for persistent status elements to ensure high-performance visibility.
*   **Do overlap elements.** Allow a high-quality image of a vehicle to partially overlap a `headline-lg` text block for a high-end magazine feel.

### Don't:
*   **Don't use 100% opaque borders.** They kill the premium "flow" of the interface.
*   **Don't use pure black shadows.** They look "uncalculated" and cheapen the 27-year legacy.
*   **Don't crowd the content.** Trust is built through clarity. If a screen feels busy, increase the `spacing` tokens between tiers.
*   **Don't use standard "Rounded-Full" for everything.** Stick to the `DEFAULT` (8px) for buttons and cards to maintain a professional, architectural structure. Reserve "Full" only for small status chips.