export interface ArchiveEntry {
  id: string
  text: string
}

// SEED CONTENT — written for this project to illustrate the shape of the archive.
// These are not real visitor submissions. Because this is a static site with no
// backend or database (per the assignment's technical requirements), entries a
// visitor writes are saved only in their own browser, not shared with anyone
// else. These seed entries let the page demonstrate what a fuller, shared
// archive might feel like without fabricating other people's words.
export const seedArchiveEntries: ArchiveEntry[] = [
  {
    id: 'seed-1',
    text: 'I think about the woman who lent me her umbrella on the L train and never told me her name.',
  },
  {
    id: 'seed-2',
    text: "Someone hummed my father's tune on a ferry once, and for a second I forgot which country I was in.",
  },
  {
    id: 'seed-3',
    text: "Whitman writes about the 'curious abrupt questionings' that stir within him on the water — I didn't believe that line until it happened to me on an 8:15 ferry.",
  },
  {
    id: 'seed-4',
    text: 'Halfway across the river the wake went flat and quiet, and every stranger on deck seemed to stop talking at the same moment.',
  },
  {
    id: 'seed-5',
    text: 'A stranger finished my sentence in line at the pharmacy, word for word, and neither of us laughed.',
  },
  {
    id: 'seed-6',
    text: "I didn't expect the skyline to make me cry on a Tuesday, but the ferry does that to people, apparently.",
  },
  {
    id: 'seed-7',
    text: "Reading 'the impalpable sustenance of me from all things at all hours of the day,' I finally had words for everything holding me up during a bad year.",
  },
  {
    id: 'seed-8',
    text: "I've never been to the address on the postcard I found in a used coat pocket, but I think about who wrote it constantly.",
  },
]

export const archivePrompt =
  'Leave an entry — your thoughts reading "Crossing Brooklyn Ferry," your feelings crossing the ferry, or an anonymous letter to someone you feel strangely tied to.'

export const archiveIntro = [
  'Whitman\'s ferry poem addresses people he will never meet as though the water already connects them. Borrowing that gesture, I want to invite the readers to leave an entry, it can be about anything -- your thoughts reading "Crossing Brooklyn Ferry", your feelings crossing the ferry, or an annonymous letter to someone you feel strangely tied to without quite being able to explain why.',
]
