import { Reveal } from "./Reveal";

type Props = {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({ id, label, title, description, centered = false }: Props) {
  return (
    <Reveal className={`section-heading ${centered ? "section-heading--center" : ""}`}>
      {label && <p className="eyebrow">{label}</p>}
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </Reveal>
  );
}

