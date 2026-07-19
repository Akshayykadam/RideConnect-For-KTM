// ----------------------------------------------------
// DYNAMIC CONSTANTS & SCENARIO DATA
// ----------------------------------------------------

const SCENARIOS = {
    scanning: {
        title: "System Status: Scanning",
        desc: "The app is advertising its BLE services. The motorcycle's TFT console detects the key handshake beacon and begins negotiating security keys.",
        speed: 0,
        gear: "N",
        rpm: 0,
        coolant: 28,
        volt: 12.6,
        navState: "BLE PAIRING",
        tbtInstruction: "CONNECT PHONE",
        tbtRoadName: "RIDE//CONNECT BLE",
        tbtDist: "--- m",
        tbtTime: "--:--",
        tbtDistanceRem: "-- km",
        tbtArrow: `<svg viewBox="0 0 24 24" class="tbt-arrow-svg animate-pulse"><path fill="currentColor" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,14.5H11v-2h2Zm0-3.5H11V7h2Z"/></svg>`,
        fuelRange: "100 km",
        tempStatus: "Low",
        rideMode: "Rain",
        odo: 1570,
        trip: "121.4 km",
        fuelCons: "26 km/L",
        errorActive: false
    },
    cruising: {
        title: "System Status: Cruising",
        desc: "Stable highway routing. The Android app intercepts Waze navigation intent, extracts instructions, and pushes sequential data packets over BLE. Telemetry reads low engine strain.",
        speed: 84,
        gear: "4",
        rpm: 5400,
        coolant: 84,
        volt: 14.1,
        navState: "NAVIGATING",
        tbtInstruction: "Keep straight on",
        tbtRoadName: "National Hwy 48",
        tbtDist: "2.1 km",
        tbtTime: "15 min",
        tbtDistanceRem: "18.4 km",
        tbtArrow: `<svg viewBox="0 0 24 24" class="tbt-arrow-svg"><path fill="currentColor" d="M11 21V11H4l8-8 8 8h-7v10h-2z"/></svg>`,
        fuelRange: "320 km",
        tempStatus: "Low",
        rideMode: "Street",
        odo: 1570,
        trip: "121.4 km",
        fuelCons: "26 km/L",
        errorActive: false
    },
    cornering: {
        title: "System Status: Apex Deceleration",
        desc: "Approaching a mountain hair-pin. Odometer logging triggers GPX downsampling. Speed drops as the rider shifts gear down to 3rd to maintain torque inside the curve.",
        speed: 58,
        gear: "3",
        rpm: 6200,
        coolant: 92,
        volt: 14.0,
        navState: "TURN APPROACHING",
        tbtInstruction: "Sharp left after",
        tbtRoadName: "Hotel Yermala...",
        tbtDist: "200 m",
        tbtTime: "20 min",
        tbtDistanceRem: "6.4 km",
        tbtArrow: `<svg viewBox="0 0 24 24" class="tbt-arrow-svg"><path fill="currentColor" d="M19 19v-6a3 3 0 0 0-3-3H8.83l2.59 2.59L10 14l-6-6 6-6 1.41 1.41L8.83 6H16a5 5 0 0 1 5 5v8h-2z"/></svg>`,
        fuelRange: "100 km",
        tempStatus: "Low",
        rideMode: "Rain",
        odo: 1570,
        trip: "121.4 km",
        fuelCons: "26 km/L",
        errorActive: false
    },
    redline: {
        title: "System Status: Performance Sprint",
        desc: "Wide-open-throttle acceleration. RPM climbs to 10,400. Speedometer scales to 152 km/h. The dashboard screen flashes warning triggers as engine heat increases.",
        speed: 152,
        gear: "5",
        rpm: 10400,
        coolant: 98,
        volt: 14.3,
        navState: "NAVIGATING",
        tbtInstruction: "Continue straight on",
        tbtRoadName: "Bombay Expway",
        tbtDist: "12.4 km",
        tbtTime: "8 min",
        tbtDistanceRem: "19.2 km",
        tbtArrow: `<svg viewBox="0 0 24 24" class="tbt-arrow-svg"><path fill="currentColor" d="M11 21V11H4l8-8 8 8h-7v10h-2z"/></svg>`,
        fuelRange: "180 km",
        tempStatus: "High",
        rideMode: "Track",
        odo: 1597,
        trip: "148.1 km",
        fuelCons: "14 km/L",
        errorActive: false
    },
    error: {
        title: "System Status: Connection Interrupted",
        desc: "Simulated BLE hardware disconnect. The dashboard triggers an immediate alert, shifting metrics to '--' and displaying a high-priority warning overlay to prevent rider distraction.",
        speed: "--",
        gear: "-",
        rpm: 0,
        coolant: "--",
        volt: "--",
        navState: "NO LINK",
        tbtInstruction: "CONNECTION LOST",
        tbtRoadName: "DISCONNECTED",
        tbtDist: "--- m",
        tbtTime: "--:--",
        tbtDistanceRem: "-- km",
        tbtArrow: `<svg viewBox="0 0 24 24" class="tbt-arrow-svg text-red"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`,
        fuelRange: "--",
        tempStatus: "---",
        rideMode: "Rain",
        odo: 1597,
        trip: "-- km",
        fuelCons: "-- km/L",
        errorActive: true
    }
};

