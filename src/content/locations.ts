export interface LocationImage {
  src: string
  alt: string
  caption: string
}

export interface Location {
  id: string
  name: string
  shortLabel: string
  lat: number
  lng: number
  blurb: string
  todo?: string
  image?: LocationImage
}

// Map of places connected to Whitman's New York and to the ferry archive. Not every
// place here is directly tied to an archive voice in src/content/voices.ts — some are
// included for the broader biographical and historical picture. Selecting a place on
// the live map lists whichever archive voices (if any) are connected to it.
export const locations: Location[] = [
  {
    id: 'fulton-ferry-landing',
    name: 'Fulton Ferry Landing',
    shortLabel: 'Brooklyn side',
    lat: 40.7031,
    lng: -73.9939,
    blurb:
      'The Brooklyn terminus of the crossing Whitman describes, and the site both the nineteenth-century ferry and the twenty-first-century NYC Ferry stop occupy.',
    image: {
      src: '/images/fulton-ferry-boat-1890.jpg',
      alt: 'Sepia cabinet-card photograph of the Fulton ferry boat crossing the East River in 1890, passengers visible along the deck rail, sailing ships and the Brooklyn shoreline behind it.',
      caption: 'The Fulton ferry boat, 1890. Library of Congress. Public domain.',
    },
  },
  {
    id: 'manhattan-ferry-slips',
    name: "South Street Seaport / Printer's Row",
    shortLabel: 'Manhattan side',
    lat: 40.7075,
    lng: -74.0021,
    blurb:
      'The former Fulton and Beekman ferry slips on the Manhattan shore, in the South Street print district where Whitman worked as a printer\'s apprentice, journalist, and editor.',
    image: {
      src: '/images/south-street-seaport-c1900.jpg',
      alt: 'Sepia-toned photograph of tall-masted sailing ships docked along South Street, with the Brooklyn Bridge visible in the distance.',
      caption: 'South Street and the Brooklyn Bridge, c. 1899–1924. Detroit Photographic Company, Beinecke Library, Yale. Public domain.',
    },
  },
  {
    id: 'brooklyn-bridge',
    name: 'Brooklyn Bridge',
    shortLabel: 'Opened 1883',
    lat: 40.7061,
    lng: -73.9969,
    blurb:
      "The bridge whose 1883 opening began the ferry's long decline, offering a free, weatherproof alternative to the boat crossing.",
    image: {
      src: '/images/brooklyn-bridge-1883.jpg',
      alt: 'Period engraving of pedestrians, horse-drawn carts, an elevated cable car, and a steam train all crossing the Brooklyn Bridge on its separate tiers, with the Manhattan skyline and harbor behind.',
      caption: 'The Brooklyn Bridge shortly after opening, 1883. Getty Images.',
    },
  },
  {
    id: 'brooklyn-heights-promenade',
    name: 'Brooklyn Heights Promenade',
    shortLabel: "The ferry's absence, at a remove",
    lat: 40.6975,
    lng: -73.9968,
    blurb:
      "Overlooking the water during the twentieth-century decades without ferry service — the vantage from which Truman Capote's Brooklyn Heights memoir is written.",
    image: {
      src: '/images/brooklyn-heights-promenade.jpg',
      alt: 'View north along the Brooklyn Heights Promenade, a railed walkway with benches beside trees, overlooking the Lower Manhattan skyline and the East River.',
      caption: 'The Brooklyn Heights Promenade, 2017. Photo by Acroterion, Wikimedia Commons (CC BY-SA 4.0).',
    },
  },
  {
    id: 'brooklyn-heights-henry-cranberry',
    name: 'Brooklyn Heights — Henry & Cranberry Streets',
    shortLabel: "Whitman's Heights addresses",
    lat: 40.7026,
    lng: -73.9938,
    blurb:
      "Young Whitman boarded with his family on Henry, Liberty, and Fulton streets here while apprenticed to a Fulton Street print shop in the early 1830s. Two decades later, at the Rome Brothers' shop near Fulton and Cranberry, he hand-set the type for the first edition of Leaves of Grass (1855) himself.",
    todo: 'Exact street numbers for the boarding addresses were not given in the cited source; the print-shop corner (Fulton and Cranberry) is well documented but the pin is an approximate placement. The Rome Brothers building itself was demolished in 1964 for the Cadman Plaza redevelopment, so no photograph of the shop is used here.',
    image: {
      src: '/images/whitman-1854-engraving.jpg',
      alt: 'Steel engraving portrait of a young Walt Whitman in an open-collared shirt, one hand on his hip, gazing at the viewer.',
      caption: 'Walt Whitman, 1854 — the frontispiece he chose for the first edition of Leaves of Grass, hand-set at the Rome Brothers’ shop on this corner in 1855. Engraving by Samuel Hollyer after a lost daguerreotype by Gabriel Harrison. Morgan Library & Museum. Public domain.',
    },
  },
  {
    id: 'ryerson-street',
    name: '99 Ryerson Street',
    shortLabel: 'Home and identity',
    lat: 40.6935,
    lng: -73.9629,
    blurb:
      "Whitman's family lived here from May 1855 to May 1856 while he completed and published the first edition of Leaves of Grass — the only one of his many New York residences still standing today.",
    image: {
      src: '/images/ryerson-street-99.jpg',
      alt: 'A three-story wood-frame row house with pale yellow siding at 99 Ryerson Street, Brooklyn, flanked by neighboring row houses, photographed on a clear day.',
      caption: '99 Ryerson Street, 2023. Photo by Jim.henderson, Wikimedia Commons (CC BY-SA 4.0).',
    },
  },
  {
    id: 'fort-greene-park',
    name: 'Fort Greene Park',
    shortLabel: 'Continuity and public life',
    lat: 40.6902,
    lng: -73.9739,
    blurb:
      "Brooklyn's oldest park. As editor of the Brooklyn Daily Eagle, Whitman used his 1840s editorials to advocate for public park space in the growing city.",
    todo: "Precise scope of Whitman's personal role in the park's creation, versus other civic figures involved.",
    image: {
      src: '/images/fort-greene-park.jpg',
      alt: "Neoclassical stone visitors' center building in Fort Greene Park, with columns and a sign reading \"Fort Greene Park,\" photographed on a sunny day with two people walking past.",
      caption: 'Fort Greene Park visitors’ center, 2009. Photo by Jim.henderson, Wikimedia Commons (public domain, CC0).',
    },
  },
  {
    id: 'pfaffs-cellar',
    name: "Pfaff's Cellar",
    shortLabel: 'Encounter and chosen community',
    lat: 40.7266,
    lng: -73.9936,
    blurb:
      "A Broadway beer cellar near Bleecker Street that served as informal headquarters for New York's bohemian artists and writers in the late 1850s and early 1860s; Whitman was a regular presence in this circle.",
    todo: 'Specific documented visits and named companions.',
    image: {
      src: '/images/pfaffs-cellar-1857.jpg',
      alt: "Black-and-white illustration of a crowded, low-ceilinged beer cellar; a bearded man seated at a table (Walt Whitman) shakes hands with a man standing over him, other patrons drinking and talking in the background.",
      caption: 'Walt Whitman at Pfaff’s. Harper’s Magazine, republished from a Library of Congress collection. Public domain.',
    },
  },
]

export function getLocation(id: string): Location {
  const found = locations.find((l) => l.id === id)
  if (!found) throw new Error(`Unknown location id: ${id}`)
  return found
}
