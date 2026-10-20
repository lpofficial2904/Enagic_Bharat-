import k8Model from "../assets/levelluk-k8-img.jpg"; 
import sd501dxModel from "../assets/banner-img-product-sd501dx.jpg"; 
import sd501Platinum from "../assets/sd501platinum_1.png"; 
import super501 from "../assets/Super-501-3-1.jpg"; 
import sd501u from "../assets/product-img-sd501u-2-2x.jpg";
import jrIv from "../assets/The New Leveluk JRIV!.jpg"; 
import anespaModel from "../assets/LeveLuk-Anespa-DX.jpg";
import product8 from "../assets/product-8-Enagic-leveluk-R.jpg"


const allProducts = [
  {
    id: 1,
    name: "Leveluk K8",
    image: k8Model,
    price: "₹3,80,000",
    description: "Flagship touchscreen system for feature-focused homes",
    longDescription: "Designed for households that want Enagic's most advanced countertop experience, the Leveluk K8 pairs an eight-plate chamber with a colour touch display and multi-voltage compatibility. Its guided interface makes everyday operation approachable while retaining the flexibility expected from a flagship system.",
    specifications: [
      { title: "Electrode plates:", value: "8" },
      { title: "Plate size (mm):", value: "135 x 75" },
      { title: "Negative ORP (mV):", value: "-722" },
      { title: "pH Range", value: "2.5 – 11.5" },
      { title: "Generates:", value: "5 water types" },
      { title: "Wattage (W):", value: "230" },
      { title: "Total weight (kg):", value: "5.0" },
      { title: "Dimensions WHD (mm):", value: "279 x 345 x 147" },
      { title: "Production rate (L/min):", value: "Kangen Water®: 4.5 – 7.6 Acidic Water: 1.5 – 2.6 Strong Acidic water: 0.6 – 1.1" },
      { title: "Ease of Use:", value: "Fully automatic, Full-color LCD Touch Screen" },
      { title: "Languages:", value: "10" },
      { title: "Warranty (years):", value: "5" }
    ]
  },
  {
    id: 2,
    name: "Leveluk SD501DX",
    image: sd501dxModel,
    price: "₹3,40,000",
    description: "Modern seven-plate performance with guided controls",
    longDescription: "The SD501DX refreshes Enagic's established seven-plate format with a prominent display and straightforward one-touch operation. It suits buyers who value familiar countertop performance presented through a cleaner, more contemporary interface.",
    specifications: [
      { title: "Electrode plates:", value: "7" },
      { title: "Plate size (mm):", value: "135 x 75" },
      { title: "Negative ORP (mV):", value: "-631" },
      { title: "pH Range", value: "2.5 – 11.5" },
      { title: "Generates:", value: "5 water types" },
      { title: "Wattage (W):", value: "230" },
      { title: "Total weight (kg):", value: "6.3" },
      { title: "Dimensions WHD (mm):", value: "264 x 338 x 171" },
      { title: "Production rate (L/min):", value: "Kangen Water®: 4.5 – 7.6 Acidic Water: 1.5 – 2.6 Strong Acidic water: 0.6 – 1.1" },
      { title: "Ease of Use:", value: "Fully automatic, One-touch LCD panel with audio guidance" },
      { title: "Languages:", value: "8" },
      { title: "Warranty (years):", value: "5" }
    ]
  },
  {
    id: 3,
    name: "Leveluk SD501 Platinum",
    image: sd501Platinum,
    price: "₹2,97,000",
    description: "A refined metallic take on the classic SD501 platform",
    longDescription: "The SD501 Platinum combines a seven-plate electrolysis chamber with a metallic silver exterior designed for considered kitchen spaces. A large display and multilingual voice guidance keep operation clear, making it a polished choice for users who want proven functionality with an elevated finish.",
    specifications: [
      { title: "Electrode plates:", value: "7" },
      { title: "Plate size (mm):", value: "135 x 75" },
      { title: "Negative ORP (mV):", value: "-631 " },
      { title: "pH Range", value: "2.5 – 11.5" },
      { title: "Generates:", value: "5 water types" },
      { title: "Wattage (W):", value: "230" },
      { title: "Total weight (kg):", value: "6.3" },
      { title: "Dimensions WHD (mm):", value: "264 x 338 x 171" },
      { title: "Production rate (L/min):", value: "Kangen Water®: 4.5 – 7.6 Acidic Water: 1.5 – 2.6 Strong Acidic water: 0.6 – 1.1" },
      { title: "Ease of Use:", value: "Fully automatic, One-touch LCD panel with multi-language audio" },
      { title: "Languages:", value: "5" },
      { title: "Warranty (years):", value: "5" }
    ]
  },
  {
    id: 4,
    name: "Leveluk Super 501",
    image: super501,
    price: "₹4,40,000",
    description: "High-capacity configuration for demanding daily use",
    longDescription: "Created for settings where output matters, the Super 501 uses twelve plates across two electrolysis chambers. Its capacity makes it a practical candidate for larger households, shared workplaces and other environments with frequent daily use.",
    specifications: [
      { title: "Electrode plates:", value: "7 & 5" },
      { title: "Plate size (mm):", value: "135 x 75" },
      { title: "Negative ORP (mV):", value: "-800 mV" },
      { title: "pH Range", value: "2.5 – 11.5" },
      { title: "Generates:", value: "5 water types" },
      { title: "Wattage (W):", value: "200" },
      { title: "Total weight (kg):", value: "10.2" },
      { title: "Dimensions WHD (mm):", value: "352 x 384 x 250" },
      { title: "Production rate (L/min):", value: "Kangen Water®: 4.9 – 7.9 Acidic Water: 1.9 – 3.0 Strong Acidic water: 1.1 – 3.0" },
      { title: "Ease of Use:", value: "	Fully automatic, very simple to operate" },
      { title: "Languages:", value: "1" },
      { title: "Warranty (years):", value: "3" }
    ]
  },
  {
    id: 5,
    name: "Leveluk Jr IV",
    image: jrIv,
    price: "₹2,40,000",
    description: "Compact four-plate system for lighter routines",
    longDescription: "The Jr IV brings core Enagic functionality into a smaller, lower-power format built around four solid plates. It is best considered for individuals or couples with moderate output needs, while busier households may benefit from a higher-capacity model.",
    specifications: [
      { title: "Electrode plates:", value: "4" },
      { title: "Plate size (mm):", value: "135 x 75" },
      { title: "Negative ORP (mV):", value: "-450 mV" },
      { title: "pH Range", value: "2.5 – 11.5" },
      { title: "Generates:", value: "5 water types" },
      { title: "Wattage (W):", value: "120" },
      { title: "Total weight (kg):", value: "6.3" },
      { title: "Dimensions WHD (mm):", value: "264 x 338 x 171" },
      { title: "Production rate (L/min):", value: "Kangen Water®: 3.0 – 4.9 Acidic Water: 0.2 – 1.9 Strong Acidic water: 0.3 – 0.7" },
      { title: "Ease of Use:", value: "Fully automatic unit" },
      { title: "Languages:", value: "1" },
      { title: "Warranty (years):", value: "3" }
    ]
  },
  {
    id: 6,
    name: "Leveluk SD501U",
    image: sd501u,
    price: "₹2,73,000",
    description: "Under-counter performance for uncluttered kitchens",
    longDescription: "The SD501U relocates its seven-plate main unit beneath the counter and places daily control at a dedicated digital faucet. It is designed for interiors where clear worktops matter, offering a discreet installation without turning the machine into a visual focal point.",
    specifications: [
      { title: "Electrode plates:", value: "7" },
      { title: "Plate size (mm):", value: "135 x 75" },
      { title: "Negative ORP (mV):", value: "-800 mV" },
      { title: "pH Range", value: "2.5 – 11.5" },
      { title: "Generates:", value: "5 water types" },
      { title: "Wattage (W):", value: "230" },
      { title: "Total weight (kg):", value: "5.0" },
      { title: "Dimensions WHD (mm):", value: "264 x 338 x 171" },
      { title: "Production rate (L/min):", value: "Kangen Water®: 4.5 – 7.6 Acidic Water: 1.5 – 2.6 Strong Acidic water: 0.6 – 1.1" },
      { title: "Ease of Use:", value: "Fully automatic, very simple to operate" },
      { title: "Languages:", value: "1" },
      { title: "Warranty (years):", value: "5" }
    ]
  },
  
  {
    id: 7,
    name: "LeveLuk Anespa DX",
    image: anespaModel, 
    price: "₹2,20,000",
    description: "Bathroom filtration designed as a considered ritual",
    longDescription: "The Anespa DX is a bathroom-focused system that filters shower and bath water while incorporating a mineral cartridge. Its generous flow and spa-minded format are intended for users seeking a more refined bathing routine at home.",
    specifications: [
      { title: "Electrode plates:", value: "N/A (Twin Cartridge System)" },
      { title: "Purification Capacity:", value: "15 L/min" },
      { title: "Negative ORP (mV):", value: "Generates Strong Negative-Ions" },
      { title: "pH Range", value: "Same as tap water (Mineral Enhanced)" },
      { title: "Generates:", value: "Mineral ion water for bath or shower" },
      { title: "Cartridge Ingredients:", value: "Tufa stone, MIC stone, Power stone" },
      { title: "Total weight (kg):", value: "2.5" },
      { title: "Dimensions WHD (mm):", value: "130 x 346" },
      { title: "Production rate (L/min):", value: "Mineral Ion Water: 2.6 L/min" },
      { title: "Ease of Use:", value: "Very simple to install and operate on wall mount" },
      { title: "Languages:", value: "N/A" },
      { title: "Warranty (years):", value: "3" }
    ]
  },

  {
    id: 8,
    name: "LeveLuk R",
    image: product8,
    price: "₹1,55,000",
    description: "An accessible introduction to the Leveluk range",
    longDescription: "The Leveluk R offers a straightforward starting point with three platinum-coated titanium plates and three selectable water settings. Its simpler configuration suits buyers who want essential operation and a more approachable entry into the Enagic lineup.",
    specifications: [
      { title: "Electrode plates:", value: "3" },
      { title: "Plate size (mm):", value: "135 x 75" },
      { title: "Negative ORP (mV):", value: "-250 mV" },
      { title: "pH Range", value: "6.0 – 9.5" },
      { title: "Generates:", value: "3 water types" },
      { title: "Wattage (W):", value: "120" },
      { title: "Total weight (kg):", value: "6.1" },
      { title: "Dimensions WHD (mm):", value: "264 x 338 x 171" },
      { title: "Production rate (L/min):", value: "Kangen Water®: 1.5 – 3.0 Acidic Water: 0.5 – 1.0" },
      { title: "Ease of Use:", value: "Simple one-button operation" },
      { title: "Languages:", value: "1" },
      { title: "Warranty (years):", value: "3" }
    ]
  }
];