const STEP_DATA = [
    {
        title: "Google Play Protect Scan",
        desc: "Click <a href='https://drive.google.com/file/d/1pzPQkR3e0wGVX2aprzoHcERSNILu34Ph/view?usp=sharing' target='_blank' style='color: var(--ktm-orange); font-weight: 700; text-decoration: underline;'>here</a> to download the native Android application bundle (.apk) directly from Google Drive. During installation, select <strong>Scan app</strong> on the Play Protect security prompt to verify the app.",
        img: "Assets/How To/1 - Scan App.png"
    },
    {
        title: "Initiate App Installation",
        desc: "Once the Google Play Protect security scan completes and confirms 'This app looks safe', tap <strong>Install</strong> to proceed with installing the companion application.",
        img: "Assets/How To/2 - Install.png"
    },
    {
        title: "Launch Companion App",
        desc: "Find the RideConnect emblem inside your Android launcher list and click to open the console dashboard dashboard for initial workspace prep.",
        img: "Assets/How To/3 - Open App.png"
    },
    {
        title: "Request Notification Access",
        desc: "The app requires read authorization of system push notifications to parse GPS information. Tap the banner trigger to open the permission dashboard.",
        img: "Assets/How To/4 - Grant Notification Access.png"
    },
    {
        title: "Select RideConnect Settings",
        desc: "In the Android 'Device & App Notifications' access manager directory, search for the 'RideConnect' listing and click the row.",
        img: "Assets/How To/5 - Allow Acess.png"
    },
    {
        title: "Authorize Notification Access",
        desc: "Toggle 'Allow notification access' to ON. A system prompt will warn about data privacy. Accept the prompt by selecting the 'Allow' button.",
        img: "Assets/How To/6 - Allow All.png"
    },
    {
        title: "Search for Motorcycle TFT",
        desc: "Navigate back to RideConnect. Tap the 'SEARCH DEVICE' button to instruct the system Bluetooth module to query local BLE advertiser arrays.",
        img: "Assets/How To/7 - Search for Dashboard.png"
    },
    {
        title: "Acknowledge Location Access",
        desc: "Android requests local device scanning permission for BLE lookups. Grant the application nearby device communication privileges.",
        img: "Assets/How To/8 - Allow Permission.png"
    },
    {
        title: "Choose Dashboard address",
        desc: "Wait for the scanner list to query. Click the device named 'KTM TFT' (or similar matching your bike console's MAC) to initialize the handshake.",
        img: "Assets/How To/9 - Click On Device.png"
    },
    {
        title: "Access Motorcycle Configuration",
        desc: "Start your motorcycle. Use the physical toggle switches on the left handlebar controller to launch the bike's LCD main menu and select 'Settings'.",
        img: "Assets/How To/10 - Go to Settings.png"
    },
    {
        title: "Select KTM Connectivity Menu",
        desc: "Scroll down inside the settings panel until you locate 'KTM My Ride' or 'Connectivity'. Press the center checkmark keypad to load Bluetooth options.",
        img: "Assets/How To/11 - Select Connectivity.png"
    },
    {
        title: "Complete Hardware Pairing",
        desc: "Activate pairing search on your motorcycle. Confirm the security pin exchange on both your smartphone screen and the bike's dashboard panel.",
        img: "Assets/How To/12 - Accept Popup.png"
    },
    {
        title: "Secure BLE Sync Complete",
        desc: "Once security handshakes establish, the RideConnect companion application header will display a solid green 'CONNECTED' badge.",
        img: "Assets/How To/13 - Homescreed Ready:Connected.png"
    },
    {
        title: "Console TFT HUD Online",
        desc: "Open Google Maps or Waze on your phone, configure your destination route, and start navigating. The turn instruction cards and live telemetrics will display instantly on the bike dashboard!",
        img: "Assets/How To/14- Navigation On TFT.png"
    }
];

