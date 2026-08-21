import { Room, SpaFacility, SpaTreatment, MenuItem, PackageTier, Review } from '../types';

export const HOTEL_INFO = {
  name: 'Spa Hotel Sirius Beach',
  nameBg: 'СПА Хотел Сириус Бийч',
  stars: 4,
  location: 'St. Constantine and Elena Resort, Varna 9006, Bulgaria',
  locationBg: 'к.к. Св. Св. Константин и Елена, Варна, България',
  phone: '+359 52 361 224',
  phoneReservation: '+359 884 899 900',
  email: 'reservations@siriusbeach.com',
  checkInTime: '15:00',
  checkOutTime: '11:00',
  coordinates: { lat: 43.2324, lng: 28.0145 },
  thermalSpringDepth: '1,300 meters',
  thermalSpringDepthBg: '1 300 метра',
  naturalWaterTemp: '38°C (100.4°F)',
  mineralType: 'Hypothermal, hydrocarbonate-calcium-magnesium',
  mineralTypeBg: 'Хипотермална, хидрокарбонатно-калциево-магнезиева',
};

export const SPA_FACILITIES: SpaFacility[] = [
  {
    id: 'indoor-pool',
    name: 'Indoor Thermal Balneo Pool',
    nameBg: 'Закрит термален балнео басейн',
    tempC: 38,
    tempF: 100.4,
    type: 'Balneotherapy & Hydro-massage',
    typeBg: 'Балнеолечение & Хидромасаж',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Pure hyper-thermal 38°C natural mineral water straight from 1,300m deep underground spring.',
    shortDescBg: 'Чиста хипертермална 38°C естествена минерална вода директно от 1300 м дълбочинен подземен извор.',
    fullDesc: 'Fed by the world-renowned mineral spring of St. Constantine and Elena, our indoor pool features underwater hydro-massage geysers, swan-neck massage cascades, and counter-current streams. The thermal water is rich in magnesium, calcium, and sulfates, renowned since Roman times for restoring joints, soothing the nervous system, and rejuvenating the skin.',
    fullDescBg: 'Захранван от прочутия лечебен минерален извор на Св. Св. Константин и Елена, вътрешният басейн разполага с подводни хидромасажни гейзери, каскади "водопад" за врат и рамене и насрещно течение. Водата е богата на магнезий, калций и сулфати, известни още от римско време за възстановяване на ставите и нервната система.',
    minerals: ['Magnesium (Mg²⁺)', 'Calcium (Ca²⁺)', 'Hydrocarbonates (HCO₃⁻)', 'Sulfates (SO₄²⁻)', 'Radon traces'],
    mineralsBg: ['Магнезий (Mg²⁺)', 'Калций (Ca²⁺)', 'Хидрокарбонати (HCO₃⁻)', 'Сулфати (SO₄²⁻)', 'Микроелементи'],
    healthBenefits: ['Musculoskeletal recovery', 'Stress reduction & sleep improvement', 'Peripheral nervous system revitalizing', 'Skin mineral nourishment'],
    healthBenefitsBg: ['Възстановяване на опорно-двигателния апарат', 'Редуциране на стреса и подобряване на съня', 'Укрепване на нервната система', 'Клетъчно подхранване и тонизиране на кожата'],
    hours: '08:00 - 20:00 Daily',
    hoursBg: '08:00 - 20:00 Всеки ден'
  },
  {
    id: 'outdoor-thermal-pool',
    name: 'Outdoor Thermal Infinity Beach Pool',
    nameBg: 'Открит термален инфинити басейн на плажа',
    tempC: 36,
    tempF: 96.8,
    type: 'Year-Round Heated Seafront',
    typeBg: 'Целогодишно отопляем на първа линия',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Swim right on the edge of the Black Sea with hot 36°C mineral water even on crisp evenings.',
    shortDescBg: 'Плувайте на самия бряг на Черно море с топла 36°C лечебна вода с панорамен изглед към вълните.',
    fullDesc: 'Positioned directly on the golden sandy shore, this heated thermal pool combines the refreshing marine sea air with therapeutic 36°C thermal mineral water. Enjoy unobstructed panoramic sunrises and sunset views across the Varna Bay while relaxing on integrated water loungers with effervescent air-bubble beds.',
    fullDescBg: 'Разположен директно върху златния пясъчен бряг, този открит басейн съчетава свежия морски въздух с лечебната 36°C минерална вода. Наслаждавайте се на панорамни изгреви и залези над Варненския залив, отпускайки се на вградените водни шезлонги с аеромасажни дюзи.',
    minerals: ['Micro-iodine', 'Fluoride', 'Silicic acid', 'Natural mineral salts'],
    mineralsBg: ['Микро-йод', 'Флуор', 'Силициева киселина', 'Естествени минерални соли'],
    healthBenefits: ['Cardiovascular conditioning', 'Natural immune system boost', 'Respiratory cleansing via sea-aerosol', 'Deep muscular relaxation'],
    healthBenefitsBg: ['Кардиоваскуларна профилактика', 'Естествено подсилване на имунитета', 'Прочистване на дихателните пътища с морски аерозоли', 'Дълбока мускулна релаксация'],
    hours: '08:00 - 21:00 Daily',
    hoursBg: '08:00 - 21:00 Всеки ден'
  },
  {
    id: 'sauna-village',
    name: 'Sauna Village & Thermal Circuit',
    nameBg: 'Сауна селище & Термална зона',
    tempC: 85,
    tempF: 185,
    type: 'Finnish, Herbal Steam & Infrared',
    typeBg: 'Финландска сауна, билкова парна баня & инфраред',
    image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Traditional Finnish pine sauna, Bulgarian herbal aroma steam bath, and contrast plunge bucket.',
    shortDescBg: 'Автентична финландска борова сауна, българска билкова парна баня с лавандула и шоково ведро.',
    fullDesc: 'Immerse yourself in our multisensory thermal sanctuary. Transition between dry 85°C Finnish heat, gentle 45°C steam infused with wild Bulgarian lavender and mountain herbs, an infrared detox cabin, and ice-shock bucket showers to boost circulation and metabolic vitality.',
    fullDescBg: 'Потопете се в нашия термален оазис: суха 85°C финландска топлина, мека 45°C пара с натурална българска лавандула и билки от планината, инфрачервена детокс кабина и контрастни студени душове за тонус и стимулиране на метаболизма.',
    minerals: ['Bulgarian Lavender essence', 'Mountain Pine extracts', 'Eucalyptus vapours'],
    mineralsBg: ['Екстракт от българска лавандула', 'Планински бор', 'Евкалиптови пари'],
    healthBenefits: ['Full-body detoxification', 'Lymphatic drainage stimulation', 'Pore cleansing and dermal tone', 'Endorphin release'],
    healthBenefitsBg: ['Цялостна детоксикация на организма', 'Стимулиране на лимфния дренаж', 'Дълбоко почистване на порите и свежа кожа', 'Освобождаване на ендорфини'],
    hours: '09:00 - 20:00 Daily',
    hoursBg: '09:00 - 20:00 Всеки ден'
  },
  {
    id: 'salt-room',
    name: 'Himalayan Salt Room & Halotherapy',
    nameBg: 'Хималайска солна стая & Халотерапия',
    tempC: 24,
    tempF: 75.2,
    type: 'Halotherapy & Chromotherapy',
    typeBg: 'Халотерапия & Хромотерапия',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Micronized medical salt aerosol chamber lined with ancient pink Himalayan salt crystal bricks.',
    shortDescBg: 'Медицински аерозолен халогенератор и стени от естествени розови хималайски солни кристали.',
    fullDesc: 'Breathe in sterile, negatively ionized air saturated with micro-particles of pharmaceutical-grade salt. Enhanced by ergonomic heated loungers, soothing ambient acoustic soundscapes, and calming chromotherapy lighting, a 40-minute session equates to three days of pristine seaside breathing.',
    fullDescBg: 'Вдишайте стерилен, отрицателно йонизиран въздух с микрочастици от чиста медицинска сол. В комбинация с ергономични релакс легла, нежна релаксираща музика и хромотерапия, 40-минутна сесия се равнява на 3 дни дълбоко морско дишане.',
    minerals: ['84 Trace Himalayan minerals', 'Pure Sodium Chloride', 'Negative Ions'],
    mineralsBg: ['84 Хималайски минерала', 'Медицински натриев хлорид', 'Отрицателни йони'],
    healthBenefits: ['Asthma & allergy relief', 'Sinus and lung clearance', 'Eczema & psoriasis alleviation', 'Deep meditative calmness'],
    healthBenefitsBg: ['Облекчаване на астма и алергии', 'Прочистване на синусите и белите дробове', 'Благоприятно действие при кожни раздразнения', 'Дълбоко релаксиращо и антистрес действие'],
    hours: '09:00 - 19:30 (Session based)',
    hoursBg: '09:00 - 19:30 (На сесии)'
  }
];

