import { ExampleData } from '../models';

const data: ExampleData[] = [
  {
    retailerCountry: 'United States',
    orderMethodType: 'Fax',
    retailerType: 'Outdoors Shop',
    productLine: 'Camping Equipment',
    productType: 'Cooking Gear',
    product: 'TrailChef Deluxe Cook Set',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 59628.66,
    quantity: 489,
    grossMargin: 0.34754797,
    availableStores: [
      {
        storeName: 'Barneys New York',
        website: 'https://www.barneys.com/'
      },
      {
        storeName: 'J. C. Penney',
        website: 'https://jcp.com/'
      },
      {
        storeName: 'Von Maur',
        website: 'http://www.vonmaur.com/'
      }
    ],
    id: 10
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Fax',
    retailerType: 'Outdoors Shop',
    productLine: 'Camping Equipment',
    productType: 'Sleeping Bags',
    product: 'Hibernator Extreme',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 87728.96,
    quantity: 352,
    grossMargin: 0.39814629,
    availableStores: [
      {
        storeName: 'Barneys New York',
        website: 'https://www.barneys.com/'
      }
    ],
    id: 15
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Fax',
    retailerType: 'Outdoors Shop',
    productLine: 'Camping Equipment',
    productType: 'Lanterns',
    product: 'EverGlow Butane',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 6940.03,
    quantity: 109,
    grossMargin: 0.36186587,
    availableStores: [
      {
        storeName: 'Barneys New York',
        website: 'https://www.barneys.com/'
      },
      {
        storeName: 'Von Maur',
        website: 'http://www.vonmaur.com/'
      }
    ],
    id: 20
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Fax',
    retailerType: 'Outdoors Shop',
    productLine: 'Mountaineering Equipment',
    productType: 'Safety',
    product: 'Granite Climbing Helmet',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 62464.88,
    quantity: 898,
    grossMargin: 0.24468085,
    availableStores: [
      {
        storeName: 'J. C. Penney',
        website: 'https://jcp.com/'
      },
      {
        storeName: 'Von Maur',
        website: 'http://www.vonmaur.com/'
      }
    ],
    id: 25
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Fax',
    retailerType: 'Outdoors Shop',
    productLine: 'Mountaineering Equipment',
    productType: 'Climbing Accessories',
    product: 'Granite Belay',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 19476.8,
    quantity: 296,
    grossMargin: 0.47613982,
    availableStores: [
      {
        storeName: 'J. C. Penney',
        website: 'https://jcp.com/'
      }
    ],
    id: 30
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Fax',
    retailerType: 'Outdoors Shop',
    productLine: 'Mountaineering Equipment',
    productType: 'Climbing Accessories',
    product: 'Granite Chalk Bag',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 4621.68,
    quantity: 262,
    grossMargin: 0.51643991,
    availableStores: [
      {
        storeName: 'J. C. Penney',
        website: 'https://jcp.com/'
      }
    ],
    id: 35
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Fax',
    retailerType: 'Outdoors Shop',
    productLine: 'Mountaineering Equipment',
    productType: 'Tools',
    product: 'Granite Axe',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 32870.4,
    quantity: 856,
    grossMargin: 0.49166667,
    availableStores: [
      {
        storeName: 'J. C. Penney',
        website: 'https://jcp.com/'
      },
      {
        storeName: 'Barneys New York',
        website: 'https://www.barneys.com/'
      }
    ],
    id: 40
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Fax',
    retailerType: 'Outdoors Shop',
    productLine: 'Personal Accessories',
    productType: 'Knives',
    product: 'Edge Extreme',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 30940.25,
    quantity: 275,
    grossMargin: 0.28895209,
    availableStores: [
      {
        storeName: 'J. C. Penney',
        website: 'https://jcp.com/'
      }
    ],
    id: 45
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Fax',
    retailerType: 'Outdoors Shop',
    productLine: 'Outdoor Protection',
    productType: 'First Aid',
    product: 'Compact Relief Kit',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 4057.2,
    quantity: 180,
    grossMargin: 0.60070985,
    availableStores: [
      {
        storeName: 'Barneys New York',
        website: 'https://www.barneys.com/'
      }
    ],
    id: 50
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Golf Shop',
    productLine: 'Personal Accessories',
    productType: 'Watches',
    product: 'Kodiak',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 7939.8,
    quantity: 66,
    grossMargin: 0.44272652,
    availableStores: [
      {
        storeName: 'Stage Stores',
        website: 'https://www.stage.com/'
      }
    ],
    id: 55
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Golf Shop',
    productLine: 'Personal Accessories',
    productType: 'Eyewear',
    product: 'Inferno',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 12935,
    quantity: 199,
    grossMargin: 0.39374952,
    availableStores: [
      {
        storeName: 'Stage Stores',
        website: 'https://www.stage.com/'
      }
    ],
    id: 60
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Golf Shop',
    productLine: 'Personal Accessories',
    productType: 'Knives',
    product: 'Pocket Gizmo',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 866.2,
    quantity: 71,
    grossMargin: 0.59836066,
    id: 65
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Golf Shop',
    productLine: 'Golf Equipment',
    productType: 'Irons',
    product: 'Lady Hailstorm Steel Irons',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 16025.28,
    quantity: 32,
    grossMargin: 0.44535634,
    id: 70
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Golf Shop',
    productLine: 'Golf Equipment',
    productType: 'Woods',
    product: 'Lady Hailstorm Steel Woods Set',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 53082.54,
    quantity: 62,
    grossMargin: 0.44845066,
    id: 75
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Golf Shop',
    productLine: 'Golf Equipment',
    productType: 'Golf Accessories',
    product: 'Course Pro Umbrella',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 5911.05,
    quantity: 492,
    grossMargin: 0.50059634,
    id: 80
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Camping Equipment',
    productType: 'Cooking Gear',
    product: 'TrailChef Cup',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 21434.73,
    quantity: 6134,
    grossMargin: 0.75675458,
    availableStores: [
      {
        storeName: 'Stage Stores',
        website: 'https://www.stage.com/'
      }
    ],
    id: 85
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Camping Equipment',
    productType: 'Cooking Gear',
    product: 'TrailChef Utensils',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 11394.39,
    quantity: 609,
    grossMargin: 0.46552646,
    id: 90
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Camping Equipment',
    productType: 'Sleeping Bags',
    product: 'Hibernator Lite',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 50892.68,
    quantity: 601,
    grossMargin: 0.29145017,
    id: 95
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Camping Equipment',
    productType: 'Sleeping Bags',
    product: 'Hibernator Camp Cot',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 150163.09,
    quantity: 1529,
    grossMargin: 0.33560737,
    id: 100
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Camping Equipment',
    productType: 'Packs',
    product: 'Canyon Mule Carryall',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 26806.92,
    quantity: 388,
    grossMargin: 0.40396584,
    id: 105
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Camping Equipment',
    productType: 'Lanterns',
    product: 'Firefly Multi-light',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 39785.31,
    quantity: 1536,
    grossMargin: 0.31356372,
    id: 110
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Personal Accessories',
    productType: 'Watches',
    product: 'Mountain Man Analog',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 28066.72,
    quantity: 592,
    grossMargin: 0.36722211,
    id: 115
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Personal Accessories',
    productType: 'Watches',
    product: 'Infinity',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 11000,
    quantity: 50,
    grossMargin: 0.47406545,
    id: 120
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Personal Accessories',
    productType: 'Eyewear',
    product: 'Polar Sun',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 25787.7,
    quantity: 426,
    grossMargin: 0.56801498,
    id: 125
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Personal Accessories',
    productType: 'Eyewear',
    product: 'Capri',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 40942.7,
    quantity: 1069,
    grossMargin: 0.34160497,
    id: 130
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Personal Accessories',
    productType: 'Eyewear',
    product: 'Maximus',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 45965,
    quantity: 566,
    grossMargin: 0.50212553,
    id: 135
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Personal Accessories',
    productType: 'Knives',
    product: 'Max Gizmo',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 20780.8,
    quantity: 544,
    grossMargin: 0.53960675,
    id: 140
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Personal Accessories',
    productType: 'Binoculars',
    product: 'Ranger Vision',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 14720,
    quantity: 92,
    grossMargin: 0.43611413,
    id: 145
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Outdoor Protection',
    productType: 'Insect Repellents',
    product: 'BugShield Lotion Lite',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 19841.22,
    quantity: 2865,
    grossMargin: 0.72853484,
    id: 150
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Outdoor Protection',
    productType: 'Sunscreen',
    product: 'Sun Shield',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 11871.24,
    quantity: 2034,
    grossMargin: 0.52710585,
    id: 155
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Outdoor Protection',
    productType: 'First Aid',
    product: 'Insect Bite Relief',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 2550,
    quantity: 425,
    grossMargin: 0.54,
    id: 160
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Golf Equipment',
    productType: 'Putters',
    product: 'Course Pro Putter',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 247817.5,
    quantity: 3430,
    grossMargin: 0.51695502,
    id: 165
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Department Store',
    productLine: 'Golf Equipment',
    productType: 'Golf Accessories',
    product: 'Course Pro Gloves',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 14307.48,
    quantity: 1386,
    grossMargin: 0.7665375,
    id: 170
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Warehouse Store',
    productLine: 'Camping Equipment',
    productType: 'Tents',
    product: 'Star Gazer 2',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 603311.94,
    quantity: 1102,
    grossMargin: 0.28293788,
    id: 175
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Warehouse Store',
    productLine: 'Camping Equipment',
    productType: 'Lanterns',
    product: 'EverGlow Single',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 49176.28,
    quantity: 1483,
    grossMargin: 0.45597105,
    id: 180
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Warehouse Store',
    productLine: 'Outdoor Protection',
    productType: 'Insect Repellents',
    product: 'BugShield Natural',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 52686.84,
    quantity: 9305,
    grossMargin: 0.67150621,
    id: 185
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Outdoors Shop',
    productLine: 'Camping Equipment',
    productType: 'Cooking Gear',
    product: 'TrailChef Water Bag',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 33006.2,
    quantity: 8356,
    grossMargin: 0.46582278,
    id: 190
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Outdoors Shop',
    productLine: 'Camping Equipment',
    productType: 'Sleeping Bags',
    product: 'Hibernator Lite',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 54957.32,
    quantity: 649,
    grossMargin: 0.29145017,
    id: 195
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Outdoors Shop',
    productLine: 'Camping Equipment',
    productType: 'Lanterns',
    product: 'Firefly Mapreader',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 11992.2,
    quantity: 759,
    grossMargin: 0.52531646,
    id: 200
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Outdoors Shop',
    productLine: 'Mountaineering Equipment',
    productType: 'Safety',
    product: 'Granite Climbing Helmet',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 63230.04,
    quantity: 909,
    grossMargin: 0.24468085,
    id: 205
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Outdoors Shop',
    productLine: 'Mountaineering Equipment',
    productType: 'Climbing Accessories',
    product: 'Granite Belay',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 39216.8,
    quantity: 596,
    grossMargin: 0.47613982,
    id: 210
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Outdoors Shop',
    productLine: 'Mountaineering Equipment',
    productType: 'Climbing Accessories',
    product: 'Granite Chalk Bag',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 4692.24,
    quantity: 266,
    grossMargin: 0.51643991,
    id: 215
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Outdoors Shop',
    productLine: 'Mountaineering Equipment',
    productType: 'Tools',
    product: 'Granite Axe',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 30912,
    quantity: 805,
    grossMargin: 0.49166667,
    id: 220
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Outdoors Shop',
    productLine: 'Personal Accessories',
    productType: 'Watches',
    product: 'Infinity',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 18860,
    quantity: 84,
    grossMargin: 0.46155143,
    id: 225
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Outdoors Shop',
    productLine: 'Personal Accessories',
    productType: 'Watches',
    product: 'Kodiak',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 23066.5,
    quantity: 189,
    grossMargin: 0.45080008,
    id: 230
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Outdoors Shop',
    productLine: 'Personal Accessories',
    productType: 'Eyewear',
    product: 'Dante',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 32228.95,
    quantity: 751,
    grossMargin: 0.35601532,
    id: 235
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Outdoors Shop',
    productLine: 'Personal Accessories',
    productType: 'Eyewear',
    product: 'Hawk Eye',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 4293,
    quantity: 106,
    grossMargin: 0.39901235,
    id: 240
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Outdoors Shop',
    productLine: 'Personal Accessories',
    productType: 'Binoculars',
    product: 'Opera Vision',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 6160,
    quantity: 56,
    grossMargin: 0.544,
    id: 245
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Outdoors Shop',
    productLine: 'Personal Accessories',
    productType: 'Navigation',
    product: 'Trail Scout',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 5950,
    quantity: 25,
    grossMargin: 0.35798319,
    id: 250
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Eyewear Store',
    productLine: 'Personal Accessories',
    productType: 'Eyewear',
    product: 'Polar Sun',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 39812.66,
    quantity: 668,
    grossMargin: 0.56124007,
    availableStores: [
      {
        storeName: 'Barneys New York',
        website: 'https://www.barneys.com/'
      },
      {
        storeName: 'J. C. Penney',
        website: 'https://jcp.com/'
      },
      {
        storeName: 'Von Maur',
        website: 'http://www.vonmaur.com/'
      }
    ],
    id: 255
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Eyewear Store',
    productLine: 'Personal Accessories',
    productType: 'Binoculars',
    product: 'Seeker 35',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 29196.15,
    quantity: 295,
    grossMargin: 0.28069112,
    id: 260
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Sports Store',
    productLine: 'Camping Equipment',
    productType: 'Cooking Gear',
    product: 'TrailChef Single Flame',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 190288.32,
    quantity: 3032,
    grossMargin: 0.26099426,
    id: 265
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Sports Store',
    productLine: 'Camping Equipment',
    productType: 'Tents',
    product: 'Star Gazer 6',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 31278.8,
    quantity: 40,
    grossMargin: 0.3733775,
    availableStores: [
      {
        storeName: 'Barneys New York',
        website: 'https://www.barneys.com/'
      },
      {
        storeName: 'J. C. Penney',
        website: 'https://jcp.com/'
      },
      {
        storeName: 'Von Maur',
        website: 'http://www.vonmaur.com/'
      }
    ],
    id: 270
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Sports Store',
    productLine: 'Camping Equipment',
    productType: 'Packs',
    product: 'Canyon Mule Extreme Backpack',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 63634.83,
    quantity: 147,
    grossMargin: 0.4481739,
    id: 275
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Sports Store',
    productLine: 'Camping Equipment',
    productType: 'Lanterns',
    product: 'EverGlow Kerosene',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 9183.24,
    quantity: 297,
    grossMargin: 0.35316947,
    id: 280
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Sports Store',
    productLine: 'Personal Accessories',
    productType: 'Watches',
    product: 'Mountain Man Digital',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 2592.57,
    quantity: 89,
    grossMargin: 0.31342259,
    id: 285
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Sports Store',
    productLine: 'Personal Accessories',
    productType: 'Watches',
    product: 'Lux',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 8192.8,
    quantity: 49,
    grossMargin: 0.47703349,
    id: 290
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Sports Store',
    productLine: 'Personal Accessories',
    productType: 'Eyewear',
    product: 'Polar Sun',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 17360.42,
    quantity: 288,
    grossMargin: 0.56618561,
    id: 295
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Sports Store',
    productLine: 'Personal Accessories',
    productType: 'Eyewear',
    product: 'Dante',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 30631.5,
    quantity: 718,
    grossMargin: 0.35748755,
    id: 300
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Sports Store',
    productLine: 'Personal Accessories',
    productType: 'Knives',
    product: 'Edge Extreme',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 29252.6,
    quantity: 260,
    grossMargin: 0.28895209,
    id: 305
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Sports Store',
    productLine: 'Personal Accessories',
    productType: 'Binoculars',
    product: 'Seeker Mini',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 34745.76,
    quantity: 432,
    grossMargin: 0.50267313,
    availableStores: [
      {
        storeName: 'Barneys New York',
        website: 'https://www.barneys.com/'
      },
      {
        storeName: 'J. C. Penney',
        website: 'https://jcp.com/'
      },
      {
        storeName: 'Von Maur',
        website: 'http://www.vonmaur.com/'
      }
    ],
    id: 310
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Sports Store',
    productLine: 'Outdoor Protection',
    productType: 'Insect Repellents',
    product: 'BugShield Spray',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 5577.83,
    quantity: 947,
    grossMargin: 0.6893039,
    id: 315
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Sports Store',
    productLine: 'Golf Equipment',
    productType: 'Irons',
    product: 'Hailstorm Steel Irons',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 48967.42,
    quantity: 113,
    grossMargin: 0.49000785,
    id: 320
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Telephone',
    retailerType: 'Sports Store',
    productLine: 'Golf Equipment',
    productType: 'Putters',
    product: 'Blue Steel Max Putter',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 40579.81,
    quantity: 239,
    grossMargin: 0.45933212,
    availableStores: [
      {
        storeName: 'Barneys New York',
        website: 'https://www.barneys.com/'
      },
      {
        storeName: 'J. C. Penney',
        website: 'https://jcp.com/'
      },
      {
        storeName: 'Von Maur',
        website: 'http://www.vonmaur.com/'
      }
    ],
    id: 325
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Mail',
    retailerType: 'Department Store',
    productLine: 'Camping Equipment',
    productType: 'Cooking Gear',
    product: 'TrailChef Kettle',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 40133.73,
    quantity: 5061,
    grossMargin: 0.49684741,
    id: 330
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Mail',
    retailerType: 'Department Store',
    productLine: 'Camping Equipment',
    productType: 'Packs',
    product: 'Canyon Mule Journey Backpack',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 97262.19,
    quantity: 279,
    grossMargin: 0.38805542,
    id: 335
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Mail',
    retailerType: 'Department Store',
    productLine: 'Personal Accessories',
    productType: 'Watches',
    product: 'Mountain Man Analog',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 6068.48,
    quantity: 128,
    grossMargin: 0.36722211,
    availableStores: [
      {
        storeName: 'Barneys New York',
        website: 'https://www.barneys.com/'
      },
      {
        storeName: 'J. C. Penney',
        website: 'https://jcp.com/'
      },
      {
        storeName: 'Von Maur',
        website: 'http://www.vonmaur.com/'
      }
    ],
    id: 340
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Mail',
    retailerType: 'Department Store',
    productLine: 'Outdoor Protection',
    productType: 'First Aid',
    product: 'Aloe Relief',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 711.28,
    quantity: 136,
    grossMargin: 0.63288719,
    id: 345
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Mail',
    retailerType: 'Department Store',
    productLine: 'Golf Equipment',
    productType: 'Putters',
    product: 'Course Pro Putter',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 108158.25,
    quantity: 1497,
    grossMargin: 0.51695502,
    id: 350
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Mail',
    retailerType: 'Department Store',
    productLine: 'Golf Equipment',
    productType: 'Golf Accessories',
    product: 'Course Pro Gloves',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 5828.79,
    quantity: 561,
    grossMargin: 0.7680462,
    id: 355
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Mail',
    retailerType: 'Outdoors Shop',
    productLine: 'Camping Equipment',
    productType: 'Tents',
    product: 'Star Lite',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 157607.76,
    quantity: 453,
    grossMargin: 0.28144401,
    id: 360
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Mail',
    retailerType: 'Outdoors Shop',
    productLine: 'Mountaineering Equipment',
    productType: 'Rope',
    product: 'Husky Rope 60',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 29647.6,
    quantity: 166,
    grossMargin: 0.29165733,
    id: 365
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Mail',
    retailerType: 'Outdoors Shop',
    productLine: 'Mountaineering Equipment',
    productType: 'Climbing Accessories',
    product: 'Granite Pulley',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 16623.86,
    quantity: 451,
    grossMargin: 0.50217037,
    availableStores: [
      {
        storeName: 'Barneys New York',
        website: 'https://www.barneys.com/'
      },
      {
        storeName: 'J. C. Penney',
        website: 'https://jcp.com/'
      },
      {
        storeName: 'Von Maur',
        website: 'http://www.vonmaur.com/'
      }
    ],
    id: 370
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Mail',
    retailerType: 'Outdoors Shop',
    productLine: 'Mountaineering Equipment',
    productType: 'Tools',
    product: 'Granite Grip',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 21010.2,
    quantity: 1083,
    grossMargin: 0.49020619,
    id: 375
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Mail',
    retailerType: 'Outdoors Shop',
    productLine: 'Personal Accessories',
    productType: 'Eyewear',
    product: 'Polar Extreme',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 1993.18,
    quantity: 14,
    grossMargin: 0.4907635,
    id: 380
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Mail',
    retailerType: 'Outdoors Shop',
    productLine: 'Outdoor Protection',
    productType: 'Insect Repellents',
    product: 'BugShield Lotion Lite',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 3457.44,
    quantity: 504,
    grossMargin: 0.72594752,
    id: 385
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Mail',
    retailerType: 'Outdoors Shop',
    productLine: 'Outdoor Protection',
    productType: 'First Aid',
    product: 'Insect Bite Relief',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 756,
    quantity: 126,
    grossMargin: 0.54,
    id: 390
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Mail',
    retailerType: 'Eyewear Store',
    productLine: 'Personal Accessories',
    productType: 'Eyewear',
    product: 'Polar Wave',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 1243.06,
    quantity: 13,
    grossMargin: 0.56996444,
    id: 395
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Golf Shop',
    productLine: 'Personal Accessories',
    productType: 'Watches',
    product: 'Sam',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 7543.2,
    quantity: 168,
    grossMargin: 0.38841871,
    id: 400
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Golf Shop',
    productLine: 'Personal Accessories',
    productType: 'Eyewear',
    product: 'Capri',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 26120.6,
    quantity: 682,
    grossMargin: 0.34139568,
    id: 405
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Golf Shop',
    productLine: 'Personal Accessories',
    productType: 'Eyewear',
    product: 'Maximus',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 45915,
    quantity: 570,
    grossMargin: 0.49786715,
    id: 410
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Golf Shop',
    productLine: 'Personal Accessories',
    productType: 'Knives',
    product: 'Pocket Gizmo',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 16811.6,
    quantity: 1378,
    grossMargin: 0.59992148,
    id: 415
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Golf Shop',
    productLine: 'Golf Equipment',
    productType: 'Irons',
    product: 'Hailstorm Titanium Irons',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 198130.14,
    quantity: 227,
    grossMargin: 0.43751289,
    id: 420
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Golf Shop',
    productLine: 'Golf Equipment',
    productType: 'Woods',
    product: 'Lady Hailstorm Titanium Woods Set',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 131648.42,
    quantity: 103,
    grossMargin: 0.48311609,
    id: 425
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Golf Shop',
    productLine: 'Golf Equipment',
    productType: 'Golf Accessories',
    product: 'Course Pro Umbrella',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 24046.22,
    quantity: 1945,
    grossMargin: 0.51468464,
    id: 430
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Department Store',
    productLine: 'Camping Equipment',
    productType: 'Cooking Gear',
    product: 'TrailChef Single Flame',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 44685.12,
    quantity: 712,
    grossMargin: 0.26099426,
    id: 435
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Department Store',
    productLine: 'Camping Equipment',
    productType: 'Sleeping Bags',
    product: 'Hibernator Camp Cot',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 30936.15,
    quantity: 315,
    grossMargin: 0.33560737,
    id: 440
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Department Store',
    productLine: 'Camping Equipment',
    productType: 'Lanterns',
    product: 'Firefly 2',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 29098.8,
    quantity: 1096,
    grossMargin: 0.37212806,
    id: 445
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Department Store',
    productLine: 'Personal Accessories',
    productType: 'Watches',
    product: 'Mountain Man Analog',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 7301.14,
    quantity: 154,
    grossMargin: 0.36722211,
    id: 450
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Department Store',
    productLine: 'Personal Accessories',
    productType: 'Watches',
    product: 'Lux',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 7858.4,
    quantity: 47,
    grossMargin: 0.47882775,
    id: 455
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Department Store',
    productLine: 'Personal Accessories',
    productType: 'Eyewear',
    product: 'Polar Sun',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 7849.02,
    quantity: 129,
    grossMargin: 0.57022023,
    id: 460
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Department Store',
    productLine: 'Personal Accessories',
    productType: 'Eyewear',
    product: 'Dante',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 193513.9,
    quantity: 4478,
    grossMargin: 0.35317732,
    id: 465
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Department Store',
    productLine: 'Personal Accessories',
    productType: 'Eyewear',
    product: 'Zone',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 167460.5,
    quantity: 5420,
    grossMargin: 0.32884101,
    id: 470
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Department Store',
    productLine: 'Personal Accessories',
    productType: 'Binoculars',
    product: 'Opera Vision',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 14630,
    quantity: 133,
    grossMargin: 0.544,
    id: 475
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Department Store',
    productLine: 'Personal Accessories',
    productType: 'Navigation',
    product: 'Trail Scout',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 44744,
    quantity: 188,
    grossMargin: 0.35573105,
    id: 480
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Department Store',
    productLine: 'Outdoor Protection',
    productType: 'Sunscreen',
    product: 'Sun Shelter 15',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 7516.8,
    quantity: 1566,
    grossMargin: 0.62708333,
    id: 485
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Department Store',
    productLine: 'Golf Equipment',
    productType: 'Irons',
    product: 'Hailstorm Steel Irons',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 30767.14,
    quantity: 83,
    grossMargin: 0.40381199,
    id: 490
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Department Store',
    productLine: 'Golf Equipment',
    productType: 'Woods',
    product: 'Hailstorm Steel Woods Set',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 56264.64,
    quantity: 83,
    grossMargin: 0.49608138,
    id: 495
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Department Store',
    productLine: 'Golf Equipment',
    productType: 'Putters',
    product: 'Blue Steel Max Putter',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 89139.75,
    quantity: 525,
    grossMargin: 0.45933212,
    id: 500
  },
  {
    retailerCountry: 'United States',
    orderMethodType: 'Web',
    retailerType: 'Direct Marketing',
    productLine: 'Camping Equipment',
    productType: 'Cooking Gear',
    product: 'TrailChef Deluxe Cook Set',
    year: 2012,
    quarter: 'Q1 2012',
    revenue: 52068.38,
    quantity: 427,
    grossMargin: 0.34754797,
    id: 505
  }
];

export default data;