// ----------------------------------------------------
// STATE VARIABLES
// ----------------------------------------------------
let currentScenario = "cornering";
let activeSetupStep = 0;
let dashboardClockInterval = null;
let telemetryDriftInterval = null;

// Raw telemetry values that will fluctuate slightly to feel "alive"
let liveTelemetry = {
    rpm: 6200,
    speed: 58,
    gear: "3",
    voltage: 14.0,
    coolant: 92,
    odo: 1570,
    fuelCons: "26 km/L"
};

// Disable scroll restoration to prevent browser from auto-scrolling down on load
if ('history' in window) {
    window.history.scrollRestoration = 'manual';
}

// Force scroll to top on page load if no hash exists in URL
window.addEventListener('load', () => {
    setTimeout(() => {
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        } else {
            const target = document.querySelector(window.location.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, 50);
});

// ----------------------------------------------------
// DOM LOAD INIT
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // Mobil Navigation Toggle
    initMobileNav();
    
    // Clock in TFT Simulator
    startTftClock();
    
    // Simulator Scenario Buttons
    initSimulatorConsole();
    
    // Set Initial Simulator State
    applyScenario("cornering");

    // Start Raw Telemetry drift simulation
    startTelemetryDrifts();

    // Tabs toggle for App Showcase Gallery
    initGalleryTabs();

    // Onboarding checklist timeline
    initSetupTimeline();

    // Lightbox modal configuration
    initLightbox();

    // Premium scroll reveal animations
    initScrollReveal();

    // Navbar scroll state
    initNavbarScroll();

    // Hero parallax scroll effect
    initHeroParallax();
});

// ----------------------------------------------------
// NAVIGATION SYSTEM
// ----------------------------------------------------
function initMobileNav() {
    const toggleBtn = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const linkItems = document.querySelectorAll(".nav-link-item");

    toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("active");
        navLinks.classList.toggle("mobile-active");
    });

    linkItems.forEach(item => {
        item.addEventListener("click", () => {
            toggleBtn.classList.remove("active");
            navLinks.classList.remove("mobile-active");
        });
    });
}

// ----------------------------------------------------
// TFT CLOCK ENGINE
// ----------------------------------------------------
function startTftClock() {
    const clockEl = document.getElementById("tft-clock");
    
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        clockEl.textContent = `${hours} ${minutes} ${ampm}`;
    }
    
    updateClock();
    dashboardClockInterval = setInterval(updateClock, 60000);
}

// ----------------------------------------------------
// SIMULATOR CONSOLE ACTIONS
// ----------------------------------------------------
function initSimulatorConsole() {
    const buttons = document.querySelectorAll(".btn-scenario");
    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            // Remove active class
            buttons.forEach(b => b.classList.remove("active"));
            
            // Add to clicked
            const triggerBtn = e.currentTarget;
            triggerBtn.classList.add("active");
            
            const scenarioName = triggerBtn.getAttribute("data-scenario");
            applyScenario(scenarioName);
        });
    });
}

