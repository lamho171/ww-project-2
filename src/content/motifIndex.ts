export interface Motif {
  id: string
  label: string
  description: string
}

export const motifIndex: Motif[] = [
  { id: 'water-tide', label: 'Water and Tide', description: 'The river itself, moving the same way beneath every crossing.' },
  { id: 'sunset-fog-light', label: 'Sunset, Fog, and Light', description: 'Changing weather and light turning a routine trip cinematic.' },
  { id: 'crowds-strangers', label: 'Crowds and Strangers', description: 'The press of unrelated people sharing one deck.' },
  { id: 'work-commuting', label: 'Work and Commuting', description: 'The crossing as a required leg of the working day.' },
  { id: 'fatigue-inconvenience', label: 'Fatigue and Inconvenience', description: 'Heavy bags, early mornings, delay, discomfort.' },
  { id: 'chance-encounters', label: 'Chance Encounters', description: 'A trip interrupted, or made, by meeting someone unplanned.' },
  { id: 'homecoming-departure', label: 'Homecoming and Departure', description: 'Crossing toward or away from where a rider belongs.' },
  { id: 'skyline-spectacle', label: 'Skyline and Spectacle', description: 'The crossing seen, and photographed, as a view.' },
  { id: 'absence-return', label: 'Absence and Return', description: 'What a place holds — or loses — when the crossing stops.' },
]

export function getMotif(id: string): Motif {
  const found = motifIndex.find((m) => m.id === id)
  if (!found) throw new Error(`Unknown motif id: ${id}`)
  return found
}
