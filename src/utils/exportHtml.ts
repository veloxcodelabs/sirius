/**
 * Generates and downloads a self-contained, standalone single HTML5 file for Spa Hotel Sirius Beach.
 */

export function downloadStandaloneHtml(): void {
  const htmlContent = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Spa Hotel Sirius Beach **** | Thermal Mineral Spa & Beachfront Luxury</title>
  <meta name="description" content="Luxury 4-star beachfront thermal mineral spa hotel and legendary Ship Restaurant in St. Constantine and Elena, Bulgaria.">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    h1, h2, h3, .font-serif-luxury { font-family: 'Cormorant Garamond', Georgia, serif; }
    .font-cinzel { font-family: 'Cinzel', serif; }
    .glass-panel { background: rgba(11, 25, 44, 0.85); backdrop-filter: blur(16px); border: 1px solid rgba(212, 175, 55, 0.25); }
    .gold-gradient-text { background: linear-gradient(135deg, #F6E05E 0%, #D4AF37 50%, #AA7C11 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  </style>
</head>
<body class="bg-[#0b1523] text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-900 overflow-x-hidden">

  <!-- Top Announcement -->
  <div class="bg-gradient-to-r from-amber-900/60 via-amber-700/40 to-amber-900/60 border-b border-amber-500/20 py-2 text-center text-xs tracking-wider text-amber-200 uppercase font-medium">
    ✦ Natural 38°C Thermal Mineral Springs & Direct Beachfront Access ✦ St. Constantine & Elena, Bulgaria
  </div>

  <!-- Navbar -->
  <nav class="sticky top-0 z-40 bg-[#0a192f]/90 backdrop-blur-md border-b border-amber-500/15 px-6 py-4 flex items-center justify-between">
    <div class="flex items-center space-x-3">
      <div class="w-10 h-10 rounded-full border border-amber-400/40 flex items-center justify-center bg-amber-500/10 text-amber-300">
        <i data-lucide="waves" class="w-5 h-5"></i>
      </div>
      <div>
        <span class="font-cinzel text-lg font-bold tracking-widest text-amber-100 block">SIRIUS BEACH</span>
        <span class="text-[10px] tracking-[0.25em] text-amber-400 uppercase font-medium">SPA HOTEL & RESORT ****</span>
      </div>
    </div>
    <div class="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-300">
      <a href="#spa" class="hover:text-amber-300 transition">Thermal & Spa Hub</a>
      <a href="#rooms" class="hover:text-amber-300 transition">Rooms & Suites</a>
      <a href="#ship" class="hover:text-amber-300 transition">The Sirius Ship</a>
      <a href="#packages" class="hover:text-amber-300 transition">All-Inclusive</a>
      <a href="#livecam" class="hover:text-amber-300 transition">Live Cam & Weather</a>
    </div>
    <a href="#booking-bar" class="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold rounded-full text-xs uppercase tracking-widest shadow-lg shadow-amber-500/20 transition transform hover:-translate-y-0.5">
      Book Your Stay
    </a>
  </nav>

  <!-- Hero Section -->
  <section class="relative min-h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85" class="w-full h-full object-cover brightness-50" alt="Sirius Beachfront and Thermal Waters" />
      <div class="absolute inset-0 bg-gradient-to-b from-[#0b1523]/70 via-[#0b1523]/40 to-[#0b1523]"></div>
    </div>
    <div class="relative z-10 max-w-4xl mx-auto py-20 space-y-6">
      <div class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 backdrop-blur-md text-amber-300 text-xs tracking-widest uppercase">
        <i data-lucide="sparkles" class="w-4 h-4"></i>
        <span>Natural 38°C Thermal Mineral Healing Waters</span>
      </div>
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none font-serif-luxury">
        Where Healing Mineral Springs Meet the <span class="gold-gradient-text">Black Sea Waves</span>
      </h1>
      <p class="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
        Experience beachfront balneo luxury in Bulgaria's historic thermal haven. Restorative 38°C mineral pools, private golden sands, and authentic seafood dining aboard our legendary 13th-century ship galleon.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
        <a href="#booking-bar" class="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold rounded-full text-sm uppercase tracking-widest shadow-xl transition transform hover:scale-105">
          Reserve at Best Rate
        </a>
        <a href="#spa" class="px-8 py-4 border border-amber-400/40 hover:bg-amber-400/10 rounded-full text-sm uppercase tracking-widest text-amber-200 transition">
          Explore Thermal Hub (38°C)
        </a>
      </div>
    </div>
  </section>

  <!-- Sticky Booking Bar -->
  <div id="booking-bar" class="relative z-30 max-w-6xl mx-auto -mt-10 px-4 mb-24">
    <div class="glass-panel p-6 rounded-2xl shadow-2xl space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/20 pb-3">
        <span class="text-xs uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-1.5">
          <i data-lucide="shield-check" class="w-4 h-4 text-emerald-400"></i> Best Rate Direct Guarantee
        </span>
        <span class="text-xs text-slate-400">Free Spa & Thermal Pool Access Included</span>
      </div>
      <form onsubmit="event.preventDefault(); alert('Searching live availability for Spa Hotel Sirius Beach. Please continue to select your room.');" class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label class="block text-xs uppercase tracking-wider text-slate-300 mb-1">Check-in / Check-out</label>
          <input type="text" value="Aug 25 - Aug 30, 2026" class="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:border-amber-400 outline-none" />
        </div>
        <div>
          <label class="block text-xs uppercase tracking-wider text-slate-300 mb-1">Guests</label>
          <select class="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:border-amber-400 outline-none">
            <option>2 Adults, 0 Children</option>
            <option>2 Adults, 1 Child</option>
            <option>1 Adult</option>
            <option>3 Adults (Suite)</option>
          </select>
        </div>
        <div>
          <label class="block text-xs uppercase tracking-wider text-slate-300 mb-1">Room Category</label>
          <select class="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:border-amber-400 outline-none">
            <option>Frontline Sea View Room (From €145)</option>
            <option>Captain's Ship Suite (From €240)</option>
            <option>Superior Park View Room (From €110)</option>
          </select>
        </div>
        <div class="flex items-end">
          <button type="submit" class="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 text-slate-950 font-bold py-2.5 px-4 rounded-lg uppercase tracking-wider text-sm transition">
            Check Availability
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Thermal & Spa Hub -->
  <section id="spa" class="py-20 px-6 max-w-7xl mx-auto">
    <div class="text-center space-y-4 mb-16">
      <span class="text-xs uppercase tracking-widest text-amber-400 font-semibold">Balneotherapy & Wellness</span>
      <h2 class="text-4xl sm:text-5xl font-bold font-serif-luxury text-white">Natural 38°C Thermal & Spa Sanctuary</h2>
      <p class="text-slate-300 max-w-2xl mx-auto">Pristine underground mineral spring water flowing from 1,300 meters, naturally rich in magnesium and calcium to revitalize mind and body.</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="glass-panel rounded-2xl overflow-hidden group hover:border-amber-400/60 transition p-4 flex flex-col">
        <div class="relative h-48 rounded-xl overflow-hidden mb-4">
          <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Indoor Mineral Pool" />
          <span class="absolute top-3 right-3 bg-red-500/90 text-white text-xs font-bold px-2.5 py-1 rounded-full">38°C (100.4°F)</span>
        </div>
        <h3 class="text-xl font-bold font-serif-luxury text-amber-100">Indoor Balneo Pool</h3>
        <p class="text-xs text-slate-300 mt-2 flex-grow">Equipped with underwater hydro-massage geysers and swan-neck cascades for deep spinal relief.</p>
        <button onclick="alert('Booking Spa Treatment. Opening Balneotherapy reception inquiry.')" class="mt-4 w-full py-2 bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-semibold text-xs uppercase tracking-wider rounded-lg transition">Book Treatment</button>
      </div>

      <div class="glass-panel rounded-2xl overflow-hidden group hover:border-amber-400/60 transition p-4 flex flex-col">
        <div class="relative h-48 rounded-xl overflow-hidden mb-4">
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Outdoor Thermal Infinity Pool" />
          <span class="absolute top-3 right-3 bg-amber-500/90 text-slate-950 text-xs font-bold px-2.5 py-1 rounded-full">36°C (96.8°F)</span>
        </div>
        <h3 class="text-xl font-bold font-serif-luxury text-amber-100">Outdoor Beach Pool</h3>
        <p class="text-xs text-slate-300 mt-2 flex-grow">Bathe directly on the beach edge with warm mineral water overlooking the Black Sea horizon.</p>
        <button onclick="alert('Booking Spa Treatment. Opening Balneotherapy reception inquiry.')" class="mt-4 w-full py-2 bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-semibold text-xs uppercase tracking-wider rounded-lg transition">Book Treatment</button>
      </div>

      <div class="glass-panel rounded-2xl overflow-hidden group hover:border-amber-400/60 transition p-4 flex flex-col">
        <div class="relative h-48 rounded-xl overflow-hidden mb-4">
          <img src="https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=600&q=80" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Sauna Village" />
          <span class="absolute top-3 right-3 bg-orange-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-full">85°C (185°F)</span>
        </div>
        <h3 class="text-xl font-bold font-serif-luxury text-amber-100">Sauna Village</h3>
        <p class="text-xs text-slate-300 mt-2 flex-grow">Finnish pine sauna, Bulgarian mountain herbal aroma steam bath, and contrast plunge bucket.</p>
        <button onclick="alert('Booking Spa Treatment. Opening Balneotherapy reception inquiry.')" class="mt-4 w-full py-2 bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-semibold text-xs uppercase tracking-wider rounded-lg transition">Book Treatment</button>
      </div>

      <div class="glass-panel rounded-2xl overflow-hidden group hover:border-amber-400/60 transition p-4 flex flex-col">
        <div class="relative h-48 rounded-xl overflow-hidden mb-4">
          <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Himalayan Salt Room" />
          <span class="absolute top-3 right-3 bg-pink-500/90 text-white text-xs font-bold px-2.5 py-1 rounded-full">Halotherapy</span>
        </div>
        <h3 class="text-xl font-bold font-serif-luxury text-amber-100">Himalayan Salt Room</h3>
        <p class="text-xs text-slate-300 mt-2 flex-grow">Sterile, negatively ionized micro-salt aerosol chamber for respiratory and skin rejuvenation.</p>
        <button onclick="alert('Booking Spa Treatment. Opening Balneotherapy reception inquiry.')" class="mt-4 w-full py-2 bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-semibold text-xs uppercase tracking-wider rounded-lg transition">Book Treatment</button>
      </div>
    </div>
  </section>

  <!-- The Sirius Ship Restaurant -->
  <section id="ship" class="py-20 bg-gradient-to-b from-[#0a192f] to-[#0b1523] border-y border-amber-500/20 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl">
        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80" class="w-full h-[450px] object-cover" alt="The Sirius Ship Restaurant" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-end p-8">
          <span class="text-xs uppercase tracking-widest text-amber-400 font-semibold">Historic Galleon on the Shore</span>
          <h3 class="text-3xl font-bold font-serif-luxury text-white">The Sirius Ship Restaurant</h3>
          <p class="text-sm text-slate-200">A real 13th-century style wooden ship docked directly in the Black Sea waters.</p>
        </div>
      </div>
      <div class="space-y-6">
        <span class="text-xs uppercase tracking-widest text-amber-400 font-semibold">Culinary Excellence</span>
        <h2 class="text-4xl sm:text-5xl font-bold font-serif-luxury text-white">Dine Aboard the Legendary Galleon</h2>
        <p class="text-slate-300 leading-relaxed">
          Step aboard our wooden ship anchored right where the waves crash against the shore. Savor wild Black Sea turbot, Kavarna mussels simmered in Bulgarian white wine, and premium dry-aged cuts paired with vintage regional vintages.
        </p>
        <div class="space-y-3 pt-2">
          <div class="flex justify-between items-center p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div>
              <h4 class="font-semibold text-white text-sm">Wild Black Sea Turbot on Lava Stone</h4>
              <p class="text-xs text-slate-400">Garlic olive oil, samphire, charred lemon</p>
            </div>
            <span class="font-bold text-amber-400 text-sm">€32</span>
          </div>
          <div class="flex justify-between items-center p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div>
              <h4 class="font-semibold text-white text-sm">Kavarna Mussels in White Wine & Thyme</h4>
              <p class="text-xs text-slate-400">Chardonnay reduction, shallots, sea salt</p>
            </div>
            <span class="font-bold text-amber-400 text-sm">€14</span>
          </div>
        </div>
        <button onclick="alert('Table Reservation requested for The Sirius Ship. A concierge will confirm your sunset table.')" class="px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-full shadow-lg hover:brightness-110 transition">
          Reserve Sunset Table
        </button>
      </div>
    </div>
  </section>

  <!-- Rooms & Suites -->
  <section id="rooms" class="py-20 px-6 max-w-7xl mx-auto">
    <div class="text-center space-y-4 mb-16">
      <span class="text-xs uppercase tracking-widest text-amber-400 font-semibold">Accommodations</span>
      <h2 class="text-4xl sm:text-5xl font-bold font-serif-luxury text-white">Beachfront Rooms & Luxury Suites</h2>
      <p class="text-slate-300 max-w-2xl mx-auto">Wake up to panoramic sea sunrises with private balconies and in-room thermal mineral water taps.</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="glass-panel rounded-2xl overflow-hidden p-4 space-y-4 border border-amber-500/20">
        <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" class="w-full h-56 object-cover rounded-xl" alt="Frontline Sea View Room" />
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-xl font-bold font-serif-luxury text-white">Frontline Sea View Room</h3>
            <span class="text-xs text-amber-400">Panoramic Sea Balcony</span>
          </div>
          <span class="text-lg font-bold text-white">€145 <span class="text-xs text-slate-400 font-normal">/night</span></span>
        </div>
        <button onclick="alert('Selected Frontline Sea View Room for reservation.')" class="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-lg transition">Book Room</button>
      </div>

      <div class="glass-panel rounded-2xl overflow-hidden p-4 space-y-4 border border-amber-500/40 relative">
        <span class="absolute top-6 right-6 bg-amber-400 text-slate-950 font-bold text-[10px] uppercase px-3 py-1 rounded-full">Signature Suite</span>
        <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80" class="w-full h-56 object-cover rounded-xl" alt="Captain's Ship Suite" />
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-xl font-bold font-serif-luxury text-white">Captain's Ship Suite</h3>
            <span class="text-xs text-amber-400">270° Ocean & Private Jacuzzi</span>
          </div>
          <span class="text-lg font-bold text-white">€240 <span class="text-xs text-slate-400 font-normal">/night</span></span>
        </div>
        <button onclick="alert('Selected Captain\\'s Ship Suite for reservation.')" class="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-lg transition">Book Suite</button>
      </div>

      <div class="glass-panel rounded-2xl overflow-hidden p-4 space-y-4 border border-amber-500/20">
        <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80" class="w-full h-56 object-cover rounded-xl" alt="Superior Park View Room" />
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-xl font-bold font-serif-luxury text-white">Superior Park View Room</h3>
            <span class="text-xs text-amber-400">Centennial Forest Balcony</span>
          </div>
          <span class="text-lg font-bold text-white">€110 <span class="text-xs text-slate-400 font-normal">/night</span></span>
        </div>
        <button onclick="alert('Selected Superior Park View Room for reservation.')" class="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-lg transition">Book Room</button>
      </div>
    </div>
  </section>

  <!-- Live Cam & Weather -->
  <section id="livecam" class="py-20 bg-[#0a192f] border-t border-amber-500/15 px-6">
    <div class="max-w-6xl mx-auto space-y-8">
      <div class="text-center space-y-2">
        <span class="text-xs uppercase tracking-widest text-amber-400 font-semibold">Live Transmission</span>
        <h2 class="text-3xl sm:text-4xl font-bold font-serif-luxury text-white">Live Beachfront & Thermal Pool Cam</h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 glass-panel p-4 rounded-2xl relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" class="w-full h-80 object-cover rounded-xl" alt="Live Webcam" />
          <div class="absolute top-7 left-7 bg-red-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 animate-pulse">
            <span class="w-2 h-2 rounded-full bg-white"></span> LIVE HD FEED
          </div>
          <div class="absolute bottom-7 left-7 right-7 bg-slate-950/80 backdrop-blur-md p-3 rounded-lg flex justify-between text-xs text-slate-300">
            <span>St. Constantine & Elena Shore</span>
            <span class="text-amber-400 font-bold">Black Sea Water: 24°C | Wave: 0.3m</span>
          </div>
        </div>
        <div class="glass-panel p-6 rounded-2xl space-y-6 flex flex-col justify-between">
          <div class="space-y-4">
            <h3 class="text-lg font-bold text-amber-200 uppercase font-cinzel">Current Weather</h3>
            <div class="flex items-center justify-between">
              <div>
                <span class="text-4xl font-bold text-white">28°C</span>
                <p class="text-xs text-slate-400">Sunny & Calm Sea Breeze</p>
              </div>
              <i data-lucide="sun" class="w-12 h-12 text-amber-400"></i>
            </div>
            <div class="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-3">
              <div class="flex justify-between"><span>Thermal Spring Temp:</span> <strong class="text-amber-300">38.2°C</strong></div>
              <div class="flex justify-between"><span>UV Index:</span> <strong>6 (Moderate)</strong></div>
              <div class="flex justify-between"><span>Humidity:</span> <strong>58%</strong></div>
              <div class="flex justify-between"><span>Wind:</span> <strong>ENE 8 km/h</strong></div>
            </div>
          </div>
          <a href="#booking-bar" class="block text-center py-3 bg-amber-400 text-slate-950 font-bold uppercase text-xs rounded-lg tracking-wider hover:bg-amber-300">
            Book Today
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-slate-950 border-t border-amber-500/20 py-12 px-6 text-center text-xs text-slate-400 space-y-4">
    <p class="font-cinzel text-sm text-amber-100 font-bold tracking-widest">SPA HOTEL SIRIUS BEACH ****</p>
    <p>St. Constantine and Elena Resort, Varna 9006, Bulgaria | Direct Phone: +359 52 361 224</p>
    <p>© 2026 Spa Hotel Sirius Beach. All Rights Reserved.</p>
  </footer>

  <script>
    lucide.createIcons();
  </script>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'spa-hotel-sirius-beach.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
