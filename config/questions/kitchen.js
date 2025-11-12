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
          { id: "wall_finish", name: "Wall Finish" },
          { id: "lighting", name: "Lighting" },
          { id: "cabinetry", name: "Cabinetry" },
          { id: "countertops", name: "Countertops" },
          { id: "backsplash", name: "Backsplash" },
          { id: "appliances", name: "Appliances" },
          { id: "hood_ventilation", name: "Hood / Ventilation" },
          { id: "sink_faucet", name: "Sink + Faucet" },
          { id: "storage", name: "Storage Solutions" },
          { id: "seating", name: "Seating" },
          { id: "hardware_accessories", name: "Hardware & Accessories" },
          { id: "waste_management", name: "Waste Management" },
          { id: "special_features", name: "Special Features" }
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
          { id: "porcelain", name: "Porcelain Tile", desc: "Durable, low maintenance, excellent for spills and heavy use." },
          { id: "stone", name: "Natural Stone", desc: "Premium look (e.g., Marble, Limestone); requires sealing and care." },
          { id: "lvp", name: "Luxury Vinyl Plank (LVP)", desc: "Water-resistant, resilient underfoot, budget-friendly." },
          { id: "eng_wood", name: "Engineered Wood", desc: "Warmer look; choose water-tolerant products near wet zones." },
          { id: "sealed_concrete", name: "Sealed Concrete", desc: "Contemporary look; seamless, durable with proper sealers." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_floor_color_texture",
        type: "text",
        prompt: "What color and surface texture do you prefer for the kitchen flooring?",
        description: "Describe light/medium/dark, stone look vs. wood look, and whether you prefer matte, satin, or textured surfaces.",
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
        description: "Share style (e.g., Square, Craftsman, Colonial) and typical height (e.g., 3\", 4-1/2\", 6\").",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_bb_finish",
        type: "single",
        prompt: "Which baseboard finish do you prefer?",
        description: "Select one finish approach for the kitchen baseboards.",
        options: [
          { id: "paint", name: "Paint Grade", desc: "Painted finish to match or coordinate with trim and doors." },
          { id: "stain", name: "Stain Grade", desc: "Natural wood tone with protective clear finish." },
          { id: "match_existing", name: "Match Existing", desc: "Match existing profiles and finish elsewhere in the home." }
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
          { id: "none", name: "Not Applicable", desc: "No crown at ceiling or cabinets." },
          { id: "ceiling", name: "Ceiling Crown", desc: "Perimeter crown molding at ceiling transitions." },
          { id: "cabinet", name: "Cabinet Crown", desc: "Applied at top of wall cabinets for a finished look." },
          { id: "both", name: "Both Ceiling and Cabinet", desc: "Use crown at ceiling and cabinet tops." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_crown_finish",
        type: "single",
        prompt: "Which crown molding finish do you prefer?",
        description: "Select one finish for any crown moldings used in the kitchen.",
        options: [
          { id: "paint", name: "Paint Grade", desc: "Painted finish to coordinate with trim or cabinets." },
          { id: "stain", name: "Stain Grade", desc: "Wood tone to match or complement cabinetry." },
          { id: "match", name: "Match Cabinets", desc: "Match cabinet finish for a built-in appearance." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_kitchen" },
          { answerOf: "kit_crown_presence", notIn: ["none"] }
        ] }
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
  // WALL FINISH
  // -----------------------
  {
    space: "Kitchen",
    category: "wall_finish",
    questions: [
      {
        id: "kit_wall_type",
        type: "single",
        prompt: "Which wall finish type do you prefer for the kitchen?",
        description: "Select the primary finish for wall areas not covered by cabinetry or backsplash.",
        options: [
          { id: "paint", name: "Paint", desc: "Durable scrubbable paint in appropriate sheen for kitchens." },
          { id: "wallpaper", name: "Wallpaper", desc: "Patterned or textural wallcovering in strategic areas." },
          { id: "plaster", name: "Venetian/Lime Plaster", desc: "Hand-troweled finish with subtle movement." },
          { id: "paneling", name: "Paneling", desc: "Beadboard, V-groove, or applied panels as accents." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_wall_color_texture",
        type: "text",
        prompt: "What wall color scheme and texture do you prefer?",
        description: "Describe color family, sheen rules (e.g., satin in kitchen), and any texture preferences.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      }
    ]
  },

  // -----------------------
  // LIGHTING
  // -----------------------
  {
    space: "Kitchen",
    category: "lighting",
    questions: [
      {
        id: "kit_lighting_layers",
        type: "multi",
        prompt: "Which lighting layers do you want in the kitchen? (Select all that apply.)",
        description: "Select the layers we should plan for the space.",
        options: [
          { id: "ambient", name: "Ambient", desc: "General illumination (e.g., recessed or central fixtures)." },
          { id: "task", name: "Task", desc: "Under-cabinet, island pendants, and task-oriented fixtures." },
          { id: "accent", name: "Accent", desc: "Toe-kick, cove, or display lighting for emphasis." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_lighting_specs",
        type: "text",
        prompt: "Do you have specific lighting requirements or controls?",
        description: "Note preferences for dimmers, smart controls, color temperature (e.g., 2700K, 3000K), and tunable options.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      }
    ]
  },

  // -----------------------
  // CABINETRY
  // -----------------------
  {
    space: "Kitchen",
    category: "cabinetry",
    questions: [
      {
        id: "kit_cabinet_style",
        type: "text",
        prompt: "What cabinetry door style do you prefer?",
        description: "Describe door style (e.g., Shaker, Slab, Beaded, Inset) and any panel details.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_cabinet_color_material",
        type: "text",
        prompt: "Do you have color or material preferences for cabinetry?",
        description: "Specify paint colors, stain species, mixed finishes (e.g., perimeter vs. island), and sheen.",
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
          { id: "quartz", name: "Quartz", desc: "Engineered stone with consistent pattern and high durability." },
          { id: "porcelain", name: "Porcelain", desc: "Ultra-compact, heat- and UV-resistant surface with minimal maintenance." },
          { id: "quartzite", name: "Quartzite", desc: "Natural stone with strong performance and unique veining." },
          { id: "granite", name: "Granite", desc: "Natural stone with varied patterns and proven durability." },
          { id: "marble", name: "Marble", desc: "Luxurious natural stone; etches and patinas with use." },
          { id: "solid_surface", name: "Solid Surface", desc: "Seamable acrylic composites for integral sinks and curves." },
          { id: "butcher_block", name: "Butcher Block", desc: "Warm wood accents; periodic maintenance required." }
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
  },

  // -----------------------
  // BACKSPLASH
  // -----------------------
  {
    space: "Kitchen",
    category: "backsplash",
    questions: [
      {
        id: "kit_backsplash_material",
        type: "text",
        prompt: "What backsplash materials and formats do you prefer?",
        description: "List materials (e.g., Ceramic, Porcelain, Stone, Slab) and formats (e.g., 3\"x12\", Mosaic, Full-Height Slab).",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_backsplash_expression",
        type: "text",
        prompt: "Do you prefer a subtle or a bold backsplash expression?",
        description: "Indicate solid vs. patterned, contrast level, and grout color preferences.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      }
    ]
  },

  // -----------------------
  // APPLIANCES
  // -----------------------
  {
    space: "Kitchen",
    category: "appliances",
    questions: [
      {
        id: "kit_appliance_list",
        type: "text",
        prompt: "Which appliances do you need and are there preferred brands or series?",
        description: "List width classes (e.g., 30\", 36\", 48\" range), fuel type, and brand/series preferences.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_appliance_smart_efficiency",
        type: "text",
        prompt: "Are you interested in smart or energy-efficient appliances?",
        description: "Note connectivity (e.g., HomeKit, Google), Energy Star priorities, and monitoring needs.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_appliance_noise_style",
        type: "text",
        prompt: "Do you have noise level or appearance requirements for appliances?",
        description: "Provide dBA targets for dishwashers, panel-ready preferences, or pro-style vs. flush-integrated.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      }
    ]
  },

  // -----------------------
  // HOOD / VENTILATION
  // -----------------------
  {
    space: "Kitchen",
    category: "hood_ventilation",
    questions: [
      {
        id: "kit_hood_specs",
        type: "text",
        prompt: "What are your preferences for the range hood and ventilation system?",
        description: "Specify internal vs. remote blower, target CFM, ducted vs. recirculating, and hood style (e.g., Metal, Wood-Wrapped, Integrated).",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      }
    ]
  },

  // -----------------------
  // SINK + FAUCET
  // -----------------------
  {
    space: "Kitchen",
    category: "sink_faucet",
    questions: [
      {
        id: "kit_sink_type",
        type: "text",
        prompt: "What sink type and configuration do you prefer?",
        description: "State Undermount, Farmhouse/Apron, or Integrated; include bowl configuration (e.g., Single, 60/40) and typical sizes (e.g., 30\", 33\", 36\").",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_faucet_prefs",
        type: "text",
        prompt: "Do you have faucet style and finish preferences?",
        description: "Note pull-down vs. bridge, side spray vs. integrated, and metal finish families to coordinate across the home.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      }
    ]
  },

  // -----------------------
  // STORAGE SOLUTIONS
  // -----------------------
  {
    space: "Kitchen",
    category: "storage",
    questions: [
      {
        id: "kit_storage_needs",
        type: "text",
        prompt: "What specific kitchen storage needs do you have?",
        description: "Describe pantry type, spice management, sheet-pan dividers, appliance garages, pull-outs, or deep drawers.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_storage_custom",
        type: "text",
        prompt: "Are there custom storage solutions you want to include?",
        description: "List any tailored features such as knife blocks, utensil canisters, recycling centers, pet stations, or charging drawers.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      }
    ]
  },

  // -----------------------
  // SEATING
  // -----------------------
  {
    space: "Kitchen",
    category: "seating",
    questions: [
      {
        id: "kit_seating_required",
        type: "text",
        prompt: "Do you need a seating area in the kitchen and for how many people?",
        description: "Specify island seating count, breakfast nook requirements, clearances, and chair vs. stool preferences.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_seating_type",
        type: "text",
        prompt: "What seating types do you prefer for the kitchen?",
        description: "Describe bar-height vs. counter-height, banquette seating, or movable table + chairs.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      }
    ]
  },

  // -----------------------
  // HARDWARE & ACCESSORIES
  // -----------------------
  {
    space: "Kitchen",
    category: "hardware_accessories",
    questions: [
      {
        id: "kit_hardware_finishes",
        type: "text",
        prompt: "What finishes and styles do you prefer for hardware and accessories?",
        description: "Indicate metal families to coordinate (e.g., Brass, Matte Black, Chrome, Nickel) and any special accessories (e.g., Rails, Hooks).",
        prefOnlyIfBuilder: true,
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      }
    ]
  },

  // -----------------------
  // WASTE MANAGEMENT
  // -----------------------
  {
    space: "Kitchen",
    category: "waste_management",
    questions: [
      {
        id: "kit_waste_overview",
        type: "text",
        prompt: "How do you plan to manage waste and recycling in the kitchen?",
        description: "Share trash, recycling, composting, and bag storage needs.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_waste_layout",
        type: "text",
        prompt: "Do you want built-in bins or specific waste drawer layouts?",
        description: "Describe locations (e.g., near sink or prep zone) and bin sizes or divider needs.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      }
    ]
  },

  // -----------------------
  // SPECIAL FEATURES
  // -----------------------
  {
    space: "Kitchen",
    category: "special_features",
    questions: [
      {
        id: "kit_special_list",
        type: "text",
        prompt: "Are there any special features you want in the kitchen?",
        description: "Note items such as Pot Filler, Second Dishwasher, Warming Drawer, Beverage Center, or Ice Maker.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_accent_features",
        type: "text",
        prompt: "Are you interested in accent elements or built-ins for the kitchen?",
        description: "List feature walls, integrated shelving, decorative niches, or display cabinets with glass and lighting.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_unique_requirements",
        type: "text",
        prompt: "Do you have any unique requirements or household needs that should inform the kitchen design?",
        description: "Include ergonomic considerations, accessibility, child/pet accommodations, and maintenance priorities.",
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      }
    ]
  }

]; // end KITCHEN_DEEPDIVE

// Export to window for script tag loading
if (typeof window !== 'undefined') {
  window.KITCHEN_DEEPDIVE = KITCHEN_DEEPDIVE;
  window.KITCHEN = KITCHEN_DEEPDIVE; // Alias for consistency
}

// Also export for ES6 modules if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { KITCHEN_DEEPDIVE, KITCHEN: KITCHEN_DEEPDIVE };
}
