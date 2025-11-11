# Complete Questions & Pathways Map

## Overview
This document provides a comprehensive list of all questions asked in the application and their conditional logic pathways.

---

## PART 1: STYLE DISCOVERY QUIZ

### Flow Sequence
1. Introduction → 2. Name Capture → 3. Space Selection → 4. Word Association → 5. Visual Quiz (4 rounds) → 6. Lead Capture → 7. Results

### Question 1: Name Capture (Optional)
**Prompt:** "I'd love to personalize this experience for you. What's your first name?"
- **Options:** Text input field (optional)
- **Skip Option:** "Continue without name"
- **Conditional:** None - always shown

### Question 2: Space Selection
**Prompt:** "What space are you designing?"
**Options:**
- Living Room
- Bedroom
- Kitchen
- Bathroom
- Office
- Whole Home
**Conditional:** None - always shown
**Impact:** Tailors subsequent word associations and visual quiz images

### Question 3: Word Association
**Prompt:** Varies by space:
- Living Room: "Which word best captures the vibe of your ideal living room?"
- Bedroom: "Your dream bedroom feels…"
- Kitchen: "When I imagine my kitchen, it feels…"
- Bathroom: "Your bathroom should feel like a place to…"
- Office: "When I'm in my ideal office, I feel…"
- Whole Home: Generic prompt

**Options:** 24 randomized words from space-specific vocabulary
**Examples:** Serene, Bold, Warm, Timeless, Sleek, Organic, Elegant, Minimal, Raw, Cozy, Refined, Natural, Classic, Chic, Textured, Sophisticated, Bright, Comfortable, Structured, Luxurious, Nautical, Vintage, Clean, Inviting

**Conditional:** None - always shown
**Impact:** Influences final style recommendation (each word maps to 1-2 design styles)

### Question 4: Visual Style Quiz (4 Rounds)
**Format:** Each round shows 3 design style images side-by-side
**Prompt:** "Which style resonates with you?"
**Options:** User selects 1 image per round (12 total styles presented across 4 rounds)

**Styles Presented:**
- Transitional
- Organic
- Japandi
- Wabi-Sabi
- Mediterranean
- Scandinavian
- Art Deco
- Eclectic
- Soft Industrial
- Coastal
- Farmhouse
- Desert Modern

**Conditional:** None - all users see 4 rounds
**Impact:** Determines final style match

### Question 5: Lead Capture
**Prompt:** Email capture form
**Fields:**
- Email (required)
- Newsletter signup (optional checkbox)

**Conditional:** None - always shown
**Impact:** Required to proceed to results

### Question 6: Results Display
**Shows:** Final design style match
**Action Buttons:**
- "Schedule Your Complimentary Call"
- **"Select Materials"** (NEW - starts Part 2)

---

## PART 2: EXPERT-GUIDED MATERIALS SELECTION

### Initial Screen: Expert Team Introduction
**Content:** Grid display of 3 experts with profiles
- Clara (Interior Design Expert)
- Aria Planes (Architect Expert)
- Mason Grant (General Contractor Expert)
**Action:** Continue button

### Question A: Project Type Selection
**Prompt:** Card selection screen (similar to space selection)
**Options:**
- 🏗️ **New Home** - "Building from scratch"
- 🔨 **Remodel** - "Updating existing space"

**Conditional:** None - always shown first
**Impact:** Determines ALL subsequent question pathways

---

## PATHWAY 1: NEW HOME (New Construction)

### Expert Flow: Aria → Clara → Mason → Materials

---

### ARIA (Architect) - NEW HOME PATHWAY

#### Question A1: Plans/Blueprints
**Prompt:** "Do you already have plans or blueprints for this space?"
**Description:** "This helps me understand the scope and any existing design elements."
**Options:**
- 📋 Yes, I have plans
- 🔨 No plans yet

**Conditional:** `showIf: { projectType: 'new-home' }`
**Shown:** Only for New Home projects

