# CYBERMAP // REAL-TIME GPS NAVIGATION GEOMATRIX

<div align="center">

```
   ██████╗██╗   ██╗██████╗ ███████╗██████╗ ███╗   ███╗ █████╗ ██████╗ 
  ██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗████╗ ████║██╔══██╗██╔══██╗
  ██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝██╔████╔██║███████║██████╔╝
  ██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══██║██╔═══╝ 
  ╚██████╗   ██║   ██████╔╝███████╗██║  ██║██║ ╚═╝ ██║██║  ██║██║     
   ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝     
   ═════════════════════════════════════════════════════════════════════
          TACTICAL REAL-TIME GPS HUD & AUTONOMOUS ROUTING ENGINE
```

[![MapLibre GL JS](https://img.shields.io/badge/MapLibre%20GL%20JS-v3.6.2-00f0ff?style=for-the-badge&logo=maplibre&logoColor=black)](https://maplibre.org/)
[![WebGL 2.0](https://img.shields.io/badge/WebGL-2.0%20GPU%20Accelerated-39ff14?style=for-the-badge&logo=webgl&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
[![Routing Engine](https://img.shields.io/badge/Routing-OSRM%20%2F%20Valhalla-fcee0a?style=for-the-badge&logo=openstreetmap&logoColor=black)](http://project-osrm.org/)
[![Geocoding](https://img.shields.io/badge/Geocoding-Photon%20Komoot-ff0055?style=for-the-badge&logo=openstreetmap&logoColor=white)](https://photon.komoot.io/)
[![Zero External Bundlers](https://img.shields.io/badge/Dependencies-Zero%20Build%20Step-9d00ff?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-white?style=for-the-badge)](LICENSE)

*A high-performance, GPU-accelerated Cyberpunk tactical GPS navigation geomatrix built with pure Vanilla JavaScript, WebGL vector tiles, Web Audio API procedural sound synthesis, live atmospheric telemetry, and an integrated Netrunner CLI terminal.*

</div>

---

## 🌟 Overview

**CYBERMAP** transforms real-world spatial data into a sci-fi tactical HUD interface. Powered by **MapLibre GL JS** and OpenFreeMap vector planet tiles, it delivers seamless 60 FPS vector map rendering, real-time geolocation tracking with Kalman-smoothed heading estimation, turn-by-turn multi-modal navigation, AI voice guidance, and an interactive hacker terminal.

Designed with a high-contrast cyberpunk visual hierarchy, CYBERMAP eliminates blurry raster tile filters in favor of native vector shader stylesheets, providing crystal-clear road networks, building footprints, and holographic HUD telemetry.

---

## ⚡ Key Highlights & Features

### 🗺️ GPU-Accelerated Vector Geomatrix
- **100% Native Vector Rendering**: Multi-layered vector tiles powered by OpenFreeMap and MapLibre GL JS.
- **Custom Cyberpunk Vector Styles**:
  - **Cyber Neon (`cyberpunk-style.json`)**: Deep obsidian base, radiant cyan highways, and luminous neon yellow arterial corridors.
  - **Synthwave Violet (`synthwave-style.json`)**: Midnight space violet base, dark amethyst buildings, hot magenta outlines, and lavender local street network.
  - **Phosphor Matrix Green (`matrix-style.json`)**: Cyber mainframe CRT obsidian, phosphor green highways, and emerald street hierarchy.
  - **Clean Recon Dark (`esri-dark`)**: Minimalist low-light cartography for stealth operations.
  - **Satellite Recon (`esri-sat`)**: High-resolution orbital satellite imagery.
  - **Daylight Mode (`osm-base`)**: High-visibility cartographic mode for bright ambient environments.
- **Atmospheric HUD Overlays**: CRT scanline simulation, radar sweep beam, vignette shading, and tactical holographic scanning grid.

### 🚗 Autonomous Routing & Navigation Engine
- **Multi-Modal Routing**: Optimized profiles for **Automobile**, **Bicycle**, and **Pedestrian** transit powered by OSRM and Valhalla.
- **Multi-Route Alternatives**: Real-time comparison cards calculating duration, distance, and ETA with dynamic route selection.
- **Avoidance Filters**: Instant recalculation bypassing **Tollways**, **Highways**, or **Ferries**.
- **Real-Time Turn-by-Turn Guidance**: Maneuver icons, street names, remaining distance, and ETA counters.
- **Full Route Simulation**: Built-in virtual playback engine simulating vehicle transit, camera rotation, and dynamic voice cues.

### 🔍 Tactical Search & Geocoding
- **Photon by Komoot Engine**: Instant, typo-tolerant OpenStreetMap geocoding with local query caching and location-biased scoring.
- **Target Reticle Map Marker**: Dynamic animated holographic reticle targeting selected coordinates with instant single-click route initialization.
- **Voice Search**: Built-in speech-to-text recognition via the Web Speech API (`webkitSpeechRecognition`).

### 🛰️ Live Telemetry & GPS Tracking
- **High-Precision Geolocation**: Real-time position tracking, speed calculation (km/h), bearing, altitude, and heading estimation.
- **Heading-Up vs. North-Up**: Dynamic compass-driven camera rotation locking the viewport to vehicle orientation.
- **Breadcrumb Trail Recorder**: Configurable GPS breadcrumb trail mapping previous transit paths.
- **Satellite Micro-Pinpoint Calibration**: Manual calibration tool to align coordinates and compensate for GPS drift.

### 🌦️ Atmospheric Weather Telemetry Widget
- **Live Open-Meteo Integration**: Real-time weather diagnostics based on map center coordinates.
- **Environmental Telemetry**: Ambient temperature, condition alerts, wind velocity, precipitation probability, humidity, and UV index.
- **Hourly Forecast Matrix**: Mini time-series telemetry forecasting local atmospheric changes.
- **Particle Weather Canvas**: Dynamic visual canvas rain, snow, and cyber-ash particle generator.
- **Compact Floating Pill Mode**: Minimize the widget into a sleek, non-intrusive HUD status indicator.

### 🔊 Procedural Cyber Audio & AI Voice Guidance
- **Zero Audio Assets Required**: 100% procedural sound synthesis using the native Web Audio API (`AudioContext`).
  - Procedural SFX: UI confirmation beeps, scanner chirps, warning buzzers, radar ping sweeps, and route alert tones.
- **Text-to-Speech Voice Guidance**: AI voice turn-by-turn announcements using `SpeechSynthesis` with sci-fi pitch and rate tuning.

### 💻 Netrunner CLI Terminal
- Built-in floating hacker console accessible via the **`~` / `` ` ``** (backtick) key or top HUD bar.
- Interactive quick-command chips for touch and mobile devices.
- Full control over map camera, routing, weather telemetry, system diagnostics, and waypoint creation.

---

## ⌨️ Netrunner CLI Command Matrix

Press **`~`** (backtick) to toggle the terminal at any time.

| Category | Command | Description |
| :--- | :--- | :--- |
| **Navigation** | `route <destination>` | Calculate and draw optimal tactical route to destination |
| | `reroute` | Recalculate route from current position |
| | `nav stop` | Abort active turn-by-turn navigation |
| | `mode <car\|bike\|walk>` | Change routing costing profile |
| | `opt <fastest\|shortest>` | Toggle between speed and distance optimization |
| | `avoid <tolls\|highways\|ferries\|none>` | Configure road avoidances |
| **Map & Camera** | `goto <location>` | Search for a location and pan map camera |
| | `flyto <lng> <lat> [zoom]` | Smooth 3D camera fly-to coordinates |
| | `zoom <1-22>` | Set camera magnification level |
| | `pitch <0-60>` | Adjust 3D perspective camera tilt |
| | `bearing <0-360>` | Rotate map compass heading |
| | `recenter` | Lock camera onto current GPS position |
| | `theme <neon\|matrix\|synthwave\|void\|daylight>` | Instant vector map style switch |
| | `night` / `day` | Quick toggle dark cyberpunk / light mode |
| **Sensors & HUD** | `weather [city]` | Toggle weather HUD or query atmospheric telemetry |
| | `gps [status]` | Query satellite lock, speed, and accuracy |
| | `scan` | Execute a 360° tactical radar sweep |
| | `pinpoint` | Launch satellite micro-pinpoint offset tool |
| | `trail <on\|off\|clear>` | Manage GPS breadcrumb recording trail |
| **Audio & System** | `voice <on\|off>` | Toggle AI voice turn-by-turn speech |
| | `speak <text>` | Synthesize custom AI voice transmission |
| | `audio <on\|off>` | Enable or mute Web Audio procedural soundboard |
| | `sysinfo` | Display client FPS, viewport resolution, and memory |
| | `mark <name>` | Drop a tactical marker at map crosshairs |
| | `marks` | Display all saved tactical coordinates |
| | `clear` | Purge terminal log buffer |

---

## 🎮 Hotkeys & Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| **`~`** or **`` ` ``** | Toggle Netrunner CLI Terminal |
| **`Escape`** | Close open modals, search dropdowns, or terminal |
| **`N`** | Toggle Heading-Up / North-Up compass orientation |
| **`R`** | Recenter camera on active GPS fix |
| **`T`** | Cycle map themes (Neon → Synthwave → Matrix → Dark) |
| **`W`** | Toggle Atmospheric Weather HUD |
| **`M`** | Toggle distance measurement tool |

---

## 📁 Repository Structure

```
cyberpunk-map/
├── index.html               # Main production application (Single-File Architecture)
├── cyberpunk-style.json     # Cyber Neon MapLibre Vector Style (OpenFreeMap Schema)
├── synthwave-style.json     # Synthwave Violet/Purple MapLibre Vector Style
├── matrix-style.json        # Phosphor Matrix Green MapLibre Vector Style
└── README.md                # Project Documentation & Architecture Guide
```

---

## 🚀 Quickstart & Local Setup

CYBERMAP requires **zero build tools, bundlers, or npm installations**. It runs directly in any modern web browser.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/cyberpunk-map.git
cd cyberpunk-map
```

### 2. Launch Local HTTP Server
Because modern browsers restrict Geolocation, Web Speech, and local vector tile JSON requests over the `file://` protocol, serve the directory via any local HTTP server:

#### Using Python 3 (Recommended)
```bash
python -m http.server 8080
```

#### Using Node.js (`npx serve`)
```bash
npx serve .
```

#### Using PHP
```bash
php -S localhost:8080
```

### 3. Open in Browser
Visit **`http://localhost:8080`** in your browser. Grant location permissions when prompted to enable real-time GPS tracking.

---

## 🛠️ Technology Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Core** | Pure HTML5 & ES6+ JavaScript | Zero external runtime frameworks (No React/Vue/Tailwind) |
| **Map Rendering** | [MapLibre GL JS](https://maplibre.org/) | WebGL GPU-accelerated vector tile rendering |
| **Map Vectors** | [OpenFreeMap](https://openfreemap.org/) / OSM | Free, open-source planet vector tiles |
| **Routing** | [OSRM](http://project-osrm.org/) & [Valhalla](https://valhalla.github.io/valhalla/) | High-speed multi-modal road graph navigation |
| **Geocoding** | [Photon](https://photon.komoot.io/) (Komoot) | Typo-tolerant geocoding powered by OpenStreetMap |
| **Weather** | [Open-Meteo](https://open-meteo.com/) | Real-time global meteorological forecasts & solar metrics |
| **Audio Synthesis** | Web Audio API (`AudioContext`) | Procedural oscillators, gain ramps, and zero-file SFX |
| **Voice Synthesis** | Web Speech API | Client-side speech synthesis and speech-to-text recognition |
| **Styling** | Vanilla CSS3 | Custom HUD chamfers, glassmorphism, scanlines, and CSS variables |

---

## 🎨 Vector Map Styles Architecture

Unlike typical dark map themes that use CSS raster invert filters, CYBERMAP utilizes custom MapLibre vector style definitions:

```
[ Vector PBF Tiles (OpenFreeMap) ]
                │
                ▼
      MapLibre GL Engine
  ┌─────────────┼─────────────┐
  ▼             ▼             ▼
Cyber Neon   Synthwave     Matrix
 Style         Style        Style
  │             │             │
  └─────────────┴─────────────┘
                │
         GPU Rasterizer
                │
        60 FPS Output
```

1. **No Canvas Washout**: Streets remain razor-sharp at high zoom levels (`z1` to `z22`).
2. **True Visual Hierarchy**: Primary motorways, secondary roads, tunnels, and residential paths have distinct luminescence values.
3. **Overzoom Protection**: High-resolution vector geometry prevents pixelation even when zooming beyond standard tile levels.

---

## ♿ Accessibility & Performance

- **Reduced Motion Support**: Automatically respects system-level `prefers-reduced-motion` settings and provides an in-app toggle (`btn-toggle-reduced-motion`) to disable scanlines, radar sweeps, and particle simulations.
- **Low-Power Mode**: Navigation simulation and GPS tracking gracefully throttle rendering rates when backgrounded.
- **Mobile Responsive**: HUD elements dynamically reconfigure for mobile displays with touch-friendly chip controls and hidden overlays.

---

## 📜 License

Distributed under the **MIT License**. Free for personal, educational, and commercial use. See `LICENSE` for details.

---

<div align="center">
  <sub>CYBERMAP // SYSTEM ONLINE // NIGHT CITY GEOMATRIX</sub>
</div>