// Splits the speed string across the 3 visual widget boxes
function updateSpeedometerDigits(speed) {
    const slot1 = document.getElementById("speed-slot-1");
    const slot2 = document.getElementById("speed-slot-2");
    const slot3 = document.getElementById("speed-slot-3");
    
    const digit1 = document.getElementById("speed-digit-1");
    const digit2 = document.getElementById("speed-digit-2");
    const digit3 = document.getElementById("speed-digit-3");
    
    if (!slot1 || !slot2 || !slot3 || !digit1 || !digit2 || !digit3) return;
    
    // Clear styles
    slot1.className = "speed-slot";
    slot2.className = "speed-slot";
    slot3.className = "speed-slot";
    
    if (speed === "--") {
        slot1.classList.add("slot-empty");
        slot2.classList.add("slot-empty");
        slot3.classList.add("active-digit");
        digit3.textContent = "-";
        return;
    }
    
    const speedInt = Math.round(Number(speed));
    const speedStr = speedInt.toString();
    
    if (speedInt >= 100) {
        slot1.classList.add("active-digit");
        digit1.textContent = speedStr[0];
        
        slot2.classList.add("active-digit");
        digit2.textContent = speedStr[1];
        
        slot3.classList.add("active-digit");
        digit3.textContent = speedStr[2];
    } else if (speedInt >= 10) {
        slot1.classList.add("slot-empty");
        
        slot2.classList.add("active-digit");
        digit2.textContent = speedStr[0];
        
        slot3.classList.add("active-digit");
        digit3.textContent = speedStr[1];
    } else {
        slot1.classList.add("slot-empty");
        slot2.classList.add("slot-empty");
        
        slot3.classList.add("active-digit");
        digit3.textContent = speedStr;
    }
}

function applyScenario(scenarioKey) {
    currentScenario = scenarioKey;
    const data = SCENARIOS[scenarioKey];
    if (!data) return;
    
    // Update Text summaries in controller console
    document.getElementById("sim-state-title").textContent = data.title;
    document.getElementById("sim-state-desc").textContent = data.desc;
    

    
    // Update Speed and Gear indicators
    const gearEl = document.getElementById("tft-gear");
    if (gearEl) gearEl.textContent = data.gear;
    
    // Manage Gear colors
    if (data.gear === "N" && gearEl) {
        gearEl.className = "tft-gear-real font-oswald text-green";
    } else if (gearEl) {
        gearEl.className = "tft-gear-real font-oswald text-orange";
    }
    
    // Update speedometer digits
    updateSpeedometerDigits(data.speed);
    
    // Update TBT navigation boxes
    document.getElementById("tbt-instruction").textContent = data.tbtInstruction;
    document.getElementById("tbt-road-name").textContent = data.tbtRoadName;
    document.getElementById("tbt-dist").textContent = data.tbtDist;
    document.getElementById("tbt-time").textContent = data.tbtTime;
    document.getElementById("tbt-distance-rem").textContent = data.tbtDistanceRem;
    
    // Swap TBT SVG Icons
    const iconContainer = document.getElementById("tbt-arrow-box");
    if (iconContainer) iconContainer.innerHTML = data.tbtArrow;
    
    // Set Ride Mode and Fuel range text content
    const rideModeEl = document.getElementById("tft-ride-mode");
    const fuelRangeEl = document.getElementById("tft-fuel-range");
    const tempStatusEl = document.getElementById("tft-temp-status");
    if (rideModeEl) rideModeEl.textContent = data.rideMode;
    if (fuelRangeEl) fuelRangeEl.textContent = data.fuelRange === "--" ? "--" : `${data.fuelRange.replace(/\s/g, '')}`;
    if (tempStatusEl) tempStatusEl.textContent = data.tempStatus;
    
    // Set Bottom Strip readouts
    const odoStr = typeof data.odo === "number" ? data.odo.toLocaleString().replace(/,/g, ' ') : data.odo;
    document.getElementById("strip-odo").textContent = data.odo === "--" ? "--" : `${odoStr} km`;
    document.getElementById("strip-fuel").textContent = data.fuelRange;
    document.getElementById("strip-trip").textContent = data.trip;
    document.getElementById("strip-fuel-cons").textContent = data.fuelCons;
    
    // Set screen error overlay
    const errOverlay = document.getElementById("tft-disconnect-overlay");
    if (data.errorActive) {
        errOverlay.classList.add("active");
    } else {
        errOverlay.classList.remove("active");
    }
    
    // Sync to active telemetry object (for drifts)
    liveTelemetry.speed = data.speed;
    liveTelemetry.rpm = data.rpm;
    liveTelemetry.gear = data.gear;
    liveTelemetry.voltage = data.volt;
    liveTelemetry.coolant = data.coolant;
    liveTelemetry.odo = data.odo;
    liveTelemetry.fuelCons = data.fuelCons;

    // Trigger instant layout updates (RPM gauges / Readouts)
    updateTftVisuals(data.rpm, data.speed);
}

