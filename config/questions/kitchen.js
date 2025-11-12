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
        description: "Select the items you want to work through in this kitchen. **(Select all that apply)**",
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
        prompt: "Which kitchen flooring materials do you prefer? (Select all that apply)",
        description: "Choose one or more flooring families you are open to using in the kitchen.",
        options: [
          { id: "porcelain", name: "Porcelain Tile", desc: "Durable, low maintenance, excellent for spills and heavy use." },
          { id: "stone", name: "Natural Stone", desc: "Premium look (e.g., Marble, Limestone); requires sealing and care." },
          { id: "lvp", name: "Luxury Vinyl Plank (LVP)", desc: "Water-resistant, resilient underfoot, budget-friendly." },
          { id: "eng_wood", name: "Engineered Wood", desc: "Warmer look; choose water-tolerant products near wet zones." },
          { id: "sealed_concrete", name: "Sealed Concrete", desc: "Contemporary look; seamless, durable with proper sealers." }
        ],
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
        type: "multi",
        prompt: "What baseboard style and height do you prefer in the kitchen?",
        description: "Select all baseboard styles and heights you're considering. **(Select All That Apply)**",
        options: [
          { id: "square", name: "Square Style", desc: "Clean, modern square profile." },
          { id: "craftsman", name: "Craftsman Style", desc: "Traditional craftsman profile with detail." },
          { id: "colonial", name: "Colonial Style", desc: "Classic colonial profile." },
          { id: "height_3", name: "3\" Height", desc: "Standard 3-inch baseboard height." },
          { id: "height_4_5", name: "4-1/2\" Height", desc: "Medium 4-1/2-inch baseboard height." },
          { id: "height_6", name: "6\" Height", desc: "Tall 6-inch baseboard height." },
          { id: "height_custom", name: "Custom Height", desc: "Non-standard custom height preference." }
        ],
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
        type: "multi",
        prompt: "What ceiling texture and color do you prefer for the kitchen?",
        description: "Select all texture and color approaches you're considering. **(Select All That Apply)**",
        options: [
          { id: "smooth", name: "Smooth", desc: "Smooth, flat ceiling finish." },
          { id: "light_texture", name: "Light Texture", desc: "Subtle textured finish." },
          { id: "hand_troweled", name: "Hand-Troweled", desc: "Hand-troweled finish with movement." },
          { id: "match_walls", name: "Match Walls", desc: "Ceiling color matches wall color." },
          { id: "lighter", name: "Lighter Than Walls", desc: "Ceiling lighter than walls." },
          { id: "accent", name: "Accent Color", desc: "Ceiling uses accent color." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_ceiling_features",
        type: "multi",
        prompt: "Are there any ceiling features you would like in the kitchen?",
        description: "Select all ceiling features you're interested in. **(Select All That Apply)**",
        options: [
          { id: "coffered", name: "Coffered", desc: "Coffered ceiling with recessed panels." },
          { id: "tray", name: "Tray Ceiling", desc: "Tray or stepped ceiling design." },
          { id: "vaulted", name: "Vaulted", desc: "Vaulted or cathedral ceiling." },
          { id: "decorative_beams", name: "Decorative Beams", desc: "Decorative exposed beams." },
          { id: "integrated_lighting", name: "Integrated Lighting", desc: "Ceiling-integrated lighting details." },
          { id: "none", name: "No Special Features", desc: "Standard flat ceiling, no special features." }
        ],
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
        type: "multi",
        prompt: "What wall color scheme and texture do you prefer?",
        description: "Select all color and texture preferences you're considering. **(Select All That Apply)**",
        options: [
          { id: "light_colors", name: "Light Colors", desc: "Light color family preference." },
          { id: "medium_colors", name: "Medium Colors", desc: "Medium color family preference." },
          { id: "dark_colors", name: "Dark Colors", desc: "Dark color family preference." },
          { id: "neutral_palette", name: "Neutral Palette", desc: "Neutral color palette preference." },
          { id: "satin_sheen", name: "Satin Sheen", desc: "Satin sheen finish for kitchen walls." },
          { id: "semi_gloss", name: "Semi-Gloss", desc: "Semi-gloss finish for durability." },
          { id: "textured", name: "Textured Finish", desc: "Textured wall finish preference." }
        ],
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
        prompt: "Which lighting layers do you want in the kitchen? (Select all that apply)",
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
        type: "multi",
        prompt: "Do you have specific lighting requirements or controls?",
        description: "Select all lighting features and controls you want. **(Select All That Apply)**",
        options: [
          { id: "dimmers", name: "Dimmers", desc: "Dimmer controls for adjustable lighting." },
          { id: "smart_controls", name: "Smart Controls", desc: "Smart home integration (HomeKit, Google, etc.)." },
          { id: "color_temp_2700", name: "2700K Color Temperature", desc: "Warm 2700K color temperature." },
          { id: "color_temp_3000", name: "3000K Color Temperature", desc: "Neutral 3000K color temperature." },
          { id: "tunable", name: "Tunable White", desc: "Tunable white lighting options." },
          { id: "none", name: "No Special Requirements", desc: "Standard lighting, no special controls needed." }
        ],
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
        type: "single",
        prompt: "What cabinetry door style do you prefer?",
        description: "Select one primary cabinetry door style.",
        options: [
          { id: "shaker", name: "Shaker", desc: "Classic Shaker style with recessed center panel." },
          { id: "slab", name: "Slab", desc: "Modern flat slab door style." },
          { id: "beaded", name: "Beaded", desc: "Beaded inset panel style." },
          { id: "inset", name: "Inset", desc: "Inset door style with flush panels." },
          { id: "raised_panel", name: "Raised Panel", desc: "Traditional raised panel style." },
          { id: "glass_front", name: "Glass Front", desc: "Glass-front cabinet doors." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_cabinet_color_material",
        type: "multi",
        prompt: "Do you have color or material preferences for cabinetry?",
        description: "Select all cabinetry finish preferences you're considering. **(Select All That Apply)**",
        options: [
          { id: "painted", name: "Painted", desc: "Painted cabinetry finish." },
          { id: "stained_wood", name: "Stained Wood", desc: "Natural wood stain finish." },
          { id: "mixed_finish", name: "Mixed Finish", desc: "Mixed finishes (e.g., perimeter vs. island)." },
          { id: "white", name: "White", desc: "White cabinetry color." },
          { id: "gray", name: "Gray", desc: "Gray cabinetry color." },
          { id: "natural_wood", name: "Natural Wood", desc: "Natural wood species finish." },
          { id: "matte", name: "Matte Sheen", desc: "Matte finish sheen." },
          { id: "satin", name: "Satin Sheen", desc: "Satin finish sheen." }
        ],
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
        type: "multi",
        prompt: "Are there specific countertop colors or patterns you prefer?",
        description: "Select all countertop color and pattern preferences. **(Select All That Apply)**",
        options: [
          { id: "light_colors", name: "Light Colors", desc: "Light color family preference." },
          { id: "medium_colors", name: "Medium Colors", desc: "Medium color family preference." },
          { id: "dark_colors", name: "Dark Colors", desc: "Dark color family preference." },
          { id: "neutral", name: "Neutral Tones", desc: "Neutral color palette." },
          { id: "subtle_movement", name: "Subtle Movement", desc: "Subtle pattern and veining." },
          { id: "bold_movement", name: "Bold Movement", desc: "Bold pattern and veining." },
          { id: "straight_edge", name: "Straight Edge", desc: "Straight edge profile." },
          { id: "beveled_edge", name: "Beveled Edge", desc: "Beveled edge profile." },
          { id: "bullnose_edge", name: "Bullnose Edge", desc: "Bullnose edge profile." }
        ],
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
        type: "multi",
        prompt: "What backsplash materials and formats do you prefer?",
        description: "Select all backsplash materials and formats you're considering. **(Select All That Apply)**",
        options: [
          { id: "ceramic", name: "Ceramic Tile", desc: "Ceramic tile backsplash." },
          { id: "porcelain", name: "Porcelain Tile", desc: "Porcelain tile backsplash." },
          { id: "stone", name: "Natural Stone", desc: "Natural stone backsplash." },
          { id: "slab", name: "Full-Height Slab", desc: "Full-height slab backsplash." },
          { id: "format_3x12", name: "3\"x12\" Format", desc: "3x12 inch tile format." },
          { id: "mosaic", name: "Mosaic", desc: "Mosaic tile pattern." },
          { id: "subway", name: "Subway Tile", desc: "Classic subway tile pattern." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_backsplash_expression",
        type: "single",
        prompt: "Do you prefer a subtle or a bold backsplash expression?",
        description: "Select one backsplash expression style.",
        options: [
          { id: "subtle", name: "Subtle", desc: "Subtle, understated backsplash design." },
          { id: "bold", name: "Bold", desc: "Bold, statement-making backsplash design." },
          { id: "patterned", name: "Patterned", desc: "Patterned backsplash design." },
          { id: "solid", name: "Solid Color", desc: "Solid color backsplash." },
          { id: "contrast", name: "High Contrast", desc: "High contrast with surrounding surfaces." },
          { id: "matching", name: "Matching", desc: "Matching or coordinating with countertops." }
        ],
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
        type: "multi",
        prompt: "Which appliances do you need and are there preferred brands or series?",
        description: "Select all appliances you need for your kitchen. **(Select All That Apply)**",
        options: [
          { id: "range_30", name: "30\" Range", desc: "30-inch range width." },
          { id: "range_36", name: "36\" Range", desc: "36-inch range width." },
          { id: "range_48", name: "48\" Range", desc: "48-inch range width." },
          { id: "gas_range", name: "Gas Range", desc: "Gas-fueled range." },
          { id: "electric_range", name: "Electric Range", desc: "Electric range." },
          { id: "induction", name: "Induction", desc: "Induction cooktop." },
          { id: "wall_oven", name: "Wall Oven", desc: "Wall-mounted oven." },
          { id: "refrigerator", name: "Refrigerator", desc: "Refrigerator needed." },
          { id: "dishwasher", name: "Dishwasher", desc: "Dishwasher needed." },
          { id: "microwave", name: "Microwave", desc: "Microwave needed." },
          { id: "brand_specific", name: "Brand Preference", desc: "Have specific brand or series preferences." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_appliance_smart_efficiency",
        type: "multi",
        prompt: "Are you interested in smart or energy-efficient appliances?",
        description: "Select all smart and efficiency features you want. **(Select All That Apply)**",
        options: [
          { id: "smart_homekit", name: "HomeKit Compatible", desc: "Apple HomeKit integration." },
          { id: "smart_google", name: "Google Assistant", desc: "Google Assistant integration." },
          { id: "smart_alexa", name: "Alexa Compatible", desc: "Amazon Alexa integration." },
          { id: "energy_star", name: "Energy Star", desc: "Energy Star certified appliances." },
          { id: "monitoring", name: "Energy Monitoring", desc: "Energy usage monitoring features." },
          { id: "wifi", name: "WiFi Connectivity", desc: "WiFi-enabled appliances." },
          { id: "none", name: "No Smart Features", desc: "Standard appliances, no smart features needed." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_appliance_noise_style",
        type: "multi",
        prompt: "Do you have noise level or appearance requirements for appliances?",
        description: "Select all noise and appearance preferences. **(Select All That Apply)**",
        options: [
          { id: "quiet_dishwasher", name: "Quiet Dishwasher", desc: "Low noise level dishwasher (dBA targets)." },
          { id: "panel_ready", name: "Panel-Ready", desc: "Panel-ready appliances for integrated look." },
          { id: "pro_style", name: "Pro-Style", desc: "Professional-style appliances." },
          { id: "flush_integrated", name: "Flush-Integrated", desc: "Flush-integrated appearance." },
          { id: "stainless", name: "Stainless Steel", desc: "Stainless steel finish." },
          { id: "custom_finish", name: "Custom Finish", desc: "Custom finish options." }
        ],
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
        type: "multi",
        prompt: "What are your preferences for the range hood and ventilation system?",
        description: "Select all range hood and ventilation preferences. **(Select All That Apply)**",
        options: [
          { id: "internal_blower", name: "Internal Blower", desc: "Internal blower system." },
          { id: "remote_blower", name: "Remote Blower", desc: "Remote blower system." },
          { id: "cfm_400", name: "400+ CFM", desc: "400+ CFM ventilation power." },
          { id: "cfm_600", name: "600+ CFM", desc: "600+ CFM ventilation power." },
          { id: "ducted", name: "Ducted", desc: "Ducted ventilation system." },
          { id: "recirculating", name: "Recirculating", desc: "Recirculating ventilation system." },
          { id: "metal_hood", name: "Metal Hood", desc: "Metal hood style." },
          { id: "wood_wrapped", name: "Wood-Wrapped", desc: "Wood-wrapped hood design." },
          { id: "integrated", name: "Integrated", desc: "Integrated hood design." }
        ],
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
        type: "multi",
        prompt: "What sink type and configuration do you prefer?",
        description: "Select all sink type and configuration preferences. **(Select All That Apply)**",
        options: [
          { id: "undermount", name: "Undermount", desc: "Undermount sink installation." },
          { id: "farmhouse", name: "Farmhouse/Apron", desc: "Farmhouse or apron-front sink." },
          { id: "integrated", name: "Integrated", desc: "Integrated sink design." },
          { id: "single_bowl", name: "Single Bowl", desc: "Single bowl configuration." },
          { id: "double_bowl", name: "Double Bowl", desc: "Double bowl configuration." },
          { id: "bowl_60_40", name: "60/40 Bowl", desc: "60/40 bowl configuration." },
          { id: "size_30", name: "30\" Size", desc: "30-inch sink size." },
          { id: "size_33", name: "33\" Size", desc: "33-inch sink size." },
          { id: "size_36", name: "36\" Size", desc: "36-inch sink size." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_faucet_prefs",
        type: "multi",
        prompt: "Do you have faucet style and finish preferences?",
        description: "Select all faucet style and finish preferences. **(Select All That Apply)**",
        options: [
          { id: "pull_down", name: "Pull-Down", desc: "Pull-down faucet style." },
          { id: "bridge", name: "Bridge", desc: "Bridge faucet style." },
          { id: "side_spray", name: "Side Spray", desc: "Side spray attachment." },
          { id: "integrated_spray", name: "Integrated Spray", desc: "Integrated spray function." },
          { id: "chrome", name: "Chrome", desc: "Chrome finish." },
          { id: "brass", name: "Brass", desc: "Brass finish." },
          { id: "nickel", name: "Nickel", desc: "Nickel finish." },
          { id: "matte_black", name: "Matte Black", desc: "Matte black finish." },
          { id: "coordinate_home", name: "Coordinate Home", desc: "Coordinate with other home finishes." }
        ],
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
        type: "multi",
        prompt: "What specific kitchen storage needs do you have?",
        description: "Select all storage solutions you need. **(Select All That Apply)**",
        options: [
          { id: "pantry", name: "Pantry", desc: "Pantry storage needed." },
          { id: "spice_management", name: "Spice Management", desc: "Spice organization system." },
          { id: "sheet_pan", name: "Sheet Pan Dividers", desc: "Sheet pan storage dividers." },
          { id: "appliance_garage", name: "Appliance Garage", desc: "Appliance garage storage." },
          { id: "pull_outs", name: "Pull-Outs", desc: "Pull-out storage solutions." },
          { id: "deep_drawers", name: "Deep Drawers", desc: "Deep drawer storage." },
          { id: "corner_storage", name: "Corner Storage", desc: "Corner cabinet storage solutions." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_storage_custom",
        type: "multi",
        prompt: "Are there custom storage solutions you want to include?",
        description: "Select all custom storage features you want. **(Select All That Apply)**",
        options: [
          { id: "knife_block", name: "Knife Block", desc: "Built-in knife block storage." },
          { id: "utensil_canisters", name: "Utensil Canisters", desc: "Utensil canister storage." },
          { id: "recycling_center", name: "Recycling Center", desc: "Recycling center storage." },
          { id: "pet_station", name: "Pet Station", desc: "Pet food and water station." },
          { id: "charging_drawer", name: "Charging Drawer", desc: "Charging drawer for devices." },
          { id: "wine_storage", name: "Wine Storage", desc: "Wine storage solutions." },
          { id: "none", name: "No Custom Storage", desc: "Standard storage, no custom features needed." }
        ],
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
        type: "multi",
        prompt: "Do you need a seating area in the kitchen and for how many people?",
        description: "Select all seating requirements. **(Select All That Apply)**",
        options: [
          { id: "island_seating", name: "Island Seating", desc: "Seating at kitchen island." },
          { id: "breakfast_nook", name: "Breakfast Nook", desc: "Breakfast nook seating area." },
          { id: "seating_2", name: "2 People", desc: "Seating for 2 people." },
          { id: "seating_4", name: "4 People", desc: "Seating for 4 people." },
          { id: "seating_6", name: "6+ People", desc: "Seating for 6 or more people." },
          { id: "chairs", name: "Chairs", desc: "Chair seating preference." },
          { id: "stools", name: "Stools", desc: "Stool seating preference." },
          { id: "none", name: "No Seating Needed", desc: "No seating area required in kitchen." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_seating_type",
        type: "multi",
        prompt: "What seating types do you prefer for the kitchen?",
        description: "Select all seating type preferences. **(Select All That Apply)**",
        options: [
          { id: "bar_height", name: "Bar-Height", desc: "Bar-height seating (42 inches)." },
          { id: "counter_height", name: "Counter-Height", desc: "Counter-height seating (36 inches)." },
          { id: "banquette", name: "Banquette Seating", desc: "Banquette seating style." },
          { id: "movable_table", name: "Movable Table + Chairs", desc: "Movable table and chairs setup." },
          { id: "built_in", name: "Built-In Seating", desc: "Built-in seating solutions." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_kitchen" },
          { answerOf: "kit_seating_required", notIn: ["none"] }
        ] }
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
        type: "multi",
        prompt: "What finishes and styles do you prefer for hardware and accessories?",
        description: "Select all hardware finish and style preferences. **(Select All That Apply)**",
        options: [
          { id: "brass", name: "Brass", desc: "Brass hardware finish." },
          { id: "matte_black", name: "Matte Black", desc: "Matte black hardware finish." },
          { id: "chrome", name: "Chrome", desc: "Chrome hardware finish." },
          { id: "nickel", name: "Nickel", desc: "Nickel hardware finish." },
          { id: "bronze", name: "Bronze", desc: "Bronze hardware finish." },
          { id: "rails", name: "Rails", desc: "Kitchen rails/rods." },
          { id: "hooks", name: "Hooks", desc: "Decorative hooks." },
          { id: "modern", name: "Modern Style", desc: "Modern hardware style." },
          { id: "traditional", name: "Traditional Style", desc: "Traditional hardware style." }
        ],
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
        type: "multi",
        prompt: "How do you plan to manage waste and recycling in the kitchen?",
        description: "Select all waste management needs. **(Select All That Apply)**",
        options: [
          { id: "trash", name: "Trash", desc: "Trash disposal needed." },
          { id: "recycling", name: "Recycling", desc: "Recycling bin needed." },
          { id: "composting", name: "Composting", desc: "Composting bin needed." },
          { id: "bag_storage", name: "Bag Storage", desc: "Bag storage for waste." },
          { id: "separate_bins", name: "Separate Bins", desc: "Separate bins for different waste types." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_waste_layout",
        type: "multi",
        prompt: "Do you want built-in bins or specific waste drawer layouts?",
        description: "Select all waste storage layout preferences. **(Select All That Apply)**",
        options: [
          { id: "built_in_bins", name: "Built-In Bins", desc: "Built-in waste bins." },
          { id: "waste_drawer", name: "Waste Drawer", desc: "Dedicated waste drawer." },
          { id: "near_sink", name: "Near Sink", desc: "Waste storage near sink area." },
          { id: "prep_zone", name: "Prep Zone", desc: "Waste storage in prep zone." },
          { id: "custom_sizes", name: "Custom Bin Sizes", desc: "Custom bin size requirements." },
          { id: "dividers", name: "Dividers", desc: "Dividers for waste separation." }
        ],
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
        type: "multi",
        prompt: "Are there any special features you want in the kitchen?",
        description: "Select all special features you want. **(Select All That Apply)**",
        options: [
          { id: "pot_filler", name: "Pot Filler", desc: "Pot filler faucet." },
          { id: "second_dishwasher", name: "Second Dishwasher", desc: "Second dishwasher." },
          { id: "warming_drawer", name: "Warming Drawer", desc: "Warming drawer." },
          { id: "beverage_center", name: "Beverage Center", desc: "Beverage center/wine fridge." },
          { id: "ice_maker", name: "Ice Maker", desc: "Ice maker." },
          { id: "coffee_station", name: "Coffee Station", desc: "Dedicated coffee station." },
          { id: "none", name: "No Special Features", desc: "No special features needed." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_accent_features",
        type: "multi",
        prompt: "Are you interested in accent elements or built-ins for the kitchen?",
        description: "Select all accent features you're interested in. **(Select All That Apply)**",
        options: [
          { id: "feature_wall", name: "Feature Wall", desc: "Accent feature wall." },
          { id: "integrated_shelving", name: "Integrated Shelving", desc: "Integrated open shelving." },
          { id: "decorative_niches", name: "Decorative Niches", desc: "Decorative wall niches." },
          { id: "display_cabinets", name: "Display Cabinets", desc: "Display cabinets with glass." },
          { id: "lighting_features", name: "Lighting Features", desc: "Accent lighting features." },
          { id: "none", name: "No Accent Features", desc: "No accent features needed." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_kitchen" }] }
      },
      {
        id: "kit_unique_requirements",
        type: "multi",
        prompt: "Do you have any unique requirements or household needs that should inform the kitchen design?",
        description: "Select all unique requirements that apply. **(Select All That Apply)**",
        options: [
          { id: "ergonomic", name: "Ergonomic Considerations", desc: "Ergonomic design requirements." },
          { id: "accessibility", name: "Accessibility", desc: "Accessibility features needed." },
          { id: "child_friendly", name: "Child-Friendly", desc: "Child-safe design considerations." },
          { id: "pet_accommodations", name: "Pet Accommodations", desc: "Pet-friendly features." },
          { id: "low_maintenance", name: "Low Maintenance", desc: "Low maintenance priorities." },
          { id: "durability", name: "High Durability", desc: "High durability requirements." },
          { id: "none", name: "No Unique Requirements", desc: "No special requirements." }
        ],
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
