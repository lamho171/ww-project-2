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
    id: 'seed-3',
    text: "Whitman writes about the 'curious abrupt questionings' that stir within him on the water — I didn't believe that line until it happened to me on an 8:15 ferry.",
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
  {
    id: 'seed-9',
    text: "Maybe you are reading this fifty years from now, or a hundred, as Whitman once imagined. I wonder whether the skyline still looks the same from the water. I wonder what replaced the buildings I recognize and whether the ferry still runs. I cannot see you, but for the few minutes you are crossing this river, we are occupying the same role. Look at the sunlight on the water for me.",
  },
  {
    id: 'seed-10',
    text: "I have seen you waiting for the same ferry three times, at the Navy Yard, and we always get off at the same stop. You always wear green headphones and stand close to the edge of the platform. We have never spoken, and perhaps we never will. Still, your presence has become part of how I recognize this place. If you stop appearing, I think I will notice. It is strange how someone can become familiar without ever becoming known.",
  },
  {
    id: 'seed-11',
    text: "I grew up near the Mekong River, very far from Brooklyn. The East River does not look like the river of my childhood, probably dirtier (well...), but crossing it brought that core childhood memory back to me...",
  },
  {
    id: 'seed-12',
    text: "Whitman says, “I am with you,” even though he knows we cannot see him. Honestly, I wouldn't doubt it. I think he is. We crossed the Brooklyn Bridge in the rain and stopped briefly to read your poem. The river beneath us was the same river you watched, although almost everything surrounding it had changed. You imagined me before I existed; now I am looking backward and trying to imagine you.",
  },
]

export const archivePrompt =
  'Leave an entry — your thoughts reading "Crossing Brooklyn Ferry," your feelings crossing the ferry, or an anonymous letter to someone you feel strangely tied to.'

export const archiveIntro = [
  'Whitman\'s ferry poem addresses people he will never meet as though the water already connects them. Borrowing that gesture, I want to invite the readers to leave an entry, it can be about anything -- your thoughts reading "Crossing Brooklyn Ferry", your feelings crossing the ferry, or an annonymous letter to someone you feel strangely tied to without quite being able to explain why.',
]