function updateTftVisuals(rpm, speed) {
    // 1. Update circular/hockey progress arc SVG
    const rpmPath = document.getElementById("rpm-progress-path");
    if (rpmPath) {
        let fillRatio = 0;
        if (typeof rpm === "number") {
            fillRatio = Math.min(rpm / 10000, 1.0); // KTM hockey stick ends at 10k/11k
        }
        // Calculate stroke offset dynamically based on path length
        const totalLength = rpmPath.getTotalLength();
        rpmPath.style.strokeDasharray = totalLength;
        const offset = totalLength - (totalLength * fillRatio);
        rpmPath.style.strokeDashoffset = offset;

        // Redline warning color toggles
        if (rpm >= 9000) {
            rpmPath.classList.add("redline");
        } else {
            rpmPath.classList.remove("redline");
        }
    }
    
    // 2. Highlight active RPM numbers (1 to 10)
    const activeRpmInt = typeof rpm === "number" ? Math.floor(rpm / 1000) : 0;
    for (let i = 1; i <= 10; i++) {
        const numEl = document.querySelector(`.rpm-num.num-${i}`);
        if (numEl) {
            if (i <= activeRpmInt) {
                numEl.classList.add("active");
            } else {
                numEl.classList.remove("active");
            }
        }
    }
    
    // 3. Update digital readout panels below simulator
    const speedStr = speed === "--" ? "--" : Math.round(speed);
    const rpmStr = rpm === 0 && currentScenario !== "scanning" ? "0" : (rpm === 0 ? "--" : Math.round(rpm));
    
    document.getElementById("telemetry-rpm").textContent = rpmStr;
    document.getElementById("telemetry-speed").textContent = speedStr;
    document.getElementById("telemetry-gear").textContent = liveTelemetry.gear;
    
    if (typeof liveTelemetry.voltage === "number") {
        document.getElementById("telemetry-volt").textContent = liveTelemetry.voltage.toFixed(1);
    } else {
        document.getElementById("telemetry-volt").textContent = liveTelemetry.voltage;
    }
    
    if (typeof liveTelemetry.coolant === "number") {
        document.getElementById("telemetry-coolant").textContent = Math.round(liveTelemetry.coolant);
    } else {
        document.getElementById("telemetry-coolant").textContent = liveTelemetry.coolant;
    }
    if (typeof liveTelemetry.odo === "number") {
        const odoStrFormatted = liveTelemetry.odo.toLocaleString().replace(/,/g, ' ');
        document.getElementById("telemetry-odo").textContent = odoStrFormatted;
    } else {
        document.getElementById("telemetry-odo").textContent = liveTelemetry.odo;
    }

    // 4. Update digital widget progress bar sizes below simulator
    const speedPercent = typeof speed === "number" ? Math.min((speed / 200) * 100, 100) : 0;
    const rpmPercent = typeof rpm === "number" ? Math.min((rpm / 12000) * 100, 100) : 0;
    
    let voltPercent = 0;
    if (typeof liveTelemetry.voltage === "number") {
        voltPercent = Math.min(Math.max(((liveTelemetry.voltage - 11) / 4) * 100, 0), 100);
    }
    
    let coolantPercent = 0;
    if (typeof liveTelemetry.coolant === "number") {
        coolantPercent = Math.min((liveTelemetry.coolant / 120) * 100, 100);
    }

    let gearPercent = 15; // N
    if (liveTelemetry.gear !== "N" && liveTelemetry.gear !== "-") {
        gearPercent = (parseInt(liveTelemetry.gear) / 6) * 100;
    }

    document.getElementById("bar-fill-rpm").style.width = `${rpmPercent}%`;
    document.getElementById("bar-fill-speed").style.width = `${speedPercent}%`;
    document.getElementById("bar-fill-gear").style.width = `${gearPercent}%`;
    document.getElementById("bar-fill-volt").style.width = `${voltPercent}%`;
    document.getElementById("bar-fill-coolant").style.width = `${coolantPercent}%`;
}