export const SPA_TREATMENTS: SpaTreatment[] = [
  {
    id: 'varna-mud-therapy',
    category: 'Balneo & Mud Therapy',
    categoryBg: 'Балнеология & Калолечение',
    name: 'Healing Varna Estuary Peloid Mud Wrap',
    nameBg: 'Лечебно калолечение с лиманна пелоидна кал от Варненското езеро',
    durationMin: 50,
    priceEur: 55,
    description: 'Warm, therapeutic mineral mud sourced from the protected Varna salt lakes, enriched with bioactive hydrogen sulfide and trace elements.',
    descriptionBg: 'Топла лечебна минерална кал от защитените езерни находища, богата на биоактивен сероводород и ценни микроелементи за стави и сухожилия.',
    mineralIngredients: 'Varna Lake Peloid, Thermal Mineral Water, Lavender Oil',
    mineralIngredientsBg: 'Варненска лиманна кал, термална минерална вода, лавандулово масло'
  },
  {
    id: 'sirius-hydro-massage',
    category: 'Hydrotherapy',
    categoryBg: 'Хидротерапия',
    name: 'Sirius Underwater Jet Mineral Hydromassage',
    nameBg: 'Подводен струен хидромасаж (Тангентор) с минерална вода',
    durationMin: 40,
    priceEur: 45,
    description: 'Targeted high-pressure mineral water jet massage in individual hydrotherapy tub focusing on spinal alignment and muscle tension.',
    descriptionBg: 'Индивидуална хидромасажна вана с насочени струи термална 38°C вода за облекчаване на напрежението в гърба, кръста и крайниците.',
    mineralIngredients: 'Natural 38°C Spring Mineral Water with Marine Algae',
    mineralIngredientsBg: 'Естествена 38°C минерална вода с морски микроводорасли'
  },
  {
    id: 'black-sea-pearl-facial',
    category: 'Facial & Anti-Aging',
    categoryBg: 'Козметика & Подмладяване',
    name: 'Black Sea Pearl & Mineral Collagen Facial',
    nameBg: 'Черноморска перла & Минерален колагенов ритуал за лице',
    durationMin: 60,
    priceEur: 65,
    description: 'Cellular rejuvenation combining micronized pearl powder, organic Bulgarian rose water, and cold mineral ultrasonic infusion.',
    descriptionBg: 'Клетъчно подмладяване с микронизиран перлен прах, био българска розова вода и ултразвукова инфузия с минерални серуми.',
    mineralIngredients: 'Crushed Mother-of-Pearl, Rose Damascena, Hyaluronic Acid',
    mineralIngredientsBg: 'Черноморски седеф, Rosa Damascena, хиалуронова киселина'
  },
  {
    id: 'rose-aroma-massage',
    category: 'Massage & Rituals',
    categoryBg: 'Масажи & Ароматерапия',
    name: 'Royal Bulgarian Rose Oil Full Body Ritual',
    nameBg: 'Царски ритуал за цяло тяло с българско розово масло и вулканични камъни',
    durationMin: 75,
    priceEur: 75,
    description: 'Full-body rhythmic massage using 100% pure steam-distilled Bulgarian Rosa Damascena essential oil and heated volcanic basalt stones.',
    descriptionBg: 'Ароматерапевтичен масаж на цяло тяло с 100% чисто българско масло от казанлъшка роза и затоплени базалтови вулканични камъни.',
    mineralIngredients: 'Kazanlak Rose Oil, Almond & Jojoba carrier, Basalt Stones',
    mineralIngredientsBg: 'Казанлъшко розово масло, бадемово олио, вулканични камъни'
  }
];

