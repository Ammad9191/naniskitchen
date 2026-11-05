export default function SectionHeading({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`mb-10 max-w-2xl ${align === 'left' ? '' : 'mx-auto text-center'}`}>
      {eyebrow ? (
        <p className="mb-3 font-script text-2xl text-leaf-olive">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl text-brown-dark sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-brown-muted">{text}</p> : null}
    </div>
  );
}
