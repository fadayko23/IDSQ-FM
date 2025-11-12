// BEDROOM — Deep Dive Question Pack
// Standalone config for Bedroom. Card-based choices, Title Case, ″/′ symbols, no emojis.
// Gated by routeMode=deep and section_gate_bedroom selection.
// Assumes an earlier global answer `br_type` exists and is one of: ["nursery","child","teen","adult","inlaw"].

const BEDROOM_DEEPDIVE = [
  // -----------------------
  // 0) SECTION GATE (optional, if your UI shows per-space category toggles)
  // -----------------------
  // If you already render a separate gate, keep using it and ignore this block.
  {
    space: "Bedroom",
    persona: "clara",
    category: "section_gate",
    questions: [
      {
        id: "section_gate_bedroom",
        type: "multi",
        prompt: "Which Bedroom categories do you want to decide now?",
        description: "Select the items you want to work through in this bedroom. **(Select all that apply.)**",
        options: [
          { id: "room_dimensions",  name: "Room Dimensions" },
          { id: "age_needs_suite",  name: "Demographic Needs" },
          { id: "bed_suite",        name: "Bed & Nightstands" },
          { id: "seating_area",     name: "Seating Area" },
          { id: "rug",              name: "Rug" },
          { id: "window_treatments",name: "Window Treatments" },
          { id: "closet_system",    name: "Closet System" },
          { id: "entertainment",    name: "Entertainment TV" },
          { id: "fireplace",        name: "Fireplace" },
          { id: "flooring",         name: "Flooring" },
          { id: "baseboards",       name: "Baseboards" },
          { id: "crown_moldings",   name: "Crown Moldings" },
          { id: "ceiling_finish",   name: "Ceiling Finish" },
          { id: "lighting",         name: "Lighting" }
        ],
        showIf: { all: [{ routeMode: ["deep", "standard", "express"] }] }
      }
    ]
  },

  // -----------------------
  // 1) ROOM DIMENSIONS & HEIGHT (foundation first)
  // -----------------------
  {
    space: "Bedroom",
    category: "room_dimensions",
    questions: [
      {
        id: "br_room_dims",
        type: "single",
        prompt: "What are the approximate room dimensions?",
        description: "Choose the closest size so we can right-size the bed, nightstands, dressers, and seating.",
        options: [
          { id: "9x10",  name: "9′ × 10′",  description: "Compact secondary room; careful furniture sizing required." },
          { id: "10x10", name: "10′ × 10′", description: "Common small bedroom; optimized layouts recommended." },
          { id: "10x11", name: "10′ × 11′", description: "Typical secondary bedroom footprint." },
          { id: "10x12", name: "10′ × 12′", description: "Allows a Full/Queen with thoughtful circulation." },
          { id: "11x12", name: "11′ × 12′", description: "Comfortable secondary bedroom with storage options." },
          { id: "12x12", name: "12′ × 12′", description: "Square plan; supports varied furniture arrangements." },
          { id: "12x14", name: "12′ × 14′", description: "Generous space; easier to include dresser and seating." },
          { id: "12x16", name: "12′ × 16′", description: "Spacious layout; supports King and lounge pieces." },
          { id: "14x16", name: "14′ × 16′", description: "Primary-scale room; multiple zones feasible." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      },
      {
        id: "br_ceiling_height",
        type: "single",
        prompt: "What is the typical ceiling height?",
        description: "Select the finished height to right-size trim, fixtures, and drapery drops.",
        options: [
          { id: "80",       name: "6′-8″ (80″)",    description: "Renovation-standard height near older door frames." },
          { id: "96",       name: "8′-0″ (96″)",    description: "Modern standard; wide product compatibility." },
          { id: "108",      name: "9′-0″ (108″)",   description: "Taller rooms; supports bolder trim and pendants." },
          { id: "120_plus", name: "10′-0″ (120″)+", description: "Dramatic height; feature ceilings and tall panels feasible." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      }
    ]
  },

  // -----------------------
  // 2) DEMOGRAPHIC / NEEDS (BEFORE bed planning; filters downstream)
  // -----------------------
  {
    space: "Bedroom",
    category: "age_needs_suite",
    questions: [
      // Gateway notes to make filtering explicit for users
      {
        id: "br_needs_note",
        type: "notice",
        prompt: "We'll tailor options to match your needs.",
        description: "Based on the bedroom's intended occupant (e.g., Nursery, Child, Teen, Adult, In-Law), we'll show only relevant options and sizes.",
        options: [],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      },

      // Nursery-specific needs
      {
        id: "br_nursery_core",
        type: "multi",
        prompt: "Which nursery elements are needed?",
        description: "Select core items to plan a functional, calming nursery. **(Select all that apply.)**",
        options: [
          { id: "crib",             name: "Crib",               description: "Standard crib with safe clearances." },
          { id: "convertible_crib", name: "Convertible Crib",   description: "Transforms to a toddler bed later." },
          { id: "changing_station", name: "Changing Station",   description: "Dresser or table with secure setup." },
          { id: "glider_recliner",  name: "Glider/Recliner",    description: "Comfortable chair for feeding and soothing." },
          { id: "blackout",         name: "Blackout Treatments",description: "Maximum light control to support sleep." },
          { id: "soft_night_light", name: "Soft Night Light",   description: "Low-level light for nighttime care." }
        ],
        setFlags: { br_path_nursery: true },
        showIf: { all: [
          { routeMode: ["deep"] }, { selected: "section_gate_bedroom" }, { answerOf: "br_type", in: ["nursery"] }
        ] }
      },
      {
        id: "br_nursery_adult_bed",
        type: "single",
        prompt: "Do you also want an adult bed in the nursery?",
        description: "Choose whether to plan a standard bed alongside the crib (space permitting).",
        options: [
          { id: "yes", name: "Yes", description: "Include a Full or Queen if room size allows." },
          { id: "no",  name: "No",  description: "Crib-only sleeping arrangement." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] }, { selected: "section_gate_bedroom" },
          { answerOf: "br_type", in: ["nursery"] }
        ] }
      },

      // Child
      {
        id: "br_child_needs",
        type: "multi",
        prompt: "Which elements should a young child's bedroom include?",
        description: "Pick furniture and features that support sleep, play, and storage. **(Select all that apply.)**",
        options: [
          { id: "twin_or_full", name: "Twin or Full Bed", description: "Age-appropriate footprint with safety in mind." },
          { id: "toy_storage",  name: "Toy Storage",       description: "Bins, shelves, or cubbies for organization." },
          { id: "book_storage", name: "Book Storage",      description: "Shelving for reading accessibility." },
          { id: "desk_small",   name: "Small Desk",        description: "Compact homework or creative station." },
          { id: "durable_rug",  name: "Durable Rug",       description: "Performance fiber or low-pile for easy cleaning." }
        ],
        setFlags: { br_path_child: true },
        showIf: { all: [
          { routeMode: ["deep"] }, { selected: "section_gate_bedroom" }, { answerOf: "br_type", in: ["child"] }
        ] }
      },

      // Teen
      {
        id: "br_teen_needs",
        type: "multi",
        prompt: "Which elements should a teen's bedroom include?",
        description: "Support study, hobbies, and personal expression with the right components. **(Select all that apply.)**",
        options: [
          { id: "full_or_queen", name: "Full or Queen Bed",   description: "Larger sleeping surface for growth and comfort." },
          { id: "desk_study",    name: "Study Desk",          description: "Ergonomic chair and task lighting encouraged." },
          { id: "vanity",        name: "Make-Up Vanity",      description: "Dedicated grooming area with mirror and lighting." },
          { id: "media_setup",   name: "Media/Headphone Hub", description: "Cable management and charging solutions." },
          { id: "shelving_board",name: "Shelving/Display Board", description: "Space for books, collectibles, and inspiration." }
        ],
        setFlags: { br_path_teen: true },
        showIf: { all: [
          { routeMode: ["deep"] }, { selected: "section_gate_bedroom" }, { answerOf: "br_type", in: ["teen"] }
        ] }
      },

      // Adult
      {
        id: "br_adult_options",
        type: "multi",
        prompt: "Which additional features would you like to include?",
        description: "Enhance comfort and function to suit your routine. **(Select all that apply.)**",
        options: [
          { id: "reading_sconces", name: "Bedside Reading Sconces", description: "Hardwired lighting with focused beams." },
          { id: "makeup_vanity",   name: "Make-Up Vanity",          description: "Dedicated station with task lighting and storage." },
          { id: "laundry_pullouts",name: "Laundry Pull-Outs",       description: "Integrated hampers in case goods." },
          { id: "secure_drawer",   name: "Secure Drawer",           description: "Locking storage for valuables." }
        ],
        setFlags: { br_path_adult: true },
        showIf: { all: [
          { routeMode: ["deep"] }, { selected: "section_gate_bedroom" }, { answerOf: "br_type", in: ["adult"] }
        ] }
      },

      // In-Law
      {
        id: "br_inlaw_needs",
        type: "multi",
        prompt: "Which features should the in-law bedroom include?",
        description: "Plan for comfort, accessibility, and independence. **(Select all that apply.)**",
        options: [
          { id: "lower_bed_height", name: "Lower Bed Height",  description: "Easier ingress and egress with many frames." },
          { id: "seating_chair",    name: "Seating/Chair",      description: "Comfortable seat for dressing and rest." },
          { id: "grab_points",      name: "Sturdy Grab Points", description: "Reinforced locations near bed or doorways." },
          { id: "mini_refresh",     name: "Mini Refreshments Area", description: "Counter and power for kettle or mini-fridge (where allowed)." }
        ],
        setFlags: { br_path_inlaw: true },
        showIf: { all: [
          { routeMode: ["deep"] }, { selected: "section_gate_bedroom" }, { answerOf: "br_type", in: ["inlaw"] }
        ] }
      }
    ]
  },

  // -----------------------
  // 3) BED & NIGHTSTANDS (filtered by demographic + room size)
  // -----------------------
  {
    space: "Bedroom",
    category: "bed_suite",
    questions: [
      // Adult/Teen/Child standard bed sizes (Nursery only if opted-in)
      {
        id: "br_bed_size",
        type: "single",
        prompt: "What bed size should we plan?",
        description: "Pick a bed size that fits the room and your comfort needs.",
        options: [
          { id: "twin",     name: "Twin",            description: "Compact footprint; common for children and small rooms." },
          { id: "full",     name: "Full",            description: "Efficient double; often used in teen or guest rooms." },
          { id: "queen",    name: "Queen",           description: "Most common adult size; balances space and comfort." },
          { id: "king",     name: "King",            description: "Large sleeping surface; best for larger rooms." },
          { id: "cal_king", name: "California King", description: "Extra length; suited to tall users and large rooms." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] }, { selected: "section_gate_bedroom" },
          // show for all non-nursery rooms, or for nursery only if explicitly allowed
          { any: [
            { all: [ { answerOf: "br_type", in: ["adult","teen","child","inlaw"] } ] },
            { all: [ { answerOf: "br_type", in: ["nursery"] }, { answerOf: "br_nursery_adult_bed", in: ["yes"] } ] }
          ] }
        ] }
      },

      // Bed size fit notices by room size (guidance, not hard fail)
      {
        id: "br_bed_fit_notice_small",
        type: "notice",
        prompt: "Bed fit guidance for compact rooms",
        description: "For 9′ × 10′ or 10′ × 10′ rooms, Full or smaller often maintains better circulation than larger sizes.",
        options: [],
        showIf: { all: [
          { routeMode: ["deep"] }, { selected: "section_gate_bedroom" },
          { answerOf: "br_room_dims", in: ["9x10","10x10"] }
        ] }
      },
      {
        id: "br_bed_fit_notice_medium",
        type: "notice",
        prompt: "Bed fit guidance for medium rooms",
        description: "For 10′ × 11′ to 11′ × 12′ rooms, a Queen typically balances comfort and flow; larger beds may limit dresser and seating options.",
        options: [],
        showIf: { all: [
          { routeMode: ["deep"] }, { selected: "section_gate_bedroom" },
          { answerOf: "br_room_dims", in: ["10x11","10x12","11x12"] }
        ] }
      },
      {
        id: "br_bed_fit_notice_large",
        type: "notice",
        prompt: "Bed fit guidance for larger rooms",
        description: "For 12′ × 14′ and larger, King or California King can be considered along with seating and storage zones.",
        options: [],
        showIf: { all: [
          { routeMode: ["deep"] }, { selected: "section_gate_bedroom" },
          { answerOf: "br_room_dims", in: ["12x12","12x14","12x16","14x16"] }
        ] }
      },

      // Bed frame style (skip if nursery without adult bed)
      {
        id: "br_bed_frame_style",
        type: "single",
        prompt: "Which bed frame style do you prefer?",
        description: "Choose a frame style to guide product curation and accessories.",
        options: [
          { id: "upholstered", name: "Upholstered",      description: "Soft headboard; comfortable for reading." },
          { id: "wood",        name: "Wood",             description: "Natural warmth and grain character." },
          { id: "metal",       name: "Metal",            description: "Slim, durable profile; suits minimal spaces." },
          { id: "storage",     name: "Storage Bed",      description: "Under-bed drawers for added storage." },
          { id: "platform",    name: "Platform/Low",     description: "Reduced visual bulk; modern silhouette." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] }, { selected: "section_gate_bedroom" },
          { any: [
            { all: [ { answerOf: "br_type", in: ["adult","teen","child","inlaw"] } ] },
            { all: [ { answerOf: "br_type", in: ["nursery"] }, { answerOf: "br_nursery_adult_bed", in: ["yes"] } ] }
          ] }
        ] }
      },

      // Nightstands (skip for ultra-compact rooms that chose a King/Cal King)
      {
        id: "br_nightstands",
        type: "multi",
        prompt: "How should we configure the nightstands?",
        description: "Pick the configuration and features you prefer. **(Select all that apply.)**",
        options: [
          { id: "pair",             name: "Pair (Both Sides)",   description: "Two nightstands for balance and storage." },
          { id: "single_only",      name: "Single Only",         description: "One nightstand due to space or preference." },
          { id: "storage_drawers",  name: "Storage Drawers",     description: "Closed storage for bedtime items." },
          { id: "integrated_power", name: "Integrated Charging", description: "Built-in USB or AC power in the casework." },
          { id: "floating",         name: "Floating/Mounted",    description: "Wall-mounted for lighter visual weight." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] }, { selected: "section_gate_bedroom" },
          { notAll: [
            { all: [ { answerOf: "br_room_dims", in: ["9x10","10x10"] }, { answerOf: "br_bed_size", in: ["king","cal_king"] } ] }
          ] }
        ] }
      }
    ]
  },

  // -----------------------
  // 4) SEATING AREA — size contingent
  // -----------------------
  {
    space: "Bedroom",
    category: "seating_area",
    questions: [
      {
        id: "br_seating_area",
        type: "single",
        prompt: "Would you like a seating area in this bedroom?",
        description: "Choose whether to plan a dedicated lounge or reading zone.",
        options: [
          { id: "yes", name: "Yes", description: "Include lounge seating in the layout." },
          { id: "no",  name: "No",  description: "No seating area required." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_bedroom" },
          { answerOf: "br_room_dims", notIn: ["9x10","10x10"] }
        ] }
      },
      {
        id: "br_seating_types",
        type: "multi",
        prompt: "Which seating types should we consider?",
        description: "Pick the seating mix that best fits your routine and available space. **(Select all that apply.)**",
        options: [
          { id: "chaise",        name: "Chaise/Lounger",      description: "Relaxed lounge for reading and rest." },
          { id: "bench",         name: "Bench (At Bed/Wall)", description: "Compact perch and staging surface." },
          { id: "lounge_pair",   name: "Lounge Chairs (Pair)", description: "Conversation seating for larger rooms." },
          { id: "window_seat",   name: "Window Seat",         description: "Built-in or loose seat for a nook." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_bedroom" },
          { answerOf: "br_seating_area", in: ["yes"] }
        ] }
      }
    ]
  },

  // -----------------------
  // 5) RUG — optional
  // -----------------------
  {
    space: "Bedroom",
    category: "rug",
    questions: [
      {
        id: "br_rug_use",
        type: "single",
        prompt: "Should we include an area rug?",
        description: "Rugs add warmth, comfort, and sound control.",
        options: [
          { id: "yes", name: "Yes", description: "Include rug sizing and material options." },
          { id: "no",  name: "No",  description: "No rug planned for this bedroom." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      },
      {
        id: "br_rug_size",
        type: "single",
        prompt: "What rug size should we consider?",
        description: "Pick a standard size to coordinate with bed size and layout.",
        options: [
          { id: "6x9",   name: "6′ × 9′",   description: "Compact layouts; often suits Full beds." },
          { id: "8x10",  name: "8′ × 10′",  description: "Typical with Queen and two nightstands." },
          { id: "9x12",  name: "9′ × 12′",  description: "Common with King and a bench." },
          { id: "10x14", name: "10′ × 14′", description: "Expansive rooms with large furniture footprints." },
          { id: "custom",name: "Custom",    description: "Tailored size for unique proportions." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_bedroom" },
          { answerOf: "br_rug_use", in: ["yes"] }
        ] }
      },
      {
        id: "br_rug_material",
        type: "multi",
        prompt: "Which rug materials or constructions do you prefer?",
        description: "Select preferred rug families to guide recommendations. **(Select all that apply.)**",
        options: [
          { id: "wool",           name: "Wool",              description: "Resilient natural fiber; durable and warm." },
          { id: "performance",    name: "Performance Fiber", description: "High-performance synthetics for stain resistance." },
          { id: "natural_fiber",  name: "Natural Fiber",     description: "Jute, sisal, or seagrass textures." },
          { id: "hair_on_hide",   name: "Hair-On-Hide",      description: "Patchwork or natural hide statements." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_bedroom" },
          { answerOf: "br_rug_use", in: ["yes"] }
        ] }
      }
    ]
  },

  // -----------------------
  // 6) WINDOW TREATMENTS
  // -----------------------
  {
    space: "Bedroom",
    category: "window_treatments",
    questions: [
      {
        id: "br_wt_types",
        type: "multi",
        prompt: "Which window treatments do you prefer?",
        description: "Select treatment types to meet privacy, light control, and style goals. **(Select all that apply.)**",
        options: [
          { id: "drapery",      name: "Drapery",        description: "Layered panels; excellent for blackout and acoustics." },
          { id: "roman",        name: "Roman Shades",   description: "Textile shade with structured folds and linings." },
          { id: "roller",       name: "Roller Shades",  description: "Clean profile with light-filtering or blackout options." },
          { id: "blinds",       name: "Blinds",         description: "Adjustable slats for precise light and privacy." },
          { id: "sheer_layers", name: "Sheer Layers",   description: "Filtered light with daytime privacy." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      },
      {
        id: "br_wt_requirements",
        type: "multi",
        prompt: "Which window treatment requirements apply?",
        description: "Pick essential performance features to filter hardware and fabrics. **(Select all that apply.)**",
        options: [
          { id: "blackout",      name: "Blackout",      description: "Maximum light exclusion for improved sleep." },
          { id: "privacy",       name: "Privacy",       description: "Daytime or nighttime privacy without full blackout." },
          { id: "motorized",     name: "Motorized",     description: "Remote, app, or voice control and scheduling." },
          { id: "outside_mount", name: "Outside Mount", description: "Mount above trim to increase height and coverage." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      }
    ]
  },

  // -----------------------
  // 7) CLOSET SYSTEM
  // -----------------------
  {
    space: "Bedroom",
    category: "closet_system",
    questions: [
      {
        id: "br_closet_scope",
        type: "single",
        prompt: "Should we include a custom closet system?",
        description: "Choose whether to plan a built-in closet organization package.",
        options: [
          { id: "yes", name: "Yes", description: "Include layout and component planning." },
          { id: "no",  name: "No",  description: "No custom closet planning required." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      },
      {
        id: "br_closet_components",
        type: "multi",
        prompt: "Which closet components should we include?",
        description: "Pick the storage components that best fit your wardrobe and routine. **(Select all that apply.)**",
        options: [
          { id: "double_hang",    name: "Double-Hang",        description: "Two rods to maximize hanging capacity." },
          { id: "long_hang",      name: "Long-Hang",          description: "Tall section for dresses and coats." },
          { id: "drawers",        name: "Drawers",            description: "Built-in drawers for folded clothing and accessories." },
          { id: "adjust_shelves", name: "Adjustable Shelves", description: "Flexible shelves for knits, bins, and linens." },
          { id: "shoe_storage",   name: "Shoe Storage",       description: "Cubbies or slanted shelves sized for footwear." },
          { id: "accessory_trays",name: "Accessory Trays",    description: "Divided trays for jewelry and small items." },
          { id: "hamper",         name: "Integrated Hamper",  description: "Pull-out hamper concealed within cabinetry." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_bedroom" },
          { answerOf: "br_closet_scope", in: ["yes"] }
        ] }
      }
    ]
  },

  // -----------------------
  // 8) ENTERTAINMENT (TV) — optional
  // -----------------------
  {
    space: "Bedroom",
    category: "entertainment",
    questions: [
      {
        id: "br_tv_use",
        type: "single",
        prompt: "Will a television be included?",
        description: "Decide whether to plan TV placement, wiring, and power routing.",
        options: [
          { id: "yes", name: "Yes", description: "Include display size, mount type, and controls." },
          { id: "no",  name: "No",  description: "No television planned." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      },
      {
        id: "br_tv_size",
        type: "single",
        prompt: "What TV size should we consider?",
        description: "Pick a target display size to guide mounting height and viewing distance.",
        options: [
          { id: "43", name: "43″", description: "Compact display for smaller rooms." },
          { id: "50", name: "50″", description: "Balanced scale for typical viewing distances." },
          { id: "55", name: "55″", description: "Common size for adult bedrooms." },
          { id: "65", name: "65″", description: "Large format; best in spacious rooms." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_bedroom" },
          { answerOf: "br_tv_use", in: ["yes"] }
        ] }
      },
      {
        id: "br_tv_mount",
        type: "single",
        prompt: "How should the TV be mounted?",
        description: "Choose the mounting approach based on wall type and viewing needs.",
        options: [
          { id: "stand_console",   name: "On Stand/Console",               description: "Display sits on a dresser or media console." },
          { id: "wall_fixed",      name: "Wall Mount (Fixed/Low-Profile)", description: "Slim installation with minimal projection." },
          { id: "wall_articulating",name: "Wall Mount (Articulating)",     description: "Adjustable angles for viewing from bed or seating." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_bedroom" },
          { answerOf: "br_tv_use", in: ["yes"] }
        ] }
      }
    ]
  },

  // -----------------------
  // 9) FIREPLACE — size contingent
  // -----------------------
  {
    space: "Bedroom",
    category: "fireplace",
    questions: [
      {
        id: "br_fireplace_type",
        type: "single",
        prompt: "Would you like to include a fireplace?",
        description: "Select a fireplace type if the room can accommodate it.",
        options: [
          { id: "none",    name: "None",    description: "No fireplace planned." },
          { id: "gas",     name: "Gas",     description: "Direct-vent or vent-free depending on code and conditions." },
          { id: "electric",name: "Electric", description: "Slim depth and flexible placement with straightforward installation." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_bedroom" },
          { answerOf: "br_room_dims", notIn: ["9x10","10x10"] }
        ] }
      },
      {
        id: "br_fireplace_surround",
        type: "multi",
        prompt: "Which surround materials should we consider?",
        description: "Pick finishes that complement floors and furnishings. **(Select all that apply.)**",
        options: [
          { id: "stone",  name: "Stone",  description: "Durable and timeless with natural variation." },
          { id: "tile",   name: "Tile",   description: "Pattern, color, and texture across many lines." },
          { id: "plaster",name: "Plaster",description: "Seamless monolithic look with soft edges." },
          { id: "wood",   name: "Wood",   description: "Mantle or paneling—follow clearance requirements." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_bedroom" },
          { answerOf: "br_fireplace_type", notIn: ["none"] }
        ] }
      }
    ]
  },

  // -----------------------
  // 10) FLOORING (preferences only; no tone/texture)
  // -----------------------
  {
    space: "Bedroom",
    category: "flooring",
    questions: [
      {
        id: "br_floor_families",
        type: "multi",
        prompt: "Which bedroom flooring materials do you prefer?",
        description: "Pick the flooring families you're open to using. We'll filter products accordingly. **(Select all that apply.)**",
        options: [
          { id: "carpet",       name: "Carpet",                  description: "Warm, quiet, comfortable underfoot." },
          { id: "eng_wood",     name: "Engineered Wood",         description: "Stable wood construction; pairs well with rugs." },
          { id: "solid_wood",   name: "Solid Wood",              description: "Refinishable classic hardwood." },
          { id: "lvp",          name: "Luxury Vinyl Plank (LVP)",description: "Durable and budget-friendly wood visuals." },
          { id: "porcelain",    name: "Porcelain Tile",          description: "Hard-wearing; usually paired with rugs for softness." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      },
      {
        id: "br_floor_specs",
        type: "multi",
        prompt: "Which flooring traits matter to you?",
        description: "Choose any must-have attributes to refine options. **(Select all that apply.)**",
        options: [
          { id: "wide_plank_7",     name: "Wide Plank (≥7″)",             description: "Larger visual scale for wood or LVP." },
          { id: "pattern_herring",  name: "Pattern: Herringbone/Parquet",  description: "Decorative layout for added character." },
          { id: "acoustic_underlay",name: "Acoustic/Underlayment",        description: "Reduces sound transmission between rooms or floors." },
          { id: "low_sheen",        name: "Matte/Low Sheen",              description: "Soft, diffuse appearance and easier touch-ups." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      }
    ]
  },

  // -----------------------
  // 11) BASEBOARDS & CROWN
  // -----------------------
  {
    space: "Bedroom",
    category: "baseboards",
    questions: [
      {
        id: "br_bb_profile",
        type: "single",
        prompt: "Which baseboard profile do you prefer?",
        description: "Select a baseboard profile to set the trim language.",
        options: [
          { id: "square",    name: "Square / Flush", description: "Clean, minimal silhouette with crisp edges." },
          { id: "stepped",   name: "Stepped",        description: "Subtle tiered profile for a transitional look." },
          { id: "craftsman", name: "Craftsman",      description: "Flat stock and reveals that pair with Shaker elements." },
          { id: "colonial",  name: "Colonial",       description: "Traditional sculpt with classic curvature." },
          { id: "reveal",    name: "Shadow Reveal",  description: "Recessed gap for a modern, trimless effect." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      },
      {
        id: "br_bb_height",
        type: "single",
        prompt: "What baseboard height do you prefer?",
        description: "Pick a height range appropriate to the room's proportions.",
        options: [
          { id: "0_3",  name: "0″–3″",  description: "Low profile for compact rooms or minimal aesthetics." },
          { id: "3_6",  name: "3″–6″",  description: "Versatile range for most bedrooms." },
          { id: "6_up", name: "6″+",    description: "Substantial presence; best with taller ceilings." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      },
      {
        id: "br_bb_finish",
        type: "single",
        prompt: "Which baseboard finish do you prefer?",
        description: "Select one finish approach for the baseboards.",
        options: [
          { id: "paint",          name: "Paint Grade",   description: "Painted to coordinate with trim and walls." },
          { id: "stain",          name: "Stain Grade",   description: "Natural wood tone with clear protection." },
          { id: "match_existing", name: "Match Existing", description: "Coordinate with existing finishes in the home." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      }
    ]
  },
  {
    space: "Bedroom",
    category: "crown_moldings",
    questions: [
      {
        id: "br_crown_presence",
        type: "single",
        prompt: "Do you want crown moldings in this bedroom?",
        description: "Crown molding can visually finish the wall-to-ceiling transition.",
        options: [
          { id: "none",        name: "Not Applicable", description: "No crown at the ceiling." },
          { id: "simple_cove", name: "Simple Cove",     description: "Clean, subtle transition profile." },
          { id: "classic",     name: "Classic",         description: "Layered profile for a traditional look." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      },
      {
        id: "br_crown_finish",
        type: "single",
        prompt: "Which crown molding finish do you prefer?",
        description: "Choose a finish if crown moldings are desired.",
        options: [
          { id: "paint", name: "Paint Grade", description: "Painted to coordinate with trim and ceiling." },
          { id: "stain", name: "Stain Grade", description: "Wood tone to match other stained elements." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_bedroom" },
          { answerOf: "br_crown_presence", notIn: ["none"] }
        ] }
      }
    ]
  },

  // -----------------------
  // 12) CEILING FINISH
  // -----------------------
  {
    space: "Bedroom",
    category: "ceiling_finish",
    questions: [
      {
        id: "br_ceiling_texture",
        type: "single",
        prompt: "Which ceiling texture do you prefer?",
        description: "Select the surface approach you like for the ceiling.",
        options: [
          { id: "smooth",         name: "Smooth",          description: "Flat, refined surface." },
          { id: "subtle_texture", name: "Subtle Texture",  description: "Soft, uniform texture to disguise minor imperfections." },
          { id: "hand_troweled",  name: "Hand-Troweled",   description: "Artisan finish with gentle movement." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      },
      {
        id: "br_ceiling_features",
        type: "multi",
        prompt: "Would you like any ceiling features?",
        description: "Optional architectural features to enhance character and lighting. **(Select all that apply.)**",
        options: [
          { id: "tray",     name: "Tray",              description: "Raised center to emphasize symmetry." },
          { id: "vaulted",  name: "Vaulted",           description: "Cathedral or sloped ceilings for volume." },
          { id: "beams",    name: "Beams",             description: "Decorative or structural beams in wood or composite." },
          { id: "led_cove", name: "LED Cove/Reveal",   description: "Indirect ambient glow integrated overhead." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      }
    ]
  },

  // -----------------------
  // 13) LIGHTING (Layers & Controls)
  // -----------------------
  {
    space: "Bedroom",
    category: "lighting",
    questions: [
      {
        id: "br_lighting_layers",
        type: "multi",
        prompt: "Which lighting layers should this bedroom include?",
        description: "Pick the layers that fit your routine. We'll filter fixtures accordingly. **(Select all that apply.)**",
        options: [
          { id: "ambient", name: "Ambient", description: "General illumination from ceiling or recessed fixtures." },
          { id: "task",    name: "Task",    description: "Reading lights, bedside sconces, or desk lamps." },
          { id: "accent",  name: "Accent",  description: "Directional or cove lighting for highlights." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      },
      {
        id: "br_lighting_cct",
        type: "single",
        prompt: "What baseline color temperature do you prefer for bedroom lighting?",
        description: "Choose a typical color temperature for comfort and clarity.",
        options: [
          { id: "2700k",  name: "2700K (Warm)",         description: "Cozy warmth suited to rest and relaxation." },
          { id: "3000k",  name: "3000K (Neutral Warm)",  description: "Balanced warmth with improved clarity." },
          { id: "tunable",name: "Tunable / Circadian",   description: "Adjustable from warm to cool across the day." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      },
      {
        id: "br_lighting_controls",
        type: "multi",
        prompt: "Which control requirements apply?",
        description: "Pick controls and features that you want supported by the lighting package. **(Select all that apply.)**",
        options: [
          { id: "dimming",       name: "Dimming",        description: "Smooth transitions to reduce glare and set mood." },
          { id: "smart_controls",name: "Smart Controls", description: "App or voice control and scene presets." },
          { id: "night_lighting",name: "Night Lighting", description: "Low-level path lighting for safe nighttime movement." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_bedroom" }] }
      }
    ]
  }
];

// Export to window for script tag loading
if (typeof window !== "undefined") {
  window.BEDROOM_DEEPDIVE = BEDROOM_DEEPDIVE;
  window.BEDROOM = BEDROOM_DEEPDIVE; // Alias if your loader expects window.BEDROOM
}

// Also export for modules/CommonJS if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = { BEDROOM_DEEPDIVE, BEDROOM: BEDROOM_DEEPDIVE };
}