#### Question A2: Natural Light (Future)
**Prompt:** "How much natural light will your bathroom have?"
**Description:** "This helps us determine reflective materials and lighting solutions."
**Options:**
- ☀️ A lot of natural light
- 🌤️ Some natural light
- 🌙 Very little natural light

**Conditional:** None (always shown for New Home)
**Note:** This question exists but may not be shown if A1 is the only visible question

#### Question A3: Separation Zones
**Prompt:** "Would you like more separation between wet and dry zones?"
**Description:** "This influences layout recommendations for your bathroom."
**Options:**
- 🚧 Yes, I want separation
- 🪟 No, keep open

**Conditional:** `showIf: { conditions: [{ expert: 'aria', questionId: 'layout', answerId: ['explore', 'unsure'] }, { projectType: 'new-home' }] }`
**Shown:** 
- ✅ Always for New Home projects
- ✅ For Remodel projects ONLY if user selected "Explore new configuration" or "Not sure yet" in layout question
- ❌ NOT shown if Remodel user selected "Keep current layout"

#### Question A4: Ceiling Height (Preference)
**Prompt:** "What ceiling height would you prefer for your bathroom?"
**Description:** "This affects fixture scale and proportion recommendations."
**Options:**
- 📏 Low (under 8 ft)
- 📐 Standard (8-9 ft)
- 🏛️ Tall (9+ ft)

**Conditional:** `showIf: { projectType: 'new-home' }`
**Shown:** Only for New Home projects

---

### CLARA (Interior Designer) - ALL PATHWAYS

**Note:** Clara's questions are the SAME for both New Home and Remodel pathways

#### Question C1: Bathroom Function
**Prompt:** "Is this bathroom your primary suite, a shared family bath, or a guest space?"
**Description:** "This helps us understand usage patterns and prioritize features."
**Options:**
- 🏠 Primary Suite
- 👨‍👩‍👧 Shared Family Bath
- 👋 Guest Space

**Conditional:** None - always shown

#### Question C2: Mood/Atmosphere
**Prompt:** "How do you want this bathroom to feel when you walk in?"
**Description:** "This sets the tone for materials, lighting, and finishes."
**Options:**
- 🌸 Calm and serene
- ☀️ Bright and fresh
- 🔥 Warm and cozy
- 💥 Bold and expressive

**Conditional:** None - always shown

#### Question C3: Maintenance Priority
**Prompt:** "How important is easy maintenance to you?"
**Description:** "This influences finish selections and material recommendations."
**Options:**
- ✨ Essential
- ⚖️ Somewhat important
- 🎨 Not a priority

**Conditional:** None - always shown

---

### MASON (Contractor) - NEW HOME PATHWAY

#### Question M1: Traffic Level
**Prompt:** "Is this a high-traffic bathroom or used occasionally?"
**Description:** "This influences material durability and performance selections."
**Options:**
- 👥 High-traffic bathroom
- 👤 Used occasionally

**Conditional:** None - always shown

#### Question M2: Timeline
**Prompt:** "What's your target completion timeline?"
**Description:** "This helps determine what products fit your schedule."
**Options:**
- ⚡ Quick (under 6 weeks)
- 📅 Moderate (2-3 months)
- 🗓️ Flexible (6+ months)

**Conditional:** None - always shown

**Note:** For New Home, Mason does NOT ask about:
- ❌ Home/bathroom age (not applicable)
- ❌ Plumbing relocation (not applicable - all new)

---

## PATHWAY 2: REMODEL (Existing Space)

### Expert Flow: Aria → Clara → Mason → Materials

---

### ARIA (Architect) - REMODEL PATHWAY

#### Question A1: Layout Change
**Prompt:** "Would you like to keep your current bathroom layout or explore a new spatial configuration?"
**Description:** "This determines what fixtures and configurations we can work with."
**Options:**
- 📐 Keep current layout
- 🏗️ Explore new configuration
- 🤔 Not sure yet

**Conditional:** `showIf: { projectType: 'remodel' }`
**Shown:** Only for Remodel projects