export const ROOMS: Room[] = [
  {
    id: 'deluxe-sea-view',
    name: 'Deluxe Frontline Sea View Room',
    nameBg: 'Делукс стая с фронтална морска гледка',
    category: 'sea',
    priceEur: 145,
    sizeM2: 32,
    capacity: '2 Adults + 1 Child',
    capacityBg: '2 Възрастни + 1 Дете',
    bedType: 'King Size Bed or 2 Twin Beds',
    bedTypeBg: 'Голямо двойно легло или 2 отделни легла',
    view: 'Panoramic Black Sea & Beach View',
    viewBg: 'Панорамен изглед към Черно море и плажа',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Wake up to the gentle lull of Black Sea waves. Features a furnished private balcony jutting towards the shoreline, marble bathroom with thermal water shower, and elegant nautical decor.',
    descriptionBg: 'Събудете се под звуците на морските вълни. Разполага с тераса на метри от пясъка, мраморна баня с душ с минерална вода, минибар и луксозно оборудване.',
    amenities: ['Direct Sea View Balcony', 'Thermal Mineral Water Tap', 'High-Speed Wi-Fi 6', '4K Smart LED TV', 'Mini Bar & Tea Station', 'Individual Climate Control', 'Luxury Bathrobes & Slippers'],
    amenitiesBg: ['Балкон с директен морски изглед', 'Душ с лечебна минерална вода', 'Бърз Wi-Fi 6 интернет', '4K Smart LED телевизор', 'Минибар и сет за кафе/чай', 'Индивидуален климатик', 'Халати и чехли'],
    virtualTour360: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80',
    badge: 'Most Popular',
    badgeBg: 'Най-предпочитана'
  },
  {
    id: 'captain-ship-suite',
    name: "Captain's Panoramic Ship Suite",
    nameBg: 'Капитански панорамен VIP апартамент',
    category: 'suite',
    priceEur: 240,
    sizeM2: 65,
    capacity: '3 Adults or 2 Adults + 2 Children',
    capacityBg: '3 Възрастни или 2 Възрастни + 2 Деца',
    bedType: 'Master King Bed + Separate Living Lounge',
    bedTypeBg: 'Master King спалня + отделен просторен хол',
    view: '270° Ocean & Sirius Ship Galleon View',
    viewBg: '270° панорама към морето и Кораба Сириус',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The pinnacle of luxury at Sirius Beach. Expansive wraparound terrace with panoramic views of the sea and the historical Sirius Ship restaurant, private hydro-massage mineral jacuzzi tub in-suite, and VIP lounge access.',
    descriptionBg: 'Върхът на лукса в Сириус Бийч. Огромна панорамна тераса с изглед към морето и кораба-ресторант, собствено хидромасажно джакузи с минерална вода в апартамента и VIP комплименти.',
    amenities: ['Private In-Suite Mineral Jacuzzi', '270° Wraparound Balcony', 'Nespresso Coffee Machine', 'Complimentary Champagne on Arrival', 'Free Daily Spa VIP Access', 'Priority Ship Restaurant Table'],
    amenitiesBg: ['Собствено минерално джакузи в стаята', '270° панорамна ъглова тераса', 'Кафемашина Nespresso', 'Комплимент бутилка шампанско', 'VIP СПА достъп', 'Приоритетна маса на Кораба Сириус'],
    virtualTour360: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80',
    badge: 'Luxury Signature',
    badgeBg: 'Луксозен флагман'
  },
  {
    id: 'superior-park-view',
    name: 'Superior Botanical Park View Room',
    nameBg: 'Супериор стая с изглед към парка',
    category: 'park',
    priceEur: 110,
    sizeM2: 28,
    capacity: '2 Adults + 1 Child',
    capacityBg: '2 Възрастни + 1 Дете',
    bedType: 'Queen Size Bed or Twin Beds',
    bedTypeBg: 'Queen спалня или 2 отделни легла',
    view: 'Centennial Pine & Cypress Forest',
    viewBg: 'Вековен боров и кипарисов парк',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Surrounded by the tranquil centennial pine and cypress trees of St. Constantine and Elena resort. Inhale crisp ozone pine fragrances from your shaded garden balcony after a rejuvenating thermal mineral bath.',
    descriptionBg: 'Заобиколена от спокойствието на вековните борове и кипариси на курорта. Насладете се на прохладата и аромата на борова гора от сенчестия си балкон след релаксиращ минерален басейн.',
    amenities: ['Forest View Balcony', 'Soundproof Windows', 'High-Speed Wi-Fi', 'Safety Deposit Box', 'Organic Toiletries', 'Work Desk'],
    amenitiesBg: ['Балкон към боровата гора', 'Шумоизолираща дограма', 'Високоскоростен интернет', 'Сейф', 'Био козметични принадлежности', 'Работно бюро'],
    virtualTour360: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=80',
    badge: 'Quiet & Serene',
    badgeBg: 'Тишина и природа'
  },
  {
    id: 'executive-family-suite',
    name: 'Executive Family Sea View Suite',
    nameBg: 'Екзекютив фамилен апартамент с морска панорама',
    category: 'suite',
    priceEur: 210,
    sizeM2: 54,
    capacity: '4 Guests (2 Adults + 2 Children)',
    capacityBg: '4 Гости (2 Възрастни + 2 Деца)',
    bedType: '1 King Bed + 2 Single Beds (2 Connected Bedrooms)',
    bedTypeBg: '1 Двойно легло + 2 Единични легла (2 свързани спални)',
    view: 'Direct Beach & Infinity Pool View',
    viewBg: 'Директен изглед към плажа и инфинити басейна',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Spacious interconnecting two-bedroom suite designed for luxury family holidays. Direct step-out balcony overlooking the private sandy beach and thermal pools with two full marble bathrooms.',
    descriptionBg: 'Просторен двустаен апартамент със свързваща врата за перфектна семейна почивка. Две самостоятелни бани, тераса над плажа и басейните, бебешки принадлежности при поискване.',
    amenities: ['2 Separate Bedrooms & Bathrooms', 'Dual Balconies', 'Kids Welcome Package', 'Thermal Hydro-Shower', 'Beach Towels Included', 'Daily Housekeeping'],
    amenitiesBg: ['2 Отделни спални и 2 бани', '2 Самостоятелни балкона', 'Детски пакет "Добре дошли"', 'Минерален душ', 'Включени плажни кърпи', 'Ежедневно почистване'],
    virtualTour360: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80'
  }
];

