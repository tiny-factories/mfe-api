import Link from "next/link";

export default function Section({ subtitle, title, children }) {
  return (
    <div className="my-9 col-span-4 border-t-4 bg-black-200">
      <div className="flex flex-wrap justify-between">
        <div className="w-full font-bold uppercase">
          {" "}
          {subtitle || "No Subtitle Provided"}
        </div>
        <div className="w-full text-sectionTitle font-bold uppercase">
          {title || "No Title Provided"}
        </div>
      </div>
      <div className="grid sm:grid-cols-4 gap-4">{children}</div>
    </div>
  );
}
