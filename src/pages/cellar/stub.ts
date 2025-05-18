// Producer data
export const producers = [
  {
    coordinates: [41.5912, 1.6767], // Dummy coordinates for Catalonia
    id: "cellar-comalats",
    location: "Catalonia, Spain",
    name: "Cellar Comalats",
    wineCount: 1,
  },
  {
    coordinates: [46.0748, 11.1217], // Dummy coordinates for Trentino
    id: "cantina-furlani",
    location: "Trentino, Italy",
    name: "Cantina Furlani",
    wineCount: 1,
  },
  {
    coordinates: [41.3851, -4.2934], // Dummy coordinates for Castilla y León
    id: "alfredo-maestro",
    location: "Castilla y León, Spain",
    name: "Alfredo Maestro",
    wineCount: 1,
  },
  {
    coordinates: [43.5283, 5.4474], // Dummy coordinates for Provence
    id: "domaine-sulauze",
    location: "Provence, France",
    name: "Domaine Sulauze",
    wineCount: 1,
  },
  {
    coordinates: [47.2601, 0.0762], // Dummy coordinates for Loire Valley
    id: "domaine-bobinet",
    location: "Loire Valley, France",
    name: "Domaine Bobinet",
    wineCount: 1,
  },
  {
    coordinates: [47.4136, 0.9841], // Dummy coordinates for Loire Valley (different point)
    id: "frantz-saumon",
    location: "Loire Valley, France",
    name: "Frantz Saumon",
    wineCount: 1,
  },
  {
    coordinates: [41.1579, -7.7811], // Dummy coordinates for Douro Valley
    id: "quinta-da-boavista",
    location: "Douro Valley, Portugal",
    name: "Quinta da Boavista",
    wineCount: 1,
  },
];

// Wine data
const wines = [
  {
    hue: "bg-rose-900",
    id: "alosa",
    name: "Alosa",
    producerId: "cellar-comalats",
    vintages: [
      {
        cepage: "Garnatxa Negra",
        dateTried: "04-09-2025",
        tastingNotes:
          "An interesting one. The entire thing, fleeting. Smelled of tart blackberry, plum. The taste, sour, slightly acidic, not really sweet at all, tannic. But then, an aftertaste of cured olive, unctuous, briny, but pleasant, still, not at all overpowering. A utilitarian wine, perfect for a meal, for conversation, for drinking on the side of something, complementing and highlighting, but not a star in its own right.",
        vintage: "2023",
      },
    ],
  },
  {
    hue: "bg-rose-900",
    id: "avanti-popolo",
    name: "Avanti Popolo",
    producerId: "cantina-furlani",
    vintages: [
      {
        cepage:
          "50% Grenache, 12% Merlot, 14% Syrah, 12% Cabernet Sauvignon, 12% Alicante",
        dateTried: "03-08-2025",
        tastingNotes:
          "Puckering! So acidic, sour, but really, really enjoyable. Incredibly light. Zaps your tongue so hard that it feels big and bold, but then lightens, dissipating faster than it came. Almost tricks you into thinking it's effervescent. A distinctly fruity taste behind the initial hit of sour, syrupy almost, but hollowed out. Not tannic at all, barely any residual mouth feel.",
        vintage: "2023",
      },
    ],
  },
  {
    hue: "bg-rose-900",
    id: "el-marciano",
    name: "El Marciano",
    producerId: "alfredo-maestro",
    vintages: [
      {
        cepage: "Garnacha",
        dateTried: "02-21-2025",
        tastingNotes:
          "Densely juicy and sweet, though still mellow, not so strong that you felt obliged to sip. An informal wine ideal for a barbecue with friends. Coming from vineyards in the Sierra de Gredos mountain range, this wine showcases the characteristics of Garnacha grown in high altitude.",
        vintage: "2023",
      },
    ],
  },
  {
    hue: "bg-rose-700",
    id: "bel-soula",
    name: "Bel Soula",
    producerId: "domaine-sulauze",
    vintages: [
      {
        cepage: "Grenache, Syrah",
        dateTried: "01-17-2025",
        tastingNotes:
          "Medium-bodied with bright red fruit flavors. Notes of cherry and raspberry with a hint of spice. Smooth tannins and a balanced acidity make this an approachable and enjoyable wine. Pairs well with grilled meats and Mediterranean dishes.",
        vintage: "2022",
      },
      {
        cepage: "Grenache, Syrah",
        dateTried: "11-30-2024",
        tastingNotes:
          "Similar profile to the 2022 vintage but with more pronounced earthy notes. The fruit is slightly more subdued, giving way to herbal and mineral characteristics. The finish is longer with a pleasant peppery quality.",
        vintage: "2021",
      },
    ],
  },
  {
    hue: "bg-yellow-200",
    id: "pur-breton",
    name: "Pur Breton",
    producerId: "domaine-bobinet",
    vintages: [
      {
        cepage: "Cabernet Franc",
        dateTried: "12-14-2024",
        tastingNotes:
          "A classic expression of Loire Valley Cabernet Franc. Fresh and vibrant with notes of red berries, green bell pepper, and a distinctive graphite minerality. The tannins are fine and the acidity is refreshing. A wine that truly expresses its terroir.",
        vintage: "2022",
      },
    ],
  },
  {
    hue: "bg-rose-300",
    id: "vin-de-frantz",
    name: "Vin de Frantz",
    producerId: "frantz-saumon",
    vintages: [
      {
        cepage: "Chenin Blanc",
        dateTried: "11-15-2024",
        tastingNotes:
          "A beautiful natural wine with expressive aromatics. Notes of ripe apple, quince, and honey are balanced by a vibrant acidity. The palate is textured with a slight oxidative character that adds complexity. The finish is long and mineral-driven.",
        vintage: "2023",
      },
      {
        cepage: "Chenin Blanc",
        dateTried: "09-20-2024",
        tastingNotes:
          "Compared to the 2023, this vintage shows more citrus and floral notes. The acidity is higher, giving the wine a more linear and focused profile. There's a pleasant salinity on the finish that makes it particularly food-friendly.",
        vintage: "2022",
      },
    ],
  },
  {
    hue: "bg-rose-900",
    id: "vinhota",
    name: "Vinhota",
    producerId: "quinta-da-boavista",
    vintages: [
      {
        cepage: "Touriga Nacional, Tinta Roriz",
        dateTried: "10-22-2024",
        tastingNotes:
          "A robust Portuguese red with intense dark fruit flavors. Blackberry, plum, and fig are complemented by notes of chocolate and spice. The tannins are firm but ripe, providing structure without astringency. A full-bodied wine with a long, warming finish.",
        vintage: "2022",
      },
      {
        cepage: "Touriga Nacional, Tinta Roriz",
        dateTried: "12-05-2023",
        tastingNotes:
          "With additional bottle age, this vintage has developed more complexity. The fruit has mellowed slightly, allowing secondary notes of leather, tobacco, and dried herbs to emerge. The tannins have softened, resulting in a more integrated and harmonious wine.",
        vintage: "2020",
      },
    ],
  },
];

// Helper function to get producer name by ID
export const getProducerById = (id: string) => {
  return producers.find((producer) => producer.id === id);
};

// Helper function to get wines by producer ID
export const getWinesByProducerId = (id: string) => {
  return wines.filter((wine) => wine.producerId === id);
};

// Default export for backward compatibility
export default wines;
