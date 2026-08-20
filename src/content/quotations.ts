// Whitman's poetry is in the public domain. Quotations below are drawn from the
// 1892 "deathbed" edition of Leaves of Grass, the standard public-domain text.
// Section numbers follow the most common modern editions; a student preparing
// a final citation should confirm section numbering against the specific
// edition assigned in ENGL 3273. [SOURCE TO VERIFY: exact edition/printing]

export interface Quotation {
  id: string
  poem: 'Crossing Brooklyn Ferry' | 'Song of Myself' | 'The Sleepers'
  section: string
  text: string
}

export const quotations: Quotation[] = [
  {
    id: 'cbf-1-flood-tide',
    poem: 'Crossing Brooklyn Ferry',
    section: '1',
    text: 'Flood-tide below me! I see you face to face!\nClouds of the west—sun there half an hour high—I see you also face to face.',
  },
  {
    id: 'cbf-1-crowds',
    poem: 'Crossing Brooklyn Ferry',
    section: '1',
    text: 'Crowds of men and women attired in the usual costumes, how curious you are to me!',
  },
  {
    id: 'cbf-1-years-hence',
    poem: 'Crossing Brooklyn Ferry',
    section: '1',
    text: 'And you that shall cross from shore to shore years hence are more to me, and more in my meditations, than you might suppose.',
  },
  {
    id: 'cbf-3-avails-not',
    poem: 'Crossing Brooklyn Ferry',
    section: '3',
    text: 'It avails not, time nor place—distance avails not,\nI am with you, you men and women of a generation, or ever so many generations hence.',
  },
  {
    id: 'cbf-3-just-as-you-feel',
    poem: 'Crossing Brooklyn Ferry',
    section: '3',
    text: 'Just as you feel when you look on the river and sky, so I felt,\nJust as any of you is one of a living crowd, I was one of a crowd.',
  },
  {
    id: 'cbf-9-flow-on',
    poem: 'Crossing Brooklyn Ferry',
    section: '9',
    text: 'Flow on, river! flow with the flood-tide, and ebb with the ebb-tide!\nFrolic on, crested and scallop-edg’d waves!',
  },
  {
    id: 'cbf-9-furnish-your-parts',
    poem: 'Crossing Brooklyn Ferry',
    section: '9',
    text: 'You furnish your parts toward eternity,\nGreat or small, you furnish your parts toward the soul.',
  },
  {
    id: 'som-1-celebrate',
    poem: 'Song of Myself',
    section: '1',
    text: 'I celebrate myself, and sing myself,\nAnd what I assume you shall assume,\nFor every atom belonging to me as good belongs to you.',
  },
  {
    id: 'som-6-grass',
    poem: 'Song of Myself',
    section: '6',
    text: 'A child said What is the grass? fetching it to me with full hands;\nHow could I answer the child? I do not know what it is any more than he.',
  },
  {
    id: 'som-6-uncut-hair',
    poem: 'Song of Myself',
    section: '6',
    text: 'And now it seems to me the beautiful uncut hair of graves.',
  },
  {
    id: 'som-51-contradict',
    poem: 'Song of Myself',
    section: '51',
    text: 'Do I contradict myself?\nVery well then I contradict myself,\n(I am large, I contain multitudes.)',
  },
  {
    id: 'som-52-bequeath',
    poem: 'Song of Myself',
    section: '52',
    text: 'I bequeath myself to the dirt to grow from the grass I love,\nIf you want me again look for me under your boot-soles.',
  },
  {
    id: 'som-52-missing-me',
    poem: 'Song of Myself',
    section: '52',
    text: 'Missing me one place search another,\nI stop somewhere waiting for you.',
  },
  {
    id: 'sleepers-1-wander',
    poem: 'The Sleepers',
    section: '1',
    text: 'I wander all night in my vision,\nStepping with light feet, swiftly and noiselessly stepping and stopping,',
  },
  {
    id: 'sleepers-1-flow-hand-in-hand',
    poem: 'The Sleepers',
    section: '1',
    text: 'The sleepers are very beautiful as they lie unclothed,\nThey flow hand in hand over the whole earth from east to west as they lie unclothed.',
  },
  {
    id: 'sleepers-8-all-beautiful',
    poem: 'The Sleepers',
    section: '8',
    text: 'I swear they are all beautiful,\nEvery one that sleeps is beautiful, every thing in the dim light is beautiful.',
  },
]

export function getQuotation(id: string): Quotation {
  const found = quotations.find((q) => q.id === id)
  if (!found) throw new Error(`Unknown quotation id: ${id}`)
  return found
}
