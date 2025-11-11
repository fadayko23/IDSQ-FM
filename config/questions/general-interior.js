// GENERAL INTERIOR — Deep Dive Question Pack
// Pattern matches your GI deep-dive: gate → per-category question sets.
// All questions are card-based; options include description for helpful tooltips.
// Title case enforced. Units standardized.

const GENERAL_INTERIOR_DEEPDIVE = [
  {
    id: "section_gate_gi",
    space: "General Interior",
    persona: "clara",
    type: "multi",
    prompt: "Which General Interior Categories Would You Like to Decide Now?",
    description: "Select all the interior finish and system categories you want to decide across the home at this stage.",
    options: [
      { id: "flooring", name: "Flooring", description: "Select the type of flooring for interior spaces." },
      { id: "baseboards", name: "Baseboards", description: "Specify baseboard height, profile, and finish." },
      { id: "crown", name: "Crown Moldings", description: "Decide whether crown molding will be used and what style." },
      { id: "int_doors", name: "Interior Doors", description: "Choose the style, height, core and hardware of interior doors." },
      { id: "door_trim", name: "Door Trim", description: "Select the trim style and finish around doors." },
      { id: "window_trim", name: "Window Trim", description: "Select the style, size and finish of window trim." },
      { id: "ceiling_finish", name: "Ceiling Finish", description: "Decide on ceiling texture, feature types and finishes." },
      { id: "wall_finish", name: "Wall Finish", description: "Select wall treatment types, texture, and finish approach." },
      { id: "vent_grills", name: "Decorative Vent Grills", description: "Select style and finish for interior vent grills." },
      { id: "lighting", name: "Lighting", description: "Select key lighting layers and fixture finishes." },
      { id: "fans", name: "Ceiling Fans", description: "Select ceiling fan sizes and locations where needed." },
      { id: "exhaust_fans", name: "Exhaust Fans", description: "Select exhaust fans in service areas and performance preferences." },
      { id: "av", name: "A/V", description: "Select audiovisual systems and scope (home-wide or zone)." },
      { id: "security", name: "Security", description: "Select security system features and integration level." },
      { id: "staircase", name: "Staircase", description: "Decide on stair style, materials and handrail options." },
      { id: "feature_walls", name: "Feature Walls", description: "Select if special accent walls will be included and where." },
      { id: "accent_ceiling", name: "Accent Ceilings", description: "Select ceiling treatments that differ from the standard across spaces." },
      { id: "technology", name: "Smart Technology", description: "Select smart‐home systems, platform preferences and control suites." }
    ]
  },
  {
    space: "General Interior",
    persona: "clara",
    category: "flooring",
    questions: [
      {
        id: "gi_floor_continuity",
        type: "single",
        prompt: "Would You Prefer Continuous Flooring Throughout or Zoned Flooring by Room/Space?",
        description: "Choose one: continuous flooring creates a unified flow; zoned flooring allows different materials per room or area.",
        options: [
          { id: "single", name: "Continuous Floor Throughout", description: "Use one flooring material throughout main interior areas for a seamless look.", flags: ["enforce_one_main_floor"] },
          { id: "zoned", name: "Zoned by Room/Space", description: "Different flooring materials for distinct areas or rooms.", flags: ["allow_floor_mixing"] }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_gi:flooring" }] }
      },
      {
        id: "gi_floor_material_single",
        type: "multi",
        prompt: "Which Flooring Material Families Do You Prefer? (Select All That Apply)",
        description: "Select all flooring material types that you like and want to consider in your home design.",
        options: [
          { id: "engineered_wood", name: "Engineered Wood", description: "Wood-veneer over plywood/substrate – cost-effective wood look." },
          { id: "solid_wood", name: "Solid Wood", description: "Full-depth hardwood for premium feel and longevity." },
          { id: "luxury_vinyl_plank", name: "Luxury Vinyl Plank (LVP)", description: "Water-resistant, easy-maintenance plank flooring." },
          { id: "porcelain_tile", name: "Porcelain Tile", description: "Durable tile, good for high traffic or moisture-prone areas." },
          { id: "natural_stone", name: "Natural Stone", description: "Premium stone flooring for high-end aesthetic." },
          { id: "carpet", name: "Carpet", description: "Soft, warm, quieter flooring option for bedrooms or casual areas." },
          { id: "polished_concrete", name: "Polished Concrete", description: "Industrial/minimalist look; durable and easy to maintain." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_gi:flooring" }, { answerOf: "gi_floor_continuity", in: ["single"] }] }
      },
      {
        id: "gi_floor_specs",
        type: "multi",
        prompt: "Which Flooring Specifications Matter to You? (Select All That Apply)",
        description: "Select all performance or aesthetic specs you want to apply to your flooring selections.",
        options: [
          { id: "wide_plank", name: "Wide Plank (7\"+)", description: "Plank width greater than 7\" for fewer seams and a more open feel." },
          { id: "pattern", name: "Pattern (Herringbone/Parquet)", description: "Decorative layout patterns for flooring to create visual interest." },
          { id: "waterproof", name: "Waterproof Where Needed", description: "Require waterproof flooring in moisture-susceptible areas." },
          { id: "matte_finish", name: "Matte / Low Sheen", description: "Less glossy finish for a more natural look and fewer reflections." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_gi:flooring" }] }
      }
    ]
  },
  {
    space: "General Interior",
    persona: "clara",
    category: "baseboards",
    questions: [
      {
        id: "gi_bb_profile",
        type: "single",
        prompt: "What Baseboard Profile Do You Prefer?",
        description: "Choose the profile (shape/style) of the baseboards in your home.",
        options: [
          { id: "square", name: "Square / Flush", description: "Clean, flush board with minimal detail for modern aesthetics." },
          { id: "stepped", name: "Stepped", description: "Subtle tiered profile for a transitional look." },
          { id: "craftsman", name: "Craftsman", description: "Simple craftsman-style profile with a handcrafted feel." },
          { id: "colonial", name: "Colonial", description: "Traditional profile with molding detail for a classic look." },
          { id: "shadow_reveal", name: "Shadow Reveal", description: "Modern reveal profile leaving a gap for a floating look." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_gi:baseboards" }] }
      },
      {
        id: "gi_bb_height",
        type: "single",
        prompt: "What Height Would You Like for Your Baseboards?",
        description: "Select a height that suits your space scale and ceiling height.",
        options: [
          { id: "low", name: "0\"-3\"", description: "Minimal height typically for modern, lower-cost builds." },
          { id: "medium", name: "3\"-6\"", description: "Standard height for most residential interiors." },
          { id: "tall", name: "6\"+", description: "Tall baseboards that emphasize architecture and height." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_gi:baseboards" }] }
      },
      {
        id: "gi_bb_finish",
        type: "single",
        prompt: "Which Finish Do You Prefer for Your Baseboards?",
        description: "Select the finish grade; if you are in a builder/spec build this may act as a preference only.",
        options: [
          { id: "paint_grade", name: "Paint Grade", description: "Baseboards finished in paint (typically white) for a clean, cost-effective look." },
          { id: "stain_grade", name: "Stain Grade", description: "Stained wood finish for a richer, natural wood look." },
          { id: "match_trim", name: "Match Existing Trim", description: "Match the look of existing trim for a cohesive interior palette." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_gi:baseboards" }] }
      }
    ]
  },
  {
    space: "General Interior",
    persona: "clara",
    category: "int_doors",
    questions: [
      {
        id: "gi_door_style",
        type: "single",
        prompt: "Which Door Style Do You Prefer?",
        description: "Select one interior door style that will define the majority of the home's interior door look.",
        options: [
          { id: "flush", name: "Flush", description: "Smooth, flat surface door for a minimalist appearance and cost-effective installation." },
          { id: "shaker", name: "Shaker", description: "Clean-lines, recessed panel design; good for transitional and modern interiors." },
          { id: "two_panel", name: "2-Panel", description: "Traditional two-panel paneled door offering balanced proportions and value." },
          { id: "five_panel", name: "5-Panel", description: "Higher-specified paneled door with more visual interest and premium feel." },
          { id: "glass_lite", name: "Glass-Lite", description: "Door with a glass insert to bring light between rooms and an open feel." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_gi:int_doors" }] }
      },
      {
        id: "gi_door_core",
        type: "single",
        prompt: "Which Door Core Construction Do You Prefer?",
        description: "Select based on how solid, quiet or premium you want the door performance to be.",
        options: [
          { id: "solid", name: "Solid", description: "Solid wood or composite core for maximum durability and sound control." },
          { id: "hollow", name: "Hollow", description: "Hollow-core door for budget-friendly interiors." },
          { id: "mdf", name: "MDF", description: "Medium-density fiberboard core with smooth finish and mid-tier cost." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_gi:int_doors" }] }
      },
      {
        id: "gi_door_height",
        type: "single",
        prompt: "What Height Do You Prefer for Your Interior Doors?",
        description: "Select the height to coordinate with ceiling height and architectural feel.",
        options: [
          { id: "78\"", name: "78\" (6'-6\")", description: "Standard budget height for interior doors in older homes." },
          { id: "80\"", name: "80\" (6'-8\")", description: "Common standard height for most residences." },
          { id: "84\"", name: "84\" (7'-0\")", description: "Upscale height giving taller appearance and premium feel." },
          { id: "90\"", name: "90\" (7'-6\")", description: "Statement height often used in luxury homes or higher ceilings." },
          { id: "96\"", name: "96\" (8'-0\")", description: "Grand door height for upscale homes with high ceilings." },
          { id: "108\"", name: "108\" (9'-0\")", description: "Very tall interior doors for dramatic scale and luxury architecture." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_gi:int_doors" }] }
      },
      {
        id: "gi_door_motion",
        type: "multi",
        prompt: "Which Door Motion Types Are Applicable? (Select All That Apply)",
        description: "Select all types of door operation you may need (swing, pocket, barn, etc.).",
        options: [
          { id: "swing", name: "Swing", description: "Traditional hinged door swinging open into a room." },
          { id: "pocket", name: "Pocket", description: "Door that slides into the wall for space-saving usage." },
          { id: "barn", name: "Barn", description: "Sliding barn-style door, often used for style and open-plan transitions." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_gi:int_doors" }] }
      },
      {
        id: "gi_door_hardware",
        type: "multi",
        prompt: "Which Hardware & Finish Options Do You Prefer? (Select All That Apply)",
        description: "Select all hardware styles and finishes you'd prefer—note: in builder/spec builds this may act as a preference only.",
        options: [
          { id: "lever", name: "Lever", description: "Lever handle for ease of use and modern aesthetics." },
          { id: "knob", name: "Knob", description: "Traditional door knob for classic look." },
          { id: "brass", name: "Brass", description: "Brass finish for warmth and timeless character." },
          { id: "matte_black", name: "Matte Black", description: "Matte black finish for bold, modern contrast." },
          { id: "chrome", name: "Chrome", description: "Chrome finish for brightness and high reflectivity." },
          { id: "brushed_nickel", name: "Brushed Nickel", description: "Brushed nickel finish for subtle metallic tone." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_gi:int_doors" }] }
      }
    ]
  }
];

// Export to window for script tag loading
if (typeof window !== 'undefined') {
  window.GENERAL_INTERIOR_DEEPDIVE = GENERAL_INTERIOR_DEEPDIVE;
  window.GENERAL_INTERIOR = GENERAL_INTERIOR_DEEPDIVE; // Alias for consistency
}

// Also export for ES6 modules if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GENERAL_INTERIOR_DEEPDIVE, GENERAL_INTERIOR: GENERAL_INTERIOR_DEEPDIVE };
}

