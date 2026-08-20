export type Era = 'nineteenth' | 'twentieth' | 'twenty-first'

export type VoiceType =
  | 'poem'
  | 'diary'
  | 'memoir'
  | 'oral-history'
  | 'review'
  | 'forum'
  | 'photo'
  | 'video'
  | 'fieldwork'
  | 'journalism'

export type RightsStatus =
  | 'public-domain'
  | 'permission-needed'
  | 'brief-quotation'
  | 'link-only'
  | 'student-owned'
  | 'unknown'

export interface ArchiveEntry {
  id: string
  era: Era
  dateDisplay: string
  dateSort?: string
  person: string
  title: string
  voiceType: VoiceType
  location: string
  summary: string
  excerpt?: string
  excerptVerified: boolean
  motifs: string[]
  mundaneGlamorous: 'mundane' | 'glamorous' | 'both'
  whitmanConnection: string
  sourceTitle: string
  sourceUrl: string
  retrievalDate?: string
  rightsStatus: RightsStatus
  mediaUrl?: string
  mediaAlt?: string
  mediaWidth?: number
  mediaHeight?: number
  notes?: string
}

// Every entry below was checked against its cited source before inclusion. Candidate
// leads from the project brief that could NOT be independently verified in this pass —
// the Jervis McEntee diary (blocked by the host's bot protection), the specific
// TripAdvisor and Reddit threads (blocked / not reachable), the DUMBO BID video, and
// Google Maps reviews — are intentionally NOT rendered as cards here. They remain
// documented as open research leads in the README rather than turned into invented
// quotations.
export const voices: ArchiveEntry[] = [
  // --- Era I: The Everyday Crossing, 1850s–1890s ---
  {
    id: 'bulkeley-diary-1857',
    era: 'nineteenth',
    dateDisplay: 'September 9, 1857',
    dateSort: '1857-09-09',
    person: 'Robert Bulkeley',
    title: 'Travel diary',
    voiceType: 'diary',
    location: 'fulton-ferry-landing',
    summary:
      'An eighteen-year-old Brooklyn clerk wakes before dawn, walks to Fulton Ferry with a heavy valise, and crosses in fog that clears mid-river.',
    excerpt:
      '[I] left the house, at a quarter of five (a.m.) with valise (very heavy) in hand, and walked to the Fulton Ferry. It was quite dark, more so, on account of being somewhat foggy, but it cleared up, while crossing the River, with promises of a fine day.',
    excerptVerified: true,
    motifs: ['sunset-fog-light', 'fatigue-inconvenience', 'work-commuting'],
    mundaneGlamorous: 'both',
    whitmanConnection:
      'An ordinary early commute. I would like to imagine that Robert probably crossed path with Whitman on the ferry, he might have been one of the "Crowds of men and women attired in the usual costumes, how curious you are to me! On the ferry-boats the hundreds and hundreds that cross, returning home, are more curious to me than you suppose,"',
    sourceTitle: '1857 Diary of Robert Bulkeley (transcription by Ann Bradshaw)',
    sourceUrl: 'https://www.joycetice.com/diaries/1857bulk.htm',
    retrievalDate: '2026-08-19',
    rightsStatus: 'brief-quotation',
  },
  {
    id: 'gunn-diary-1851',
    era: 'nineteenth',
    dateDisplay: 'September 29-30, 1851',
    dateSort: '1851-09-29',
    person: 'Thomas Butler Gunn',
    title: 'Diary, volume 2',
    voiceType: 'diary',
    location: 'fulton-ferry-landing',
    summary:
      'Writer and illustrator Thomas Butler Gunn crosses to Brooklyn and unexpectedly meets an acquaintance on the boat, then crosses back to New York the next morning.',
    excerpt:
      '...then, Joe bearing me company to the Fulton Ferry, I crossed to Brooklyn. Met [William] Roberts on the Ferry-boat, he would that I should go home with him and have a cigar... [Tuesday, September 30] Crossed to New York...',
    excerptVerified: true,
    motifs: ['chance-encounters', 'crowds-strangers'],
    mundaneGlamorous: 'mundane',
    whitmanConnection:
      'Not just a public transport, the ferry also acts as social threshold -- an errand becomes a chance to meet with your friend, a talk, a conversation. Whitman, too, recounted having these encounters: "I too lived, Brooklyn of ample hills was mine, I too walk\'d the streets of Manhattan island, and bathed in the waters around it, I too felt the curious abrupt questionings stir within me, In the day among crowds of people sometimes they came upon me, In my walks home late at night or as I lay in my bed they came upon me,"',
    sourceTitle: 'Thomas Butler Gunn Diaries, Missouri History Museum',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Thomas_Butler_Gunn_Diaries-_Volume_2,_page_191,_September_29-30,_1851.jpg',
    rightsStatus: 'public-domain',
  },
  {
    id: 'loc-ferry-photo-1890',
    era: 'nineteenth',
    dateDisplay: 'July 1890',
    dateSort: '1890-07',
    person: 'Unidentified photographer',
    title: 'The Fulton ferry boat, [Brooklyn, N.Y.]',
    voiceType: 'photo',
    location: 'fulton-ferry-landing',
    summary:
      'A cabinet-card photograph of the Fulton ferry boat under way, passengers visible along the rail. Decades after Whitman first published his poem, the crossing was still an unremarkable daily necessity.',
    excerptVerified: false,
    motifs: ['water-tide', 'crowds-strangers'],
    mundaneGlamorous: 'mundane',
    whitmanConnection: '',
    sourceTitle: 'Library of Congress',
    sourceUrl: 'https://www.loc.gov/item/97505116/',
    rightsStatus: 'public-domain',
    mediaUrl: '/images/fulton-ferry-boat-1890.jpg',
    mediaAlt: 'Sepia cabinet-card photograph of the Fulton ferry boat crossing the East River in 1890, passengers visible along the deck rail, sailing ships and the Brooklyn shoreline behind it.',
    mediaWidth: 1024,
    mediaHeight: 672,
  },
  {
    id: 'jacobs-incidents-1861',
    era: 'nineteenth',
    dateDisplay: 'c. 1842 (published 1861)',
    dateSort: '1842',
    person: 'Harriet Jacobs',
    title: 'Incidents in the Life of a Slave Girl',
    voiceType: 'memoir',
    location: 'fulton-ferry-landing',
    summary:
      'Having just escaped slavery and reached New York, Jacobs crosses Fulton Ferry into Brooklyn and, minutes later on the street, is unexpectedly reunited with her daughter Ellen.',
    excerpt:
      "We crossed Fulton ferry, went up Myrtle Avenue, and stopped at the house he designated... I turned, and there stood my Ellen! I pressed her to my heart, then held her away from me to take a look at her.",
    excerptVerified: true,
    motifs: ['homecoming-departure', 'crowds-strangers'],
    mundaneGlamorous: 'both',
    whitmanConnection:
      'Here, the ferry reunited people with their loved ones: "Felt their arms on my neck as I stood, or the negligent leaning of their flesh against me as I sat, Saw many I loved in the street or ferry-boat or public assembly, yet never told them a word,"',
    sourceTitle: 'Incidents in the Life of a Slave Girl, Written by Herself (1861), ch. XXXII, "The Meeting of Mother and Daughter"',
    sourceUrl: 'https://docsouth.unc.edu/fpn/jacobs/jacobs.html',
    retrievalDate: '2026-08-19',
    rightsStatus: 'public-domain',
  },
  {
    id: 'hanna-withered-leaves-1857',
    era: 'nineteenth',
    dateDisplay: '1857',
    dateSort: '1857',
    person: 'Abigail Stanley Hanna',
    title: "Withered Leaves from Memory's Garland",
    voiceType: 'memoir',
    location: 'fulton-ferry-landing',
    summary:
      'After a meditation on mortality at Green-Wood Cemetery, Hanna crosses Fulton Ferry at dusk and finds the water itself seeming to mourn and glitter at once.',
    excerpt:
      'As we crossed Fulton ferry at Brooklyn, the waters spoke in low, dirge like voices of the same Almighty hand, and their waves were tossed into gentle motion by the passing breeze, and seemed to reflect myriads of diamonds upon its sparkling bosom, as it lay spread out before the eye of the beholder.',
    excerptVerified: true,
    motifs: ['water-tide', 'sunset-fog-light'],
    mundaneGlamorous: 'glamorous',
    whitmanConnection:
      "Here, a passenger's moment of reflection on the water's beauty and mortality echoes Whitman's own attention to the scenery of the ride: \"I too many and many a time cross'd the river of old, Watched the Twelfth-month sea-gulls, saw them high in the air floating with motionless wings, oscillating their bodies, Saw how the glistening yellow lit up parts of their bodies and left the rest in strong shadow, Saw the slow-wheeling circles and the gradual edging toward the south, Saw the reflection of the summer sky in the water, Had my eyes dazzled by the shimmering track of beams, Look'd at the fine centrifugal spokes of light round the shape of my head in the sunlit water,\"",
    sourceTitle: "Withered Leaves from Memory's Garland (1857)",
    sourceUrl: 'https://www.gutenberg.org/cache/epub/11599/pg11599-images.html',
    retrievalDate: '2026-08-19',
    rightsStatus: 'public-domain',
  },
  {
    id: 'whitman-brooklyniana-17',
    era: 'nineteenth',
    dateDisplay: 'April 5, 1862',
    dateSort: '1862-04-05',
    person: 'Walt Whitman',
    title: 'Brooklyniana, No. 17',
    voiceType: 'journalism',
    location: 'fulton-ferry-landing',
    summary:
      "Six years after publishing the poem, Whitman's own local-history column for the Brooklyn Standard recalls that only three ferries operated around Brooklyn thirty years earlier -- including the \"Old Ferry\" that became Fulton Ferry.",
    excerpt:
      'Around the ferries, thirty years ago, the scene presented was of course a very different one, from now. There were only three, the Old Ferry, (the present Fulton,) the New Ferry, (at the foot of Main street,) and the remaining one at the foot of Jackson street, (now Hudson avenue.)',
    excerptVerified: true,
    motifs: ['water-tide', 'absence-return'],
    mundaneGlamorous: 'mundane',
    whitmanConnection:
      "An archive of Whitman himself, in prose, recording how much the ferry landscape had already changed within his own lifetime.",
    sourceTitle: 'Brooklyniana, No. 17 — The Walt Whitman Archive',
    sourceUrl: 'https://whitmanarchive.org/item/per.00233',
    retrievalDate: '2026-08-19',
    rightsStatus: 'public-domain'
  },

  // --- Era II: Displacement, 1924-2000 ---
  {
    id: 'kazin-walker-in-city-1951',
    era: 'twentieth',
    dateDisplay: '1920s-1930s (published 1951)',
    dateSort: '1925',
    person: 'Alfred Kazin',
    title: 'A Walker in the City',
    voiceType: 'memoir',
    location: 'brooklyn-bridge',
    summary:
      "Growing up in a Russian-Jewish immigrant family in Brownsville, Kazin recalls walking across the Brooklyn Bridge as both an escape from his neighborhood and an entry into the literary history of New York -- including the exact Fulton and Cranberry Streets corner where Whitman had set the type for Leaves of Grass by hand.",
    excerpt:
      "I could never walk across Roebling's bridge, or pass the hotel on University Place named Albert, in Ryder's honor, or stop in front of the garbage cans at Fulton and Cranberry Streets in Brooklyn at the place where Whitman had himself printed Leaves of Grass, without thinking that I had at last opened the great trunk of forgotten time in New York in which I, too, I thought, would someday find the source of my unrest.",
    excerptVerified: true,
    motifs: ['homecoming-departure', 'absence-return'],
    mundaneGlamorous: 'both',
    whitmanConnection:
      "",
    sourceTitle: 'Alfred Kazin, A Walker in the City (1951)',
    sourceUrl: 'https://books.google.com/books?id=6rvxtET-Xq4C&pg=PA172',
    retrievalDate: '2026-08-20',
    rightsStatus: 'brief-quotation',
  },
  {
    id: 'cudahy-me-and-the-bmt',
    era: 'twentieth',
    dateDisplay: 'c. 1940s-1950s',
    dateSort: '1945',
    person: 'Brian J. Cudahy',
    title: 'Me and the BMT, A Memoir',
    voiceType: 'memoir',
    location: 'brooklyn-bridge',
    summary:
      'A transportation historian recalls walking across the Brooklyn Bridge with his father sometime in the 1940s or 1950s, elevated trains still rumbling on the tracks beneath the pedestrian promenade.',
    excerpt: 'My father and I once walked across the Brooklyn Bridge as el trains rumbled underneath.',
    excerptVerified: true,
    motifs: ['homecoming-departure', 'crowds-strangers'],
    mundaneGlamorous: 'both',
    whitmanConnection:
      "Whitman's ferry passengers have been reborn as bridge pedestrians and train riders; the father-son walk adds another form of generational continuity to the same crossing.",
    sourceTitle: 'Brian J. Cudahy, "Me and the BMT, A Memoir"',
    sourceUrl: 'https://www.nycsubway.org/wiki/Me_and_the_BMT,_A_Memoir',
    retrievalDate: '2026-08-20',
    rightsStatus: 'brief-quotation',
    notes:
      "Cudahy places this memory within his 1943-1959 BMT period but does not give the exact year of this particular walk.",
  },
  {
    id: 'hagan-white-strike-1980',
    era: 'twentieth',
    dateDisplay: 'April 1980',
    dateSort: '1980-04',
    person: 'Patti Hagan and Wallace White',
    title: '"Strike" (The Talk of the Town)',
    voiceType: 'journalism',
    location: 'brooklyn-bridge',
    summary:
      'During the 1980 transit strike, two New Yorker writers join the crowd walking from Brooklyn Heights across the Brooklyn Bridge into Manhattan -- Wall Street commuters with briefcases, teenagers with tape decks, runners, cyclists, and women in stiletto heels all on the boardwalk together.',
    excerpt:
      'We joined in the pedestrian rush at the Brooklyn Heights end of the Brooklyn Bridge, to walk over the river to Manhattan.',
    excerptVerified: true,
    motifs: ['crowds-strangers', 'work-commuting'],
    mundaneGlamorous: 'both',
    whitmanConnection:
      "The strongest 20th century echo of the crowd in \"Crossing Brooklyn Ferry\" with social classes, occupations, and fashions temporarily gathered into one shared passage. The ferry is temporarily gone, but Whitman's \"men and women\" still cross together.",
    sourceTitle: 'Patti Hagan and Wallace White, "Strike," The New Yorker',
    sourceUrl: 'https://www.newyorker.com/magazine/1980/04/14/strike-6',
    retrievalDate: '2026-08-20',
    rightsStatus: 'brief-quotation',
  },

  // --- Era III: Return — Commuter and Spectacle, 2000s–Present ---
  {
    id: 'heymont-ferry-day',
    era: 'twenty-first',
    dateDisplay: 'September 20, 2025',
    dateSort: '2025-09-20',
    person: 'Paul Heymont',
    title: 'A Ferry Day on the East River, New York',
    voiceType: 'memoir',
    location: 'manhattan-ferry-slips',
    summary:
      'A travel writer rides the current NYC Ferry system to rediscover the city from the water, recalling ferries from his own childhood along the way.',
    excerpt: 'The best part of every trip is realizing that it has upset your expectations.',
    excerptVerified: true,
    motifs: ['skyline-spectacle', 'absence-return'],
    mundaneGlamorous: 'glamorous',
    whitmanConnection: "",
    sourceTitle: 'TravelGumbo',
    sourceUrl: 'https://www.travelgumbo.com/a-ferry-day-on-the-east-river-new-york/',
    retrievalDate: '2026-08-19',
    rightsStatus: 'brief-quotation',
    mediaUrl: '/images/heymont-ferry-day-2025.jpg',
    mediaAlt: 'An NYC Ferry catamaran crossing the water with the Lower Manhattan skyline and another ferry visible behind it, photographed from a pier.',
    mediaWidth: 1024,
    mediaHeight: 771,
  },
  {
    id: 'white-school-ferry-2019',
    era: 'twenty-first',
    dateDisplay: 'May 15, 2019',
    dateSort: '2019-05-15',
    person: 'Jared White',
    title: 'News interview on NYC Ferry expansion',
    voiceType: 'journalism',
    location: 'fulton-ferry-landing',
    summary:
      'A Brooklyn father describes riding the East River ferry with his children each morning from their DUMBO home to school in Lower Manhattan.',
    excerpt: 'I love it as an option versus the subway just as far as getting this really wonderful experience.',
    excerptVerified: true,
    motifs: ['work-commuting', 'crowds-strangers'],
    mundaneGlamorous: 'both',
    whitmanConnection:
      "Whitman watched generations of strangers crossing toward their daily responsibilities. White and his children repeat that movement, but the nineteenth-century working ferry has become a twenty-first-century school commute.",
    sourceTitle: '"NYC Ferry service set to expand," FOX 5 New York',
    sourceUrl: 'https://www.fox5ny.com/news/nyc-ferry-service-set-to-expand',
    retrievalDate: '2026-08-19',
    rightsStatus: 'brief-quotation',
    mediaUrl: '/images/fox5-nyc-ferry-2019.jpg',
    mediaAlt: 'An NYC Ferry boat named "Urban Journey" passing under the Brooklyn Bridge, with the Lower Manhattan skyline behind it.',
    mediaWidth: 1200,
    mediaHeight: 630,
},
  {
    id: 'faithfulpuppy-reddit-2021',
    era: 'twenty-first',
    dateDisplay: 'August 23, 2021',
    dateSort: '2021-08-23',
    person: 'u/faithfulpuppy (Reddit username)',
    title: 'Comment on "The New New York City Ferry Map as of the 23rd"',
    voiceType: 'forum',
    location: 'manhattan-ferry-slips',
    summary:
      'Replying to a visitor asking which NYC Ferry route to take, a rider notes it is especially nice at sunrise and sunset.',
    excerpt: "Any of em really, just depends where you want to be. It's especially nice at sunrise and sunset.",
    excerptVerified: true,
    motifs: ['sunset-fog-light', 'water-tide'],
    mundaneGlamorous: 'both',
    whitmanConnection:
      "A small, real echo of Whitman's own attention to the \"sunlit water\", maybe when the sun was \"half an hour high\". The same route can look different, and more beautiful, depending on when you ride it.",
    sourceTitle: '"The New New York City Ferry Map as of the 23rd," r/nyc (Reddit)',
    sourceUrl: 'https://www.reddit.com/r/nyc/comments/p9lvq6/comment/ha0cnvj/',
    retrievalDate: '2026-08-19',
    rightsStatus: 'brief-quotation'
  },
  {
    id: 'student-fieldwork',
    era: 'twenty-first',
    dateDisplay: 'August 6, 2026',
    person: 'Lam Ho',
    title: 'An Experimental Ride from the Navy Yard to Midtown Manhattan',
    voiceType: 'fieldwork',
    location: 'fulton-ferry-landing',
    summary: "A ferry ride from the Brooklyn Navy Yard to Midtown Manhattan, recounted in the rider's own words.",
    excerpt:
      "Boarded at the Navy Yard expecting a Whitman-grade epiphany; instead spent ten minutes glaring at a cloud the size of New Jersey, daring it to rain before Midtown. It didn't. The Williamsburg Bridge did its moody silhouette thing, a seagull judged my seat choice, and somewhere past that I had the epiphany anyway.",
    excerptVerified: true,
    motifs: ['skyline-spectacle', 'crowds-strangers'],
    mundaneGlamorous: 'both',
    whitmanConnection: '',
    sourceTitle: '',
    sourceUrl: '',
    rightsStatus: 'student-owned',
    mediaUrl: '/images/lam-ho-fieldwork-navy-yard.jpg',
    mediaAlt: 'View from the back of an NYC Ferry boat looking toward the Williamsburg Bridge and the Manhattan skyline, a large cloud overhead and the boat\'s wake fanning out on the water.',
    mediaWidth: 1400,
    mediaHeight: 1050,
  },
]

export function getVoicesByEra(era: Era): ArchiveEntry[] {
  return voices.filter((v) => v.era === era)
}

export function getVoicesByLocation(locationId: string): ArchiveEntry[] {
  return voices.filter((v) => v.location === locationId)
}