#### Question A2: Separation Zones (Conditional)
**Prompt:** "Would you like more separation between wet and dry zones?"
**Description:** "This influences layout recommendations for your bathroom."
**Options:**
- 🚧 Yes, I want separation
- 🪟 No, keep open

**Conditional:** `showIf: { conditions: [{ expert: 'aria', questionId: 'layout', answerId: ['explore', 'unsure'] }, { projectType: 'new-home' }] }`
**Shown:** 
- ✅ If user selected "Explore new configuration" OR "Not sure yet" in A1
- ❌ NOT shown if user selected "Keep current layout"
**Note:** This uses OR logic - shows for remodels who want to explore layout changes OR for all new-home projects

#### Question A3: Natural Light (Current)
**Prompt:** "How much natural light does your bathroom currently get?"
**Description:** "This helps us determine reflective materials and lighting solutions."
**Options:**
- ☀️ A lot of natural light
- 🌤️ Some natural light
- 🌙 Very little natural light

**Conditional:** `showIf: { projectType: 'remodel' }`
**Shown:** Only for Remodel projects

#### Question A4: Ceiling Height (Current)
**Prompt:** "How would you describe your bathroom's current ceiling height?"
**Description:** "This affects fixture scale and proportion recommendations."
**Options:**
- 📏 Low (under 8 ft)
- 📐 Standard (8-9 ft)
- 🏛️ Tall (9+ ft)

**Conditional:** `showIf: { projectType: 'remodel' }`
**Shown:** Only for Remodel projects

---

### CLARA (Interior Designer) - REMODEL PATHWAY

**Same questions as New Home pathway** (see Clara section above)

---

### MASON (Contractor) - REMODEL PATHWAY

#### Question M1: Home/Bathroom Age
**Prompt:** "How old is your home or this bathroom?"
**Description:** "This helps us understand electrical, plumbing, and structural considerations."
**Options:**
- 🏛️ Older than 20 years
- 🏢 Newer than 10 years
- ❓ Not sure

**Conditional:** `showIf: { projectType: 'remodel' }`
**Shown:** Only for Remodel projects

#### Question M2: Plumbing Relocation
**Prompt:** "Are you planning to relocate any plumbing fixtures like your shower, tub, or toilet?"
**Description:** "This determines installation complexity and compatibility."
**Options:**
- 🔧 Yes, relocating fixtures
- 📍 No, keeping in place
- 🤔 Maybe

**Conditional:** `showIf: { projectType: 'remodel' }`
**Shown:** Only for Remodel projects

#### Question M3: Traffic Level
**Prompt:** "Is this a high-traffic bathroom or used occasionally?"
**Description:** "This influences material durability and performance selections."
**Options:**
- 👥 High-traffic bathroom
- 👤 Used occasionally

**Conditional:** None - always shown

#### Question M4: Timeline
**Prompt:** "What's your target completion timeline?"
**Description:** "This helps determine what products fit your schedule."
**Options:**
- ⚡ Quick (under 6 weeks)
- 📅 Moderate (2-3 months)
- 🗓️ Flexible (6+ months)

**Conditional:** None - always shown

---

## MATERIALS SELECTION (After Expert Questions)

### Question Format
Each material category follows the same 3-round selection process:

1. **Round 1:** 3 randomized options
2. **Round 2:** 3 NEW randomized options  
3. **Round 3:** Final choice between 2 winners from Rounds 1 & 2
4. **Review Screen:** Large image with option to reselect or proceed

### Categories by Space

#### Bathroom (11 categories):
1. Flooring
2. Backsplash
3. Countertops
4. Faucet
5. Cabinet Door Style
6. Cabinet Finish
7. Cabinet Hardware
8. Tub
9. Toilet
10. Showerhead
11. Paint Color

#### Kitchen (9 categories):
1. Flooring
2. Backsplash
3. Countertops
4. Faucet
5. Cabinet Door Style
6. Cabinet Finish
7. Cabinet Hardware
8. Appliances
9. Paint Color

