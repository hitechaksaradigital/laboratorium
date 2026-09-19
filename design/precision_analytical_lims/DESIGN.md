---
name: Precision Analytical LIMS
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#414754'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058bd'
  on-primary: '#ffffff'
  primary-container: '#1470e8'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#5f559a'
  on-secondary: '#ffffff'
  secondary-container: '#bdb2ff'
  on-secondary-container: '#4b4185'
  tertiary: '#72545c'
  on-tertiary: '#ffffff'
  tertiary-container: '#8d6c75'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004494'
  secondary-fixed: '#e5deff'
  secondary-fixed-dim: '#c8bfff'
  on-secondary-fixed: '#1b0c53'
  on-secondary-fixed-variant: '#473d81'
  tertiary-fixed: '#ffd9e2'
  tertiary-fixed-dim: '#e4bcc6'
  on-tertiary-fixed: '#2b151c'
  on-tertiary-fixed-variant: '#5b3f47'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system establishes a high-precision, ISO/IEC 17025-compliant visual environment tailored for enterprise laboratory information management. The interface serves analytical chemists, laboratory managers, quality assurance auditors, and instrument technicians who require zero-ambiguity data processing under high-density cognitive loads.

The visual direction marries **Corporate Modernism** with clean **Analytical Precision**:
- **Utilitarian Clarity**: Uncluttered data hierarchy with crisp structural outlines to eliminate human error during sample intake, chain-of-custody tracking, and out-of-specification (OOS) investigations.
- **Calibrated Ergonomics**: High-contrast legibility against soft, glare-reducing canvas backings, designed to prevent ocular fatigue under sterile laboratory fluorescent lighting.
- **Modern Sophistication**: Clean linear geometry elevated by muted lavender-blue transitions and distinct semantic markers, replacing dated industrial monolithic tables with an actionable, data-first digital cockpit.

## Colors

The color palette is engineered for cognitive clarity, rapid triage, and high-frequency analytical workflows.

### Foundational Canvas & Surfaces
- **Canvas Base (`#FFF4F4`)**: A gentle, ultra-soft tinted background that cuts the stark glare of pure laboratory whiteboards while retaining maximum contrast for text and numeric tokens.
- **Surface Cards (`#FFFFFF`)**: Pure neutral white surfaces dedicated to analytical modules, sample grids, and sample parameter inspectors.
- **Surface Variant (`#F0F4FF`)**: Light cool-tint container fills for readouts, secondary metrics, and table header rows.
- **Border Subtle (`#E2E8F0`)**: Low-contrast architectural divider preventing visual noise across complex multi-column tabular matrices.

### Core Brand & Accents
- **Primary Blue (`#3A86FF`)**: Directs interactive focus, primary validations, action triggers, and authoritative links.
- **Secondary Lavender (`#BDB2FF`)**: Denotes secondary batch groupings, instrument calibration tags, and non-blocking navigational anchors.
- **Tertiary Soft Highlight (`#FFD6E0`)**: Reserved for non-destructive alerts, sample deviations under review, and soft notice indicators.

### Text & Semantics
- **Text Primary (`#0F172A`)**: Slate-900 high-fidelity contrast for critical numerical findings, chain-of-custody logs, and labels.
- **Text Secondary (`#475569`)**: Slate-600 for metadata, unit measurements (e.g., mg/L, pH, µS/cm), timestamps, and column sub-labels.
- **Success (`#10B981`)**: Compliant tests, passing quality control thresholds, and certified signatures.
- **Warning (`#F59E0B`)**: Marginal drift, pending calibrations, and approaching expiration windows.
- **Danger / OOS (`#EF4444`)**: Out-of-Specification (OOS) breaches, rejected batches, and immediate hazardous containment triggers.
- **Info (`#3A86FF`)**: System audits, reference standards, and informational parameter tips.

## Typography

Typography prioritizes tabular clarity and structural integrity. **Plus Jakarta Sans** provides a disciplined yet progressive geometric character for operational dashboards, sample batch summaries, and analytical view titles. **Inter** serves as the workhorse for body data, metadata labels, and analytical tables due to its optimized x-height, clear numeric glyph distinction, and legible tabular lining features.

- For all numeric data displays (e.g., test results, standard deviations, LOD/LOQ levels), enable CSS `font-feature-settings: "tnum"` (tabular figures) to ensure vertical column alignment across thousands of rows.
- Never use stylized or cursive forms for units of measure; units must appear in `body-sm` or `label-md` with strict standard SI notation.

## Layout & Spacing

This design system uses a high-density, multi-column fluid desktop layout optimized for 1920x1080 and 1440x900 laboratory workbench consoles, with support for tablet field sampling terminals.

