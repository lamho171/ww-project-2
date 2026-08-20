export interface FerryMilestone {
  year: string
  text: string
  sourceNote?: string
  verified: boolean
}

export const ferryLifecycle: FerryMilestone[] = [
  {
    year: '1642',
    text: 'Cornelis Dircksen establishes a rowboat ferry at the foot of what becomes Fulton Street — the origin point of the crossing Whitman later writes about.',
    verified: true,
  },
  {
    year: '1814',
    text: 'On May 10, Robert Fulton\'s steamboat Nassau begins service, cutting the crossing to a five-to-twelve-minute passage and turning the ferry into daily infrastructure rather than an occasional rowboat trip.',
    verified: true,
  },
  {
    year: '1839',
    text: 'The Union Ferry Company is operating the Brooklyn ferries; Henry Evelyn Pierrepont serves as an early company president.',
    sourceNote: "Whitman Archive editorial footnote to Whitman's \"Brooklyniana, No. 17\" (1862).",
    verified: true,
  },
  {
    year: '1853',
    text: "The Union Ferry Company completes its consolidation of Brooklyn's ferry lines, buying out its smaller competitors.",
    verified: true,
  },
  {
    year: '1870',
    text: 'East River ferries carry roughly 50 million passengers a year, near the peak of the everyday-crossing era this archive documents.',
    verified: true,
  },
  {
    year: '1883',
    text: 'The Brooklyn Bridge opens, offering a free, weatherproof crossing and beginning the long decline of ferry traffic.',
    verified: true,
  },
  {
    year: '1903–1909',
    text: 'The Williamsburg (1903) and Manhattan (1909) bridges open, adding two more free East River crossings and accelerating the ferry\'s decline.',
    verified: true,
  },
  {
    year: '1908',
    text: 'BMT and IRT subway tunnels cross beneath the East River, further dispersing ferry crowds onto faster, all-weather transit.',
    verified: true,
  },
  {
    year: '1912',
    text: 'Two other Brooklyn ferry lines — Montague Street–Wall Street and Main Street–Catherine Street — stop running, more than a decade before Fulton Ferry itself closes.',
    verified: true,
  },
  {
    year: '1924',
    text: 'Fulton Ferry service ends — the first time since 1642 that this stretch of the East River has had no ferry crossing.',
    sourceNote: 'Ephemeral New York, relaying a New York Times account published the day service ended.',
    verified: true,
  },
  {
    year: '1933',
    text: 'The last remaining cross-river Brooklyn ferry line, Atlantic Avenue–South Ferry, ends, closing out the era of Brooklyn ferry service entirely.',
    verified: true,
  },
  {
    year: '1997',
    text: 'The reconstructed Fulton Ferry Landing pier reopens to the public.',
    verified: true,
  },
  {
    year: '2011',
    text: 'The East River Ferry pilot service begins, with a stop at Pier 1 in Brooklyn Bridge Park, reaching its three-year ridership goal within fourteen months.',
    verified: true,
  },
  {
    year: '2017',
    text: 'The route becomes part of the citywide NYC Ferry system.',
    verified: true,
  },
]