**Note:** Currently using Unsplash demo images. Will be replaced with Airtable product catalogs.

---

## PATHWAY SUMMARY TABLE

| Question | New Home | Remodel | Conditional Logic |
|----------|----------|---------|-------------------|
| **Project Type** | ✅ Shown | ✅ Shown | None |
| **Aria: Plans** | ✅ | ❌ | `projectType: 'new-home'` |
| **Aria: Layout** | ❌ | ✅ | `projectType: 'remodel'` |
| **Aria: Separation** | ✅ Always | ✅* Conditional | If layout=explore/unsure OR new-home (OR logic) |
| **Aria: Lighting (future)** | ✅ | ❌ | None (always for new-home) |
| **Aria: Lighting (current)** | ❌ | ✅ | `projectType: 'remodel'` |
| **Aria: Ceiling (prefer)** | ✅ | ❌ | `projectType: 'new-home'` |
| **Aria: Ceiling (current)** | ❌ | ✅ | `projectType: 'remodel'` |
| **Clara: Function** | ✅ | ✅ | None |
| **Clara: Mood** | ✅ | ✅ | None |
| **Clara: Maintenance** | ✅ | ✅ | None |
| **Mason: Age** | ❌ | ✅ | `projectType: 'remodel'` |
| **Mason: Plumbing** | ❌ | ✅ | `projectType: 'remodel'` |
| **Mason: Traffic** | ✅ | ✅ | None |
| **Mason: Timeline** | ✅ | ✅ | None |

*Only shown if user selected "explore" or "unsure" for layout question

---

## CONDITIONAL LOGIC SUMMARY

### Condition Types:
1. **Project Type Based:** `showIf: { projectType: 'new-home' }` or `'remodel'`
2. **Answer Based:** `showIf: { expert: 'aria', questionId: 'layout', answerId: ['explore', 'unsure'] }`
3. **Multiple Conditions (OR):** `showIf: { conditions: [condition1, condition2] }` - shows if ANY condition is true

### Question Filtering Logic:
- Questions without `showIf` are always shown
- Questions with `showIf` are filtered based on:
  - Current project type selection
  - Previous answers within the same expert's questions
  - Multiple conditions using OR logic

---

## NOTES FOR AIRTABLE INTEGRATION

When designing the Airtable base, consider these data points collected:

**From Part 1:**
- Participant name
- Selected space
- Word association choice
- Visual quiz selections (4 rounds)
- Final style match
- Email address

**From Part 2:**
- Project type (new-home/remodel)
- All expert answers (Aria, Clara, Mason)
- Material selections (final choice per category)

**Filtering Logic Needed:**
- Products filtered by: design style, space type, expert answers (maintenance, traffic, lighting, etc.)
- Project type impacts availability (remodel constraints vs new construction flexibility)

---

## CURRENT LIMITATIONS

1. **Space-Specific Questions:** Currently only bathroom-specific questions implemented. Kitchen questions would need similar conditional logic.
2. **Unused Config:** `projectContext.spaceSpecific` has bathroom/kitchen questions defined but not yet integrated into the flow.
3. **Image Source:** Materials currently use Unsplash demo images - needs Airtable integration.
4. **Product Filtering:** No dynamic filtering yet - all products shown regardless of expert answers (will be implemented with Airtable).

---

## UPCOMING ADDITIONS (PLANNING)

- ✅ **JSON Question Configuration:** Global questions and General Interior deep-dive questions have been imported into `config/questions/` (see below).
- Draft question trees for Kitchen, Living Room, Bedroom, and Whole-Home core spaces covering both **New Construction** and **Remodel** pathways.
- Define per-category qualifier sets for Kitchen (Flooring, Backsplash, Countertops) and map resulting flags.
- Capture duplication/quantity logic requirements for repeated spaces (e.g., Bedrooms) ahead of implementation.
- Outline data contract for future Airtable-powered material catalogs (fields, tags, filtering rules).
- Document restart behaviors: **Start Over** returns to Intro (state cleared), **Restart This Section** returns to Expert Team while retaining quiz outcomes.

