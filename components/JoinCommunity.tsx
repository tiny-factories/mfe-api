import Link from "next/link";
const navigation = {
  main: [
    {
      name: "about",
      href: "/about",
    },
    {
      name: "support us",
      href: "https://madefor.earth/support",
    },

    {
      name: "work with us",
      href: "https://madefor.earth/work",
    },
    { name: "newsletter", href: "https://buttondown.email/madeforearth" },
  ],
  contribute: [
    {
      name: "help translate",
      href: "mailto:will@madefor.earth?subject=MFE → Help Translate Glossary",
    },
    {
      name: "add term",
      href: "mailto:will@madefor.earth?subject=MFE → New Term for Glossary",
    },
    {
      name: "GitHub ↗",
      href: "https://github.com/orgs/tiny-factories/teams/made-for-earth",
    },
  ],
  social: [
    {
      name: "Twitter ↗",
      href: "https://twitter.com/madeforearth1",
    },
    {
      name: "Are.na  ↗",
      href: "https://www.are.na/made-for-earth",
    },
    {
      name: "GitHub ↗",
      href: "https://github.com/tiny-factories/climate-dictionary",
    },
  ],
};

export default function JoinCommunity() {
  return (
    <div className="p-9 text-center">
      <div className="text-h1 font-bold">Join our Communituy</div>
      <div className="">
        Minim eu dolore excepteur sit velit culpa labore Lorem laborum
        adipisicing irure minim officia adipisicing. Velit amet Lorem commodo
        duis enim Lorem laborum occaecat.
      </div>
      <div className="">
        <div className="">Join Community</div>
        <div className="">or follow along online</div>
        <div className="">
          <div className="">1</div>
          <div className="">2</div>
          <div className="">3</div>
          <div className="">4</div>
        </div>
      </div>
    </div>
  );
}
