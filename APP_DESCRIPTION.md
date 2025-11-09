# Interior Design Style Quiz & Materials Selection App - Complete Description

## Overview
This is a progressive web application for interior design style discovery and material selection, built for JL Coates. It guides users through a personalized design journey using visual choice-based quizzes, ultimately matching them to their ideal design style and then allowing them to select specific materials, finishes, and fixtures for their project.

---

## Part 1: Style Discovery Quiz

### Flow
1. **Introduction Screen**
   - Clara introduces herself as the Interior Design Expert from JL Coates
   - User selects "Start Quiz"

2. **Name Capture** (Optional)
   - User can provide their first name or skip
   - Used for personalization

3. **Space Selection**
   - User selects which space they're designing:
     - Living Room
     - Bedroom
     - Kitchen
     - Bathroom
     - Office
     - Whole Home
   - This tailors subsequent questions and style recommendations

4. **Word Association**
   - User sees 24 randomized descriptive words specific to their chosen space
   - Words are displayed in different sizes (large, medium, small) for visual interest
   - User selects ONE word that resonates with them
   - Each word is mapped to specific design styles (e.g., "Serene" maps to Coastal and Traditional styles)
   - Example words: Serene, Bold, Warm, Timeless, Sleek, Organic, Elegant, Minimal, Raw, Cozy, etc.

5. **Visual Style Quiz**
   - **4 rounds** of image selection
   - Each round presents **3 design style images** side-by-side
   - User selects their favorite from each round
   - Total of **12 different design styles** are presented across 4 rounds
   - Images are space-specific (e.g., bathroom images if bathroom selected)
   - Design styles include: Transitional, Organic, Japandi, Wabi-Sabi, Mediterranean, Scandinavian, Art Deco, Eclectic, Soft Industrial, Coastal, Farmhouse, Desert Modern

6. **Lead Capture**
   - User provides email address (required)
   - Optional newsletter signup checkbox

7. **Results Screen**
   - Shows user's **final design style match** based on their selections
   - Displays style name, description, and representative image
   - Includes "Schedule Your Complimentary Call" button
   - **NEW: "Select Materials" button** - begins Part 2 of the journey

8. **Data Submission**
   - All quiz data submitted to Make.com webhook
   - Includes: name, email, selected space, word choice, quiz selections, final style, and any lead data

---

## Part 2: Expert-Guided Materials Selection (NEW FEATURE)

### Expert Team Introduction
- User meets three expert personas:
  - **Clara**: Interior Design Expert (refines aesthetic and curates finishes)
  - **Aria Planes**: Architect Expert (optimizes layout, lighting, and structure)
  - **Mason Grant**: General Contractor Expert (ensures durability, practicality, and construction feasibility)

### Project Type Selection
- User selects:
  - **New Home** (building from scratch)
  - **Remodel** (updating existing space)

### Conditional Expert Questions
Questions branch dynamically based on the project type (New Home vs Remodel):

#### Aria (Architect) Questions:
**For Remodels:**
- "Would you like to keep your current bathroom layout or explore a new spatial configuration?"
- "How much natural light does your bathroom currently get?"
- "How would you describe your bathroom's current ceiling height?"
- "Would you like more separation between wet and dry zones?" (conditional)

**For New Construction:**
- "Do you already have plans or blueprints for this space?"
- "How much natural light will your bathroom have?"
- "What ceiling height would you prefer for your bathroom?"
- "Would you like more separation between wet and dry zones?"

#### Clara (Interior Designer) Questions:
**For All Projects:**
- "Is this bathroom your primary suite, a shared family bath, or a guest space?"
- "How do you want this bathroom to feel when you walk in?" (Calm/Serene, Bright/Fresh, Warm/Cozy, Bold/Expressive)
- "How important is easy maintenance to you?" (Essential, Somewhat Important, Not a Priority)

#### Mason (Contractor) Questions:
**For Remodels:**
- "How old is your home or this bathroom?"
- "Are you planning to relocate any plumbing fixtures?"

**For All Projects:**
- "Is this a high-traffic bathroom or used occasionally?"
- "What's your target completion timeline?" (Quick under 6 weeks, Moderate 2-3 months, Flexible 6+ months)

### Materials Selection Process
After expert questions, user proceeds to material selections:

#### Categories by Space:

**Bathroom (11 categories):**
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

**Kitchen (9 categories):**
1. Flooring
2. Backsplash
3. Countertops
4. Faucet
5. Cabinet Door Style
6. Cabinet Finish
7. Cabinet Hardware
8. Appliances
9. Paint Color

#### Selection Process (Per Category):
- **Round 1**: 3 randomized options presented
- **Round 2**: 3 NEW randomized options presented
- **Round 3**: Final choice between the 2 winners from Rounds 1 & 2
- **Review Screen**: Large image of final selection with option to reselect or proceed

