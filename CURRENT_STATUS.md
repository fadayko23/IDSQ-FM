# Current Status & Pathway Integration Status

## ✅ What's Complete

### 1. **Question Files Created**
- ✅ `config/questions/design-specifics.js` - Global questions (project type, build type, route mode, design specifics)
- ✅ `config/questions/general-interior.js` - General Interior deep-dive questions
- ✅ `config/questions/general-exterior.js` - General Exterior deep-dive questions  
- ✅ `config/questions/kitchen.js` - Kitchen deep-dive questions
- ✅ `config/questions/living-room.js` - Living Room deep-dive questions
- ✅ `config/questions/bedroom.js` - Bedroom deep-dive questions

### 2. **Core Infrastructure**
- ✅ JSON/JS question loader (`renderJSONQuestion`, `renderGlobalQuestions`)
- ✅ Conditional logic evaluator (`evaluateQuestionCondition`, `evaluateSingleCondition`)
- ✅ State management for `jsonQuestionAnswers`, `selectedCategories`, `routeMode`
- ✅ Global questions flow (design-specifics.js) integrated and working

### 3. **Current Flow (Working)**
```
Whole Home Selection → Style Quiz → Expert Intro → Global Questions → 
  ├─ Express: → Materials Selection (if available) OR Coming Soon
  └─ Standard/Deep: → Expert Intro → Coming Soon (NOT YET IMPLEMENTED)
```

## ❌ What's Missing (Why Bedroom Questions Can't Be Demoed)

### 1. **Space-Specific Question Integration**
**Problem:** After global questions complete, the system doesn't know how to:
- Load space-specific question files (kitchen.js, living-room.js, bedroom.js)
- Show section gates for each selected space
- Render questions based on selected spaces and route mode

**Current Behavior:**
- Standard/Deep routes go to "Expert Intro" → "Coming Soon" page
- Express route goes directly to materials selection (skips questions)

**What Should Happen:**
```
Global Questions Complete →
  ├─ Express: Show section gates → Materials Selection
  └─ Standard/Deep: 
      ├─ Show section gates for each selected space
      ├─ Load and render space-specific questions
      └─ Then proceed to materials selection
```

### 2. **Section Gate Logic**
**Missing:** After global questions, we need to:
1. Determine which spaces were selected (`state.spacesRequested`)
2. For each space, show a section gate question (e.g., `section_gate_kitchen`, `section_gate_bedroom`)
3. Store selected categories in `state.selectedCategories[section_gate_id] = [category1, category2, ...]`
4. Use these selections to filter which questions to show

**Example:**
- User selects "Bedroom" in whole-home selection
- After global questions, show: "Which Bedroom categories do you want to decide now?"
- User selects: ["room_dimensions", "bed_suite", "lighting"]
- Store: `state.selectedCategories['section_gate_bedroom'] = ['room_dimensions', 'bed_suite', 'lighting']`
- Only show questions where `showIf.selected === "section_gate_bedroom:room_dimensions"` etc.

### 3. **Route Mode Question Filtering**
**Missing:** Questions need to be filtered by `routeMode`:
- **Express:** Skip questions, show section gates only, go to materials
- **Standard:** Show subset of questions (need to define which are "standard")
- **Deep-Dive:** Show all questions

**Current State:** All questions have `showIf: { routeMode: ["deep"] }`, meaning:
- Express: No questions shown (correct, but no section gates either)
- Standard: No questions shown (WRONG - should show standard subset)
- Deep: All questions shown (correct)

### 4. **Standard Questions Definition**
**Missing:** We need to define which questions are "standard" vs "deep-dive":
- **Standard questions** should be a curated subset of the most important questions
- **Deep-dive questions** include everything
- Questions should have both `routeMode: ["standard", "deep"]` or just `["deep"]`

**Current State:** All questions only show for `routeMode: ["deep"]`

### 5. **Space-Specific Question Loading**
**Missing:** After section gates, we need to:
1. Load the appropriate question file based on selected space:
   - Kitchen → `window.KITCHEN_DEEPDIVE`
   - Living Room → `window.LIVING_ROOM_DEEPDIVE`
   - Bedroom → `window.BEDROOM_DEEPDIVE`
   - General Interior → `window.GENERAL_INTERIOR_DEEPDIVE`
   - General Exterior → `window.GENERAL_EXTERIOR_DEEPDIVE`

2. Filter questions by:
   - `routeMode` (express/standard/deep)
   - `selectedCategories` (from section gates)
   - `answerOf` (previous answers)
   - `projectType` and `buildType`

3. Render questions sequentially per space

## 🔧 What Needs to Be Built

### Phase 1: Section Gate Flow (HIGH PRIORITY)
**Goal:** After global questions, show section gates for each selected space

**Tasks:**
1. Create `renderSectionGates()` function
   - Iterate through `state.spacesRequested`
   - For each space, check if a section gate question exists
   - Render section gate questions sequentially
   - Store selections in `state.selectedCategories`

2. Update `onContinueFromGlobalQuestions()`:
   ```javascript
   if (routeMode === 'express') {
     // Show section gates only, then materials
     renderSectionGates(config, mount, state, handlers, saveState);
   } else {
     // Show section gates, then space-specific questions
     renderSectionGates(config, mount, state, handlers, saveState);
   }
   ```

