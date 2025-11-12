// LIVING ROOM — Deep Dive Question Pack
// Structure and routing. All inputs are preset options.
// Route gating expects `section_gate_living-room` to be set by your section selector.

const LIVING_ROOM_DEEPDIVE = [
  // -----------------------
  // SECTION GATE
  // -----------------------
  {
    space: "Living Room",
    persona: "clara",
    category: "section_gate",
    questions: [
      {
        id: "section_gate_living-room",
        type: "multi",
        prompt: "Which Living Room categories do you want to decide now?",
        description: "Select the items you want to work through in this living room. **(Select all that apply.)**",
        options: [
          { id: "flooring", name: "Flooring" },
          { id: "baseboards", name: "Baseboards" },
          { id: "crown_moldings", name: "Crown Moldings" },
          { id: "ceiling_finish", name: "Ceiling Finish" },
          { id: "wall_finish", name: "Wall Finish" },
          { id: "lighting", name: "Lighting" },
          { id: "seating", name: "Seating" },
          { id: "furniture", name: "Furniture" },
          { id: "color_scheme", name: "Color Scheme" },
          { id: "rug", name: "Rug" },
          { id: "window_treatments", name: "Window Treatments" },
          { id: "entertainment", name: "Entertainment (AV)" },
          { id: "storage", name: "Storage" },
          { id: "art_decor", name: "Art & Décor" },
          { id: "accent_features", name: "Accent Features" },
          { id: "fireplace", name: "Fireplace" }
        ],
        showIf: { all: [{ routeMode: ["deep", "standard", "express"] }] }
      }
    ]
  },
  // -----------------------
  // FLOORING
  // -----------------------
  {
    space: "Living Room",
    category: "flooring",
    questions: [
      {
        id: "lr_floor_families",
        type: "multi",
        prompt: "Which living room flooring materials do you prefer? (Select all that apply.)",
        description: "Choose one or more flooring families you are open to using in the living room.",
        options: [
          { id: "eng_wood", name: "Engineered Wood", description: "Stable wood wear layer on plywood core; suitable for most climates." },
          { id: "solid_wood", name: "Solid Wood", description: "Traditional full-thickness hardwood; can be refinished multiple times." },
          { id: "lvp", name: "Luxury Vinyl Plank (LVP)", description: "Durable, water-resistant planks that mimic wood visuals." },
          { id: "porcelain", name: "Porcelain Tile", description: "High-durability tile; ideal for heavy use and easy cleaning." },
          { id: "stone", name: "Natural Stone", description: "Premium look (Limestone, Marble, Travertine); requires sealing and care." },
          { id: "carpet", name: "Carpet", description: "Soft, warm underfoot; useful for sound absorption." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_floor_specs",
        type: "multi",
        prompt: "Which flooring performance or pattern traits matter to you? (Select all that apply.)",
        description: "Select any preferred specifications to narrow suitable options.",
        options: [
          { id: "wide_plank_7", name: "Wide Plank (≥7″)", description: "Visually expansive look; common with engineered wood and LVP." },
          { id: "pattern_herringbone", name: "Pattern: Herringbone/Parquet", description: "Decorative installation pattern for added visual interest." },
          { id: "matte_low_sheen", name: "Matte / Low Sheen", description: "Reduced glare and a more natural finish appearance." },
          { id: "water_resistant", name: "Water-Resistant", description: "Improved durability near exterior doors or pet/kid traffic." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      }
    ]
  },
  // -----------------------
  // BASEBOARDS
  // -----------------------
  {
    space: "Living Room",
    category: "baseboards",
    questions: [
      {
        id: "lr_bb_profile",
        type: "single",
        prompt: "Which baseboard profile do you prefer?",
        description: "Choose one profile to guide proportions and trim selections.",
        options: [
          { id: "square", name: "Square / Flush", description: "Clean-lined profile for contemporary or minimal interiors." },
          { id: "stepped", name: "Stepped", description: "Simple transitional step detail that works across many styles." },
          { id: "craftsman", name: "Craftsman", description: "Flat stock with reveals; pairs well with shaker details." },
          { id: "colonial", name: "Colonial", description: "Traditional sculpted profile with curves and beads." },
          { id: "reveal", name: "Shadow Reveal", description: "Drywall reveal at base to eliminate trim or create a crisp shadow line." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_bb_height",
        type: "single",
        prompt: "What baseboard height do you prefer?",
        description: "Select one height range to set the trim scale.",
        options: [
          { id: "0_3", name: "0″–3″", description: "Low-profile for minimal looks or lower ceiling heights." },
          { id: "3_6", name: "3″–6″", description: "A versatile range that suits most ceiling heights." },
          { id: "6_plus", name: "6″+", description: "Tall, substantial trim for larger rooms or higher ceilings." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_bb_finish",
        type: "single",
        prompt: "Which baseboard finish do you prefer?",
        description: "Select one finish approach for the living room baseboards.",
        options: [
          { id: "paint", name: "Paint Grade", description: "Painted finish to match or complement wall/trim color." },
          { id: "stain", name: "Stain Grade", description: "Natural wood grain and tone with clear protective finish." },
          { id: "match_existing", name: "Match Existing", description: "Match profiles and finish used elsewhere in the home." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      }
    ]
  },
  // -----------------------
  // CROWN MOLDINGS
  // -----------------------
  {
    space: "Living Room",
    category: "crown_moldings",
    questions: [
      {
        id: "lr_crown_presence",
        type: "single",
        prompt: "Do you want crown moldings in the living room?",
        description: "Choose whether crown moldings should be used at the ceiling.",
        options: [
          { id: "none", name: "Not Applicable", description: "No crown molding at the ceiling." },
          { id: "simple_cove", name: "Simple Cove", description: "A simplified profile for a clean transitional detail." },
          { id: "classic", name: "Classic", description: "A traditional profile with layered curves and edges." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_crown_finish",
        type: "single",
        prompt: "Which crown molding finish do you prefer?",
        description: "Select one finish for any crown moldings used in the living room.",
        options: [
          { id: "paint", name: "Paint Grade", description: "Painted finish to coordinate with trim and ceiling." },
          { id: "stain", name: "Stain Grade", description: "Natural wood tone to match other stained elements." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_living-room" },
          { answerOf: "lr_crown_presence", notIn: ["none"] }
        ] }
      }
    ]
  },
  // -----------------------
  // CEILING FINISH
  // -----------------------
  {
    space: "Living Room",
    category: "ceiling_finish",
    questions: [
      {
        id: "lr_ceiling_texture",
        type: "single",
        prompt: "Which ceiling texture do you prefer?",
        description: "Select one approach for ceiling surface treatment.",
        options: [
          { id: "smooth", name: "Smooth", description: "Flat, even finish for a refined look." },
          { id: "light_texture", name: "Subtle Texture", description: "Soft, uniform texture to conceal minor imperfections." },
          { id: "troweled", name: "Hand-Troweled", description: "Artisan texture for added character and light play." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_ceiling_features",
        type: "multi",
        prompt: "Would you like any special ceiling features? (Select all that apply.)",
        description: "Choose any feature details you want to include.",
        options: [
          { id: "coffered", name: "Coffered", description: "Grid of recessed panels to add dimensionality." },
          { id: "tray", name: "Tray", description: "Raised central ceiling detail to emphasize the room center." },
          { id: "vaulted", name: "Vaulted", description: "Sloped or cathedral ceilings for volume and drama." },
          { id: "beams", name: "Beams", description: "Decorative or structural beams in wood or faux materials." },
          { id: "wallcovering", name: "Wallcovering / Faux Finish", description: "Decorative surface such as grasscloth or specialized paint effects." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_ceiling_color_strategy",
        type: "single",
        prompt: "What ceiling color approach do you prefer?",
        description: "Select a color strategy to guide paint selections.",
        options: [
          { id: "match_walls", name: "Match Walls", description: "Seamless look and simplified transitions." },
          { id: "lighter_10_20", name: "Lighter By 10–20%", description: "Perceived height increase and brighter ambiance." },
          { id: "accent", name: "Accent Color", description: "Contrast for emphasis or to relate to other accents." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      }
    ]
  },
  // -----------------------
  // WALL FINISH
  // -----------------------
  {
    space: "Living Room",
    category: "wall_finish",
    questions: [
      {
        id: "lr_wall_types",
        type: "multi",
        prompt: "Which wall finish types are you considering? (Select all that apply.)",
        description: "Choose one or more wall finish categories.",
        options: [
          { id: "paint", name: "Paint", description: "Standard painted surfaces; broad color range and easy maintenance." },
          { id: "wallpaper", name: "Wallpaper", description: "Pattern, texture, or specialty visuals for feature areas." },
          { id: "paneling", name: "Paneling", description: "Wood, MDF, or slatted treatments for depth and rhythm." },
          { id: "plaster", name: "Lime/Venetian Plaster", description: "Hand-applied, layered finish for a luxe patina." },
          { id: "wainscoting", name: "Wainscoting", description: "Lower wall paneling to add protection and classic detail." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_wall_sheen",
        type: "single",
        prompt: "What wall sheen do you prefer for the living room?",
        description: "Select one sheen level to guide paint specifications.",
        options: [
          { id: "matte_eggshell", name: "Matte/Eggshell", description: "Low sheen for soft, contemporary walls; touch-up friendly." },
          { id: "satin", name: "Satin", description: "Slightly higher sheen for improved cleanability." }
        ],
        prefOnlyIfBuilder: true,
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      }
    ]
  },
  // -----------------------
  // LIGHTING
  // -----------------------
  {
    space: "Living Room",
    category: "lighting",
    questions: [
      {
        id: "lr_lighting_layers",
        type: "multi",
        prompt: "Which layers of lighting should the living room include? (Select all that apply.)",
        description: "Select lighting layers to balance ambiance, tasks, and highlights.",
        options: [
          { id: "ambient", name: "Ambient", description: "General illumination (e.g., recessed or ceiling fixtures)." },
          { id: "task", name: "Task", description: "Localized light for reading or activities (e.g., lamps)." },
          { id: "accent", name: "Accent", description: "Directional light to highlight art, textures, or architectural elements." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_lighting_cct",
        type: "single",
        prompt: "What lighting color temperature do you prefer?",
        description: "Select one color temperature baseline for fixtures.",
        options: [
          { id: "2700k", name: "2700K (Warm)", description: "Cozy, residential warmth for evening relaxation." },
          { id: "3000k", name: "3000K (Neutral Warm)", description: "Balanced warmth with improved clarity." },
          { id: "tunable", name: "Tunable / Circadian", description: "Adjusts from warm to cool to support daily rhythms." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_lighting_requirements",
        type: "multi",
        prompt: "Do you have any specific lighting requirements? (Select all that apply.)",
        description: "Choose any must-have lighting requirements to guide product filtering.",
        options: [
          { id: "dimming", name: "Dimming", description: "Smooth dimming to set mood and reduce glare." },
          { id: "smart_controls", name: "Smart Controls", description: "App/voice control and scenes for convenience." },
          { id: "glare_control", name: "Glare Control", description: "Shielding or optics to reduce direct glare." },
          { id: "fixture_size_limits", name: "Fixture Size Limits", description: "Constraints based on ceiling height or furniture layout." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      }
    ]
  },
  // -----------------------
  // SEATING
  // -----------------------
  {
    space: "Living Room",
    category: "seating",
    questions: [
      {
        id: "lr_seating_types",
        type: "multi",
        prompt: "Which seating types do you want in the living room? (Select all that apply.)",
        description: "Pick the seating mix that fits your layout and lifestyle.",
        options: [
          { id: "sofa", name: "Sofa", description: "Standard sofa footprint for most living rooms." },
          { id: "sectional", name: "Sectional", description: "Configurable seating with chaise or L-shape for larger groups." },
          { id: "lounge_chairs", name: "Lounge Chairs", description: "Pair or single accent chairs for conversational balance." },
          { id: "recliner", name: "Recliner", description: "Reclining lounge for personal comfort." },
          { id: "ottoman", name: "Ottoman", description: "Flexible footrest or soft coffee-table alternative." },
          { id: "chaise", name: "Chaise", description: "Long seat for lounging or reading." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_seating_capacity",
        type: "single",
        prompt: "How many people should the primary seating accommodate?",
        description: "Select one capacity target to guide size and configuration.",
        options: [
          { id: "2_3", name: "2–3", description: "Compact layouts or secondary seating areas." },
          { id: "4_5", name: "4–5", description: "Typical family seating requirement." },
          { id: "6_7", name: "6–7", description: "Entertaining-forward or large families." },
          { id: "8_plus", name: "8+", description: "Expansive seating for frequent gatherings." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_seating_specs",
        type: "multi",
        prompt: "Which upholstery or performance features are important? (Select all that apply.)",
        description: "Select key performance traits to filter upholstery options.",
        options: [
          { id: "performance_fabric", name: "Performance Fabric", description: "Stain and abrasion resistance for longevity." },
          { id: "leather", name: "Leather", description: "Durable, natural patina over time." },
          { id: "reversible_cushions", name: "Reversible Cushions", description: "Extends cushion life and maintains appearance." },
          { id: "firm_seat", name: "Firm Seat", description: "Supportive feel for posture and durability." },
          { id: "soft_seat", name: "Soft Seat", description: "Plush comfort and relaxed seating." },
          { id: "pet_kid_friendly", name: "Pet/Kid Friendly", description: "Tougher fabrics and construction for active homes." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      }
    ]
  },
  // -----------------------
  // FURNITURE
  // -----------------------
  {
    space: "Living Room",
    category: "furniture",
    questions: [
      {
        id: "lr_furniture_pieces",
        type: "multi",
        prompt: "Which core furniture pieces should we plan? (Select all that apply.)",
        description: "Select the key pieces to include in the living room plan.",
        options: [
          { id: "coffee_table", name: "Coffee Table", description: "Center table sized to sofa/sectional proportions." },
          { id: "side_tables", name: "Side Tables", description: "Flank seating with convenient surfaces for lighting and drinks." },
          { id: "console_table", name: "Console Table", description: "Behind sofa or at wall; staging and storage." },
          { id: "bookcases", name: "Bookcases", description: "Shelving for books and display objects." },
          { id: "media_cabinet", name: "Media Cabinet", description: "Equipment housing and display base for TV if not wall-mounted." },
          { id: "minimal", name: "Minimal Additions", description: "Intentionally pared-back furnishings." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_furniture_materials",
        type: "multi",
        prompt: "Which furniture materials/finishes do you prefer? (Select all that apply.)",
        description: "Select material families to guide furniture recommendations.",
        options: [
          { id: "wood_light", name: "Wood: Light", description: "Lighter oak, ash, or maple tones." },
          { id: "wood_medium", name: "Wood: Medium", description: "Balanced mid-tones for versatile pairings." },
          { id: "wood_dark", name: "Wood: Dark", description: "Walnut, espresso, or near-black tones." },
          { id: "metal_black", name: "Metal: Black", description: "Powder-coated black metal accents." },
          { id: "metal_brass", name: "Metal: Brass", description: "Brushed or satin brass hardware and frames." },
          { id: "stone_porcelain", name: "Stone/Porcelain Top", description: "Durable, elegant tops for coffee or side tables." },
          { id: "glass_top", name: "Glass Top", description: "Visually light, easy-to-clean surfaces." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      }
    ]
  },
  // -----------------------
  // COLOR SCHEME
  // -----------------------
  {
    space: "Living Room",
    category: "color_scheme",
    questions: [
      {
        id: "lr_colors",
        type: "multi",
        prompt: "Which colors should we incorporate into this space? (Select all that apply.)",
        description: "Select neutral families and accent directions to guide palette curation.",
        options: [
          { id: "neutrals_warm", name: "Neutrals: Warm", description: "Creams, beiges, and warm greige tones." },
          { id: "neutrals_cool", name: "Neutrals: Cool", description: "Cool greys and soft blue-greys." },
          { id: "accents_blues", name: "Accent: Blues", description: "Sky, navy, or deep blue highlights." },
          { id: "accents_greens", name: "Accent: Greens", description: "Sage, olive, or forest accents." },
          { id: "accents_earth", name: "Accent: Earth Tones", description: "Terracotta, rust, clay, and ochre accents." },
          { id: "contrast_low", name: "Low Contrast", description: "Tonal layering with subtle shifts." },
          { id: "contrast_high", name: "High Contrast", description: "Light/dark interplay for bold definition." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      }
    ]
  },
  // -----------------------
  // RUG
  // -----------------------
  {
    space: "Living Room",
    category: "rug",
    questions: [
      {
        id: "lr_rug_use",
        type: "single",
        prompt: "Are you considering an area rug in this room?",
        description: "Choose whether a rug should be included in the plan.",
        options: [
          { id: "yes", name: "Yes", description: "Include rug sizing and material recommendations." },
          { id: "no", name: "No", description: "No rug planned for this space." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_rug_size",
        type: "single",
        prompt: "What rug size do you prefer?",
        description: "Select a standard size or choose Custom for exact room layout.",
        options: [
          { id: "5x8", name: "5′ × 8′", description: "Works for small seating areas or layered rugs." },
          { id: "8x10", name: "8′ × 10′", description: "Common size for standard sofa groupings." },
          { id: "9x12", name: "9′ × 12′", description: "Great for larger rooms or sectional layouts." },
          { id: "10x14", name: "10′ × 14′", description: "Spacious rooms with expansive seating." },
          { id: "custom", name: "Custom", description: "Tailored size for unique room dimensions." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_living-room" },
          { answerOf: "lr_rug_use", in: ["yes"] }
        ] }
      },
      {
        id: "lr_rug_material",
        type: "multi",
        prompt: "Which rug materials or constructions do you prefer? (Select all that apply.)",
        description: "Select preferred rug families to guide selections.",
        options: [
          { id: "wool", name: "Wool", description: "Resilient natural fiber; durable and warm." },
          { id: "performance", name: "Performance Fiber", description: "High-performance synthetics for stain resistance." },
          { id: "natural_fiber", name: "Natural Fiber", description: "Jute, sisal, or seagrass textures." },
          { id: "hair_on_hide", name: "Hair-On-Hide", description: "Patchwork or natural hide statements." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_living-room" },
          { answerOf: "lr_rug_use", in: ["yes"] }
        ] }
      }
    ]
  },
  // -----------------------
  // WINDOW TREATMENTS
  // -----------------------
  {
    space: "Living Room",
    category: "window_treatments",
    questions: [
      {
        id: "lr_wt_types",
        type: "multi",
        prompt: "Which window treatments do you prefer? (Select all that apply.)",
        description: "Choose the treatment types to plan for this room.",
        options: [
          { id: "drapery", name: "Drapery", description: "Layered panels for softness and light control." },
          { id: "roman", name: "Roman Shades", description: "Fabric shades with structured folds." },
          { id: "roller", name: "Roller Shades", description: "Clean profile with light-filtering or blackout options." },
          { id: "blinds", name: "Blinds", description: "Slatted control of light and privacy." },
          { id: "sheer_layers", name: "Sheer Layers", description: "Soft filtered light with privacy benefits." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_wt_requirements",
        type: "multi",
        prompt: "Which window treatment requirements apply? (Select all that apply.)",
        description: "Select specific needs to filter hardware and fabric options.",
        options: [
          { id: "blackout", name: "Blackout", description: "Maximum light control and privacy." },
          { id: "privacy", name: "Privacy", description: "Moderate light with reduced visibility." },
          { id: "motorized", name: "Motorized", description: "Remote/app/voice operation." },
          { id: "child_safe", name: "Child-Safe", description: "Compliance with cord safety standards." },
          { id: "outside_mount", name: "Outside Mount", description: "Mounts above trim to increase perceived window height." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      }
    ]
  },
  // -----------------------
  // ENTERTAINMENT (AV)
  // -----------------------
  {
    space: "Living Room",
    category: "entertainment",
    questions: [
      {
        id: "lr_tv_use",
        type: "single",
        prompt: "Will a television be included in this room?",
        description: "Choose whether we should plan TV placement and wiring.",
        options: [
          { id: "yes", name: "Yes", description: "Include display size, mount, and wiring details." },
          { id: "no", name: "No", description: "Skip AV display planning for this room." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_tv_size",
        type: "single",
        prompt: "What TV size do you prefer?",
        description: "Select a target display size to guide wall planning and viewing distance.",
        options: [
          { id: "55", name: "55″", description: "Good fit for modest seating distances (≈7′–9′)." },
          { id: "65", name: "65″", description: "Balanced scale for most living rooms (≈8′–10′)." },
          { id: "75", name: "75″", description: "Large format for cinematic feel (≈9′–12′)." },
          { id: "85", name: "85″", description: "XL display for expansive rooms (≈10′+)." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_living-room" },
          { answerOf: "lr_tv_use", in: ["yes"] }
        ] }
      },
      {
        id: "lr_tv_mount",
        type: "single",
        prompt: "How should the TV be mounted?",
        description: "Choose the mounting approach based on wall type and viewing angles.",
        options: [
          { id: "stand_console", name: "On Stand/Console", description: "Display sits on top of a media console." },
          { id: "wall_fixed", name: "Wall Mount (Fixed/Low-Profile)", description: "Slim installation; minimal projection from wall." },
          { id: "wall_articulating", name: "Wall Mount (Articulating)", description: "Adjustable angles for flexible seating layouts." },
          { id: "over_fireplace", name: "Over Fireplace", description: "Coordinates with surround and heat-clearance requirements." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_living-room" },
          { answerOf: "lr_tv_use", in: ["yes"] }
        ] }
      },
      {
        id: "lr_audio_type",
        type: "single",
        prompt: "Which audio approach do you prefer?",
        description: "Select the sound system tier that matches your goals.",
        options: [
          { id: "soundbar", name: "Soundbar", description: "Simple setup with improved clarity over TV speakers." },
          { id: "3_1", name: "3.1", description: "Left/center/right + subwoofer for fuller soundstage." },
          { id: "5_1", name: "5.1", description: "Surround sound with rear speakers and a subwoofer." },
          { id: "5_1_2_atmos", name: "5.1.2 Atmos", description: "Adds height channels for immersive audio." },
          { id: "7_1_4_atmos", name: "7.1.4 Atmos", description: "Premium immersive audio with multiple height channels." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_av_storage",
        type: "single",
        prompt: "Where should AV equipment be located?",
        description: "Choose the housing strategy for sources and amplification.",
        options: [
          { id: "media_cabinet", name: "Media Cabinet (In-Room)", description: "Equipment stored within a furniture piece in the room." },
          { id: "built_in", name: "Built-In Millwork", description: "Integrated storage within custom cabinetry." },
          { id: "remote_room", name: "Remote Closet/Room", description: "Equipment centralized away from the living room." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_av_concealment",
        type: "multi",
        prompt: "Which concealment or cable management options do you prefer? (Select all that apply.)",
        description: "Select concealment and management options to keep the room visually tidy.",
        options: [
          { id: "in_wall_power_lowvoltage", name: "In-Wall Power + Low-Voltage", description: "Code-compliant wiring pass-throughs behind the display." },
          { id: "hidden_slim_speakers", name: "Hidden/Slim Speakers", description: "Low-profile or architectural speakers with minimal visual impact." },
          { id: "frame_style_tv", name: "Frame-Style TV", description: "Art-like display that blends with décor when off." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_av_controls",
        type: "single",
        prompt: "How would you like to control the system?",
        description: "Select the primary control method.",
        options: [
          { id: "universal_remote", name: "Universal Remote (IR/RF)", description: "Consolidates multiple remotes into one." },
          { id: "app_control", name: "App Control", description: "Control via phone/tablet app." },
          { id: "voice", name: "Voice Assistant", description: "Hands-free control through voice platforms." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_av_sources",
        type: "multi",
        prompt: "Which sources should the system support? (Select all that apply.)",
        description: "Select the media sources you plan to use.",
        options: [
          { id: "streaming_apps", name: "Streaming Apps", description: "Built-in or external streaming platforms." },
          { id: "gaming_console", name: "Gaming Console", description: "Support for consoles (e.g., PlayStation, Xbox, Switch)." },
          { id: "disc_player", name: "Blu-ray / Disc", description: "Physical media playback." },
          { id: "music_streaming", name: "Music Streaming", description: "High-quality music via streaming services." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      }
    ]
  },
  // -----------------------
  // STORAGE
  // -----------------------
  {
    space: "Living Room",
    category: "storage",
    questions: [
      {
        id: "lr_storage_types",
        type: "multi",
        prompt: "Which storage types do you want? (Select all that apply.)",
        description: "Choose the storage solutions to support daily use.",
        options: [
          { id: "closed_cabinetry", name: "Closed Cabinetry", description: "Concealed storage for clutter-free visuals." },
          { id: "open_shelving", name: "Open Shelving", description: "Display space for books and décor." },
          { id: "media_console", name: "Media Console", description: "Equipment storage with cable pass-throughs." },
          { id: "bookcase", name: "Bookcase", description: "Tall or low cases for books and curated collections." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_storage_items",
        type: "multi",
        prompt: "What do you plan to store or display? (Select all that apply.)",
        description: "Select primary items to right-size storage capacity.",
        options: [
          { id: "books", name: "Books", description: "Shelving depth and shelf count to suit volumes." },
          { id: "art_objects", name: "Art Objects", description: "Mixed shelf heights and accent lighting for display." },
          { id: "blankets", name: "Blankets", description: "Closed storage for linens and throws." },
          { id: "games", name: "Games", description: "Cabinet or console storage sized to boxes." },
          { id: "vinyl_media", name: "Vinyl/Media", description: "LP-depth shelving or media drawers." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      }
    ]
  },
  // -----------------------
  // ART & DÉCOR
  // -----------------------
  {
    space: "Living Room",
    category: "art_decor",
    questions: [
      {
        id: "lr_art_plan",
        type: "multi",
        prompt: "Which art and décor directions should we plan? (Select all that apply.)",
        description: "Select the key artwork and styling strategies to consider.",
        options: [
          { id: "feature_existing", name: "Feature Existing Art", description: "Plan placement and lighting for your current collection." },
          { id: "gallery_wall", name: "Gallery Wall", description: "Coordinated arrangement of multiple pieces." },
          { id: "oversize_statement", name: "Oversize Statement", description: "One impactful piece scaled to the wall." },
          { id: "mirrors", name: "Mirrors", description: "Light bounce and perceived space increase." },
          { id: "picture_lighting", name: "Picture Lighting", description: "Dedicated luminaires to highlight artwork." },
          { id: "minimal_decor", name: "Minimal Décor", description: "Tight curation with restrained accessories." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      }
    ]
  },
  // -----------------------
  // ACCENT FEATURES
  // -----------------------
  {
    space: "Living Room",
    category: "accent_features",
    questions: [
      {
        id: "lr_accent_features",
        type: "multi",
        prompt: "Which accent features interest you? (Select all that apply.)",
        description: "Choose architectural accents to elevate the space.",
        options: [
          { id: "feature_plaster", name: "Feature Wall: Plaster/Limewash", description: "Soft, luminous finish for focal surfaces." },
          { id: "feature_slat", name: "Feature Wall: Slat/Millwork", description: "Rhythmic wood or MDF slat treatments." },
          { id: "built_ins", name: "Built-Ins", description: "Custom storage and display integrated into the architecture." },
          { id: "niches", name: "Niches", description: "Inset display alcoves with optional lighting." },
          { id: "led_cove", name: "LED Cove/Reveal", description: "Indirect lighting at ceilings or walls for ambient glow." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      }
    ]
  },
  // -----------------------
  // FIREPLACE
  // -----------------------
  {
    space: "Living Room",
    category: "fireplace",
    questions: [
      {
        id: "lr_fireplace_type",
        type: "single",
        prompt: "What type of fireplace are you interested in?",
        description: "Select a fireplace type to guide clearances and utility needs.",
        options: [
          { id: "wood", name: "Wood-Burning", description: "Traditional firebox; requires chimney and code-compliant hearth." },
          { id: "gas", name: "Gas", description: "Direct-vent or vent-free options with realistic media." },
          { id: "electric", name: "Electric", description: "Slim depth, flexible placement, and easy installation." },
          { id: "none", name: "None", description: "No fireplace planned for this space." }
        ],
        showIf: { all: [{ routeMode: ["deep"] }, { selected: "section_gate_living-room" }] }
      },
      {
        id: "lr_fireplace_surround",
        type: "multi",
        prompt: "Which surround materials do you prefer for the fireplace? (Select all that apply.)",
        description: "Select surround options to coordinate with floors and built-ins.",
        options: [
          { id: "stone", name: "Stone", description: "Durable, timeless surround with natural variation." },
          { id: "tile", name: "Tile", description: "Scalable pattern, color, and texture options." },
          { id: "brick", name: "Brick", description: "Classic masonry look with traditional or painted finish." },
          { id: "wood", name: "Wood", description: "Warm mantle and paneling elements (observe clearances)." },
          { id: "plaster", name: "Plaster", description: "Seamless, monolithic appearance with soft edges." }
        ],
        showIf: { all: [
          { routeMode: ["deep"] },
          { selected: "section_gate_living-room" },
          { answerOf: "lr_fireplace_type", notIn: ["none"] }
        ] }
      }
    ]
  }
];

// Export to window for script tag loading (match kitchen.js exports)
if (typeof window !== "undefined") {
  window.LIVING_ROOM_DEEPDIVE = LIVING_ROOM_DEEPDIVE;
  window.LIVING_ROOM = LIVING_ROOM_DEEPDIVE; // Alias for consistency
}

// Also export for ES6/CommonJS modules if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = { LIVING_ROOM_DEEPDIVE, LIVING_ROOM: LIVING_ROOM_DEEPDIVE };
}

