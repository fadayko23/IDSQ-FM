// DESIGN SPECIFICS (Global) – Clara
// Card-based questions with reveal logic, title-cased option names, and concise option descriptions.
// Includes: Project Type, Build Type, Route Mode, HOA, Purchases, Existing Items, Design Alignment, and more

const DESIGN_SPECIFICS_QUESTIONS = [
  // ---------------------------
  // SECTION: PROJECT BASICS
  // ---------------------------
  {
    id: "project_type",
    space: "Global",
    persona: "clara",
    type: "single",
    prompt: "Which Best Describes Your Project?",
    description: "Select one option to indicate whether your overall home design project is a new construction or a remodel.",
    options: [
      { id: "new-home", name: "New Construction", description: "You are building from scratch and designing all spaces." },
      { id: "remodel", name: "Remodel", description: "You are updating or reworking existing space(s) in the home." }
    ]
  },
  {
    id: "build_type",
    space: "Global",
    persona: "clara",
    type: "single",
    prompt: "For New Construction, Which Build Type Is It?",
    description: "If you chose New Construction, please specify whether it's a fully custom home or a builder/spec build with limited customization.",
    options: [
      { id: "custom", name: "Custom Build", description: "Fully custom home where you choose layouts, finishes, and details freely." },
      { id: "builder-spec", name: "Builder / Spec", description: "Build from a production builder with set plan(s) and finish packages." }
    ],
    showIf: { answerOf: "project_type", in: ["new-home"] }
  },
  {
    id: "route_mode",
    space: "Global",
    persona: "clara",
    type: "single",
    prompt: "How Detailed Would You Like to Go?",
    description: "Choose how deep you'd like the design questions to be: Express skips to selections, Standard covers key questions, Deep-Dive covers all questions.",
    options: [
      { id: "express", name: "Express (Skip to Selections)", description: "Fast track directly into material/finish selections with minimal questions." },
      { id: "standard", name: "Standard (Key Questions Only)", description: "Answer the most important questions to guide materials and finishes." },
      { id: "deep", name: "Deep-Dive (All Questions)", description: "Comprehensive question set covering structure, layout, finishes, and systems." }
    ]
  },

  // ---------------------------
  // SECTION: HOA
  // ---------------------------
  {
    id: "ds_hoa_exists",
    space: "Design Specifics",
    persona: "clara",
    type: "single",
    prompt: "Is there a Homeowners Association (HOA)?",
    description: "Select one option to confirm whether an HOA governs exterior/architectural approvals for this property.",
    options: [
      { id: "yes", name: "Yes", desc: "An HOA governs design approvals and standards." },
      { id: "no", name: "No", desc: "No HOA oversight applies to this project." },
      { id: "unsure", name: "Unsure", desc: "Not certain—team should confirm during intake." }
    ]
  },
  {
    id: "ds_hoa_submitted",
    space: "Design Specifics",
    persona: "clara",
    type: "single",
    prompt: "Have any submissions been made to the HOA?",
    description: "Select one option. Landscape plans are typically a separate submittal—exclude those here.",
    options: [
      { id: "none", name: "No", desc: "Nothing has been submitted yet." },
      { id: "partial", name: "Partial", desc: "Some items submitted; others pending." },
      { id: "complete", name: "Complete", desc: "A full design packet has already been submitted." }
    ],
    showIf: { answerOf: "ds_hoa_exists", in: ["yes"] }
  },
  {
    id: "ds_hoa_submitter",
    space: "Design Specifics",
    persona: "clara",
    type: "single",
    prompt: "Who will submit to the HOA?",
    description: "Select one option for the responsible party for HOA coordination and paperwork.",
    options: [
      { id: "architect", name: "Architect", desc: "Architect handles documentation and revisions." },
      { id: "contractor", name: "Contractor", desc: "GC or builder manages submittals and responses." },
      { id: "designer", name: "Designer", desc: "Our team manages submittals on your behalf." },
      { id: "owner", name: "Owner", desc: "Homeowner coordinates the HOA directly." }
    ],
    showIf: { answerOf: "ds_hoa_exists", in: ["yes"] }
  },

  // ---------------------------
  // SECTION: PURCHASES
  // ---------------------------
  {
    id: "ds_purchases_made",
    space: "Design Specifics",
    persona: "clara",
    type: "single",
    prompt: "Have any materials or products already been purchased for this phase?",
    description: "Select one option to indicate whether pre-purchases affect specifications.",
    options: [
      { id: "no", name: "No", desc: "No materials have been purchased yet." },
      { id: "some", name: "Yes — Some", desc: "A few items are purchased and must be honored." },
      { id: "most_all", name: "Yes — Most/All", desc: "Most selections are already purchased." }
    ]
  },
  {
    id: "ds_purchases_scope",
    space: "Design Specifics",
    persona: "clara",
    type: "multi",
    prompt: "Which categories do existing purchases cover? (Select all that apply.)",
    description: "Choose all categories that include pre-purchased items so we can filter and coordinate around them.",
    options: [
      { id: "plumbing", name: "Plumbing", desc: "Fixtures, valves, drains, or accessories." },
      { id: "lighting", name: "Lighting", desc: "Ceiling, wall, or exterior fixtures." },
      { id: "appliances", name: "Appliances", desc: "Kitchen or laundry appliances." },
      { id: "flooring", name: "Flooring", desc: "Wood, LVP, tile, stone, or carpet." },
      { id: "tile_stone", name: "Tile/Stone", desc: "Wall and floor tile or stone slabs." },
      { id: "hardware", name: "Hardware", desc: "Door, cabinet, or specialty hardware." },
      { id: "paint", name: "Paint", desc: "Specific brands, colors, or sheens." },
      { id: "furnishings", name: "Furnishings", desc: "Key furniture pieces already acquired." },
      { id: "other", name: "Other/To Review", desc: "Items not listed—team will reconcile." }
    ],
    showIf: { answerOf: "ds_purchases_made", in: ["some", "most_all"] }
  },

  // ---------------------------
  // SECTION: EXISTING ITEMS
  // ---------------------------
  {
    id: "ds_existing_items",
    space: "Design Specifics",
    persona: "clara",
    type: "single",
    prompt: "Are there existing items that must be incorporated?",
    description: "Select one option to indicate whether we are designing around items you already own or are keeping.",
    options: [
      { id: "none", name: "No", desc: "No existing items will be incorporated." },
      { id: "some", name: "Yes — Some", desc: "A few key pieces will be integrated." },
      { id: "many", name: "Yes — Many", desc: "Multiple items drive layout and finishes." }
    ]
  },
  {
    id: "ds_existing_types",
    space: "Design Specifics",
    persona: "clara",
    type: "multi",
    prompt: "Which types of existing items will be incorporated? (Select all that apply.)",
    description: "Choose all relevant categories so we can align measurements, finishes, and layouts.",
    options: [
      { id: "furnishings", name: "Furnishings", desc: "Sofas, tables, beds, storage, etc." },
      { id: "lighting", name: "Lighting", desc: "Chandeliers, sconces, or lamps." },
      { id: "rugs", name: "Rugs", desc: "Area rugs or runners to keep." },
      { id: "art_decor", name: "Art/Decor", desc: "Artworks or decor that set the palette." },
      { id: "appliances", name: "Appliances", desc: "Appliances that remain in place." },
      { id: "plumbing", name: "Plumbing", desc: "Sinks, tubs, faucets to keep." },
      { id: "hardware", name: "Hardware", desc: "Door or cabinet hardware to match." },
      { id: "other", name: "Other/To Review", desc: "Anything else that affects design." }
    ],
    showIf: { answerOf: "ds_existing_items", in: ["some", "many"] }
  },

  // ---------------------------
  // SECTION: DESIGN (DIRECTED BY QUIZ STYLE)
  // ---------------------------
  {
    id: "ds_style_alignment",
    space: "Design Specifics",
    persona: "clara",
    type: "single",
    prompt: "How closely should we align to your previously selected style?",
    description: "Select one option indicating how strictly materials and fixtures should match your established style profile from the quiz.",
    options: [
      { id: "strict", name: "Strict Adherence", desc: "Match the style profile closely across all categories." },
      { id: "balanced", name: "Balanced", desc: "Stay aligned but allow tasteful variations as needed." },
      { id: "eclectic", name: "Eclectic Accent", desc: "Use the style as a base with bolder accent moments." }
    ]
  },
  {
    id: "ds_style_emphasis",
    space: "Design Specifics",
    persona: "clara",
    type: "multi",
    prompt: "Which aspects of your style should be emphasized? (Select all that apply.)",
    description: "Choose the primary design drivers to guide material filtering and prioritization.",
    options: [
      { id: "tone_neutral", name: "Neutral Palette", desc: "Soft, layered neutrals and quiet contrasts." },
      { id: "tone_warm", name: "Warm Undertones", desc: "Honey woods, warm metals, creamy paints." },
      { id: "tone_cool", name: "Cool Undertones", desc: "Gray woods, cooler stones, crisp whites." },
      { id: "natural_tex", name: "Natural Textures", desc: "Linen, wood grain, stone variation." },
      { id: "sleek_clean", name: "Sleek & Clean", desc: "Minimal lines, low texture, simple profiles." },
      { id: "crafted_det", name: "Crafted Details", desc: "Paneled walls, millwork, tailored hardware." },
      { id: "bold_moments", name: "Bold Moments", desc: "One or two high-impact feature elements." }
    ]
  },
  {
    id: "ds_inspiration_sources",
    space: "Design Specifics",
    persona: "clara",
    type: "multi",
    prompt: "Where should we reference inspiration from? (Select all that apply.)",
    description: "Choose the primary sources we should reflect when curating options and mood references.",
    options: [
      { id: "pinterest", name: "Pinterest Board", desc: "Use an existing board or pin set." },
      { id: "instagram", name: "Instagram Saves", desc: "Posts or reels that match the vibe." },
      { id: "magazines", name: "Magazine Tear Sheets", desc: "Print or digital editorial references." },
      { id: "portfolio", name: "JL Coates Portfolio", desc: "Reference similar past projects." },
      { id: "none", name: "No External References", desc: "Proceed with style profile only." }
    ]
  },
  {
    id: "ds_feature_focus",
    space: "Design Specifics",
    persona: "clara",
    type: "multi",
    prompt: "Which crafted features matter most? (Select all that apply.)",
    description: "Select priority features so we budget and design around them from the start.",
    options: [
      { id: "millwork", name: "Custom Millwork", desc: "Built-ins, paneling, trim packages." },
      { id: "lighting_feat", name: "Feature Lighting", desc: "Statement fixtures and layered controls." },
      { id: "stone_slab", name: "Stone/Slab Moments", desc: "Full-height splashes, slab details." },
      { id: "metalwork", name: "Metalwork Details", desc: "Screens, railings, inlays, or accents." },
      { id: "acoustic", name: "Acoustic Considerations", desc: "Sound control in key rooms." },
      { id: "sustain", name: "Sustainability Focus", desc: "Low-VOC, FSC, recycled content." }
    ]
  },

  // ---------------------------
  // SECTION: DISLIKES / AVOIDS
  // ---------------------------
  {
    id: "ds_dislikes",
    space: "Design Specifics",
    persona: "clara",
    type: "multi",
    prompt: "Are there any materials or approaches to avoid? (Select all that apply.)",
    description: "Select any non-negotiables to exclude from curation and specifications.",
    options: [
      { id: "high_gloss", name: "High-Gloss Finishes", desc: "Avoid overly reflective paints or surfaces." },
      { id: "busy_stone", name: "Busy Stone Patterning", desc: "Prefer quieter, more uniform movement." },
      { id: "heavy_grain", name: "Heavy Wood Grain", desc: "Avoid pronounced cathedrals/contrast." },
      { id: "cold_metal", name: "Cooler Metals", desc: "Avoid chrome/polished nickel tones." },
      { id: "warm_metal", name: "Warmer Metals", desc: "Avoid brass/bronze tones." },
      { id: "strong_contr", name: "High Contrast", desc: "No black-white extremes overall." },
      { id: "pattern_tiles", name: "Patterned Tiles", desc: "Avoid bold graphics underfoot." },
      { id: "carpet_any", name: "Carpet Anywhere", desc: "Prefer hard surfaces throughout." }
    ]
  },

  // ---------------------------
  // SECTION: ADDITIONAL INSIGHTS
  // ---------------------------
  {
    id: "ds_additional_insights",
    space: "Design Specifics",
    persona: "clara",
    type: "multi",
    prompt: "Any other considerations to keep top-of-mind? (Select all that apply.)",
    description: "Choose any planning constraints or expectations that should shape scope and selections.",
    options: [
      { id: "tight_timeline", name: "Tight Timeline", desc: "Prioritize in-stock or quick-ship items." },
      { id: "value_engineer", name: "Value Engineering", desc: "Target cost-savvy alternates up front." },
      { id: "low_maint", name: "Low Maintenance", desc: "Favor durable, easy-care finishes." },
      { id: "pets_kids", name: "Pets/Kids Friendly", desc: "Scratch-, stain-, and water-resistant choices." },
      { id: "aging_place", name: "Aging-in-Place", desc: "Accessibility and safer surfaces." },
      { id: "phased_work", name: "Phased Installation", desc: "Plan selections in logical stages." },
      { id: "trade_ready", name: "Trade-Ready Details", desc: "Specs/notes optimized for GC subs." }
    ]
  }
];

// Export to window for script tag loading
if (typeof window !== 'undefined') {
  window.DESIGN_SPECIFICS_QUESTIONS = DESIGN_SPECIFICS_QUESTIONS;
  // Also maintain backward compatibility with GLOBAL_QUESTIONS
  window.GLOBAL_QUESTIONS = DESIGN_SPECIFICS_QUESTIONS;
}

// Also export for ES6 modules if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DESIGN_SPECIFICS_QUESTIONS, GLOBAL_QUESTIONS: DESIGN_SPECIFICS_QUESTIONS };
}

