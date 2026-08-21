import { Language } from '../types';

export interface TranslationDictionary {
  nav: {
    announcement: string;
    locationShort: string;
    thermalHub: string;
    thermalSpa: string;
    rooms: string;
    ship: string;
    shipRestaurant: string;
    shipGalleonBadge: string;
    packages: string;
    allInclusive: string;
    liveCam: string;
    resortStory: string;
    resortLocation: string;
    bookStay: string;
    downloadHtml: string;
  };
  hero: {
    badge: string;
    springDepth: string;
    headlinePart1: string;
    headlinePart2: string;
    subheadline: string;
    statThermal: string;
    statBeach: string;
    statHeritage: string;
    statGalleon: string;
    btnBook: string;
    btnExploreSpa: string;
    directGuarantee: string;
    scrollCheck: string;
  };
  bookingBar: {
    badge: string;
    checkIn: string;
    checkOut: string;
    guests: string;
    adultsLabel: string;
    childrenLabel: string;
    roomType: string;
    allRooms: string;
    promoCode: string;
    promoPlaceholder: string;
    btnCheck: string;
    bestRateText: string;
  };
  spa: {
    badge: string;
    tag: string;
    title: string;
    subtitle: string;
    switchTemp: string;
    tabFacilities: string;
    tabTreatments: string;
    tabMinerals: string;
    tabIndoor: string;
    tabOutdoor: string;
    tabSauna: string;
    tabSalt: string;
    springSource: string;
    waterTemp: string;
    healthBenefits: string;
    mineralComp: string;
    benefitsTitle: string;
    mineralsTitle: string;
    operatingHours: string;
    bookTreatment: string;
    btnBookTreatment: string;
    viewAnalysis: string;
    labTitle: string;
    labDesc: string;
    labCert: string;
    treatmentsTitle: string;
    treatmentsSubtitle: string;
    btnBookNow: string;
    durationMins: string;
  };
  rooms: {
    badge: string;
    tag: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterSea: string;
    filterSuite: string;
    filterPark: string;
    filterSuites: string;
    virtualTour: string;
    btnTour360: string;
    from: string;
    btnBookRoom: string;
    reserveRoom: string;
    perNight: string;
    viewDetails: string;
    amenitiesTitle: string;
  };
  ship: {
    badge: string;
    tag: string;
    title: string;
    subtitle: string;
    signatureDishes: string;
    reserveTable: string;
    historyTitle: string;
    historyP1: string;
    historyP2: string;
    btnReserveTable: string;
    menuTitle: string;
    menuSubtitle: string;
    filterAll: string;
    filterSeafood: string;
    filterMains: string;
    filterStarters: string;
    filterCocktails: string;
  };
  packages: {
    badge: string;
    tag: string;
    title: string;
    subtitle: string;
    included: string;
    perNight: string;
    sevenNights: string;
    popularBadge: string;
    includedTitle: string;
    btnSelect: string;
    featureThermal: string;
    featureThermalDesc: string;
    featureBeach: string;
    featureBeachDesc: string;
    featureShip: string;
    featureShipDesc: string;
    featureBars: string;
    featureBarsDesc: string;
  };
  liveCam: {
    tag: string;
    title: string;
    subtitle: string;
    camBeach: string;
    camThermal: string;
    camPool: string;
    camShip: string;
    liveStream: string;
    snapshot: string;
    snapshotSaved: string;
    feedOptimal: string;
    stationTitle: string;
    sunnyBreeze: string;
    high: string;
    low: string;
    feelsLike: string;
    springTemp: string;
    seaTemp: string;
    uvIndex: string;
    windWaves: string;
    forecast3Day: string;
    dayTomorrow: string;
    daySaturday: string;
    daySunday: string;
    thermalPromptTitle: string;
    thermalPromptDesc: string;
    btnSpaHub: string;
  };
  livecam: {
    tag: string;
    title: string;
    subtitle: string;
    camBeach: string;
    camThermal: string;
    camPool: string;
    camShip: string;
    liveStream: string;
    snapshot: string;
    snapshotSaved: string;
    feedOptimal: string;
    stationTitle: string;
    sunnyBreeze: string;
    high: string;
    low: string;
    feelsLike: string;
    springTemp: string;
    seaTemp: string;
    uvIndex: string;
    windWaves: string;
    forecast3Day: string;
    dayTomorrow: string;
    daySaturday: string;
    daySunday: string;
    thermalPromptTitle: string;
    thermalPromptDesc: string;
    btnSpaHub: string;
  };
  location: {
    tag: string;
    title: string;
    subtitle: string;
    coastalTitle: string;
    coastalDesc: string;
    botanicalTitle: string;
    botanicalDesc: string;
    monasteryTitle: string;
    monasteryDesc: string;
    airportTitle: string;
    airportDesc: string;
    addressLabel: string;
    openMaps: string;
  };
  reviews: {
    ratingText: string;
    title: string;
  };
  footer: {
    clubTag: string;
    clubTitle: string;
    clubDesc: string;
    newsletterPlaceholder: string;
    btnSubscribe: string;
    subscribeSuccess: string;
    hotelDesc: string;
    experienceCol: string;
    thermalCareCol: string;
    reservationsCol: string;
    cert1: string;
    cert2: string;
    rights: string;
  };
  modals: {
    bookingTitle: string;
    bestRateBadge: string;
    thermalAccessIncluded: string;
    selectedRoom: string;
    boardingTier: string;
    guestName: string;
    email: string;
    phone: string;
    specialRequests: string;
    specialRequestsPlaceholder: string;
    noAdvancePayment: string;
    totalPrice: string;
    btnConfirmBooking: string;
    confirmedTitle: string;
    confirmedMessage: string;
    voucherSent: string;
    btnCloseReturn: string;
    spaTitle: string;
    selectRitual: string;
    preferredDate: string;
    timeSlot: string;
    roomNumber: string;
    btnConfirmSpa: string;
    spaReservedTitle: string;
    tableTitle: string;
    chooseZone: string;
    guestsCount: string;
    occasionDiet: string;
    btnConfirmTable: string;
    tableReservedTitle: string;
    tourTitle: string;
    tourDragTip: string;
    bedroomAngle: string;
    balconyAngle: string;
    bathAngle: string;
    closeTour: string;
    reserveRoom: string;
  };
}

const bgLiveCam = {
  tag: 'Предаване в реално време от Св. Константин и Елена',
  title: 'Уебкамера На Живо & Метео Център',
  subtitle: 'Проверете състоянието на морето, температурата на минералната вода и слънчевото време на живо.',
  camBeach: 'Плажна ивица и бряг',
  camThermal: '36°C Отопляем басейн',
  camPool: '36°C Отопляем басейн',
  camShip: 'Палуба на Кораба Сириус',
  liveStream: 'ПРЯКО ПРЕДАВАНЕ HD',
  snapshot: 'Снимка',
  snapshotSaved: 'Снимката от камерата е запазена!',
  feedOptimal: 'Статус на излъчване: Отличен (99.8%)',
  stationTitle: 'Метеорологична станция',
  sunnyBreeze: 'Слънчево с лек морски бриз',
  high: 'Макс:',
  low: 'Мин:',
  feelsLike: 'Усеща се:',
  springTemp: 'Изворна вода',
  seaTemp: 'Морска вода',
  uvIndex: 'UV Индекс',
  windWaves: 'Вятър и вълнение',
  forecast3Day: '3-дневна прогноза за крайбрежието',
  dayTomorrow: 'Утре',
  daySaturday: 'Събота',
  daySunday: 'Неделя',
  thermalPromptTitle: 'Идеален ден за термално плуване',
  thermalPromptDesc: 'Водата е гореща и успокояваща при 38°C',
  btnSpaHub: 'СПА Център',
};

