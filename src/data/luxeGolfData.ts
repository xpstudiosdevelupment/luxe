import { MenuItem, ReviewItem, ClubTelemetry } from '../types';

import heroImg from '../assets/images/luxe_golf_hero_1786586328719.jpg';
import privateRoomImg from '../assets/images/luxe_private_room_1786586350516.jpg';
import openBaysImg from '../assets/images/luxe_open_bays_1786586365656.jpg';
import swingAnalysisImg from '../assets/images/luxe_swing_analysis_1786586376964.jpg';
import foodDrinksImg from '../assets/images/luxe_food_drinks_1786586390662.jpg';

export const LUXE_GOLF_INFO = {
  name: "Luxe Golf",
  tagline: "Lethbridge's Premier Indoor Golf & VIP Lounge",
  address: "220 12a St N, Lethbridge, AB T1H 2J1",
  formattedAddress: "220 12a St N, Lethbridge, AB T1H 2J1",
  city: "Lethbridge, AB",
  postalCode: "T1H 2J1",
  phone: "(403) 317-7740",
  rawPhone: "+14033177740",
  websiteDisplay: "luxegolflethbridge.ca",
  websiteUrl: "https://luxegolflethbridge.ca",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Luxe+Golf+220+12a+St+N+Lethbridge+AB+T1H+2J1",
  rating: 4.6,
  totalReviews: 50,
  currentStatusText: "Open · Closes 10 p.m.",
  closingTimeToday: "10:00 PM",
  isOpenNow: true,
  hours: [
    { day: "Monday", hours: "10:00 AM – 10:00 PM", status: "Open" },
    { day: "Tuesday", hours: "10:00 AM – 10:00 PM", status: "Open" },
    { day: "Wednesday", hours: "10:00 AM – 10:00 PM", status: "Open" },
    { day: "Thursday", hours: "10:00 AM – 10:00 PM", status: "Open" },
    { day: "Friday", hours: "9:00 AM – 11:00 PM", status: "Open" },
    { day: "Saturday", hours: "9:00 AM – 11:00 PM", status: "Open" },
    { day: "Sunday", hours: "10:00 AM – 10:00 PM", status: "Open" }
  ],
  pricing: {
    openBayPerHour: 45,
    privateRoomPerHour: 65,
    swingAnalysisAddon: 20,
  },
  images: {
    hero: heroImg,
    privateRoom: privateRoomImg,
    openBays: openBaysImg,
    swingAnalysis: swingAnalysisImg,
    foodDrinks: foodDrinksImg,
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m1",
    name: "Luxe Loaded Nachos",
    category: "starters",
    description: "Crispy tortilla chips layered with aged cheddar, jack cheese, jalapenos, pico de gallo, green onions & sour cream.",
    price: 18.50,
    popular: true,
    dietary: ["Vegetarian Available"]
  },
  {
    id: "m2",
    name: "Gourmet Golf Sliders (3)",
    category: "starters",
    description: "AAA Alberta beef patties, smoked bacon jam, aged white cheddar, brioche bun with house truffle aioli.",
    price: 19.00,
    popular: true
  },
  {
    id: "m3",
    name: "Crispy Buffalo Wings",
    category: "starters",
    description: "Pound of jumbo wings tossed in signature house buffalo, honey garlic, or dry parmesan rub.",
    price: 17.50
  },
  {
    id: "m4",
    name: "Eagle Artisan Flatbread",
    category: "starters",
    description: "Prosciutto, roasted fig jam, fresh arugula, goat cheese, and hot honey drizzle.",
    price: 18.00
  },
  {
    id: "m5",
    name: "The Par 4 Smash Burger",
    category: "mains",
    description: "Double Alberta beef smash patties, American cheese, crispy onions, pickles & secret sauce on brioche with seasoned fries.",
    price: 21.00,
    popular: true
  },
  {
    id: "m6",
    name: "Truffle Parmesan Fries",
    category: "starters",
    description: "Hand-cut fries, white truffle oil, shaved parmesan & fresh parsley served with garlic aioli.",
    price: 12.00,
    dietary: ["Vegetarian"]
  },
  {
    id: "m7",
    name: "Lethbridge Local Draft Beer Flight",
    category: "beverages",
    description: "Four 5oz pours of local Alberta craft beers on tap.",
    price: 14.00,
    popular: true
  },
  {
    id: "m8",
    name: "Hole-in-One Signature Old Fashioned",
    category: "cocktails",
    description: "Bourbon, angostura bitters, spiced orange peel, and slow-melt ice sphere.",
    price: 15.00,
    popular: true
  },
  {
    id: "m9",
    name: "Birdie Citrus Margarita",
    category: "cocktails",
    description: "100% agave tequila, fresh lime juice, triple sec, agave nectar with tajin salted rim.",
    price: 14.50
  },
  {
    id: "m10",
    name: "Craft IPA Pitcher (60 oz)",
    category: "beverages",
    description: "Ice cold pitcher of premium craft IPA ideal for bay sharing.",
    price: 26.00
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "r1",
    author: "Mark Henderson",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    date: "2 weeks ago",
    comment: "Luxe Golf is easily the best indoor golf setup in Lethbridge! We booked a private room for 4 people and the simulator accuracy was spot on. The food and craft beer service right to the room made it a 10/10 night.",
    tag: "Private Room",
    helpfulCount: 14
  },
  {
    id: "r2",
    author: "Sarah Jenkins",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    date: "1 month ago",
    comment: "Used the swing analysis tools to dial in my driver launch angle during the off-season. Super helpful metrics like club speed, face path, and spin rate. Staff is friendly and the facility is super clean.",
    tag: "Swing Analysis",
    helpfulCount: 9
  },
  {
    id: "r3",
    author: "David Miller",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    rating: 4,
    date: "1 month ago",
    comment: "Great open bays with plenty of room to swing comfortably. The burgers were delicious and arrived quickly. Open until 10 PM makes it great for late evening practice rounds.",
    tag: "Open Bays",
    helpfulCount: 7
  },
  {
    id: "r4",
    author: "Tyler & Kim Vance",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    date: "2 months ago",
    comment: "Hosted a private birthday event in their VIP suite room. Everything was seamless! Located right on 12a St N in Lethbridge with convenient parking. Highly recommend!",
    tag: "Private Room",
    helpfulCount: 11
  },
  {
    id: "r5",
    author: "Jason Kowalski",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    date: "3 months ago",
    comment: "Awesome selection of world-class courses on the simulator screen (Pebble Beach, St Andrews). Smash burger and loaded nachos were top tier!",
    tag: "Food & Drinks",
    helpfulCount: 6
  }
];

export const CLUB_TELEMETRY_SAMPLES: ClubTelemetry[] = [
  {
    clubName: "Driver (9.5°)",
    avgDistanceYards: 265,
    clubSpeedMph: 104,
    ballSpeedMph: 153,
    launchAngleDeg: 12.4,
    spinRateRpm: 2450
  },
  {
    clubName: "3-Wood (15°)",
    avgDistanceYards: 235,
    clubSpeedMph: 98,
    ballSpeedMph: 142,
    launchAngleDeg: 13.8,
    spinRateRpm: 3200
  },
  {
    clubName: "5-Iron",
    avgDistanceYards: 190,
    clubSpeedMph: 88,
    ballSpeedMph: 126,
    launchAngleDeg: 16.2,
    spinRateRpm: 4800
  },
  {
    clubName: "7-Iron",
    avgDistanceYards: 165,
    clubSpeedMph: 82,
    ballSpeedMph: 115,
    launchAngleDeg: 19.5,
    spinRateRpm: 6200
  },
  {
    clubName: "Pitching Wedge (46°)",
    avgDistanceYards: 130,
    clubSpeedMph: 75,
    ballSpeedMph: 98,
    launchAngleDeg: 24.1,
    spinRateRpm: 8900
  }
];
