(function () {
  const DEFAULT_CONFIG = {
    mountSelector: '#idsq-root',
    introVariant: 'guide-panel', // Only variant - guide-panel
    brand: {
      primaryColor: '#363636',
      accentColor: '#363636',
      textColor: '#363636',
      fontFamily: "'Montserrat', sans-serif",
      fontUrl: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap',
      logoUrl: null,
    },
    copy: {
      introTitle: 'Interior Design Style Quiz',
      introDescription: 'Hi! I\'m Clara, your interior design expert from JL Coates.',
      introDescriptionLine2: 'Let me guide you through a personalized quiz to discover your unique design style and curate the perfect space for you.',
      claraProfileUrl: 'https://cdn.prod.website-files.com/642ba20158f55771b829e704/6901933410173c0b15007271_Clara%20Headshot.webp',
      masonProfileUrl: 'https://cdn.prod.website-files.com/642ba20158f55771b829e704/6907980ac46040c9b1e251da_Mason%20Grant%20Headshot.webp',
      ariaProfileUrl: 'https://cdn.prod.website-files.com/642ba20158f55771b829e704/690798097fbd8a82d468e098_Aria%20Planes%20Headshot.webp',
      startButton: 'Start Quiz',
      namePromptTitle: 'Let\'s get started!',
      namePromptDescription: 'I\'d love to personalize this experience for you. What\'s your first name?',
      namePlaceholder: 'Name (Optional)',
      nameSkip: 'Continue without name',
      spaceSelectionTitle: 'What space are you designing?',
      spaceSelectionDescription: 'Select the area you\'d like to style. This helps us curate visuals tailored to your project.',
      nextButton: 'Next',
      submitButton: 'See My Style',
      loadingMessage: 'Saving your selections…',
      successTitle: 'Your Interior Design Style',
      successDescription: 'Based on your picks, this is the style that suits you best.',
      retryButton: 'Restart Quiz',
      errorTitle: 'Something went wrong',
      errorDescription: 'We were unable to save your result. Please try again.',
      wordAssociationTitle: 'Which word resonates with you?',
      wordAssociationDescription: 'Take a moment and let your intuition guide you—choose the word that resonates with you.',
      scheduleCTATitle: 'Ready to bring your vision to life?',
      scheduleCTADescription: 'Schedule a complimentary discovery call with our team.',
      scheduleButton: 'Schedule Your Complimentary Call',
    },
    webhook: {
      url: null, // Set this in Webflow when initializing the quiz
      headers: { 'x-make-apikey': null }, // Set this in Webflow when initializing the quiz
      enable: true,
    },
    leadCapture: {
      enable: true,
      requireEmail: true,
    },
    wordAssociation: {
      words: [
        { word: 'Serene', styleIds: ['coastal', 'traditional'], size: 'large' },
        { word: 'Bold', styleIds: ['modern', 'industrial'], size: 'medium' },
        { word: 'Warm', styleIds: ['farmhouse', 'rustic'], size: 'small' },
        { word: 'Timeless', styleIds: ['traditional', 'transitional'], size: 'large' },
        { word: 'Sleek', styleIds: ['modern', 'contemporary'], size: 'medium' },
        { word: 'Organic', styleIds: ['coastal', 'rustic'], size: 'small' },
        { word: 'Elegant', styleIds: ['traditional', 'contemporary'], size: 'large' },
        { word: 'Minimal', styleIds: ['modern', 'contemporary'], size: 'medium' },
        { word: 'Raw', styleIds: ['industrial', 'modern'], size: 'small' },
        { word: 'Cozy', styleIds: ['rustic', 'farmhouse'], size: 'medium' },
        { word: 'Refined', styleIds: ['traditional', 'midcentury'], size: 'large' },
        { word: 'Natural', styleIds: ['coastal', 'rustic'], size: 'small' },
        { word: 'Classic', styleIds: ['traditional', 'rustic'], size: 'medium' },
        { word: 'Chic', styleIds: ['modern', 'contemporary'], size: 'small' },
        { word: 'Textured', styleIds: ['rustic', 'farmhouse'], size: 'large' },
        { word: 'Sophisticated', styleIds: ['traditional', 'contemporary'], size: 'large' },
        { word: 'Bright', styleIds: ['coastal', 'contemporary'], size: 'medium' },
        { word: 'Comfortable', styleIds: ['farmhouse', 'traditional'], size: 'large' },
        { word: 'Structured', styleIds: ['modern', 'industrial'], size: 'small' },
        { word: 'Luxurious', styleIds: ['traditional', 'transitional'], size: 'medium' },
        { word: 'Nautical', styleIds: ['coastal', 'rustic'], size: 'small' },
        { word: 'Vintage', styleIds: ['rustic', 'farmhouse'], size: 'large' },
        { word: 'Clean', styleIds: ['modern', 'contemporary'], size: 'medium' },
        { word: 'Inviting', styleIds: ['coastal', 'farmhouse'], size: 'small' },
      ].sort(() => Math.random() - 0.5), // Randomize order
    },
    // Space-specific word association vocabulary
    wordAssociationBySpace: {
      'living-room': {
        prompt: 'Which word best captures the vibe of your ideal living room?',
        words: ['Serene','Inviting','Eclectic','Polished','Grounded','Sun-kissed','Warm','Streamlined','Effortless','Vibrant','Refined','Rustic','Harmonious','Sophisticated','Breezy','Centered','Layered','Minimal','Playful','Balanced','Moody','Natural','Textural','Bright']
      },
      bedroom: {
        prompt: 'Your dream bedroom feels…',
        words: ['Tranquil','Romantic','Cozy','Airy','Dramatic','Uncluttered','Soulful','Balanced','Intimate','Glamorous','Grounded','Pure','Nostalgic','Polished','Calm','Expressive','Earthy','Structured','Serene','Warm','Luxurious','Inviting','Effortless','Mindful']
      },
      kitchen: {
        prompt: 'When I imagine my kitchen, it feels…',
        words: ['Refreshing','Grounded','Vibrant','Timeless','Minimal','Robust','Earthy','Sophisticated','Inviting','Natural','Crisp','Mediterranean','Warm','Centered','Playful','Elegant','Honest','Functional','Refined','Sunlit','Comforting','Expressive','Balanced','Textural']
      },
      bathroom: {
        prompt: 'Your bathroom should feel like a place to…',
        words: ['Recenter','Refresh','Indulge','Simplify','Escape','Restore','Ground','Awaken','Soothe','Recharge','Pamper','Cleanse','Unwind','Glow','Balance','Renew','Elevate','Nurture','Reflect','Calm','Invigorate','Rejuvenate','Breathe']
      },
      office: {
        prompt: 'When I’m in my ideal office, I feel…',
        words: ['Inspired','Grounded','Clear','Driven','Calm','Focused','Energized','Balanced','Creative','Composed','Minimal','Productive','Elevated','Organized','Tranquil','Sun-lit','Cozy','Visionary','Warm','Refreshing','Centered','Expressive','Natural','Mindful']
      },
      general: {
        prompt: 'If your home could tell a story, which word describes its character?',
        words: ['Harmonious','Collected','Earthbound','Breezy','Elevated','Organic','Nostalgic','Intentional','Minimal','Glamorous','Relaxed','Mediterranean','Centered','Balanced','Playful','Warm','Sophisticated','Luminous','Textured','Bold','Serene','Refined','Vibrant','Natural']
      }
    },
    spaceTypes: [
      { 
        id: 'living-room', 
        name: 'Living Room',
        icon: '🛋️',
        description: 'Social spaces for gathering and relaxation'
      },
      { 
        id: 'bedroom', 
        name: 'Bedroom',
        icon: '🛏️',
        description: 'Personal retreat and rest spaces'
      },
      { 
        id: 'kitchen', 
        name: 'Kitchen',
        icon: '🍳',
        description: 'Culinary spaces and dining areas'
      },
      { 
        id: 'bathroom', 
        name: 'Bathroom',
        icon: '🛁',
        description: 'Wellness and rejuvenation spaces'
      },
      { 
        id: 'office', 
        name: 'Office',
        icon: '💼',
        description: 'Productive and inspiring work spaces'
      },
      { 
        id: 'general', 
        name: 'Whole Home',
        icon: '🏠',
        description: 'Overall design aesthetic across all spaces'
      },
    ],
    stepsBySpace: {},
    styleLibrary: {
      coastal: {
        styleName: 'Coastal',
        description: 'In the simplest definition, coastal is beachy. Through use of natural light, soft tones, and a clean aesthetic, it\'s meant to capture the breeziness of the beach. Basically, it feels like summer year-round inside your house.',
        dna: [
          'Palette: white, sand, driftwood, sea‑glass, soft navy',
          'Materials: slipcovered linen, woven fibers, bleached oak, zellige tile',
          'Mood: breezy, bright, unfussy—no kitsch',
        ],
        finalImages: [
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644d4ca4e33e9a1def6e_img_coastal_calm_living_room_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056483ee16912d63c48c2e_img_coastal_calm_bedroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056546f32278db08e27bab_img_coastal_calm_kitchen_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652eed6893053524abe1_img_coastal_calm_bathroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056563c1d0ca349e8dfef6_img_coastal_calm_office_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056578af055fb069a380bb_img_coastal_calm_whole_home_3.webp'
        ],
        imagesByRoom: {
          'living-room': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644cc9aae0ebc6e9c9a9_img_coastal_calm_living_room_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644cdf0aeff5e0965fc8_img_coastal_calm_living_room_2.webp'
          ],
          'bedroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905648388ab8f08dc40b941_img_coastal_calm_bedroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056483d9f948e913aedafc_img_coastal_calm_bedroom_2.webp'
          ],
          'kitchen': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905654847fdcc9099936907_img_coastal_calm_kitchen_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905654891b42069ab00276f_img_coastal_calm_kitchen_2.webp'
          ],
          'bathroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e3869f6df4427d2d0_img_coastal_calm_bathroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652cf1275ff75918a5b4_img_coastal_calm_bathroom_2.webp'
          ],
          'office': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565625445a6ffd8d860a9_img_coastal_calm_office_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565620246e7da092ecd50_img_coastal_calm_office_2.webp'
          ],
          'whole-home': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056578682db18ae5840eec_img_coastal_calm_whole_home_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565788741ca49d89b0959_img_coastal_calm_whole_home_2.webp'
          ]
        },
      },
      farmhouse: {
        styleName: 'Farmhouse',
        description: 'Defined by practicality and comfort, relying on readily available materials and colors. Wood elements and white tones are indicative of farmhouse style. Timber was the easiest to come by, which is why there\'s such an emphasis on wood elements.',
        dna: [
          'Palette: warm whites, oat, inky black accents, honey oak',
          'Materials: shaker profiles, oak, linen, matte black metal, stone',
          'Details: vintage/heritage pieces, lantern lighting, practical layouts',
        ],
        finalImages: [
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644d22c96660e3b45224_img_modern_farmhouse_living_room_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905648345aaebb925bfa843_img_modern_farmhouse_bedroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905654628b0a2b4b21b3d2a_img_modern_farmhouse_kitchen_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e9cc5800d63b3a111_img_modern_farmhouse_bathroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565637fd213ececfb4f10_img_modern_farmhouse_office_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565772a91dc8d9d0d3d21_img_modern_farmhouse_whole_home_3.webp'
        ],
        imagesByRoom: {
          'living-room': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644cba4f34fd81ecf144_img_modern_farmhouse_living_room_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644ce1d1a44fead88092_img_modern_farmhouse_living_room_2.webp'
          ],
          'bedroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690564822ffa012eed107a9c_img_modern_farmhouse_bedroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905648323267fc0429161c0_img_modern_farmhouse_bedroom_2.webp'
          ],
          'kitchen': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056548acf6ee79cde1b461_img_modern_farmhouse_kitchen_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056548a50647edced43b83_img_modern_farmhouse_kitchen_2.webp'
          ],
          'bathroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e052d6cf87d655b3b_img_modern_farmhouse_bathroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e78b00d1adcf012d9_img_modern_farmhouse_bathroom_2.webp'
          ],
          'office': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565626d1cdc06e03f756b_img_modern_farmhouse_office_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056562ec21d6240a006345_img_modern_farmhouse_office_2.webp'
          ],
          'whole-home': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056578488f2efb9b63b432_img_modern_farmhouse_whole_home_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056578d35ab9e355e5174a_img_modern_farmhouse_whole_home_2.webp'
          ]
        },
      },
      transitional: {
        styleName: 'Transitional',
        description: 'Reflective of a room\'s meshing of modern and traditional elements — essentially, combining two styles in one space, resulting in a cohesive design.',
        dna: [
          'Palette: warm neutrals with navy/moss accents',
          'Materials: oak, walnut, marble, unlacquered brass, polished nickel',
          'Silhouettes: tailored upholstery, eased corners, symmetry',
        ],
        finalImages: [
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644c1cf8ea6387ddf911_img_transitional_living_room_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905648322c96660e3b454dd_img_transitional_bedroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565478f2f646d197e5d4e_img_transitional_kitchen_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e61bc414e8b9a96d2_img_transitional_bathroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565631cf8ea6387de103a_img_transitional_office_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565785f034ebae2383152_img_transitional_whole_home_3.webp'
        ],
        imagesByRoom: {
          'living-room': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644c6baea1b9e4248640_img_transitional_living_room_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644d3472b1a5d793f491_img_transitional_living_room_2.webp'
          ],
          'bedroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056481052d6cf87d654c06_img_transitional_bedroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056482df0aeff5e0966380_img_transitional_bedroom_2.webp'
          ],
          'kitchen': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565482a9d46ce477fb32d_img_transitional_kitchen_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056547e3adb40b14375e61_img_transitional_kitchen_2.webp'
          ],
          'bathroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652efba942ab18dfc674_img_transitional_bathroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652c6b937486632b7337_img_transitional_bathroom_2.webp'
          ],
          'office': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565630bf9cf1d37ae594c_img_transitional_office_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905656223267fc0429180a1_img_transitional_office_2.webp'
          ],
          'whole-home': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056578e255a5bd04b4ae4f_img_transitional_whole_home_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056577c37bb9990473eacb_img_transitional_whole_home_2.webp'
          ]
        },
      },
      organic: {
        styleName: 'Organic Modern',
        description: 'Warm minimalism with tactile stone, wood, plaster and textiles. Clean lines, soft curves and quiet luxury that feels human.',
        dna: [
          'Palette: oat, toffee, chalky whites with black accents',
          'Materials: limewash/plaster, travertine/soapstone, linen, patinated metals',
          'Forms: soft curves, radius corners, fluted details',
        ],
        finalImages: [
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644ce5db4eec07fa934e_img_organic_modern_living_room_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690564837def701a5474520d_img_organic_modern_bedroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056548e232d26519badea8_img_organic_modern_kitchen_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652ebe1d329070b6de1c_img_organic_modern_bathroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056562a2f8dc978c4f86ca_img_organic_modern_office_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565781f5f5634c747bf1a_img_organic_modern_whole_home_3.webp'
        ],
        imagesByRoom: {
          'living-room': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644ceeeac73af8da7f04_img_organic_modern_living_room_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644dee34987375c5e8d3_img_organic_modern_living_room_2.webp'
          ],
          'bedroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056484ba5b322c920cd8a2_img_organic_modern_bedroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056483f81dfc4feb786ba8_img_organic_modern_bedroom_2.webp'
          ],
          'kitchen': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056547d3cf4b078dab054b_img_organic_modern_kitchen_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056548e922510d6f884dcf_img_organic_modern_kitchen_2.webp'
          ],
          'bathroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652ef32278db08e27a88_img_organic_modern_bathroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e186df51a95830a9a_img_organic_modern_bathroom_2.webp'
          ],
          'office': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056563f4b0cf99ff13c62e_img_organic_modern_office_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056563abe48fbb717dda02_img_organic_modern_office_2.webp'
          ],
          'whole-home': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565783db7147ec8b48551_img_organic_modern_whole_home_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056577de4d90e37b78b319_img_organic_modern_whole_home_2.webp'
          ]
        },
      },
      japandi: {
        styleName: 'Japandi',
        description: 'Serene fusion of Japanese and Scandinavian design: crafted, nature‑centric, calm lines and negative space.',
        dna: [
          'Palette: mushroom, ecru, carbon, muted indigo, warm timber',
          'Materials: ash/oak, rattan/paper, linen/wool, stone',
          'Principles: restraint, craftsmanship, nature indoors',
        ],
        finalImages: [
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644dbb522b18602b8cc7_img_japandi_living_room_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056483556e431556827ee4_img_japandi_bedroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056548bc69da848bb0919a_img_japandi_kitchen_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e7e5e0806c770d399_img_japandi_bathroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565621f1312a7bd7f3d9f_img_japandi_office_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565784ca4e33e9a1e0358_img_japandi_whole_home_3.webp'
        ],
        imagesByRoom: {
          'living-room': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644deee3583ada22795d_img_japandi_living_room_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644e2b54031d3354d5b2_img_japandi_living_room_2.webp'
          ],
          'bedroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690564832b05f733a3982158_img_japandi_bedroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905648328b23d42c0af2ac3_img_japandi_bedroom_2.webp'
          ],
          'kitchen': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056546c9aae0ebc6e9dc8e_img_japandi_kitchen_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905654672b17aa602622ffc_img_japandi_kitchen_2.webp'
          ],
          'bathroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652ef75a34290bbb61e2_img_japandi_bathroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e9f51f3e56dfc7ea2_img_japandi_bathroom_2.webp'
          ],
          'office': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056562df0aeff5e0967298_img_japandi_office_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056562d72d3e3dcc0f5be4_img_japandi_office_2.webp'
          ],
          'whole-home': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905657847fdcc9099936c82_img_japandi_whole_home_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056577ffba28009d56168b_img_japandi_whole_home_2.webp'
          ]
        },
      },
      wabi: {
        styleName: 'Wabi‑Sabi',
        description: 'Beauty in imperfection—patina, asymmetry and restraint. Quiet, soulful materials and organic forms.',
        dna: [
          'Palette: tea‑stain, clay, stone, soot',
          'Materials: rough linen, hand‑thrown ceramics, reclaimed woods',
          'Mindset: repair over replace; local craft',
        ],
        finalImages: [
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644eeeeac73af8da7f23_img_wabi_sabi_living_room_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690564845acce4f55c5bd3fa_img_wabi_sabi_bedroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565484de1a6dd1f18c5da_img_wabi_sabi_kitchen_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056530548d3ac7520871f8_img_wabi_sabi_bathroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056564647345b1ca35ad28_img_wabi_sabi_office_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565780d29e8d7ca09fe4e_img_wabi_sabi_whole_home_3.webp'
        ],
        imagesByRoom: {
          'living-room': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644de9fbe88b3dadbdea_img_wabi_sabi_living_room_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644d0769ba82a5aec96c_img_wabi_sabi_living_room_2.webp'
          ],
          'bedroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905648340cf156c83719948_img_wabi_sabi_bedroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905648361bc414e8b9a873d_img_wabi_sabi_bedroom_2.webp'
          ],
          'kitchen': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565482d04d5b7b8f342e9_img_wabi_sabi_kitchen_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905654872b17aa602623037_img_wabi_sabi_kitchen_2.webp'
          ],
          'bathroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e00e0c50f6fc304d7_img_wabi_sabi_bathroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652ed664fcab5451a967_img_wabi_sabi_bathroom_2.webp'
          ],
          'office': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565633bebda64d9d6482d_img_wabi_sabi_office_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565626baea1b9e424989c_img_wabi_sabi_office_2.webp'
          ],
          'whole-home': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905657e07f4bf8b0fd72605_img_wabi_sabi_whole_home_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056578e6c53609af204401_img_wabi_sabi_whole_home_2.webp'
          ]
        },
      },
      mediterranean: {
        styleName: 'Modern Mediterranean',
        description: 'Sun‑washed plaster, terracotta, travertine and linen with breezy indoor‑outdoor flow and relaxed luxe.',
        dna: [
          'Palette: chalk white, sand, terracotta, olive, sea‑blue',
          'Materials: tadelakt, hand‑formed tile, rustic woods, cane',
          'Lifestyle: cross‑breeze, light control, shaded terraces',
        ],
        finalImages: [
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644edfcd1933b904b05c_img_modern_mediterranean_living_room_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056484601d387663e98bc5_img_modern_mediterranean_bedroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565466f14f0635ab7d9fb_img_modern_mediterranean_kitchen_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e6b937486632b7365_img_modern_mediterranean_bathroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056563c37bb9990473e714_img_modern_mediterranean_office_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905657875439e0ace2cba64_img_modern_mediterranean_whole_home_3.webp'
        ],
        imagesByRoom: {
          'living-room': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644df0a3628b67ac8641_img_modern_mediterranean_living_room_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644d647345b1ca359622_img_modern_mediterranean_living_room_2.webp'
          ],
          'bedroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905648355c4891bc6fc24b2_img_modern_mediterranean_bedroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905648388b63b9e3883dc26_img_modern_mediterranean_bedroom_2.webp'
          ],
          'kitchen': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905654857c9dd69f39c3388_img_modern_mediterranean_kitchen_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056548654b10c032d03fa7_img_modern_mediterranean_kitchen_2.webp'
          ],
          'bathroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e0c2d304a9bd91d92_img_modern_mediterranean_bathroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905653040df4b8d354dd95f_img_modern_mediterranean_bathroom_2.webp'
          ],
          'office': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905656355c4891bc6fc3662_img_modern_mediterranean_office_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056563bb522b18602b9d5d_img_modern_mediterranean_office_2.webp'
          ],
          'whole-home': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056578e765194fb8e71d6f_img_modern_mediterranean_whole_home_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565788a5b750db27df959_img_modern_mediterranean_whole_home_2.webp'
          ]
        },
      },
      scandinavian: {
        styleName: 'Scandinavian',
        description: 'Cozy function with pale woods, artisan textiles and light. New Nordic brings folk color and layered warmth.',
        dna: [
          'Palette: warm neutrals, sky/ink blues; moss/rust accents',
          'Materials: oiled oak, wool, paper lamps, artisan rugs',
          'Approach: modular/repairable pieces, soft curves',
        ],
        finalImages: [
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644d052d6cf87d65484e_img_scandinavian_living_room_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690564832b05f733a398215b_img_scandinavian_bedroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056548c43bef500a13f792_img_scandinavian_kitchen_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e52f4b87e64b58494_img_scandinavian_bathroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056562bb522b18602b9d16_img_scandinavian_office_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056577a6b6e302b44ab9ba_img_scandinavian_whole_home_3.webp'
        ],
        imagesByRoom: {
          'living-room': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644d4c9d7d9d3867142c_img_scandinavian_living_room_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644c0c2d304a9bd90d19_img_scandinavian_living_room_2.webp'
          ],
          'bedroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056482af055fb069a35ea0_img_scandinavian_bedroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056482069324b2f04d63a8_img_scandinavian_bedroom_2.webp'
          ],
          'kitchen': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565482ffa012eed108c20_img_scandinavian_kitchen_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056547fba942ab18dfc7f9_img_scandinavian_kitchen_2.webp'
          ],
          'bathroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e9c62aaf4a58a10cd_img_scandinavian_bathroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e0fe986a737a46d55_img_scandinavian_bathroom_2.webp'
          ],
          'office': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056563ef0897619476f39f_img_scandinavian_office_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905656245aaebb925bfb527_img_scandinavian_office_2.webp'
          ],
          'whole-home': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056578906a44a312a4d487_img_scandinavian_whole_home_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565788a94bcf8e61a05e6_img_scandinavian_whole_home_2.webp'
          ]
        },
      },
      artdeco: {
        styleName: 'Art Deco Revival',
        description: 'Geometry, symmetry and luxurious tactility—flutes, scallops, lacquer and jewel tones refined for today.',
        dna: [
          'Palette: emerald, teal, wine, navy, champagne, black',
          'Materials: velvet, lacquer, inlay marbles, ribbed glass, brass',
          'Motifs: scallops, flutes, stepped geometry',
        ],
        finalImages: [
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644d329fc367a02d716e_img_art_deco_revival_living_room_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056482d9ccaebd1b9fbb42_img_art_deco_revival_bedroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056548488f2efb9b63b0e0_img_art_deco_revival_kitchen_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e0d3181fca448f08f_img_art_deco_revival_bathroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565620769ba82a5aedf1d_img_art_deco_revival_office_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905657800e0c50f6fc30a52_img_art_deco_revival_whole_home_3.webp'
        ],
        imagesByRoom: {
          'living-room': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644d8a94bcf8e619f294_img_art_deco_revival_living_room_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644d1872352a506bd301_img_art_deco_revival_living_room_2.webp'
          ],
          'bedroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056483258ec2d0514d75bc_img_art_deco_revival_bedroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690564830c2d304a9bd912ca_img_art_deco_revival_bedroom_2.webp'
          ],
          'kitchen': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056548a1ff08ac3c2141cd_img_art_deco_revival_kitchen_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565480b60d29505e38c15_img_art_deco_revival_kitchen_2.webp'
          ],
          'bathroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e0468f4ae1479094e_img_art_deco_revival_bathroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652ec43bef500a13f620_img_art_deco_revival_bathroom_2.webp'
          ],
          'office': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565628d1306fee09e6b58_img_art_deco_revival_office_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905656332e527952e2edda3_img_art_deco_revival_office_2.webp'
          ],
          'whole-home': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565787e772d34c47ddcfb_img_art_deco_revival_whole_home_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905657897c499392e4c4253_img_art_deco_revival_whole_home_2.webp'
          ]
        },
      },
      eclectic: {
        styleName: 'Eclectic Maximalism',
        description: 'Curated abundance—pattern‑mixing, heirlooms and saturated color, edited to feel intentional and joyful.',
        dna: [
          'Palette: layered mid‑tones with strategic brights',
          'Materials: chintz/stripes, trims, lacquer accents, gallery walls',
          'Habit: source vintage; re‑frame, re‑lacquer, re‑use',
        ],
        finalImages: [
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644de3adb40b14374cbc_img_eclectic_maximalism_living_room_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690564842086651fc2117fb9_img_eclectic_maximalism_bedroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056547e255a5bd04b4a937_img_eclectic_maximalism_kitchen_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e15ff0e6642bdd30b_img_eclectic_maximalism_bathroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056563dedc9102a6605d09_img_eclectic_maximalism_office_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056579e255a5bd04b4ae78_img_eclectic_maximalism_whole_home_3.webp'
        ],
        imagesByRoom: {
          'living-room': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644d87f704505c7daec8_img_eclectic_maximalism_living_room_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644d0fe986a737a45afc_img_eclectic_maximalism_living_room_2.webp'
          ],
          'bedroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056484e39e220d3a4ba8c6_img_eclectic_maximalism_bedroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056483441e06e62cdb1efa_img_eclectic_maximalism_bedroom_2.webp'
          ],
          'kitchen': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565485389d91970a2c001_img_eclectic_maximalism_kitchen_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565488aa7b8a2f0e776bc_img_eclectic_maximalism_kitchen_2.webp'
          ],
          'bathroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652ecd32c2cba44d090a_img_eclectic_maximalism_bathroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652ee3385c218a4b0d70_img_eclectic_maximalism_bathroom_2.webp'
          ],
          'office': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565638f2f646d197e62c0_img_eclectic_maximalism_office_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056563e9fbe88b3dadceda_img_eclectic_maximalism_office_2.webp'
          ],
          'whole-home': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565783db7147ec8b48555_img_eclectic_maximalism_whole_home_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565785acce4f55c5be0df_img_eclectic_maximalism_whole_home_2.webp'
          ]
        },
      },
      softindustrial: {
        styleName: 'Soft Industrial',
        description: 'Warm minimalism with tactile stone, wood, plaster and textiles. Clean lines, soft curves and quiet luxury that feels human.',
        dna: [
          'Palette: oat, toffee, chalky whites with black accents',
          'Materials: limewash/plaster, travertine/soapstone, linen, patinated metals',
          'Forms: soft curves, radius corners, fluted details',
        ],
        finalImages: [
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644d1f5f5634c747a4ca_img_soft_industrial_living_room_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690564827e772d34c47dcb3f_img_soft_industrial_bedroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056548588147c00035b3aa_img_soft_industrial_kitchen_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652edfcd1933b904bdcf_img_soft_industrial_bathroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565620913a6148c9baefa_img_soft_industrial_office_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905657a4e4ab9220fbff6b4_img_soft_industrial_whole_home_3.webp'
        ],
        imagesByRoom: {
          'living-room': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644e906a44a312a4c5ac_img_soft_industrial_living_room_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644d1627c6b8ea3f8fa9_img_soft_industrial_living_room_2.webp'
          ],
          'bedroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690564831d08a4863fa4a590_img_soft_industrial_bedroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056483de4d90e37b78a40d_img_soft_industrial_bedroom_2.webp'
          ],
          'kitchen': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565462a91dc8d9d0d38e5_img_soft_industrial_kitchen_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056548bb1224bc043048c1_img_soft_industrial_kitchen_2.webp'
          ],
          'bathroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652e86dd50aa280bb680_img_soft_industrial_bathroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905652ed35ab9e355e512e3_img_soft_industrial_bathroom_2.webp'
          ],
          'office': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905656397c499392e4c410f_img_soft_industrial_office_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056564ceb9830c2cbf1513_img_soft_industrial_office_2.webp'
          ],
          'whole-home': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056579d430f4ac28075ccd_img_soft_industrial_whole_home_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905657928b0a2b4b21b3eef_img_soft_industrial_whole_home_2.webp'
          ]
        },
      },
      desert: {
        styleName: 'Desert Modern',
        description: 'Southwestern minimalism—sun‑washed clay tones, sage greens, oxidized metals and indoor‑outdoor continuity.',
        dna: [
          'Palette: sun‑washed clay, sand, sage, oxidized metal',
          'Materials: limewash/clay plaster, travertine/cantera stone, warm woods, woven wool',
          'Ambiance: filtered desert light, indoor‑outdoor continuity, artisanal craft',
        ],
        finalImages: [
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644c474d15cd18c55ec0_img_desert_modern_living_room_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905648372b17aa6026222df_img_desert_modern_bedroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905654878b00d1adcf015ce_img_desert_modern_kitchen_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056483186df51a9582fe26_img_desert_modern_bathroom_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565634d6e8805f3875e36_img_desert_modern_office_3.webp',
          'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565781c5ca3e74c516c2f_img_desert_modern_whole_home_3.webp'
        ],
        imagesByRoom: {
          'living-room': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644d3869f6df4427c121_img_desert_modern_living_room_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905644d7538ea5c8755b908_img_desert_modern_living_room_2.webp'
          ],
          'bedroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056483a44ad1c6defeb0f8_img_desert_modern_bedroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056483abe48fbb717dcbe2_img_desert_modern_bedroom_2.webp'
          ],
          'kitchen': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565487def701a54745f14_img_desert_modern_kitchen_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565480246e7da092ecb97_img_desert_modern_kitchen_2.webp'
          ],
          'bathroom': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690564838741ca49d89af3c9_img_desert_modern_bathroom_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/6905648433139381a6ee791c_img_desert_modern_bathroom_2.webp'
          ],
          'office': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056563069324b2f04d74b0_img_desert_modern_office_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565632d48ef2a51151135_img_desert_modern_office_2.webp'
          ],
          'whole-home': [
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/690565785445a6ffd8d86313_img_desert_modern_whole_home_1.webp',
            'https://s3.amazonaws.com/webflow-prod-assets/642ba20158f55771b829e704/69056578654b10c032d04865_img_desert_modern_whole_home_2.webp'
          ]
        },
      },
    },
    projectContext: {
      type: [
        { id: 'new-home', name: 'New Home', icon: '🏗️', description: 'Building from scratch' },
        { id: 'remodel', name: 'Remodel', icon: '🔨', description: 'Updating existing space' },
      ],
      footprint: [
        { id: 'change', name: 'Yes, footprint will change' },
        { id: 'no-change', name: 'No, keeping same footprint' },
      ],
      plans: [
        { id: 'has-plans', name: 'Yes, I have plans/blueprints' },
        { id: 'no-plans', name: 'No plans yet' },
      ],
      spaceSpecific: {
        bathroom: [
          { id: 'replace-tub', name: 'Replace tub', options: [
            { id: 'yes', name: 'Yes' },
            { id: 'no', name: 'No' },
            { id: 'not-sure', name: 'Not Sure' }
          ]},
          { id: 'shower-type', name: 'Shower type', options: [
            { id: 'walk-in', name: 'Walk-in Shower' },
            { id: 'bathtub-combo', name: 'Bathtub/Shower Combo' },
            { id: 'separate', name: 'Separate Tub & Shower' }
          ]},
        ],
        kitchen: [
          { id: 'layout-change', name: 'Change layout', options: [
            { id: 'yes', name: 'Yes' },
            { id: 'no', name: 'No' },
            { id: 'cosmetic', name: 'Cosmetic Only' }
          ]},
        ],
      },
    },
    expertQuestions: {
      aria: {
        intro: 'Let\'s make sure the design and construction details align with your space. I\'ll identify where we can optimize layout, lighting, or structure before you choose materials.',
        questions: [
          {
            id: 'layout',
            prompt: 'Would you like to keep your current bathroom layout or explore a new spatial configuration?',
            description: 'This determines what fixtures and configurations we can work with.',
            options: [
              { id: 'keep', name: 'Keep current layout', icon: '📐' },
              { id: 'explore', name: 'Explore new configuration', icon: '🏗️' },
              { id: 'unsure', name: 'Not sure yet', icon: '🤔' },
            ],
            showIf: { projectType: 'remodel' },
          },
          {
            id: 'plans',
            prompt: 'Do you already have plans or blueprints for this space?',
            description: 'This helps me understand the scope and any existing design elements.',
            options: [
              { id: 'has-plans', name: 'Yes, I have plans', icon: '📋' },
              { id: 'no-plans', name: 'No plans yet', icon: '🔨' },
            ],
            showIf: { projectType: 'new-home' },
          },
          {
            id: 'separation',
            prompt: 'Would you like more separation between wet and dry zones?',
            description: 'This influences layout recommendations for your bathroom.',
            options: [
              { id: 'yes', name: 'Yes, I want separation', icon: '🚧' },
              { id: 'no', name: 'No, keep open', icon: '🪟' },
            ],
            showIf: { 
              conditions: [
                { expert: 'aria', questionId: 'layout', answerId: ['explore', 'unsure'] },
                { projectType: 'new-home' }
              ]
            },
          },
          {
            id: 'lighting',
            prompt: 'How much natural light will your bathroom have?',
            description: 'This helps us determine reflective materials and lighting solutions.',
            options: [
              { id: 'a-lot', name: 'A lot of natural light', icon: '☀️' },
              { id: 'some', name: 'Some natural light', icon: '🌤️' },
              { id: 'very-little', name: 'Very little natural light', icon: '🌙' },
            ],
          },
          {
            id: 'lighting-remodel',
            prompt: 'How much natural light does your bathroom currently get?',
            description: 'This helps us determine reflective materials and lighting solutions.',
            options: [
              { id: 'a-lot', name: 'A lot of natural light', icon: '☀️' },
              { id: 'some', name: 'Some natural light', icon: '🌤️' },
              { id: 'very-little', name: 'Very little natural light', icon: '🌙' },
            ],
            showIf: { projectType: 'remodel' },
          },
          {
            id: 'ceiling',
            prompt: 'What ceiling height would you prefer for your bathroom?',
            description: 'This affects fixture scale and proportion recommendations.',
            options: [
              { id: 'low', name: 'Low (under 8 ft)', icon: '📏' },
              { id: 'standard', name: 'Standard (8-9 ft)', icon: '📐' },
              { id: 'tall', name: 'Tall (9+ ft)', icon: '🏛️' },
            ],
            showIf: { projectType: 'new-home' },
          },
          {
            id: 'ceiling-remodel',
            prompt: 'How would you describe your bathroom\'s current ceiling height?',
            description: 'This affects fixture scale and proportion recommendations.',
            options: [
              { id: 'low', name: 'Low (under 8 ft)', icon: '📏' },
              { id: 'standard', name: 'Standard (8-9 ft)', icon: '📐' },
              { id: 'tall', name: 'Tall (9+ ft)', icon: '🏛️' },
            ],
            showIf: { projectType: 'remodel' },
          },
        ],
      },
      clara: {
        intro: 'Now that we know the project type, let\'s refine how this space should feel and function day-to-day.',
        questions: [
          {
            id: 'function',
            prompt: 'Is this bathroom your primary suite, a shared family bath, or a guest space?',
            description: 'This helps us understand usage patterns and prioritize features.',
            options: [
              { id: 'primary', name: 'Primary Suite', icon: '🏠' },
              { id: 'shared', name: 'Shared Family Bath', icon: '👨‍👩‍👧' },
              { id: 'guest', name: 'Guest Space', icon: '👋' },
            ],
          },
          {
            id: 'mood',
            prompt: 'How do you want this bathroom to feel when you walk in?',
            description: 'This sets the tone for materials, lighting, and finishes.',
            options: [
              { id: 'calm', name: 'Calm and serene', icon: '🌸' },
              { id: 'bright', name: 'Bright and fresh', icon: '☀️' },
              { id: 'warm', name: 'Warm and cozy', icon: '🔥' },
              { id: 'bold', name: 'Bold and expressive', icon: '💥' },
            ],
          },
          {
            id: 'maintenance',
            prompt: 'How important is easy maintenance to you?',
            description: 'This influences finish selections and material recommendations.',
            options: [
              { id: 'essential', name: 'Essential', icon: '✨' },
              { id: 'somewhat', name: 'Somewhat important', icon: '⚖️' },
              { id: 'not-priority', name: 'Not a priority', icon: '🎨' },
            ],
          },
        ],
      },
      mason: {
        intro: 'Beautiful choices deserve smart construction. Let\'s make sure your selections are durable, practical, and aligned with your build timeline.',
        questions: [
          {
            id: 'remodel-age',
            prompt: 'How old is your home or this bathroom?',
            description: 'This helps us understand electrical, plumbing, and structural considerations.',
            options: [
              { id: 'older', name: 'Older than 20 years', icon: '🏛️' },
              { id: 'newer', name: 'Newer than 10 years', icon: '🏢' },
              { id: 'unknown', name: 'Not sure', icon: '❓' },
            ],
            showIf: { projectType: 'remodel' },
          },
          {
            id: 'plumbing',
            prompt: 'Are you planning to relocate any plumbing fixtures like your shower, tub, or toilet?',
            description: 'This determines installation complexity and compatibility.',
            options: [
              { id: 'yes', name: 'Yes, relocating fixtures', icon: '🔧' },
              { id: 'no', name: 'No, keeping in place', icon: '📍' },
              { id: 'maybe', name: 'Maybe', icon: '🤔' },
            ],
            showIf: { projectType: 'remodel' },
          },
          {
            id: 'traffic',
            prompt: 'Is this a high-traffic bathroom or used occasionally?',
            description: 'This influences material durability and performance selections.',
            options: [
              { id: 'high', name: 'High-traffic bathroom', icon: '👥' },
              { id: 'occasional', name: 'Used occasionally', icon: '👤' },
            ],
          },
          {
            id: 'timeline',
            prompt: 'What\'s your target completion timeline?',
            description: 'This helps determine what products fit your schedule.',
            options: [
              { id: 'quick', name: 'Quick (under 6 weeks)', icon: '⚡' },
              { id: 'moderate', name: 'Moderate (2-3 months)', icon: '📅' },
              { id: 'flexible', name: 'Flexible (6+ months)', icon: '🗓️' },
            ],
          },
        ],
      },
    },
    materialsBySpace: {
      bathroom: [
        { id: 'flooring', name: 'Flooring', description: 'Choose your perfect flooring foundation' },
        { id: 'backsplash', name: 'Backsplash', description: 'Select wall tiles that inspire' },
        { id: 'countertops', name: 'Countertops', description: 'Pick your surface material' },
        { id: 'faucet', name: 'Faucet', description: 'Choose your faucet style' },
        { id: 'cabinet-door', name: 'Cabinet Door', description: 'Select door style' },
        { id: 'cabinet-finish', name: 'Cabinet Finish', description: 'Pick your cabinet finish' },
        { id: 'cabinet-hardware', name: 'Cabinet Hardware', description: 'Choose hardware details' },
        { id: 'tub', name: 'Tub', description: 'Select your bathtub' },
        { id: 'toilet', name: 'Toilet', description: 'Choose your toilet style' },
        { id: 'showerhead', name: 'Showerhead', description: 'Pick your shower experience' },
        { id: 'paint', name: 'Paint Color', description: 'Select your wall color' },
      ],
      kitchen: [
        { id: 'flooring', name: 'Flooring', description: 'Choose your perfect flooring foundation' },
        { id: 'backsplash', name: 'Backsplash', description: 'Select wall tiles that inspire' },
        { id: 'countertops', name: 'Countertops', description: 'Pick your surface material' },
        { id: 'faucet', name: 'Faucet', description: 'Choose your faucet style' },
        { id: 'cabinet-door', name: 'Cabinet Door', description: 'Select door style' },
        { id: 'cabinet-finish', name: 'Cabinet Finish', description: 'Pick your cabinet finish' },
        { id: 'cabinet-hardware', name: 'Cabinet Hardware', description: 'Choose hardware details' },
        { id: 'appliances', name: 'Appliances', description: 'Select your appliances' },
        { id: 'paint', name: 'Paint Color', description: 'Select your wall color' },
      ],
    },
  };

  // ============================================================================
  // JSON Question Configuration Loader
  // ============================================================================
  
  let questionConfigCache = {};
  
  /**
   * Loads a JSON question configuration file
   * @param {string} filePath - Path to the JSON file (e.g., 'config/questions/Global-Questions.json')
   * @returns {Promise<Array>} - Parsed JSON question array
   */
  async function loadQuestionConfig(filePath) {
    if (questionConfigCache[filePath]) {
      return questionConfigCache[filePath];
    }
    
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        console.warn(`Failed to load ${filePath}: ${response.status} ${response.statusText}`);
        throw new Error(`Failed to load ${filePath}: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      if (!Array.isArray(data) || data.length === 0) {
        console.warn(`Question config from ${filePath} is empty or invalid`);
        return [];
      }
      questionConfigCache[filePath] = data;
      console.log(`Successfully loaded ${data.length} questions from ${filePath}`);
      return data;
    } catch (error) {
      console.error(`Error loading question config from ${filePath}:`, error);
      console.warn(`Will fall back to default renderer`);
      // Return empty array as fallback to trigger fallback renderer
      return [];
    }
  }
  
  /**
   * Evaluates showIf conditions for JSON questions
   * @param {Object} showIf - The showIf condition object
   * @param {Object} context - Current state context (answers, routeMode, selected categories, etc.)
   * @returns {boolean} - Whether the question should be shown
   */
  function evaluateQuestionCondition(showIf, context) {
    if (!showIf) return true;
    
    // Handle 'all' conditions (AND logic - all must be true)
    if (showIf.all && Array.isArray(showIf.all)) {
      return showIf.all.every(condition => evaluateSingleCondition(condition, context));
    }
    
    // Handle single condition
    return evaluateSingleCondition(showIf, context);
  }
  
  /**
   * Evaluates a single condition
   * @param {Object} condition - Single condition object
   * @param {Object} context - Current state context
   * @returns {boolean}
   */
  function evaluateSingleCondition(condition, context) {
    // Route mode condition: { "routeMode": ["deep"] }
    if (condition.routeMode && Array.isArray(condition.routeMode)) {
      const currentRouteMode = context.routeMode || context.projectContext?.routeMode;
      return condition.routeMode.includes(currentRouteMode);
    }
    
    // Category selection condition: { "selected": "section_gate_gi:flooring" }
    if (condition.selected) {
      const [gateId, categoryId] = condition.selected.split(':');
      const selectedCategories = context.selectedCategories || context.projectContext?.selectedCategories || {};
      // selectedCategories is an object: { "section_gate_gi": ["flooring", "baseboards", ...] }
      const gateSelections = selectedCategories[gateId] || [];
      return Array.isArray(gateSelections) && gateSelections.includes(categoryId);
    }
    
    // Previous answer condition: { "answerOf": "question_id", "in": ["answer1", "answer2"] }
    if (condition.answerOf && condition.in) {
      const questionId = condition.answerOf;
      // Check both jsonQuestionAnswers and answers for backward compatibility
      const answers = context.answers || context.jsonQuestionAnswers || context.projectContext?.answers || context.projectContext?.jsonQuestionAnswers || {};
      const answer = answers[questionId];
      if (answer === undefined || answer === null) {
        return false; // Question not answered yet
      }
      if (Array.isArray(answer)) {
        // Multi-select: check if any selected answer is in the condition
        return answer.some(a => condition.in.includes(a));
      } else {
        // Single-select: check if answer is in the condition
        return condition.in.includes(answer);
      }
    }
    
    // Project type condition: { "projectType": "new-home" }
    if (condition.projectType) {
      const currentProjectType = context.projectType || context.projectContext?.projectType?.id || context.projectContext?.projectType;
      return currentProjectType === condition.projectType;
    }
    
    // Build type condition: { "buildType": "builder-spec" }
    if (condition.buildType) {
      const currentBuildType = context.buildType || context.projectContext?.buildType?.id || context.projectContext?.buildType;
      return currentBuildType === condition.buildType;
    }
    
    // Default: condition is true if it exists (backward compatibility)
    return true;
  }
  
  /**
   * Filters questions based on showIf conditions
   * @param {Array} questions - Array of question objects
   * @param {Object} context - Current state context
   * @returns {Array} - Filtered questions
   */
  function filterQuestionsByConditions(questions, context) {
    if (!Array.isArray(questions)) return [];
    return questions.filter(q => evaluateQuestionCondition(q.showIf, context));
  }
  
  // ============================================================================
  // Build dynamic 4-round step set covering 12 styles (3 options x 4 rounds)
  // ============================================================================
  function buildDynamicStepsFromLibrary(library, spaceId = 'general') {
    // Map space IDs to match style library room keys
    const spaceMap = {
      'general': 'whole-home'  // Whole Home option maps to whole-home images
    };
    const mappedSpaceId = spaceMap[spaceId] || spaceId;
    
    const styleKeys = Object.keys(library);
    // Prefer the 12 target styles when present
    const preferred = ['transitional','organic','japandi','wabi','mediterranean','scandinavian','artdeco','eclectic','softindustrial','coastal','farmhouse','desert'];
    const ordered = preferred.filter(k => library[k]).concat(styleKeys.filter(k => !preferred.includes(k)));
    const twelve = ordered.slice(0, 12);
    const rounds = [];
    for (let r = 0; r < 4; r++) {
      const options = [];
      for (let c = 0; c < 3; c++) {
        const key = twelve[r * 3 + c];
        const def = library[key];
        if (!def) continue;
        
        // Get room-specific image from imagesByRoom
        let img = null;
        if (def.imagesByRoom && def.imagesByRoom[mappedSpaceId] && def.imagesByRoom[mappedSpaceId].length > 0) {
          // Use first image from the room-specific array (_1 or _2)
          img = def.imagesByRoom[mappedSpaceId][0];
        } else {
          // Fallback to living-room if space not available
          if (def.imagesByRoom && def.imagesByRoom['living-room'] && def.imagesByRoom['living-room'].length > 0) {
            img = def.imagesByRoom['living-room'][0];
          } else {
            // Final fallback to first finalImages
            img = def.finalImages && def.finalImages[0];
          }
        }
        
        options.push({
          id: `${key}-${r+1}-${c+1}`,
          styleId: key,
          title: def.styleName,
          imageUrl: img || 'https://images.unsplash.com/photo-1505692794403-5f23d2fcf25d?auto=format&fit=crop&w=900&q=80',
        });
      }
      rounds.push({ id: `round-${r+1}`, prompt: r===0 ? 'Which look captures your vision of home?' : r===1 ? 'Which space feels right?' : r===2 ? 'Which design style resonates with you?' : 'Which style feels most like home?', options });
    }
    return rounds;
  }

  function deepMerge(target, source) {
    const output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
      Object.keys(source).forEach((key) => {
        if (isObject(source[key])) {
          if (!(key in target)) {
            Object.assign(output, { [key]: source[key] });
          } else {
            output[key] = deepMerge(target[key], source[key]);
          }
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  }

  function getOrCreateSessionId() {
    try {
      const key = 'idsq-session-id';
      let id = localStorage.getItem(key);
      if (!id) {
        id = Math.random().toString(36).slice(2) + Date.now().toString(36);
        localStorage.setItem(key, id);
      }
      return id;
    } catch (e) {
      return 'unknown';
    }
  }

  function buildWebhookPayload(config, state) {
    const spaceDef = (config.spaceTypes || []).find(s => s.id === state.selectedSpace);
    const selections = (state.choices || []).map((opt, idx) => opt ? ({
      round: idx + 1,
      optionId: opt.id || '',
      styleId: opt.styleId || '',
      styleName: (config.styleLibrary[opt.styleId]?.styleName) || opt.styleId || '',
      imageUrl: opt.imageUrl || ''
    }) : null).filter(Boolean);

    // Ensure all 12 style keys exist with numeric values
    const styleKeys = ['transitional','organic','japandi','wabi','mediterranean','scandinavian','artdeco','eclectic','softindustrial','coastal','farmhouse','desert'];
    const normalizedScores = {};
    styleKeys.forEach((k) => { normalizedScores[k] = 0; });
    if (state.styleScores) {
      Object.keys(state.styleScores).forEach((k) => {
        const v = Number(state.styleScores[k]);
        if (!Number.isNaN(v)) normalizedScores[k] = v;
      });
    }

    // Build payload matching Make's expected structure
    // If Make expects nested, keep nested; if flat, we'll adjust based on errors
    const payload = {
      meta: {
        quizId: 'idsq-v1',
        version: '1.0.0',
        timestampIso: new Date().toISOString(),
        sessionId: getOrCreateSessionId(),
      },
      participant: {
        name: state.leadData?.participantName || state.participantName || null,
        email: state.leadData?.email || null,
        newsletter: !!state.newsLetterSignup,
        invited: false,
        rid: null,
        cp: null,
      },
      context: {
        spaceId: state.selectedSpace || null,
        spaceName: spaceDef?.name || null,
        wordAssociation: {
          word: state.wordChoice?.word || null,
          styleIds: Array.isArray(state.wordChoice?.styleIds) ? state.wordChoice.styleIds : [],
},
      },
      selections: {
        rounds: selections,
      },
      results: {
        finalStyle: state.finalStyle ? {
          styleId: state.finalStyle.styleId || state.finalStyle.styleName,
          styleName: state.finalStyle.styleName,
          description: state.finalStyle.description || '',
          dna: Array.isArray(state.finalStyle.dna) ? state.finalStyle.dna : [],
          images: Array.isArray(state.finalStyle.finalImages) ? state.finalStyle.finalImages : [],
        } : {
          styleId: null,
          styleName: null,
          description: null,
          dna: [],
          images: [],
},
      },
    };

    // Ensure all required fields are present and properly formatted
    // Don't prune - Make needs all fields even if null/empty
    // But ensure arrays are always arrays (not null) and required fields exist
    if (!payload.results.finalStyle) {
      payload.results.finalStyle = null;
    }
    
    // Ensure arrays are never null
    if (!Array.isArray(payload.context.wordAssociation.styleIds)) {
      payload.context.wordAssociation.styleIds = [];
    }
    if (payload.results.finalStyle) {
      if (!Array.isArray(payload.results.finalStyle.dna)) {
        payload.results.finalStyle.dna = [];
      }
      if (!Array.isArray(payload.results.finalStyle.images)) {
        payload.results.finalStyle.images = [];
      }
    }
    if (!Array.isArray(payload.selections.rounds)) {
      payload.selections.rounds = [];
    }

    return payload;
  }

  async function sendToWebhook(config, payload) {
    if (!config.webhook || !config.webhook.enable || !config.webhook.url) return { ok: true, skipped: true };
    try {
      const headers = Object.assign({ 'Content-Type': 'application/json' }, config.webhook.headers || {});
      const res = await fetch(config.webhook.url, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });
      const text = await res.text().catch(() => '');
      return { ok: res.ok, status: res.status, body: text };
    } catch (e) {
      return { ok: false, error: String(e) };
    }
  }

  function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
  }

  function createElement(tag, className, attrs = {}) {
    const el = document.createElement(tag);
    if (className) {
      el.className = className;
    }
    Object.entries(attrs).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        el.setAttribute(key, value);
      }
    });
    return el;
  }

  const WHOLE_HOME_DEFAULT_SPACES = [
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'living-room', name: 'Living Room' },
    { id: 'bedroom', name: 'Bedroom' },
    { id: 'bathroom', name: 'Bathroom' },
  ];

  const WHOLE_HOME_CORE_SPACE_IDS = new Set(['kitchen', 'living-room', 'bedroom', 'bathroom', 'office']);

  const WHOLE_HOME_ADDITIONAL_SPACES = [
    'Attic', 'Balcony', 'Bar', 'Basement', 'Breakfast Area', 'Casita', 'Closet', 'Courtyard',
    'Deck', 'Den', 'Dining Room', 'Drawing Room', 'Drop Zone', 'Entryway', 'Family Room',
    'Flex Space', 'Foyer', 'Game Room', 'Garage', 'Gazebo', 'General Exterior', 'General Interior',
    'Great Room', 'Gym', 'Hallway', 'Home Theater', 'Library', 'Loft', 'Lounge', 'Mechanical Room',
    'Mudroom', 'Nursery', 'Outdoor Kitchen', 'Outdoor Shower', 'Pantry', 'Patio', 'Pool Area',
    'Pool Bath', 'Porch', 'Powder Bathroom', 'Prep Kitchen', 'Storage Room', 'Study', 'Sunroom',
    'Wine Cellar', 'Workshop'
  ];

  function normalizeSpaceId(nameOrId) {
    if (!nameOrId) return '';
    return nameOrId
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function ensureSpacesRequested(state) {
    if (!Array.isArray(state.spacesRequested)) {
      state.spacesRequested = [];
    }
    const seen = new Set();
    state.spacesRequested = state.spacesRequested.filter((space) => {
      if (!space || !space.id) {
        return false;
      }
      const normalizedId = normalizeSpaceId(space.id);
      if (seen.has(normalizedId)) {
        return false;
      }
      seen.add(normalizedId);
      return true;
    });
  }

  function addSpaceToSelection(state, spaceId, spaceName) {
    ensureSpacesRequested(state);
    const normalizedId = normalizeSpaceId(spaceId);
    if (!normalizedId) return false;
    if (state.spacesRequested.some((space) => normalizeSpaceId(space.id) === normalizedId)) {
      return false;
    }
    state.spacesRequested.push({ id: normalizedId, name: spaceName || spaceId });
    return true;
  }

  function removeSpaceFromSelection(state, spaceId) {
    ensureSpacesRequested(state);
    const normalizedId = normalizeSpaceId(spaceId);
    const beforeLength = state.spacesRequested.length;
    state.spacesRequested = state.spacesRequested.filter(
      (space) => normalizeSpaceId(space.id) !== normalizedId
    );
    return state.spacesRequested.length !== beforeLength;
  }

  function createMenuButton(handlers) {
    if (!handlers || typeof handlers.onRestart !== 'function') {
      return null;
    }

    const menuWrapper = createElement('div', 'idsq-menu');
    const trigger = createElement('button', 'idsq-menu-button', {
      type: 'button',
      'aria-haspopup': 'true',
      'aria-expanded': 'false',
      'aria-label': 'Quiz options',
    });
    trigger.innerHTML = '<span aria-hidden="true">⋯</span>';

    const dropdown = createElement('div', 'idsq-menu-dropdown', {
      role: 'menu',
    });

    let isOpen = false;

    const closeMenu = () => {
      if (!isOpen) return;
      isOpen = false;
      trigger.setAttribute('aria-expanded', 'false');
      dropdown.classList.remove('idsq-menu-dropdown-open');
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };

    const openMenu = () => {
      if (isOpen) return;
      isOpen = true;
      trigger.setAttribute('aria-expanded', 'true');
      dropdown.classList.add('idsq-menu-dropdown-open');
      setTimeout(() => {
        document.addEventListener('click', handleDocumentClick);
        document.addEventListener('keydown', handleEscapeKey);
      }, 0);
    };

    const toggleMenu = () => {
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    };

    function handleDocumentClick(event) {
      if (!menuWrapper.contains(event.target)) {
        closeMenu();
      }
    }

    function handleEscapeKey(event) {
      if (event.key === 'Escape') {
        closeMenu();
      }
    }

    const startButton = createElement('button', 'idsq-menu-item', {
      type: 'button',
      role: 'menuitem',
    });
    startButton.textContent = 'Start from Beginning';
    startButton.addEventListener('click', () => {
      closeMenu();
      handlers.onRestart();
    });

    const restartSectionButton = createElement('button', 'idsq-menu-item', {
      type: 'button',
      role: 'menuitem',
    });
    restartSectionButton.textContent = 'Restart This Section';
    restartSectionButton.addEventListener('click', () => {
      closeMenu();
      if (typeof handlers.onRestartSection === 'function') {
        handlers.onRestartSection();
      } else {
        handlers.onRestart();
      }
    });

    const scheduleButton = createElement('a', 'idsq-menu-item', {
      href: 'https://www.jlcoates.com/interior-design/contact',
      target: '_blank',
      rel: 'noopener noreferrer',
      role: 'menuitem',
      style: 'text-decoration: none; display: block;',
    });
    scheduleButton.textContent = 'Schedule';
    scheduleButton.addEventListener('click', () => {
      closeMenu();
      // Link will navigate naturally
    });

    dropdown.appendChild(scheduleButton);
    dropdown.appendChild(startButton);
    dropdown.appendChild(restartSectionButton);
    menuWrapper.appendChild(trigger);
    menuWrapper.appendChild(dropdown);

    trigger.addEventListener('click', toggleMenu);
    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleMenu();
      }
    });

    return menuWrapper;
  }

  function attachMenuToSection(section, handlers) {
    if (!section || !handlers || section.dataset.hideMenu === 'true') {
      return;
    }
    const existingMenu = section.querySelector('.idsq-menu');
    if (existingMenu) {
      existingMenu.remove();
    }
    const menu = createMenuButton(handlers);
    if (!menu) return;

    const preferredAnchors = [
      '.idsq-button-container:last-of-type',
      '.idsq-step-navigation',
      '.idsq-milestone-actions',
    ];

    let anchor = null;
    for (const selector of preferredAnchors) {
      anchor = section.querySelector(selector);
      if (anchor) break;
    }

    if (anchor) {
      anchor.appendChild(menu);
      anchor.classList.add('idsq-menu-anchor');
    } else {
      const container = createElement('div', 'idsq-button-container idsq-menu-container');
      container.appendChild(menu);
      section.appendChild(container);
    }
  }

  function injectFont(config) {
    if (!config.brand || !config.brand.fontUrl) return;
    const existing = document.querySelector(`link[href="${config.brand.fontUrl}"]`);
    if (existing) return;
    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';
    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = 'anonymous';
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = config.brand.fontUrl;
    document.head.appendChild(preconnect1);
    document.head.appendChild(preconnect2);
    document.head.appendChild(link);
  }

  function showSection(mount, section, handlers) {
    const previous = mount.firstElementChild;
    
    // Clean up keyboard listeners from previous section
    if (previous && previous._keyboardCleanup) {
      previous._keyboardCleanup();
    }
    
    if (!previous) {
      mount.innerHTML = '';
      mount.appendChild(section);
      requestAnimationFrame(() => {
        section.classList.add('idsq-animate-in');
        attachMenuToSection(section, handlers);
      });
      return;
    }
    previous.classList.remove('idsq-animate-in');
    previous.classList.add('idsq-animate-out');
    previous.addEventListener(
      'animationend',
      () => {
        // Clean up keyboard listeners before removing
        if (previous._keyboardCleanup) {
          previous._keyboardCleanup();
        }
        mount.innerHTML = '';
        mount.appendChild(section);
        requestAnimationFrame(() => {
        section.classList.add('idsq-animate-in');
        const shouldScroll = section.dataset.noScroll !== 'true';
        if (shouldScroll) {
          // Scroll to top of quiz container on each selection, with offset for fixed header
          if (mount && mount.id === 'idsq') {
            const rect = mount.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const target = scrollTop + rect.top - 250; // Offset by 250px for header
            window.scrollTo({ top: target, behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
          attachMenuToSection(section, handlers);
        });
      },
      { once: true }
    );
  }

  function renderIntro(config, mount, handlers) {
    // Only guide-panel variant is used
    const section = createElement('section', 'idsq-quiz-hero');

    const header = createElement('header', 'idsq-hero-header');
    const eyebrow = createElement('p', 'idsq-eyebrow');
    eyebrow.textContent = 'JL Coates Interior Design Studio';
    const h1 = createElement('h1', 'idsq-hero-title');
    h1.textContent = 'Interior Design Style Quiz';
    const subtitle = createElement('p', 'idsq-subtitle');
    subtitle.textContent = 'Discover your signature style in minutes—guided by our design expert.';
    header.appendChild(eyebrow);
    header.appendChild(h1);
    header.appendChild(subtitle);

    // Start Quiz button positioned top right
    const ctaWrap = createElement('div', 'idsq-cta-wrap');
    const cta = createElement('button', 'idsq-button idsq-button-primary', { type: 'button', 'aria-label': 'Start the Interior Design Style Quiz' });
    cta.textContent = config.copy.startButton || 'Start Quiz';
    cta.addEventListener('click', handlers.onStart);
    
    // Add keyboard support: spacebar triggers start button
    const handleKeyDown = (event) => {
      if (event.key === ' ' || event.key === 'Spacebar') {
        const activeElement = document.activeElement;
        const isInputFocused = activeElement && (
          activeElement.tagName === 'INPUT' ||
          activeElement.tagName === 'TEXTAREA' ||
          activeElement.isContentEditable
        );
        if (!isInputFocused && mount.contains(section)) {
          event.preventDefault();
          cta.click();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    section._keyboardCleanup = () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    
    ctaWrap.appendChild(cta);

    const guidePanel = createElement('div', 'idsq-guide-panel');
    const avatar = createElement('img', 'idsq-guide-avatar', {
      src: config.copy.claraProfileUrl,
      alt: 'Clara, your JL Coates interior design guide',
      width: '112',
      height: '112',
      loading: 'eager',
      decoding: 'async',
      draggable: 'false',
    });
    avatar.addEventListener('contextmenu', (e) => e.preventDefault());
    const guideCopy = createElement('div', 'idsq-guide-copy');
    const introLine = createElement('p', 'idsq-guide-intro');
    introLine.innerHTML = 'Hi! I\'m <strong>Clara</strong>, your interior design expert at <strong>JL Coates</strong>.';
    const followLine = createElement('p');
    followLine.innerHTML = 'I\'ll walk you through a <strong>personalized quiz</strong> to reveal your unique design style and curate a space you\'ll love—from finishes and furnishings to flow and functionality.';
    guideCopy.appendChild(introLine);
    guideCopy.appendChild(followLine);
    guidePanel.appendChild(avatar);
    guidePanel.appendChild(guideCopy);

    section.appendChild(header);
    section.appendChild(guidePanel);
    section.appendChild(ctaWrap);
    section.dataset.hideMenu = 'true';
    showSection(mount, section, handlers);
  }

  function isNameValid(name) {
    // Basic validation: check for length and structure
    if (!name || name.length < 2 || name.length > 50) {
      return false;
    }
    
    // Check for only whitespace
    if (name.trim().length === 0) {
      return false;
    }
    
    // Allow list of common legitimate names to reduce false positives
    const allowedNames = [
      'alex', 'sarah', 'david', 'michael', 'jennifer', 'james', 'mary', 'john', 'patricia',
      'robert', 'linda', 'william', 'barbara', 'richard', 'elizabeth', 'joseph', 'susan',
      'thomas', 'jessica', 'christopher', 'karen', 'charles', 'nancy', 'daniel', 'lisa',
      'matthew', 'betty', 'anthony', 'helen', 'mark', 'sandra', 'donald', 'donna',
      'steven', 'carol', 'paul', 'ruth', 'andrew', 'sharon', 'joshua', 'michelle',
      'kenneth', 'laura', 'kevin', 'sarah', 'brian', 'kimberly', 'george', 'deborah',
      'edward', 'jessica', 'ronald', 'stephanie', 'timothy', 'rebecca', 'jason', 'virginia',
      'jeremy', 'kathleen', 'ryan', 'pamela', 'jacob', 'martha', 'gary', 'debra',
      'nicholas', 'janet', 'eric', 'racha', 'jonathan', 'cynthia', 'stephen', 'mary',
      'larry', 'amy', 'justin', 'shirley', 'scott', 'angela', 'brandon', 'anna',
      'benjamin', 'brenda', 'samuel', 'pamela', 'frank', 'nicole', 'gregory', 'virginia',
      'raymond', 'samantha', 'alexander', 'katherine', 'patrick', 'emily', 'jack', 'melissa',
      'dennis', 'harold', 'joan', 'todd', 'amanda', 'wesley', 'kelly', 'sean', 'ashley'
    ];
    
    // If it's a common name, allow it
    if (allowedNames.includes(name.toLowerCase().trim())) {
      return true;
    }
    
    // Comprehensive NSFW profanity filter - extensive list of inappropriate words
    const inappropriateWords = [
      // Sexual explicit content
      'penis', 'vagina', 'dick', 'cock', 'pussy', 'cunt', 'clit', 'asshole', 'butthole', 'boob', 'boobs', 'tit', 'tits',
      'breast', 'nipple', 'dildo', 'vibrator', 'masturbate', 'orgasm', 'ejaculate', 'ejaculation', 'semen',
      'sex', 'fuck', 'cum', 'jizz', 'porn', 'porno', 'xxx', 'hentai', 'erotic', 'intercourse',
      'motherfucker', 'motherfuck', 'motherfucking', 'fucker', 'fucking', 'fucked', 'fucks', 'fuckin',
      
      // Body parts (vulgar)
      'vag', 'piss', 'pee', 'poop', 'shit', 'turd', 'fart',
      'ass', 'butt', 'booty', 'buttocks', 'anus',
      
      // Profanity and vulgar language
      'shit', 'bitch', 'bastard', 'slut', 'whore', 'hoe', 'prostitute', 'hooker',
      'crap', 'damn', 'hell', 'jerk', 'suck', 'dumb', 'stupid',
      'asshole', 'shithead', 'dickhead', 'cockhead', 'bastard', 'motherfucker',
      'screw', 'screwed', 'screwyou',
      
      // Hate speech and slurs
      'nigger', 'nigga', 'nazi', 'kkk', 'retard', 'retarded', 'autistic', 'spastic',
      'fag', 'faggot', 'fagot', 'homo', 'lesbian', 'dyke',
      'chink', 'gook', 'spic', 'wop', 'dago', 'kike', 'sheeny', 'wetback',
      
      // Sexual acts
      'masturbation', 'masturbating', 'blowjob', 'handjob', 'rimjob', 'gangbang',
      'orgy', 'threesome', 'anal', 'oral', 'bdsm', 'bondage',
      
      // Drug references
      'cocaine', 'heroin', 'meth', 'methamphetamine', 'crack', 'dope', 'weed',
      'marijuana', 'cannabis', 'coke', 'drug', 'drugs', 'stoned', 'high',
      'lsd', 'ecstasy', 'acid',
      
      // Violence and threats
      'kill', 'killing', 'killyou', 'murder', 'murderer', 'suicide', 'terrorist',
      'bomb', 'killmyself', 'killyourself', 'bombthreat',
      
      // Internet slang/vulgar
      'stfu', 'gtfo', 'wtf', 'omfg', 'lmfao', 'lmao', 'rofl',
      'noob', 'newb', 'stfu',
      
      // Body parts (explicit)
      'pen1s', 'd1ck', 'p3nis', 'dicksucker', 'cocksucker',
      'balls', 'scrotum', 'testicle', 'buttcheeks', 'tits',
      
      // Censored variations
      'f*ck', 'sh*t', 'b*tch', 'a**', 'd*ck', 'c*ck', 'p*ssy', 'c*nt',
      's**t', 'f**k', 'bi**h', 'd**k', 'c**k',
      'fu**', 'sh**', 'bi***', '***',
      
      // Compound vulgar words
      'fuckyou', 'fukyou', 'screwyou', 'eatme', 'suckmy',
      'pieceofshit', 'sonofbitch', 'motherfucker',
    ];
    
    // Normalize name for checking (remove special characters and numbers)
    const normalizedName = name.toLowerCase()
      .replace(/[@#$%!*0-9]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    
    // Check if name contains explicit inappropriate words
    for (let word of inappropriateWords) {
      const lowerWord = word.toLowerCase();
      
      // Check if the word appears anywhere in the name (catches compounds like "motherfucker")
      if (name.toLowerCase().includes(lowerWord) || normalizedName.includes(lowerWord)) {
        return false;
      }
      
      // Also check as whole word boundary match
      const wordPattern = new RegExp('\\b' + lowerWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
      if (wordPattern.test(name) || wordPattern.test(normalizedName)) {
        return false;
      }
    }
    
    // Check for leetspeak variations of common vulgar words only
    const leetspeakPatterns = [
      /\b[fp][*u]*[ck]+\b/gi,
      /\b[sh][*i]*[t]+\b/gi,
      /\bb[*i]*[tc]*[h]+\b/gi,
    ];
    
    for (let pattern of leetspeakPatterns) {
      if (pattern.test(name.toLowerCase())) {
        return false;
      }
    }
    
    // Check for all special characters only
    if (/^[^a-zA-Z\s]+$/.test(name)) {
      return false;
    }
    
    return true;
  }
  
  function showInputError(input, message) {
    let errorMsg = input.parentElement.querySelector('.idsq-input-error');
    if (!errorMsg) {
      errorMsg = createElement('p', 'idsq-input-error');
      input.parentElement.appendChild(errorMsg);
    }
    errorMsg.textContent = message;
  }
  
  function renderNameCapture(config, mount, handlers) {
    const section = createElement('section', 'idsq-intro');
    const title = createElement('h2', 'idsq-title');
    title.textContent = config.copy.namePromptTitle;
    const description = createElement('p', 'idsq-description');
    description.textContent = config.copy.namePromptDescription;

    const form = createElement('form', 'idsq-form');
    
    const input = createElement('input', 'idsq-input', {
      type: 'text',
      placeholder: config.copy.namePlaceholder,
      maxlength: '50',
      required: 'true',
      name: 'participantName',
      id: 'idsq-participant-name',
    });
    
    const buttonContainer = createElement('div', 'idsq-button-container idsq-name-buttons');
    
    const submitButton = createElement('button', 'idsq-button idsq-button-primary idsq-hidden', { type: 'submit' });
    submitButton.textContent = 'Continue';
    submitButton.disabled = true;
    submitButton.style.display = 'none';
    
    // Check URL parameters for pre-filled name (for invited users)
    const urlParams = new URLSearchParams(window.location.search);
    const urlName = urlParams.get('name');
    if (urlName && urlName.trim()) {
      input.value = decodeURIComponent(urlName.trim());
      // Show and enable Continue button if name is pre-filled
      submitButton.style.display = '';
      submitButton.disabled = false;
      submitButton.classList.remove('idsq-hidden');
      buttonContainer.classList.add('idsq-name-has-primary');
    }
    
    const skipButton = createElement('button', 'idsq-button idsq-button-secondary', { type: 'button' });
    skipButton.textContent = config.copy.nameSkip;
    
    // Add keyboard support: spacebar triggers skip button when input is empty
    const handleKeyDown = (event) => {
      if (event.key === ' ' || event.key === 'Spacebar') {
        const activeElement = document.activeElement;
        // Only trigger if not typing in the input field
        if (activeElement !== input && mount.contains(section)) {
          const current = input.value.trim();
          if (!current) {
            // If input is empty, spacebar triggers skip
            event.preventDefault();
            skipButton.click();
          } else if (submitButton.style.display !== 'none' && !submitButton.disabled) {
            // If input has value and submit button is visible, spacebar triggers submit
            event.preventDefault();
            submitButton.click();
          }
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    section._keyboardCleanup = () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    
    form.appendChild(input);
    buttonContainer.appendChild(submitButton);
    buttonContainer.appendChild(skipButton);
    form.appendChild(buttonContainer);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = input.value.trim();
      
      if (!name) {
        return; // require value or use Skip
      }
      // Validate name for inappropriate content
      if (name && !isNameValid(name)) {
        showInputError(input, 'Please enter a name that is respectful and appropriate.');
        return;
      }
      
      handlers.onSubmitName(name || null);
    });

    // Block Enter when empty
    form.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const current = input.value.trim();
        if (!current) {
          e.preventDefault();
        }
      }
    });

    skipButton.addEventListener('click', () => {
      handlers.onSubmitName(null);
    });
    
    // Real-time validation and button toggle
    input.addEventListener('input', () => {
      const current = input.value.trim();
      const hasValue = current.length > 0;
      submitButton.disabled = !hasValue;
      submitButton.style.display = hasValue ? '' : 'none';
      if (hasValue) {
        submitButton.classList.remove('idsq-hidden');
        buttonContainer.classList.add('idsq-name-has-primary');
      } else {
        submitButton.classList.add('idsq-hidden');
        buttonContainer.classList.remove('idsq-name-has-primary');
      }
      if (current && !isNameValid(current)) {
        input.style.borderColor = '#ef4444';
      } else {
        input.style.borderColor = '';
      }
    });

    section.appendChild(title);
    section.appendChild(description);
    section.appendChild(form);

    showSection(mount, section, handlers);
    input.focus();
  }

  function renderSpaceSelection(config, mount, state, handlers) {
    const section = createElement('section', 'idsq-intro');
    const title = createElement('h2', 'idsq-title');
    title.textContent = config.copy.spaceSelectionTitle;
    const description = createElement('p', 'idsq-description');
    description.textContent = config.copy.spaceSelectionDescription;

    const grid = createElement('div', 'idsq-option-grid');

    config.spaceTypes.forEach((space) => {
      const card = createElement('button', 'idsq-option-card', {
        type: 'button',
      });
      card.addEventListener('click', () => handlers.onSelectSpace(space.id));
      
      card.classList.add('idsq-space-card');
      if (state && state.selectedSpace === space.id) {
        card.classList.add('idsq-selected');
        // Add checkmark overlay for selected cards
        const checkmarkOverlay = createElement('div', 'idsq-card-checkmark');
        checkmarkOverlay.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `;
        card.appendChild(checkmarkOverlay);
      }

      const icon = createElement('div', 'idsq-space-icon');
      icon.textContent = space.icon;
      const label = createElement('div', 'idsq-option-label');
      const spaceTitle = createElement('h3', 'idsq-option-title');
      spaceTitle.textContent = space.name;
      const spaceDescription = createElement('p', 'idsq-option-description');
      spaceDescription.textContent = space.description;

      label.appendChild(spaceTitle);
      label.appendChild(spaceDescription);
      card.appendChild(icon);
      card.appendChild(label);
      grid.appendChild(card);
    });

    section.appendChild(title);
    section.appendChild(description);
    section.appendChild(grid);

    const actions = createElement('div', 'idsq-button-container idsq-space-selection-actions');
    if (state && state.selectedSpace) {
      actions.classList.add('idsq-space-selection-has-selection');
      const continueButton = createElement('button', 'idsq-button idsq-button-primary', { type: 'button' });
      continueButton.textContent = 'Continue';
      continueButton.addEventListener('click', () => {
        handlers.onSelectSpace(state.selectedSpace);
      });
      actions.appendChild(continueButton);
      
      // Add keyboard support: spacebar triggers continue button
      const handleKeyDown = (event) => {
        if (event.key === ' ' || event.key === 'Spacebar') {
          const activeElement = document.activeElement;
          const isInputFocused = activeElement && (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.isContentEditable
          );
          if (!isInputFocused && mount.contains(section)) {
            event.preventDefault();
            continueButton.click();
          }
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      section._keyboardCleanup = () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
    section.appendChild(actions);

    showSection(mount, section, handlers);
  }

  function renderWholeHomeSpaceSelection(config, mount, state, handlers, saveStateFn) {
    const saveState = saveStateFn || ((nextState) => {
      try {
        localStorage.setItem('idsq-quiz-progress', JSON.stringify(nextState));
      } catch (e) {
        console.warn('[IDSQ] Unable to persist whole-home selection progress.');
      }
    });

    ensureSpacesRequested(state);

    let stateMutated = false;

    if (!state.spacesRequested || state.spacesRequested.length === 0) {
      state.spacesRequested = WHOLE_HOME_DEFAULT_SPACES.map((space) => ({ ...space }));
      stateMutated = true;
    }

    if (typeof state.showOtherSpaces === 'undefined') {
      state.showOtherSpaces = false;
      stateMutated = true;
    }

    if (typeof state.showCustomSpaceInput === 'undefined') {
      state.showCustomSpaceInput = false;
      stateMutated = true;
    }

    if (!state.otherSpacesVisibleCount || state.otherSpacesVisibleCount < 18) {
      state.otherSpacesVisibleCount = 18;
      stateMutated = true;
    }

    ensureSpacesRequested(state);

    const customSpaces = state.spacesRequested.filter((space) => normalizeSpaceId(space.id).startsWith('custom-'));
    const additionalSelected = state.spacesRequested.filter(
      (space) =>
        !WHOLE_HOME_CORE_SPACE_IDS.has(normalizeSpaceId(space.id)) &&
        !normalizeSpaceId(space.id).startsWith('custom-')
    );

    if ((additionalSelected.length > 0 || customSpaces.length > 0) && !state.showOtherSpaces) {
      state.showOtherSpaces = true;
      stateMutated = true;
    }

    if (stateMutated) {
      saveState(state);
    }

    const showOtherSpaces = !!state.showOtherSpaces || additionalSelected.length > 0 || customSpaces.length > 0;
    const showCustomInput = !!state.showCustomSpaceInput;

    const section = createElement('section', 'idsq-intro idsq-whole-home');
    section.dataset.noScroll = 'true';

    const title = createElement('h2', 'idsq-title');
    title.textContent = 'Which spaces would you like to design?';
    if (state.selectedSpace === 'general') {
      title.textContent = 'Which spaces belong in your Home?';
    }
    section.appendChild(title);

    const description = createElement('p', 'idsq-description');
    description.innerHTML =
      '<strong>Core rooms are pre-selected.</strong><br>Add or remove spaces below, and use “Other” to browse additional rooms or add your own.';
    section.appendChild(description);

    const coreSpaces = [
      { id: 'living-room', name: 'Living Room', icon: '🛋️', description: 'Social spaces for gathering and relaxation' },
      { id: 'bedroom', name: 'Bedroom', icon: '🛏️', description: 'Personal retreat and rest spaces' },
      { id: 'kitchen', name: 'Kitchen', icon: '🍳', description: 'Culinary spaces and dining areas' },
      { id: 'bathroom', name: 'Bathroom', icon: '🛁', description: 'Wellness and rejuvenation spaces' },
      { id: 'office', name: 'Office', icon: '💼', description: 'Productive and inspiring work spaces' },
      { id: 'other', name: 'Other', icon: '➕', description: 'Browse additional spaces or add custom rooms' },
    ];

    const isSpaceSelected = (spaceId) =>
      state.spacesRequested.some((space) => normalizeSpaceId(space.id) === normalizeSpaceId(spaceId));

    const coreGrid = createElement('div', 'idsq-option-grid idsq-core-space-grid');

    coreSpaces.forEach((space) => {
      const card = createElement('button', 'idsq-option-card idsq-space-card', { type: 'button' });

      if (space.id === 'other') {
        card.classList.add('idsq-other-toggle-card');
        if (showOtherSpaces) {
          card.classList.add('idsq-selected');
          // Add checkmark overlay for selected cards
          const checkmarkOverlay = createElement('div', 'idsq-card-checkmark');
          checkmarkOverlay.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#006bea"/>
              <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          `;
          card.appendChild(checkmarkOverlay);
        }
        card.addEventListener('click', () => {
          state.showOtherSpaces = !showOtherSpaces;
          if (!state.showOtherSpaces) {
            state.showCustomSpaceInput = false;
            state.otherSpacesVisibleCount = 18;
          }
          saveState(state);
          renderWholeHomeSpaceSelection(config, mount, state, handlers, saveState);
        });
      } else {
        if (isSpaceSelected(space.id)) {
          card.classList.add('idsq-selected');
          // Add checkmark overlay for selected cards
          const checkmarkOverlay = createElement('div', 'idsq-card-checkmark');
          checkmarkOverlay.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#006bea"/>
              <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          `;
          card.appendChild(checkmarkOverlay);
        }
        card.addEventListener('click', () => {
          const removed = removeSpaceFromSelection(state, space.id);
          if (!removed) {
            addSpaceToSelection(state, space.id, space.name);
          }
          saveState(state);
          renderWholeHomeSpaceSelection(config, mount, state, handlers, saveState);
        });
      }

      const icon = createElement('div', 'idsq-space-icon');
      icon.textContent = space.icon;
      const label = createElement('div', 'idsq-option-label');
      const spaceTitle = createElement('h3', 'idsq-option-title');
      spaceTitle.textContent = space.name;
      const spaceDescription = createElement('p', 'idsq-option-description');
      spaceDescription.textContent = space.description;

      label.appendChild(spaceTitle);
      label.appendChild(spaceDescription);
      card.appendChild(icon);
      card.appendChild(label);
      coreGrid.appendChild(card);
    });

    section.appendChild(coreGrid);

    if (state.spacesRequested && state.spacesRequested.length > 0) {
      const summaryContainer = createElement('div', 'idsq-selected-spaces-summary');
      const summaryTitle = createElement('h3', 'idsq-summary-title');
      summaryTitle.textContent = `Selected spaces (${state.spacesRequested.length})`;
      summaryContainer.appendChild(summaryTitle);

      const selectedList = createElement('div', 'idsq-selected-spaces-list idsq-selected-spaces-horizontal');
      state.spacesRequested.forEach((space) => {
        const chip = createElement('span', 'idsq-space-chip');
        const label = createElement('span', 'idsq-chip-label');
        label.textContent = space.name;
        chip.appendChild(label);
        const removeBtn = createElement('button', 'idsq-chip-remove', { type: 'button' });
        removeBtn.textContent = 'x';
        removeBtn.setAttribute('aria-label', `Remove ${space.name}`);
        removeBtn.addEventListener('click', (event) => {
          event.stopPropagation();
          removeSpaceFromSelection(state, space.id);
          saveState(state);
          renderWholeHomeSpaceSelection(config, mount, state, handlers, saveState);
        });
        chip.appendChild(removeBtn);
        selectedList.appendChild(chip);
      });
      summaryContainer.appendChild(selectedList);
      section.appendChild(summaryContainer);
    }

    if (showOtherSpaces) {
      const otherSection = createElement('div', 'idsq-other-spaces-section');

      const otherTitle = createElement('h3', 'idsq-rooms-list-title');
      otherTitle.textContent = 'Additional spaces';
      otherSection.appendChild(otherTitle);

      const otherHelp = createElement('p', 'idsq-help-text');
      otherHelp.textContent = 'Select all that apply. These will be included in your whole-home plan.';
      otherSection.appendChild(otherHelp);

      const filteredOtherSpaces = WHOLE_HOME_ADDITIONAL_SPACES.filter((spaceName) => {
        const slug = normalizeSpaceId(spaceName);
        return !WHOLE_HOME_CORE_SPACE_IDS.has(slug);
      });

      if (state.otherSpacesVisibleCount > filteredOtherSpaces.length) {
        state.otherSpacesVisibleCount = filteredOtherSpaces.length;
        saveState(state);
      }

      const otherGrid = createElement('div', 'idsq-option-grid idsq-other-spaces-grid');

      filteredOtherSpaces.slice(0, state.otherSpacesVisibleCount).forEach((spaceName) => {
        const spaceId = normalizeSpaceId(spaceName);
        const card = createElement('button', 'idsq-option-card idsq-other-space-card', { type: 'button' });

        if (isSpaceSelected(spaceId)) {
          card.classList.add('idsq-selected');
        }

        card.addEventListener('click', () => {
          const removed = removeSpaceFromSelection(state, spaceId);
          if (!removed) {
            addSpaceToSelection(state, spaceId, spaceName);
          }
          saveState(state);
          renderWholeHomeSpaceSelection(config, mount, state, handlers, saveState);
        });

        const label = createElement('span', 'idsq-other-space-name');
        label.textContent = spaceName;
        card.appendChild(label);
        otherGrid.appendChild(card);
      });

      otherSection.appendChild(otherGrid);

      if (state.otherSpacesVisibleCount < filteredOtherSpaces.length) {
        const loadMoreContainer = createElement('div', 'idsq-load-more-container');
        const remaining = filteredOtherSpaces.length - state.otherSpacesVisibleCount;
        const loadMoreButton = createElement('button', 'idsq-button idsq-button-primary idsq-load-more-button', { type: 'button' });
        loadMoreButton.textContent = `Load more spaces (${remaining} remaining)`;
        loadMoreButton.addEventListener('click', () => {
          state.otherSpacesVisibleCount = Math.min(
            state.otherSpacesVisibleCount + 18,
            filteredOtherSpaces.length
          );
          saveState(state);
          renderWholeHomeSpaceSelection(config, mount, state, handlers, saveState);
        });
        loadMoreContainer.appendChild(loadMoreButton);
        otherSection.appendChild(loadMoreContainer);
      }

      section.appendChild(otherSection);
    }

    const customSection = createElement('div', 'idsq-custom-space-section');

  const customHeader = createElement('h3', 'idsq-rooms-list-title idsq-custom-space-title');
  customHeader.textContent = 'Need a room that’s not listed?';
  customSection.appendChild(customHeader);

  const customDescription = createElement('p', 'idsq-help-text idsq-custom-space-help');
  customDescription.textContent = 'Add a custom space label so we know exactly which area matters most to you.';
  customSection.appendChild(customDescription);

    const customToggleRow = createElement('div', 'idsq-custom-space-toggle-row');
    const customToggle = createElement('button', 'idsq-option-card idsq-other-space-card idsq-custom-space-toggle', {
      type: 'button',
    });
    if (showCustomInput) {
      customToggle.classList.add('idsq-selected');
    }
    const toggleLabel = createElement('span', 'idsq-other-space-name');
    toggleLabel.textContent = '+ Add Custom Space';
    customToggle.appendChild(toggleLabel);
    customToggle.addEventListener('click', () => {
      state.showCustomSpaceInput = !state.showCustomSpaceInput;
      saveState(state);
      renderWholeHomeSpaceSelection(config, mount, state, handlers, saveState);
    });
    customToggleRow.appendChild(customToggle);
    customSection.appendChild(customToggleRow);

    if (showCustomInput) {
      const customTile = createElement('div', 'idsq-option-card idsq-other-space-card idsq-custom-space-card');
      const customPrompt = createElement('span', 'idsq-custom-space-label');
      customPrompt.textContent = 'Name your custom space';
      const customInput = createElement('input', 'idsq-input idsq-custom-space-input', {
        type: 'text',
        placeholder: 'e.g. Music Room',
        maxlength: '40',
      });
      const controlRow = createElement('div', 'idsq-custom-space-inline');
      const addButton = createElement('button', 'idsq-button idsq-button-primary idsq-add-custom-submit', { type: 'button' });
      addButton.textContent = 'Add Space';
      const closeButton = createElement('button', 'idsq-button idsq-button-secondary idsq-add-custom-cancel', { type: 'button' });
      closeButton.textContent = 'Done';

      const addCustomSpace = () => {
        const customName = customInput.value.trim();
        if (!customName) {
          return;
        }
        const customId = `custom-${normalizeSpaceId(customName)}`;
        if (!state.spacesRequested.some((space) => normalizeSpaceId(space.id) === customId)) {
          addSpaceToSelection(state, customId, customName);
          state.showCustomSpaceInput = false;
          saveState(state);
          renderWholeHomeSpaceSelection(config, mount, state, handlers, saveState);
        } else {
          customInput.value = '';
        }
      };

      addButton.addEventListener('click', addCustomSpace);
      customInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          addCustomSpace();
        }
      });
      closeButton.addEventListener('click', () => {
        state.showCustomSpaceInput = false;
        saveState(state);
        renderWholeHomeSpaceSelection(config, mount, state, handlers, saveState);
      });

      controlRow.appendChild(addButton);
      controlRow.appendChild(closeButton);
      customTile.appendChild(customPrompt);
      customTile.appendChild(customInput);
      customTile.appendChild(controlRow);
      customSection.appendChild(customTile);
      setTimeout(() => customInput.focus(), 0);
    }

    if (customSpaces.length > 0) {
      const customHelp = createElement('p', 'idsq-help-text');
      customHelp.textContent = 'Custom spaces appear here and in your selected list.';
      customSection.appendChild(customHelp);
      const customList = createElement('div', 'idsq-selected-spaces-list idsq-custom-spaces-list');
      customSpaces.forEach((space) => {
        const chip = createElement('span', 'idsq-space-chip');
        const label = createElement('span', 'idsq-chip-label');
        label.textContent = space.name;
        chip.appendChild(label);
        const removeBtn = createElement('button', 'idsq-chip-remove', { type: 'button' });
        removeBtn.textContent = 'x';
        removeBtn.setAttribute('aria-label', `Remove ${space.name}`);
        removeBtn.addEventListener('click', (event) => {
          event.stopPropagation();
          removeSpaceFromSelection(state, space.id);
          saveState(state);
          renderWholeHomeSpaceSelection(config, mount, state, handlers, saveState);
        });
        chip.appendChild(removeBtn);
        customList.appendChild(chip);
      });
      customSection.appendChild(customList);
    }

    if (customSection.childElementCount > 0) {
      section.appendChild(customSection);
    }

    if (state.spacesRequested && state.spacesRequested.length > 0) {
      const buttonRow = createElement('div', 'idsq-button-container idsq-button-container-right idsq-whole-home-actions');

      if (handlers && typeof handlers.onGoBack === 'function') {
        const previousButton = createElement('button', 'idsq-button idsq-button-secondary', { type: 'button' });
      previousButton.textContent = 'Previous';
        previousButton.addEventListener('click', handlers.onGoBack);
        buttonRow.appendChild(previousButton);
      }

      const continueButton = createElement('button', 'idsq-button idsq-button-primary', { type: 'button' });
      continueButton.textContent = 'Continue';
      continueButton.addEventListener('click', () => {
        if (handlers && typeof handlers.onContinueFromWholeHomeSelection === 'function') {
          handlers.onContinueFromWholeHomeSelection();
        }
      });
      buttonRow.appendChild(continueButton);
      section.appendChild(buttonRow);

      // Add spacebar support for continue button
      const handleKeyDown = (event) => {
        if (event.key === ' ' || event.key === 'Spacebar') {
          const activeElement = document.activeElement;
          const isInputFocused = activeElement && (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.isContentEditable
          );
          if (!isInputFocused && mount.contains(section)) {
            event.preventDefault();
            continueButton.click();
          }
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      section._keyboardCleanup = () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }

    showSection(mount, section, handlers);
  }

  function renderWordAssociation(config, mount, state, handlers) {
    const section = createElement('section', 'idsq-step');
    
    // Add Clara avatar
    const claraWrapper = createElement('div', 'idsq-clara-mini-wrapper');
    const claraMini = createElement('img', 'idsq-clara-mini', {
      src: config.copy.claraProfileUrl,
      alt: 'Clara',
      draggable: 'false',
    });
    claraMini.addEventListener('contextmenu', (e) => e.preventDefault());
    const claraInfo = createElement('p', 'idsq-clara-info');
    claraInfo.innerHTML = '<span class="idsq-clara-info-name">Clara</span> · Interior Design Expert';
    claraWrapper.appendChild(claraMini);
    claraWrapper.appendChild(claraInfo);
    
    const title = createElement('h2', 'idsq-title');
    // Choose prompt based on selected space, fallback to general copy
    const waSpaceKey = state && state.selectedSpace ? state.selectedSpace : 'general';
    const waConfig = (config.wordAssociationBySpace && config.wordAssociationBySpace[waSpaceKey])
      ? config.wordAssociationBySpace[waSpaceKey]
      : (config.wordAssociationBySpace?.general || { prompt: config.copy.wordAssociationTitle, words: [] });
    title.textContent = waConfig.prompt || config.copy.wordAssociationTitle;
    const description = createElement('p', 'idsq-description');
    if (state.participantName) {
      description.textContent = `Trust your intuition, ${state.participantName}\u2014choose the word that resonates with you.`;
    } else {
      description.textContent = config.copy.wordAssociationDescription;
    }
    
    section.appendChild(claraWrapper);

    const wordContainer = createElement('div', 'idsq-word-container');

    // Position words organically with random sizes - container flows naturally
    const sizes = ['large','medium','small'];
    const words = (waConfig.words && waConfig.words.length) ? waConfig.words.slice() : (config.wordAssociation.words || []).map(w => w.word);
    words.sort(() => Math.random() - 0.5);
    words.forEach((word, index) => {
      const card = createElement('button', 'idsq-word-card');
      const size = sizes[index % sizes.length];
      card.classList.add(`idsq-word-${size}`);
      card.textContent = typeof word === 'string' ? word : word.word;
      const payload = typeof word === 'string' ? { word, styleIds: [] } : word;
      card.addEventListener('click', () => handlers.onSelectWord(payload));
      wordContainer.appendChild(card);
    });

    const navigation = createElement('div', 'idsq-step-navigation');
    if (handlers && typeof handlers.onGoBack === 'function') {
      const previousButton = createElement('button', 'idsq-button idsq-button-secondary');
    previousButton.textContent = 'Previous';
      previousButton.addEventListener('click', handlers.onGoBack);
      navigation.appendChild(previousButton);
    }

    section.appendChild(title);
    section.appendChild(description);
    section.appendChild(wordContainer);
    section.appendChild(navigation);

    // Add spacebar support: when a word is selected, spacebar triggers the selection
    // Note: Word selection auto-advances, so spacebar is mainly for accessibility
    const handleKeyDown = (event) => {
      if (event.key === ' ' || event.key === 'Spacebar') {
        const activeElement = document.activeElement;
        const isInputFocused = activeElement && (
          activeElement.tagName === 'INPUT' ||
          activeElement.tagName === 'TEXTAREA' ||
          activeElement.isContentEditable
        );
        if (!isInputFocused && mount.contains(section)) {
          // If a word card is focused, let it handle the click naturally
          if (activeElement && activeElement.classList.contains('idsq-word-card')) {
            return; // Let the card handle it
          }
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    section._keyboardCleanup = () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

    showSection(mount, section, handlers);
  }

  function renderStep(config, mount, state, handlers, steps) {
    const step = steps[state.currentStep];
    const section = createElement('section', 'idsq-step');

    // Add Clara mini avatar
    const claraWrapper = createElement('div', 'idsq-clara-mini-wrapper');
    const claraMini = createElement('img', 'idsq-clara-mini', {
      src: config.copy.claraProfileUrl,
      alt: 'Clara',
      draggable: 'false',
    });
    claraMini.addEventListener('contextmenu', (e) => e.preventDefault());
    const claraInfo = createElement('p', 'idsq-clara-info');
    claraInfo.innerHTML = '<span class="idsq-clara-info-name">Clara</span> · Interior Design Expert';
    claraWrapper.appendChild(claraMini);
    claraWrapper.appendChild(claraInfo);
    section.appendChild(claraWrapper);

    const prompt = createElement('h2', 'idsq-title');
    let personalizedPrompt = step.prompt;
    
    // Personalize prompts naturally - mention name on the first and last round
    if (state.participantName && (state.currentStep === 0 || state.currentStep === 2)) {
      // Only add the name on the very first question
      if (personalizedPrompt.endsWith('?')) {
        personalizedPrompt = personalizedPrompt.slice(0, -1) + ', ' + state.participantName + '?';
      }
    }
    
    prompt.textContent = personalizedPrompt;
    
    // Add helpful instruction text - rotate by round for variety
    const instruction = createElement('p', 'idsq-instruction');
    const instructionVariants = [
      'Follow your instincts—choose the space that feels like home to you.',
      'Follow your gut—what catches your eye?',
      'Go with your first instinct—which one feels right?',
      'What draws you in? Choose what feels right.'
    ];
    // Cycle through variants based on current step
    const instructionIndex = state.currentStep % instructionVariants.length;
    instruction.textContent = instructionVariants[instructionIndex];

    const grid = createElement('div', 'idsq-option-grid');

    step.options.forEach((option) => {
      const card = createElement('button', 'idsq-option-card', {
        type: 'button',
      });
      
      // Check if this option is already selected
      const isSelected = state.choices[state.currentStep]?.id === option.id;
      if (isSelected) {
        card.classList.add('idsq-selected');
        // Add checkmark overlay for selected cards
        const checkmarkOverlay = createElement('div', 'idsq-card-checkmark');
        checkmarkOverlay.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `;
        card.appendChild(checkmarkOverlay);
      }
      
      card.addEventListener('click', () => handlers.onSelectOption(option));

      const image = createElement('img', 'idsq-option-image', {
        src: option.imageUrl,
        alt: option.title,
        loading: 'lazy',
        draggable: 'false',
      });
      image.addEventListener('contextmenu', (e) => e.preventDefault());

      // Removed title/label to keep selections purely visual and image-based
      card.appendChild(image);
      grid.appendChild(card);
    });

    const navigation = createElement('div', 'idsq-step-navigation');

    // Back button (only show if not on first step)
    if (state.currentStep > 0) {
      const backButton = createElement('button', 'idsq-button idsq-button-secondary');
      backButton.textContent = 'Previous';
      backButton.addEventListener('click', handlers.onGoBack);
      navigation.appendChild(backButton);
    }
    
    // Next button (only show if a selection has been made)
    const hasSelection = state.choices[state.currentStep] !== undefined;
    const isLastStep = state.currentStep === steps.length - 1;
    
    // Show Next button if selection made AND (not last step OR is last step with selection)
    if (hasSelection && (state.currentStep < steps.length - 1 || isLastStep)) {
      const nextButton = createElement('button', 'idsq-button idsq-button-primary');
      nextButton.textContent = 'Next';
      if (isLastStep) {
        // On last step, skip lead capture and go directly to final selection
        // Use a handler method to ensure saveState is accessible
        nextButton.addEventListener('click', () => {
          if (handlers.onProceedToFinal) {
            handlers.onProceedToFinal();
          }
        });
      } else {
        nextButton.addEventListener('click', handlers.onProceed);
      }
      navigation.appendChild(nextButton);
      
      // Add spacebar support for continue button when selection is made
      const handleKeyDown = (event) => {
        if (event.key === ' ' || event.key === 'Spacebar') {
          const activeElement = document.activeElement;
          const isInputFocused = activeElement && (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.isContentEditable
          );
          if (!isInputFocused && mount.contains(section)) {
            event.preventDefault();
            nextButton.click();
          }
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      section._keyboardCleanup = () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }

    section.appendChild(prompt);
    section.appendChild(instruction);
    section.appendChild(grid);
    section.appendChild(navigation);

    showSection(mount, section, handlers);
  }
  
  // Milestone tips that appear between rounds
  function renderMilestoneTip(config, mount, space, roundNumber, onContinue, handlers) {
    const section = createElement('section', 'idsq-milestone');
    
    // Add Clara avatar
    const claraWrapper = createElement('div', 'idsq-clara-mini-wrapper');
    const claraMini = createElement('img', 'idsq-clara-mini', {
      src: config.copy.claraProfileUrl,
      alt: 'Clara',
      draggable: 'false',
    });
    claraMini.addEventListener('contextmenu', (e) => e.preventDefault());
    const claraInfo = createElement('p', 'idsq-clara-info');
    claraInfo.innerHTML = '<span class="idsq-clara-info-name">Clara</span> · Interior Design Expert';
    claraWrapper.appendChild(claraMini);
    claraWrapper.appendChild(claraInfo);
    section.appendChild(claraWrapper);
    
    const title = createElement('h2', 'idsq-title');
    title.textContent = roundNumber === 1 ? 'Great start!' : 'You\'re doing great!';
    
    const tip = createElement('div', 'idsq-design-tip');
    const messages = getMilestoneMessage(space, roundNumber);
    tip.innerHTML = messages;
    
    const actions = createElement('div', 'idsq-button-container idsq-milestone-actions');

    const continueButton = createElement('button', 'idsq-button idsq-button-primary');
    continueButton.textContent = 'Continue';
    continueButton.addEventListener('click', () => {
      onContinue();
    });
    actions.appendChild(continueButton);
    
    section.appendChild(title);
    section.appendChild(tip);
    section.appendChild(actions);
    
    // Add keyboard support: spacebar triggers continue button
    const handleKeyDown = (event) => {
      // Only trigger if spacebar is pressed and user is not typing in an input/textarea
      if (event.key === ' ' || event.key === 'Spacebar') {
        const activeElement = document.activeElement;
        const isInputFocused = activeElement && (
          activeElement.tagName === 'INPUT' ||
          activeElement.tagName === 'TEXTAREA' ||
          activeElement.isContentEditable
        );
        
        // Only trigger if not typing in an input field and section is still mounted
        if (!isInputFocused && mount.contains(section)) {
          event.preventDefault();
          continueButton.click();
        }
      }
    };
    
    // Add event listener to document (only one listener needed)
    document.addEventListener('keydown', handleKeyDown);
    
    // Store cleanup function on section for later removal
    section._keyboardCleanup = () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    
    showSection(mount, section, handlers);
  }
  
  function getMilestoneMessage(space, roundNumber) {
    const messages = {
      'living-room': [
        // Round 1 (after first selection)
        ['Your living room is the heart of your home—it sets the tone for everything else. I always tell my clients to think about how people will actually move through and gather in this space.',
         'Natural light is your best friend in interior design! Notice how the sun moves through your space during the day—this will help guide us in choosing colors and window treatments.',
         'Scale is everything in a living room. I love helping clients understand how furniture placement can make a space feel both cozy and spacious—it\'s all about the right proportions.',
         'The best living rooms tell a story. Think about what pieces matter most to you—maybe it\'s that inherited bookcase or that rug you found on your travels. Let\'s honor those personal touches.'],
        // Round 2 (after second selection)
        ['You\'re making fantastic choices! Remember, the best design balances function with beauty. We\'re finding pieces that work for YOUR lifestyle, not someone else\'s idea of perfect.',
         'A well-designed living room flows naturally. I always consider how traffic patterns move through the space—nothing should feel cramped or awkward.',
         'Material selection is key! Natural materials like wood, stone, and linen add warmth and soul to a space. They age beautifully and feel timeless.',
         'Don\'t forget vertical space! I love using tall bookcases or artwork to draw the eye up—it makes a room feel larger and more sophisticated.'],
        // Round 3 (after third selection)
        ['We\'re in the home stretch! Your living room should be where you want to spend your time. Think about what activities happen here—watching TV, reading, entertaining friends.',
         'Layering is my secret weapon! I love combining different textiles—throws, pillows, rugs—to create depth and visual interest. It\'s what makes a room feel pulled together.',
         'A great living room has moments of drama and moments of rest. That balance of bold and subtle is what creates a truly dynamic, lived-in space.',
         'Quality over quantity always! Better to have fewer, well-chosen pieces than a room full of items that don\'t quite work together. Your selections show you understand that.'],
        // Round 4 (before final selection)
        ['One more round! By now, your style preferences are really coming through. Trust that feeling—the design that resonates most with you is the one that will truly feel like home.',
         'Final selection! You\'ve shown such consistent taste. This last choice will help us pinpoint exactly which style resonates with you and makes your living room perfect for YOUR lifestyle.',
         'Last round! Your living room should reflect who you are. We\'re so close to discovering the design language that will make this space authentically yours.',
         'This is it! One more choice and we\'ll have your complete style profile. Trust those instincts—you\'ve been spot-on throughout this entire process.']
      ],
      'bedroom': [
        // Round 1
        ['Your bedroom should be your sanctuary—a place where you truly feel at peace. When I design bedrooms, I always prioritize what makes my clients feel most comfortable and recharged.',
         'Good sleep starts with good design! I always ask clients about their sleep habits—do you need blackout curtains? Soft ambient light? That informs everything.',
         'Storage doesn\'t have to be an eyesore! I love finding creative ways to blend function with form. Beautiful design can be practical too—that\'s the magic.',
         'The bedroom is your personal retreat. Think about what makes you feel most relaxed after a long day—that\'s the energy we want to create here.'],
        // Round 2
        ['Bedroom color psychology is fascinating! Warmer tones can be more restful than cool blues. We\'ll find the palette that makes you feel most at peace.',
         'I always recommend a layered approach to bedroom lighting. Overhead lighting for tasks, but sconces or table lamps for that cozy, unwinding atmosphere.',
         'Invest in the bed itself—it\'s literally the focal point! A beautiful headboard or statement bed frame can anchor the entire room\'s design.',
         'Don\'t underestimate the power of a great rug! In a bedroom, it adds warmth underfoot and creates that luxurious, hotel-like feeling.'],
        // Round 3
        ['We\'re almost there! Bedroom design is deeply personal, and you\'re doing an amazing job trusting your instincts. You know what makes you feel most at peace—let\'s honor that.',
         'Window treatments matter more than people think! They control light, add privacy, and can completely transform the mood of a bedroom.',
         'A bedroom should feel cocoon-like. Think about creating layers of texture—soft linens, plush pillows, velvet throws—that invite you to sink in and decompress.',
         'Quality bedding elevates everything! Good thread count sheets and a beautiful duvet cover are investments in your daily comfort and the room\'s overall aesthetic.'],
        // Round 4
        ['Final selection! You\'ve shown such consistent taste. This last choice will help us pinpoint exactly which style resonates with you and will make your bedroom feel like the perfect retreat.',
         'Last round! Your bedroom sanctuary is taking shape. One more choice and we\'ll have the complete picture of your ideal sleep space.',
         'This is it! You\'ve been so thoughtful about what creates your ideal bedroom. Trust those final instincts—we\'re so close to your perfect style match.',
         'One more to go! Your bedroom should be YOUR haven. This final selection will reveal the style that transforms your sleep space into the peaceful retreat you deserve.']
      ],
      'kitchen': [
        // Round 1
        ['Kitchens are truly the heart of the home! When designing a kitchen, I always ask my clients to walk me through how they actually cook and entertain. That real-life workflow is everything.',
         'Good lighting in a kitchen is non-negotiable—it\'s one of those things that makes every task easier. I love layering task lighting under cabinets with ambient light for both function and mood.',
         'Kitchen storage can be beautiful! I love open shelving mixed with closed cabinetry—it creates that perfect balance of accessibility and visual calm.',
         'The kitchen triangle still matters! Sink, stove, and refrigerator placement affects how efficiently you can cook. Let\'s optimize that flow.'],
        // Round 2
        ['Countertops are your kitchen\'s jewelry! Whether you choose marble, quartz, or butcher block, the surface you prep on should bring you joy.',
         'Hardware is the jewelry of your kitchen! Beautiful faucets, cabinet pulls, and handles can elevate the entire space without a major renovation.',
         'A great kitchen island is a game-changer! Whether it\'s for prep work, casual dining, or gathering with guests, it becomes the social hub of the space.',
         'Don\'t forget the backsplash! It\'s a perfect opportunity to inject personality and visual interest without overwhelming the space.'],
        // Round 3
        ['We\'re in the home stretch! A well-designed kitchen doesn\'t just look beautiful—it saves you time and makes everyday tasks so much more enjoyable. That\'s good design.',
         'Kitchen appliances deserve to be seen! Beautiful ranges, refrigerators, and dishwashers can become statement pieces rather than just functional necessities.',
         'Flow matters so much in a kitchen. I always think about how multiple people can cook together comfortably—it makes entertaining so much more fun.',
         'Your kitchen should reflect how you actually live. If you\'re a baker, let\'s make room for that. Love to entertain? We\'ll design for gatherings.'],
        // Round 4
        ['Last round! Your selections have been spot-on. This final choice will help us identify the style that perfectly matches how you want your kitchen to feel and function every single day.',
         'Final selection! A kitchen is an investment in your daily life. This last choice will reveal the style that creates the cooking and gathering space of your dreams.',
         'One more to go! Your kitchen heart is almost complete. Trust these final instincts—we\'re pinpointing the aesthetic that will make cooking a joy.',
         'This is it! One more choice and we\'ll have your complete kitchen style profile. Your selections show you value both beauty and function—perfect!']
      ],
      'bathroom': [
        // Round 1
        ['Bathrooms should be peaceful retreats—even for quick morning routines. I\'ve designed powder rooms that feel like mini spas through the right materials and lighting. Every space deserves that sanctuary feeling!',
         'Storage doesn\'t have to mean clutter! I love finding clever storage solutions that blend function with form. Medicine cabinets, vanity drawers, niche shelving—we can make it beautiful.',
         'Good lighting around the mirror is a bathroom game-changer! Sconces on either side provide the best, most flattering light—no harsh overhead shadows.',
         'I always think about the bathroom as a mini spa. Even small spaces can feel luxurious with the right materials, textures, and color palette.'],
        // Round 2
        ['Tile is your bathroom\'s personality! Whether it\'s bold, subtle, classic, or modern—the patterns and colors you choose set the entire room\'s vibe.',
         'A great vanity anchors the whole bathroom. It\'s often the largest piece of furniture, so choosing the right style, size, and finish makes all the difference.',
         'Hardware details matter! Beautiful faucets, shower fixtures, and cabinet hardware can transform a bathroom from basic to stunning.',
         'Don\'t forget the shower experience! Rainfall showerheads, body jets, or beautiful tile work can make your morning routine feel like a luxury spa visit.'],
        // Round 3
        ['Almost there! Remember, even small bathrooms can feel luxurious. It\'s all about the right lighting, materials, and attention to detail. You deserve that sanctuary feeling every day.',
         'Mixing materials in a bathroom adds so much interest! Natural stone with warm wood, matte black with marble, glass with metal—the combinations create visual depth.',
         'A bathroom should feel calm and restorative. Think about how you want to start and end your day—that energy should be built into the design.',
         'Quality fixtures are worth it! They\'re things you touch every single day, so investing in pieces that feel good and look beautiful is a no-brainer.'],
        // Round 4
        ['One more to go! Your preferences are crystal clear now. This final selection will reveal the style that transforms your bathroom into the serene, rejuvenating space you deserve.',
         'Final selection! Your bathroom sanctuary is almost complete. One more choice and we\'ll have your perfect style match for a space that elevates your daily routine.',
         'Last round! You\'ve been so thoughtful about creating that spa-like feeling. This final choice will reveal the aesthetic that makes your bathroom truly yours.',
         'This is it! One more choice and we\'ll nail your bathroom style. Your selections show you value that daily moment of peace—let\'s honor that.']
      ],
      'office': [
        // Round 1
        ['Your office should inspire productivity while reflecting your personal style. I always ask clients: how do you work best—quiet focus or collaborative energy? That drives the whole design.',
         'Lighting in a home office is absolutely crucial. Natural light boosts mood and productivity, and I always add task lighting to prevent eye strain during long work sessions—your eyes will thank you!',
         'Cable management is design! Nobody wants a desk covered in cords. I love finding sleek solutions that keep everything tidy and out of sight.',
         'An office needs zones: focus work, creative thinking, and maybe a spot for breaks. Let\'s design for how you actually move through your workday.'],
        // Round 2
        ['Your desk is your command center! It should be large enough to spread out, at the right height, and positioned to maximize natural light if possible.',
         'Storage solutions in an office have to work hard. Beautiful bookshelves, file cabinets, or floating shelves can keep you organized without feeling clinical.',
         'Plants in an office are non-negotiable! They purify air, boost mood, and add life to what can feel like a sterile space. It\'s the easiest design win.',
         'Ergonomics meet aesthetics! A beautiful chair doesn\'t mean sacrificing comfort. We\'ll find pieces that look great and support your body during long work sessions.'],
        // Round 3
        ['Almost there! Your office is your professional sanctuary. Let\'s make it a space where you genuinely love to work. That\'s when the magic happens.',
         'Personal touches matter in an office! Family photos, artwork, or meaningful objects keep you grounded and remind you why you\'re working.',
         'Acoustics can make or break an office! Soft furnishings, rugs, and even artwork can absorb sound and create that perfect focus environment.',
         'A standing desk option is becoming essential! Being able to switch between sitting and standing keeps your energy up and your body happy.'],
        // Round 4
        ['Final round! Your choices have been so thoughtful. This last selection will help us identify the style that creates the perfect work environment—one that energizes and inspires you.',
         'Last selection! Your office should be the space where your best work happens. This final choice will reveal the aesthetic that supports your productivity and makes work enjoyable.',
         'One more to go! You\'ve been so intentional about creating a space that works for YOUR process. This final selection will complete your ideal work environment.',
         'This is it! One more choice and we\'ll have your complete office style profile. Your selections show you value both function and beauty in your work life.']
      ],
      'general': [
        // Round 1
        ['Color is one of the most powerful tools in my design toolkit. I love helping clients choose a palette that speaks to their personality—we use it consistently to create that feeling of harmony throughout your home.',
         'I always tell clients: mixing textures adds so much depth to a space! Smooth with rough, shiny with matte, soft with hard. That\'s what creates real visual interest and keeps a room dynamic.',
         'Natural light is your best design tool! I always notice how light moves through spaces—it affects everything from color choices to furniture placement.',
         'Scale and proportion are everything. A room full of small furniture can feel cramped, while oversized pieces can overwhelm. Finding that sweet spot is key.'],
        // Round 2
        ['Artwork personalizes a space like nothing else. Whether it\'s a gallery wall, statement piece, or curated collection, it tells your story.',
         'A beautiful home needs moments of both drama and rest. Bold statement pieces balanced with calm, neutral spaces create that perfect rhythm.',
         'Storage shouldn\'t be an afterthought! Beautiful solutions—built-ins, decorative baskets, elegant shelving—keep life organized without sacrificing style.',
         'Quality over quantity always. Better to have fewer, well-chosen pieces that you truly love than a room full of things that don\'t quite work together.'],
        // Round 3
        ['Layering is my secret to creating depth! Rugs, throws, pillows, plants, books—these collected layers give a home personality and soul.',
         'Don\'t forget the ceiling! The "fifth wall" is often overlooked. A painted ceiling or beautiful light fixture can transform a space.',
         'Plants bring life to any room! They purify air, add natural texture, and create that feeling of bringing the outdoors in.',
         'A great home has flow from room to room. Cohesive color palettes, repeated materials, and consistent style choices create that harmonious feeling.'],
        // Round 4
        ['Final round! Trust your instincts—the best design reflects who you are and how you want to live. You\'re discovering that, and I\'m here to guide you through it.',
         'Last selection! You\'ve been so consistent in your preferences. This final choice will reveal the design style that truly embodies your personal aesthetic and creates the home you\'ve been envisioning.',
         'One more to go! Your style preferences are crystal clear. This final selection will complete your design profile and reveal the aesthetic that feels most authentically you.',
         'This is it! One more choice and we\'ll have your complete style profile. You\'ve shown such great taste throughout—trust these final instincts!']
      ]
    };
    
    // Get messages for this space and round
    const spaceMessages = messages[space] || messages['general'];
    const roundMessages = spaceMessages[roundNumber - 1] || [];
    
    // If we have multiple messages for this round, randomize
    if (roundMessages.length > 0) {
      const randomIndex = Math.floor(Math.random() * roundMessages.length);
      return roundMessages[randomIndex];
    }
    
    // Fallback
    return spaceMessages[spaceMessages.length - 1][0] || 'Great progress! Keep following your instincts.';
  }
  

  function renderLeadCapture(config, mount, handlers) {
    const section = createElement('section', 'idsq-lead-capture');
    const title = createElement('h2', 'idsq-title');
    title.textContent = 'Get Your Design Style Results';

    const form = createElement('form', 'idsq-form');

    // Name field (optional) - only show if user didn't provide name earlier
    // Access state from handlers context - we'll pass it through
    const state = handlers._state || window.IDSQ?._lastState;
    if (state && !state.participantName) {
      // Create input without label (instructions in placeholder)
      const nameWrapper = createElement('label', 'idsq-field idsq-field-no-label');
      const nameInput = createElement('input', 'idsq-input', {
        type: 'text',
        name: 'name',
        placeholder: 'Name (Optional)',
      });
      // Pre-fill if exists in leadData
      if (state.leadData?.participantName) {
        nameInput.value = state.leadData.participantName;
      }
      nameWrapper.appendChild(nameInput);
      form.appendChild(nameWrapper);
    }

    // Email field (optional) - no label, instructions in placeholder
    const emailWrapper = createElement('label', 'idsq-field idsq-field-no-label');
    const emailInput = createElement('input', 'idsq-input', {
      type: 'email',
      name: 'email',
      placeholder: 'Email (Optional)',
    });
    // Pre-fill email from saved leadData if it exists
    if (state && state.leadData?.email) {
      emailInput.value = state.leadData.email;
    }
    emailWrapper.appendChild(emailInput);
    form.appendChild(emailWrapper);
    
    // Store reference for checkbox auto-check functionality
    const emailField = { input: emailInput };

    // Newsletter signup checkbox - text next to checkbox, or below if it collides
    const newsletterWrapper = createElement('label', 'idsq-checkbox-field idsq-checkbox-inline');
    const checkbox = createElement('input', 'idsq-checkbox', {
      type: 'checkbox',
      name: 'newsLetterSignup',
      id: 'idsq-newsletter-signup',
    });
    const checkboxContent = createElement('span', 'idsq-checkbox-content');
    const checkboxLabel = createElement('span', 'idsq-checkbox-label');
    checkboxLabel.innerHTML = '<strong>Yes, I want to sign up for the newsletter!</strong>';
    const checkboxDescription = createElement('p', 'idsq-checkbox-description');
    checkboxDescription.innerHTML = 'Be the envy of your friends! Get <strong>VIP access</strong> to interior design inspiration, expert advice, and exclusive updates. Stay ahead of the curve...<strong>don\'t miss out</strong> - be the first to know about the latest trends, styles, and special offers tailored just for you!';
    
    checkboxContent.appendChild(checkboxLabel);
    checkboxContent.appendChild(checkboxDescription);
    newsletterWrapper.appendChild(checkbox);
    newsletterWrapper.appendChild(checkboxContent);
    form.appendChild(newsletterWrapper);
    
    // Pre-fill newsletter checkbox from saved data
    if (state && state.leadData?.newsLetterSignup) {
      checkbox.checked = true;
    }
    
    // Auto-check/uncheck newsletter based on email input
    // Use existing validateEmail function (defined later in the file)
    const checkEmailAndUpdateCheckbox = () => {
      const emailValue = emailField.input.value.trim();
      // Check if email is valid using simple regex (matches existing validateEmail pattern)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailValue && emailRegex.test(emailValue)) {
        checkbox.checked = true;
      } else {
        // Only uncheck if no saved state preference
        if (!state || !state.leadData?.newsLetterSignup) {
          checkbox.checked = false;
        }
      }
    };
    
    emailField.input.addEventListener('input', checkEmailAndUpdateCheckbox);
    emailField.input.addEventListener('blur', checkEmailAndUpdateCheckbox);
    
    // Also check on initial load if email is pre-filled (e.g., from state restoration)
    if (emailField.input.value) {
      checkEmailAndUpdateCheckbox();
    }

    const buttonRow = createElement('div', 'idsq-button-container idsq-lead-actions');
    const submit = createElement('button', 'idsq-button idsq-button-primary', { type: 'submit' });
    submit.textContent = config.copy.submitButton;
    
    // Add keyboard support: spacebar triggers submit button
    const handleKeyDown = (event) => {
      if (event.key === ' ' || event.key === 'Spacebar') {
        const activeElement = document.activeElement;
        const isInputFocused = activeElement && (
          activeElement.tagName === 'INPUT' ||
          activeElement.tagName === 'TEXTAREA' ||
          activeElement.isContentEditable
        );
        if (!isInputFocused && mount.contains(section)) {
          event.preventDefault();
          submit.click();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    section._keyboardCleanup = () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    
    buttonRow.appendChild(submit);
    form.appendChild(buttonRow);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      
      // Fix checkbox: FormData returns "on" if checked, undefined if unchecked
      payload.newsLetterSignup = checkbox.checked;

      // Email is optional, but if provided, validate it
      if (payload.email && !validateEmail(payload.email)) {
        showFormError(section, 'Please provide a valid email address.');
        return;
      }

      handlers.onSubmitLead(payload);
    });

    section.appendChild(title);
    section.appendChild(form);

    showSection(mount, section, handlers);
  }

  function createInputField(labelText, type, name, required = false) {
    const wrapper = createElement('label', 'idsq-field');
    const label = createElement('span', 'idsq-field-label');
    label.textContent = labelText;
    const input = createElement('input', 'idsq-input', { name, type });
    if (required) {
      input.required = true;
      input.setAttribute('required', 'required');
    }
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    return { wrapper, input };
  }

  function showFormError(section, message) {
    let alert = section.querySelector('.idsq-alert');
    if (!alert) {
      alert = createElement('div', 'idsq-alert');
      section.insertBefore(alert, section.firstChild);
    }
    alert.textContent = message;
  }

  function renderFinalSelection(config, mount, state, handlers) {
    const section = createElement('section', 'idsq-final');
    const title = createElement('h2', 'idsq-title');
    title.textContent = 'You gravitated toward these styles.';
    const description = createElement('p', 'idsq-description');
    description.textContent = 'Select the look that feels the most "you" to reveal your final style match.';

    const grid = createElement('div', 'idsq-option-grid idsq-final-grid');
    // Show all 4 selected styles from the rounds, not just top 3
    const selectedStyles = (state.choices || []).filter(Boolean).map((choice) => {
      const styleDef = config.styleLibrary[choice.styleId];
      if (!styleDef) return null;
      return {
        styleId: choice.styleId,
        styleName: styleDef.styleName,
        styleDefinition: styleDef,
      };
    }).filter(Boolean);
    
    selectedStyles.forEach((styleResult, idx) => {
      const card = createElement('button', 'idsq-option-card', { type: 'button' });
      const payload = { styleId: styleResult.styleId, styleName: styleResult.styleName };
      card.addEventListener('click', () => handlers.onSelectFinal(payload));

      // Get the _2 image for the selected space
      const selectedSpace = state.selectedSpace || 'general';
      const spaceMap = { 'general': 'whole-home' };
      const roomKey = spaceMap[selectedSpace] || selectedSpace;
      let imageUrl = null;
      
      if (styleResult.styleDefinition.imagesByRoom && styleResult.styleDefinition.imagesByRoom[roomKey]) {
        // Use _2 image (second image in the array)
        const roomImages = styleResult.styleDefinition.imagesByRoom[roomKey];
        imageUrl = roomImages.length > 1 ? roomImages[1] : roomImages[0];
      } else {
        // Fallback to living-room or first available
        if (styleResult.styleDefinition.imagesByRoom && styleResult.styleDefinition.imagesByRoom['living-room']) {
          const roomImages = styleResult.styleDefinition.imagesByRoom['living-room'];
          imageUrl = roomImages.length > 1 ? roomImages[1] : roomImages[0];
        } else {
          imageUrl = styleResult.styleDefinition.finalImages[0];
        }
      }
      
      const image = createElement('img', 'idsq-option-image', {
        src: imageUrl,
        alt: `Style option ${idx + 1}`,
        loading: 'lazy',
        draggable: 'false',
      });
      image.addEventListener('contextmenu', (e) => e.preventDefault());
      
      card.appendChild(image);
      grid.appendChild(card);
    });

    // Navigation (Previous + menu)
    const navigation = createElement('div', 'idsq-step-navigation');

    // Previous button (right side) - goes back to round 4
    const previousButton = createElement('button', 'idsq-button idsq-button-secondary');
    previousButton.textContent = 'Previous';
    previousButton.addEventListener('click', () => {
      if (handlers.onGoBackToLastStep) {
        handlers.onGoBackToLastStep();
      }
    });
    navigation.appendChild(previousButton);

    section.appendChild(title);
    section.appendChild(description);
    section.appendChild(grid);
    section.appendChild(navigation);

    // Add spacebar support for selecting the first style card
    const handleKeyDown = (event) => {
      if (event.key === ' ' || event.key === 'Spacebar') {
        const activeElement = document.activeElement;
        const isInputFocused = activeElement && (
          activeElement.tagName === 'INPUT' ||
          activeElement.tagName === 'TEXTAREA' ||
          activeElement.isContentEditable
        );
        if (!isInputFocused && mount.contains(section) && selectedStyles.length > 0) {
          event.preventDefault();
          // Select the first style card
          const firstCard = grid.querySelector('.idsq-option-card');
          if (firstCard) {
            firstCard.click();
          }
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    section._keyboardCleanup = () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

    showSection(mount, section, handlers);
  }

  function renderLoading(config, mount) {
    const section = createElement('section', 'idsq-status');
    const title = createElement('h2', 'idsq-title');
    title.textContent = config.copy.loadingMessage;
    section.appendChild(title);
    showSection(mount, section, handlers);
  }

  function renderError(config, mount, handlers) {
    const section = createElement('section', 'idsq-status');
    const title = createElement('h2', 'idsq-title');
    title.textContent = config.copy.errorTitle;
    const description = createElement('p', 'idsq-description');
    description.textContent = config.copy.errorDescription;
    const retry = createElement('button', 'idsq-button idsq-button-secondary');
    retry.textContent = config.copy.retryButton;
    retry.addEventListener('click', handlers.onRestart);
    section.appendChild(title);
    section.appendChild(description);
    section.appendChild(retry);
    showSection(mount, section, handlers);
  }

  /**
   * Renders a "coming soon" page for pathways that aren't yet developed
   * @param {Object} config - Quiz config
   * @param {HTMLElement} mount - Mount element
   * @param {Object} state - Current state
   * @param {Object} handlers - Event handlers
   * @param {Function} saveStateFn - Function to save state: (state) => void
   */
  function renderPathwayComingSoon(config, mount, state, handlers, saveStateFn) {
    const section = createElement('section', 'idsq-step');
    section.dataset.hideMenu = 'false';
    
    // Get pathway information
    const routeMode = state.routeMode || state.jsonQuestionAnswers?.route_mode || state.projectContext?.routeMode || 'standard';
    const projectType = state.projectType || state.jsonQuestionAnswers?.project_type || state.projectContext?.projectType?.id || 'remodel';
    const buildType = state.buildType || state.jsonQuestionAnswers?.build_type || state.projectContext?.buildType?.id;
    
    // Format route mode for display
    const routeModeLabels = {
      'express': 'Express (Skip to Selections)',
      'standard': 'Standard (Key Questions Only)',
      'deep': 'Deep-Dive (All Questions)'
    };
    const routeModeLabel = routeModeLabels[routeMode] || routeMode;
    
    // Format project type for display
    const projectTypeLabels = {
      'new-home': 'New Construction',
      'remodel': 'Remodel'
    };
    const projectTypeLabel = projectTypeLabels[projectType] || projectType;
    
    // Format build type for display
    const buildTypeLabels = {
      'custom': 'Custom Build',
      'builder-spec': 'Builder / Spec'
    };
    const buildTypeLabel = buildType ? buildTypeLabels[buildType] || buildType : null;
    
    // Title
    const title = createElement('h2', 'idsq-title');
    title.textContent = 'Pathway Coming Soon';
    section.appendChild(title);
    
    // Description
    const description = createElement('p', 'idsq-description');
    description.innerHTML = `We're currently building out the <strong>${routeModeLabel}</strong> pathway for <strong>${projectTypeLabel}${buildTypeLabel ? ` - ${buildTypeLabel}` : ''}</strong> projects.`;
    section.appendChild(description);
    
    // Additional info
    const info = createElement('div', 'idsq-design-tip');
    info.innerHTML = '<p>This pathway will guide you through a comprehensive set of questions to help refine your design preferences. In the meantime, you can use the <strong>Express</strong> pathway to jump directly to material selections.</p>';
    section.appendChild(info);
    
    // Navigation
    const navigation = createElement('div', 'idsq-step-navigation');
    
    // Option to switch to Express
    if (routeMode !== 'express') {
      const expressButton = createElement('button', 'idsq-button idsq-button-primary');
      expressButton.textContent = 'Try Express Pathway';
      expressButton.addEventListener('click', () => {
        // Update route mode to express and proceed
        state.routeMode = 'express';
        state.jsonQuestionAnswers = state.jsonQuestionAnswers || {};
        state.jsonQuestionAnswers.route_mode = 'express';
        if (state.projectContext) {
          state.projectContext.routeMode = 'express';
        }
        if (saveStateFn) saveStateFn(state);
        state.currentFlow = 'materials-selection';
        state.currentCategoryIndex = 0;
        if (saveStateFn) saveStateFn(state);
        renderMaterialsSelection(config, mount, state, handlers);
      });
      navigation.appendChild(expressButton);
    }
    
    section.appendChild(navigation);
    
    showSection(mount, section, handlers);
  }

  function renderSuccess(config, mount, state, handlers) {
    const section = createElement('section', 'idsq-success');
    
    // Title with style name highlighted
    const title = createElement('h2', 'idsq-final-title');
    const titleText = `YOUR DESIGN STYLE IS <span style="color: #006bea; font-weight: 900;">${state.finalStyle.styleName.toUpperCase()}!</span>`;
    title.innerHTML = titleText;

    // Clara Pro Tip with Style DNA bullets
    const tip = document.createElement('div');
    tip.className = 'idsq-clara-tip';
    // Left avatar
    const tipAvatar = document.createElement('img');
    tipAvatar.className = 'idsq-clara-mini';
    tipAvatar.src = config.copy.claraProfileUrl;
    tipAvatar.alt = 'Clara';
    tipAvatar.draggable = false;
    tipAvatar.addEventListener('contextmenu', (e) => e.preventDefault());
    tip.appendChild(tipAvatar);
    // Right content
    const tipContent = document.createElement('div');
    tipContent.className = 'idsq-clara-tip-content';
    const tipHeader = document.createElement('div');
    tipHeader.className = 'idsq-clara-tip-header';
    const dnaSvg = '<svg width="64" height="18" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4c8 0 8 16 16 16s8-16 16-16 8 16 16 16 8-16 16-16" stroke="#ccc" stroke-width="2" fill="none"/><path d="M2 20c8 0 8-16 16-16s8 16 16 16 8-16 16-16 8 16 16 16" stroke="#006bea" stroke-width="2" fill="none" opacity=".4"/></svg>';
    tipHeader.innerHTML = '<span class="idsq-clara-tip-title"><strong>Style DNA</strong></span><span class="idsq-clara-tip-dna">' + dnaSvg + '</span>';
    tipContent.appendChild(tipHeader);
    const linesWrap = document.createElement('div');
    linesWrap.className = 'idsq-clara-tip-lines';
    const dnaPoints = Array.isArray(state.finalStyle.dna) ? state.finalStyle.dna : [];
    dnaPoints.forEach((point) => {
      const idx = point.indexOf(':');
      const label = idx >= 0 ? point.slice(0, idx + 1) : point;
      const value = idx >= 0 ? point.slice(idx + 1).trim() : '';
      const p = document.createElement('p');
      p.innerHTML = '<strong>' + label + '</strong>' + (value ? ' ' + value : '');
      linesWrap.appendChild(p);
    });
    tipContent.appendChild(linesWrap);
    tip.appendChild(tipContent);

    const card = createElement('article', 'idsq-final-result');
    
    // Get the _3 image for the selected space from finalImages
    const selectedSpace = state.selectedSpace || 'general';
    const spaceToIndexMap = {
      'living-room': 0,
      'bedroom': 1,
      'kitchen': 2,
      'bathroom': 3,
      'office': 4,
      'general': 5  // general maps to whole-home
    };
    const imageIndex = spaceToIndexMap[selectedSpace] || 5;
    const finalImageUrl = (state.finalStyle.finalImages && state.finalStyle.finalImages[imageIndex]) || state.finalStyle.finalImages[0];
    
    // Single large image
    const imageContainer = createElement('div', 'idsq-final-single-container');
    const img = createElement('img', 'idsq-final-single-image', {
      src: finalImageUrl,
      alt: `${state.finalStyle.styleName} inspiration`,
        loading: 'lazy',
        draggable: 'false',
      });
    img.addEventListener('contextmenu', (e) => e.preventDefault());
    imageContainer.appendChild(img);

    const styleDescription = createElement('p', 'idsq-final-description');
    styleDescription.textContent = state.finalStyle.description;

    card.appendChild(imageContainer);
    card.appendChild(styleDescription);
    if (Array.isArray(state.finalStyle.dna) && state.finalStyle.dna.length) {
      card.appendChild(tip);
    }

    // Scheduling CTA
    const scheduleCTA = createElement('div', 'idsq-schedule-cta');
    const ctaTitle = createElement('h3', 'idsq-schedule-cta-title');
    
    // Get space name from config (use spaceTypes)
    let spaceName = null;
    if (config.spaceTypes && state.selectedSpace) {
      const spaceInfo = config.spaceTypes.find(s => s.id === state.selectedSpace);
      if (spaceInfo && spaceInfo.name) {
        spaceName = spaceInfo.name;
      }
    }
    const styleName = (state.finalStyle && state.finalStyle.styleName) ? state.finalStyle.styleName : 'design';
    
    // Create grammatically correct text based on whether space name is available
    if (spaceName) {
      ctaTitle.textContent = `Ready to bring your ${styleName} vision to life in your ${spaceName}?`;
    } else {
      ctaTitle.textContent = `Ready to bring your ${styleName} vision to life?`;
    }

    scheduleCTA.appendChild(ctaTitle);

    // Button container for side-by-side layout
    const buttonContainer = createElement('div', 'idsq-button-container idsq-success-buttons');
    const scheduleButton = createElement('a', 'idsq-button idsq-button-primary', {
      href: 'https://www.jlcoates.com/interior-design/contact',
      target: '_blank',
      rel: 'noopener noreferrer',
    });
    scheduleButton.textContent = 'Schedule';
    
    // For Whole Home and single spaces, show "Continue" button to proceed to Expert Intro → Global Questions → Section Gates → Materials
    // This ensures all pathways go through the same flow
    const continueButton = createElement('button', 'idsq-button idsq-button-secondary');
    continueButton.textContent = 'Continue';
    continueButton.addEventListener('click', () => {
      state.currentFlow = 'expert-intro';
      state.projectContext = state.projectContext || {};
      state.currentExpert = 'aria';
      state.currentExpertQuestion = 0;
      state.materialsSelections = {};
      if (handlers._saveState) handlers._saveState(state);
      renderExpertIntro(config, mount, state, handlers);
    });
    buttonContainer.appendChild(scheduleButton);
    buttonContainer.appendChild(continueButton);

    section.appendChild(title);
    section.appendChild(card);
    section.appendChild(scheduleCTA);
    section.appendChild(buttonContainer);

    // Add spacebar support for secondary button (Continue or Select Materials)
    const secondaryButton = buttonContainer.querySelector('.idsq-button-secondary');
    if (secondaryButton) {
      const handleKeyDown = (event) => {
        if (event.key === ' ' || event.key === 'Spacebar') {
          const activeElement = document.activeElement;
          const isInputFocused = activeElement && (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.isContentEditable
          );
          if (!isInputFocused && mount.contains(section)) {
            event.preventDefault();
            secondaryButton.click();
          }
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      section._keyboardCleanup = () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }

    showSection(mount, section, handlers);
  }

  function validateEmail(email) {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }

  function calculateTopStyles(config, selections, wordChoice) {
    const scoreMap = selections.reduce((acc, option) => {
      if (!option) return acc;
      const { styleId } = option;
      if (!acc[styleId]) {
        acc[styleId] = { styleId, score: 0 };
      }
      acc[styleId].score += 1;
      return acc;
    }, {});

    // Add word association scores
    if (wordChoice && wordChoice.styleIds) {
      wordChoice.styleIds.forEach((styleId) => {
        if (!scoreMap[styleId]) {
          scoreMap[styleId] = { styleId, score: 0 };
        }
        scoreMap[styleId].score += 0.5; // Give half a point for word association
      });
    }

    const results = Object.values(scoreMap)
      .map((entry) => {
        const definition = config.styleLibrary[entry.styleId];
        return {
          ...entry,
          styleName: definition?.styleName || entry.styleId,
        };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    return { results, map: scoreMap };
  }

  async function sendToAirtable(config, payload) {
    if (!config.airtable.enable) {
      return { ok: true, skipped: true };
    }
    const { apiKey, baseId, tableName } = config.airtable;
    if (!apiKey || !baseId || !tableName) {
      throw new Error('Missing Airtable configuration.');
    }
    const fields = typeof config.airtable.mapFields === 'function'
      ? config.airtable.mapFields(payload)
      : payload;

    const response = await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Airtable responded with ${response.status}: ${errorText}`);
    }

    return response.json();
  }

  function injectStyles(config) {
    if (document.getElementById('idsq-styles')) return;
    const style = document.createElement('style');
    style.id = 'idsq-styles';
    style.textContent = `
      :root {
        --idsq-primary: ${config.brand.primaryColor};
        --idsq-accent: ${config.brand.accentColor || config.brand.primaryColor};
        --idsq-font: ${config.brand.fontFamily};
        --idsq-text: ${config.brand.textColor || '#363636'};
        --idsq-bg: #ffffff;
        --idsq-black: #000000;
      }
      #idsq {
        font-family: var(--idsq-font);
        color: var(--idsq-text);
        max-width: 960px;
        margin: 0 auto;
        padding: 2.5rem;
        background-color: #ffffff;
        position: relative;
      }
      #idsq * {
        box-sizing: border-box;
      }
      #idsq *:not(button):not(.idsq-button):not(.idsq-progress-marker) {
        color: var(--idsq-text) !important;
      }
      .idsq-title {
        font-size: 38px;
        line-height: 50px;
        font-weight: 900;
        margin-bottom: 1.25rem;
        color: var(--idsq-text);
        text-align: center;
      }
      .idsq-hidden { display: none !important; }
      /* Guide-panel intro variant */
      .idsq-quiz-hero { color: var(--idsq-text); font-family: var(--idsq-font); max-width: 1080px; margin: 0 auto; padding: clamp(24px, 4vw, 48px) 20px; position: relative; }
      .idsq-hero-header { position: relative; }
      .idsq-hero-header .idsq-eyebrow { letter-spacing: .08em; text-transform: uppercase; opacity: .7; margin: 0 0 .25rem 0; font-weight: 500; font-size: 16px; line-height: 30px; color: var(--IDSQ-Font) !important; }
      .idsq-hero-title { font-weight: 900; font-size: 38px; line-height: 50px; margin: 0 0 .35rem 0; color: var(--IDSQ-Font) !important; }
      .idsq-subtitle { font-weight: 500; font-size: 16px; line-height: 30px; margin: 0 0 1.25rem 0; opacity: .85; color: var(--IDSQ-Font) !important; }
      .idsq-guide-panel { display: grid; grid-template-columns: auto 1fr; gap: 1rem; align-items: center; border: 1px solid rgba(54,54,54,.1); border-radius: 14px; padding: clamp(16px, 3vw, 24px); background: rgba(54,54,54,.03); backdrop-filter: blur(1px); }
      .idsq-guide-avatar { display: block; width: clamp(72px, 10vw, 112px); height: clamp(72px, 10vw, 112px); border-radius: 50%; object-fit: cover; box-shadow: 0 6px 16px rgba(54,54,54,.15); user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -webkit-user-drag: none; -khtml-user-drag: none; -moz-user-drag: none; -o-user-drag: none; }
      .idsq-guide-copy { font-weight: 500; font-size: 16px; line-height: 30px; opacity: .85; color: var(--IDSQ-Font) !important; }
      .idsq-guide-copy p { font-weight: 500; font-size: 16px; line-height: 30px; opacity: .85; color: var(--IDSQ-Font) !important; }
      .idsq-guide-copy strong { font-weight: 700; opacity: 1; color: var(--IDSQ-Font) !important; }
      .idsq-guide-intro { font-weight: 500; font-size: 16px; line-height: 30px; opacity: .85; margin: 0 0 .25rem 0; color: var(--IDSQ-Font) !important; }
      .idsq-guide-intro strong { font-weight: 700; opacity: 1; color: var(--IDSQ-Font) !important; }
      .idsq-cta-wrap { position: absolute; top: clamp(24px, 4vw, 48px); right: 20px; display: flex; align-items: center; height: 50px; transform: translateY(30px); }
      @media (max-width: 960px) {
        .idsq-cta-wrap { position: static; height: auto; margin-top: 1.5rem; margin-bottom: 0; justify-content: center; transform: none; }
      }
      @media (max-width: 640px) {
        .idsq-guide-panel { grid-template-columns: 1fr; text-align: left; }
        .idsq-guide-avatar { justify-self: start; }
        .idsq-cta-wrap { position: static; height: auto; margin-top: 1.5rem; margin-bottom: 0; justify-content: center; }
      }
      .idsq-description {
        font-size: 16px;
        line-height: 30px;
        font-weight: 500;
        margin-bottom: 0.5rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 700px;
        color: rgba(44, 44, 44, 0.7);
        text-align: center;
      }
      .idsq-description:last-of-type {
        margin-bottom: 2.5rem;
      }
      .idsq-selection-instruction {
        font-size: 16px;
        line-height: 30px;
        font-weight: 500;
        margin-top: 1rem;
        margin-bottom: 2rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 700px;
        color: rgba(44, 44, 44, 0.7);
        text-align: center;
        padding-top: 0.75rem;
      }
      .idsq-selection-instruction strong {
        font-weight: 700;
        color: rgba(44, 44, 44, 0.85);
      }
      .idsq-instruction {
        font-size: 0.95rem;
        font-weight: 500;
        margin-bottom: 2rem;
        color: rgba(44, 44, 44, 0.6);
        text-align: center;
        font-style: italic;
      }
      .idsq-design-tip {
        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        border-left: 3px solid var(--idsq-primary);
        padding: 1rem 1.25rem;
        margin: 2rem 0 1rem 0;
        border-radius: 8px;
        font-size: 0.9rem;
        color: rgba(44, 44, 44, 0.75);
        line-height: 1.6;
      }
      .idsq-design-tip strong {
        color: var(--idsq-primary);
        font-weight: 600;
      }
      .idsq-button {
        font-family: var(--idsq-font);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        border-radius: 999px;
        padding: 1rem 1.5rem;
        font-size: clamp(1rem, 2.4vw, 1.25rem);
        font-weight: 900;
        line-height: 1;
        letter-spacing: 0.02em;
        cursor: pointer;
        transition: box-shadow 0.2s ease;
        border: 2px solid transparent;
        text-decoration: none;
      }
      .idsq-button:visited {
        text-decoration: none;
      }
      .idsq-button-primary {
        background: var(--idsq-primary);
        color: #fff;
        border: none;
        box-shadow: 0 8px 20px rgba(54, 54, 54, 0.4);
      }
      .idsq-button-primary:hover {
        box-shadow: 0 12px 30px rgba(54, 54, 54, 0.5);
      }
      .idsq-button-secondary {
        background: #ffffff;
        color: var(--idsq-primary);
        border: 2px solid var(--idsq-primary);
        box-shadow: 0 8px 20px rgba(54, 54, 54, 0.3);
      }
      .idsq-button-secondary:hover {
        box-shadow: 0 12px 30px rgba(54, 54, 54, 0.4);
      }
      @keyframes idsqFadeInUp { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }
      @keyframes idsqFadeOut { from { opacity: 1 } to { opacity: 0 } }
      .idsq-animate-in { animation: idsqFadeInUp 280ms ease both; }
      .idsq-animate-out { animation: idsqFadeOut 220ms ease both; }
      .idsq-intro,
      .idsq-step,
      .idsq-final,
      .idsq-success,
      .idsq-lead-capture,
      .idsq-status,
      .idsq-milestone {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .idsq-milestone .idsq-design-tip {
        margin: 1rem 0 2rem 0;
        max-width: 600px;
      }
      .idsq-option-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        width: 100%;
        margin-top: 2rem;
      }
      .idsq-option-grid.idsq-grid-two-items {
        grid-template-columns: repeat(2, 1fr);
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
      .idsq-option-grid.idsq-grid-four-items {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }
      .idsq-option-grid.idsq-grid-six-items {
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
      }
      .idsq-option-grid.idsq-section-gate-grid {
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
      }
      .idsq-section-gate-grid .idsq-option-card {
        padding: 1rem;
        min-height: auto;
      }
      .idsq-section-gate-grid .idsq-option-title {
        font-size: 0.95rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
        line-height: 1.3;
      }
      .idsq-section-gate-grid .idsq-option-subtitle {
        margin-top: 0;
        margin-bottom: 0;
        line-height: 1.3;
        font-size: 0.95rem;
        font-weight: 600;
      }
      .idsq-section-gate-grid .idsq-option-description {
        font-size: 0.8rem;
        line-height: 1.4;
        margin-top: 0.25rem;
      }
      .idsq-section-gate-grid .idsq-space-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }
      @media (max-width: 1200px) {
        .idsq-option-grid.idsq-section-gate-grid {
          grid-template-columns: repeat(4, 1fr);
        }
      }
      @media (max-width: 960px) {
        .idsq-option-grid.idsq-grid-six-items {
          grid-template-columns: repeat(2, 1fr);
        }
        .idsq-option-grid.idsq-section-gate-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      @media (max-width: 640px) {
        .idsq-option-grid.idsq-section-gate-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      .idsq-options-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
        width: 100%;
        margin-top: 2rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
      .idsq-progress-bar {
        width: 100%;
        margin: 2rem 0;
        display: flex;
        justify-content: center;
      }
      .idsq-progress-track {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: auto;
        gap: 0;
        align-items: center;
        background: rgba(54, 54, 54, 0.05);
        border-radius: 12px;
        padding: 0.5rem;
        overflow-x: auto;
      }
      .idsq-progress-marker {
        padding: 0.75rem 1.25rem;
        border-radius: 8px;
        font-size: 0.875rem;
        font-weight: 500;
        white-space: nowrap;
        transition: all 0.3s ease;
      }
      .idsq-progress-separator {
        padding: 0 0.5rem;
        color: rgba(54, 54, 54, 0.3);
        font-size: 1rem;
        user-select: none;
      }
      .idsq-progress-marker.idsq-progress-active {
        background-color: #363636;
        color: #ffffff !important;
        text-decoration: none !important;
        box-shadow: 0 2px 8px rgba(54, 54, 54, 0.2);
      }
      .idsq-progress-separator-after-active {
        color: rgba(255, 255, 255, 0.6) !important;
      }
      .idsq-progress-completed {
        background-color: rgba(54, 54, 54, 0.15);
        color: #363636;
      }
      .idsq-progress-upcoming {
        background-color: transparent;
        color: rgba(54, 54, 54, 0.4);
      }
      .idsq-final-grid {
        grid-template-columns: repeat(2, 1fr);
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
      }
      .idsq-final-grid .idsq-option-image {
        height: 240px;
      }
      .idsq-option-card {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        background-color: transparent;
        border-radius: 16px;
        overflow: hidden;
        border: 2px solid transparent;
        cursor: pointer;
        text-align: left;
        transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        padding: 0;
      }
      .idsq-option-card:hover,
      .idsq-option-card:focus {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(44, 44, 44, 0.12);
        outline: none;
      }
      .idsq-option-card.idsq-selected {
        border-color: var(--idsq-primary);
        border-width: 3px;
        box-shadow: 0 8px 30px rgba(44, 44, 44, 0.15);
      }
      .idsq-card-checkmark {
        position: absolute;
        top: 12px;
        right: 12px;
        z-index: 10;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        background: #006bea;
        border-radius: 50%;
        box-shadow: 0 4px 12px rgba(0, 107, 234, 0.4);
        animation: checkmarkAppear 0.3s ease-out;
      }
      .idsq-card-checkmark svg {
        width: 20px;
        height: 20px;
        display: block;
      }
      @keyframes checkmarkAppear {
        from {
          opacity: 0;
          transform: scale(0.5);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      .idsq-whole-home {
        align-items: stretch;
      }
      .idsq-core-space-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.5rem;
      }
      @media (max-width: 1024px) {
        .idsq-core-space-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
      @media (max-width: 640px) {
        .idsq-core-space-grid {
          grid-template-columns: repeat(1, minmax(0, 1fr));
        }
      }
      .idsq-space-card {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: rgba(54,54,54,0.03);
        border: 1px solid rgba(54,54,54,0.1);
        box-shadow: 0 8px 20px rgba(54, 54, 54, 0.3);
        min-height: 200px;
        transition: box-shadow 0.2s ease;
      }
      .idsq-space-card:hover {
        box-shadow: 0 12px 30px rgba(54, 54, 54, 0.4);
      }
      .idsq-space-card .idsq-space-icon {
        font-size: 3rem;
        margin-bottom: 0.75rem;
      }
      .idsq-space-card .idsq-option-label {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
      }
      .idsq-space-card .idsq-option-description {
        margin: 0;
        font-size: 0.95rem;
        color: rgba(44,44,44,0.65);
      }
      .idsq-other-spaces-section {
        width: 100%;
        margin-top: 2.5rem;
        text-align: left;
      }
      .idsq-other-spaces-grid {
        grid-template-columns: repeat(6, minmax(0, 1fr));
        gap: 0.75rem;
        justify-items: start;
        justify-content: flex-start;
      }
      @media (max-width: 1280px) {
        .idsq-other-spaces-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }
      }
      @media (max-width: 900px) {
        .idsq-other-spaces-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }
      @media (max-width: 640px) {
        .idsq-other-spaces-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
      @media (max-width: 420px) {
        .idsq-other-spaces-grid {
          grid-template-columns: repeat(1, minmax(0, 1fr));
        }
      }
      .idsq-other-space-card {
        padding: 0.65rem 0.75rem;
        border-radius: 999px;
        min-height: auto;
        background: rgba(54,54,54,0.03);
        border: 1px solid rgba(54,54,54,0.1);
        box-shadow: 0 8px 20px rgba(54, 54, 54, 0.3);
        justify-content: center;
        align-items: center;
        display: inline-flex;
        transition: box-shadow 0.2s ease, background 0.2s ease;
      }
      .idsq-other-space-card:hover {
        background: rgba(54,54,54,0.06);
        box-shadow: 0 12px 30px rgba(54, 54, 54, 0.4);
      }
      .idsq-other-space-card .idsq-option-label,
      .idsq-other-space-card .idsq-option-title {
        display: none;
      }
      .idsq-custom-space-toggle {
        border: 2px dashed rgba(54,54,54,0.2);
        background: rgba(54,54,54,0.035);
        color: var(--idsq-primary);
        font-weight: 700;
      }
      .idsq-custom-space-card {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 0.65rem;
        padding: 1rem;
        background: rgba(54,54,54,0.03);
        border: 1px solid rgba(54,54,54,0.1);
        box-shadow: 0 8px 20px rgba(54, 54, 54, 0.3);
        cursor: default;
        margin-left: auto;
        margin-right: auto;
        border-radius: 16px;
        transition: box-shadow 0.2s ease;
      }
      .idsq-custom-space-card:hover {
        box-shadow: 0 12px 30px rgba(54, 54, 54, 0.4);
      }
      .idsq-custom-space-label {
        font-size: 0.85rem;
        font-weight: 600;
        color: rgba(44,44,44,0.6);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .idsq-custom-space-inline {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
      .idsq-custom-space-inline .idsq-button {
        flex: 0 0 auto;
      }
      .idsq-custom-space-inline .idsq-button-secondary {
        box-shadow: none;
      }
      .idsq-custom-space-cancel {
        background: none;
        border: none;
        font-size: 0.9rem;
        font-weight: 600;
        color: rgba(44,44,44,0.6);
        cursor: pointer;
        padding: 0.35rem 0.5rem;
        border-radius: 8px;
        transition: color 0.2s ease, background 0.2s ease;
      }
      .idsq-custom-space-cancel:hover,
      .idsq-custom-space-cancel:focus {
        color: var(--idsq-primary);
        background: rgba(54,54,54,0.08);
        outline: none;
      }
      .idsq-other-space-name {
        font-size: 0.95rem;
        font-weight: 600;
        text-align: center;
        color: rgba(44,44,44,0.8);
      }
      .idsq-load-more-container {
        text-align: center;
        margin-top: 1.25rem;
      }
      .idsq-custom-space-section {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        align-items: center;
      }
      .idsq-custom-space-toggle-row {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .idsq-custom-space-title {
        width: 100%;
        text-align: left;
        margin-bottom: 0.35rem;
      }
      .idsq-custom-space-help {
        width: 100%;
        text-align: left;
        margin-top: 0;
      }
      .idsq-custom-space-control {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
      }
      .idsq-custom-space-input {
        flex: 1 1 100%;
        min-width: 0;
        padding: 0.75rem 1rem;
        border-radius: 12px;
        border: 1px solid #cbd5f5;
        background-color: #fff;
        font-size: 1rem;
        font-weight: 500;
        font-family: var(--idsq-font);
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
      }
      .idsq-custom-space-input:focus {
        border-color: var(--idsq-primary);
        box-shadow: 0 0 0 3px rgba(54, 54, 54, 0.2);
      }
      .idsq-selected-spaces-summary {
        width: 100%;
        margin-top: 3rem;
        text-align: left;
      }
      .idsq-selected-spaces-summary .idsq-summary-title {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-align: left;
      }
      .idsq-selected-spaces-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
      }
      .idsq-selected-spaces-horizontal {
        gap: 0.5rem;
      }
      .idsq-space-chip {
        display: inline-flex;
        align-items: center;
        gap: 0.65rem;
        background: rgba(54,54,54,0.03);
        border: 1px solid rgba(54,54,54,0.1);
        border-radius: 999px;
        padding: 0.5rem 0.75rem 0.5rem 1rem;
        box-shadow: 0 8px 20px rgba(54, 54, 54, 0.3);
        transition: background 0.2s ease, box-shadow 0.2s ease;
      }
      .idsq-space-chip:hover {
        background: rgba(54,54,54,0.06);
        box-shadow: 0 12px 30px rgba(54, 54, 54, 0.4);
      }
      .idsq-chip-label {
        font-weight: 600;
        font-size: 0.95rem;
        color: rgba(44,44,44,0.85);
      }
      .idsq-chip-remove {
        background: rgba(255,255,255,0.9);
        border: 1px solid rgba(54,54,54,0.15);
        border-radius: 999px;
        padding: 0.35rem 0.75rem;
        font-size: 0.85rem;
        font-weight: 600;
        color: rgba(44,44,44,0.7);
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .idsq-chip-remove:hover,
      .idsq-chip-remove:focus {
        color: var(--idsq-primary);
        border-color: var(--idsq-primary);
        outline: none;
      }
      .idsq-color-chips-container {
        width: 100%;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
      .idsq-select-all-none {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        width: 100%;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        align-items: center;
      }
      .idsq-select-all-btn,
      .idsq-select-none-btn {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }
      .idsq-color-chips {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        gap: 0.75rem;
        justify-items: center;
        max-width: 1000px;
        width: 100%;
      }
      /* Section gate chips use a more compact grid */
      .idsq-section-gate-chips-grid {
        grid-template-columns: repeat(3, 1fr) !important;
        max-width: 800px !important;
        gap: 0.75rem;
      }
      @media (max-width: 900px) {
        .idsq-section-gate-chips-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      @media (max-width: 640px) {
        .idsq-section-gate-chips-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      .idsq-color-chip {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1.25rem;
        border-radius: 999px;
        background: rgba(54,54,54,0.03);
        border: 2px solid rgba(54,54,54,0.1);
        color: rgba(44,44,44,0.85);
        font-weight: 600;
        font-size: 0.95rem;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 4px 12px rgba(54, 54, 54, 0.15);
        width: 100%;
        max-width: 120px;
      }
      .idsq-color-chip:hover {
        background: rgba(54,54,54,0.06);
        border-color: rgba(54,54,54,0.2);
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(54, 54, 54, 0.2);
      }
      .idsq-color-chip.idsq-selected {
        background: var(--idsq-primary);
        border-color: var(--idsq-primary);
        color: #ffffff;
        box-shadow: 0 6px 20px rgba(54, 54, 54, 0.3);
      }
      .idsq-color-chip.idsq-selected:hover {
        background: var(--idsq-primary);
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(54, 54, 54, 0.4);
      }
      @media (max-width: 1200px) {
        .idsq-color-chips {
          grid-template-columns: repeat(6, 1fr);
        }
      }
      @media (max-width: 900px) {
        .idsq-color-chips {
          grid-template-columns: repeat(4, 1fr);
        }
      }
      @media (max-width: 640px) {
        .idsq-color-chips {
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }
        .idsq-color-chip {
          padding: 0.65rem 1rem;
          font-size: 0.9rem;
          max-width: none;
        }
      }
      .idsq-button-container-right {
        justify-content: flex-end;
        width: 100%;
        margin-top: 2.5rem;
      }
      .idsq-space-selection-actions {
        width: 100%;
        margin-top: 2.5rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 0.75rem;
      }
      .idsq-space-selection-actions.idsq-menu-anchor {
        justify-content: flex-end;
      }
      .idsq-space-selection-actions .idsq-button-primary {
        flex: 0 0 auto;
      }
      .idsq-whole-home-actions {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 0.75rem;
        flex-wrap: wrap;
      }
      .idsq-milestone-actions {
        width: 100%;
        margin-top: 2rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 0.75rem;
      }
      .idsq-lead-actions {
        width: 100%;
        margin-top: 2rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 0.75rem;
      }
      .idsq-menu-container {
        width: 100%;
        max-width: 1200px;
        margin: 2rem auto 0;
        padding: 0 2rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      @media (max-width: 768px) {
        .idsq-menu-container {
          padding: 0 1rem;
        }
      }
      .idsq-menu-anchor {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: center;
      }
      .idsq-menu {
        position: relative;
        display: inline-flex;
      }
      .idsq-menu-button {
        width: 48px;
        height: 48px;
        min-width: 48px;
        min-height: 48px;
        border-radius: 50%;
        background: #ffffff;
        color: var(--idsq-primary);
        border: 2px solid var(--idsq-primary);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 1.75rem;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 8px 20px rgba(54, 54, 54, 0.3);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .idsq-menu-button:hover,
      .idsq-menu-button:focus {
        transform: translateY(-2px);
        box-shadow: 0 12px 30px rgba(54, 54, 54, 0.4);
        outline: none;
      }
      .idsq-menu-button span {
        line-height: 1;
        margin-top: -2px;
      }
      .idsq-menu-dropdown {
        position: absolute;
        right: 0;
        bottom: calc(100% + 10px);
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 18px 45px rgba(54,54,54,0.18);
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        min-width: 220px;
        opacity: 0;
        pointer-events: none;
        transform: translateY(8px);
        transition: opacity 0.2s ease, transform 0.2s ease;
        z-index: 50;
      }
      .idsq-menu-dropdown::before {
        content: '';
        position: absolute;
        bottom: -8px;
        right: 18px;
        width: 16px;
        height: 16px;
        background: #ffffff;
        transform: rotate(45deg);
        box-shadow: 0 18px 45px rgba(54,54,54,0.18);
        clip-path: polygon(0 0, 100% 0, 100% 100%);
      }
      .idsq-menu-dropdown-open {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
      }
      .idsq-menu-item {
        width: 100%;
        background: none;
        border: none;
        border-radius: 12px;
        padding: 0.75rem 1rem;
        text-align: left;
        font-size: 0.95rem;
        font-weight: 600;
        color: rgba(44,44,44,0.85);
        cursor: pointer;
        transition: background 0.2s ease, color 0.2s ease;
      }
      .idsq-menu-item:hover,
      .idsq-menu-item:focus {
        background: rgba(54,54,54,0.08);
        color: var(--idsq-primary);
        outline: none;
      }
      .idsq-option-card.idsq-selected:hover {
        box-shadow: 0 12px 40px rgba(44, 44, 44, 0.2);
      }
      .idsq-step-navigation {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        margin-top: 2rem;
        gap: 0.75rem;
        flex-wrap: wrap;
      }
      .idsq-step-spacer {
        flex: 1;
      }
      .idsq-step-navigation .idsq-button {
        flex: 0 0 auto;
      }
      .idsq-option-image,
      .idsq-final-image {
        width: 100%;
        height: 280px;
        object-fit: cover;
        display: block;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(44, 44, 44, 0.1);
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
      }
      .idsq-option-label {
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .idsq-option-title {
        font-size: 1.2rem;
        font-weight: 900;
        margin: 0;
        color: var(--idsq-text);
      }
      .idsq-option-subtitle {
        font-size: 0.95rem;
        font-weight: 600;
        margin: 0.35rem 0 0 0;
        color: rgba(54, 54, 54, 0.7);
        opacity: 0.9;
      }
      .idsq-option-description {
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        color: var(--IDSQ-Font) !important;
        margin: 0;
        opacity: .85;
      }
      .idsq-final-gallery {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.75rem;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
      }
      .idsq-final-image {
        height: 180px;
        border-radius: 10px;
        box-shadow: 0 2px 16px rgba(44, 44, 44, 0.12);
        object-fit: cover;
      }
      .idsq-final-result {
        margin-bottom: 1rem;
      }
      .idsq-final-single-image {
        width: 100%;
        height: 450px;
        object-fit: cover;
        display: block;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(44, 44, 44, 0.1);
        background: #ffffff;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
      }
      .idsq-logo {
        max-width: 140px;
        margin-bottom: 1.5rem;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
      }
      .idsq-form {
        width: min(560px, 100%);
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .idsq-field {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        text-align: left;
        width: 100%;
      }
      .idsq-field-label {
        font-size: 0.95rem;
        color: var(--idsq-text);
        font-weight: 600;
        font-family: var(--idsq-font);
      }
      .idsq-field-no-label .idsq-field-label {
        display: none;
      }
      .idsq-input {
        width: 100%;
        padding: 0.75rem 1rem;
        border-radius: 12px;
        border: 1px solid #cbd5f5;
        background-color: #fff;
        font-size: 1rem;
        font-weight: 500;
        font-family: var(--idsq-font);
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
      }
      .idsq-input:focus {
        border-color: var(--idsq-primary);
        box-shadow: 0 0 0 3px rgba(54, 54, 54, 0.2);
        outline: none;
      }
      /* AI Guide widget */
      .idsq-ai-toggle { position: absolute; right: 16px; bottom: 16px; z-index: 20; }
      .idsq-ai-panel { position: absolute; right: 16px; bottom: 72px; width: min(360px, calc(100% - 32px)); background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 16px; box-shadow: 0 12px 30px rgba(0,0,0,0.18); overflow: hidden; display: none; }
      .idsq-ai-panel.open { display: flex; flex-direction: column; }
      .idsq-ai-header { padding: 0.75rem 1rem; font-weight: 600; color: var(--idsq-text); border-bottom: 1px solid rgba(0,0,0,0.06); }
      .idsq-ai-messages { max-height: 260px; overflow-y: auto; padding: 0.75rem 1rem; display: flex; flex-direction: column; gap: 0.5rem; }
      .idsq-ai-msg { font-size: 0.95rem; line-height: 1.35; padding: 0.5rem 0.75rem; border-radius: 10px; }
      .idsq-ai-msg.user { align-self: flex-end; background: rgba(0, 107, 234, 0.10); color: var(--idsq-text); }
      .idsq-ai-msg.assistant { align-self: flex-start; background: #f3f4f6; color: var(--idsq-text); }
      .idsq-ai-input { display: flex; gap: 0.5rem; padding: 0.75rem; border-top: 1px solid rgba(0,0,0,0.06); }
      .idsq-ai-input input { flex: 1; border: 1px solid #e5e7eb; border-radius: 10px; padding: 0.5rem 0.75rem; }
      .idsq-ai-input button { white-space: nowrap; }
      .idsq-space-card {
        padding: 1.5rem;
        text-align: center;
        justify-content: center;
        min-height: 200px;
      }
      .idsq-space-card .idsq-option-image {
        box-shadow: none;
      }
      .idsq-option-card.idsq-space-card {
        box-shadow: 0 4px 20px rgba(44, 44, 44, 0.1);
      }
      .idsq-option-card.idsq-space-card:hover {
        box-shadow: 0 12px 40px rgba(44, 44, 44, 0.12);
      }
      .idsq-space-icon {
        font-size: 3rem;
        margin-bottom: 0.75rem;
      }
      .idsq-clara-profile-wrapper {
        position: relative;
        display: inline-block;
        margin: 0 auto 1.5rem;
      }
      .idsq-clara-profile {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid #ffffff;
        box-shadow: 0 2px 8px rgba(44, 44, 44, 0.1);
        position: relative;
        z-index: 2;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
      }
      .idsq-clara-profile-wrapper::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 12px solid #f8f9fa;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        filter: drop-shadow(0 2px 4px rgba(44, 44, 44, 0.1));
      }
      .idsq-clara-mini-wrapper {
        text-align: center;
        margin-bottom: 1rem;
      }
      .idsq-clara-mini {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #ffffff;
        box-shadow: 0 2px 8px rgba(44, 44, 44, 0.1);
        display: inline-block;
        margin-bottom: 0.5rem;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
      }
      .idsq-clara-info {
        font-weight: 500;
        font-size: 16px;
        line-height: 1.875;
        margin: 0;
        opacity: .85;
        color: rgba(54, 54, 54, 0.7);
      }
      .idsq-clara-info-name {
    letter-spacing: .08em;
    text-transform: uppercase;
    opacity: .7;
    margin: 0 0 .25rem 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
        color: #363636;
      }
      .idsq-word-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        justify-content: center;
        width: 100%;
        max-width: 800px;
        margin: 2rem auto;
        padding: 1rem;
      }
      .idsq-word-card {
        padding: 0.75rem 1.25rem;
        text-align: center;
        font-weight: 600;
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #363636;
        border: 2px solid #e5e7eb;
        border-radius: 9999px;
        background: #ffffff;
        transition: all 0.2s ease;
        cursor: pointer;
        margin: 0;
      }
      .idsq-word-card:hover {
        border-color: #363636;
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(54, 54, 54, 0.15);
      }
      .idsq-word-card.idsq-selected {
        border-color: #363636;
        background: #363636;
        color: #ffffff;
      }
      .idsq-word-large {
        font-size: 1.5rem;
      }
      .idsq-word-medium {
        font-size: 1.1rem;
      }
      .idsq-word-small {
        font-size: 0.9rem;
      }
      .idsq-final-title {
        text-align: center;
        font-size: 2rem;
        font-weight: 800;
        margin-bottom: 2.5rem;
        color: #363636;
        line-height: 1.3;
      }
      .idsq-final-single-container {
        max-width: 900px;
        margin: 0 auto 2rem;
      }
      .idsq-final-description {
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        opacity: .85;
        color: var(--IDSQ-Font) !important;
        text-align: center;
        max-width: 700px;
        margin: 0 auto;
        padding: 0 1rem;
      }
      .idsq-clara-tip { margin: 1rem auto 0; max-width: 900px; display: grid; grid-template-columns: auto 1fr; gap: 1rem; align-items: center; border: 1px solid rgba(54,54,54,.1); border-radius: 14px; padding: clamp(16px, 3vw, 24px); background: rgba(54,54,54,.03); backdrop-filter: blur(1px); text-align: left; }
      .idsq-clara-tip .idsq-clara-mini { width: 56px; height: 56px; border-radius: 50%; object-fit: cover; box-shadow: 0 6px 16px rgba(54,54,54,.15); }
      .idsq-clara-tip-content { display: flex; flex-direction: column; gap: .5rem; }
      .idsq-clara-tip-header { display: flex; align-items: center; gap: .5rem; }
      .idsq-clara-tip-title { font-weight: 900; color: var(--idsq-text); font-size: 16px; }
      .idsq-clara-tip-dna { display: inline-flex; vertical-align: middle; }
      .idsq-clara-tip-dna svg { display: block; }
      .idsq-clara-tip-lines { font-weight: 500; font-size: 16px; line-height: 30px; opacity: .85; text-align: left; color: var(--IDSQ-Font) !important; }
      .idsq-clara-tip-lines p { font-weight: 500; font-size: 16px; line-height: 30px; opacity: .85; margin: .15rem 0; color: var(--IDSQ-Font) !important; }
      .idsq-schedule-cta {
        margin-top: 2rem;
        padding: 0;
        background: transparent;
        border: none;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }
      .idsq-schedule-cta-title {
        font-size: 38px;
        line-height: 50px;
        font-weight: 900;
        margin-bottom: 2rem;
        color: var(--idsq-text);
      }
      .idsq-success-buttons {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        margin-top: 2rem;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
      }
      .idsq-success-buttons .idsq-button {
        text-decoration: none;
      }
      .idsq-name-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
        flex-wrap: wrap;
      }
      .idsq-name-buttons.idsq-menu-anchor {
        justify-content: center;
      }
      .idsq-name-buttons.idsq-name-has-primary {
        flex-wrap: nowrap;
      }
      .idsq-name-buttons.idsq-name-has-primary .idsq-button-secondary {
        margin-left: auto;
      }
      .idsq-name-buttons.idsq-name-has-primary .idsq-menu {
        margin-left: 0.75rem;
      }
      @media (max-width: 600px) {
        .idsq-name-buttons.idsq-name-has-primary {
          flex-wrap: wrap;
        }
        .idsq-name-buttons.idsq-name-has-primary .idsq-button-secondary {
          margin-left: 0;
        }
        .idsq-name-buttons.idsq-name-has-primary .idsq-menu {
          margin-left: 0;
        }
      }
      .idsq-input-error {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.5rem;
        text-align: center;
      }
      .idsq-checkbox-field {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding: 1.25rem;
        background: #f8f9fa;
        border-radius: 12px;
        border: 2px solid transparent;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .idsq-checkbox-field.idsq-checkbox-inline {
        flex-direction: row;
        align-items: flex-start;
        gap: 0.75rem;
      }
      @media (max-width: 640px) {
        .idsq-checkbox-field.idsq-checkbox-inline {
          flex-direction: column;
          align-items: center;
        }
        .idsq-checkbox-field.idsq-checkbox-inline input[type="checkbox"] {
          margin-right: 0;
        }
      }
      .idsq-checkbox-field:hover {
        border-color: var(--idsq-primary);
        background: #f0f4f8;
      }
      .idsq-checkbox-field input[type="checkbox"] {
        width: 20px;
        height: 20px;
        min-width: 20px;
        margin-right: 0;
        margin-top: 0.125rem;
        cursor: pointer;
        accent-color: var(--idsq-primary);
        flex-shrink: 0;
      }
      .idsq-checkbox-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .idsq-checkbox-label {
        font-size: 1rem;
        font-weight: 600;
        color: var(--idsq-text);
        cursor: pointer;
        line-height: 1.4;
      }
      .idsq-checkbox-description {
        font-size: 0.9rem;
        color: rgba(44, 44, 44, 0.7);
        line-height: 1.6;
        margin: 0;
        font-style: italic;
      }
      .idsq-checkbox-description strong {
        font-weight: 600;
        color: var(--idsq-primary);
      }
      .idsq-alert {
        width: 100%;
        padding: 0.75rem 1rem;
        background-color: rgba(239, 68, 68, 0.12);
        color: #b91c1c;
        border-radius: 12px;
        margin-bottom: 1rem;
      }
      @media (max-width: 960px) {
        .idsq-option-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
      }
      @media (max-width: 640px) {
        #idsq {
          padding: 1.5rem;
        }
        .idsq-title {
          margin-bottom: 1rem;
        }
        .idsq-description {
          margin-bottom: 2rem;
        }
        .idsq-option-grid {
          gap: 1.5rem;
          margin-top: 1.5rem;
          grid-template-columns: 1fr;
        }
        .idsq-option-grid.idsq-grid-four-items {
          grid-template-columns: 1fr;
        }
        .idsq-option-grid.idsq-grid-six-items {
          grid-template-columns: 1fr;
        }
        .idsq-final-grid {
          grid-template-columns: 1fr;
        }
        .idsq-final-grid .idsq-option-image {
          height: 200px;
        }
        .idsq-option-image {
          height: 220px;
        }
        .idsq-final-single-image {
          height: 250px;
        }
        .idsq-final-gallery {
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .idsq-final-image {
          height: 220px;
        }
        .idsq-schedule-cta {
          padding: 0;
          margin-top: 1.5rem;
        }
        .idsq-schedule-cta-title {
          font-size: 24px;
          line-height: 32px;
        }
        .idsq-success-buttons {
          flex-direction: column;
          gap: 0.75rem;
        }
        .idsq-cta-wrap {
          position: static;
          height: auto;
          margin-top: 1.5rem;
          margin-bottom: 0;
          justify-content: center;
        }
        .idsq-final-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }
        .idsq-word-large {
          font-size: 1.25rem;
        }
        .idsq-word-medium {
          font-size: 1rem;
        }
        .idsq-word-small {
          font-size: 0.85rem;
        }
        .idsq-word-container {
          padding: 0.5rem;
          gap: 0.5rem;
        }
        .idsq-word-card {
          padding: 0.5rem 1rem;
        }
        .idsq-clara-profile {
          width: 64px;
          height: 64px;
        }
        .idsq-clara-profile-wrapper::after {
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #f8f9fa;
          bottom: -6px;
        }
        .idsq-step-navigation {
          flex-direction: column;
        }
        .idsq-step-navigation .idsq-button {
          width: 100%;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Materials Selection Functions
  function getUnsplashImageUrl(styleId, category, index) {
    // Use actual Unsplash photo URLs for demo purposes
    // In production, these would come from Airtable
    const images = {
      flooring: [
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688676-da9078024c94?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=900&auto=format&fit=crop&q=80',
      ],
      backsplash: [
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688676-da9078024c94?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688732-b72b027c846b?w=900&auto=format&fit=crop&q=80',
      ],
      countertops: [
        'https://images.unsplash.com/photo-1600607688969-a5c1434e9b5f?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688676-da9078024c94?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop&q=80',
      ],
      faucet: [
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1568822817140-58069be45bfb?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688676-da9078024c94?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688732-b72b027c846b?w=900&auto=format&fit=crop&q=80',
      ],
      'cabinet-door': [
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688676-da9078024c94?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=900&auto=format&fit=crop&q=80',
      ],
      'cabinet-finish': [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688676-da9078024c94?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688732-b72b027c846b?w=900&auto=format&fit=crop&q=80',
      ],
      'cabinet-hardware': [
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688676-da9078024c94?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=900&auto=format&fit=crop&q=80',
      ],
      tub: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688676-da9078024c94?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688732-b72b027c846b?w=900&auto=format&fit=crop&q=80',
      ],
      toilet: [
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688676-da9078024c94?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688732-b72b027c846b?w=900&auto=format&fit=crop&q=80',
      ],
      showerhead: [
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688676-da9078024c94?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688732-b72b027c846b?w=900&auto=format&fit=crop&q=80',
      ],
      paint: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688676-da9078024c94?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688732-b72b027c846b?w=900&auto=format&fit=crop&q=80',
      ],
      appliances: [
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607688969-a5c1434e9b5f?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=900&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop&q=80',
      ],
    };
    const categoryImages = images[category] || images.flooring;
    return categoryImages[index % categoryImages.length];
  }

  function generateMaterialOptions(category, styleId, roundNumber) {
    // For demo purposes, generate 3 random options per round
    // In production, these would come from Airtable
    const options = [];
    for (let i = 0; i < 3; i++) {
      const index = (roundNumber - 1) * 3 + i;
      options.push({
        id: `${category}-${roundNumber}-${i}`,
        name: `${category.charAt(0).toUpperCase() + category.slice(1)} Option ${i + 1}`,
        imageUrl: getUnsplashImageUrl(styleId, category, index),
        description: `Beautiful ${category} that complements your ${styleId} style`,
      });
    }
    return options;
  }

  // Helper to filter questions based on conditional logic (used by both render and handler functions)
  function getVisibleQuestions(expert, context, config) {
    const expertConfig = config.expertQuestions[expert];
    if (!expertConfig) return [];
    
    return expertConfig.questions.filter(q => {
      if (!q.showIf) return true;
      const condition = q.showIf;
      
      // Handle projectType conditional (checks the saved project type)
      if (condition.projectType) {
        const savedProjectType = context.projectType?.id;
        return savedProjectType === condition.projectType;
      }
      
      // Handle expert question conditional
      if (condition.expert && condition.questionId && condition.answerId) {
        const answer = context[condition.expert]?.[condition.questionId]?.id;
        return answer && condition.answerId.includes(answer);
      }
      
      // Handle multiple conditions (OR logic)
      if (condition.conditions && Array.isArray(condition.conditions)) {
        return condition.conditions.some(c => {
          if (c.projectType) {
            const savedProjectType = context.projectType?.id;
            return savedProjectType === c.projectType;
          }
          if (c.expert && c.questionId && c.answerId) {
            const answer = context[c.expert]?.[c.questionId]?.id;
            return answer && c.answerId.includes(answer);
          }
          return false;
        });
      }
      
      return true;
    });
  }

  function renderExpertIntro(config, mount, state, handlers) {
    const section = createElement('section', 'idsq-intro');
    
    // Title
    const title = createElement('h2', 'idsq-title');
    title.textContent = 'Meet Your Expert Team';
    section.appendChild(title);
    
    const description = createElement('p', 'idsq-description');
    description.textContent = 'Three specialists will guide you through your project, each bringing their unique expertise to help bring your vision to life.';
    section.appendChild(description);
    
    // Show all three experts in a grid matching quiz style
    const experts = [
      { name: 'Clara', avatar: config.copy.claraProfileUrl, title: 'Interior Design Expert', desc: 'Refines your aesthetic and curates finishes to match your style' },
      { name: 'Aria', avatar: config.copy.ariaProfileUrl, title: 'Architect Expert', desc: 'Optimizes layout, lighting, and structure for your space' },
      { name: 'Mason', avatar: config.copy.masonProfileUrl, title: 'Contractor Expert', desc: 'Ensures durability, practicality, and smart construction' },
    ];
    
    const grid = createElement('div', 'idsq-option-grid');
    experts.forEach((expert) => {
      const card = createElement('div', 'idsq-option-card');
      card.classList.add('idsq-space-card');
      
      const avatar = createElement('img', 'idsq-option-image', {
        src: expert.avatar,
        alt: expert.name,
        draggable: 'false',
        style: 'width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 16px;',
      });
      avatar.addEventListener('contextmenu', (e) => e.preventDefault());
      
      const label = createElement('div', 'idsq-option-label');
      const expertTitle = createElement('h3', 'idsq-option-title');
      expertTitle.textContent = expert.name;
      const expertRole = createElement('p', 'idsq-option-description');
      expertRole.textContent = expert.title;
      
      label.appendChild(expertTitle);
      label.appendChild(expertRole);
      
      card.appendChild(avatar);
      card.appendChild(label);
      grid.appendChild(card);
    });
    section.appendChild(grid);
    
    // Navigation
    const navigation = createElement('div', 'idsq-step-navigation');
    
    const continueButton = createElement('button', 'idsq-button idsq-button-primary');
    continueButton.textContent = 'Let\'s Get Started';
    continueButton.addEventListener('click', () => {
      handlers.onContinueFromExpertIntro();
    });
    
    // Add keyboard support: spacebar triggers continue button
    const handleKeyDown = (event) => {
      if (event.key === ' ' || event.key === 'Spacebar') {
        const activeElement = document.activeElement;
        const isInputFocused = activeElement && (
          activeElement.tagName === 'INPUT' ||
          activeElement.tagName === 'TEXTAREA' ||
          activeElement.isContentEditable
        );
        if (!isInputFocused && mount.contains(section)) {
          event.preventDefault();
          continueButton.click();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    section._keyboardCleanup = () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    
    navigation.appendChild(continueButton);
    
    section.appendChild(navigation);
    
    showSection(mount, section, handlers);
  }

  /**
   * Renders a JSON-based question (single or multi-select)
   * @param {Object} question - Question object from JSON config
   * @param {Object} config - Quiz config
   * @param {HTMLElement} mount - Mount element
   * @param {Object} state - Current state
   * @param {Object} handlers - Event handlers
   * @param {Function} saveStateFn - Function to save state: (state) => void
   * @param {Function} onAnswer - Callback when question is answered: (questionId, answer) => void
   * @param {Function} onContinue - Callback when continue is clicked: () => void
   */
  function renderJSONQuestion(question, config, mount, state, handlers, saveStateFn, onAnswer, onContinue) {
    const section = createElement('section', 'idsq-step');
    
    // Get current answer and check if multi-select
    const currentAnswer = state.jsonQuestionAnswers[question.id];
    const isMultiSelect = question.type === 'multi';
    
    // Title - remove "(Select all that apply)" variations if present
    // Also handle dynamic style name replacement for ds_style_alignment question
    const title = createElement('h2', 'idsq-title');
    let promptText = question.prompt || '';
    
    // Replace {STYLE_NAME} placeholder with actual style name if available
    if (promptText.includes('{STYLE_NAME}') && state.finalStyle && state.finalStyle.styleName) {
      promptText = promptText.replace('{STYLE_NAME}', state.finalStyle.styleName);
    }
    
    // Match variations: "(Select all that apply)", "(Select all that apply.)", "(Select All That Apply)", etc.
    // Case-insensitive, optional period, flexible spacing
    const selectAllRegex = /\([Ss]elect\s+all\s+that\s+apply\.?\)/gi;
    const selectAllMatch = promptText.match(selectAllRegex);
    let selectAllText = null;
    if (selectAllMatch) {
      // Extract the matched text (use first match, remove period if present)
      selectAllText = selectAllMatch[0].replace(/\.$/, '');
      // Remove all matches using replace with global flag
      promptText = promptText.replace(selectAllRegex, '').trim();
      // Clean up any double spaces or trailing/leading spaces
      promptText = promptText.replace(/\s+/g, ' ').trim();
    }
    title.textContent = promptText;
    section.appendChild(title);
    
    // Description - render with HTML support for bold markdown
    // Also extract "(Select One Option)" and "(Select All That Apply)" if present in description
    let selectOneText = null;
    let selectAllFromDesc = null;
    let descHtml = '';
    if (question.description) {
      const description = createElement('p', 'idsq-description');
      descHtml = question.description;
      
      // Extract "(Select All That Apply)" from description if present (in markdown bold or plain text)
      const selectAllDescRegex = /(\([Ss]elect\s+all\s+that\s+apply\.?\))/gi;
      const selectAllDescMatch = descHtml.match(selectAllDescRegex);
      if (selectAllDescMatch) {
        // Extract the text (remove period if present)
        selectAllFromDesc = selectAllDescMatch[0].replace(/\.$/, '');
        // Remove from description (handle both markdown bold and plain text versions)
        descHtml = descHtml.replace(/\*\*\([Ss]elect\s+all\s+that\s+apply\.?\)\*\*/gi, '').replace(selectAllDescRegex, '').trim();
        // Clean up any double spaces, trailing periods/spaces, or leading spaces
        descHtml = descHtml.replace(/\s+/g, ' ').replace(/\s+\.$/, '.').trim();
      }
      
      // Extract "(Select One Option)" from description if present (in markdown bold format)
      const selectOneRegex = /\*\*\([Ss]elect\s+one\s+option\.?\)\*\*/gi;
      const selectOneMatch = descHtml.match(selectOneRegex);
      if (selectOneMatch) {
        // Extract the text (remove markdown bold and period if present)
        selectOneText = selectOneMatch[0].replace(/\*\*/g, '').replace(/\.$/, '');
        // Remove from description
        descHtml = descHtml.replace(selectOneRegex, '').trim();
        // Clean up any double spaces, trailing periods/spaces, or leading spaces
        descHtml = descHtml.replace(/\s+/g, ' ').replace(/\s+\.$/, '.').trim();
      }
      
      // Convert remaining markdown bold (**text**) to HTML <strong> tags
      descHtml = descHtml.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      description.innerHTML = descHtml;
      section.appendChild(description);
    }
    
    // Show selection instruction below description if present (prioritize from description, then from prompt)
    const selectionText = selectAllFromDesc || selectOneText || selectAllText;
    if (selectionText) {
      const selectionInstruction = createElement('p', 'idsq-selection-instruction');
      // Bold the text and ensure no period
      const cleanText = selectionText.replace(/\.$/, '');
      selectionInstruction.innerHTML = `<strong>${cleanText}</strong>`;
      section.appendChild(selectionInstruction);
    }
    
    // Add Select All / Select None buttons for section gate questions (right above the grid)
    if (question.id && question.id.startsWith('section_gate_')) {
      const selectButtons = createElement('div', 'idsq-select-all-none');
      const selectAllBtn = createElement('button', 'idsq-button idsq-button-secondary idsq-select-all-btn', {
        type: 'button'
      });
      selectAllBtn.textContent = 'Select All';
      const selectNoneBtn = createElement('button', 'idsq-button idsq-button-secondary idsq-select-none-btn', {
        type: 'button'
      });
      selectNoneBtn.textContent = 'Select None';
      
      selectAllBtn.addEventListener('click', () => {
        const allOptionIds = question.options.map(opt => opt.id);
        state.jsonQuestionAnswers[question.id] = allOptionIds;
        if (saveStateFn) saveStateFn(state);
        if (onAnswer) onAnswer(question.id, allOptionIds);
        renderJSONQuestion(question, config, mount, state, handlers, saveStateFn, onAnswer, onContinue);
      });
      
      selectNoneBtn.addEventListener('click', () => {
        state.jsonQuestionAnswers[question.id] = [];
        if (saveStateFn) saveStateFn(state);
        if (onAnswer) onAnswer(question.id, []);
        renderJSONQuestion(question, config, mount, state, handlers, saveStateFn, onAnswer, onContinue);
      });
      
      selectButtons.appendChild(selectAllBtn);
      selectButtons.appendChild(selectNoneBtn);
      section.appendChild(selectButtons);
    }
    
    // Special handling for section gate questions - initialize with all selected
    if (question.id && question.id.startsWith('section_gate_')) {
      // Initialize with all options selected ONLY if answer is completely undefined/null (not if it's an empty array)
      // Empty array means user explicitly selected none, so don't override that
      if (currentAnswer === undefined || currentAnswer === null) {
        const allOptionIds = question.options.map(opt => opt.id);
        state.jsonQuestionAnswers[question.id] = allOptionIds;
        if (saveStateFn) saveStateFn(state);
        // Re-render to show all selected
        renderJSONQuestion(question, config, mount, state, handlers, saveStateFn, onAnswer, onContinue);
        return; // Exit early since we're re-rendering
      }
      // Add special class to grid for section gates
      if (!section.classList.contains('idsq-section-gate-container')) {
        section.classList.add('idsq-section-gate-container');
      }
    }
    
    // Special rendering for color selection question (ds_excluded_colors) - use chips instead of cards
    if (question.id === 'ds_excluded_colors') {
      const colorContainer = createElement('div', 'idsq-color-chips-container');
      const colorChips = createElement('div', 'idsq-color-chips');
      
      question.options.forEach((option) => {
        const chip = createElement('button', 'idsq-color-chip', {
          type: 'button',
        });
        
        // Check if selected
        const isSelected = Array.isArray(currentAnswer) && currentAnswer.includes(option.id);
        if (isSelected) {
          chip.classList.add('idsq-selected');
        }
        
        chip.textContent = option.name;
        
        // Add click handler
        chip.addEventListener('click', () => {
          const current = state.jsonQuestionAnswers[question.id] || [];
          const newAnswer = current.includes(option.id)
            ? current.filter(id => id !== option.id)
            : [...current, option.id];
          
          state.jsonQuestionAnswers[question.id] = newAnswer;
          if (saveStateFn) saveStateFn(state);
          if (onAnswer) onAnswer(question.id, newAnswer);
          // Re-render to update UI
          renderJSONQuestion(question, config, mount, state, handlers, saveStateFn, onAnswer, onContinue);
        });
        
        colorChips.appendChild(chip);
      });
      
      colorContainer.appendChild(colorChips);
      section.appendChild(colorContainer);
      
      // Add navigation for color chips (same as standard rendering)
      const navigation = createElement('div', 'idsq-step-navigation');
      
      // Previous button
      if (question._previousHandler) {
        const previousButton = createElement('button', 'idsq-button idsq-button-secondary');
        previousButton.textContent = 'Previous';
        previousButton.addEventListener('click', () => {
          question._previousHandler();
        });
        navigation.appendChild(previousButton);
      }
      
      // Continue/Skip button logic
      const hasAnswer = Array.isArray(currentAnswer) && currentAnswer.length > 0;
      
      if (!hasAnswer) {
        const skipButton = createElement('button', 'idsq-button idsq-button-secondary');
        skipButton.textContent = 'Skip';
        skipButton.addEventListener('click', () => {
          state.jsonQuestionAnswers[question.id] = [];
          if (saveStateFn) saveStateFn(state);
          if (onAnswer) onAnswer(question.id, []);
          if (onContinue) onContinue();
        });
        navigation.appendChild(skipButton);
      }
      
      if (hasAnswer) {
        const continueButton = createElement('button', 'idsq-button idsq-button-primary');
        continueButton.textContent = 'Continue';
        continueButton.addEventListener('click', () => {
          if (onContinue) onContinue();
        });
        navigation.appendChild(continueButton);
      }
      
      section.appendChild(navigation);
    } else {
      // Standard card-based rendering
      const grid = createElement('div', 'idsq-option-grid');
      
      // Special grid layout for section gate questions - 5 columns, smaller cards
      if (question.id && question.id.startsWith('section_gate_')) {
        grid.classList.add('idsq-section-gate-grid');
      } else if (question.options && question.options.length <= 2) {
        grid.classList.add('idsq-grid-two-items');
      } else if (question.options && question.options.length === 4) {
        grid.classList.add('idsq-grid-four-items');
      } else if (question.options && question.options.length === 6) {
        grid.classList.add('idsq-grid-six-items');
      }
      
      question.options.forEach((option) => {
      const card = createElement('button', 'idsq-option-card idsq-space-card', {
        type: 'button',
      });
      
      // Check if selected
      let isSelected = false;
      if (isMultiSelect) {
        if (Array.isArray(currentAnswer) && currentAnswer.includes(option.id)) {
          card.classList.add('idsq-selected');
          isSelected = true;
        }
      } else {
        if (currentAnswer === option.id) {
          card.classList.add('idsq-selected');
          isSelected = true;
        }
      }
      
      // Add checkmark overlay for selected cards
      if (isSelected) {
        const checkmarkOverlay = createElement('div', 'idsq-card-checkmark');
        checkmarkOverlay.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `;
        card.appendChild(checkmarkOverlay);
      }
      
      // Add click handler
      card.addEventListener('click', () => {
        if (isMultiSelect) {
          // Toggle selection for multi-select
          const current = state.jsonQuestionAnswers[question.id] || [];
          
          // Special handling for "none" option - make it exclusive
          if (option.id === 'none') {
            if (current.includes('none')) {
              // Deselecting "none" - just remove it
              state.jsonQuestionAnswers[question.id] = current.filter(id => id !== 'none');
            } else {
              // Selecting "none" - deselect all others
              state.jsonQuestionAnswers[question.id] = ['none'];
            }
          } else {
            // For other options, if "none" is selected, deselect it first
            let newAnswer;
            if (current.includes('none')) {
              // Remove "none" and add the new option
              newAnswer = [option.id];
            } else {
              // Normal toggle
              newAnswer = current.includes(option.id)
                ? current.filter(id => id !== option.id)
                : [...current, option.id];
            }
            state.jsonQuestionAnswers[question.id] = newAnswer;
          }
          
          if (saveStateFn) saveStateFn(state);
          if (onAnswer) onAnswer(question.id, state.jsonQuestionAnswers[question.id]);
          // Re-render to update UI
          renderJSONQuestion(question, config, mount, state, handlers, saveStateFn, onAnswer, onContinue);
        } else {
          // Single-select: set answer and auto-advance
          state.jsonQuestionAnswers[question.id] = option.id;
          if (saveStateFn) saveStateFn(state);
          if (onAnswer) onAnswer(question.id, option.id);
          // Update visual state immediately
          card.classList.add('idsq-selected');
          // Auto-advance after a brief delay to show selection feedback (reduced for faster UX)
          setTimeout(() => {
            if (onContinue) onContinue();
          }, 300);
        }
      });
      
      // Option content - icons are optional
      // If no icon provided, we'll show text-only cards
      if (option.icon) {
        const icon = createElement('div', 'idsq-space-icon');
        icon.textContent = option.icon;
        card.appendChild(icon);
      } else {
        // For text-only options, add some padding
        card.style.padding = '1.5rem';
      }
      
      const label = createElement('div', 'idsq-option-label');
      const optionTitle = createElement('h3', 'idsq-option-title');
      
      // Extract parenthetical text from option name and move to subtitle
      let optionNameText = option.name || '';
      const parentheticalMatch = optionNameText.match(/\(([^)]+)\)/);
      let subtitleText = null;
      
      if (parentheticalMatch) {
        // Remove parenthetical from title
        optionNameText = optionNameText.replace(/\s*\([^)]+\)\s*/, '').trim();
        subtitleText = parentheticalMatch[1];
      }
      
      optionTitle.textContent = optionNameText;
      label.appendChild(optionTitle);
      
      // Add subtitle if parenthetical text was found
      if (subtitleText) {
        const optionSubtitle = createElement('p', 'idsq-option-subtitle');
        optionSubtitle.textContent = subtitleText;
        label.appendChild(optionSubtitle);
      }
      
      // Support both 'description' and 'desc' fields for flexibility
      const optionDesc = option.description || option.desc;
      if (optionDesc) {
        const optionDescription = createElement('p', 'idsq-option-description');
        optionDescription.textContent = optionDesc;
        label.appendChild(optionDescription);
      }
      
      card.appendChild(label);
      grid.appendChild(card);
    });
    
    section.appendChild(grid);
    
    // Navigation
    const navigation = createElement('div', 'idsq-step-navigation');
    
    // Previous button - store the previous handler on the question object
    if (question._previousHandler) {
      const previousButton = createElement('button', 'idsq-button idsq-button-secondary');
      previousButton.textContent = 'Previous';
      previousButton.addEventListener('click', () => {
        question._previousHandler();
      });
      navigation.appendChild(previousButton);
    }
    
    // Continue button logic:
    // - For single-select: show if answered (but will auto-advance after selection)
    // - For multi-select: only show if at least one selection is made
    // - For section gates: allow continue even with empty selection (user can skip)
    const hasAnswer = isMultiSelect 
      ? (Array.isArray(currentAnswer) && currentAnswer.length > 0)
      : (currentAnswer !== undefined && currentAnswer !== null);
    
    // For section gates, always show continue button (even if nothing selected)
    const isSectionGate = question.id && question.id.startsWith('section_gate_');
    
    // Skip button for multi-select questions (only show when no selections made and not section gate)
    if (isMultiSelect && !hasAnswer && !isSectionGate) {
      const skipButton = createElement('button', 'idsq-button idsq-button-secondary');
      skipButton.textContent = 'Skip';
      skipButton.addEventListener('click', () => {
        // Set answer to empty array or null to indicate skipped
        state.jsonQuestionAnswers[question.id] = [];
        if (saveStateFn) saveStateFn(state);
        if (onAnswer) onAnswer(question.id, []);
        if (onContinue) onContinue();
      });
      navigation.appendChild(skipButton);
    }
    
    // Show continue button if there's an answer OR if it's a section gate (allow empty selection)
    if (hasAnswer || isSectionGate) {
      const continueButton = createElement('button', 'idsq-button idsq-button-primary');
      continueButton.textContent = 'Continue';
      continueButton.addEventListener('click', () => {
        // Check if any selected options require URLs
        const selectedOptions = isMultiSelect 
          ? (currentAnswer || []).map(id => question.options.find(opt => opt.id === id)).filter(Boolean)
          : [question.options.find(opt => opt.id === currentAnswer)].filter(Boolean);
        
        const optionsRequiringUrls = selectedOptions.filter(opt => opt && opt.requiresUrl);
        
        if (optionsRequiringUrls.length > 0) {
          // Show URL input page
          renderURLInputsPage(question, optionsRequiringUrls, config, mount, state, handlers, saveStateFn, onContinue);
        } else {
          // No URLs needed, proceed normally
          if (onContinue) onContinue();
        }
      });
      navigation.appendChild(continueButton);
      
      // Add spacebar support for continue button when selection is made
      const handleKeyDown = (event) => {
        if (event.key === ' ' || event.key === 'Spacebar') {
          const activeElement = document.activeElement;
          const isInputFocused = activeElement && (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.isContentEditable
          );
          if (!isInputFocused && mount.contains(section)) {
            event.preventDefault();
            continueButton.click();
          }
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      section._keyboardCleanup = () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
    
    section.appendChild(navigation);
    }
    
    showSection(mount, section, handlers);
  }

  /**
   * Validates a URL to ensure it's clean and safe
   * @param {string} url - URL to validate
   * @returns {Object} - { valid: boolean, error: string|null }
   */
  function validateURL(url) {
    // URLs are optional - only validate if provided
    if (!url || !url.trim()) {
      return { valid: true, error: null };
    }
    
    const trimmedUrl = url.trim();
    
    // Basic URL format check
    try {
      const urlObj = new URL(trimmedUrl);
      const hostname = urlObj.hostname.toLowerCase();
      
      // Block common spam/pornographic domains (basic list - can be expanded)
      const blockedDomains = [
        'porn', 'xxx', 'adult', 'sex', 'spam', 'malware', 'phishing',
        'bit.ly', 'tinyurl.com', 't.co' // Shorteners can be risky
      ];
      
      for (const blocked of blockedDomains) {
        if (hostname.includes(blocked)) {
          return { valid: false, error: 'This URL is not allowed' };
        }
      }
      
      // Check for allowed domains based on option type
      // This is a basic check - Pinterest URLs should contain pinterest.com, etc.
      // We'll be more permissive but log for review
      
      return { valid: true, error: null };
    } catch (e) {
      // Not a valid URL format
      return { valid: false, error: 'Please enter a valid URL (e.g., https://example.com)' };
    }
  }

  /**
   * Renders a page for collecting URLs for selected options
   * @param {Object} question - The original question object
   * @param {Array} optionsRequiringUrls - Array of option objects that require URLs
   * @param {Object} config - Quiz config
   * @param {HTMLElement} mount - Mount element
   * @param {Object} state - Current state
   * @param {Object} handlers - Event handlers
   * @param {Function} saveStateFn - Function to save state
   * @param {Function} onContinue - Callback to continue after URLs are collected
   */
  function renderURLInputsPage(question, optionsRequiringUrls, config, mount, state, handlers, saveStateFn, onContinue) {
    const section = createElement('section', 'idsq-step');
    
    const title = createElement('h2', 'idsq-title');
    title.textContent = 'Add Your Reference Links';
    section.appendChild(title);
    
    const description = createElement('p', 'idsq-description');
    description.textContent = 'Please provide the URLs for your selected inspiration sources. All fields are optional.';
    section.appendChild(description);
    
    const form = createElement('form', 'idsq-form');
    
    // Initialize URL storage in state if not exists
    if (!state.jsonQuestionUrls) {
      state.jsonQuestionUrls = {};
    }
    if (!state.jsonQuestionUrls[question.id]) {
      state.jsonQuestionUrls[question.id] = {};
    }
    
    const urlInputs = {};
    
    // Helper function to get description for each option type
    const getOptionDescription = (optionId) => {
      const descriptions = {
        pinterest: 'Paste the URL to your Pinterest board or pin set.',
        instagram: 'Paste the URL to your Instagram post or reel.',
        magazines: 'Paste the URL to the digital magazine article or editorial.',
        portfolio: 'Paste the URL to your designer\'s portfolio or project page.',
        houzz: 'Paste the URL to your Houzz ideabook or project photos.'
      };
      return descriptions[optionId] || 'Paste the URL to your reference.';
    };
    
    optionsRequiringUrls.forEach((option) => {
      const field = createElement('div', 'idsq-field');
      
      const label = createElement('label', 'idsq-field-label');
      label.textContent = `${option.urlLabel || option.name} (Optional)`;
      field.appendChild(label);
      
      const input = createElement('input', 'idsq-input', {
        type: 'url',
        placeholder: `https://${option.id === 'pinterest' ? 'pinterest.com' : option.id === 'instagram' ? 'instagram.com' : option.id === 'houzz' ? 'houzz.com' : 'example.com'}/...`,
        value: state.jsonQuestionUrls[question.id][option.id] || '',
      });
      input.name = `${question.id}_${option.id}_url`;
      input.id = `${question.id}_${option.id}_url`;
      
      const helpText = createElement('p', 'idsq-description');
      helpText.style.fontSize = '0.9rem';
      helpText.style.marginTop = '0.5rem';
      helpText.style.marginBottom = '1rem';
      helpText.style.textAlign = 'left';
      helpText.textContent = getOptionDescription(option.id);
      
      const errorMsg = createElement('p', 'idsq-input-error');
      errorMsg.style.display = 'none';
      
      input.addEventListener('blur', () => {
        const validation = validateURL(input.value);
        if (input.value.trim() && !validation.valid) {
          errorMsg.textContent = validation.error;
          errorMsg.style.display = 'block';
          input.style.borderColor = '#ef4444';
        } else {
          errorMsg.style.display = 'none';
          input.style.borderColor = '';
          // Save URL to state
          if (input.value.trim()) {
            state.jsonQuestionUrls[question.id][option.id] = input.value.trim();
          } else {
            delete state.jsonQuestionUrls[question.id][option.id];
          }
          if (saveStateFn) saveStateFn(state);
        }
      });
      
      input.addEventListener('input', () => {
        // Clear error on input
        if (errorMsg.style.display !== 'none') {
          errorMsg.style.display = 'none';
          input.style.borderColor = '';
        }
      });
      
      urlInputs[option.id] = input;
      
      field.appendChild(input);
      field.appendChild(helpText);
      field.appendChild(errorMsg);
      form.appendChild(field);
    });
    
    section.appendChild(form);
    
    // Navigation
    const navigation = createElement('div', 'idsq-step-navigation');
    
    // Previous button
    const previousButton = createElement('button', 'idsq-button idsq-button-secondary');
    previousButton.textContent = 'Previous';
    previousButton.addEventListener('click', () => {
      // Go back to the question selection page
      // Use the question's previous handler if available, otherwise render the question directly
      if (question._previousHandler) {
        question._previousHandler();
      } else {
        renderJSONQuestion(question, config, mount, state, handlers, saveStateFn, 
          (questionId, answer) => {
            if (onAnswer) onAnswer(questionId, answer);
          },
          onContinue
        );
      }
    });
    navigation.appendChild(previousButton);
    
    // Function to check if any URLs are provided (will be called dynamically)
    const checkHasAnyUrl = () => {
      return optionsRequiringUrls.some(option => {
        const input = urlInputs[option.id];
        return input && input.value.trim();
      });
    };
    
    // Update button visibility based on URL inputs
    const updateButtonVisibility = () => {
      const hasAnyUrl = checkHasAnyUrl();
      if (hasAnyUrl) {
        // Show Continue, hide Skip
        if (continueButton && continueButton.parentElement) {
          continueButton.style.display = '';
        }
        if (skipButton && skipButton.parentElement) {
          skipButton.style.display = 'none';
        }
      } else {
        // Show Skip, hide Continue
        if (continueButton && continueButton.parentElement) {
          continueButton.style.display = 'none';
        }
        if (skipButton && skipButton.parentElement) {
          skipButton.style.display = '';
        }
      }
    };
    
    // Create both buttons but show/hide based on URLs
    const continueButton = createElement('button', 'idsq-button idsq-button-primary');
    continueButton.textContent = 'Continue';
    continueButton.addEventListener('click', () => {
      // Validate all URLs before continuing (URLs are optional, but if provided must be valid)
      let allValid = true;
      optionsRequiringUrls.forEach((option) => {
        const input = urlInputs[option.id];
        if (input && input.value.trim()) {
          const validation = validateURL(input.value);
          if (!validation.valid) {
            allValid = false;
            const errorMsg = input.parentElement.querySelector('.idsq-input-error');
            if (errorMsg) {
              errorMsg.textContent = validation.error;
              errorMsg.style.display = 'block';
              input.style.borderColor = '#ef4444';
            }
          } else {
            // Save valid URL
            state.jsonQuestionUrls[question.id][option.id] = input.value.trim();
          }
        } else {
          // No URL provided - remove from state
          if (state.jsonQuestionUrls[question.id]) {
            delete state.jsonQuestionUrls[question.id][option.id];
          }
        }
      });
      
      if (allValid) {
        if (saveStateFn) saveStateFn(state);
        if (onContinue) onContinue();
      }
    });
    
    const skipButton = createElement('button', 'idsq-button idsq-button-secondary');
    skipButton.textContent = 'Skip';
    skipButton.addEventListener('click', () => {
      // If no URLs provided, change selection to "none" (No External References)
      state.jsonQuestionAnswers[question.id] = ['none'];
      // Clear any URLs
      if (state.jsonQuestionUrls[question.id]) {
        state.jsonQuestionUrls[question.id] = {};
      }
      if (saveStateFn) saveStateFn(state);
      if (onContinue) onContinue();
    });
    
    // Add input listeners to update button visibility
    optionsRequiringUrls.forEach((option) => {
      const input = urlInputs[option.id];
      if (input) {
        input.addEventListener('input', () => {
          updateButtonVisibility();
        });
      }
    });
    
    // Initial button visibility
    updateButtonVisibility();
    navigation.appendChild(continueButton);
    navigation.appendChild(skipButton);
    
    section.appendChild(navigation);
    
    showSection(mount, section, handlers);
  }

  /**
   * Renders global questions from JSON config
   * @param {Array} questions - Array of question objects
   * @param {number} questionIndex - Current question index
   * @param {Object} config - Quiz config
   * @param {HTMLElement} mount - Mount element
   * @param {Object} state - Current state
   * @param {Object} handlers - Event handlers
   * @param {Function} saveStateFn - Function to save state: (state) => void
   */
  async function renderGlobalQuestions(questions, questionIndex, config, mount, state, handlers, saveStateFn) {
    // Filter all questions first to get the actual visible questions
    const context = {
      projectType: state.projectType || (state.jsonQuestionAnswers && state.jsonQuestionAnswers.project_type),
      buildType: state.buildType || (state.jsonQuestionAnswers && state.jsonQuestionAnswers.build_type),
      routeMode: state.routeMode || (state.jsonQuestionAnswers && state.jsonQuestionAnswers.route_mode),
      answers: state.jsonQuestionAnswers || {},
      jsonQuestionAnswers: state.jsonQuestionAnswers || {},
      projectContext: state.projectContext || {},
    };
    
    // Filter questions based on current state
    const visibleQuestions = filterQuestionsByConditions(questions, context);
    
    // Ensure flow is set to project-type for resume functionality
    if (state.currentFlow !== 'project-type') {
      state.currentFlow = 'project-type';
    }
    
    // Save current question index to state for resume functionality
    state.jsonQuestionIndex = questionIndex;
    if (saveStateFn) saveStateFn(state);
    
    // Check if we've completed all visible questions
    if (questionIndex >= visibleQuestions.length) {
      // All global questions answered, proceed to next flow
      state.jsonQuestionIndex = null; // Clear index when done
      if (saveStateFn) saveStateFn(state);
      handlers.onContinueFromGlobalQuestions();
      return;
    }
    
    const question = visibleQuestions[questionIndex];
    
    // Set up previous handler for this question
    question._previousHandler = () => {
      if (questionIndex > 0) {
        // Go back to previous question
        renderGlobalQuestions(questions, questionIndex - 1, config, mount, state, handlers, saveStateFn);
      } else {
        // If first question, go back to expert intro
        if (handlers.onGoBack) {
          handlers.onGoBack();
        }
      }
    };
    
    // Render the question
    renderJSONQuestion(
      question,
      config,
      mount,
      state,
      handlers,
      saveStateFn,
      (questionId, answer) => {
        // Handle answer
        state.jsonQuestionAnswers[questionId] = answer;
        
        // Update state based on question type
        if (questionId === 'project_type') {
          state.projectType = answer;
          if (!state.projectContext) state.projectContext = {};
          state.projectContext.projectType = { id: answer };
        } else if (questionId === 'build_type') {
          state.buildType = answer;
          if (!state.projectContext) state.projectContext = {};
          state.projectContext.buildType = { id: answer };
        } else if (questionId === 'route_mode') {
          state.routeMode = answer;
          if (!state.projectContext) state.projectContext = {};
          state.projectContext.routeMode = answer;
        }
        
        if (saveStateFn) saveStateFn(state);
      },
      () => {
        // Continue to next question - re-filter in case conditions changed
        if (saveStateFn) saveStateFn(state);
        renderGlobalQuestions(questions, questionIndex + 1, config, mount, state, handlers, saveStateFn);
      }
    );
  }

  /**
   * Loads space-specific questions from window objects
   * @param {string} spaceId - Space ID (e.g., 'kitchen', 'bedroom', 'living-room')
   * @returns {Array} - Array of question objects, or empty array if not found
   */
  function loadSpaceQuestions(spaceId) {
    // Normalize space ID to handle variations
    const normalizedId = normalizeSpaceId(spaceId);
    
    // Map normalized space IDs to window object names
    // Handle both direct matches and variations (e.g., "bedroom", "primary-bedroom", "nursery")
    const spaceMap = {
      'kitchen': window.KITCHEN_DEEPDIVE || window.KITCHEN,
      'living-room': window.LIVING_ROOM_DEEPDIVE || window.LIVING_ROOM,
      'livingroom': window.LIVING_ROOM_DEEPDIVE || window.LIVING_ROOM,
      'bedroom': window.BEDROOM_DEEPDIVE || window.BEDROOM,
      'primary-bedroom': window.BEDROOM_DEEPDIVE || window.BEDROOM,
      'primarybedroom': window.BEDROOM_DEEPDIVE || window.BEDROOM,
      'nursery': window.BEDROOM_DEEPDIVE || window.BEDROOM, // Nursery uses bedroom questions
      'general-interior': window.GENERAL_INTERIOR_DEEPDIVE || window.GENERAL_INTERIOR,
      'generalinterior': window.GENERAL_INTERIOR_DEEPDIVE || window.GENERAL_INTERIOR,
      'general-exterior': window.GENERAL_EXTERIOR_DEEPDIVE || window.GENERAL_EXTERIOR,
      'generalexterior': window.GENERAL_EXTERIOR_DEEPDIVE || window.GENERAL_EXTERIOR,
      'bathroom': null, // Not yet implemented
      'primary-bathroom': null, // Not yet implemented
      'office': null, // Not yet implemented
    };
    
    // Try exact match first, then normalized match
    let questions = spaceMap[spaceId] || spaceMap[normalizedId];
    
    // If still not found and it contains "bedroom" or "nursery", use bedroom questions
    if (!questions && (normalizedId.includes('bedroom') || normalizedId.includes('nursery'))) {
      questions = window.BEDROOM_DEEPDIVE || window.BEDROOM;
    }
    
    // If still not found and it contains "kitchen", use kitchen questions
    if (!questions && normalizedId.includes('kitchen')) {
      questions = window.KITCHEN_DEEPDIVE || window.KITCHEN;
    }
    
    // If still not found and it contains "living", use living room questions
    if (!questions && normalizedId.includes('living')) {
      questions = window.LIVING_ROOM_DEEPDIVE || window.LIVING_ROOM;
    }
    
    if (!questions || !Array.isArray(questions)) {
      return [];
    }
    
    // Flatten the questions array (questions may be nested in category objects)
    const flattened = [];
    questions.forEach(item => {
      if (item.questions && Array.isArray(item.questions)) {
        // This is a category object with nested questions
        // Include the nested questions
        item.questions.forEach(q => {
          // Preserve category context if needed
          if (!q.category && item.category) {
            q.category = item.category;
          }
          flattened.push(q);
        });
      } else if (item.id || item.prompt) {
        // This is a question object itself (like section_gate_gi in general-interior.js)
        flattened.push(item);
      }
    });
    
    return flattened;
  }

  /**
   * Finds section gate question for a space
   * @param {string} spaceId - Space ID
   * @returns {Object|null} - Section gate question object, or null if not found
   */
  function findSectionGateQuestion(spaceId) {
    const allQuestions = loadSpaceQuestions(spaceId);
    // Section gate questions have id starting with "section_gate_"
    // They can be nested in category objects or be direct questions
    return allQuestions.find(q => q.id && q.id.startsWith('section_gate_')) || null;
  }

  /**
   * Renders section gates for all selected spaces
   * @param {Object} config - Quiz config
   * @param {HTMLElement} mount - Mount element
   * @param {Object} state - Current state
   * @param {Object} handlers - Event handlers
   * @param {Function} saveStateFn - Function to save state
   */
  function renderSectionGates(config, mount, state, handlers, saveStateFn) {
    state.currentFlow = 'section-gates';
    if (saveStateFn) saveStateFn(state);
    
    // Get selected spaces from state
    const spacesRequested = state.spacesRequested || [];
    if (!Array.isArray(spacesRequested) || spacesRequested.length === 0) {
      // No spaces selected, go directly to materials
      handlers.onContinueFromSectionGates();
      return;
    }
    
    // Initialize space order and gate index if not set
    if (!state.spaceOrder || state.spaceOrder.length === 0) {
      // Create space order from spacesRequested
      state.spaceOrder = spacesRequested.map(s => normalizeSpaceId(s.id || s));
      state.currentSpaceIndex = 0;
      if (saveStateFn) saveStateFn(state);
    }
    
    const currentSpaceIndex = state.currentSpaceIndex || 0;
    if (currentSpaceIndex >= state.spaceOrder.length) {
      // All section gates completed
      handlers.onContinueFromSectionGates();
      return;
    }
    
    const currentSpaceId = state.spaceOrder[currentSpaceIndex];
    const sectionGate = findSectionGateQuestion(currentSpaceId);
    
    if (!sectionGate) {
      // No section gate for this space, skip to next space
      state.currentSpaceIndex = currentSpaceIndex + 1;
      if (saveStateFn) saveStateFn(state);
      renderSectionGates(config, mount, state, handlers, saveStateFn);
      return;
    }
    
    // Build context for condition evaluation
    const context = {
      projectType: state.projectType || state.jsonQuestionAnswers?.project_type,
      buildType: state.buildType || state.jsonQuestionAnswers?.build_type,
      routeMode: state.routeMode || state.jsonQuestionAnswers?.route_mode,
      answers: state.jsonQuestionAnswers || {},
      jsonQuestionAnswers: state.jsonQuestionAnswers || {},
      projectContext: state.projectContext || {},
      selectedCategories: state.selectedCategories || {},
    };
    
    // For section gates, we want to show them for all route modes
    // But if the gate has a routeMode condition, we need to check it
    // However, for Express and Standard, we still want to show gates (they just skip detailed questions)
    // So we'll show the gate if:
    // 1. It has no routeMode condition, OR
    // 2. Its routeMode condition matches the current routeMode, OR
    // 3. It's Express/Standard and the gate condition includes those modes (or has no routeMode condition)
    
    // Check if section gate should be shown
    // For section gates, we want to show them for Express/Standard/Deep, but the questions themselves filter by routeMode
    // So we'll bypass the routeMode check for section gates themselves
    const gateContext = { ...context };
    // Temporarily set routeMode to 'deep' for section gate evaluation, since gates should show for all modes
    // The actual questions will filter by routeMode later
    const originalRouteMode = gateContext.routeMode;
    gateContext.routeMode = 'deep'; // Force section gates to show for all route modes
    
    const shouldShowGate = !sectionGate.showIf || evaluateQuestionCondition(sectionGate.showIf, gateContext);
    
    // Restore original routeMode
    gateContext.routeMode = originalRouteMode;
    
    if (!shouldShowGate) {
      // Section gate not applicable, skip to next space
      state.currentSpaceIndex = currentSpaceIndex + 1;
      if (saveStateFn) saveStateFn(state);
      renderSectionGates(config, mount, state, handlers, saveStateFn);
      return;
    }
    
    // Set up previous handler
    sectionGate._previousHandler = () => {
      if (currentSpaceIndex > 0) {
        // Go back to previous space's section gate
        state.currentSpaceIndex = currentSpaceIndex - 1;
        if (saveStateFn) saveStateFn(state);
        renderSectionGates(config, mount, state, handlers, saveStateFn);
      } else {
        // Go back to global questions
        if (handlers.onGoBack) {
          handlers.onGoBack();
        }
      }
    };
    
    // Render the section gate question
    renderJSONQuestion(
      sectionGate,
      config,
      mount,
      state,
      handlers,
      saveStateFn,
      (questionId, answer) => {
        // Store section gate selections
        if (!state.selectedCategories) state.selectedCategories = {};
        // Store as array of category IDs
        state.selectedCategories[questionId] = Array.isArray(answer) ? answer : [answer];
        if (saveStateFn) saveStateFn(state);
      },
      () => {
        // Continue to next space's section gate
        state.currentSpaceIndex = currentSpaceIndex + 1;
        if (saveStateFn) saveStateFn(state);
        renderSectionGates(config, mount, state, handlers, saveStateFn);
      }
    );
  }

  /**
   * Renders space-specific questions for a given space
   * @param {string} spaceId - Space ID
   * @param {number} questionIndex - Current question index within the space
   * @param {Object} config - Quiz config
   * @param {HTMLElement} mount - Mount element
   * @param {Object} state - Current state
   * @param {Object} handlers - Event handlers
   * @param {Function} saveStateFn - Function to save state
   */
  function renderSpaceQuestions(spaceId, questionIndex, config, mount, state, handlers, saveStateFn) {
    state.currentFlow = 'space-questions';
    state.currentSpace = spaceId;
    
    // Track question index per space for resume functionality
    if (!state.currentSpaceQuestionIndex) state.currentSpaceQuestionIndex = {};
    state.currentSpaceQuestionIndex[spaceId] = questionIndex;
    
    if (saveStateFn) saveStateFn(state);
    
    // Load all questions for this space
    const allQuestions = loadSpaceQuestions(spaceId);
    if (!allQuestions || allQuestions.length === 0) {
      // No questions for this space, move to next space
      handlers.onContinueFromSpaceQuestions(spaceId);
      return;
    }
    
    // Build context for filtering
    const context = {
      projectType: state.projectType || state.jsonQuestionAnswers?.project_type,
      buildType: state.buildType || state.jsonQuestionAnswers?.build_type,
      routeMode: state.routeMode || state.jsonQuestionAnswers?.route_mode,
      answers: state.jsonQuestionAnswers || {},
      jsonQuestionAnswers: state.jsonQuestionAnswers || {},
      projectContext: state.projectContext || {},
      selectedCategories: state.selectedCategories || {},
    };
    
    // Filter questions based on conditions
    const visibleQuestions = filterQuestionsByConditions(allQuestions, context);
    
    // Further filter: exclude section gate questions (already handled)
    const questionsToShow = visibleQuestions.filter(q => 
      !q.id || !q.id.startsWith('section_gate_')
    );
    
    // Check if we've completed all questions for this space
    if (questionIndex >= questionsToShow.length) {
      // All questions answered for this space
      handlers.onContinueFromSpaceQuestions(spaceId);
      return;
    }
    
    const question = questionsToShow[questionIndex];
    
    // Set up previous handler
    question._previousHandler = () => {
      if (questionIndex > 0) {
        // Go back to previous question in this space
        renderSpaceQuestions(spaceId, questionIndex - 1, config, mount, state, handlers, saveStateFn);
      } else {
        // Go back to section gates
        state.currentFlow = 'section-gates';
        state.currentSpaceIndex = state.spaceOrder ? state.spaceOrder.indexOf(spaceId) : 0;
        if (saveStateFn) saveStateFn(state);
        renderSectionGates(config, mount, state, handlers, saveStateFn);
      }
    };
    
    // Render the question
    renderJSONQuestion(
      question,
      config,
      mount,
      state,
      handlers,
      saveStateFn,
      (questionId, answer) => {
        // Store answer
        state.jsonQuestionAnswers[questionId] = answer;
        if (saveStateFn) saveStateFn(state);
      },
      () => {
        // Continue to next question in this space
        renderSpaceQuestions(spaceId, questionIndex + 1, config, mount, state, handlers, saveStateFn);
      }
    );
  }

  function renderProjectType(config, mount, state, handlers, saveStateFn) {
    // Set the current flow to project-type for proper navigation
    state.currentFlow = 'project-type';
    if (saveStateFn) saveStateFn(state);
    
    // Import design specifics questions from JS module
    // The JS file should be loaded via script tag in HTML or imported via module system
    // For now, we'll use dynamic import if available, otherwise fall back to fetch
    if (typeof window !== 'undefined' && (window.DESIGN_SPECIFICS_QUESTIONS || window.GLOBAL_QUESTIONS)) {
      // If loaded via script tag, use directly
      const questions = window.DESIGN_SPECIFICS_QUESTIONS || window.GLOBAL_QUESTIONS;
      if (questions && questions.length > 0) {
        // Resume from saved question index if available, otherwise start at 0
        const startIndex = (state.jsonQuestionIndex !== undefined && state.jsonQuestionIndex !== null) 
          ? state.jsonQuestionIndex 
          : 0;
        renderGlobalQuestions(questions, startIndex, config, mount, state, handlers, saveStateFn);
        return;
      }
    }
    
    // Fallback: try to load via fetch (for backward compatibility or if JS not loaded)
    const questionPath = config.globalQuestionsPath || config.designSpecificsPath || '../config/questions/design-specifics.js';
    // For JS files, we'd need to use import() or load via script tag
    // For now, fall back to old renderer
    console.warn('Design specifics questions JS module not found, using fallback renderer');
    renderProjectTypeFallback(config, mount, state, handlers);
  }
  
  // Fallback renderer for backward compatibility
  function renderProjectTypeFallback(config, mount, state, handlers) {
    const section = createElement('section', 'idsq-intro');
    
    // Ensure projectContext is initialized
    if (!state.projectContext) {
      state.projectContext = {};
    }
    
    // Title
    const title = createElement('h2', 'idsq-title');
    title.textContent = 'Are you designing for a new home or a remodel?';
    section.appendChild(title);
    
    const description = createElement('p', 'idsq-description');
    description.textContent = 'This helps us understand the scope of your project.';
    section.appendChild(description);
    
    // Show project type options in room selection style
    const grid = createElement('div', 'idsq-option-grid');
    if (config.projectContext && config.projectContext.type && config.projectContext.type.length === 2) {
      grid.classList.add('idsq-grid-two-items');
    }
    
    // Default project types if not in config
    const projectTypes = config.projectContext?.type || [
      { id: 'new-home', name: 'New Construction', icon: '🏗️', description: 'Building from scratch' },
      { id: 'remodel', name: 'Remodel', icon: '🔨', description: 'Updating existing space' },
    ];
    
    projectTypes.forEach((type) => {
      const card = createElement('button', 'idsq-option-card', {
        type: 'button',
      });
      card.addEventListener('click', () => {
        handlers.onSelectProjectType(type.id);
      });
      
      // Check if selected
      if (state.projectContext.projectType === type.id || state.projectType === type.id) {
        card.classList.add('idsq-selected');
        // Add checkmark overlay for selected cards
        const checkmarkOverlay = createElement('div', 'idsq-card-checkmark');
        checkmarkOverlay.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `;
        card.appendChild(checkmarkOverlay);
      }
      
      card.classList.add('idsq-space-card');
      
      const icon = createElement('div', 'idsq-space-icon');
      icon.textContent = type.icon;
      const label = createElement('div', 'idsq-option-label');
      const spaceTitle = createElement('h3', 'idsq-option-title');
      spaceTitle.textContent = type.name;
      const spaceDescription = createElement('p', 'idsq-option-description');
      spaceDescription.textContent = type.description;

      label.appendChild(spaceTitle);
      label.appendChild(spaceDescription);
      card.appendChild(icon);
      card.appendChild(label);
      grid.appendChild(card);
    });
    section.appendChild(grid);
    
    // Navigation
    const navigation = createElement('div', 'idsq-step-navigation');
    
    // Continue button only if a selection has been made
    const hasSelection = state.projectContext.projectType || state.projectType;
    if (hasSelection) {
      const continueButton = createElement('button', 'idsq-button idsq-button-primary');
      continueButton.textContent = 'Continue';
      continueButton.addEventListener('click', () => {
        handlers.onContinueFromProjectType();
      });
      navigation.appendChild(continueButton);
    }
    
    section.appendChild(navigation);
    
    showSection(mount, section, handlers);
  }

  function renderExpertQuestion(config, mount, state, handlers) {
    const section = createElement('section', 'idsq-step');
    
    // Get current expert and their questions
    const expert = state.currentExpert;
    const expertConfig = config.expertQuestions[expert];
    const questionIndex = state.currentExpertQuestion || 0;
    
    // Filter questions based on conditions and get the visible one at current index
    const visibleQuestions = getVisibleQuestions(expert, state.projectContext, config);
    const question = visibleQuestions[questionIndex];
    
    // Get the correct avatar based on expert
    const avatars = {
      aria: config.copy.ariaProfileUrl,
      clara: config.copy.claraProfileUrl,
      mason: config.copy.masonProfileUrl,
    };
    
    // Add expert mini intro
    const expertWrapper = createElement('div', 'idsq-clara-mini-wrapper');
    const expertMini = createElement('img', 'idsq-clara-mini', {
      src: avatars[expert],
      alt: expert === 'aria' ? 'Aria' : expert === 'mason' ? 'Mason' : 'Clara',
      draggable: 'false',
    });
    expertMini.addEventListener('contextmenu', (e) => e.preventDefault());
    const expertInfo = createElement('p', 'idsq-clara-info');
    const expertNames = {
      aria: 'Aria Planes · Architect',
      clara: 'Clara · Interior Design Expert',
      mason: 'Mason Grant · General Contractor',
    };
    expertInfo.innerHTML = `<span class="idsq-clara-info-name">${expert === 'aria' ? 'Aria' : expert === 'mason' ? 'Mason' : 'Clara'}</span> · ${expert === 'aria' ? 'Architect' : expert === 'mason' ? 'General Contractor' : 'Interior Design Expert'}`;
    expertWrapper.appendChild(expertMini);
    expertWrapper.appendChild(expertInfo);
    section.appendChild(expertWrapper);
    
    // Title - use intro text or prompt
    const title = createElement('h2', 'idsq-title');
    title.textContent = question.prompt || expertConfig.intro;
    section.appendChild(title);
    
    // Description if available
    if (question.description) {
      const description = createElement('p', 'idsq-description');
      description.textContent = question.description;
      section.appendChild(description);
    }
    
    // Show options
    if (question.options) {
      const grid = createElement('div', 'idsq-option-grid');
      if (question.options.length === 2) {
        grid.classList.add('idsq-grid-two-items');
      } else if (question.options.length === 4) {
        grid.classList.add('idsq-grid-four-items');
      }
      question.options.forEach((option) => {
        const card = createElement('button', 'idsq-option-card', {
          type: 'button',
        });
        card.addEventListener('click', () => {
          handlers.onSelectExpertAnswer(expert, question.id, option);
        });
        card.classList.add('idsq-space-card');
        
        const icon = createElement('div', 'idsq-space-icon');
        icon.textContent = option.icon || '○';
        const label = createElement('div', 'idsq-option-label');
        const optionTitle = createElement('h3', 'idsq-option-title');
        optionTitle.textContent = option.name;

        label.appendChild(optionTitle);
        card.appendChild(icon);
        card.appendChild(label);
        grid.appendChild(card);
      });
      section.appendChild(grid);
    }
    
    // Navigation
    const navigation = createElement('div', 'idsq-step-navigation');
    
    // Back button if not first question
    if (questionIndex > 0) {
      const backButton = createElement('button', 'idsq-button idsq-button-secondary');
      backButton.textContent = 'Previous';
      backButton.addEventListener('click', () => {
        handlers.onGoBackFromExpertQuestion();
      });
      navigation.appendChild(backButton);
    }
    
    section.appendChild(navigation);
    
    showSection(mount, section, handlers);
  }

  function renderMaterialsSelection(config, mount, state, handlers) {
    const section = createElement('section', 'idsq-step');
    
    // Add Clara mini intro
    const claraWrapper = createElement('div', 'idsq-clara-mini-wrapper');
    const claraMini = createElement('img', 'idsq-clara-mini', {
      src: config.copy.claraProfileUrl,
      alt: 'Clara',
      draggable: 'false',
    });
    claraMini.addEventListener('contextmenu', (e) => e.preventDefault());
    const claraInfo = createElement('p', 'idsq-clara-info');
    claraInfo.innerHTML = '<span class="idsq-clara-info-name">Clara</span> · Interior Design Expert';
    claraWrapper.appendChild(claraMini);
    claraWrapper.appendChild(claraInfo);
    section.appendChild(claraWrapper);
    
    const categories = config.materialsBySpace[state.selectedSpace] || [];
    
    if (categories.length === 0) {
      // No materials for this space
      const title = createElement('h2', 'idsq-title');
      title.textContent = 'Materials selection is not available for this space yet.';
      section.appendChild(title);
      showSection(mount, section, handlers);
      return;
    }
    
    const currentCategory = categories[state.currentCategoryIndex || 0];
    
    // Dynamic title based on space and category - conversational
    const spaceName = state.selectedSpace === 'bathroom' ? 'bathroom' : 
                      state.selectedSpace === 'kitchen' ? 'kitchen' : 'space';
    const title = createElement('h2', 'idsq-title');
    title.textContent = `What would you prefer for your ${spaceName} ${currentCategory.name.toLowerCase()}?`;
    section.appendChild(title);
    
    // Progress tracker - horizontal slider showing next few categories
    const progressContainer = createElement('div', 'idsq-progress-bar');
    const progressTrack = createElement('div', 'idsq-progress-track');
    
    // Show current + next 4 categories
    const startIndex = state.currentCategoryIndex;
    const endIndex = Math.min(startIndex + 5, categories.length);
    
    for (let i = startIndex; i < endIndex; i++) {
      const catMarker = createElement('div', 'idsq-progress-marker');
      catMarker.textContent = categories[i].name;
      if (i === state.currentCategoryIndex) {
        catMarker.classList.add('idsq-progress-active');
      } else if (i < state.currentCategoryIndex) {
        catMarker.classList.add('idsq-progress-completed');
      } else {
        catMarker.classList.add('idsq-progress-upcoming');
      }
      progressTrack.appendChild(catMarker);
      
      // Add separator after each marker except the last
      if (i < endIndex - 1) {
        const separator = createElement('div', 'idsq-progress-separator');
        separator.textContent = '→';
        if (i === state.currentCategoryIndex) {
          separator.classList.add('idsq-progress-separator-after-active');
        }
        progressTrack.appendChild(separator);
      }
    }
    
    progressContainer.appendChild(progressTrack);
    section.appendChild(progressContainer);
    
    // Add helpful instruction text
    const instruction = createElement('p', 'idsq-instruction');
    const instructionVariants = [
      'Follow your instincts—choose the space that feels like home to you.',
      'Follow your gut—what catches your eye?',
      'Go with your first instinct—which one feels right?',
      'What draws you in? Choose what feels right.'
    ];
    const instructionIndex = state.currentCategoryIndex % instructionVariants.length;
    instruction.textContent = instructionVariants[instructionIndex];
    section.appendChild(instruction);
    
    // Initialize round tracking for this category
    if (!state.materialsSelections[currentCategory.id]) {
      state.materialsSelections[currentCategory.id] = {
        round: 1,
        winners: [],
      };
    }
    
    const categoryState = state.materialsSelections[currentCategory.id];
    
    // Round 3 shows the two winners from rounds 1 and 2
    let options;
    if (categoryState.round === 3) {
      options = categoryState.winners.slice(0, 2);
    } else {
      options = generateMaterialOptions(currentCategory.id, state.finalStyle.styleId, categoryState.round);
    }
    
    // Images grid matching quiz format
    const grid = createElement('div', 'idsq-option-grid');
    if (options.length === 2) {
      grid.classList.add('idsq-grid-two-items');
    }
    options.forEach((option) => {
      const card = createElement('button', 'idsq-option-card', {
        type: 'button',
      });
      card.addEventListener('click', () => {
        handlers.onSelectMaterial(currentCategory.id, option, categoryState.round);
      });
      
      const image = createElement('img', 'idsq-option-image', {
        src: option.imageUrl,
        alt: option.name,
        loading: 'lazy',
        draggable: 'false',
      });
      image.addEventListener('contextmenu', (e) => e.preventDefault());
      
      // No labels/captions - just images like the quiz
      card.appendChild(image);
      grid.appendChild(card);
    });
    section.appendChild(grid);
    
    // Navigation matching quiz format
    const navigation = createElement('div', 'idsq-step-navigation');
    
    // Back button (only show if not on first category and first round)
    if (state.currentCategoryIndex > 0 || categoryState.round > 1) {
      const backButton = createElement('button', 'idsq-button idsq-button-secondary');
      backButton.textContent = 'Previous';
      backButton.addEventListener('click', () => {
        handlers.onGoBackMaterial();
      });
      navigation.appendChild(backButton);
    }
    
    section.appendChild(navigation);
    
    showSection(mount, section, handlers);
  }

  function renderMaterialReview(config, mount, state, handlers) {
    const section = createElement('section', 'idsq-step');
    
    // Clara intro
    const claraWrapper = createElement('div', 'idsq-clara-mini-wrapper');
    const claraMini = createElement('img', 'idsq-clara-mini', {
      src: config.copy.claraProfileUrl,
      alt: 'Clara',
      draggable: 'false',
    });
    claraMini.addEventListener('contextmenu', (e) => e.preventDefault());
    const claraInfo = createElement('p', 'idsq-clara-info');
    claraInfo.innerHTML = '<span class="idsq-clara-info-name">Clara</span> · Interior Design Expert';
    claraWrapper.appendChild(claraMini);
    claraWrapper.appendChild(claraInfo);
    section.appendChild(claraWrapper);
    
    const currentCategory = config.materialsBySpace[state.selectedSpace][state.currentCategoryIndex];
    const categoryState = state.materialsSelections[currentCategory.id];
    
    const title = createElement('h2', 'idsq-title');
    const spaceName = state.selectedSpace === 'bathroom' ? 'bathroom' : 
                      state.selectedSpace === 'kitchen' ? 'kitchen' : 'space';
    title.textContent = `Review your ${currentCategory.name.toLowerCase()} selection for your ${spaceName}`;
    section.appendChild(title);
    
    // Show final selection with larger image
    const imageContainer = createElement('div', 'idsq-final-single-container');
    const img = createElement('img', 'idsq-final-single-image', {
      src: categoryState.finalSelection.imageUrl,
      alt: categoryState.finalSelection.name,
      loading: 'lazy',
      draggable: 'false',
    });
    img.addEventListener('contextmenu', (e) => e.preventDefault());
    imageContainer.appendChild(img);
    section.appendChild(imageContainer);
    
    // Navigation
    const navigation = createElement('div', 'idsq-step-navigation');
    
    const reselectButton = createElement('button', 'idsq-button idsq-button-secondary');
    reselectButton.textContent = 'Reselect';
    reselectButton.addEventListener('click', () => {
      handlers.onReselectMaterial();
    });
    navigation.appendChild(reselectButton);
    
    const confirmButton = createElement('button', 'idsq-button idsq-button-primary');
    confirmButton.textContent = 'Confirm & Continue →';
    confirmButton.addEventListener('click', () => {
      handlers.onConfirmMaterialSelection();
    });
    navigation.appendChild(confirmButton);
    
    section.appendChild(navigation);
    
    showSection(mount, section, handlers);
  }

  function renderMaterialsComplete(config, mount, state, handlers) {
    const section = createElement('section', 'idsq-success');
    
    const claraWrapper = createElement('div', 'idsq-clara-mini-wrapper');
    const claraMini = createElement('img', 'idsq-clara-mini', {
      src: config.copy.claraProfileUrl,
      alt: 'Clara',
      draggable: 'false',
    });
    claraMini.addEventListener('contextmenu', (e) => e.preventDefault());
    const claraInfo = createElement('p', 'idsq-clara-info');
    claraInfo.innerHTML = '<span class="idsq-clara-info-name">Clara</span> · Interior Design Expert';
    claraWrapper.appendChild(claraMini);
    claraWrapper.appendChild(claraInfo);
    
    const title = createElement('h2', 'idsq-final-title');
    title.textContent = 'Your Perfect Space is Taking Shape!';
    
    const description = createElement('p', 'idsq-description');
    description.textContent = 'You\'ve selected all your materials and finishes. Let\'s bring your vision to life!';
    
    const cta = createElement('div', 'idsq-schedule-cta');
    const ctaTitle = createElement('h3', 'idsq-schedule-cta-title');
    ctaTitle.textContent = 'Ready to get started?';
    cta.appendChild(ctaTitle);
    
    const buttonContainer = createElement('div', 'idsq-button-container idsq-success-buttons');
    const scheduleButton = createElement('a', 'idsq-button idsq-button-primary', {
      href: 'https://www.jlcoates.com/interior-design/contact',
      target: '_blank',
      rel: 'noopener noreferrer',
    });
    scheduleButton.textContent = 'Schedule Your Consultation';
    
    buttonContainer.appendChild(scheduleButton);
    
    section.appendChild(claraWrapper);
    section.appendChild(title);
    section.appendChild(description);
    section.appendChild(cta);
    section.appendChild(buttonContainer);
    
    showSection(mount, section, handlers);
  }

  function buildQuiz(userConfig = {}) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }
    const config = deepMerge(DEFAULT_CONFIG, userConfig);
    const mount = document.querySelector(config.mountSelector);
    if (!mount) {
      console.warn(`[IDSQ] Could not find mount element "${config.mountSelector}".`);
      return;
    }
    mount.id = 'idsq';
    injectFont(config);
    injectStyles(config);
    
    // Add global right-click protection for images
    mount.addEventListener('contextmenu', (e) => {
      if (e.target.tagName === 'IMG' && (e.target.classList.contains('idsq-option-image') || e.target.classList.contains('idsq-final-single-image') || e.target.classList.contains('idsq-final-image'))) {
        e.preventDefault();
      }
    });

    // Load saved state from localStorage
    const loadState = () => {
      try {
        const saved = localStorage.getItem('idsq-quiz-progress');
        return saved ? JSON.parse(saved) : null;
      } catch (e) {
        return null;
      }
    };
    
    // Save state to localStorage
    const saveState = (stateToSave) => {
      try {
        localStorage.setItem('idsq-quiz-progress', JSON.stringify(stateToSave));
      } catch (e) {
        console.warn('[IDSQ] Could not save progress to localStorage');
      }
    };
    
    // Clear saved state
    const clearState = () => {
      try {
        localStorage.removeItem('idsq-quiz-progress');
      } catch (e) {
        console.warn('[IDSQ] Could not clear progress from localStorage');
      }
    };
    
    const savedState = loadState();
    
    // Check URL parameters for invitation status and name
    const urlParams = new URLSearchParams(window.location.search);
    const urlRid = urlParams.get('rid');
    const urlCp = urlParams.get('cp');
    const urlName = urlParams.get('name');
    const isInvited = !!(urlRid || urlCp);
    
    // Pre-fill name from URL if provided
    const urlParticipantName = urlName ? decodeURIComponent(urlName.trim()) : null;
    
    // Generate project ID if starting fresh
    const generateProjectId = () => {
      return 'proj_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    };

    const CATEGORY_FLAGS_TEMPLATE = {
      backsplash_use_slab: false,
      backsplash_slab_source: null, // "countertop" | "wall-slab-only"
      requires_heavy_slab_handling: false,
      requires_ducted_hood: false,
      panel_ready_appliances: false,
      apron_sink_requires_base_mod: false,
      restrict_wall_mount_faucet: false,
      restrict_freestanding_tub: false,
      heated_floor_desired: false
    };

    const state = savedState || {
      currentFlow: 'intro', // intro -> name -> space-selection -> word-association -> quiz -> lead -> final
      currentStep: -1,
      selectedSpace: null,
      participantName: urlParticipantName || null,
      wordChoice: null,
      choices: [],
      topStyles: [],
      finalStyle: null,
      leadData: {},
      newsLetterSignup: false,
      invited: isInvited,
      rid: urlRid || null,
      cp: urlCp || null,
      // Whole-home materials selection state
      projectId: generateProjectId(),
      userId: null, // Future: Webflow Member ID
      projectType: null, // 'new-home' | 'remodel'
      buildType: null, // 'custom' | 'builder-spec'
      routeMode: null, // 'express' | 'standard' | 'deep'
      spacesRequested: [], // Core spaces: Kitchen, Living Room, Primary Bedroom, Primary Bathroom, General Interior, General Exterior
      selectedCategories: {}, // Selected categories by section gate: { section_gate_gi: ['flooring', 'baseboards', ...] }
      jsonQuestionAnswers: {}, // Answers to JSON-based questions: { question_id: answer_id or [answer_ids] }
      additionalSpaces: [], // Duplicate spaces with quantity: [{ type: "Bedroom", count: 2, duplicateFrom: "Primary Bedroom", override: false }]
      duplicateRules: {
        allowDuplicateSpace: true,
        fieldsToClone: ["style", "finishFamilies", "fixtures", "qualifiers"],
        quantityForIdentical: true,
        allowPerInstanceOverrides: true
      },
      expertAnswers: {}, // Structured by space: { Kitchen: { aria: {}, clara: {}, mason: {} }, ... }
      categorySelectionBySpace: {}, // { Kitchen: { flooring: {}, backsplash: {}, ... }, ... }
      categoryFlags: { ...CATEGORY_FLAGS_TEMPLATE },
      deferredDecisions: [], // [{ category: "Backsplash", decision: "Use slab", resolvesIn: "Countertops" }]
      currentSpace: null, // Which space user is currently working on
      currentCategory: null, // Which category in current space
      currentCategoryIndex: 0, // Index in categories array for current space
      projectContext: {}, // Project type answers and context
      currentExpert: null, // 'aria' | 'clara' | 'mason'
      currentExpertQuestion: 0, // Index of current question for current expert
      materialsSelections: {}, // Material selections per category (legacy: by category ID, new: by space + category)
      categoryQualifiers: {}, // Qualifier answers per space + category: { Kitchen: { backsplash: { BACK_Q1: "blend", ... } } }
      lastSaved: null, // Timestamp for save/resume
      spaceOrder: [], // Order in which spaces will be processed
      completedSpaces: [], // Array of space IDs that have been completed
      currentSpaceIndex: null, // Current index in spaceOrder for section gates
      currentSpaceQuestionIndex: {}, // Current question index per space: { spaceId: index }
      jsonQuestionUrls: {}, // URLs for questions that require them: { questionId: { optionId: 'url', ... } }
      jsonQuestionIndex: null, // Current question index for resume functionality
    };

    // Ensure new fields exist in savedState (backward compatibility)
    if (savedState) {
      if (!savedState.projectId) savedState.projectId = generateProjectId();
      if (!savedState.buildType) savedState.buildType = null;
      if (!savedState.routeMode) savedState.routeMode = null;
      if (!savedState.selectedCategories) savedState.selectedCategories = {};
      if (!savedState.jsonQuestionAnswers) savedState.jsonQuestionAnswers = {};
      if (!savedState.spacesRequested) savedState.spacesRequested = [];
      if (!savedState.additionalSpaces) savedState.additionalSpaces = [];
      if (!savedState.duplicateRules) savedState.duplicateRules = {
        allowDuplicateSpace: true,
        fieldsToClone: ["style", "finishFamilies", "fixtures", "qualifiers"],
        quantityForIdentical: true,
        allowPerInstanceOverrides: true
      };
      if (!savedState.expertAnswers) savedState.expertAnswers = {};
      if (!savedState.categorySelectionBySpace) savedState.categorySelectionBySpace = {};
      if (!savedState.categoryFlags) savedState.categoryFlags = { ...CATEGORY_FLAGS_TEMPLATE };
      if (!savedState.deferredDecisions) savedState.deferredDecisions = [];
      if (savedState.currentSpace === undefined) savedState.currentSpace = null;
      if (savedState.currentCategory === undefined) savedState.currentCategory = null;
      if (!savedState.categoryQualifiers) savedState.categoryQualifiers = {};
      if (!savedState.spaceOrder) savedState.spaceOrder = [];
      if (!savedState.completedSpaces) savedState.completedSpaces = [];
      if (!savedState.jsonQuestionUrls) savedState.jsonQuestionUrls = {};
    }
    
    // If state was loaded but URL has new invitation params, update them
    if (savedState) {
      if (urlRid || urlCp) {
        state.invited = true;
        state.rid = urlRid || state.rid;
        state.cp = urlCp || state.cp;
      }
      if (urlParticipantName && !state.participantName) {
        state.participantName = urlParticipantName;
      }
    }

    // Test mode: skip quiz and start at expert intro
    if (config.testMode && config.testData) {
      Object.assign(state, config.testData);
      state.currentFlow = 'expert-intro';
      // Ensure projectContext exists (may be empty for testing)
      if (!state.projectContext) state.projectContext = {};
      // Initialize expert question tracking
      if (state.currentExpert === undefined) state.currentExpert = 'aria';
      if (state.currentExpertQuestion === undefined) state.currentExpertQuestion = 0;
      // Initialize materials selections if not provided
      if (!state.materialsSelections) state.materialsSelections = {};
      // Initialize expert answers structure if not provided
      if (!state.expertAnswers) state.expertAnswers = {};
      if (!state.categorySelectionBySpace) state.categorySelectionBySpace = {};
      if (!state.categoryQualifiers) state.categoryQualifiers = {};
      saveState(state);
    }

    function getStepsForSpace(spaceId) {
      const explicit = config.stepsBySpace && (config.stepsBySpace[spaceId] || config.stepsBySpace['general']);
      if (explicit && explicit.length >= 4) return explicit;
      // Fallback to dynamic steps to ensure 12-style coverage
      return buildDynamicStepsFromLibrary(config.styleLibrary, spaceId);
    }
    
    function getPersonalizedPrompt(basePrompt) {
      if (state.participantName) {
        return basePrompt.replace(/\b(Which|What|Select|Choose|Pick)\b/, (match) => {
          return match;
        }) + (basePrompt.includes('?') ? '' : ', ' + state.participantName + '?');
      }
      return basePrompt;
    }

    function resetStateToIntro(preserveInvitation = true) {
      const preservedRid = preserveInvitation ? state.rid : null;
      const preservedCp = preserveInvitation ? state.cp : null;
      const preservedInvited = preserveInvitation ? state.invited : false;

      Object.assign(state, {
        currentFlow: 'intro',
        currentStep: -1,
        selectedSpace: null,
        participantName: urlParticipantName || null,
        wordChoice: null,
        choices: [],
        topStyles: [],
        finalStyle: null,
        leadData: {},
        newsLetterSignup: false,
        projectType: null,
        buildType: null,
        routeMode: null,
        selectedCategories: {},
        jsonQuestionAnswers: {},
        spacesRequested: [],
        additionalSpaces: [],
        duplicateRules: state.duplicateRules || {
          allowDuplicateSpace: true,
          fieldsToClone: ["style", "finishFamilies", "fixtures", "qualifiers"],
          quantityForIdentical: true,
          allowPerInstanceOverrides: true
        },
        expertAnswers: {},
        categorySelectionBySpace: {},
        categoryFlags: { ...CATEGORY_FLAGS_TEMPLATE },
        deferredDecisions: [],
        currentSpace: null,
        currentCategory: null,
        currentCategoryIndex: 0,
        projectContext: {},
        currentExpert: null,
        currentExpertQuestion: 0,
        materialsSelections: {},
        categoryQualifiers: {},
        lastSaved: null,
        spaceOrder: [],
        completedSpaces: []
      });

      state.projectId = generateProjectId();
      state.userId = null;
      if (preserveInvitation) {
        state.rid = preservedRid || urlRid || null;
        state.cp = preservedCp || urlCp || null;
        state.invited = !!(state.rid || state.cp || preservedInvited);
      } else {
        state.rid = null;
        state.cp = null;
        state.invited = false;
      }
    }

    function resetMaterialFlowToExpertIntro() {
      state.projectType = null;
      state.projectContext = {};
      state.currentExpert = 'aria';
      state.currentExpertQuestion = 0;
      state.materialsSelections = {};
      state.categorySelectionBySpace = {};
      state.categoryQualifiers = {};
      state.categoryFlags = { ...CATEGORY_FLAGS_TEMPLATE };
      state.deferredDecisions = [];
      state.currentSpace = null;
      state.currentCategory = null;
      state.currentCategoryIndex = 0;
      state.spaceOrder = [];
      state.completedSpaces = [];
      state.lastSaved = null;
      state.currentFlow = 'expert-intro';
      saveState(state);
      renderExpertIntro(config, mount, state, handlers);
    }

    const handlers = {
      _saveState: saveState, // Make saveState available to handlers
      onStart() {
        // Skip name capture if user is invited with a name already provided, or if we have name but no email and not invited
        if (state.participantName && (state.invited || state.leadData?.email)) {
          state.currentFlow = 'space-selection';
          saveState(state);
          renderSpaceSelection(config, mount, state, handlers);
        } else {
          state.currentFlow = 'name-capture';
          saveState(state);
          renderNameCapture(config, mount, handlers);
        }
      },
      onSubmitName(name) {
        state.participantName = name;
        state.currentFlow = 'space-selection';
        saveState(state);
        renderSpaceSelection(config, mount, state, handlers);
      },
      onSelectSpace(spaceId) {
        state.selectedSpace = spaceId;
        state.choices = [];
        state.wordChoice = null;

        if (spaceId === 'general') {
          state.currentFlow = 'whole-home-selection';
          ensureSpacesRequested(state);
          if (!state.spacesRequested || state.spacesRequested.length === 0) {
            state.spacesRequested = WHOLE_HOME_DEFAULT_SPACES.map((space) => ({ ...space }));
          }
          state.currentSpace = null;
          saveState(state);
          renderWholeHomeSpaceSelection(config, mount, state, handlers, saveState);
          return;
        }

        state.currentFlow = 'word-association';
        saveState(state);
        renderWordAssociation(config, mount, state, handlers);
      },
      onSelectWord(wordData) {
        state.wordChoice = wordData;
        state.currentFlow = 'quiz';
        state.currentStep = 0;
        saveState(state);
        const steps = getStepsForSpace(state.selectedSpace);
        renderStep(config, mount, state, handlers, steps);
      },
      onContinueFromWholeHomeSelection() {
        if (!state.spacesRequested || state.spacesRequested.length === 0) {
          return;
        }
        // Route to style quiz (word association + quiz rounds) first
        state.currentFlow = 'word-association';
        state.selectedSpace = 'general';
        state.spaceOrder = state.spacesRequested.map((space) => normalizeSpaceId(space.id));
        state.currentSpace = state.spaceOrder[0] || 'general';
        state.currentStep = 0;
        state.wordChoice = null;
        state.choices = [];
        saveState(state);
        renderWordAssociation(config, mount, state, handlers);
      },
      onSelectOption(option) {
        state.choices[state.currentStep] = option;
        saveState(state);
        const steps = getStepsForSpace(state.selectedSpace);
        if (state.currentStep < steps.length - 1) {
          // Show a milestone tip between rounds
          if (state.currentStep === 0) {
            // Just completed round 1
            renderMilestoneTip(config, mount, state.selectedSpace, 1, () => {
          state.currentStep += 1;
              saveState(state);
              renderStep(config, mount, state, handlers, steps);
            }, handlers);
          } else if (state.currentStep === 1) {
            // Just completed round 2
            renderMilestoneTip(config, mount, state.selectedSpace, 2, () => {
              state.currentStep += 1;
              saveState(state);
              renderStep(config, mount, state, handlers, steps);
            }, handlers);
          } else if (state.currentStep === 2) {
            // Just completed round 3
            renderMilestoneTip(config, mount, state.selectedSpace, 3, () => {
              state.currentStep += 1;
              saveState(state);
              renderStep(config, mount, state, handlers, steps);
            }, handlers);
        } else {
            state.currentStep += 1;
            saveState(state);
            renderStep(config, mount, state, handlers, steps);
          }
        } else {
          // On the last step (round 4), use the same logic as the "Next" button
          // This ensures we check for existing name/email and skip newsletter if already provided
          handlers.onProceedToFinal();
        }
      },
      onSubmitLead(leadData) {
        // Update or merge leadData to preserve existing data
        state.leadData = {
          ...state.leadData,
          ...leadData,
        };
        // If name was provided in lead form, update participantName
        if (leadData.name && leadData.name.trim()) {
          state.participantName = leadData.name.trim();
        }
        state.newsLetterSignup = !!leadData.newsLetterSignup;
        state.currentFlow = 'final-selection';
        saveState(state);
        renderFinalSelection(config, mount, state, handlers);
      },
      async onSelectFinal(styleResult) {
        const definition = config.styleLibrary[styleResult.styleId];
        state.finalStyle = {
          ...styleResult,
          ...definition,
        };

        // Fire-and-forget webhook; do not block UI
        const payload = buildWebhookPayload(config, state);
        sendToWebhook(config, payload).catch(() => {
          // Silently fail - don't interrupt user experience
        });
        
        // Always show success page first to display the final style result
        // The success page will have a "Continue" button for Whole Home that routes to Expert Intro
        state.currentFlow = 'success';
        saveState(state);
        renderSuccess(config, mount, state, handlers);
      },
      onGoBack() {
        // Handle project-type flow (global questions / design specifics)
        if (state.currentFlow === 'project-type') {
          state.currentFlow = 'expert-intro';
          saveState(state);
          renderExpertIntro(config, mount, state, handlers);
          return;
        }
        
        // Handle section-gates flow
        if (state.currentFlow === 'section-gates') {
          // Go back to global questions
          state.currentFlow = 'project-type';
          state.spaceOrder = null;
          state.currentSpaceIndex = null;
          saveState(state);
          renderProjectType(config, mount, state, handlers, saveState);
          return;
        }
        
        // Handle space-questions flow
        if (state.currentFlow === 'space-questions') {
          // Go back to section gates
          state.currentFlow = 'section-gates';
          state.currentSpace = null;
          saveState(state);
          renderSectionGates(config, mount, state, handlers, saveState);
          return;
        }
        
        if (state.currentStep > 0) {
          state.currentStep -= 1;
          saveState(state);
          const steps = getStepsForSpace(state.selectedSpace);
          renderStep(config, mount, state, handlers, steps);
        } else if (state.currentFlow === 'quiz') {
          // Go back to word association
          state.currentFlow = 'word-association';
          saveState(state);
          renderWordAssociation(config, mount, state, handlers);
        } else if (state.currentFlow === 'word-association') {
          // Go back to space selection (or whole-home selection if applicable)
          if (state.selectedSpace === 'general') {
            state.currentFlow = 'whole-home-selection';
            saveState(state);
            renderWholeHomeSpaceSelection(config, mount, state, handlers, saveState);
          } else {
            state.currentFlow = 'space-selection';
            saveState(state);
            renderSpaceSelection(config, mount, state, handlers);
          }
        } else if (state.currentFlow === 'whole-home-selection') {
          state.currentFlow = 'space-selection';
          saveState(state);
          renderSpaceSelection(config, mount, state, handlers);
        }
      },
      onGoBackToLastStep() {
        // Go back from final selection to round 4 (last quiz step)
        state.currentFlow = 'quiz';
        const steps = getStepsForSpace(state.selectedSpace);
        state.currentStep = steps.length - 1;
        saveState(state);
        renderStep(config, mount, state, handlers, steps);
      },
      onProceed() {
        const steps = getStepsForSpace(state.selectedSpace);
        if (state.currentStep < steps.length - 1) {
          state.currentStep += 1;
          saveState(state);
          renderStep(config, mount, state, handlers, steps);
        }
      },
      onProceedToFinal() {
        // Check if name and email are already filled - if so, skip newsletter signup
        // Name can be in multiple places: participantName, leadData.participantName, or leadData.name
        const hasName = state.participantName || 
                       (state.leadData && state.leadData.participantName) || 
                       (state.leadData && state.leadData.name && state.leadData.name.trim());
        const hasEmail = state.leadData && state.leadData.email && state.leadData.email.trim();
        
        const { results, map } = calculateTopStyles(config, state.choices, state.wordChoice);
        state.topStyles = results;
        state.styleScores = map;
        saveState(state);
        
        // If user is invited (rid/cp in URL), skip newsletter signup entirely
        // Also skip if both name and email are already present
        if ((state.invited && hasName) || (hasName && hasEmail)) {
          // Auto-submit the existing lead data - use the actual name/email values, not just truthy check
          const actualName = state.participantName || (state.leadData && state.leadData.participantName) || (state.leadData && state.leadData.name);
          const actualEmail = (state.leadData && state.leadData.email) || null;
          const leadPayload = {
            name: actualName,
            email: actualEmail,
            newsLetterSignup: state.leadData?.newsLetterSignup || false,
          };
          handlers.onSubmitLead(leadPayload);
        } else if (config.leadCapture.enable && !state.invited) {
          // Still need to collect info, show newsletter form (but not for invited users)
          state.currentFlow = 'lead-capture';
          saveState(state);
          handlers._state = state;
          renderLeadCapture(config, mount, handlers);
        } else {
          // No lead capture or invited user, go directly to final selection
          state.currentFlow = 'final-selection';
          saveState(state);
          renderFinalSelection(config, mount, state, handlers);
        }
      },
      onRestart() {
        clearState();
        resetStateToIntro(true);
        saveState(state);
        renderIntro(config, mount, handlers);
      },
      onRestartSection() {
        const flow = state.currentFlow;
        const earlyFlows = ['intro', 'name-capture', 'space-selection', 'whole-home-selection'];
        if (!flow || earlyFlows.includes(flow)) {
          handlers.onRestart();
          return;
        }

        if (flow === 'word-association') {
          state.wordChoice = null;
          state.currentFlow = 'word-association';
          saveState(state);
          renderWordAssociation(config, mount, state, handlers);
          return;
        }

        if (flow === 'quiz') {
          state.currentStep = 0;
          state.choices = [];
          state.currentFlow = 'quiz';
          saveState(state);
          const steps = getStepsForSpace(state.selectedSpace);
          renderStep(config, mount, state, handlers, steps);
          return;
        }

        // For all flows after the style quiz (expert-intro, project-type, materials-selection, etc.)
        // Reset to expert-intro and clear all state that happened after the style quiz
        // Keep: participantName, selectedSpace, spacesRequested, wordChoice, choices, finalStyle, topStyles
        // Clear: everything from expert-intro onwards
        
        // Clear global questions and design specifics
        state.jsonQuestionAnswers = {};
        state.jsonQuestionUrls = {};
        state.projectType = null;
        state.buildType = null;
        state.routeMode = null;
        state.selectedCategories = {};
        state.projectContext = {};
        
        // Clear materials selection state
        state.currentExpert = 'aria';
        state.currentExpertQuestion = 0;
        state.materialsSelections = {};
        state.categorySelectionBySpace = {};
        state.categoryQualifiers = {};
        state.categoryFlags = { ...CATEGORY_FLAGS_TEMPLATE };
        state.deferredDecisions = [];
        state.currentSpace = null;
        state.currentCategory = null;
        state.currentCategoryIndex = 0;
        state.spaceOrder = [];
        state.completedSpaces = [];
        state.lastSaved = null;
        
        // Go back to expert-intro (Meet the Team)
        state.currentFlow = 'expert-intro';
        saveState(state);
        renderExpertIntro(config, mount, state, handlers);
      },
      onSelectMaterials() {
        // Start expert-guided flow with intro
        state.currentFlow = 'expert-intro';
        state.projectContext = {};
        state.currentExpert = 'aria';
        state.currentExpertQuestion = 0;
        state.materialsSelections = {};
        saveState(state);
        renderExpertIntro(config, mount, state, handlers);
      },
      onContinueFromExpertIntro() {
        // For both Whole Home and single spaces, route to Global Questions first if not answered yet
        // Then Global Questions will route to Section Gates → Space Questions → Materials
        if (!state.jsonQuestionAnswers?.route_mode) {
          // Haven't answered global questions yet, route to them
          state.currentFlow = 'project-type';
          saveState(state);
          renderProjectType(config, mount, state, handlers, saveState);
          return;
        }
        
        // If global questions are already answered, this shouldn't happen in normal flow
        // But if it does, route based on route_mode
        const routeMode = state.routeMode || state.jsonQuestionAnswers?.route_mode || state.projectContext?.routeMode;
        
        // Default to express if routeMode is not set (for backward compatibility)
        if (!routeMode || routeMode === 'express') {
          // Express: Skip to materials selection
          state.currentFlow = 'materials-selection';
          state.currentCategoryIndex = 0;
          saveState(state);
          renderMaterialsSelection(config, mount, state, handlers);
        } else {
          // Standard or Deep: Should have already gone through section gates
          // This is a fallback - route to section gates
          state.currentFlow = 'section-gates';
          state.spaceOrder = null;
          state.currentSpaceIndex = null;
          saveState(state);
          renderSectionGates(config, mount, state, handlers, saveState);
        }
      },
      onSelectProjectType(typeId) {
        // Save project type selection
        state.projectContext.projectType = typeId;
        saveState(state);
        // Auto-advance to next question like quiz does
        state.currentFlow = 'project-context';
        state.currentExpert = 'aria';
        state.currentExpertQuestion = 0;
        saveState(state);
        renderExpertQuestion(config, mount, state, handlers);
      },
      onContinueFromProjectType() {
        // Move to expert questions
        state.currentFlow = 'project-context';
        state.currentExpert = 'aria';
        state.currentExpertQuestion = 0;
        saveState(state);
        renderExpertQuestion(config, mount, state, handlers);
      },
      onContinueFromGlobalQuestions() {
        // After all global questions are answered, check route mode and proceed accordingly
        if (!state.projectContext) {
          state.projectContext = {};
        }
        // Ensure projectContext has the answers from JSON questions
        if (state.jsonQuestionAnswers && state.jsonQuestionAnswers.project_type) {
          state.projectContext.projectType = { id: state.jsonQuestionAnswers.project_type };
          state.projectType = state.jsonQuestionAnswers.project_type;
        }
        if (state.jsonQuestionAnswers && state.jsonQuestionAnswers.build_type) {
          state.projectContext.buildType = { id: state.jsonQuestionAnswers.build_type };
          state.buildType = state.jsonQuestionAnswers.build_type;
        }
        if (state.jsonQuestionAnswers && state.jsonQuestionAnswers.route_mode) {
          state.projectContext.routeMode = state.jsonQuestionAnswers.route_mode;
          state.routeMode = state.jsonQuestionAnswers.route_mode;
        }
        
        // For both Whole Home and single spaces, show section gates first
        // Then route based on routeMode (Express → Materials, Standard/Deep → Space Questions → Materials)
        
        // Initialize spacesRequested for single spaces if not already set
        if (state.selectedSpace !== 'general') {
          // Single space selected - initialize spacesRequested with just this space
          if (!state.spacesRequested || state.spacesRequested.length === 0) {
            const spaceInfo = config.spaceTypes?.find(s => s.id === state.selectedSpace);
            state.spacesRequested = [{
              id: normalizeSpaceId(state.selectedSpace),
              name: spaceInfo?.name || state.selectedSpace
            }];
          }
        }
        
        // Reset space order and index for section gates
        state.spaceOrder = null;
        state.currentSpaceIndex = null;
        state.currentSpaceQuestionIndex = {};
        saveState(state);
        renderSectionGates(config, mount, state, handlers, saveState);
      },
      onContinueFromSectionGates() {
        // Section gates completed, now route based on routeMode
        const routeMode = state.routeMode || state.jsonQuestionAnswers?.route_mode || state.projectContext?.routeMode;
        
        if (routeMode === 'express') {
          // Express: Skip questions, go directly to materials selection
          state.currentFlow = 'materials-selection';
          state.currentCategoryIndex = 0;
          saveState(state);
          renderMaterialsSelection(config, mount, state, handlers);
        } else {
          // Standard or Deep: Show space-specific questions
          // Start with first space
          state.currentSpaceIndex = 0;
          state.currentSpaceQuestionIndex = {};
          if (state.spaceOrder && state.spaceOrder.length > 0) {
            const firstSpaceId = state.spaceOrder[0];
            renderSpaceQuestions(firstSpaceId, 0, config, mount, state, handlers, saveState);
          } else {
            // No spaces, go to materials
            state.currentFlow = 'materials-selection';
            state.currentCategoryIndex = 0;
            saveState(state);
            renderMaterialsSelection(config, mount, state, handlers);
          }
        }
      },
      onContinueFromSpaceQuestions(completedSpaceId) {
        // Questions completed for a space, move to next space or materials
        const currentSpaceIndex = state.currentSpaceIndex || 0;
        const spaceOrder = state.spaceOrder || [];
        
        // Mark this space as completed
        if (!state.completedSpaces) state.completedSpaces = [];
        if (!state.completedSpaces.includes(completedSpaceId)) {
          state.completedSpaces.push(completedSpaceId);
        }
        
        // Check if there are more spaces
        const nextSpaceIndex = currentSpaceIndex + 1;
        if (nextSpaceIndex < spaceOrder.length) {
          // Move to next space
          state.currentSpaceIndex = nextSpaceIndex;
          const nextSpaceId = spaceOrder[nextSpaceIndex];
          renderSpaceQuestions(nextSpaceId, 0, config, mount, state, handlers, saveState);
        } else {
          // All spaces completed, go to materials selection
          state.currentFlow = 'materials-selection';
          state.currentCategoryIndex = 0;
          saveState(state);
          renderMaterialsSelection(config, mount, state, handlers);
        }
      },
      onGoBackFromExpertQuestion() {
        state.currentExpertQuestion -= 1;
        saveState(state);
        renderExpertQuestion(config, mount, state, handlers);
      },
      onSelectExpertAnswer(expert, questionId, answer) {
        // Save answer
        if (!state.projectContext[expert]) {
          state.projectContext[expert] = {};
        }
        state.projectContext[expert][questionId] = answer;
        
        // Check if more questions for this expert (use visible questions count)
        const visibleQuestions = getVisibleQuestions(expert, state.projectContext, config);
        const questionIndex = state.currentExpertQuestion || 0;
        
        if (questionIndex < visibleQuestions.length - 1) {
          // More questions for this expert
          state.currentExpertQuestion += 1;
          saveState(state);
          renderExpertQuestion(config, mount, state, handlers);
        } else {
          // Done with this expert, move to next
          const expertOrder = ['aria', 'clara', 'mason'];
          const currentIndex = expertOrder.indexOf(expert);
          
          if (currentIndex < expertOrder.length - 1) {
            // Move to next expert
            state.currentExpert = expertOrder[currentIndex + 1];
            state.currentExpertQuestion = 0;
            saveState(state);
            renderExpertQuestion(config, mount, state, handlers);
          } else {
            // All experts done, start materials selection
            state.currentFlow = 'materials-selection';
            state.currentCategoryIndex = 0;
            saveState(state);
            renderMaterialsSelection(config, mount, state, handlers);
          }
        }
      },
      onSelectMaterial(categoryId, option, roundNumber) {
        // Track the selected option
        const categoryState = state.materialsSelections[categoryId];
        categoryState.winners.push(option);
        saveState(state);
        
        if (roundNumber === 1 || roundNumber === 2) {
          // Round 1 or 2: move to next round
          categoryState.round += 1;
          saveState(state);
          renderMaterialsSelection(config, mount, state, handlers);
        } else if (roundNumber === 3) {
          // Final round: show review screen
          categoryState.finalSelection = option;
          saveState(state);
          renderMaterialReview(config, mount, state, handlers);
        }
      },
      onGoBackMaterial() {
        const currentCategoryId = config.materialsBySpace[state.selectedSpace][state.currentCategoryIndex].id;
        const categoryState = state.materialsSelections[currentCategoryId];
        
        if (categoryState.round > 1) {
          // Go back to previous round in same category
          categoryState.round -= 1;
          categoryState.winners.pop(); // Remove last selection
          saveState(state);
          renderMaterialsSelection(config, mount, state, handlers);
        } else if (state.currentCategoryIndex > 0) {
          // Go back to previous category
          state.currentCategoryIndex -= 1;
          const prevCategoryId = config.materialsBySpace[state.selectedSpace][state.currentCategoryIndex].id;
          const prevCategoryState = state.materialsSelections[prevCategoryId];
          if (prevCategoryState && prevCategoryState.round > 1) {
            prevCategoryState.round -= 1;
            prevCategoryState.winners.pop();
          }
          saveState(state);
          renderMaterialsSelection(config, mount, state, handlers);
        }
      },
      onRestartMaterials() {
        // Clear only materials selections, keep quiz results
        state.materialsSelections = {};
        state.currentCategoryIndex = 0;
        state.currentFlow = 'materials-selection';
        saveState(state);
        renderMaterialsSelection(config, mount, state, handlers);
      },
      onConfirmMaterialSelection() {
        // User confirmed their final selection, move to next category
        const categories = config.materialsBySpace[state.selectedSpace] || [];
        if (state.currentCategoryIndex < categories.length - 1) {
          state.currentCategoryIndex += 1;
          saveState(state);
          renderMaterialsSelection(config, mount, state, handlers);
        } else {
          // All categories done!
          renderMaterialsComplete(config, mount, state, handlers);
        }
      },
      onReselectMaterial() {
        // User wants to go back and reselect this category
        const currentCategoryId = config.materialsBySpace[state.selectedSpace][state.currentCategoryIndex].id;
        state.materialsSelections[currentCategoryId] = {
          round: 1,
          winners: [],
        };
        saveState(state);
        renderMaterialsSelection(config, mount, state, handlers);
      },
    };

    // Restore to saved flow if exists
    if (savedState) {
      const flow = savedState.currentFlow;
      if (flow === 'intro') {
        renderIntro(config, mount, handlers);
      } else if (flow === 'name-capture') {
        renderNameCapture(config, mount, handlers);
      } else if (flow === 'whole-home-selection') {
        renderWholeHomeSpaceSelection(config, mount, state, handlers, saveState);
      } else if (flow === 'space-selection') {
        renderSpaceSelection(config, mount, state, handlers);
      } else if (flow === 'word-association') {
        renderWordAssociation(config, mount, state, handlers);
      } else if (flow === 'quiz') {
        const steps = getStepsForSpace(state.selectedSpace);
        renderStep(config, mount, state, handlers, steps);
      } else if (flow === 'lead-capture') {
        handlers._state = state;
        renderLeadCapture(config, mount, handlers);
      } else if (flow === 'final-selection') {
        renderFinalSelection(config, mount, state, handlers);
      } else if (flow === 'expert-intro') {
        renderExpertIntro(config, mount, state, handlers);
      } else if (flow === 'project-type') {
        renderProjectType(config, mount, state, handlers, saveState);
      } else if (flow === 'project-context') {
        renderExpertQuestion(config, mount, state, handlers);
      } else if (flow === 'materials-selection') {
        renderMaterialsSelection(config, mount, state, handlers);
      } else if (flow === 'section-gates') {
        renderSectionGates(config, mount, state, handlers, saveState);
      } else if (flow === 'space-questions') {
        const spaceId = state.currentSpace || (state.spaceOrder && state.spaceOrder[0]);
        const questionIndex = state.currentSpaceQuestionIndex && spaceId ? (state.currentSpaceQuestionIndex[spaceId] || 0) : 0;
        if (spaceId) {
          renderSpaceQuestions(spaceId, questionIndex, config, mount, state, handlers, saveState);
        } else {
          renderSectionGates(config, mount, state, handlers, saveState);
        }
      } else if (flow === 'pathway-coming-soon') {
        renderPathwayComingSoon(config, mount, state, handlers, saveState);
      } else if (flow === 'success') {
        renderSuccess(config, mount, state, handlers);
      } else {
        renderIntro(config, mount, handlers);
      }
    } else {
      renderIntro(config, mount, handlers);
    }
  }

  if (typeof window !== 'undefined') {
    window.IDSQ = {
      buildQuiz,
    };
  }
})();