const enLiveCam = {
  tag: 'Real-Time Broadcast from St. Constantine & Elena',
  title: 'Live Beach Cam & Weather Hub',
  subtitle: 'Check the live sea conditions, water temperatures, and sunny Black Sea skies in real-time before your arrival.',
  camBeach: 'Beachfront Shoreline',
  camThermal: '36°C Thermal Pool',
  camPool: '36°C Thermal Pool',
  camShip: 'The Sirius Ship Deck',
  liveStream: 'LIVE HD STREAM',
  snapshot: 'Snapshot',
  snapshotSaved: 'Beach webcam snapshot saved to gallery!',
  feedOptimal: 'Feed Status: Optimal (99.8% Uptime)',
  stationTitle: 'Meteorological Station',
  sunnyBreeze: 'Sunny & Calm Sea Breeze',
  high: 'High:',
  low: 'Low:',
  feelsLike: 'Feels like:',
  springTemp: '38°C Spring Temp',
  seaTemp: 'Sea Water Temp',
  uvIndex: 'UV Index',
  windWaves: 'Wind & Waves',
  forecast3Day: '3-Day Coastal Forecast',
  dayTomorrow: 'Tomorrow',
  daySaturday: 'Saturday',
  daySunday: 'Sunday',
  thermalPromptTitle: 'Perfect Day for Thermal Swimming',
  thermalPromptDesc: 'Water is hot and soothing at 38°C',
  btnSpaHub: 'Spa Hub',
};

const deLiveCam = {
  tag: 'Live-Übertragung aus St. Konstantin & Helena',
  title: 'Live Webcam & Wetterstation',
  subtitle: 'Sehen Sie die aktuellen Meeres- und Wetterbedingungen in Echtzeit.',
  camBeach: 'Strandpromenade',
  camThermal: '36°C Thermalpool',
  camPool: '36°C Thermalpool',
  camShip: 'Sirius Schiffsdeck',
  liveStream: 'LIVE HD STREAM',
  snapshot: 'Foto machen',
  snapshotSaved: 'Webcam-Foto gespeichert!',
  feedOptimal: 'Status: Optimal (99.8%)',
  stationTitle: 'Wetterstation',
  sunnyBreeze: 'Sonnig & Meeresbrise',
  high: 'Max:',
  low: 'Min:',
  feelsLike: 'Gefühlt:',
  springTemp: '38°C Quellwasser',
  seaTemp: 'Meerwassertemp.',
  uvIndex: 'UV-Index',
  windWaves: 'Wind & Wellen',
  forecast3Day: '3-Tage-Wettervorhersage',
  dayTomorrow: 'Morgen',
  daySaturday: 'Samstag',
  daySunday: 'Sonntag',
  thermalPromptTitle: 'Perfekter Tag zum Thermalschwimmen',
  thermalPromptDesc: 'Das Wasser ist wohltuend heiß bei 38°C',
  btnSpaHub: 'Spa-Bereich',
};

const ruLiveCam = {
  tag: 'Прямая трансляция из Св. Константина и Елены',
  title: 'Онлайн Вебкамера & Метео Центр',
  subtitle: 'Смотрите состояние моря, температуру воды и погоду в режиме реального времени.',
  camBeach: 'Пляжная линия',
  camThermal: '36°C Бассейн',
  camPool: '36°C Бассейн',
  camShip: 'Палуба Корабля Сириус',
  liveStream: 'ПРЯМОЙ ЭФИР HD',
  snapshot: 'Снимок',
  snapshotSaved: 'Снимок сохранен в галерею!',
  feedOptimal: 'Статус: Отличный (99.8%)',
  stationTitle: 'Метеостанция',
  sunnyBreeze: 'Солнечно, легкий бриз',
  high: 'Макс:',
  low: 'Мин:',
  feelsLike: 'Ощущается:',
  springTemp: '38°C Источник',
  seaTemp: 'Морская вода',
  uvIndex: 'УФ-индекс',
  windWaves: 'Ветер и волны',
  forecast3Day: 'Прогноз на 3 дня',
  dayTomorrow: 'Завтра',
  daySaturday: 'Суббота',
  daySunday: 'Воскресенье',
  thermalPromptTitle: 'Идеальный день для термального купания',
  thermalPromptDesc: 'Вода горячая и расслабляющая при 38°C',
  btnSpaHub: 'СПА Комплекс',
};