- **Desktop (1200px+)**: 12-column or 16-column continuous fluid grid with a persistent left navigation sidebar (240px static width or 64px icon-rail) and high-density 16px to 24px gutters. Analytical tables and multi-parameter review panels span variable column blocks (4, 8, or 12 columns).
- **Tablet (768px - 1199px)**: 8-column layout with a collapsable off-canvas navigation drawer, prioritizing single-sample inspection and step-by-step test execution workflows.
- **Mobile (< 768px)**: Reserved exclusively for chain-of-custody barcode scanning and critical OOS push alerts; layout collapses to a 4-column single-stack container.

Component spacing obeys strict compact density scales: data entry cells and table records maintain `space-sm` vertical padding to ensure maximum row visibility above the fold without requiring excessive vertical scrolling.

## Elevation & Depth

To preserve the clinical precision of scientific instruments and maintain compliance readability, depth is communicated through **low-contrast linear enclosures** and **subtle ambient diffusion** rather than heavy theatrical drop shadows.

- **Level 0 (Canvas Base)**: The base canvas layer rendered in `#FFF4F4`.
- **Level 1 (Structural Containers & Cards)**: Base cards rendered in `#FFFFFF`, defined by a crisp `1px solid #E2E8F0` border. A faint ambient shadow (`box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04)`) separates primary cards from the light tinted background.
- **Level 2 (Active States & Data Flyouts)**: Hovered sample rows, segmented parameter trays, and dropdown menus utilize `box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08)` coupled with an accent border tint (`#3A86FF` at 20% opacity).
- **Level 3 (Modals & Critical Audit Sign-offs)**: Electronic signature validation dialogs (21 CFR Part 11 / ISO 17025 compliance gates) employ `box-shadow: 0 12px 32px rgba(15, 23, 42, 0.14)` over a semi-transparent slate backdrop (`rgba(15, 23, 42, 0.4)`).

## Shapes

The shape system adopts **Level 1 (Soft)** roundedness. Crisp, near-rectilinear profiles reinforce scientific rigor, reliable data boundaries, and compact screen real estate utilization:

- **Interactive Elements (Buttons, Inputs, Selectors)**: `4px` (`0.25rem`) border radius, preserving sharp corner geometry while avoiding sharp wireframe corners.
- **Panels & Containers**: `6px` to `8px` (`rounded-lg`) border radius for sample cards, test runs, and diagnostic panels.
- **Status Badges & Tokens**: `4px` subtle radius or rounded pill specifically for discrete sample status flags (e.g., `PASS`, `OOS`, `IN-REVIEW`) to visually segregate tags from interactive controls.

## Components

### Buttons
- **Primary**: Solid `#3A86FF` fill with pure white typography, 36px standard operational height (32px for compact table toolbars), `4px` radius. Subtle active scale reduction with zero heavy blur.
- **Secondary**: Outlined `1px solid #E2E8F0` with `#FFFFFF` background and `#0F172A` text; shifts to `#F0F4FF` fill with `#3A86FF` text on hover.
- **Danger / OOS Action**: Solid `#EF4444` background with white text, used strictly for non-conformance confirmations or batch rejections.

### High-Density Data Tables
- Header row styled in `#F0F4FF` with uppercase `label-sm` slate-600 text, bottom-bordered by `1px solid #E2E8F0`.
- Cell rows maintain 36px to 40px vertical pitch, alternating with pure white surfaces, and row highlights using `#F8FAFC` on hover.
- Numerical columns right-align with tabular figures enabled. Deviant rows (OOS) highlight with a solid left accent border (`3px solid #EF4444`) and an ultra-soft `#FFF5F5` row tint.

### Status Badges & Chips
- Semantically mapped with a two-tone pattern (light background + high-contrast text):
  - **OOS / Critical**: `#EF4444` text on `#FEE2E2` fill.
  - **Passed / Certified**: `#10B981` text on `#D1FAE5` fill.
  - **In Progress / Retest**: `#F59E0B` text on `#FEF3C7` fill.
  - **Batch Reference**: Slate text on `#BDB2FF` (15% opacity) fill.
- Micro-pill geometry with `10px` bold uppercase labels and strict horizontal padding (`space-sm`).

### Input Fields & Parameter Controls
- 36px container height with `1px solid #E2E8F0` border and pure white fill. Focus state triggers a clean `2px` focus ring in `#3A86FF` without diffuse ambient spread.
- Prefix/Suffix units (e.g., `mg/kg`, `pH`) are embedded within fixed right-side container segments using `#475569` and `body-sm`.

### Metric & Analytic Cards
- Clean `#FFFFFF` base with `#E2E8F0` hairline boundary. 
- Features a two-tier information hierarchy: small upper `label-md` uppercase descriptor (e.g., `SAMPLES LOGGED TODAY`), followed by a prominent `headline-lg` numeric metric, paired with an integrated directional trend indicator or sparkline.

### Chain-of-Custody Stepper & Audit Log
- Sequential linear node list highlighting sample handoff from sampling, accessioning, analysis, peer review, to final ISO 17025 certificate issuance.
- Completed stages render in `#10B981`, current stage in `#3A86FF` with an active pulsing indicator, and future stages in `#E2E8F0`.