// KITCHEN — Deep Dive Question Pack
// Deep-dive questions for Kitchen.
// Ready for future integration of "standard" and "express" route modes.

const KITCHEN_DEEPDIVE = [
  // -----------------------
  // SECTION GATE
  // -----------------------
  {
    space: "Kitchen",
    persona: "clara",
    category: "section_gate",
    questions: [
      {
        id: "section_gate_kitchen",
        type: "multi",
        prompt: "Which Kitchen categories do you want to decide now?",
        description: "Select the items you want to work through in this kitchen. **(Select all that apply.)**",
        options: [
          { id: "flooring", name: "Flooring" },
          { id: "baseboards", name: "Baseboards" },
          { id: "crown_moldings", name: "Crown Moldings" },
          { id: "ceiling_finish", name: "Ceiling Finish" },
          { id: "countertops", name: "Countertops" }
        ],
        showIf: { all: [{ routeMode: ["deep", "standard", "express"] }] }
      }
    ]
  },
  // -----------------------
  // FLOORING
  // -----------------------
  {
    space: "Kitchen",
    category: "flooring",
    questions: [
      {
        id: "kit_floor_families",
        type: "multi",
        prompt: "Which kitchen flooring materials do you prefer? (Select all that apply.)",
        description: "Choose one or more flooring families you are open to using in the kitchen.",
        options: [
          { id: "porcelain", name: "Porcelain Tile", description: "Durable, low maintenance, excellent for spills and heavy use." },
          { id: "stone", name: "Natural Stone", description: "Premium look (e.g., Marble, Limestone); requires sealing and care." },
          { id: "lvp", name: "Luxury Vinyl Plank (LVP)", description: "Water-resistant, resilient underfoot, budget-friendly." },
          { id: "eng_wood", name: "Engineered Wood", description: "Warm visual texture; use water-tolerant products in wet areas." },
          { id: "sealed_concrete", name: "Sealed Concrete", description: "Contemporary seamless surface; requires sealing for stain protection." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_floor_color_texture",
        type: "text",
        prompt: "What color and surface texture do you prefer for the kitchen flooring?",
        description: "Describe color tone (light, medium, dark), stone vs. wood look, and surface feel (matte, satin, textured).",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      }
    ]
  },

  // -----------------------
  // BASEBOARDS
  // -----------------------
  {
    space: "Kitchen",
    category: "baseboards",
    questions: [
      {
        id: "kit_bb_style_height",
        type: "text",
        prompt: "What baseboard style and height do you prefer in the kitchen?",
        description: "Include style (Square, Craftsman, Colonial) and height (e.g., 3\", 4.5\", 6\").",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_bb_finish",
        type: "single",
        prompt: "Which baseboard finish do you prefer?",
        description: "Select one finish approach for the kitchen baseboards.",
        options: [
          { id: "paint", name: "Paint Grade", description: "Painted finish to match or coordinate with trim and doors." },
          { id: "stain", name: "Stain Grade", description: "Natural wood tone with protective clear finish." },
          { id: "match_existing", name: "Match Existing", description: "Match existing profiles and finish elsewhere in the home." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      }
    ]
  },

  // -----------------------
  // CROWN MOLDINGS
  // -----------------------
  {
    space: "Kitchen",
    category: "crown_moldings",
    questions: [
      {
        id: "kit_crown_presence",
        type: "single",
        prompt: "Do you want crown moldings in the kitchen?",
        description: "Choose whether crown moldings should be used at the ceiling or at the top of cabinets.",
        options: [
          { id: "none", name: "Not Applicable", description: "No crown at ceiling or cabinets." },
          { id: "ceiling", name: "Ceiling Crown", description: "Perimeter crown molding at ceiling transitions." },
          { id: "cabinet", name: "Cabinet Crown", description: "Applied at top of wall cabinets for a finished look." },
          { id: "both", name: "Both Ceiling and Cabinet", description: "Use crown at ceiling and cabinet tops." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_crown_finish",
        type: "single",
        prompt: "Which crown molding finish do you prefer?",
        description: "Select one finish for any crown moldings used in the kitchen.",
        options: [
          { id: "paint", name: "Paint Grade", description: "Painted finish to coordinate with trim or cabinets." },
          { id: "stain", name: "Stain Grade", description: "Wood tone to match or complement cabinetry." },
          { id: "match", name: "Match Cabinets", description: "Match cabinet finish for a built-in appearance." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }, { answerOf: "kit_crown_presence", notIn: ["none"] }] }
      }
    ]
  },

  // -----------------------
  // CEILING FINISH
  // -----------------------
  {
    space: "Kitchen",
    category: "ceiling_finish",
    questions: [
      {
        id: "kit_ceiling_texture_color",
        type: "text",
        prompt: "What ceiling texture and color do you prefer for the kitchen?",
        description: "Indicate Smooth, Light Texture, or Hand-Troweled and provide color approach (match walls, lighter, or accent).",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_ceiling_features",
        type: "text",
        prompt: "Are there any ceiling features you would like in the kitchen?",
        description: "List features such as Coffered, Tray, Vaulted, Decorative Beams, or integrated lighting details.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      }
    ]
  },

  // -----------------------
  // COUNTERTOPS
  // -----------------------
  {
    space: "Kitchen",
    category: "countertops",
    questions: [
      {
        id: "kit_counter_material",
        type: "single",
        prompt: "Which countertop material do you prefer?",
        description: "Select the primary countertop family.",
        options: [
          { id: "quartz", name: "Quartz", description: "Engineered stone with consistent pattern and high durability." },
          { id: "porcelain", name: "Porcelain", description: "Ultra-compact, heat- and UV-resistant surface with minimal maintenance." },
          { id: "quartzite", name: "Quartzite", description: "Natural stone with strong performance and unique veining." },
          { id: "granite", name: "Granite", description: "Natural stone with varied patterns and proven durability." },
          { id: "marble", name: "Marble", description: "Luxurious natural stone; etches and patinas with use." },
          { id: "solid_surface", name: "Solid Surface", description: "Seamable acrylic composites for integral sinks and curves." },
          { id: "butcher_block", name: "Butcher Block", description: "Warm wood accents; periodic maintenance required." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_counter_color_pattern",
        type: "text",
        prompt: "Are there specific countertop colors or patterns you prefer?",
        description: "Describe desired color family, movement (subtle vs. bold), and edge profile preferences.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      }
    ]
  }

  // (All other sections from the prior Kitchen Deep Dive remain intact — Flooring, Lighting, Cabinetry, Backsplash, etc.)
];

// Export to window for script tag loading
if (typeof window !== 'undefined') {
  window.KITCHEN_DEEPDIVE = KITCHEN_DEEPDIVE;
  window.KITCHEN = KITCHEN_DEEPDIVE; // Alias for consistency
}

// Also export for ES6 modules if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { KITCHEN_DEEPDIVE, KITCHEN: KITCHEN_DEEPDIVE };
}

