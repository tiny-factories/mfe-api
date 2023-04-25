export default function PageHero({ subtitle, title, description, color }) {
  return (
    <div className="bg-green text-tan rounded-lg w-full font-sans">
      <div className="mb-9 sm:p-9">
        <div className="uppercase font-bold">{subtitle}</div>
        <div className="uppercase font-bold text-h4 sm:text-h3 md:text-h1">
          {title}
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
}
