export interface Source {
  id: string
  citation: string
  note?: string
  url?: string
  retrievalDate?: string
  verified: boolean
}

export const sources: Source[] = [
  // --- General / site-wide ---
  {
    id: 'whitman-leaves-1892',
    citation: 'Whitman, Walt. Leaves of Grass. 1892 ("deathbed") ed. Public domain.',
    note: 'Source for all direct quotations of "Crossing Brooklyn Ferry" used throughout this project.',
    verified: true,
  },
  {
    id: 'whitman-crossing-ferry-archive',
    citation: 'Whitman, Walt. "Crossing Brooklyn Ferry." Walt Whitman Archive (works-index page).',
    note: 'Publication-history source listing every edition of the poem (1856 through 1891–92) and their Whitman Archive item IDs.',
    url: 'https://whitmanarchive.org/item/xxx.00112',
    verified: true,
  },
  {
    id: 'whitman-sun-down-poem-1856',
    citation: 'Whitman, Walt. "Sun-Down Poem." Leaves of Grass, 1856 ed. (WWA ID ppp.00237_00248).',
    note: 'Full text of the poem\'s first published version, transcribed line-by-line for the Prologue\'s "1856" tab. Public domain. whitmanarchive.org blocks direct access; verified via a Wayback Machine snapshot: http://web.archive.org/web/20260115002928/https://whitmanarchive.org/item/ppp.00237_00248 (retrieved 2026-08-19). Page-break markers and print-column line-wraps were removed; wording and punctuation were not altered except to rejoin words split only by column width (e.g. "genera- tion" → "generation").',
    url: 'https://whitmanarchive.org/item/ppp.00237_00248',
    retrievalDate: '2026-08-19',
    verified: true,
  },
  {
    id: 'whitman-crossing-ferry-1891-92',
    citation: 'Whitman, Walt. "Crossing Brooklyn Ferry." Leaves of Grass, 1891–92 ("deathbed") ed. (WWA ID ppp.00707_00791).',
    note: 'Full text of the final authorized version, transcribed line-by-line for the Prologue\'s "deathbed" tab. Public domain. Verified via a Wayback Machine snapshot: http://web.archive.org/web/20250606212107/https://whitmanarchive.org/item/ppp.00707_00791 (retrieved 2026-08-19), with the same line-wrap cleanup described above.',
    url: 'https://whitmanarchive.org/item/ppp.00707_00791',
    retrievalDate: '2026-08-19',
    verified: true,
  },
  {
    id: 'whitman-brooklyn-encyclopedia',
    citation: 'Gill, Jonathan. "Brooklyn, New York." Walt Whitman Archive (Selected Criticism / Whitman: An Encyclopedia).',
    note: 'Source for the map locations\' biographical details: Whitman\'s residence on Henry, Liberty, and Fulton streets in Brooklyn Heights as a young apprentice (early 1830s), and the May 1855–May 1856 dates of his residence at 99 Ryerson Street. Verified via a Wayback Machine snapshot: http://web.archive.org/web/20251114174720/https://whitmanarchive.org/item/encyclopedia_entry391 (retrieved 2026-08-19).',
    url: 'https://whitmanarchive.org/item/encyclopedia_entry391',
    retrievalDate: '2026-08-19',
    verified: true,
  },
  {
    id: 'whitman-portrait-1854',
    citation:
      'Hollyer, Samuel, engraver, after a lost daguerreotype by Gabriel Harrison. Walt Whitman, steel engraving, July 1854. Frontispiece to the 1855 Leaves of Grass.',
    note: 'Morgan Library & Museum, via Wikimedia Commons. Public domain (published before 1931).',
    url: 'https://commons.wikimedia.org/wiki/File:Walt_Whitman,_steel_engraving,_July_1854.jpg',
    verified: true,
  },
  {
    id: 'whitman-specimen-days',
    citation: 'Whitman, Walt. Specimen Days. 1882. Public domain.',
    note: 'Source for the "passion for ferries" quotation in the Interpretive Prologue, as reproduced with citation (Prose Works 1892, ed. Floyd Stovall, New York University Press, 1963, 1:16) in Eugene McNamara\'s 1984 article — see the McNamara citation below.',
    verified: true,
  },
  {
    id: 'mcnamara-shaping-imagination',
    citation:
      'McNamara, Eugene. "\'Crossing Brooklyn Ferry\': The Shaping Imagination." Walt Whitman Quarterly Review 2.1 (Summer 1984): 32–35.',
    note: 'Peer-reviewed criticism cited in the Critical Reflection section. PDF read in full via a Wayback Machine snapshot (whitmanarchive.org blocks direct access): http://web.archive.org/web/20170809124215/http://whitmanarchive.org/criticism/wwqr/pdf/anc.00396.pdf',
    url: 'https://whitmanarchive.org/criticism/wwqr/pdf/anc.00396.pdf',
    verified: true,
  },
  {
    id: 'map-tiles',
    citation: 'Map data © OpenStreetMap contributors, available under the Open Database License.',
    note: 'Location pin coordinates are approximate placements for the general place associated with each map location, plotted by the project author rather than a geocoding service.',
    verified: true,
  },
  // --- Era I: The Everyday Crossing, 1850s-1890s ---
  {
    id: 'bulkeley-diary',
    citation: 'Bulkeley, Robert. Travel diary, September 9, 1857. Transcription by Ann Bradshaw.',
    note: 'Quoted briefly (one sentence) in the archive entry for this date; retrieved 2026-08-19.',
    url: 'https://www.joycetice.com/diaries/1857bulk.htm',
    verified: true,
  },
  {
    id: 'gunn-diary',
    citation:
      'Gunn, Thomas Butler. Diaries, Volume 2, page 191, September 29–30, 1851. Missouri History Museum.',
    note: 'Public domain (author died 1903; published before 1931). Missouri Historical Society Open Access Policy.',
    url: 'https://commons.wikimedia.org/wiki/File:Thomas_Butler_Gunn_Diaries-_Volume_2,_page_191,_September_29-30,_1851.jpg',
    verified: true,
  },
  {
    id: 'loc-fulton-ferry-boat-1890',
    citation: '"The Fulton ferry boat, [Brooklyn, N.Y.]" Photograph, July 1890.',
    note: 'Library of Congress, Prints & Photographs Division. No rights restriction noted on the item record.',
    url: 'https://www.loc.gov/item/97505116/',
    verified: true,
  },
  {
    id: 'image-fulton-ferry-1845',
    citation: 'Whitefield, Edwin. View of Brooklyn, L.I. from the United States Hotel, New York. 1845.',
    note: 'New York Public Library, via Wikimedia Commons. Public domain. Used as period context for the Fulton Ferry Landing map location; predates the poem by about a decade.',
    url: 'https://commons.wikimedia.org/wiki/File:View_of_Brooklyn,_L.I._From_U.S._Hotel,_New_York_(NYPL_Hades-1803842-1659381)_cropped.jpg',
    verified: true,
  },
  {
    id: 'jacobs-incidents',
    citation:
      'Jacobs, Harriet. Incidents in the Life of a Slave Girl, Written by Herself. 1861. Ch. XXXII, "The Meeting of Mother and Daughter."',
    note: 'Public domain. Retrieved 2026-08-19; the quoted excerpt was checked word-for-word against this edition.',
    url: 'https://docsouth.unc.edu/fpn/jacobs/jacobs.html',
    retrievalDate: '2026-08-19',
    verified: true,
  },
  {
    id: 'hanna-withered-leaves',
    citation: "Hanna, Abigail Stanley. Withered Leaves from Memory's Garland. 1857.",
    note: 'Public domain. Retrieved 2026-08-19; the quoted excerpt was checked word-for-word against this edition.',
    url: 'https://www.gutenberg.org/cache/epub/11599/pg11599-images.html',
    retrievalDate: '2026-08-19',
    verified: true,
  },
  {
    id: 'whitman-brooklyniana-17',
    citation: 'Whitman, Walt [unsigned in original]. "Brooklyniana, No. 17." Brooklyn Standard, April 5, 1862.',
    note: 'Public domain. The Walt Whitman Archive blocks automated access directly (Cloudflare bot-challenge, confirmed 2026-08-19); this item was verified via a Wayback Machine snapshot: http://web.archive.org/web/20231129185229/https://whitmanarchive.org/published/periodical/journalism/tei/per.00233.html — full text read and the quoted excerpt checked word-for-word against it.',
    url: 'https://whitmanarchive.org/item/per.00233',
    verified: true,
  },

  // --- Era II: Displacement, 1924-2000 ---
  {
    id: 'kazin-walker-in-city',
    citation: 'Kazin, Alfred. A Walker in the City. Harcourt, Brace, 1951.',
    note: 'Copyrighted; one sentence quoted under brief-quotation practice. Checked word-for-word against the 1969 Harcourt Brace Jovanovich edition (p. 172) and independently corroborated in Evan Hughes, Literary Brooklyn (2011), p. 134, and Stephen Miller, Walking New York (2014), p. 170.',
    url: 'https://books.google.com/books?id=6rvxtET-Xq4C&pg=PA172',
    retrievalDate: '2026-08-20',
    verified: true,
  },
  {
    id: 'cudahy-me-and-the-bmt',
    citation: 'Cudahy, Brian J. "Me and the BMT, A Memoir."',
    note: 'Hosted on nycsubway.org; checked word-for-word against the live page. Cudahy dates the surrounding material to his 1943-1959 BMT period but gives no exact year for this specific walk.',
    url: 'https://www.nycsubway.org/wiki/Me_and_the_BMT,_A_Memoir',
    retrievalDate: '2026-08-20',
    verified: true,
  },
  {
    id: 'hagan-white-strike',
    citation: 'Hagan, Patti, and Wallace White. "Strike." The Talk of the Town, The New Yorker, April 14, 1980.',
    note: 'Checked word-for-word against the article as republished in the magazine\'s online archive.',
    url: 'https://www.newyorker.com/magazine/1980/04/14/strike-6',
    retrievalDate: '2026-08-20',
    verified: true,
  },
  {
    id: 'bk-waterfront-history-mass-transit',
    citation: '"Mass Transit, Brooklyn Style." Brooklyn Waterfront History.',
    note: 'Primary source for most of the Ferry Life-Cycle Timeline: the 1642 Dircksen rowboat ferry, the May 10, 1814 Nassau steamboat launch, the Union Ferry Company\'s 1853 consolidation, 1870 ridership figures, the Williamsburg (1903) and Manhattan (1909) bridges, the 1908 BMT/IRT subway tunnels, the 1912 closure of two other Brooklyn ferry lines, the 1933 end of the last cross-river line, and the 2011 East River Ferry\'s Pier 1 stop.',
    url: 'https://www.bkwaterfronthistory.org/story/mass-transit-brooklyn-style/',
    retrievalDate: '2026-08-19',
    verified: true,
  },
  {
    id: 'ephemeral-ny-1924-closure',
    citation: '"\'Old Fulton Ferry Passes Into History.\'" Ephemeral New York, August 1, 2008.',
    note: 'Secondary source; relays (but is not itself) a New York Times account published on the day Fulton Ferry service ended in 1924. Used only for the ferry life-cycle timeline, not presented as an eyewitness account. The original 1924 newspaper coverage was not independently located during this build. [SOURCE TO VERIFY] the primary New York Times article.',
    url: 'https://ephemeralnewyork.wordpress.com/2008/08/01/old-fulton-ferry-passes-into-history/',
    verified: true,
  },
  {
    id: 'image-brooklyn-bridge-1883',
    citation: 'Historical engraving of pedestrian, cable-car, and rail traffic on the Brooklyn Bridge, 1883. Getty Images.',
    note: 'Provided by the student, credited to Getty Images. The specific Getty asset ID/URL was not retained, so it is not linked here; Getty stock images are licensed, not public domain, so reuse of this project beyond this academic submission would need the original Getty license checked.',
    verified: true,
  },
  {
    id: 'image-south-street-seaport',
    citation: 'Detroit Photographic Company. South Street and the Brooklyn Bridge. c. 1899–1924.',
    note: 'Beinecke Rare Book & Manuscript Library, Yale University, via Wikimedia Commons. Public domain (published before 1923). Used alongside the ferry life-cycle timeline.',
    url: 'https://commons.wikimedia.org/wiki/File:South_Street_Seaport,_Detroit_Photographic_Company_(0616).jpg',
    verified: true,
  },
  {
    id: 'image-ryerson-street-99',
    citation: 'Jim.henderson. 99 Ryerson Street 2023 jeh.jpg. 2023.',
    note: 'Wikimedia Commons, licensed CC BY-SA 4.0. A photograph of the actual house at 99 Ryerson Street, Whitman\'s only surviving New York residence.',
    url: 'https://commons.wikimedia.org/wiki/File:99_Ryerson_Street_2023_jeh.jpg',
    retrievalDate: '2026-08-20',
    verified: true,
  },
  {
    id: 'image-fort-greene-park',
    citation: 'Jim.henderson. Fort Greene Parkhouse jeh.JPG. 2009.',
    note: 'Wikimedia Commons, released to the public domain (CC0) by the photographer.',
    url: 'https://commons.wikimedia.org/wiki/File:Fort_Greene_Parkhouse_jeh.JPG',
    retrievalDate: '2026-08-20',
    verified: true,
  },
  {
    id: 'image-pfaffs-cellar',
    citation: '"Walt Whitman at Pfaff\'s." Harper\'s Magazine, reproduced from a Library of Congress collection, via the PBS American Experience Walt Whitman companion site.',
    note: 'Public domain (published well before 1929); a frequently reproduced illustration made roughly thirty years after the fact, depicting Whitman (seated) at Pfaff\'s in the early 1860s. Confirmed as the same illustration independently captioned "Walt Whitman at Pfaff\'s, Source: Harper\'s Magazine" on the NYC LGBTQ Historic Sites Project\'s Pfaff\'s entry.',
    url: 'https://commons.wikimedia.org/wiki/File:Pfaffs.jpg',
    retrievalDate: '2026-08-20',
    verified: true,
  },

  // --- Era III: Return - Commuter and Spectacle, 2000s-present ---
  {
    id: 'heymont-ferry-day',
    citation: 'Heymont, Paul. "A Ferry Day on the East River, New York." TravelGumbo, September 20, 2025.',
    note: 'Two brief sentences quoted under brief-quotation practice; retrieved 2026-08-19.',
    url: 'https://www.travelgumbo.com/a-ferry-day-on-the-east-river-new-york/',
    verified: true,
  },
  {
    id: 'image-heymont-ferry-day',
    citation: 'Heymont, Paul. Photograph of an NYC Ferry boat, from "A Ferry Day on the East River, New York." TravelGumbo, 2025.',
    note: "The author's own photograph, watermarked \"©P.Heymont\"; TravelGumbo's site footer states all rights reserved. Used here under an educational allowance for a class project, not as a claim of a reuse license.",
    url: 'https://www.travelgumbo.com/a-ferry-day-on-the-east-river-new-york/',
    retrievalDate: '2026-08-20',
    verified: true,
  },
  {
    id: 'white-school-ferry',
    citation: '"NYC Ferry service set to expand." FOX 5 New York, May 15, 2019.',
    note: 'One sentence quoted from Jared White, a rider interviewed in the piece; checked word-for-word against the published article. Retrieved 2026-08-19.',
    url: 'https://www.fox5ny.com/news/nyc-ferry-service-set-to-expand',
    retrievalDate: '2026-08-19',
    verified: true,
  },
  {
    id: 'image-white-school-ferry',
    citation: 'FOX 5 New York. Video still of an NYC Ferry boat passing the Brooklyn Bridge, from "NYC Ferry service set to expand," May 15, 2019.',
    note: 'Copyrighted by FOX Television Stations. Used here under an educational allowance for a class project, not as a claim of a reuse license.',
    url: 'https://www.fox5ny.com/news/nyc-ferry-service-set-to-expand',
    retrievalDate: '2026-08-20',
    verified: true,
  },
  {
    id: 'faithfulpuppy-reddit-comment',
    citation: 'u/faithfulpuppy. Comment on "The New New York City Ferry Map as of the 23rd." r/nyc, August 23, 2021.',
    note: "Checked word-for-word against the live comment. An earlier draft of this entry, based on a secondhand summary, described a different bicycle-commute story attributed to this same username; that story could not be located in this or any other findable thread and was not used. Retrieved 2026-08-19.",
    url: 'https://www.reddit.com/r/nyc/comments/p9lvq6/comment/ha0cnvj/',
    retrievalDate: '2026-08-19',
    verified: true,
  },
  {
    id: 'travelingsoccerloon-tripadvisor-review',
    citation: 'TravelingSoccerLoon. "Inexpensive Way to See the Manhattan Skyline and Brooklyn Bridge from the Water." Review of NYC Ferry, TripAdvisor, July 28, 2025.',
    note: 'One sentence quoted; checked word-for-word against the live review, including the "Date of experience: August 2024" field. Retrieved 2026-08-19.',
    url: 'https://www.tripadvisor.com/ShowUserReviews-g60763-d12820071-r1021406711-Nyc_Ferry-New_York_City_New_York.html',
    retrievalDate: '2026-08-19',
    verified: true,
  },

  // --- Research leads not included as archive entries ---
  {
    id: 'lead-mcentee-diary',
    citation: 'McEntee, Jervis. Diary entry, January 31, 1879. Archives of American Art, Smithsonian Institution.',
    note: '[SOURCE TO VERIFY] — the Smithsonian site blocked automated access during this build; the diary entry\'s content could not be independently confirmed, so no card was created for it. Visit the source directly to verify before use.',
    url: 'https://www.aaa.si.edu/collection-features/diaries/jervis-mcentee/1879/January-31',
    verified: false,
  },
  {
    id: 'lead-tripadvisor',
    citation: 'TripAdvisor. East River Ferry reviews.',
    note: '[SOURCE TO VERIFY] — the specific reviews named in the original research brief could not be independently confirmed (the page is not reliably scrapable); no quotations from it appear on this site.',
    url: 'https://www.tripadvisor.com/Attraction_Review-g60827-d2515895-Reviews-East_River_Ferry-Brooklyn_New_York.html',
    verified: false,
  },
  {
    id: 'lead-reddit',
    citation: 'Reddit r/nyc. NYC Ferry fare discussion.',
    note: '[SOURCE TO VERIFY] — the specific thread named in the original research brief returned a blocked/not-found response during this build and could not be independently confirmed; no quotations from it appear on this site.',
    url: 'https://www.reddit.com/r/nyc/comments/vyyp3q/nyc_ferry_fares_rising_45_but_with_broader/',
    verified: false,
  },
  {
    id: 'lead-google-reviews',
    citation: 'Google Maps reviews of Fulton Ferry Landing / the DUMBO ferry stop.',
    note: '[SOURCE TO VERIFY] — not collected during this build. See the project brief\'s manual collection workflow (Section 5, Era III, item 6) before adding any as an archive entry.',
    verified: false,
  },
  {
    id: 'lead-dumbo-bid-video',
    citation: 'DUMBO BID. Commuter interview video ("Who commutes to DUMBO via NYC Ferry?").',
    note: '[SOURCE TO VERIFY] — speaker names, consent, and embed permission were not verified during this build.',
    url: 'https://www.facebook.com/DUMBOBID/videos/who-commutes-to-dumbo-via-nyc-ferry-%EF%B8%8Fwe-love-this-way-to-get-to-and-from-the-nei/3952986718082085/',
    verified: false,
  },
  {
    id: 'lead-fieldwork',
    citation: 'Student-collected fieldwork: an original ferry ride, photographs, and (with consent) rider interviews.',
    note: 'Placeholder per the project brief (Section 5, Era III, item 7); see the "student-fieldwork" archive entry. Not yet completed.',
    verified: false,
  },

  // --- Walt Whitman Initiative (footer credit) ---
  {
    id: 'walt-whitman-initiative',
    citation: 'Walt Whitman Initiative. "About." Accessed 2026.',
    note: 'Source for the WWI mission statement quoted in the Artist\'s Statement.',
    url: 'https://waltwhitmaninitiative.org/about-2/',
    verified: true,
  },
  {
    id: 'wwi-logo',
    citation: 'Walt Whitman Initiative logo mark, used in the site footer with a link to their donation page.',
    note: 'Reproduced from the organization\'s own site icon/favicon as identification of the organization being credited and linked, not as a claim of endorsement by WWI of this student project.',
    url: 'https://waltwhitmaninitiative.org/',
    verified: true,
  },
]