const screenshotPricing = {
  1: { price: 322033.90, productTax: 57966.10, shipping: 1694.92, shippingTax: 305.08, totalAmount: 382000 },
  2: { price: 288135.58, productTax: 51864.42, shipping: 1694.92, shippingTax: 305.08, totalAmount: 342000 },
  4: { price: 372881.36, productTax: 67118.64, shipping: 2542.38, shippingTax: 457.62, totalAmount: 443000 },
  5: { price: 203389.84, productTax: 36610.16, shipping: 1694.92, shippingTax: 305.08, totalAmount: 242000 },
  7: { price: 186440.68, productTax: 33559.32, shipping: 1694.92, shippingTax: 305.08, totalAmount: 222000 },
};

const roundMoney = (amount) => Math.round(amount * 100) / 100;
const formatWholeRupees = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });
const hiddenProductIds = new Set([3, 6, 8]);

export const products = allProducts
  .filter(({ id }) => !hiddenProductIds.has(id))
  .map((product) => {
    const listedAmount = Number(product.price.replace(/[^\d]/g, ""));
    const taxablePrice = roundMoney(listedAmount / 1.18);
    const pricing = screenshotPricing[product.id] ?? {
      price: taxablePrice,
      productTax: roundMoney(listedAmount - taxablePrice),
      shipping: 1694.92,
      shippingTax: 305.08,
      totalAmount: listedAmount + 2000,
    };

    return {
      ...product,
      pricing: {
        ...pricing,
        processingFee: 0,
        processingFeeTax: 0,
      },
      price: `₹${formatWholeRupees.format(pricing.totalAmount)}`,
    };
  });

export const getProductSlug = (name) =>
  name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const getCanonicalProductSlug = (product) => ({
  1: "leveluk-k8",
  2: "leveluk-sd501dx",
  4: "leveluk-super-501",
  5: "leveluk-jr-iv",
  7: "leveluk-anespa-dx",
}[product.id] ?? getProductSlug(product.name));
