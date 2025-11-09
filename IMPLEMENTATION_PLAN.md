# Whole-Home Materials Selection - Implementation Plan

## Overview
Expanding from single-space (bathroom) to whole-home materials selection system with multiple spaces, per-space expert questions, category qualifiers, cross-category flags, duplication logic, and save/resume functionality.

## Current State
- ✅ Expert intro screen (KEEP AS IS)
- ✅ Project type selection (New Home/Remodel)
- ✅ Expert questions for bathroom (Aria, Clara, Mason)
- ✅ Materials selection for bathroom (11 categories, 3-round process)
- ✅ Basic conditional branching based on project type
- ✅ Whole-home space selection UX with core spaces, additional chips, custom space entry, and persisted selections
- ✅ Global action menus positioned beside primary CTAs (quiz, tips, lead capture, success)
- ✅ Restart behavior clarified (Start Over → Intro reset, Restart Section → Meet the Team with quiz results retained)

## Target State
- ✅ Expert intro screen (unchanged)
- ✅ Project type selection (unchanged)
- 🆕 **Space selection** (whole-home with multiple spaces)
- 🆕 **Per-space expert questions** (expanded for all spaces)
- 🆕 **Category qualifiers** (before each category selection)
- 🆕 **Cross-category flags** (deferrals, compatibility constraints)
- 🆕 **Duplication logic** (repeating rooms with quantity)
- 🆕 **Save/resume** (Webflow Memberships integration)

## Implementation Phases

### Phase 1: Foundation & State Management
**Goal:** Set up new state structure and routing for whole-home flow

**Tasks:**
1. Update state structure to include:
   - `spacesRequested` array
   - `additionalSpaces` array
   - `duplicateRules` object
   - `categoryFlags` object
   - `deferredDecisions` array
   - `expertAnswers` structured by space
   - `categorySelectionBySpace` object
2. Create space management functions
3. Update routing to handle space-based flow

**Files to Modify:**
- `src/idsq-quiz.js` (state initialization, handlers)

---

### Phase 2: Space Selection Screen
**Goal:** Allow users to select/add spaces for whole-home design

**Tasks:**
1. Create `renderSpaceSelection` screen for materials flow
2. Pre-select core spaces: Kitchen, Living Room, Primary Bedroom, Primary Bathroom, General Interior, General Exterior
3. Add "Add Spaces" multi-select functionality
4. Implement duplication logic UI (duplicate from existing space with quantity)
5. Create space instance management

**New Functions:**
- `renderWholeHomeSpaceSelection()`
- `onAddSpace()`
- `onDuplicateSpace()`
- `onRemoveSpace()`

---

### Phase 3: Expanded Expert Questions Per Space (In Progress)
**Goal:** Add expert questions for all space types (Kitchen, Living Room, Primary Bedroom, Primary Bathroom, General Interior, General Exterior)

**Tasks:**
1. Expand `expertQuestions` config to include all spaces
2. Update question rendering to be space-aware
3. Implement space-specific conditional logic
4. Add new questions per spec:
   - Kitchen: Aria (6 questions), Clara (3), Mason (2-6 based on type)
   - Living Room: Aria, Clara, Mason questions
   - Primary Bedroom: Aria, Clara, Mason questions
   - Primary Bathroom: (already exists, may need expansion)
   - General Interior: Aria, Clara, Mason questions
   - General Exterior: Aria, Clara, Mason questions

**Files to Modify:**
- `src/idsq-quiz.js` (DEFAULT_CONFIG.expertQuestions)

---

### Phase 4: Category Applicability & Qualifiers
**Goal:** Add category selection and qualifier questions before material rounds

