/* ===== VIHARA JAVASCRIPT FILE ===== */

// ===== STATE & ZONES HIERARCHY DATA =====
const statesData = {
    'Andhra Pradesh': {
        coords: [[13.2, 79.5], [17.5, 84.5]],
        color: '#3498db',
        subZones: [
            'Vizag', 'Araku', 'Rayalaseema', 'North Godavari', 'Konaseema',
            'Chitoor', 'South Rayalaseema', 'Srikakulam', 'North Coastal Zone',
            'Vizianagaram', 'Ananthapur District Zone'
        ]
    },
    'Telangana': {
        coords: [[15.5, 78.0], [19.0, 81.5]],
        color: '#e74c3c',
        subZones: ['Hyderabad', 'Warangal', 'Khammam', 'Mahbubnagar']
    },
    'Rajasthan': {
        coords: [[23.0, 72.0], [28.5, 78.5]],
        color: '#f39c12',
        subZones: ['Dhundhar', 'Thar', 'Aaravali', 'Mewar', 'Shikawati']
    },
    'Goa': {
        coords: [[14.5, 73.5], [15.5, 74.0]],
        color: '#2ecc71',
        subZones: ['North Goa', 'South Goa', 'Central Zone']
    }
};

// ===== DESTINATIONS DATA =====
const destinations = [
    {
        name: "Bheemunipatnam Beach", state: "Andhra Pradesh", subZone: "Vizag",
        desc: "Has a beautiful coast",
        activity: "nature", duration: "short", transport: "Bus/Local Transport",
        accommodation: "midrange", budget: 500, tags: ["Beach", "Nature"], emoji: "🏖️",
        mapLink: "https://maps.app.goo.gl/gVnZafAzR1DRoGrj8?g_st=ac",
        imageLink: "https://timesofindia.indiatimes.com/travel/destinations/explore-the-legends-of-bheemili-beach-and-its-dutch-connect/articleshow/69891298.cms",
        videoLink: "https://www.youtube.com/watch?v=yUdR3SY0Rnc ",
    },
    {
        name: "Araku Valley", state: "Andhra Pradesh", subZone: "Araku",
        desc: "Scenic hill station with tribal culture",
        activity: "cultural", duration: "short", transport: "train",
        accommodation: "budget", budget: 2000, tags: ["Culture", "Nature"], emoji: "🏔️",
        mapLink: "https://maps.app.goo.gl/7tbz8BcASRRSrBFG9?g_st=ac",
        imageLink: "https://images.unsplash.com/photo-puri-beach",
        videoLink: "https://www.youtube.com/embed/yourVideoID",
    },
    {
        name: "Uppada Beach and Mangrove Villages", state: "Andhra Pradesh", subZone: "Vizag",
        desc: "Scenic beaches and mangroves",
        activity: "cultural", duration: "short", transport: "train/Bus",
        accommodation: "budget", budget: 1000, tags: ["Nature", "Photography"], emoji: "🏖️",
        mapLink: "https://maps.app.goo.gl/MRJGFUU2hiyyR2wk6?g_st=ac",
        imageLink: "https://www.makemytrip.com/tripideas/attractions/uppada-beach",
        videoLink: "https://www.youtube.com/watch?v=PtR4JfPg31A",
    },
    {
        name: "Bojjana Konda", state: "Andhra Pradesh", subZone: "Vizag",
        desc: "Buddhist historical monuments", 
        activity: "cultural", duration: "small", transport: "Bus/Local",
        accommodation: "midrange", budget: 500, tags: ["Photography", "Culture"], emoji: "🏔️",
        mapLink: "https://maps.app.goo.gl/W2yVmxgm6szKJmEx7?g_st=ac",
        imageLink: "https://www.instagram.com/p/CZTKkfXp3c1/",
        videoLink: "https://www.youtube.com/watch?v=a9yQ4tCOpdo ",
    },
    {
        name: "Thotlakonda Buddhist Complex", state: "Andhra Pradesh", subZone: "Vizag",
        desc: "Buddhist sites",
        activity: "cultural", duration: "short", transport: "Bus/Local",
        accommodation: "midrange", budget: 900, tags: ["Architecture", "History"], emoji: "🏔️",
        mapLink: "https://maps.app.goo.gl/b8fzwz4ccu7zpzQF9?g_st=ac",
        imageLink: "https://www.shutterstock.com/image-photo/thotlakonda-buddhist-complex-situated-on-hill-1260772333",
        videoLink: "https://www.youtube.com/watch?v=JQ3OgoEXo3c",
    },
    {
        name: "Ananthagiri Coffee Plantations", state: "Andhra Pradesh", subZone: "Araku",
        desc: "Coffee Plantations", 
        activity: "cultural", duration: "short", transport: "Local",
        accommodation: "budget", budget: 800, tags: ["Nature", "Photography"], emoji: "🌿",
        mapLink: "https://maps.app.goo.gl/1wGF61iwWn6qXMSNA?g_st=ac",
        imageLink: "https://www.alamy.com/stock-photo/araku-valley-coffee-plantation.html",
        videoLink: "https://www.youtube.com/shorts/g7I2LntKHOM?feature=share",
    },
    {
        name: "Padmapuram Botanical Garden", state: "Andhra Pradesh", subZone: "Araku",
        desc: "Botanical Garden",
        activity: "cultural", duration: "small", transport: "Local",
        accommodation: "budget", budget: 1000, tags: ["Nature", "Photography"], emoji: "🌳",
        mapLink: "https://maps.app.goo.gl/nMbuzdWpLeNVG5bz6?g_st=",
        imageLink: "https://www.thehindu.com/news/cities/Visakhapatnam/padmapuram-botanical-gardens-in-araku-valley-reopened-with-new-attractions/article69151551.ece
",
        videoLink: "https://www.youtube.com/watch?v=F6fOWo833-M ",
    },
    {
        name: "Grand Canyon-Style Canyons: Gandikota", state: "Andhra Pradesh", subZone: "Rayalaseema",
        desc: "Canyons", 
        activity: "adventure", duration: "small", transport: "Local",
        accommodation: "midrange", budget: 1000, tags: ["Adventure", "Photography"], emoji: "⛰️",
        mapLink: "https://maps.app.goo.gl/MZDfnzFJsGN7FvJ97?g_st=ac",
        imageLink: "https://naturewalkers.in/trek/gandikota-camping-belum-caves-lepakshi-temple-visit/",
        videoLink: " https://www.youtube.com/watch?v=683c_aWrtRk ",
    },
     {
        name: "Pristine Forest Trekking Maredumalli", state: "Andhra Pradesh", subZone: "Vizag",
        desc: "Tropical forest with treckking",
        activity: "adventure", duration: "small", transport: "Local",
        accommodation: "midrange", budget: 800, tags: ["Adventure", "Nature"], emoji: "🌴",
         mapLink: "https://maps.app.goo.gl/5j1857zqctCfrCpk8?g_st=ac",
        imageLink: "https://www.tripadvisor.in/Attraction_Review-g1155908-d14042455-Reviews-Maredumilli-Rajahmundry_East_Godavari_District_Andhra_Pradesh.html
",
        videoLink: "https://www.facebook.com/livyoungphotography1/videos/sounds-of-maredumilli-east-godavari-district-andhra-pradesh/831314614200787/ 
",
    },
 {
        name: "Papikondalu", state: "Andhra Pradesh", subZone: "North Godavari",
        desc: "Scenic Beauty with Boating", 
        activity: "adventure", duration: "small", transport: "flight",
        accommodation: "midrange", budget: 1200, tags: ["Adventure", "Nature"], emoji: "⛰️",
        mapLink: "https://maps.app.goo.gl/t6mrc7xJYE3iMYwo7?g_st=ac",
        imageLink: "https://papikondalu.net.in/",
        videoLink: " https://www.youtube.com/watch?v=De-Mp57Jee4",
    },
 {
        name: "Bobbili War Memorial", state: "Andhra Pradesh", subZone: "Vizianagaram",
        desc: "War Memorial",
        activity: "Photography", duration: "small", transport: "Bus/Local",
        accommodation: "midrange", budget: 500, tags: ["Cultural", "Photography"], emoji: "🪖",
        mapLink: "https://maps.app.goo.gl/FCPrKzz5zLdHAF7v9?g_st=ac",
        imageLink: "https://www.justdial.com/Vizianagaram/War-Memorial-Pillar-Bobbili/9999P8922-8922-180606200201-E6X8_BZDET
",
        videoLink: "https://www.instagram.com/reel/DFMDOyzz-ph/",
    },
 {
        name: "Penukonda Fort", state: "Andhra Pradesh", subZone: "South Rayalaseema",
        desc: "Vizinagara Fort", 
        activity: "adventure", duration: "low", transport: "Local",
        accommodation: "midrange", budget: 1200, tags: ["Adventure", "Photography"], emoji: "🏦",
        mapLink: "https://maps.app.goo.gl/Q83WM1CLUEPv12nJ6?g_st=ac",
        imageLink: "https://www.incredibleindia.gov.in/en/andhra-pradesh/anantapur/penukonda-fort",
        videoLink: "https://www.youtube.com/watch?v=DtIDZ6D76zo",
    },
 {
        name: "Chorao Island", state: "Goa", subZone: "North Goa",
        desc: "Tropical beaches with vibrant culture", 
        activity: "adventure", duration: "small", transport: "flight",
        accommodation: "midrange", budget: 1000, tags: ["Beach", "Party"], emoji: "🏝️",
        mapLink: "https://maps.app.goo.gl/F3oxxoX8ifUVchY68?g_st=ac",
        imageLink: "https://seawatersports.com/places/goa/chorao-island-in-goa",
        videoLink: "https://www.youtube.com/watch?v=1bJMoSTs4rA",
    },
 {
        name: "Corjuem Fort", state: "Goa", subZone: "North Goa",
        desc: "Fort",
        activity: "adventure", duration: "small", transport: "flight",
        accommodation: "midrange", budget: 1000, tags: ["Beach", "Adventure"], emoji: "🏦",
        mapLink: "https://maps.app.goo.gl/qtgfdvZhsx8i31V69?g_st=ac",
        imageLink: "https://www.incredibleindia.gov.in/en/trips/trip-                                                                                                                                                                 listing/goa-unveiled-museums-forts-churches-and-beaches
",
        videoLink: "https://www.youtube.com/watch?v=JWewJqZ9Gro ",
    },
 {
        name: "Usgalimal Rock Carvings", state: "Goa", subZone: "South Goa",
        desc: "vibrant culture", 
        activity: "culture", duration: "small", transport: "flight",
        accommodation: "midrange", budget: 1200, tags: ["Photography", "Culture"], emoji: "🪨",
        mapLink: "https://maps.app.goo.gl/T8m4N7bgdUmpSPo16?g_st=ac",
        imageLink: "https://timesofindia.indiatimes.com/travel/destinations/unforgettable-goa-with-                                                                                                                             usgalimal-rock-carvings/articleshow/101644205.cms
",
        videoLink: " https://www.youtube.com/watch?v=WFDPnD3em4k",
    },
 {
        name: "Cotigao Wildlife Sanctuary", state: "Goa", subZone: "South Goa",
        desc: "Wildlife Sanctuary", 
        activity: "adventure", duration: "small", transport: "flight",
        accommodation: "midrange", budget: 700, tags: ["Adventure", "Nature"], emoji: "🫎",
        mapLink: "https://maps.app.goo.gl/GWBxpCE8Pxxa8pbb8?g_st=ac",
        imageLink: "https://www.thegoavilla.com/goa/distanation/cotigao-wildlife-sanctuary.html",
        videoLink: "https://www.youtube.com/watch?v=U4oaqFheGYI ",
    },
 {
        name: "Mandovi River Cruises", state: "Goa", subZone: "Central Zone",
        desc: "Tropical beaches with vibrant culture", 
        activity: "adventure", duration: "small", transport: "flight",
        accommodation: "midrange", budget: 1200, tags: ["Beach", "Party"], emoji: "🛳️",
        mapLink: "https://maps.app.goo.gl/5WnqRGC9HLvinsqR8?g_st=ac",
        imageLink: "https://www.thrillophilia.com/tours/mandovi-boat-cruise-with-dinner
",
        videoLink: "https://www.youtube.com/watch?v=31Tp9vac1lU ",
    },
 {
        name: "Qutubt Shah tombs", state: "Telengana", subZone: "Hyderabad",
        desc: "Tropical beaches with vibrant culture",
        activity: "culture", duration: "small", transport: "flight",
        accommodation: "midrange", budget: 1200, tags: ["Culture", "Photography"], emoji: "🪦",
        mapLink: "https://maps.app.goo.gl/8XhjEniLAdsD2L3r8?g_st=ac",
        imageLink: "https://www.telegraphindia.com/my-kolkata/places/eighty-qutb-shahi-                                                                                                                           dynasty-structures-that-are-sure-to-take-your-breath-away/cid/2029698 
",
        videoLink: "https://www.youtube.com/watch?v=zJ-zSc8UN94 ",
    },
 {
        name: "Eturnagaran lakes and jungle zone", state: "Telengana", subZone: "Warangal",
        desc: "Adventure zone",
        activity: "adventure", duration: "small", transport: "local",
        accommodation: "budget", budget: 800, tags: ["Adventure", "Nature"], emoji: "🍁",
        mapLink: "https://maps.app.goo.gl/c4o7y9euHwy2yhj86?g_st=ac",
        imageLink: "https://bogatha.feriadoresorts.com/travel-inspiration-attractions-at-bogatha-                                                                                                                 waterfalls/
",
        videoLink: "https://www.youtube.com/watch?v=HeP8IPU4LcA  ",
    },
 {
        name: "Mallela Theertham Waterfalls", state: "Telengana", subZone: "Khammam",
        desc: "Tropical beaches with vibrant culture", 
        activity: "adventure", duration: "small", transport: "Bus/local",
        accommodation: "midrange", budget: 1200, tags: ["Beach", "Party"], emoji: "🤽",
        mapLink: "https://maps.app.goo.gl/fRw8iyP1ZMWnEA99A?g_st=ac",
        imageLink: "https://www.tripadvisor.in/Attraction_Review-g12389577-d7199477-Reviews-",
        videoLink: " https://www.youtube.com/watch?v=3-dJtkQRbLA ",
    },
    {
        name: "Nallamalla Forest", state: "Telengana", subZone: "Mahbubnagar",
        desc: "Tropical beaches with vibrant culture", 
        activity: "adventure", duration: "small", transport: "Bus/Loacal",
        accommodation: "midrange", budget: 1200, tags: ["Nature", "Adventure"], emoji: "🍃",
        mapLink: "https://maps.app.goo.gl/Rz8MNM8wRvjkhCum7?g_st=ac",
        imageLink: "https://www.tripadvisor.in/Attraction_Review-g12389577-d7199477-Reviews- ",
        videoLink: " https://www.youtube.com/watch?v=3-dJtkQRbLA ",
    },
    {
        name: "Jaipur's Treaks", state: "Rajasthan", subZone: "Dhundhar",
        desc: "Desert Forts",
        activity: "adventure", duration: "medium", transport: "Train/Bus",
        accommodation: "midrange", budget: 1200, tags: ["Nature", "Adventure"], emoji: "🏜️",
        mapLink: "https://maps.app.goo.gl/hTa8yDPJMaagmc259?g_st=ac",
        imageLink: "https://share.google/cz39yT0ZNZ7zJmhr4",
        videoLink: "https://share.google/JPo0caAzCUPf7rM0B",
    },
 {
        name: "Khuri", state: "Rajasthan", subZone: "Thar",
        desc: "Hot Desert",
        activity: "adventure", duration: "medium", transport: "Local",
        accommodation: "midrange", budget: 1200, tags: ["Nature", "Adventure"], emoji: "🐫",
        mapLink: "https://maps.app.goo.gl/XnGKvM5pi3tqa16a9?g_st=ac",
        imageLink: "https://images.unsplash.com/photo-puri-beach",
        videoLink: "https://www.youtube.com/embed/yourVideoID",
    },
     {
        name: "Kumbhalgarh", state: "Rajasthan", subZone: "Aaravali",
        desc: "Mountains and wildlife",
        activity: "adventure", duration: "medium", transport: "Local",
        accommodation: "midrange", budget: 1200, tags: ["Nature", "Adventure"], emoji: "🌵",
        mapLink: "https://maps.app.goo.gl/3SBBdUXb5W38HhuE8?g_st=ac",
        imageLink: "https://www.tourism.rajasthan.gov.in/rajsamand.html",
        videoLink: "https://www.youtube.com/watch?v=DBg24dG48WQ ",
    },
     {
        name: "Bahubali Hills", state: "Rajasthan", subZone: "Mewar",
        desc: "Mountains",
        activity: "adventure", duration: "medium", transport: "Local",
        accommodation: "midrange", budget: 1200, tags: ["Nature", "Adventure"], emoji: "🏜️",
        mapLink: "https://maps.app.goo.gl/SW2REqcuXU2Eq4EV6?g_st=ac",
        imageLink: "https://www.thrillophilia.com/attractions/bahubali-hills-udaipur",
        videoLink: "https://www.youtube.com/watch?v=mLGshcymyXc",
    },
     {
        name: "Mahansar", state: "Rajasthan", subZone: "Shikawati",
        desc: "Painted Havelis",
        activity: "adventure", duration: "medium", transport: "Local",
        accommodation: "midrange", budget: 1200, tags: ["Photography", "Nature"], emoji: "🐫",
        mapLink: "https://maps.app.goo.gl/Ymyj5fyq9cuJXE4c6?g_st=ac",
        imageLink: "https://timesofindia.indiatimes.com/travel/destinations/mahansar/articleshow/5649624",
        videoLink: "https://www.youtube.com/watch?v=tRSL9Und-xk",
    },
];