- **Progress Tracker**: Horizontal bar showing current category + next 4 categories
- **Back Navigation**: Previous button to go back to last selection
- **Clara Guidance**: Each category screen includes Clara's profile image and conversational header (e.g., "What would you prefer for your bathroom backsplash?")

---

## Technical Architecture

### Frontend
- **Pure JavaScript** (no frameworks)
- **CDN-hosted** via jsDelivr
- **Embeddable** in Webflow or any HTML page
- **Responsive** grid layouts that stack on mobile

### State Management
- **LocalStorage** for persistence
- **State tracking** for quiz progress, selections, and expert flow
- **State restoration** on page refresh

### Data Flow
1. Quiz data collected in frontend
2. Webhook submission to Make.com (Make integration)
3. Airtable integration (pending for product catalogs)

### Current Data Sources
- **Design Styles**: Hardcoded in `idsq-quiz.js` config
- **Images**: Currently using Unsplash demo images (organized by category)
- **Products/Materials**: Planned Airtable integration (user needs to design base)

---

## User Experience Features

### Visual Design
- Modern, clean UI with brand colors (#363636 primary)
- Montserrat font family
- Clara's profile picture shown throughout expert-guided sections
- Image-focused interfaces (grids of 3 items)
- Progress indicators
- Responsive cards with hover effects and shadows

### Navigation
- Back buttons throughout
- Start Over functionality
- Continue buttons after selections
- Auto-progression for project type selection

### Personalization
- User's name used in prompts
- Space-specific imagery and word associations
- Conditional branching based on project type and answers
- Expert personas with distinct roles and expertise

---

## Configuration & Deployment

### Embed in Webflow
```html
<script src="https://cdn.jsdelivr.net/gh/fadayko23/IDSQ-FM@main/src/idsq-quiz.min.js"></script>
<script>
window.IDSQ.buildQuiz({
  webhook: {
    url: 'YOUR_MAKE_WEBHOOK_URL',
    headers: { 'x-make-apikey': 'YOUR_API_KEY' },
    enable: true
  },
  introVariant: 'guide-panel'
});
</script>
```

### Test Mode
For development, test mode can skip the quiz and start directly at materials selection:
```javascript
window.IDSQ.buildQuiz({
  testMode: true,
  testData: {
    selectedSpace: 'bathroom',
    participantName: 'Test User',
    finalStyle: {
      styleId: 'transitional',
      styleName: 'Transitional',
      description: 'Test description'
    }
  }
});
```

---

## Current Status & Next Steps

### Completed
✅ Full style discovery quiz flow
✅ Space selection and personalization
✅ Word association mapping
✅ Lead capture and webhook integration
✅ Expert team introduction
✅ Project type selection (New Home vs Remodel)
✅ Conditional branching logic for expert questions
✅ Whole-home space selection with customizable core + additional spaces
✅ Materials selection interface with 3-round process
✅ Progress tracking and navigation
✅ Responsive design
✅ Unified action menus beside primary CTAs
✅ Refined restart behavior (Start Over resets to intro, Restart Section returns to Meet the Team)

### Pending
🔄 **Airtable Base Development**: Product/materials/finishes catalogs
🔄 Replace demo Unsplash images with Airtable product data
🔄 Dynamic product recommendations based on style + expert answers
🔄 Submission of materials selections to Make.com
🔄 Expanded expert pathways & qualifiers for Kitchen, Living Room, Bedroom, Whole Home core spaces
🔄 Additional space types beyond Bathroom/Kitchen
🔄 Modularize materials-selection logic into a dedicated JS module (prepare for CDN split)
🔄 Save/Resume workflow tied to Webflow memberships (post modular refactor)

---

## Key Files
- **src/idsq-quiz.js**: Main application logic (~4300 lines)
- **src/idsq-quiz.min.js**: Minified version for CDN
- **src/index.html**: Local testing environment
- **WEBFLOW_UPDATE.md**: Deployment instructions
- **APP_DESCRIPTION.md**: This file

---

## Design Philosophy
The app uses a **progressive disclosure** approach:
1. Broad style discovery (what looks good to you?)
2. Expert guidance to narrow preferences (what will work for your space?)
3. Specific material selections (exactly what you want)

This prevents choice overwhelm while ensuring users feel confident in their selections.

---

## Integration Points for Airtable
The user needs to design an Airtable base that will replace the current demo data:

1. **Products/Materials Table**: All available options per category
2. **Styles Mapping**: Which products align with which design styles
3. **Expert Filtering**: Tags/categories for technical feasibility, durability, maintenance needs
4. **Images**: Product photos (or URLs to product images)
5. **Metadata**: Categories, pricing, availability, lead times

The JavaScript can then query Airtable's API to pull dynamic product catalogs based on the user's style, space, and expert answers.