// ----------------------------------------------------
// ENGINE SENSOR DRIFTS (MAKE IT FEEL ALIVE)
// ----------------------------------------------------
function startTelemetryDrifts() {
    telemetryDriftInterval = setInterval(() => {
        // Don't drift values if in Scan mode or Disconnected error mode
        if (currentScenario === "scanning" || currentScenario === "error") {
            return;
        }
        
        // Add random micro-adjustments
        const speedNoise = (Math.random() - 0.5) * 2; // speed shifts slightly +/- 1
        const rpmNoise = (Math.random() - 0.5) * 80;   // rpm shifts slightly +/- 40
        const voltNoise = (Math.random() - 0.5) * 0.08; // voltage shifts +/- 0.04V
        
        // Apply drift within logical ceilings
        if (currentScenario === "cruising") {
            liveTelemetry.speed = Math.max(81, Math.min(87, liveTelemetry.speed + speedNoise));
            liveTelemetry.rpm = Math.max(5200, Math.min(5600, liveTelemetry.rpm + rpmNoise));
            liveTelemetry.voltage = Math.max(13.9, Math.min(14.2, liveTelemetry.voltage + voltNoise));
            liveTelemetry.coolant = Math.max(83, Math.min(85, liveTelemetry.coolant + (Math.random() - 0.5) * 0.4));
        } else if (currentScenario === "cornering") {
            liveTelemetry.speed = Math.max(55, Math.min(61, liveTelemetry.speed + speedNoise));
            liveTelemetry.rpm = Math.max(6000, Math.min(6400, liveTelemetry.rpm + rpmNoise));
            liveTelemetry.voltage = Math.max(13.9, Math.min(14.1, liveTelemetry.voltage + voltNoise));
            liveTelemetry.coolant = Math.max(91, Math.min(93, liveTelemetry.coolant + (Math.random() - 0.5) * 0.4));
        } else if (currentScenario === "redline") {
            liveTelemetry.speed = Math.max(149, Math.min(156, liveTelemetry.speed + speedNoise));
            liveTelemetry.rpm = Math.max(10200, Math.min(10600, liveTelemetry.rpm + rpmNoise));
            liveTelemetry.voltage = Math.max(14.1, Math.min(14.4, liveTelemetry.voltage + voltNoise));
            liveTelemetry.coolant = Math.max(96, Math.min(99, liveTelemetry.coolant + (Math.random() - 0.5) * 0.4));
        }
        
        // Update Screen Elements to match drifts
        updateSpeedometerDigits(liveTelemetry.speed);
        
        updateTftVisuals(liveTelemetry.rpm, liveTelemetry.speed);
    }, 300);
}

// ----------------------------------------------------
// SHOWCASE GALLERY TAB CHANGER
// ----------------------------------------------------
function initGalleryTabs() {
    const tabs = document.querySelectorAll(".gallery-tab-btn");
    const panels = document.querySelectorAll(".gallery-panel");
    
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active classes
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));
            
            // Set active
            tab.classList.add("active");
            const targetTab = tab.getAttribute("data-gallery-tab");
            
            const targetPanel = document.getElementById(`gallery-panel-${targetTab}`);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
        });
    });
}



// ----------------------------------------------------
// ONBOARDING SETUP TIMELINE (STEP BY STEP)
// ----------------------------------------------------
function initSetupTimeline() {
    const stepLinks = document.querySelectorAll(".timeline-step-link");
    const prevBtn = document.getElementById("step-prev-btn");
    const nextBtn = document.getElementById("step-next-btn");

    stepLinks.forEach(link => {
        link.addEventListener("click", () => {
            const stepIndex = parseInt(link.getAttribute("data-step"));
            showStep(stepIndex);
        });
    });

    prevBtn.addEventListener("click", () => {
        if (activeSetupStep > 0) {
            showStep(activeSetupStep - 1);
        }
    });

    nextBtn.addEventListener("click", () => {
        if (activeSetupStep < STEP_DATA.length - 1) {
            showStep(activeSetupStep + 1);
        }
    });

    // Load first step initially
    showStep(0, true);
}

