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

export default function Example() {
  return (
    <footer className="p-9 inset-x-0 bottom-0">
      Will is working on the footer
    </footer>
  );
}