// ===== GLOBAL VARIABLES =====
let selectedState = null;
let selectedSubZone = null;
let mapInstance = null;
let userMarker = null;
let destinationMarkers = [];

// ===== SIDEBAR & NAVIGATION =====
function initializeSidebar() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
    });

    sidebarOverlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });

    document.querySelectorAll('.sidebar-section').forEach(section => {
        section.addEventListener('click', function() {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    });
}

function switchSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.sidebar-section').forEach(s => s.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sidebar-section').forEach(section => {
        section.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            switchSection(sectionId);
        });
    });
});
// ===== DESCRIPTION POPUP HANDLERS =====
function openDescriptionPopup(dest) {
    const overlay = document.getElementById('descriptionPopupOverlay');
    const content = document.getElementById('descriptionPopupContent');
    content.innerHTML = `
        <div style="font-size: 2.2rem; text-align: center; margin-bottom:0.7rem;">${dest.emoji}</div>
        <div style="font-weight: 600; color: var(--accent-gold, #FAC496); font-size: 1.4rem; text-align:center; margin-bottom:0.3rem;">${dest.name}</div>
        <div style="font-size: 1.02rem; text-align:center; color: var(--color-text-secondary); margin-bottom:0.2rem">${dest.state}${dest.subZone ? " &mdash; " + dest.subZone : ""}</div>
        <div style="margin: 0.7rem auto 0.9rem auto; text-align:center; max-width:330px;">${dest.desc}</div>
        <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content: center; margin-bottom:0.8rem;">
            ${dest.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div style="display:flex;justify-content:center;gap:22px;margin-bottom:0.7rem">
            <div>💰 <b>₹${dest.budget}/day</b></div>
            <div>⏱️ <b>${dest.duration}</b></div>
        </div>
        <div style="text-align:center; color:var(--color-primary);font-size:1.01rem">
            Activity: <b>${capitalize(dest.activity)}</b> | Transport: <b>${capitalize(dest.transport)}</b> | Stay: <b>${capitalize(dest.accommodation)}</b>
        </div>
    `;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function closeDescriptionPopup() {
    document.getElementById('descriptionPopupOverlay').style.display = 'none';
    document.body.style.overflow = '';
}
// Close popup if click outside the box:
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('descriptionPopupOverlay');
    if (overlay) {
        overlay.addEventListener('click', function(e){
            if (e.target === overlay) closeDescriptionPopup();
        });
    }
});
// Utility to Capitalize first letter
function capitalize(str){ return str ? str[0].toUpperCase() + str.slice(1) : ''; }