export const SHIP_MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    category: 'seafood',
    name: 'Wild Black Sea Turbot (Калкан) on Hot Lava Stone',
    nameBg: 'Див черноморски калкан на горещ лава камък',
    priceEur: 32,
    description: 'Freshly caught Black Sea turbot fillet seared with samphire, garlic-infused extra virgin olive oil, and charred lemon.',
    descriptionBg: 'Филе от прясно уловен черноморски калкан, приготвено на плоча с морски копър, зехтин екстра върджин и печен лимон.',
    highlight: "Chef's Catch of the Day",
    highlightBg: 'Улов на деня от Главния готвач',
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm2',
    category: 'starters',
    name: 'Kavarna Mussels Steamed in White Wine & Thyme',
    nameBg: 'Миди от Каварна на пара с бяло вино и мащерка',
    priceEur: 14,
    description: 'Plump coastal mussels from Kavarna Bay cooked in Bulgarian Chardonnay, wild thyme, sea salt, and shallot butter.',
    descriptionBg: 'Сочни миди от залива на Каварна, задушени в българско Шардоне, дива планинска мащерка, морска сол и шалот.',
    highlight: 'Local Specialty',
    highlightBg: 'Регионален специалитет',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm3',
    category: 'mains',
    name: "Captain's Dry-Aged Black Angus Ribeye",
    nameBg: 'Капитански Dry-Aged Блек Ангъс Рибай стек',
    priceEur: 38,
    description: '45-day aged Black Angus steak served with truffle potato mousseline, grilled asparagus, and green peppercorn demi-glace.',
    descriptionBg: '45 дни зрял телешки стек със сос демиглас със зелен пипер, трюфелово картофено пюре и гриловани аспержи.',
    highlight: 'Prime Cut',
    highlightBg: 'Премиум месна селекция',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm4',
    category: 'cocktails',
    name: 'Sirius Sunset Spritz',
    nameBg: 'Авторски коктейл "Сириус Сънсет Сприц"',
    priceEur: 11,
    description: 'Bulgarian Rose liqueur, botanical gin, elderflower tonic, Prosecco DOC, garnished with fresh rosemary and dehydrated blood orange.',
    descriptionBg: 'Ликьор от българска роза, крафт джин, тоник от бъз, Просеко DOC, стрък розмарин и дехидратиран червен портокал.',
    highlight: 'Signature Cocktail',
    highlightBg: 'Авторски коктейл',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
  }
];