function showStep(index, preventScroll = false) {
    if (index < 0 || index >= STEP_DATA.length) return;
    
    activeSetupStep = index;
    const step = STEP_DATA[index];
    
    // Update step link focus states
    const stepLinks = document.querySelectorAll(".timeline-step-link");
    stepLinks.forEach((link, idx) => {
        if (idx === index) {
            link.classList.add("active");
            if (!preventScroll) {
                // Scroll list row into center view inside the layout
                link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
        } else {
            link.classList.remove("active");
        }
    });
    
    // Update Inspector Details text elements
    const stepNumStr = (index + 1) < 10 ? "0" + (index + 1) : (index + 1);
    document.getElementById("step-badge").textContent = `STEP ${stepNumStr}/${STEP_DATA.length}`;
    document.getElementById("step-title").innerHTML = step.title;
    document.getElementById("step-desc").innerHTML = step.desc;
    
    // Update Image source
    const imgEl = document.getElementById("step-image");
    imgEl.src = step.img;
    imgEl.alt = step.title;
    
    // Update data attribute for zoom trigger
    document.getElementById("step-zoom-trigger").setAttribute("data-zoom-img", step.img);

    // Disable buttons if limits reached
    const prevBtn = document.getElementById("step-prev-btn");
    const nextBtn = document.getElementById("step-next-btn");

    if (index === 0) {
        prevBtn.style.opacity = "0.3";
        prevBtn.style.pointerEvents = "none";
    } else {
        prevBtn.style.opacity = "";
        prevBtn.style.pointerEvents = "";
    }

    if (index === STEP_DATA.length - 1) {
        nextBtn.style.opacity = "0.3";
        nextBtn.style.pointerEvents = "none";
        nextBtn.querySelector(".btn-inner").textContent = "FINISHED";
    } else {
        nextBtn.style.opacity = "";
        nextBtn.style.pointerEvents = "";
        nextBtn.querySelector(".btn-inner").textContent = "NEXT STEP";
    }
}



// ----------------------------------------------------
// SCREENSHOT LIGHTBOX OVERLAY
// ----------------------------------------------------
function initLightbox() {
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("lightbox-zoom-img");
    const captionText = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("lightbox-close");

    // Connect to zoomable cards
    document.body.addEventListener("click", (e) => {
        // Check if cursor target or ancestors have cursor-zoom class
        const zoomTrigger = e.target.closest(".cursor-zoom");
        if (!zoomTrigger) return;
        
        const zoomImgSrc = zoomTrigger.getAttribute("data-zoom-img");
        if (!zoomImgSrc) return;

        // Fetch description/alt metadata text
        const imgEl = zoomTrigger.querySelector("img");
        const altText = imgEl ? imgEl.alt : "Enlarged Inspection Details";

        modal.style.display = "flex";
        modalImg.src = zoomImgSrc;
        captionText.textContent = altText;
    });

    // Close on overlay backdrop or button clicks
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target === closeBtn) {
            modal.style.display = "none";
        }
    });

    // Keyboard support: Escape button closes lightbox
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "flex") {
            modal.style.display = "none";
        }
    });
}

// ----------------------------------------------------
// SCROLL REVEAL ANIMATION OBSERVER
// ----------------------------------------------------
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger, .reveal-left, .reveal-right, .reveal-scale');
    
    if (!revealElements.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once revealed, stop observing for performance
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}

// ----------------------------------------------------
// NAVBAR SCROLL STATE
// ----------------------------------------------------
function initNavbarScroll() {
    const navbar = document.getElementById('main-navbar');
    if (!navbar) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 60) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ----------------------------------------------------
// HERO BACKGROUND PARALLAX
// ----------------------------------------------------
function initHeroParallax() {
    const heroBg = document.querySelector('.hero-bg-media');
    if (!heroBg) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                if (scrollY < window.innerHeight) {
                    // Translate background downwards at 30% scroll speed
                    heroBg.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}