**Tasks:**
1. Create `renderCategoryApplicability()` screen per space
2. Implement category qualifier questions (shown right before each category's 3-round selection)
3. Add qualifier answer handling
4. Implement cross-category flags based on qualifier answers

**New Functions:**
- `renderCategoryApplicability()`
- `renderCategoryQualifiers()`
- `onSelectCategoryApplicability()`
- `onAnswerQualifier()`
- Flag evaluation functions

**Cross-Category Flags to Implement:**
- `backsplash_use_slab`
- `backsplash_slab_source`
- `requires_heavy_slab_handling`
- `requires_ducted_hood`
- `panel_ready_appliances`
- `apron_sink_requires_base_mod`
- `restrict_wall_mount_faucet`
- `restrict_freestanding_tub`
- `heated_floor_desired`

---

### Phase 5: Deferral Logic & Constraints
**Goal:** Implement category deferrals and compatibility constraints

**Tasks:**
1. Implement deferral logic (e.g., Backsplash → Countertops)
2. Create deferral review screens (short review with auto-advance)
3. Add compatibility constraints (hide/show options based on flags)
4. Implement constraint warnings and soft-disable functionality

**New Functions:**
- `checkDeferralConditions()`
- `renderDeferredCategoryReview()`
- `evaluateConstraints()`
- `filterOptionsByConstraints()`

---

### Phase 6: Materials Categories Expansion
**Goal:** Add materials categories for all spaces beyond bathroom

**Tasks:**
1. Expand `materialsBySpace` config for all spaces:
   - Kitchen: 12 categories
   - Living Room: 5+ categories
   - Primary Bedroom: 4+ categories
   - Primary Bathroom: 11 categories (existing)
   - General Interior: 6+ categories
   - General Exterior: 7+ categories
2. Update material selection rendering to handle all categories
3. Add "or similar" labeling to all product cards

**Files to Modify:**
- `src/idsq-quiz.js` (DEFAULT_CONFIG.materialsBySpace)

---

### Phase 7: Space Navigation & Flow
**Goal:** Create smooth navigation between spaces and categories

**Tasks:**
1. Implement space-by-space progression (complete one space before moving to next)
2. Add space navigation UI (progress indicator showing all spaces)
3. Create "Save & Continue Later" functionality
4. Implement resume from last incomplete space

**New Functions:**
- `renderSpaceProgress()`
- `onSaveAndResume()`
- `resumeFromLastSpace()`
- `onCompleteSpace()`

---

### Phase 8: Duplication & Quantity Logic
**Goal:** Handle duplicate spaces with quantity and divergence tracking

**Tasks:**
1. Implement space duplication with quantity capture
2. Clone expert answers and material selections for duplicates
3. Handle divergence (when user changes a duplicate, fork to new instance)
4. Track quantity vs individual instances

**New Functions:**
- `duplicateSpace()`
- `cloneSpaceData()`
- `handleSpaceDivergence()`
- `updateQuantityTracking()`

---

### Phase 9: Save/Resume Integration
**Goal:** Integrate with Webflow Memberships for save/resume

**Tasks:**
1. Add autosave on step completion
2. Create resume logic (detect last incomplete space/category)
3. Add Webflow User ID to state
4. Implement project ID generation
5. Create dashboard route handling (future: `/dashboard/projects/{projectId}`)

**Note:** Full Webflow Memberships integration may require backend/API work

---

### Phase 10: UI/UX Enhancements
**Goal:** Polish the experience with all the UI details from spec

**Tasks:**
1. Add "or similar" labels to all product cards
2. Implement deferral banners (e.g., "Backsplash continues as slab in Countertops")
3. Add compatibility notes and warnings
4. Create final summary screen with all selections
5. Add code/compliance guardrail notes

---

## Key Data Structures

### Updated State Structure
```javascript
{
  projectId: "auto-generated",
  userId: "webflowMemberId", // future
  projectType: "new-home" | "remodel",
  spacesRequested: [
    "Kitchen", "Living Room", "Primary Bedroom", 
    "Primary Bathroom", "General Interior", "General Exterior"
  ],
  additionalSpaces: [
    // { type: "Bedroom", count: 2, duplicateFrom: "Primary Bedroom", override: false }
  ],
  duplicateRules: {
    allowDuplicateSpace: true,
    fieldsToClone: ["style", "finishFamilies", "fixtures", "qualifiers"],
    quantityForIdentical: true,
    allowPerInstanceOverrides: true
  },
  expertAnswers: {
    Kitchen: { aria: {}, clara: {}, mason: {} },
    "Living Room": { aria: {}, clara: {}, mason: {} },
    // ... per space
  },
  categorySelectionBySpace: {
    Kitchen: { flooring: {}, backsplash: {}, ... },
    // ... per space per category
  },
  categoryFlags: {
    backsplash_use_slab: false,
    // ... all flags from spec
  },
  deferredDecisions: [
    // { category: "Backsplash", decision: "Use slab", resolvesIn: "Countertops" }
  ],
  currentSpace: "Kitchen", // which space user is currently working on
  currentCategory: "flooring", // which category in current space
  lastSaved: null // timestamp
}
```

---

## Question Structure (JSON Template)

Each question needs:
```javascript
{
  id: "A-K-4",
  space: "Kitchen",
  persona: "aria",
  projectType: ["remodel"], // or ["new-home", "remodel"]
  prompt: "Question text",
  description: "Help text",
  type: "single", // or "multi"
  options: [
    { id: "keep", name: "Keep current layout", icon: "📐" }
  ],
  showIf: { /* conditions */ },
  effects: [
    { 
      when: "explore|not_sure", 
      set: { "expertAnswers.aria.kitchenLayout": "flexible" },
      setFlags: { "categoryFlags.someFlag": true }
    }
  ]
}
```

---

## Category Qualifier Structure

```javascript
{
  categoryId: "backsplash",
  space: "Kitchen",
  qualifiers: [
    {
      id: "BACK_Q1_BLEND_STATEMENT",
      prompt: "Blend or statement?",
      options: ["blend", "statement"]
    },
    {
      id: "BACK_Q2_TILE_OR_SLAB",
      prompt: "Tile or continuous slab?",
      options: ["tile", "slab", "unsure"],
      actions: [
        {
          when: { "answers.BACK_Q2_TILE_OR_SLAB": "slab" },
          setFlags: {
            "categoryFlags.backsplash_use_slab": true
          },
          deferDecision: {
            category: "Backsplash",
            resolvesIn: "Countertops",
            note: "Backsplash to continue as slab; final slab chosen in Countertops."
          }
        }
      ]
    }
  ]
}
```

---

## Implementation Priority

**Must Have (MVP):**
1. Phase 1: Foundation & State Management
2. Phase 2: Space Selection Screen
3. Phase 3: Expanded Expert Questions (at least Kitchen + Bathroom)
4. Phase 4: Category Qualifiers (basic implementation)
5. Phase 6: Materials Categories (at least Kitchen + Bathroom)

**Should Have:**
6. Phase 5: Deferral Logic (Backsplash → Countertops example)
7. Phase 7: Space Navigation
8. Phase 10: UI/UX Enhancements (or similar labels, banners)

**Nice to Have:**
9. Phase 8: Duplication Logic (can start simple)
10. Phase 9: Save/Resume (may require backend work)

---

## Questions for Clarification

1. **Order of Spaces:** Should users complete spaces in a specific order, or can they jump around? (Spec suggests space-by-space progression)
2. **Category Applicability:** Can users skip entire categories, or are they all pre-checked and they can only skip qualifiers?
3. **Save/Resume:** Should we implement localStorage-based save/resume first, then upgrade to Webflow Memberships later?
4. **Duplication UI:** Should duplication happen at space selection time, or can users duplicate later after completing a space?
5. **Expert Questions Order:** Should we show all Aria questions, then all Clara, then all Mason per space? Or can we mix?

---

## Immediate Next Steps (Nov 2025)

1. Finalize Kitchen & Living Room expert pathways for both **New Construction** and **Remodel** scenarios (Phase 3).
2. Define/implement qualifying questions per core space (Kitchen, Living Room, Bedroom, Bathroom) including category flags (Phase 4).
3. Stand up kitchen material categories in config to validate end-to-end flow (Phase 6).
4. Extract materials-selection modules into a dedicated `materials-flow.js` (or similar) referenced by `idsq-quiz.js` to improve maintainability.
5. Update Webflow embed instructions once module split is complete.
6. Document per-space question outlines in `QUESTIONS_AND_PATHWAYS.md` before implementation to keep UX aligned.

---

## Files to Create/Modify

**Modify:**
- `src/idsq-quiz.js` (major expansion)

**Create:**
- `WHOLE_HOME_SPEC.md` (reference doc with full spec)
- `CATEGORY_QUALIFIERS_CONFIG.js` (or add to DEFAULT_CONFIG)
- `SPACE_QUESTIONS_CONFIG.js` (or add to DEFAULT_CONFIG)

**Update:**
- `QUESTIONS_AND_PATHWAYS.md` (add whole-home pathways)
- `APP_DESCRIPTION.md` (update with whole-home flow)