// ===== STATES & ZONES HIERARCHY =====
function initializeStates() {
    const container = document.getElementById('stateContainer');
    container.innerHTML = '';
    
    Object.keys(statesData).forEach(state => {
        const bubble = document.createElement('div');
        bubble.className = 'zone-bubble';
        bubble.textContent = state;
        bubble.onclick = () => selectState(state);
        container.appendChild(bubble);
    });
}

function selectState(state) {
    selectedState = state;
    selectedSubZone = null;
    
    document.getElementById('step1').classList.add('hidden-section');
    document.getElementById('step2').classList.remove('hidden-section');
    document.getElementById('selectedStateName').textContent = state;
    
    renderSubZones(state);
    applyFilters();
}

function renderSubZones(state) {
    const container = document.getElementById('subZoneContainer');
    container.innerHTML = '';
    
    statesData[state].subZones.forEach(zone => {
        const tag = document.createElement('div');
        tag.className = 'zone-item-tag';
        tag.textContent = zone;
        tag.onclick = () => selectSubZone(zone);
        container.appendChild(tag);
    });
}

function selectSubZone(zone) {
    selectedSubZone = zone;
    
    document.querySelectorAll('.zone-item-tag').forEach(tag => tag.classList.remove('active'));
    event.target.classList.add('active');
    
    applyFilters();
}

