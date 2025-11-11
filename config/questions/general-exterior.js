// GENERAL EXTERIOR — Deep Dive Question Pack
// Drop into your config module and import as needed.
// Pattern matches your GI deep-dive: gate → per-category question sets.
// All questions are card-based; options include `desc` for helpful tooltips.
// No emojis. Title case enforced. Units standardized (e.g., 5", 6").
// Builder/Spec handling: display as "Preference Only" when prefOnlyIfBuilder = true.

const GENERAL_EXTERIOR_DEEPDIVE = [
  // -------------------------
  // Section Gate (choose categories to include now)
  // -------------------------
  {
    id: "section_gate_ge",
    space: "General Exterior",
    persona: "clara",
    type: "multi",
    prompt: "Which General Exterior categories would you like to decide now?",
    description: "Select all that apply. You can revisit categories later.",
    options: [
      { id: "siding", name: "Siding", desc: "Primary wall cladding materials and looks." },
      { id: "roofing", name: "Roofing", desc: "Roof material and performance direction." },
      { id: "windows", name: "Windows", desc: "Frame material and finish preferences." },
      { id: "exterior_doors", name: "Exterior Doors", desc: "Door material/glazing and hardware finish." },
      { id: "trim", name: "Trim", desc: "Fascia/trim materials and color approach." },
      { id: "gutters", name: "Gutters", desc: "Style, size, material, and guards." },
      { id: "exterior_lighting", name: "Exterior Lighting", desc: "Fixture types, CCT, and controls." },
      { id: "landscaping", name: "Landscaping", desc: "Planting themes and maintenance level." },
      { id: "hardscaping", name: "Hardscaping", desc: "Paving materials and built elements." },
      { id: "driveway", name: "Driveway", desc: "Surface material and layout features." },
      { id: "fencing", name: "Fencing", desc: "Privacy level, material, and height." },
      { id: "outdoor_living", name: "Outdoor Living", desc: "Covered areas, kitchens, fire features." },
      { id: "water_features", name: "Water Features", desc: "Fountains, ponds, and runnels." },
      { id: "exterior_paint", name: "Exterior Paint", desc: "Body/trim approach and sheen rules." },
      { id: "architectural", name: "Architectural Details", desc: "Shutters, brackets, beams, columns." },
      { id: "outdoor_tech", name: "Outdoor Technology", desc: "Security, audio, and control systems." },
      { id: "overall_vision", name: "Overall Vision", desc: "Curb-appeal mood and maintenance level." },
      { id: "special_reqs", name: "Special Requirements", desc: "Unique needs to flag for the team." }
    ]
  },
  // =========================
  // SIDING
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "siding",
    questions: [
      {
        id: "ge_siding_materials",
        type: "multi",
        prompt: "Which siding materials would you like us to prioritize?",
        description: "Select all that apply. We'll filter products and details to match these families.",
        options: [
          { id: "fiber_cement", name: "Fiber Cement", desc: "Durable, paintable boards or panels; resists rot and pests." },
          { id: "engineered_wood", name: "Engineered Wood", desc: "Wood look with improved stability and factory finishes." },
          { id: "natural_wood", name: "Natural Wood", desc: "Authentic grain and warmth; periodic finishing required." },
          { id: "stucco", name: "Stucco", desc: "Smooth or textured monolithic finish; regional detailing varies." },
          { id: "brick", name: "Brick", desc: "Classic masonry appearance; long service life and mass." },
          { id: "stone_veneer", name: "Stone Veneer", desc: "Natural or manufactured stone accents with reduced weight." },
          { id: "metal_panel", name: "Metal Panel", desc: "Standing-seam or flat panels for modern looks and durability." },
          { id: "vinyl", name: "Vinyl", desc: "Budget-friendly lap panels; limited high-heat performance." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:siding" }] }
      },
      {
        id: "ge_siding_look",
        type: "multi",
        prompt: "Which siding looks or patterns appeal to you?",
        description: "Select all that apply. We'll steer profiles, reveals, and textures accordingly.",
        options: [
          { id: "horizontal_lap", name: "Horizontal Lap", desc: "Timeless horizontal boards with shadow lines." },
          { id: "board_batten", name: "Board And Batten", desc: "Vertical boards with battens for rhythm and depth." },
          { id: "panel_smooth", name: "Panel – Smooth", desc: "Clean panelized surfaces with minimal texture." },
          { id: "panel_textured", name: "Panel – Textured", desc: "Panelized look with subtle or heavier texture." },
          { id: "shingle_siding", name: "Shingle Siding", desc: "Individual shingles for coastal or cottage character." },
          { id: "mixed_materials", name: "Mixed Materials", desc: "Intentional combinations (e.g., wood + stone accents)." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:siding" }] }
      },
      {
        id: "ge_siding_color_strategy",
        type: "single",
        prompt: "How should the siding color strategy lean overall?",
        description: "Choose the direction that best fits your desired curb appeal.",
        options: [
          { id: "light_neutral", name: "Light Neutrals", desc: "Fresh, bright look; emphasizes shadows and trim." },
          { id: "mid_neutral", name: "Mid-Tone Neutrals", desc: "Balanced depth without strong contrast." },
          { id: "dark_contrast", name: "Dark Or High Contrast", desc: "Bold body or accent masses for drama." },
          { id: "two_tone", name: "Two-Tone Body/Trim", desc: "Purposeful contrast between main cladding and trim." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:siding" }] }
      }
    ]
  },
  // =========================
  // ROOFING
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "roofing",
    questions: [
      {
        id: "ge_roof_material",
        type: "single",
        prompt: "Which roofing material group should we prioritize?",
        description: "Pick one primary direction for product filtering. We can show alternates as backups.",
        options: [
          { id: "arch_shingle", name: "Architectural Asphalt Shingle", desc: "Dimensional shingles; cost-effective with good warranties." },
          { id: "metal_standing", name: "Standing-Seam Metal", desc: "Long life, modern lines; excellent for snow and rain shedding." },
          { id: "tile_clay_concrete", name: "Clay/Concrete Tile", desc: "Mediterranean/Spanish profiles; heavier, long-lasting." },
          { id: "slate_natural", name: "Natural Slate", desc: "Premium stone look; very durable with higher structural load." },
          { id: "composite_slate_shake", name: "Composite Slate/Shake", desc: "Lightweight synthetics mimicking slate or cedar." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:roofing" }] }
      },
      {
        id: "ge_roof_color",
        type: "single",
        prompt: "Which roof color depth do you prefer?",
        description: "Choose a general family. Exact color will be finalized with samples.",
        options: [
          { id: "light", name: "Light", desc: "Cooler appearance; can reduce heat gain in sunny climates." },
          { id: "medium", name: "Medium", desc: "Balanced presence; complements most facades." },
          { id: "dark", name: "Dark", desc: "Strong silhouette and contrast; hides dirt better." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:roofing" }] }
      },
      {
        id: "ge_roof_features",
        type: "multi",
        prompt: "Which roof performance features matter to you?",
        description: "Select all that apply. We'll filter SKUs and assemblies accordingly.",
        options: [
          { id: "cool_roof", name: "Cool Roof Option", desc: "Higher solar reflectance for heat management." },
          { id: "high_wind", name: "High-Wind Rated", desc: "Improved fastening and ratings for storm zones." },
          { id: "snow_load", name: "Snow/Ice Performance", desc: "Underlay and details suited for freeze-thaw climates." },
          { id: "solar_ready", name: "Solar-Ready", desc: "Flashing/attachment planning for PV." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:roofing" }] }
      }
    ]
  },
  // =========================
  // WINDOWS
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "windows",
    questions: [
      {
        id: "ge_window_frame",
        type: "single",
        prompt: "Which window frame material should we prioritize?",
        description: "Pick the best fit for durability, maintenance, and budget.",
        options: [
          { id: "fiberglass", name: "Fiberglass", desc: "Stable, low-maintenance, great for dark finishes." },
          { id: "aluminum", name: "Aluminum", desc: "Slim profiles, modern look; thermally broken options." },
          { id: "wood_clad", name: "Wood-Clad", desc: "Warm interior wood with exterior protection." },
          { id: "vinyl", name: "Vinyl", desc: "Budget-friendly; limited dark-color performance." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:windows" }] }
      },
      {
        id: "ge_window_color",
        type: "single",
        prompt: "Which window exterior color family do you prefer?",
        description: "Select a direction. Exact color will be finalized with samples.",
        options: [
          { id: "black", name: "Black", desc: "Crisp outlines and modern contrast." },
          { id: "white", name: "White", desc: "Clean, bright, and traditional." },
          { id: "bronze", name: "Bronze", desc: "Warm, subtle contrast that suits many palettes." },
          { id: "custom", name: "Custom/Match", desc: "Color matched to body or trim strategy." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:windows" }] }
      },
      {
        id: "ge_window_performance",
        type: "multi",
        prompt: "Which window performance features are priorities?",
        description: "Select all that apply. We'll align glass and ratings to your climate.",
        options: [
          { id: "low_e", name: "Low-E/High Efficiency", desc: "Energy-efficient coatings tuned to climate zone." },
          { id: "sound", name: "Sound Control", desc: "Laminated or IGU options for noise reduction." },
          { id: "impact", name: "Impact Rated", desc: "Storm/impact resistance where required or desired." },
          { id: "privacy", name: "Privacy Glass Areas", desc: "Obscure/frosted where privacy is preferred." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:windows" }] }
      }
    ]
  },
  // =========================
  // EXTERIOR DOORS
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "exterior_doors",
    questions: [
      {
        id: "ge_door_core",
        type: "single",
        prompt: "Which exterior door material should we prioritize?",
        description: "Pick one for the main specification set. Others can be alternates.",
        options: [
          { id: "fiberglass", name: "Fiberglass", desc: "Durable, low maintenance; excellent for finishes and performance." },
          { id: "wood", name: "Wood", desc: "Premium look and feel; requires periodic finishing." },
          { id: "steel", name: "Steel", desc: "Strong and secure; smooth or textured faces available." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:exterior_doors" }] }
      },
      {
        id: "ge_door_glazing",
        type: "single",
        prompt: "What exterior door glazing approach do you prefer?",
        description: "Choose the amount of glass you'd like in standard exterior doors.",
        options: [
          { id: "solid", name: "Solid", desc: "No glass; maximum privacy and security." },
          { id: "partial_lite", name: "Partial Lite (1/4–3/4)", desc: "Balanced daylight with privacy options." },
          { id: "full_lite", name: "Full Lite", desc: "Maximum daylight and visual connection." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:exterior_doors" }] }
      },
      {
        id: "ge_door_hardware_finish",
        type: "single",
        prompt: "Which hardware finish family should we align with for exterior doors?",
        description: "This sets the finish direction for handlesets and hinges.",
        options: [
          { id: "brass", name: "Brass", desc: "Classic warmth; ages gracefully in many climates." },
          { id: "black", name: "Matte Black", desc: "Modern contrast that pairs with many palettes." },
          { id: "chrome", name: "Chrome", desc: "Bright, clean, and contemporary." },
          { id: "nickel", name: "Brushed Nickel", desc: "Soft sheen; versatile across styles." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:exterior_doors" }] }
      }
    ]
  },
  // =========================
  // TRIM
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "trim",
    questions: [
      {
        id: "ge_trim_material",
        type: "single",
        prompt: "Which exterior trim material do you prefer?",
        description: "Pick the base material for fascia and trim elements.",
        options: [
          { id: "pvc_composite", name: "PVC/Composite", desc: "Low-maintenance trim with excellent rot resistance." },
          { id: "wood", name: "Wood", desc: "Natural look; requires periodic painting or staining." },
          { id: "fiber_cement_trim", name: "Fiber Cement Trim", desc: "Durable, paintable trim to match fiber-cement siding." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:trim" }] }
      },
      {
        id: "ge_trim_color",
        type: "single",
        prompt: "How should trim color relate to the body color?",
        description: "Choose a direction for contrast and emphasis.",
        options: [
          { id: "match_body", name: "Match Body", desc: "Monochrome look; emphasizes form over edges." },
          { id: "contrast", name: "Contrast", desc: "Crisp outlines and traditional emphasis at openings and edges." },
          { id: "natural_stain", name: "Natural Stain (Where Applicable)", desc: "Warm, natural accents for select elements." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:trim" }] }
      }
    ]
  },
  // =========================
  // GUTTERS
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "gutters",
    questions: [
      {
        id: "ge_gutter_style",
        type: "single",
        prompt: "Which gutter profile do you prefer?",
        description: "Choose the overall shape that suits the architecture.",
        options: [
          { id: "k_style", name: "K-Style", desc: "Widely used, crown-like face; suits many homes." },
          { id: "half_round", name: "Half-Round", desc: "Classic curved profile; pairs well with traditional styles." },
          { id: "box", name: "Box/Modern", desc: "Straight-lined profile for contemporary facades." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:gutters" }] }
      },
      {
        id: "ge_gutter_size",
        type: "single",
        prompt: "Which gutter size do you prefer?",
        description: "Larger sizes handle more rainfall and big roof areas.",
        options: [
          { id: "5in", name: '5"', desc: "Standard capacity for typical roof areas." },
          { id: "6in", name: '6"', desc: "Higher capacity; common for larger or steep roofs." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:gutters" }] }
      },
      {
        id: "ge_gutter_material",
        type: "single",
        prompt: "Which gutter material should we prioritize?",
        description: "Pick a material for durability, appearance, and budget.",
        options: [
          { id: "aluminum", name: "Aluminum", desc: "Common and economical; wide color range." },
          { id: "copper", name: "Copper", desc: "Premium, ages to patina; long service life." },
          { id: "steel", name: "Galvanized/Steel", desc: "Strong; may require periodic maintenance." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:gutters" }] }
      },
      {
        id: "ge_gutter_accessories",
        type: "multi",
        prompt: "Which gutter accessories should we plan for?",
        description: "Select all that apply. We'll coordinate details and SKUs.",
        options: [
          { id: "guards", name: "Gutter Guards", desc: "Leaf protection to reduce maintenance." },
          { id: "rain_chain", name: "Rain Chains (Select Locations)", desc: "Decorative water drop paths at key eaves." },
          { id: "heat_cable", name: "Heat Cables (Cold Climates)", desc: "Helps mitigate ice buildup at eaves." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:gutters" }] }
      }
    ]
  },
  // =========================
  // EXTERIOR LIGHTING
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "exterior_lighting",
    questions: [
      {
        id: "ge_light_types",
        type: "multi",
        prompt: "Which exterior lighting fixture types do you want?",
        description: "Select all that apply. We'll map quantities/locations later per space.",
        options: [
          { id: "wall_sconce", name: "Wall Sconce", desc: "Entry and garage wall lights for wayfinding and accent." },
          { id: "pendant_chandelier", name: "Pendant/Chandelier", desc: "Covered porch or patio hanging fixtures." },
          { id: "recessed_soffit", name: "Recessed Soffit", desc: "Downlights at eaves or covered ceilings." },
          { id: "step_stair", name: "Step/Stair", desc: "Integrated tread or riser lights for safety." },
          { id: "path_post", name: "Path/Post", desc: "Low-level pathway and landscape accents." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:exterior_lighting" }] }
      },
      {
        id: "ge_light_cct",
        type: "single",
        prompt: "Which color temperature should we target outdoors?",
        description: "Pick one consistent exterior CCT. We can mix subtly for special zones if needed.",
        options: [
          { id: "2700k", name: "2700K (Warm)", desc: "Soft, residential warmth; flattering at entries and patios." },
          { id: "3000k", name: "3000K (Neutral Warm)", desc: "Clean look with comfort; versatile for most fixtures." },
          { id: "3500k", name: "3500K (Neutral)", desc: "Crisper appearance; good for path/safety lighting." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:exterior_lighting" }] }
      },
      {
        id: "ge_light_controls",
        type: "multi",
        prompt: "Which exterior lighting control features do you prefer?",
        description: "Select all that apply. We'll coordinate compatible fixtures and controls.",
        options: [
          { id: "dusk_dawn", name: "Dusk-To-Dawn", desc: "Photocell-based automatic on/off." },
          { id: "motion", name: "Motion Activation", desc: "Trigger-based illumination for safety and energy savings." },
          { id: "smart_platform", name: "Smart Platform", desc: "App or system control (e.g., scenes, schedules)." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:exterior_lighting" }] }
      }
    ]
  },
  // =========================
  // LANDSCAPING
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "landscaping",
    questions: [
      {
        id: "ge_land_theme",
        type: "multi",
        prompt: "Which planting themes should guide the landscape?",
        description: "Select all that apply. Specific species will be chosen per climate zone.",
        options: [
          { id: "low_water_native", name: "Low-Water/Native", desc: "Drought-tolerant natives and climate-appropriate plants." },
          { id: "evergreen_structure", name: "Evergreen Structure", desc: "Year-round bones with seasonal color accents." },
          { id: "cottage_pollinator", name: "Cottage/Pollinator", desc: "Layered perennials and habitat-friendly choices." },
          { id: "resort_clean", name: "Resort/Clean Lines", desc: "Simple, manicured beds and structured hedges." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:landscaping" }] }
      },
      {
        id: "ge_land_maintenance",
        type: "single",
        prompt: "What landscape maintenance level fits you best?",
        description: "Choose the ongoing care level you're comfortable with.",
        options: [
          { id: "low", name: "Low", desc: "Minimal pruning and irrigation; slow-growing frameworks." },
          { id: "moderate", name: "Moderate", desc: "Seasonal pruning and refreshes." },
          { id: "lush", name: "Lush/High", desc: "Full, colorful gardens with regular care." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:landscaping" }] }
      }
    ]
  },
  // =========================
  // HARDSCAPING
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "hardscaping",
    questions: [
      {
        id: "ge_hard_materials",
        type: "multi",
        prompt: "Which hardscape surface materials should we prioritize?",
        description: "Select all that apply. We'll use these for patios, walks, and terraces.",
        options: [
          { id: "concrete_paver", name: "Concrete Paver", desc: "Modular pavers; patterns and colors vary widely." },
          { id: "natural_stone", name: "Natural Stone", desc: "Flagstone or cut stone for premium look and longevity." },
          { id: "stamped_concrete", name: "Stamped Concrete", desc: "Monolithic slab with patterned surface." },
          { id: "gravel_fines", name: "Gravel/Fines", desc: "Permeable, informal paths and sitting areas." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:hardscaping" }] }
      },
      {
        id: "ge_hard_elements",
        type: "multi",
        prompt: "Which built hardscape elements would you like included?",
        description: "Select all that apply. We'll plan structure, drainage, and utilities as needed.",
        options: [
          { id: "seat_walls", name: "Seat Walls", desc: "Low retaining or freestanding walls for seating." },
          { id: "retaining_walls", name: "Retaining Walls", desc: "Grade management and terracing where needed." },
          { id: "fire_feature", name: "Fire Feature", desc: "Fire pit or fireplace with proper clearances." },
          { id: "steps_risers", name: "Steps/Risers", desc: "Safe transitions between elevations." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:hardscaping" }] }
      }
    ]
  },
  // =========================
  // DRIVEWAY
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "driveway",
    questions: [
      {
        id: "ge_drive_material",
        type: "single",
        prompt: "Which driveway surface material should we prioritize?",
        description: "Pick one primary direction; alternates can be secondary options.",
        options: [
          { id: "concrete", name: "Concrete", desc: "Standard finish; option for decorative cuts or coatings." },
          { id: "pavers", name: "Pavers", desc: "Modular system with repairable sections and rich patterns." },
          { id: "asphalt", name: "Asphalt", desc: "Cost-effective blacktop; quick install and repair." },
          { id: "gravel", name: "Gravel", desc: "Informal look; permeable with periodic maintenance." },
          { id: "resin_bound", name: "Resin-Bound Aggregate", desc: "Permeable, smooth, and contemporary appearance." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:driveway" }] }
      },
      {
        id: "ge_drive_layout",
        type: "multi",
        prompt: "Which driveway layout features should we include?",
        description: "Select all that apply. Final geometry will follow site constraints.",
        options: [
          { id: "straight", name: "Straight/Direct", desc: "Efficient access from street to garage." },
          { id: "parking_pad", name: "Parking Pad", desc: "Extra stand-alone parking surface." },
          { id: "circular", name: "Circular/Loop", desc: "Entry loop for drop-off and easier egress." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:driveway" }] }
      }
    ]
  },
  // =========================
  // FENCING
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "fencing",
    questions: [
      {
        id: "ge_fence_privacy",
        type: "single",
        prompt: "What overall fencing privacy level do you want?",
        description: "Choose the baseline. Details will vary by location on site.",
        options: [
          { id: "privacy", name: "Privacy", desc: "Minimal visibility through fence line." },
          { id: "semi_private", name: "Semi-Private", desc: "Filtered views with spaced boards or lattice." },
          { id: "open", name: "Open", desc: "Transparent boundary with rails or pickets." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:fencing" }] }
      },
      {
        id: "ge_fence_material",
        type: "single",
        prompt: "Which fencing material should we prioritize?",
        description: "Pick one. Finish and color can be set separately if needed.",
        options: [
          { id: "wood", name: "Wood", desc: "Warm and adaptable; requires periodic sealing or paint." },
          { id: "composite", name: "Composite", desc: "Low-maintenance boards with wood-like appearance." },
          { id: "metal", name: "Metal (Aluminum/Steel)", desc: "Durable picket or panel systems; powder-coated finishes." },
          { id: "masonry", name: "Masonry", desc: "Block, brick, or stone walls where allowed." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:fencing" }] }
      },
      {
        id: "ge_fence_height",
        type: "single",
        prompt: "What typical fence height should we plan for?",
        description: "Local codes apply; heights may vary by segment.",
        options: [
          { id: "4in", name: '4"', desc: "Front yard or decorative sections where allowed." },
          { id: "6in", name: '6"', desc: "Common backyard privacy height." },
          { id: "8in", name: '8"', desc: "Extra privacy or along high-exposure edges (where permitted)." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:fencing" }] }
      }
    ]
  },
  // =========================
  // OUTDOOR LIVING
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "outdoor_living",
    questions: [
      {
        id: "ge_outdoor_elements",
        type: "multi",
        prompt: "Which outdoor living features should we include?",
        description: "Select all that apply. Utilities and clearances will be coordinated later.",
        options: [
          { id: "covered_patio", name: "Covered Patio/Porch", desc: "Weather-sheltered seating or dining area." },
          { id: "pergola", name: "Pergola/Trellis", desc: "Open-air structure for shade and vines." },
          { id: "outdoor_kitchen", name: "Outdoor Kitchen", desc: "Grill, counter, sink, and appliance provisions." },
          { id: "fireplace_pit", name: "Fireplace/Fire Pit", desc: "Gathering feature with code-compliant placement." },
          { id: "screens_heaters", name: "Screens/Heaters", desc: "Motorized screens and radiant heaters for comfort." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:outdoor_living" }] }
      }
    ]
  },
  // =========================
  // WATER FEATURES
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "water_features",
    questions: [
      {
        id: "ge_water_types",
        type: "multi",
        prompt: "Which water feature types interest you?",
        description: "Select all that apply. Siting will consider views, sound, and safety.",
        options: [
          { id: "fountain", name: "Fountain/Bubbler", desc: "Compact feature for entry court or garden focal point." },
          { id: "pond", name: "Pond", desc: "Still water with planting shelf options." },
          { id: "runnel_fall", name: "Runnel/Waterfall", desc: "Moving water for sound and visual interest." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:water_features" }] }
      }
    ]
  },
  // =========================
  // EXTERIOR PAINT
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "exterior_paint",
    questions: [
      {
        id: "ge_paint_body_trim",
        type: "single",
        prompt: "How should the body and trim colors relate?",
        description: "Choose a high-level strategy. Exact colors will be sampled on site.",
        options: [
          { id: "light_body_dark_trim", name: "Light Body / Dark Trim", desc: "Classic contrast emphasizing edges and openings." },
          { id: "dark_body_light_trim", name: "Dark Body / Light Trim", desc: "Bold massing with bright outlines." },
          { id: "monochrome", name: "Monochrome", desc: "Unified body and trim for a modern, simplified look." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:exterior_paint" }] }
      },
      {
        id: "ge_paint_sheen",
        type: "single",
        prompt: "Which exterior paint sheen rule should we follow?",
        description: "Set a consistent sheen strategy for body and trim.",
        options: [
          { id: "flat_body_satin_trim", name: "Flat Body / Satin Trim", desc: "Common combo; low glare body with durable trim." },
          { id: "satin_all", name: "Satin Body And Trim", desc: "Uniform, slightly higher sheen across surfaces." },
          { id: "high_durability", name: "High-Durability System", desc: "Enhanced coatings for harsh climates/exposures." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:exterior_paint" }] }
      }
    ]
  },
  // =========================
  // ARCHITECTURAL DETAILS
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "architectural",
    questions: [
      {
        id: "ge_arch_elements",
        type: "multi",
        prompt: "Which architectural detail elements should we include?",
        description: "Select all that apply. We'll scale and place details per facade.",
        options: [
          { id: "shutters", name: "Shutters", desc: "Operable or decorative units sized to the opening." },
          { id: "brackets", name: "Brackets/Corbels", desc: "Support accents at eaves or entries." },
          { id: "beams", name: "Exposed Beams", desc: "Expressed structure in covered areas." },
          { id: "columns", name: "Columns/Pilasters", desc: "Entry or porch supports with tailored proportions." },
          { id: "gable_accents", name: "Gable Accents", desc: "Trusswork or vent details at gables." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:architectural" }] }
      }
    ]
  },
  // =========================
  // OUTDOOR TECHNOLOGY
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "outdoor_tech",
    questions: [
      {
        id: "ge_tech_scope",
        type: "multi",
        prompt: "Which outdoor technology systems should we plan for?",
        description: "Select all that apply. We'll coordinate power/network needs.",
        options: [
          { id: "security_cameras", name: "Security Cameras", desc: "Perimeter view with NVR or cloud options." },
          { id: "video_doorbell", name: "Video Doorbell", desc: "Entry monitoring with notifications." },
          { id: "smart_locks", name: "Smart Locks", desc: "Keyless entry and access control." },
          { id: "landscape_audio", name: "Landscape Audio", desc: "Discreet speakers for outdoor zones." },
          { id: "wifi_coverage", name: "Wi-Fi Coverage", desc: "Access points for patios and yards." },
          { id: "smart_irrigation", name: "Smart Irrigation", desc: "Weather-adaptive watering controllers." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:outdoor_tech" }] }
      }
    ]
  },
  // =========================
  // OVERALL VISION
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "overall_vision",
    questions: [
      {
        id: "ge_curb_mood",
        type: "single",
        prompt: "Which curb-appeal mood should lead the exterior?",
        description: "Pick the overall feeling. This guides contrast, materials, and accents.",
        options: [
          { id: "warm_welcoming", name: "Warm And Welcoming", desc: "Inviting palette with approachable details." },
          { id: "elegant_timeless", name: "Elegant And Timeless", desc: "Refined proportions and classic restraint." },
          { id: "bold_striking", name: "Bold And Striking", desc: "High contrast and statement elements." },
          { id: "understated_simple", name: "Understated And Simple", desc: "Quiet, cohesive, and low-contrast." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:overall_vision" }] }
      },
      {
        id: "ge_maintenance",
        type: "single",
        prompt: "What maintenance level should we target for the exterior?",
        description: "Choose the upkeep level you prefer across materials and plantings.",
        options: [
          { id: "low", name: "Low", desc: "Favor long-life finishes and low-care plantings." },
          { id: "moderate", name: "Moderate", desc: "Balanced care for a wider range of looks." },
          { id: "not_priority", name: "Not A Priority", desc: "Aesthetic takes precedence over maintenance effort." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:overall_vision" }] }
      }
    ]
  },
  // =========================
  // SPECIAL REQUIREMENTS
  // =========================
  {
    space: "General Exterior",
    persona: "clara",
    category: "special_reqs",
    questions: [
      {
        id: "ge_special_flags",
        type: "multi",
        prompt: "Do any of these special requirements apply?",
        description: "Select all that apply. We'll capture details in the final package.",
        options: [
          { id: "house_numbers", name: "Custom House Numbers", desc: "Sized and placed for clarity and style." },
          { id: "mailbox_feature", name: "Mailbox Feature", desc: "Integrated masonry or coordinated freestanding unit." },
          { id: "address_lighting", name: "Address Lighting", desc: "Illuminated numbers for visibility at night." },
          { id: "historic_review", name: "Historic Review/HOA", desc: "Design must comply with review board guidelines." },
          { id: "wildfire_zone", name: "Wildfire/Ember Zone", desc: "Materials and vents rated for WUI conditions." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_ge:special_reqs" }] }
      }
    ]
  }
];

// Export to window for script tag loading
if (typeof window !== 'undefined') {
  window.GENERAL_EXTERIOR_DEEPDIVE = GENERAL_EXTERIOR_DEEPDIVE;
  window.GENERAL_EXTERIOR = GENERAL_EXTERIOR_DEEPDIVE; // Alias for consistency
}

// Also export for ES6 modules if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GENERAL_EXTERIOR_DEEPDIVE, GENERAL_EXTERIOR: GENERAL_EXTERIOR_DEEPDIVE };
}