3. Create `onContinueFromSectionGates()` handler:
   - If Express: Go to materials selection
   - If Standard/Deep: Load and render space-specific questions

### Phase 2: Space-Specific Question Loading (HIGH PRIORITY)
**Goal:** Load and render questions from space-specific JS files

**Tasks:**
1. Create `loadSpaceQuestions(spaceId)` function:
   ```javascript
   function loadSpaceQuestions(spaceId) {
     const spaceMap = {
       'kitchen': window.KITCHEN_DEEPDIVE,
       'living-room': window.LIVING_ROOM_DEEPDIVE,
       'bedroom': window.BEDROOM_DEEPDIVE,
       'general-interior': window.GENERAL_INTERIOR_DEEPDIVE,
       'general-exterior': window.GENERAL_EXTERIOR_DEEPDIVE
     };
     return spaceMap[spaceId] || [];
   }
   ```

2. Create `renderSpaceQuestions(spaceId, config, mount, state, handlers, saveStateFn)`:
   - Load questions for the space
   - Filter by routeMode, selectedCategories, projectType, buildType
   - Render questions sequentially using `renderJSONQuestion`
   - Track progress per space

3. Update flow to iterate through spaces:
   - After section gates, for each space with selected categories:
     - Load space questions
     - Render questions
     - Move to next space
   - After all spaces complete, go to materials selection

### Phase 3: Standard vs Deep-Dive Question Definition (MEDIUM PRIORITY)
**Goal:** Define which questions are "standard" vs "deep-dive"

**Tasks:**
1. Review each question file and mark questions:
   - Add `routeMode: ["standard", "deep"]` for standard questions
   - Keep `routeMode: ["deep"]` for deep-dive only questions

2. **Standard Questions Should Include:**
   - Section gates (always)
   - Most critical questions per category (1-2 per category)
   - Skip detailed specifications, advanced options

3. **Deep-Dive Questions Include:**
   - Everything in standard
   - Detailed specifications
   - Advanced options
   - All conditional branches

### Phase 4: Express Pathway Section Gates (MEDIUM PRIORITY)
**Goal:** Express route should show section gates before materials selection

**Tasks:**
1. Update Express flow:
   ```
   Global Questions → Section Gates (all spaces) → Materials Selection
   ```

2. Section gates for Express:
   - Show all section gates for selected spaces
   - Store category selections
   - Use selections to filter materials categories

## 📋 Implementation Checklist

### Immediate Next Steps (To Demo Bedroom Questions)

- [ ] **1. Create `renderSectionGates()` function**
  - [ ] Load section gate questions from space-specific files
  - [ ] Render sequentially for each selected space
  - [ ] Store selections in `state.selectedCategories`

- [ ] **2. Create `renderSpaceQuestions()` function**
  - [ ] Load questions from appropriate JS file
  - [ ] Filter by routeMode, selectedCategories, projectType, buildType
  - [ ] Render questions using `renderJSONQuestion`
  - [ ] Track progress per space

- [ ] **3. Update `onContinueFromGlobalQuestions()`**
  - [ ] Route to section gates (for all route modes)
  - [ ] After section gates, route based on routeMode:
    - Express → Materials Selection
    - Standard/Deep → Space Questions → Materials Selection

- [ ] **4. Update question files to support Standard route**
  - [ ] Add `routeMode: ["standard", "deep"]` to key questions
  - [ ] Keep detailed questions as `routeMode: ["deep"]` only

- [ ] **5. Test end-to-end flow**
  - [ ] Whole Home → Style Quiz → Expert Intro → Global Questions
  - [ ] Section Gates → Space Questions → Materials Selection

## 🎯 Expected Flow After Implementation

### Express Route:
```
Global Questions → Section Gates (all spaces) → Materials Selection
```

### Standard Route:
```
Global Questions → Section Gates → 
  Space Questions (standard subset) → Materials Selection
```

### Deep-Dive Route:
```
Global Questions → Section Gates → 
  Space Questions (all questions) → Materials Selection
```

## 🔍 Key Code Locations

### Current Flow Handlers:
- `onContinueFromGlobalQuestions()` - Line ~6625 in `idsq-quiz.js`
- `onContinueFromExpertIntro()` - Line ~6578 in `idsq-quiz.js`

### Question Rendering:
- `renderGlobalQuestions()` - Line ~5440 in `idsq-quiz.js`
- `renderJSONQuestion()` - Line ~5000 in `idsq-quiz.js`

### State Management:
- `state.selectedCategories` - Stores section gate selections
- `state.jsonQuestionAnswers` - Stores question answers
- `state.routeMode` - 'express', 'standard', or 'deep'
- `state.spacesRequested` - Array of selected spaces

## 📝 Notes

1. **Section Gate Questions:** Each space-specific file has a section gate question (e.g., `section_gate_bedroom`). These need to be rendered first.

2. **Question Structure:** Questions are organized by `category` within each space file. The section gate determines which categories to show questions for.

3. **Conditional Logic:** Questions use `showIf` conditions that check:
   - `routeMode`: Which route mode to show for
   - `selected`: Which categories were selected in section gate
   - `answerOf`: Previous question answers
   - `projectType` / `buildType`: Project context

4. **Express Pathway:** Should skip detailed questions but still show section gates so users can select which material categories to work with.