export const PACKAGE_TIERS: PackageTier[] = [
  {
    id: 'standard-bb',
    name: 'Bed & Breakfast Essential',
    nameBg: 'Нощувка & Богата Закуска (BB)',
    tagline: 'Ideal for weekend spa getaways and independent explorers',
    taglineBg: 'Идеален за уикенд СПА бягство и опознаване на курорта',
    priceEurPerNight: 85,
    features: [
      { included: true, text: 'Lavish Buffet Breakfast on Sea Terrace', textBg: 'Богата закуска на блок маса с морска панорама' },
      { included: true, text: 'Unlimited 38°C Indoor Mineral Pool Access', textBg: 'Неограничен достъп до 38°C вътрешен минерален басейн' },
      { included: true, text: 'High-speed Wi-Fi throughout resort', textBg: 'Високоскоростен Wi-Fi в целия комплекс' },
      { included: true, text: 'Fitness Gym & Thermal Contrast Showers', textBg: 'Фитнес зала и термални контрастни душове' },
      { included: false, text: 'Lunch & Dinner Buffets', textBg: 'Обяд и вечеря на бюфет' },
      { included: false, text: 'Sirius Ship Restaurant Credit', textBg: 'Кредит за Кораба Сириус' },
      { included: false, text: 'Private Beach Loungers & Umbrella', textBg: 'Чадър и шезлонги на плажа' },
      { included: false, text: 'Sauna Village & Himalayan Salt Room', textBg: 'Сауна селище и Солна стая' },
      { included: false, text: 'Unlimited Beach & Pool Cocktail Bar', textBg: 'Неограничени напитки на баровете' }
    ]
  },
  {
    id: 'all-inclusive',
    name: 'All-Inclusive Thermal Relax',
    nameBg: 'Ол Инклузив Термал Релакс',
    tagline: 'Our most sought-after beach & thermal wellness balance',
    taglineBg: 'Най-предпочитаният баланс за морска и СПА почивка',
    priceEurPerNight: 135,
    popular: true,
    features: [
      { included: true, text: 'Breakfast, Lunch & Dinner Gourmet Buffets', textBg: 'Закуска, обяд и вечеря на гурме бюфет с шоу-кукинг' },
      { included: true, text: 'Unlimited 38°C Indoor & 36°C Outdoor Pools', textBg: 'Неограничен достъп до 38°C закрит и 36°C открит минерален басейн' },
      { included: true, text: 'Dedicated 2 Beach Sunbeds + 1 Umbrella per room', textBg: '2 Шезлонга и 1 чадър на пясъка на плажа към всяка стая' },
      { included: true, text: 'Unlimited Local Wine, Beer & Cocktails (10:00 - 23:00)', textBg: 'Неограничени български вина, наливна бира, безалкохолни и коктейли' },
      { included: true, text: 'Daily Afternoon Snack Bar & Artisanal Ice Cream', textBg: 'Следобедни закуски, сладкиши и занаятчийски сладолед' },
      { included: true, text: 'Access to Sauna Village (Finnish & Steam Bath)', textBg: 'Достъп до Сауна селище (финландска сауна и парна баня)' },
      { included: true, text: 'Live Evening Music & Beachfront Entertainment', textBg: 'Вечерни програми с жива музика на крайбрежието' },
      { included: false, text: 'Sirius Ship À La Carte VIP Dining Credit', textBg: 'À la carte вечеря на Кораба Сириус' },
      { included: false, text: 'Himalayan Salt Room Halotherapy sessions', textBg: 'Халотерапия в Хималайска солна стая' }
    ]
  },
  {
    id: 'ultra-all-inclusive-gold',
    name: 'Ultra All-Inclusive Spa Gold',
    nameBg: 'Ултра Ол Инклузив СПА Голд',
    tagline: 'The ultimate 5-star standard thermal luxury without compromise',
    taglineBg: 'Максимален лукс, превъзходно хранене и пълен СПА пакет',
    priceEurPerNight: 195,
    features: [
      { included: true, text: 'All meals + 2x Free À La Carte Dinners at The Sirius Ship', textBg: 'Всички хранения + 2 безплатни А ла карт вечери на Кораба Сириус' },
      { included: true, text: 'Premium Imported Spirits & Champagne Selection', textBg: 'Премиум вносен алкохол, селектирани вина и шампанско' },
      { included: true, text: 'VIP Frontline Beach Sunbeds with Canopy Gazebo', textBg: 'VIP шезлонги на първа линия на плажа с шатра-газебо' },
      { included: true, text: 'Unlimited All Spa: Pools, Sauna Village, Salt Room', textBg: 'Пълен неограничен СПА достъп: басейни, сауни и солна стая' },
      { included: true, text: '1 Complimentary 40-Min Mud Therapy or Massage per stay', textBg: '1 Безплатна калолечебна процедура или масаж за престоя' },
      { included: true, text: 'Complimentary Room Mini Bar (refilled daily)', textBg: 'Безплатен минибар в стаята (зареждан ежедневно)' },
      { included: true, text: 'Early Check-in (11:00) & Late Check-out (16:00)', textBg: 'Ранно настаняване (11:00) и късно напускане (16:00)' },
      { included: true, text: 'Dedicated VIP Concierge & Free Secured Parking', textBg: 'Персонален консиерж и безплатен охраняем паркинг' }
    ]
  }
];

