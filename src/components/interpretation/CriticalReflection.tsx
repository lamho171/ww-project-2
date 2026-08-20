import {
  criticalReflectionParagraphs,
  criticalReflectionQuestions,
  criticalReflectionTitle,
} from '../../content/interpretation'

export function CriticalReflection() {
  return (
    <div className="critical-reflection">
      <h3>{criticalReflectionTitle}</h3>
      {criticalReflectionParagraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <p className="layer-kicker">Questions this archive tries to answer</p>
      <ul className="critical-reflection__questions">
        {criticalReflectionQuestions.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>
    </div>
  )
}
