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
    <footer className="py-9 inset-x-0 bottom-0">
      <div className="border-t border-black py-12 mx-auto  overflow-hidden">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="...">
            <div className="font-bold">
              By{" "}
              <Link href="/blog/hello-world">
                <a className="underline underline-offset-2">Tiny Factories</a>
              </Link>
            </div>
            <div className="py-2">
              Made on a pale blue dot for the Earth, the only known place in the
              universe to house life.
            </div>
          </div>
          <div className="...">
            <div className="font-bold">Made For Earth</div>
            {navigation.main.map((item) => (
              <div key={item.name} className="py-2">
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
          <div className="...">
            <div className="font-bold">Contribute</div>
            {navigation.contribute.map((item) => (
              <div key={item.name} className="py-2 lowercase">
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
          <div className="...">
            <div className="font-bold">Social</div>
            {navigation.social.map((item) => (
              <div key={item.name} className="py-2 lowercase">
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="border-t border-black py-12">
          <div
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-base text-gray-400">
            Part of{" "}
            <Link href="https://madefor.earth">
              <a className="underline underline-offset-2">
                Made for <span>Earth</span>
              </a>
            </Link>{" "}
            by{" "}
            <Link href="https://tinyfactories.space">
              <a className="underline underline-offset-2">Tiny Factories</a>
            </Link>
          </p>
        </div> */}
      </div>
    </footer>
  );
}