export const GUEST_REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Елена Петрова',
    country: 'София, България',
    rating: 5,
    date: 'Август 2026',
    title: 'Истинска магия на самия бряг с 38°C минерална вода!',
    titleBg: 'Истинска магия на самия бряг с 38°C минерална вода!',
    comment: 'Да плуваш в горещия минерален басейн и да чуваш разбиването на морските вълни на няколко метра е невероятно изживяване. Ресторантът на кораба сервира най-вкусния калкан, а солната стая ми помогна страшно много.',
    commentBg: 'Да плуваш в горещия минерален басейн и да чуваш разбиването на морските вълни на няколко метра е невероятно изживяване. Ресторантът на кораба сервира най-вкусния калкан, а солната стая ми помогна страшно много.',
    roomType: 'Deluxe Frontline Sea View Room',
    roomTypeBg: 'Делукс стая с морски изглед',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'r2',
    author: 'Д-р Михаел и Сара Краузе',
    country: 'Мюнхен, Германия',
    rating: 5,
    date: 'Юли 2026',
    title: 'Най-добрият балнео комплекс в Източна Европа',
    titleBg: 'Най-добрият балнео комплекс в Източна Европа',
    comment: 'Посещавали сме Баден-Баден и Карлови Вари, но да имаш 38°C минерален извор точно на морския пясък е уникално за Св. Константин и Елена. Персоналът е изключителен, а пакетите Ол Инклузив дават пълен релакс.',
    commentBg: 'Посещавали сме Баден-Баден и Карлови Вари, но да имаш 38°C минерален извор точно на морския пясък е уникално за Св. Константин и Елена. Персоналът е изключителен, а пакетите Ол Инклузив дават пълен релакс.',
    roomType: "Captain's Panoramic Ship Suite",
    roomTypeBg: 'Капитански панорамен апартамент',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'r3',
    author: 'Александър Дюбоа',
    country: 'Лион, Франция',
    rating: 5,
    date: 'Юни 2026',
    title: 'Вечеря на истински кораб от XIII век по залез е незабравима',
    titleBg: 'Вечеря на истински кораб от XIII век по залез е незабравима',
    comment: 'Корабът Сириус е нещо уникално. Седяхме на горната открита палуба с изглед към целия залив, хапвахме миди от Каварна и пиехме българско вино. Горещо препоръчвам и калолечението в СПА центъра.',
    commentBg: 'Корабът Сириус е нещо уникално. Седяхме на горната открита палуба с изглед към целия залив, хапвахме миди от Каварна и пиехме българско вино. Горещо препоръчвам и калолечението в СПА центъра.',
    roomType: 'Superior Botanical Park View Room',
    roomTypeBg: 'Супериор стая с парков изглед',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const RESORT_FACTS = [
  { label: 'Founded in', labelBg: 'Основан през', value: '1908', sub: "Bulgaria's 1st Sea & Spa Resort", subBg: 'Първият морски & СПА курорт на България' },
  { label: 'Mineral Water Temp', labelBg: 'Температура на водата', value: '38°C', sub: 'Hypothermal Spring at 1300m', subBg: 'Хипертермален извор от 1300 м' },
  { label: 'Beach Distance', labelBg: 'Разстояние до плажа', value: '0 м', sub: 'Direct Frontline on Sand', subBg: 'Директно на пясъчната ивица' },
  { label: 'Varna Airport', labelBg: 'Летище Варна', value: '18 км', sub: '20-min Chauffeur Transfer', subBg: '20 мин. трансфер' },
];