---

## JSON QUESTION CONFIGURATION FILES

### Imported Configuration Files

#### `config/questions/Global-Questions.json`
**Purpose:** Universal questions that apply before space-specific flows.

**Questions:**
1. **project_type** (single-select)
   - Options: New Construction, Remodel
   - Always shown first

2. **build_type** (single-select)
   - Options: Custom Build, Builder/Spec
   - Conditional: Only shown if `project_type = "new-home"`

3. **route_mode** (single-select)
   - Options: Express (Skip to Selections), Standard (Key Questions Only), Deep-Dive (All Questions)
   - Always shown after project_type/build_type

#### `config/questions/GeneralInterior-DeepDive.json`
**Purpose:** General Interior category selection and deep-dive questions for home-wide finishes and systems.

**Structure:**
1. **section_gate_gi** (multi-select)
   - Allows users to select which GI categories they want to address:
     - Flooring, Baseboards, Crown Moldings, Interior Doors, Door Trim, Window Trim
     - Ceiling Finish, Wall Finish, Decorative Vent Grills, Lighting
     - Ceiling Fans, Exhaust Fans, A/V, Security, Staircase
     - Feature Walls, Accent Ceilings, Smart Technology

2. **Category Questions** (organized by category)
   - **Flooring:**
     - `gi_floor_continuity`: Continuous vs Zoned flooring
     - `gi_floor_material_single`: Material families (engineered wood, solid wood, LVP, tile, stone, carpet, polished concrete)
     - `gi_floor_specs`: Specifications (wide plank, pattern, waterproof, matte finish)
   - **Baseboards:**
     - `gi_bb_profile`: Profile style (square, stepped, craftsman, colonial, shadow reveal)
     - `gi_bb_height`: Height preference (0-3", 3-6", 6"+)
     - `gi_bb_finish`: Finish grade (paint grade, stain grade, match existing)
   - **Interior Doors:**
     - `gi_door_style`: Door style (flush, shaker, 2-panel, 5-panel, glass-lite)
     - `gi_door_core`: Core construction (solid, hollow, MDF)
     - `gi_door_height`: Height preference (78", 80", 84", 90", 96", 108")
     - `gi_door_motion`: Motion types (swing, pocket, barn)
     - `gi_door_hardware`: Hardware & finishes (lever, knob, brass, matte black, chrome, brushed nickel)

**Conditional Logic:**
- All questions require `route_mode = "deep"`
- Questions only show if their category is selected in `section_gate_gi`
- Some questions depend on previous answers (e.g., `gi_floor_material_single` only shows if `gi_floor_continuity = "single"`)
- `prefOnlyIfBuilder: true` indicates the question acts as a preference only for builder/spec builds

### Integration Notes
- Questions use `showIf` conditions with `all` arrays for multiple conditions
- Route mode filtering: `{ "routeMode": ["deep"] }`
- Category selection filtering: `{ "selected": "section_gate_gi:category_id" }`
- Previous answer filtering: `{ "answerOf": "question_id", "in": ["answer1", "answer2"] }`
- Flags can be set via options: `"flags": ["flag1", "flag2"]`

### Future JSON Files
- `config/questions/GeneralExterior-DeepDive.json` (GE categories and questions)
- `config/questions/Kitchen-Questions.json` (Kitchen expert questions for New Construction/Remodel)
- `config/questions/LivingRoom-Questions.json` (Living Room expert questions)
- `config/questions/Bedroom-Questions.json` (Bedroom expert questions)
- `config/questions/Bathroom-Questions.json` (Bathroom expert questions - may expand existing)

---

## POTENTIAL PATHWAY ENHANCEMENTS

Future additions could include:
- Space-specific qualifying questions (e.g., "Replace tub?" for bathroom)
- Kitchen-specific expert questions (layout changes, appliance needs)
- Additional space types (Living Room, Bedroom, Office materials)
- Dynamic product recommendations based on style + expert answers
- Budget-aware filtering