function backToStates() {
    selectedState = null;
    selectedSubZone = null;
    
    document.getElementById('step1').classList.remove('hidden-section');
    document.getElementById('step2').classList.add('hidden-section');
    
    renderDestinations(destinations);
}

// ===== DESTINATIONS RENDERING & FILTERING =====
function renderDestinations(items) {
    const grid = document.getElementById('destinationsGrid');
    grid.innerHTML = '';

    if (items.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--accent-gold);">No destinations match your filters. Try adjusting preferences!</div>';
        return;
    }

    items.forEach(dest => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <div class="destination-image">${dest.emoji}</div>
            <div class="destination-info">
                <div class="destination-name">${dest.name}</div>
                <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.5rem;">${dest.state}</div>
                <div class="destination-desc">${dest.desc}</div>
                <div class="destination-tags">
                    ${dest.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="destination-meta">
                    <div>💰 ₹${dest.budget}/day</div>
                    <div>⏱️ ${dest.duration}</div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function applyFilters() {
    const activity = document.getElementById('activityFilter').value;
    const duration = document.getElementById('durationFilter').value;
    const transport = document.getElementById('transportFilter').value;
    const accommodation = document.getElementById('accommodationFilter').value;
    const maxBudget = parseInt(document.getElementById('budgetFilter').value) || 10000;

    let filtered = destinations.filter(d => {
        if (selectedState && d.state !== selectedState) return false;
        if (selectedSubZone && d.subZone !== selectedSubZone) return false;
        if (activity && d.activity !== activity) return false;
        if (duration && d.duration !== duration) return false;
        if (transport && d.transport !== transport) return false;
        if (accommodation && d.accommodation !== accommodation) return false;
        if (d.budget > maxBudget) return false;
        return true;
    });

    renderDestinations(filtered);
}

// ===== CONVERTER FUNCTIONS =====
function switchConverterTab(tabName) {
    document.querySelectorAll('.converter-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.converter-tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(`tab-${tabName}`).classList.add('active');
    event.target.classList.add('active');
}

function convertCurrency(from) {
    const amount = parseFloat(document.getElementById('inrAmount').value) || 0;
    const rates = { usd: 1 / 83, eur: 1 / 90, gbp: 1 / 105, jpy: 1 / 0.55 };
    
    document.getElementById('currencyUSD').textContent = `$${(amount * rates.usd).toFixed(2)}`;
    document.getElementById('currencyEUR').textContent = `€${(amount * rates.eur).toFixed(2)}`;
    document.getElementById('currencyGBP').textContent = `£${(amount * rates.gbp).toFixed(2)}`;
    document.getElementById('currencyJPY').textContent = `¥${(amount * rates.jpy).toLocaleString('en-IN', {maximumFractionDigits: 0})}`;
}

function convertDistance(from) {
    const km = parseFloat(document.getElementById('kmValue').value) || 0;
    
    document.getElementById('distanceMiles').textContent = `${(km * 0.621371).toFixed(2)} mi`;
    document.getElementById('distanceMeters').textContent = `${(km * 1000).toLocaleString('en-IN')} m`;
    document.getElementById('distanceFeet').textContent = `${(km * 3280.84).toLocaleString('en-IN')} ft`;
    document.getElementById('distanceNautical').textContent = `${(km * 0.539957).toFixed(2)} nm`;
}

function convertTemp(from) {
    const celsius = parseFloat(document.getElementById('celsiusValue').value) || 0;
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    
    document.getElementById('tempFahrenheit').textContent = `${fahrenheit.toFixed(1)}°F`;
    document.getElementById('tempKelvin').textContent = `${kelvin.toFixed(2)} K`;
}

function convertWeight(from) {
    const kg = parseFloat(document.getElementById('kgValue').value) || 0;
    
    document.getElementById('weightPounds').textContent = `${(kg * 2.20462).toFixed(2)} lbs`;
    document.getElementById('weightGrams').textContent = `${(kg * 1000).toLocaleString('en-IN')} g`;
    document.getElementById('weightOunces').textContent = `${(kg * 35.274).toFixed(2)} oz`;
    document.getElementById('weightStones').textContent = `${(kg / 6.35029).toFixed(2)} st`;
}

function initializeConverters() {
    convertCurrency('inr');
    convertDistance('km');
    convertTemp('celsius');
    convertWeight('kg');
}

// ===== CHATBOT FUNCTIONS =====
const botResponses = {
    'hidden': '🎯 Check out Araku Valley, Vizag, or lesser-known zones in Rajasthan!',
    'budget': '💰 Tirupati (₹500), Araku (₹600), Jodhpur (₹800) are budget-friendly!',
    'adventure': '🏔️ Araku Valley, Jodhpur, and Goa have amazing adventure activities!',
    'photography': '📷 Udaipur Palace, Jaipur, and Goa beaches are photography hotspots!',
    'cultural': '🏛️ Tirupati, Hyderabad, and Jaipur offer rich cultural experiences!',
    'beach': '🏖️ Vizag and Goa have stunning beaches with vibrant cultures!',
    'default': '👋 Ask me about destinations, budgets, activities, or travel tips!'
};

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;

    const chatBox = document.getElementById('chatBox');
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user';
    userMsg.textContent = message;
    chatBox.appendChild(userMsg);

    setTimeout(() => {
        const lowerMsg = message.toLowerCase();
        let response = botResponses.default;
        
        if (lowerMsg.includes('hidden') || lowerMsg.includes('gem')) response = botResponses.hidden;
        else if (lowerMsg.includes('budget') || lowerMsg.includes('cheap')) response = botResponses.budget;
        else if (lowerMsg.includes('adventure') || lowerMsg.includes('trek')) response = botResponses.adventure;
        else if (lowerMsg.includes('photo')) response = botResponses.photography;
        else if (lowerMsg.includes('cultural') || lowerMsg.includes('culture')) response = botResponses.cultural;
        else if (lowerMsg.includes('beach')) response = botResponses.beach;

        const botMsg = document.createElement('div');
        botMsg.className = 'chat-message bot';
        botMsg.textContent = response;
        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 300);

    input.value = '';
}

// ===== MAP FUNCTIONS =====
function initializeMap() {
    if (mapInstance) return;
    
    mapInstance = L.map('zonesMap').setView([20.5937, 78.9629], 5);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(mapInstance);
    
    destinations.forEach(dest => {
        const marker = L.circleMarker([dest.lat, dest.lng], {
            radius: 8, fillColor: '#FAC496', color: '#134252',
            weight: 2, opacity: 1, fillOpacity: 0.8
        }).addTo(mapInstance);
        
        marker.bindPopup(`
            <div style="color: #134252; font-weight: bold;">
                ${dest.emoji} ${dest.name}<br/>
                <span style="font-size: 0.9rem;">₹${dest.budget}/day</span>
            </div>
        `, {className: 'custom-popup'});
        
        destinationMarkers.push(marker);
    });
    
    Object.keys(statesData).forEach(state => {
        const bounds = statesData[state].coords;
        const rect = L.rectangle(bounds, {
            color: '#FAC496', weight: 2, opacity: 0.3,
            fill: true, fillColor: '#134252', fillOpacity: 0.1
        }).addTo(mapInstance);
        
        rect.bindPopup(`<strong>${state}</strong>`);
    });
}

function getUserLocation() {
    const locationStatus = document.getElementById('locationStatus');
    const locationText = document.getElementById('locationText');
    
    if (!navigator.geolocation) {
        locationStatus.classList.add('error');
        locationText.textContent = '❌ Geolocation not supported by your browser';
        return;
    }
    
    locationText.textContent = '⏳ Getting your location...';
    locationStatus.classList.remove('error', 'active');
    
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const accuracy = position.coords.accuracy;
            
            if (!mapInstance) initializeMap();
            
            if (userMarker) mapInstance.removeLayer(userMarker);
            
            userMarker = L.circleMarker([lat, lng], {
                radius: 10, fillColor: '#00C853', color: '#fff',
                weight: 3, opacity: 1, fillOpacity: 0.9
            }).addTo(mapInstance);
            
            L.circle([lat, lng], {
                radius: accuracy, color: '#00C853', weight: 1,
                opacity: 0.3, fillColor: '#00C853', fillOpacity: 0.1
            }).addTo(mapInstance);
            
            userMarker.bindPopup(`
                <div style="color: #134252; font-weight: bold;">
                    📍 Your Location<br/>
                    <span style="font-size: 0.85rem;">Accuracy: ±${Math.round(accuracy)}m</span>
                </div>
            `, {className: 'custom-popup'});
            
            mapInstance.setView([lat, lng], 10);
            locationStatus.classList.add('active');
            locationText.textContent = `✅ Your location found! Latitude: ${lat.toFixed(4)}, Longitude: ${lng.toFixed(4)}`;
        },
        function(error) {
            locationStatus.classList.add('error');
            let errorMsg = '❌ Unable to get location';
            
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMsg = '❌ Location permission denied. Enable in browser settings.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMsg = '❌ Location information unavailable.';
                    break;
                case error.TIMEOUT:
                    errorMsg = '❌ Location request timeout.';
                    break;
            }
            
            locationText.textContent = errorMsg;
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
}

function centerMapOnIndia() {
    if (!mapInstance) initializeMap();
    mapInstance.setView([20.5937, 78.9629], 5);
}

function toggleDestinations() {
    if (!mapInstance) initializeMap();
    
    const btn = event.target;
    btn.classList.toggle('active');
    
    if (btn.classList.contains('active')) {
        destinationMarkers.forEach(marker => marker.setStyle({fillOpacity: 0.9}));
        btn.textContent = '🎯 Hide Destinations';
    } else {
        destinationMarkers.forEach(marker => marker.setStyle({fillOpacity: 0.3}));
        btn.textContent = '🎯 Show Destinations';
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeSidebar();
    initializeStates();
    renderDestinations(destinations);
    initializeConverters();
});
