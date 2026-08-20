interface SectionHeadingProps {
  eyebrow?: string
  title: string
  level?: 2 | 3
  id?: string
}

export function SectionHeading({ eyebrow, title, level = 2, id }: SectionHeadingProps) {
  const Heading = level === 2 ? 'h2' : 'h3'
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading id={id}>{title}</Heading>
    </div>
  )
}
