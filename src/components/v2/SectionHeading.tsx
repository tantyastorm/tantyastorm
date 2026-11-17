type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <header className="v2-section-heading">
      {eyebrow ? <p className="v2-section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 className="v2-section-heading__title" id={id}>{title}</h2>
      {description ? <p className="v2-section-heading__description">{description}</p> : null}
    </header>
  );
}
