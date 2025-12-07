/* ===== VIHARA JAVASCRIPT FILE ===== */

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

/* ===== STATE & ZONES HIERARCHY DATA ===== */
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
        subZones: ['Hyderabad Zone', 'Warangal Zone', 'Khammam Zone', 'Mahbubnagar Zone']
    },
    'Rajasthan': {
        coords: [[23.0, 72.0], [28.5, 78.5]],
        color: '#f39c12',
        subZones: ['Jaipur Zone', 'Jodhpur Zone', 'Udaipur Zone', 'Bikaner Zone', 'Pushkar Zone']
    },
    'Goa': {
        coords: [[14.5, 73.5], [15.5, 74.0]],
        color: '#2ecc71',
        subZones: ['North Goa', 'South Goa', 'Coastal Zone']
    }
};

// ===== DESTINATIONS DATA =====
const destinations = [
    {
        name: "Vizag Beach", state: "Andhra Pradesh", subZone: "Vizag",
        desc: "Beautiful coastal city with beaches", lat: 17.6869, lng: 83.2185,
        activity: "nature", duration: "short", transport: "flight",
        accommodation: "midrange", budget: 1000, tags: ["Beach", "Nature"], emoji: "🏖️"
    },
    {
        name: "Araku Valley", state: "Andhra Pradesh", subZone: "Araku",
        desc: "Scenic hill station with tribal culture", lat: 18.3481, lng: 82.8005,
        activity: "cultural", duration: "short", transport: "train",
        accommodation: "budget", budget: 600, tags: ["Culture", "Nature"], emoji: "🏔️"
    },
    {
        name: "Tirupati Temple", state: "Andhra Pradesh", subZone: "Chitoor",
        desc: "Sacred temple in the hills", lat: 13.1939, lng: 79.8456,
        activity: "cultural", duration: "short", transport: "train",
        accommodation: "budget", budget: 500, tags: ["Religious", "Culture"], emoji: "🛕"
    },
    {
        name: "Hyderabad City", state: "Telangana", subZone: "Hyderabad Zone",
        desc: "Modern city with historical monuments", lat: 17.3850, lng: 78.4867,
        activity: "cultural", duration: "medium", transport: "flight",
        accommodation: "midrange", budget: 1100, tags: ["City", "Culture"], emoji: "🏙️"
    },
    {
        name: "Jaipur Pink City", state: "Rajasthan", subZone: "Jaipur Zone",
        desc: "Historic pink city with palace", lat: 26.9124, lng: 75.7873,
        activity: "cultural", duration: "medium", transport: "flight",
        accommodation: "midrange", budget: 900, tags: ["Architecture", "History"], emoji: "🏰"
    },
    {
        name: "Jodhpur Fort", state: "Rajasthan", subZone: "Jodhpur Zone",
        desc: "Majestic fort in the desert", lat: 26.2389, lng: 73.0243,
        activity: "cultural", duration: "short", transport: "flight",
        accommodation: "budget", budget: 800, tags: ["Fort", "Adventure"], emoji: "🏯"
    },
    {
        name: "Udaipur Palace", state: "Rajasthan", subZone: "Udaipur Zone",
        desc: "Lake palace with romantic ambiance", lat: 24.5854, lng: 73.7125,
        activity: "cultural", duration: "medium", transport: "flight",
        accommodation: "luxury", budget: 1800, tags: ["Palace", "Romantic"], emoji: "💎"
    },
    {
        name: "Goa Beaches", state: "Goa", subZone: "North Goa",
        desc: "Tropical beaches with vibrant culture", lat: 15.2993, lng: 73.8243,
        activity: "adventure", duration: "medium", transport: "flight",
        accommodation: "midrange", budget: 1200, tags: ["Beach", "Party"], emoji: "🎉"
    }
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
        // --- ADD HERE: open popup on click ---
        card.style.cursor = "pointer";
        card.addEventListener('click', function(){ openDescriptionPopup(dest); });
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
// ...No changes to converter functions...

// ===== CHATBOT FUNCTIONS =====
// ...No changes to chatbot functions...

// ===== MAP FUNCTIONS =====
// ...No changes to map functions...

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeSidebar();
    initializeStates();
    renderDestinations(destinations);
    initializeConverters();
});