export const translations: Record<Language, TranslationDictionary> = {
  BG: {
    nav: {
      announcement: '✦ Естествена 38°C лечебна минерална вода на първа линия до морето',
      locationShort: 'к.к. Св. Св. Константин и Елена, България',
      thermalHub: 'Термален & СПА Център',
      thermalSpa: 'Термален & СПА Център',
      rooms: 'Стаи & Апартаменти',
      ship: 'Корабът Сириус',
      shipRestaurant: 'Корабът Сириус',
      shipGalleonBadge: 'Автентична галера',
      packages: 'Ол Инклузив Пакети',
      allInclusive: 'Ол Инклузив Пакети',
      liveCam: 'Уебкамера На Живо',
      resortStory: 'За Курорта',
      resortLocation: 'За Курорта',
      bookStay: 'Резервирай',
      downloadHtml: 'Изтегли HTML файл',
    },
    hero: {
      badge: '38°C Естествена Хипертермална Минерална Вода',
      springDepth: '1300 м Дълбочина на Извора',
      headlinePart1: 'Където лечебните минерални извори срещат ',
      headlinePart2: 'вълните на Черно море',
      subheadline: 'Потопете се в лечебната сила на балнеологията на самия морски бряг в Св. Св. Константин и Елена. Горещи 38°C термални басейни, панорамни стаи и емблематичният ресторант-галера "Сириус".',
      statThermal: 'Термални басейни',
      statBeach: 'На самия бряг',
      statHeritage: 'Традиция от 1908 г.',
      statGalleon: 'Автентичен кораб',
      btnBook: 'Резервирай с Гаранция',
      btnExploreSpa: 'Разгледай 38°C СПА Център',
      directGuarantee: 'Официална директна резервация: Гарантирана най-добра цена + Безплатен достъп до термални басейни',
      scrollCheck: 'Провери наличност',
    },
    bookingBar: {
      badge: 'Директна резервация с гарантирана най-добра цена и включен СПА достъп',
      checkIn: 'Настаняване',
      checkOut: 'Напускане',
      guests: 'Гости & Стаи',
      adultsLabel: 'Възрастни',
      childrenLabel: 'Деца (0-12 г.)',
      roomType: 'Тип стая',
      allRooms: 'Всички категории',
      promoCode: 'Промо код (SIRIUS2026 за -10%)',
      promoPlaceholder: 'Въведете код',
      btnCheck: 'Провери цени',
      bestRateText: 'Без такси за анулация • Плащане при настаняване на рецепция',
    },
    spa: {
      badge: '38°C Естествена Минерална Вода',
      tag: 'Балнеология & Хидротерапия',
      title: '38°C Лечебен Термален & СПА Център',
      subtitle: 'Природен извор с хипертермална минерална вода, извираща от 1300 метра дълбочина директно в нашите закрити и открити басейни.',
      switchTemp: 'Мерна единица',
      tabFacilities: 'Басейни & Зони',
      tabTreatments: 'СПА Ритуали',
      tabMinerals: 'Минерален Анализ',
      tabIndoor: 'Закрит басейн (38°C)',
      tabOutdoor: 'Открит басейн (36°C)',
      tabSauna: 'Сауна селище (85°C)',
      tabSalt: 'Хималайска солна стая',
      springSource: 'Геотермален извор (1300 м)',
      waterTemp: 'Температура на водата',
      healthBenefits: 'Лечебни свойства и ползи',
      mineralComp: 'Минерален състав',
      benefitsTitle: 'Терапевтични ползи & Показания:',
      mineralsTitle: 'Минерален състав & Микроелементи:',
      operatingHours: 'Работно време:',
      bookTreatment: 'Запази СПА Терапия',
      btnBookTreatment: 'Запази СПА Терапия',
      viewAnalysis: 'Химичен анализ на водата',
      labTitle: 'Хидрогеоложки анализ на водата',
      labDesc: 'Хипотермална, хидрокарбонатно-калциево-магнезиева минерална вода с ниска минерализация и богат микроелементен състав.',
      labCert: 'Сертифицирано от Министерство на Здравеопазването на Република България',
      treatmentsTitle: 'Препоръчани Балнео & СПА Ритуали',
      treatmentsSubtitle: 'Терапии с лечебна лиманна кал от Варненското езеро, морски минерали и натурално българско розово масло.',
      btnBookNow: 'Запази ритуал',
      durationMins: 'мин',
    },
    rooms: {
      badge: 'Крайбрежен комфорт',
      tag: 'Крайбрежен комфорт',
      title: 'Стаи & Апартаменти с Панорамна Гледка',
      subtitle: 'Събуждайте се с шума на морските вълни на просторни самостоятелни балкони с изглед към плажа или вековния боров парк.',
      filterAll: 'Всички стаи',
      filterSea: 'Морска гледка',
      filterSuite: 'Фамилни & VIP Апартаменти',
      filterPark: 'Паркова гледка',
      filterSuites: 'Фамилни & VIP Апартаменти',
      virtualTour: '360° Виртуална Разходка',
      btnTour360: '360° Виртуална Разходка',
      from: 'От',
      btnBookRoom: 'Резервирай стая',
      reserveRoom: 'Резервирай стая',
      perNight: '/ нощувка',
      viewDetails: 'Детайли',
      amenitiesTitle: 'Удобства в стаята:',
    },
    ship: {
      badge: 'Крайбрежна емблема',
      tag: 'Крайбрежна емблема',
      title: 'Ресторант "Корабът Сириус"',
      subtitle: 'Автентичен дървен кораб-галера от XIII век, закотвен директно във водите на Черно море.',
      signatureDishes: 'Черноморска риба & Стек специалитети',
      reserveTable: 'Запази маса на кораба',
      historyTitle: 'Морско кулинарно пътешествие сред вълните',
      historyP1: 'Построен по чертежи на средновековна фрегата, Корабът Сириус е легендарна емблема на курорта Св. Св. Константин и Елена. Докато вечеряте, морските вълни се плискат нежно под корпуса.',
      historyP2: 'Главният ни готвач поднася пресен черноморски калкан на вулканични камъни, сочни миди от залива Каварна в българско Шардоне, първокласни стекове и селектирани регионални вина.',
      btnReserveTable: 'Резервирай маса на кораба',
      menuTitle: 'Акценти от авторското меню',
      menuSubtitle: 'Прясна черноморска риба, отбрани меса и авторски коктейли по залез слънце.',
      filterAll: 'Всички',
      filterSeafood: 'Морски дарове',
      filterMains: 'Основни & Стекове',
      filterStarters: 'Предястия & Салати',
      filterCocktails: 'Коктейли',
    },
    packages: {
      badge: 'Премиум изживяване',
      tag: 'Премиум изживяване',
      title: 'Ол Инклузив & Термални СПА Пакети',
      subtitle: 'Изберете перфектния план за Вашата почивка. Всеки пакет включва пълен достъп до лечебните 38°C минерални басейни.',
      included: 'Какво включва пакетът:',
      perNight: 'Цена за нощувка',
      sevenNights: 'Пакет 7 нощувки (-10%)',
      popularBadge: 'Най-предпочитан избор',
      includedTitle: 'Какво включва пакетът:',
      btnSelect: 'Избери този пакет',
      featureThermal: '38°C Термални извори',
      featureThermalDesc: 'Безплатен достъп за всички гости на хотела независимо от избрания пансион.',
      featureBeach: 'Частен пясъчен плаж',
      featureBeachDesc: 'Шезлонги и чадъри на пясъка точно пред хотела.',
      featureShip: 'Бюфет & Грил на кораба',
      featureShipDesc: 'Шоу-кукинг станции, пресни черноморски салати и десерти.',
      featureBars: 'Плажни коктейл барове',
      featureBarsDesc: 'Освежаващи напитки, българска бира, вина и занаятчийски сладолед.',
    },
    liveCam: bgLiveCam,
    livecam: bgLiveCam,
    location: {
      tag: 'Курорт с традиции от 1908 г.',
      title: 'Курортен Комплекс Св. Св. Константин и Елена',
      subtitle: 'Най-старият и престижен морски и балнео курорт в България, съчетаващ вековни борови гори, уникален лечебен микроклимат и тихи пясъчни заливи.',
      coastalTitle: 'Привилегирована локация на първа линия',
      coastalDesc: 'Разположен точно там, където златният пясък среща прохладата на ботаническия парк, СПА Хотел Сириус Бийч предлага перфектен баланс между морски отдих и тишина.',
      botanicalTitle: 'Университетска Ботаническа градина & Екопарк',
      botanicalDesc: '800 метра • Над 300 редки дървесни вида и колекция от рози',
      monasteryTitle: 'Манастир "Св. Св. Константин и Елена" (XVI в.)',
      monasteryDesc: '500 метра • Древно целебно аязмо с животворна минерална вода',
      airportTitle: 'Международно Летище Варна (VAR)',
      airportDesc: '18 км • 20 минути по директен крайбрежен булевард',
      addressLabel: 'Адрес:',
      openMaps: 'Google Карти',
    },
    reviews: {
      ratingText: '4.9 / 5.0 Оценка от над 1280 реални гости',
      title: 'Отзиви и Впечатления на Нашите Гости',
    },
    footer: {
      clubTag: 'Клуб Лоялни Гости Сириус',
      clubTitle: 'Получете 10% отстъпка за Вашата СПА почивка',
      clubDesc: 'Абонирайте се за ексклузивни балнео оферти, дегустации на Кораба Сириус и специални плажни събития.',
      newsletterPlaceholder: 'Въведете Вашия имейл адрес...',
      btnSubscribe: 'Абонирай се',
      subscribeSuccess: 'Благодарим Ви! Вашият промо код за 10% отстъпка е SIRIUS2026.',
      hotelDesc: 'СПА Хотел Сириус Бийч **** е разположен на първа линия на плажа в Св. Св. Константин и Елена. Предлага лечебни 38°C минерални басейни, морски стаи и уникален ресторант на автентичен кораб.',
      experienceCol: 'Преживявания',
      thermalCareCol: 'Балнеология',
      reservationsCol: 'Контакти & Резервации',
      cert1: 'Сертифициран член на Българския съюз по балнеология и СПА туризъм',
      cert2: 'Green Key Еко сертификат',
      rights: '© 2026 СПА Хотел Сириус Бийч. Всички права запазени. Св. Св. Константин и Елена, Варна, България.',
    },
    modals: {
      bookingTitle: 'СПА Хотел Сириус Бийч • Директна Резервация',
      bestRateBadge: 'Гаранция за най-добра цена директно от хотела',
      thermalAccessIncluded: 'Включен пълен достъп до 38°C минерални басейни',
      selectedRoom: 'Избрана стая',
      boardingTier: 'Пансион / Пакет',
      guestName: 'Име и Фамилия на госта',
      email: 'Имейл адрес',
      phone: 'Телефон за връзка',
      specialRequests: 'Специални изисквания / Предпочитания',
      specialRequestsPlaceholder: 'напр. Тих етаж, бебешко легло, ранно настаняване',
      noAdvancePayment: 'Не се изисква предварително плащане. Плащане при настаняване.',
      totalPrice: 'Крайна гарантирана цена',
      btnConfirmBooking: 'Завърши гарантираната резервация',
      confirmedTitle: 'Резервацията е успешно потвърдена!',
      confirmedMessage: 'Очакваме с нетърпение да Ви посрещнем в СПА Хотел Сириус Бийч!',
      voucherSent: 'Код на резервацията: SB-',
      btnCloseReturn: 'Затвори и се върни към сайта',
      spaTitle: 'Резервация за Балнеология & СПА Процедура',
      selectRitual: 'Изберете терапия или ритуал',
      preferredDate: 'Желана дата',
      timeSlot: 'Часови интервал',
      roomNumber: 'Номер на стая (ако сте гост на хотела)',
      btnConfirmSpa: 'Потвърди час за СПА',
      spaReservedTitle: 'СПА часът е успешно записан',
      tableTitle: 'Корабът Сириус • Резервация на Маса',
      chooseZone: 'Изберете зона на кораба',
      guestsCount: 'Брой гости',
      occasionDiet: 'Повод / Предпочитания',
      btnConfirmTable: 'Потвърди резервация на маса',
      tableReservedTitle: 'Масата на Кораба Сириус е запазена',
      tourTitle: '360° Интерактивна Виртуална Разходка',
      tourDragTip: 'Кликнете и плъзнете с мишката за 360° панорама',
      bedroomAngle: 'Спалня',
      balconyAngle: 'Морска тераса',
      bathAngle: 'Минерална баня',
      closeTour: 'Затвори разходката',
      reserveRoom: 'Резервирай тази стая',
    },
  },
  EN: {
    nav: {
      announcement: '✦ Natural 38°C Thermal Mineral Waters & Direct Frontline Beach Access',
      locationShort: 'St. Constantine & Elena, Bulgaria',
      thermalHub: 'Thermal & Spa Hub',
      thermalSpa: 'Thermal & Spa Hub',
      rooms: 'Rooms & Suites',
      ship: 'The Sirius Ship',
      shipRestaurant: 'The Sirius Ship',
      shipGalleonBadge: 'Historic Galleon',
      packages: 'All-Inclusive Packages',
      allInclusive: 'All-Inclusive Packages',
      liveCam: 'Live Beach Cam',
      resortStory: 'Resort Story',
      resortLocation: 'Resort Story',
      bookStay: 'Book Stay',
      downloadHtml: 'Download HTML',
    },
    hero: {
      badge: '38°C Natural Hyper-Thermal Mineral Waters',
      springDepth: '1,300m Spring Depth',
      headlinePart1: 'Where Healing Mineral Springs Meet the ',
      headlinePart2: 'Black Sea Waves',
      subheadline: 'Experience world-class balneotherapy on the golden shoreline of St. Constantine & Helena. Indulge in pure 38°C thermal pools, pristine beachfront suites, and legendary dining aboard our iconic 13th-century wooden galleon.',
      statThermal: 'Thermal Balneo Pools',
      statBeach: 'Frontline On Beach',
      statHeritage: 'Resort Mineral Heritage',
      statGalleon: 'Historic Galleon Dining',
      btnBook: 'Reserve at Best Rate',
      btnExploreSpa: 'Discover 38°C Thermal Hub',
      directGuarantee: 'Official Direct Booking: Best Price Guaranteed + Free Thermal Pool Access',
      scrollCheck: 'Check Availability',
    },
    bookingBar: {
      badge: 'Direct Booking with Best Rate Guaranteed & Free Thermal Spa Access',
      checkIn: 'Check-In Date',
      checkOut: 'Check-Out Date',
      guests: 'Guests & Rooms',
      adultsLabel: 'Adults',
      childrenLabel: 'Children (0-12 yrs)',
      roomType: 'Room Category',
      allRooms: 'All Room Types',
      promoCode: 'Promo Code (SIRIUS2026 for -10%)',
      promoPlaceholder: 'Enter code',
      btnCheck: 'Check Rates',
      bestRateText: 'Zero cancellation fees • Pay upon check-in at reception',
    },
    spa: {
      badge: '38°C Natural Thermal Waters',
      tag: 'Balneotherapy & Hydrotherapy',
      title: '38°C Healing Thermal & Spa Complex',
      subtitle: 'Natural hyper-thermal mineral spring water flowing from 1,300 meters underground directly into our indoor and outdoor pools.',
      switchTemp: 'Temp Unit',
      tabFacilities: 'Pools & Zones',
      tabTreatments: 'Spa Rituals',
      tabMinerals: 'Mineral Analysis',
      tabIndoor: 'Indoor Balneo Pool (38°C)',
      tabOutdoor: 'Outdoor Beach Infinity Pool (36°C)',
      tabSauna: 'Sauna Village (85°C)',
      tabSalt: 'Himalayan Salt Room',
      springSource: 'Natural Geothermal Spring (1,300m)',
      waterTemp: 'Water Temperature',
      healthBenefits: 'Therapeutic Health Benefits',
      mineralComp: 'Mineral Composition',
      benefitsTitle: 'Therapeutic Benefits & Indications:',
      mineralsTitle: 'Mineral Composition & Trace Elements:',
      operatingHours: 'Operating Hours:',
      bookTreatment: 'Book Balneo & Spa Ritual',
      btnBookTreatment: 'Book Balneo & Spa Ritual',
      viewAnalysis: 'View Water Analysis',
      labTitle: 'Hydrogeological Water Analysis',
      labDesc: 'Hypothermal, hydrocarbonate-calcium-magnesium mineral water with low mineralization and rich trace element composition.',
      labCert: 'Certified by Ministry of Health of Republic of Bulgaria',
      treatmentsTitle: 'Signature Balneo & Spa Rituals',
      treatmentsSubtitle: 'Treatments with healing peloid mud from Varna Lake, marine minerals, and pure Bulgarian rose oil.',
      btnBookNow: 'Book Ritual',
      durationMins: 'min',
    },
    rooms: {
      badge: 'Beachfront Living',
      tag: 'Beachfront Living',
      title: 'Rooms & Suites with Panoramic Views',
      subtitle: 'Wake up to the gentle sound of the Black Sea and relax on spacious private balconies overlooking the beach or centennial pine park.',
      filterAll: 'All Rooms',
      filterSea: 'Sea View',
      filterSuite: 'Family & VIP Suites',
      filterPark: 'Park View',
      filterSuites: 'Family & VIP Suites',
      virtualTour: '360° Virtual Tour',
      btnTour360: '360° Virtual Tour',
      from: 'From',
      btnBookRoom: 'Reserve Room',
      reserveRoom: 'Reserve Room',
      perNight: '/ night',
      viewDetails: 'Details',
      amenitiesTitle: 'Room Amenities:',
    },
    ship: {
      badge: 'Coastal Dining Landmark',
      tag: 'Coastal Dining Landmark',
      title: 'The Sirius Ship Restaurant',
      subtitle: 'An authentic 13th-century wooden galleon ship restaurant docked directly in the waves of the Black Sea.',
      signatureDishes: 'Signature Seafood & Steaks',
      reserveTable: 'Reserve Galleon Table',
      historyTitle: 'A Maritime Culinary Journey Surrounded by Waves',
      historyP1: 'Crafted with master maritime precision following medieval frigate blueprints, The Sirius Ship is a legendary landmark of St. Constantine & Helena resort. As you dine, the Black Sea waves lap gently beneath the ship hull.',
      historyP2: 'Our executive chef presents wild Black Sea turbot seared on hot lava stones, plump mussels from Kavarna Bay steamed in Bulgarian Chardonnay, prime dry-aged steaks, and selected regional wines.',
      btnReserveTable: 'Reserve Galleon Table',
      menuTitle: 'Chef Special Menu Highlights',
      menuSubtitle: 'Fresh Black Sea catches, premium cuts, and sunset signature cocktails.',
      filterAll: 'All Items',
      filterSeafood: 'Seafood',
      filterMains: 'Mains & Steaks',
      filterStarters: 'Starters',
      filterCocktails: 'Cocktails',
    },
    packages: {
      badge: 'Tailored Luxury Boarding',
      tag: 'Tailored Luxury Boarding',
      title: 'All-Inclusive & Thermal Spa Packages',
      subtitle: 'Choose the ideal dining and wellness tier for your holiday. Every package includes direct access to the healing 38°C mineral waters.',
      included: "What's Included:",
      perNight: 'Price Per Night',
      sevenNights: '7-Night Package (-10%)',
      popularBadge: 'Most Popular Choice',
      includedTitle: "What's Included:",
      btnSelect: 'Select Package',
      featureThermal: '38°C Thermal Springs',
      featureThermalDesc: 'Free access to all hotel guests regardless of package tier.',
      featureBeach: 'Private Sandy Beach',
      featureBeachDesc: 'Sunbeds & umbrellas directly on the sand in front of the hotel.',
      featureShip: 'Ship Buffet & Grills',
      featureShipDesc: 'Show-cooking stations, fresh Black Sea salads, and desserts.',
      featureBars: 'Beach Cocktail Bars',
      featureBarsDesc: 'Refreshing spritzes, Bulgarian beers, and artisanal ice cream.',
    },
    liveCam: enLiveCam,
    livecam: enLiveCam,
    location: {
      tag: 'Resort Heritage Since 1908',
      title: 'Saints Constantine & Helena Resort',
      subtitle: "Bulgaria's oldest and most prestigious Black Sea spa sanctuary, celebrated for combining centennial pine forests, therapeutic mineral micro-climates, and tranquil sandy bays.",
      coastalTitle: 'Privileged Frontline Coastal Setting',
      coastalDesc: 'Nestled right where the serene beach meets a lush protected botanical pine park, Spa Hotel Sirius Beach offers seclusion without isolation.',
      botanicalTitle: 'University Botanical Garden & Ecopark',
      botanicalDesc: '800 meters • Over 300 rare tree & rose species',
      monasteryTitle: '16th-Century Monastery of St. Constantine & Helena',
      monasteryDesc: '500 meters • Ancient holy spring (Ayazmo) with healing waters',
      airportTitle: 'Varna International Airport (VAR)',
      airportDesc: '18 km • 20 minutes via direct resort highway',
      addressLabel: 'Address:',
      openMaps: 'Google Maps',
    },
    reviews: {
      ratingText: '4.9 / 5.0 Rating from 1,280+ Verified Guests',
      title: 'Guest Experiences & Stories',
    },
    footer: {
      clubTag: 'Sirius Luxury Club',
      clubTitle: 'Receive 10% Off Your First Thermal Spa Stay',
      clubDesc: 'Subscribe for exclusive seasonal balneo packages, wine tastings at The Sirius Ship, and private beach invitations.',
      newsletterPlaceholder: 'Enter your email address...',
      btnSubscribe: 'Subscribe',
      subscribeSuccess: 'Thank you for subscribing! Your 10% promo code is SIRIUS2026.',
      hotelDesc: 'Nestled directly on the sandy shoreline of Saints Constantine and Helena resort, offering restorative 38°C hyper-thermal mineral springs, serene coastal suites, and legendary seafood dining aboard a real 13th-century ship galleon.',
      experienceCol: 'Experience',
      thermalCareCol: 'Thermal Care',
      reservationsCol: 'Reservations',
      cert1: 'Certified European Balneology Member',
      cert2: 'Green Key Eco Certified',
      rights: '© 2026 Spa Hotel Sirius Beach. All Rights Reserved. St. Constantine & Elena, Bulgaria.',
    },
    modals: {
      bookingTitle: 'Spa Hotel Sirius Beach • Direct Booking',
      bestRateBadge: 'Best Rate Direct Guarantee Applied',
      thermalAccessIncluded: 'Free 38°C Thermal Pool Access Included',
      selectedRoom: 'Selected Room',
      boardingTier: 'Boarding Tier',
      guestName: 'Full Guest Name',
      email: 'Email Address',
      phone: 'Contact Phone Number',
      specialRequests: 'Special Requests / Preferences',
      specialRequestsPlaceholder: 'e.g. Quiet floor, baby cot, high pillow',
      noAdvancePayment: 'No advance payment required. Pay upon check-in.',
      totalPrice: 'Total Guaranteed Price',
      btnConfirmBooking: 'Complete Guaranteed Reservation',
      confirmedTitle: 'Reservation Confirmed!',
      confirmedMessage: 'We Look Forward to Welcoming You to Spa Hotel Sirius Beach!',
      voucherSent: 'Confirmation Code: SB-',
      btnCloseReturn: 'Close & Return to Resort Experience',
      spaTitle: 'Balneotherapy & Spa Appointment',
      selectRitual: 'Select Ritual / Treatment',
      preferredDate: 'Preferred Date',
      timeSlot: 'Time Slot',
      roomNumber: 'Room # (if staying)',
      btnConfirmSpa: 'Confirm Spa Appointment',
      spaReservedTitle: 'Spa Treatment Reserved',
      tableTitle: 'The Sirius Ship • Table Reservation',
      chooseZone: 'Choose Galleon Seating Zone',
      guestsCount: 'Guests Count',
      occasionDiet: 'Special Occasion / Dietary Needs',
      btnConfirmTable: 'Confirm Galleon Table Reservation',
      tableReservedTitle: 'Table Reserved at The Sirius Ship',
      tourTitle: '360° Interactive Virtual Tour',
      tourDragTip: 'Click and drag left/right to pan 360°',
      bedroomAngle: 'Bedroom',
      balconyAngle: 'Sea Balcony',
      bathAngle: 'Thermal Bath',
      closeTour: 'Close Tour',
      reserveRoom: 'Reserve This Room',
    },
  },
  DE: {
    nav: {
      announcement: '✦ Natürliches 38°C Thermalmineralwasser & Direkte Strandlage',
      locationShort: 'St. Konstantin & Helena, Bulgarien',
      thermalHub: 'Thermal & Spa Zentrum',
      thermalSpa: 'Thermal & Spa Zentrum',
      rooms: 'Zimmer & Suiten',
      ship: 'Das Sirius Schiff',
      shipRestaurant: 'Das Sirius Schiff',
      shipGalleonBadge: 'Historische Galeone',
      packages: 'All-Inclusive Pakete',
      allInclusive: 'All-Inclusive Pakete',
      liveCam: 'Live Webcam',
      resortStory: 'Über das Resort',
      resortLocation: 'Über das Resort',
      bookStay: 'Buchen',
      downloadHtml: 'HTML herunterladen',
    },
    hero: {
      badge: '38°C Natürliches Hyper-Thermal-Mineralwasser',
      springDepth: '1.300 m Quellentiefe',
      headlinePart1: 'Wo heilende Mineralquellen auf die ',
      headlinePart2: 'Wellen des Schwarzen Meeres treffen',
      subheadline: 'Erleben Sie erstklassige Balneotherapie am goldenen Strand von St. Konstantin & Helena. Genießen Sie 38°C Thermalbecken und das Restaurant auf unserer historischen Galeone.',
      statThermal: 'Thermal-Heilbäder',
      statBeach: 'Direkte Strandlage',
      statHeritage: 'Tradition seit 1908',
      statGalleon: 'Historische Galeone',
      btnBook: 'Zum Bestpreis buchen',
      btnExploreSpa: '38°C Spa entdecken',
      directGuarantee: 'Offizielle Direktbuchung: Bestpreisgarantie + Kostenloser Thermenzugang',
      scrollCheck: 'Verfügbarkeit prüfen',
    },
    bookingBar: {
      badge: 'Direktbuchung mit Bestpreisgarantie und inklusivem Thermal-Spa',
      checkIn: 'Anreise',
      checkOut: 'Abreise',
      guests: 'Gäste & Zimmer',
      adultsLabel: 'Erwachsene',
      childrenLabel: 'Kinder (0-12 J.)',
      roomType: 'Zimmerkategorie',
      allRooms: 'Alle Zimmerkategorien',
      promoCode: 'Gutscheincode (SIRIUS2026 für -10%)',
      promoPlaceholder: 'Code eingeben',
      btnCheck: 'Preise prüfen',
      bestRateText: 'Keine Stornogebühren • Zahlung beim Check-in',
    },
    spa: {
      badge: '38°C Natürliches Thermalwasser',
      tag: 'Balneologie & Hydrotherapie',
      title: '38°C Heilendes Thermal- & Spa-Zentrum',
      subtitle: 'Natürliches 38°C Thermalwasser aus 1.300 Metern Tiefe direkt in unseren Innen- und Außenpools.',
      switchTemp: 'Einheit',
      tabFacilities: 'Pools & Bereiche',
      tabTreatments: 'Spa-Rituale',
      tabMinerals: 'Mineralanalyse',
      tabIndoor: 'Indoor-Thermalbecken (38°C)',
      tabOutdoor: 'Outdoor-Infinity-Pool (36°C)',
      tabSauna: 'Saunadorf (85°C)',
      tabSalt: 'Himalaya-Salzgrotte',
      springSource: 'Geothermale Heilquelle (1.300 m)',
      waterTemp: 'Wassertemperatur',
      healthBenefits: 'Therapeutische Wirkungen',
      mineralComp: 'Mineralzusammensetzung',
      benefitsTitle: 'Therapeutische Wirkungen:',
      mineralsTitle: 'Mineralzusammensetzung:',
      operatingHours: 'Öffnungszeiten:',
      bookTreatment: 'Spa-Behandlung buchen',
      btnBookTreatment: 'Spa-Behandlung buchen',
      viewAnalysis: 'Wasseranalyse ansehen',
      labTitle: 'Hydrogeologische Wasseranalyse',
      labDesc: 'Hypothermales, hydrogencarbonat-calcium-magnesiumhaltiges Mineralwasser.',
      labCert: 'Zertifiziert vom bulgarischen Gesundheitsministerium',
      treatmentsTitle: 'Empfohlene Balneo- & Spa-Rituale',
      treatmentsSubtitle: 'Behandlungen mit Heilschlamm aus dem Varna-See und bulgarischem Rosenöl.',
      btnBookNow: 'Jetzt buchen',
      durationMins: 'Min',
    },
    rooms: {
      badge: 'Wohnen am Meer',
      tag: 'Wohnen am Meer',
      title: 'Zimmer & Suiten mit Panoramablick',
      subtitle: 'Erwachen Sie mit dem Rauschen des Meeres auf privaten Balkonen mit Blick auf den Strand oder den Pinienpark.',
      filterAll: 'Alle Zimmer',
      filterSea: 'Meerblick',
      filterSuite: 'Familien- & VIP-Suiten',
      filterPark: 'Parkblick',
      filterSuites: 'Familien- & VIP-Suiten',
      virtualTour: '360° Virtuelle Tour',
      btnTour360: '360° Virtuelle Tour',
      from: 'Ab',
      btnBookRoom: 'Zimmer reservieren',
      reserveRoom: 'Zimmer reservieren',
      perNight: '/ Nacht',
      viewDetails: 'Details',
      amenitiesTitle: 'Zimmerausstattung:',
    },
    ship: {
      badge: 'Kulinarisches Wahrzeichen',
      tag: 'Kulinarisches Wahrzeichen',
      title: 'Restaurant "Das Sirius Schiff"',
      subtitle: 'Eine authentische Holzgaleone aus dem 13. Jahrhundert direkt in den Wellen des Schwarzen Meeres.',
      signatureDishes: 'Fischspezialitäten & Steaks',
      reserveTable: 'Tisch reservieren',
      historyTitle: 'Kulinarische Schiffsreise umgeben von Wellen',
      historyP1: 'Nach mittelalterlichen Vorbildern erbaut, ist das Schiff "Sirius" das Wahrzeichen des Resorts.',
      historyP2: 'Genießen Sie fangfrischen Steinbutt, Miesmuscheln aus Kavarna und erlesene Weine.',
      btnReserveTable: 'Tisch reservieren',
      menuTitle: 'Highlights der Speisekarte',
      menuSubtitle: 'Frischer Fisch, Steaks und Cocktails bei Sonnenuntergang.',
      filterAll: 'Alle',
      filterSeafood: 'Meeresfrüchte',
      filterMains: 'Hauptgerichte',
      filterStarters: 'Vorspeisen',
      filterCocktails: 'Cocktails',
    },
    packages: {
      badge: 'Premium Verpflegung',
      tag: 'Premium Verpflegung',
      title: 'All-Inclusive & Thermal-Pakete',
      subtitle: 'Wählen Sie das perfekte Paket für Ihren Urlaub. Alle Pakete beinhalten freien Zugang zu den 38°C Thermalquellen.',
      included: 'Inklusivleistungen:',
      perNight: 'Preis pro Nacht',
      sevenNights: '7-Nächte-Paket (-10%)',
      popularBadge: 'Beliebteste Wahl',
      includedTitle: 'Inklusivleistungen:',
      btnSelect: 'Paket wählen',
      featureThermal: '38°C Thermalquellen',
      featureThermalDesc: 'Kostenloser Zugang für alle Hotelgäste.',
      featureBeach: 'Eigener Sandstrand',
      featureBeachDesc: 'Sonnenliegen und Sonnenschirme direkt am Strand vor dem Hotel.',
      featureShip: 'Schiffsbuffet & Grill',
      featureShipDesc: 'Live-Cooking, frische Salate und Desserts.',
      featureBars: 'Strand-Cocktailbars',
      featureBarsDesc: 'Erfrischende Getränke, bulgarisches Bier und handwerkliches Eis.',
    },
    liveCam: deLiveCam,
    livecam: deLiveCam,
    location: {
      tag: 'Tradition seit 1908',
      title: 'Kurort St. Konstantin & Helena',
      subtitle: 'Bulgariens ältester und prestigeträchtigster Kurort am Schwarzen Meer mit Pinienwäldern und Heilquellen.',
      coastalTitle: 'Erstklassige Lage an der Strandlinie',
      coastalDesc: 'Wo der goldene Sandstrand auf den botanischen Park trifft – Spa Hotel Sirius Beach.',
      botanicalTitle: 'Botanischer Garten & Ökopark',
      botanicalDesc: '800 m • Über 300 seltene Baumarten und Rosengarten',
      monasteryTitle: 'Kloster St. Konstantin & Helena (16. Jh.)',
      monasteryDesc: '500 m • Heilige Quelle (Ayazmo) mit heilendem Wasser',
      airportTitle: 'Flughafen Varna (VAR)',
      airportDesc: '18 km • 20 Minuten mit dem Auto',
      addressLabel: 'Adresse:',
      openMaps: 'Google Maps',
    },
    reviews: {
      ratingText: '4.9 / 5.0 Bewertung von über 1.280 Gästen',
      title: 'Erfahrungen und Bewertungen unserer Gäste',
    },
    footer: {
      clubTag: 'Sirius VIP Club',
      clubTitle: '10% Rabatt auf Ihren ersten Wellness-Aufenthalt',
      clubDesc: 'Abonnieren Sie exklusive Angebote und Einladungen.',
      newsletterPlaceholder: 'E-Mail-Adresse eingeben...',
      btnSubscribe: 'Abonnieren',
      subscribeSuccess: 'Vielen Dank! Ihr Gutscheincode: SIRIUS2026.',
      hotelDesc: 'Spa Hotel Sirius Beach **** direkt am Strand von St. Konstantin & Helena mit 38°C Thermalbecken und Schiff-Restaurant.',
      experienceCol: 'Erlebnisse',
      thermalCareCol: 'Thermal-Spa',
      reservationsCol: 'Reservierungen',
      cert1: 'Mitglied des Europäischen Heilbäderverbandes',
      cert2: 'Green Key Zertifiziert',
      rights: '© 2026 Spa Hotel Sirius Beach. Alle Rechte vorbehalten. St. Konstantin & Helena, Bulgarien.',
    },
    modals: {
      bookingTitle: 'Spa Hotel Sirius Beach • Direktbuchung',
      bestRateBadge: 'Offizielle Bestpreisgarantie',
      thermalAccessIncluded: 'Inklusive freiem Zugang zu 38°C Thermalpools',
      selectedRoom: 'Ausgewähltes Zimmer',
      boardingTier: 'Verpflegung',
      guestName: 'Vollständiger Name des Gastes',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      specialRequests: 'Besondere Wünsche',
      specialRequestsPlaceholder: 'z.B. ruhiges Zimmer, Babybett',
      noAdvancePayment: 'Keine Vorauszahlung erforderlich. Zahlung beim Check-in.',
      totalPrice: 'Garantierter Gesamtpreis',
      btnConfirmBooking: 'Buchung abschließen',
      confirmedTitle: 'Buchung erfolgreich bestätigt!',
      confirmedMessage: 'Wir freuen uns darauf, Sie im Spa Hotel Sirius Beach willkommen zu heißen!',
      voucherSent: 'Buchungscode: SB-',
      btnCloseReturn: 'Schließen',
      spaTitle: 'Termin für Balneo- & Spa-Behandlung',
      selectRitual: 'Behandlung auswählen',
      preferredDate: 'Wunschdatum',
      timeSlot: 'Uhrzeit',
      roomNumber: 'Zimmernummer (falls Hotelgast)',
      btnConfirmSpa: 'Termin bestätigen',
      spaReservedTitle: 'Spa-Termin erfolgreich reserviert',
      tableTitle: 'Das Sirius Schiff • Tischreservierung',
      chooseZone: 'Bereich auf dem Schiff wählen',
      guestsCount: 'Anzahl Gäste',
      occasionDiet: 'Anlass / Besondere Wünsche',
      btnConfirmTable: 'Tisch reservieren',
      tableReservedTitle: 'Tisch erfolgreich reserviert',
      tourTitle: '360° Interaktive Virtuelle Tour',
      tourDragTip: 'Klicken und ziehen Sie mit der Maus für 360° Rundumblick',
      bedroomAngle: 'Schlafzimmer',
      balconyAngle: 'Meerblick-Balkon',
      bathAngle: 'Thermalbad',
      closeTour: 'Tour schließen',
      reserveRoom: 'Dieses Zimmer buchen',
    },
  },
  RU: {
    nav: {
      announcement: '✦ Природная 38°C термальная минеральная вода на первой линии у моря',
      locationShort: 'к.к. Св. Св. Константин и Елена, Болгария',
      thermalHub: 'Термальный & СПА Центр',
      thermalSpa: 'Термальный & СПА Центр',
      rooms: 'Номера & Люксы',
      ship: 'Корабль Сириус',
      shipRestaurant: 'Корабль Сириус',
      shipGalleonBadge: 'Аутентичный корабль',
      packages: 'Пакеты Все Включено',
      allInclusive: 'Пакеты Все Включено',
      liveCam: 'Онлайн Вебкамера',
      resortStory: 'О курорте',
      resortLocation: 'О курорте',
      bookStay: 'Забронировать',
      downloadHtml: 'Скачать HTML файл',
    },
    hero: {
      badge: '38°C Природная Гипертермальная Вода',
      springDepth: '1300 м глубина источника',
      headlinePart1: 'Где целебные минеральные источники встречаются с ',
      headlinePart2: 'волнами Черного моря',
      subheadline: 'Окунитесь в целебную силу бальнеологии на самом берегу моря в Св. Св. Константине и Елене. Горячие 38°C термальные бассейны, панорамные номера и легендарный ресторан-корабль "Сириус".',
      statThermal: 'Термальные бассейны',
      statBeach: 'На самом берегу',
      statHeritage: 'Традиции с 1908 г.',
      statGalleon: 'Ресторан на корабле',
      btnBook: 'Забронировать по лучшей цене',
      btnExploreSpa: 'Узнать о 38°C СПА',
      directGuarantee: 'Официальное прямое бронирование: Гарантия лучшей цены + Бесплатный доступ в термальные бассейны',
      scrollCheck: 'Проверить наличие',
    },
    bookingBar: {
      badge: 'Прямое бронирование с гарантией лучшей цены и бесплатным СПА',
      checkIn: 'Заезд',
      checkOut: 'Выезд',
      guests: 'Гости & Номера',
      adultsLabel: 'Взрослые',
      childrenLabel: 'Дети (0-12 лет)',
      roomType: 'Категория номера',
      allRooms: 'Все категории',
      promoCode: 'Промокод (SIRIUS2026 на -10%)',
      promoPlaceholder: 'Введите код',
      btnCheck: 'Узнать цены',
      bestRateText: 'Без штрафов за отмену • Оплата при заселении на ресепшн',
    },
    spa: {
      badge: '38°C Природная Минеральная Вода',
      tag: 'Бальнеология & Гидротерапия',
      title: '38°C Лечебный Термальный & СПА Комплекс',
      subtitle: 'Природный источник термальной воды, бьющий с глубины 1300 метров прямо в наши крытые и открытые бассейны.',
      switchTemp: 'Единицы',
      tabFacilities: 'Бассейны & Зоны',
      tabTreatments: 'СПА Ритуалы',
      tabMinerals: 'Минеральный Анализ',
      tabIndoor: 'Крытый бассейн (38°C)',
      tabOutdoor: 'Открытый инфинити-бассейн (36°C)',
      tabSauna: 'Банный комплекс (85°C)',
      tabSalt: 'Гималайская соляная комната',
      springSource: 'Геотермальный источник (1300 м)',
      waterTemp: 'Температура воды',
      healthBenefits: 'Терапевтический эффект & Показания',
      mineralComp: 'Минеральный состав',
      benefitsTitle: 'Терапевтический эффект & Показания:',
      mineralsTitle: 'Минеральный состав & Элементы:',
      operatingHours: 'Часы работы:',
      bookTreatment: 'Записаться на СПА процедуру',
      btnBookTreatment: 'Записаться на СПА процедуру',
      viewAnalysis: 'Химический анализ воды',
      labTitle: 'Химический анализ воды',
      labDesc: 'Гипотермальная гидрокарбонатно-кальциево-магниевая минеральная вода с низкой минерализацией и богатым микроэлементным составом.',
      labCert: 'Сертифицировано Министерством здравоохранения Болгарии',
      treatmentsTitle: 'Фирменные Балнео & СПА Ритуалы',
      treatmentsSubtitle: 'Процедуры с лечебной грязью Варненского озера и натуральным болгарским розовым маслом.',
      btnBookNow: 'Записаться',
      durationMins: 'мин',
    },
    rooms: {
      badge: 'Отдых на побережье',
      tag: 'Отдых на побережье',
      title: 'Номера и Апартаменты с Панорамным Видом',
      subtitle: 'Просыпайтесь под шум морских волн на просторных террасах с видом на море или вековой сосновый парк.',
      filterAll: 'Все номера',
      filterSea: 'Вид на море',
      filterSuite: 'Семейные & VIP Люксы',
      filterPark: 'Вид на парк',
      filterSuites: 'Семейные & VIP Люксы',
      virtualTour: '360° Виртуальный тур',
      btnTour360: '360° Виртуальный тур',
      from: 'От',
      btnBookRoom: 'Забронировать',
      reserveRoom: 'Забронировать',
      perNight: '/ ночь',
      viewDetails: 'Подробнее',
      amenitiesTitle: 'Удобства в номере:',
    },
    ship: {
      badge: 'Кулинарный Символ Побережья',
      tag: 'Кулинарный Символ Побережья',
      title: 'Ресторан "Корабль Сириус"',
      subtitle: 'Аутентичный деревянный корабль XIII века, расположенный прямо в водах Черного моря.',
      signatureDishes: 'Фирменные блюда & Рыба',
      reserveTable: 'Забронировать столик',
      historyTitle: 'Морское гастрономическое путешествие среди волн',
      historyP1: 'Построенный по старинным чертежам, Корабль "Сириус" является легендарным символом курорта.',
      historyP2: 'Наш шеф-повар предлагает свежего черноморского калкана, мидии из Каварны и изысканные вина.',
      btnReserveTable: 'Забронировать столик',
      menuTitle: 'Фирменное меню',
      menuSubtitle: 'Свежие морепродукты, стейки и авторские коктейли на закате.',
      filterAll: 'Все блюда',
      filterSeafood: 'Морепродукты',
      filterMains: 'Основные блюда',
      filterStarters: 'Закуски',
      filterCocktails: 'Коктейли',
    },
    packages: {
      badge: 'Премиум Питание & СПА',
      tag: 'Премиум Питание',
      title: 'Пакеты Все Включено & СПА',
      subtitle: 'Выберите идеальное сочетание питания и оздоровления с доступом к 38°C минеральным бассейнам.',
      included: 'Что включено:',
      perNight: 'Цена за 1 ночь',
      sevenNights: 'Пакет на 7 ночей (-10%)',
      popularBadge: 'Самый популярный выбор',
      includedTitle: 'Что включено:',
      btnSelect: 'Выбрать пакет',
      featureThermal: '38°C Минеральные источники',
      featureThermalDesc: 'Бесплатный доступ к термальным бассейнам для всех гостей отеля.',
      featureBeach: 'Собственный песчаный пляж',
      featureBeachDesc: 'Шезлонги и зонты на пляже перед отелем.',
      featureShip: 'Шведский стол и гриль',
      featureShipDesc: 'Богатый выбор блюд болгарской и европейской кухни.',
      featureBars: 'Пляжные коктейль-бары',
      featureBarsDesc: 'Освежающие напитки, пиво, вино и мороженое.',
    },
    liveCam: ruLiveCam,
    livecam: ruLiveCam,
    location: {
      tag: 'Курорт с 1908 года',
      title: 'Курорт Св. Св. Константин и Елена',
      subtitle: 'Старейший и самый престижный бальнеологический курорт Болгарии на Черном море.',
      coastalTitle: 'Привилегированное расположение на первой линии',
      coastalDesc: 'Там, где золотой песчаный пляж встречается с хвойным ботаническим парком.',
      botanicalTitle: 'Ботанический сад & Экопарк',
      botanicalDesc: '800 м • Более 300 редких видов растений и розарий',
      monasteryTitle: 'Монастырь Св. Константина и Елены (XVI в.)',
      monasteryDesc: '500 м • Древний целебный источник со святой водой',
      airportTitle: 'Аэропорт Варна (VAR)',
      airportDesc: '18 км • 20 минут на автомобиле',
      addressLabel: 'Адрес:',
      openMaps: 'Google Карты',
    },
    reviews: {
      ratingText: '4.9 / 5.0 Рейтинг на основе 1280+ отзывов',
      title: 'Отзывы и Впечатления Наших Гостей',
    },
    footer: {
      clubTag: 'Клуб Привилегий Сириус',
      clubTitle: 'Получите скидку 10% на первый отдых',
      clubDesc: 'Подпишитесь на специальные бальнео-предложения и закрытые мероприятия.',
      newsletterPlaceholder: 'Введите ваш email...',
      btnSubscribe: 'Подписаться',
      subscribeSuccess: 'Спасибо! Ваш промокод на скидку 10%: SIRIUS2026.',
      hotelDesc: 'СПА Отель Сириус Бич **** на первой линии в Св. Константине и Елене с 38°C минеральными водами и рестораном на корабле.',
      experienceCol: 'Впечатления',
      thermalCareCol: 'Бальнеология',
      reservationsCol: 'Контакты & Бронь',
      cert1: 'Член Европейской Ассоциации Бальнеологии',
      cert2: 'Сертификат Green Key',
      rights: '© 2026 СПА Отель Сириус Бич. Все права защищены. Св. Константин и Елена, Болгария.',
    },
    modals: {
      bookingTitle: 'СПА Отель Сириус Бич • Прямое Бронирование',
      bestRateBadge: 'Гарантия лучшей цены от отеля',
      thermalAccessIncluded: 'Бесплатный доступ к 38°C термальным бассейнам включен',
      selectedRoom: 'Выбранный номер',
      boardingTier: 'Питание / Пакет',
      guestName: 'Имя и фамилия гостя',
      email: 'Электронная почта',
      phone: 'Номер телефона',
      specialRequests: 'Особые пожелания',
      specialRequestsPlaceholder: 'например, тихий этаж, детская кроватка',
      noAdvancePayment: 'Предоплата не требуется. Оплата при заселении.',
      totalPrice: 'Гарантированная стоимость',
      btnConfirmBooking: 'Подтвердить бронирование',
      confirmedTitle: 'Бронирование подтверждено!',
      confirmedMessage: 'Мы с радостью ждем вас в СПА Отеле Сириус Бич!',
      voucherSent: 'Код бронирования: SB-',
      btnCloseReturn: 'Закрыть',
      spaTitle: 'Запись на СПА и Бальнео Процедуры',
      selectRitual: 'Выберите процедуру',
      preferredDate: 'Желаемая дата',
      timeSlot: 'Время',
      roomNumber: 'Номер комнаты (для гостей отеля)',
      btnConfirmSpa: 'Записаться на процедуру',
      spaReservedTitle: 'Запись на процедуру подтверждена',
      tableTitle: 'Корабль Сириус • Бронь столика',
      chooseZone: 'Выберите зону на корабле',
      guestsCount: 'Количество гостей',
      occasionDiet: 'Повод / Пожелания',
      btnConfirmTable: 'Забронировать столик',
      tableReservedTitle: 'Столик успешно забронирован',
      tourTitle: '360° Интерактивный Виртуальный Тур',
      tourDragTip: 'Зажмите и перемещайте мышь для кругового обзора',
      bedroomAngle: 'Спальня',
      balconyAngle: 'Морской балкон',
      bathAngle: 'Минеральная ванна',
      closeTour: 'Закрыть тур',
      reserveRoom: 'Забронировать этот номер',
    },
  },
};
