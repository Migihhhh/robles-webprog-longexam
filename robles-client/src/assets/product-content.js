import imgHeadphones from "./img/headphones.jpg";
import imgNoirLUT from "./img/noirlut.avif";
import imgStreetFoley from "./img/streetfoley.jpg";
import imgFilmGrain from "./img/filmgrain.jpg";
import imgLensFlare from "./img/lensflare.avif";
import imgMonitor from "./img/IPS.webp";
import imgNAS from "./img/nas.jpg";
import imgTimeline from "./img/timeline.jpg";
import imgLiquidCooler from "./img/liquidcooler.webp";
import imgMotionGraphics from "./img/motion graphics.png";

const products = [
  // --- LOCALIZED DIGITAL ASSETS ---
  {
    name: "manila-noir-lut",
    title: "Manila Noir LUT Collection",
    category: "Color Grading",
    price: "₱1,850.00",
    stock: "Instant Digital Delivery",
    image: imgNoirLUT,
    content: [
      "Engineered for the unique lighting of Metro Manila. This set of 15 LUTs handles the harsh neon spill of Binondo night shoots and the high-contrast midday tropical sun without breaking skin tones.",
      "Optimized for Sony S-Log and Fujifilm F-Log, making it perfect for the most common mirrorless systems used by Filipino freelance cinematographers.",
      "Instantly gives your footage that gritty, award-winning indie film look. Includes a free PDF guide on color space transforms.",
    ],
  },
  {
    name: "metro-street-foley",
    title: "Metro Street Foley & Ambience",
    category: "Audio Assets",
    price: "₱1,200.00",
    stock: "Digital Asset",
    image: imgStreetFoley,
    content: [
      "Authentic, high-fidelity environmental audio recorded straight from the streets of Caloocan, Manila, and Makati. Essential for local narrative films and documentaries.",
      "Includes over 300 metadata-tagged files: distant jeepney hums, LRT train passes, heavy monsoon rain on tin roofs, and bustling wet market crowd walla.",
      "Recorded at 96kHz/24-bit. Avoid using generic Hollywood sound libraries when your film needs the true sonic signature of the Philippines.",
    ],
  },
  {
    name: "cinemalaya-film-grain",
    title: "Indie 16mm Film Emulation",
    category: "VFX Overlays",
    price: "₱950.00",
    stock: "Instant Digital Delivery",
    image: imgFilmGrain,
    content: [
      "Give your digital footage the organic, textured feel of classic Philippine cinema. We scanned authentic 16mm Kodak stock to create true-to-life film grain overlays.",
      "Provided as 4K ProRes 422 files. Simply drop them over your footage in Premiere Pro or Resolve and set the blend mode to 'Overlay'.",
      "Perfect for music videos, nostalgic short films, or submitting to local independent film festivals.",
    ],
  },
  {
    name: "tropical-lens-flares",
    title: "Tropical Sun Flares & Halation",
    category: "VFX Overlays",
    price: "₱1,100.00",
    stock: "Digital Asset",
    image: imgLensFlare,
    content: [
      "Captured using vintage glass under the harsh Philippine midday sun. This pack includes 45 authentic optical flares and edge halation templates.",
      "Adds a dreamy, high-end commercial aesthetic to travel vlogs, wedding highlights, and real estate videography.",
      "No heavy plugins required. Compatible with all major editing software used in the local industry.",
    ],
  },

  {
    name: "pro-art-edit-monitor",
    title: 'Color-Calibrated 27" IPS Monitor',
    category: "Hardware",
    price: "₱24,500.00",
    stock: "Available locally",
    image: imgMonitor,
    content: [
      "The gold standard for standard Philippine edit bays. This 27-inch 4K IPS panel covers 100% sRGB and 100% Rec. 709, ensuring your colors are accurate for YouTube and client delivery.",
      "Easily sourceable and heavily supported by local warranties. It features a factory-calibrated panel so you can start editing straight out of the box.",
      "Includes an ergonomic stand, perfect for long editing sessions in home studios or condo workstations.",
    ],
  },
  {
    name: "gilmore-nas-storage",
    title: "Custom 16TB Editing NAS",
    category: "Hardware",
    price: "₱32,000.00",
    stock: "Built-to-Order",
    image: imgNAS,
    content: [
      "Stop relying on fragile external hard drives. Our custom-assembled Network Attached Storage (NAS) is built using locally sourced, enterprise-grade drives for maximum reliability.",
      "Configured in RAID 1 for automatic data redundancy. If one drive fails, your client's wedding or corporate footage is completely safe.",
      "Features a compact, dust-resistant chassis ideal for the Philippine climate. Plugs directly into your local network for seamless multi-editor collaboration.",
    ],
  },
  {
    name: "tactile-edit-console",
    title: "Compact Editing Console",
    category: "Hardware",
    price: "₱14,999.00",
    stock: "Shopee/Lazada Verified",
    image: imgMotionGraphics,
    content: [
      "A highly accessible control surface that speeds up your Premiere Pro and DaVinci Resolve workflows. Features tactile dials for instant color grading adjustments.",
      "Compact enough to fit on small condo desks or easily packed into a backpack for on-location laptop editing in local coffee shops.",
      "Fully supported locally with quick shipping options. Say goodbye to repetitive mouse clicks and edit at the speed of thought.",
    ],
  },
  {
    name: "arctic-cooling-kit",
    title: "High-Performance Liquid Cooler",
    category: "Hardware",
    price: "₱4,850.00",
    stock: "In Stock",
    image: imgLiquidCooler,
    content: [
      "Keep your CPU temps down during heavy 4K rendering. This 240mm AIO liquid cooler is specifically selected for the hot Philippine climate.",
      "A vital upgrade for editors using Ryzen 7 or high-end Intel chips. Prevents thermal throttling so your export times stay consistently fast.",
      "Features quiet, dust-resistant fans that won't bleed noise into your microphone during voiceover recordings.",
    ],
  },

  // --- CONTENT CREATOR ESSENTIALS ---
  {
    name: "tiktok-kinetic-text",
    title: "Short-Form Kinetic Typography",
    category: "Motion Graphics",
    price: "₱850.00",
    stock: "Instant Digital Delivery",
    image: imgTimeline,
    content: [
      "Built specifically for the booming local short-form content market. This pack includes 50 pre-animated, highly engaging text templates for Reels and TikTok.",
      "Drag-and-drop directly into your vertical timelines. Features the aggressive motion blur and bounce animations favored by top local creators.",
      "Includes a tutorial on how to quickly change fonts and colors to match any brand identity.",
    ],
  },
  {
    name: "studio-monitor-headphones",
    title: "Flat-Response Studio Headphones",
    category: "Hardware",
    price: "₱8,500.00",
    stock: "Fast Local Delivery",
    image: imgHeadphones,
    content: [
      "The industry standard for audio mixing on a budget. These closed-back headphones provide excellent sound isolation against noisy environments like electric fans and street traffic.",
      "Features a completely flat frequency response, ensuring your dialogue edits and music mixes sound perfect on any device, from cinema speakers to mobile phones.",
      "Highly durable construction with easily replaceable earpads available on local e-commerce platforms.",
    ],
  },
];

export default products;
