import React, { ReactNode, useEffect, useState } from "react";

import GalleryView from "./DataGalleryView";
import TableView from "./DataTableView";

import useDebounce from "../hooks/useDebounce";

const posts = [
  {
    id: 1,
    title: "Blog Post 1",
    image: "/post-1.jpg",
    description: "This is the first blog post.",
  },
  {
    id: 2,
    title: "Blog Post 2",
    image: "/post-2.jpg",
    description: "This is the second blog post.",
  },
  {
    id: 3,
    title: "Blog Post 3",
    image: "/post-3.jpg",
    description: "This is the third blog post.",
  },
];

export default function SearchAndData({ data }) {
  const [loading, setLoading] = React.useState(true);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [view, setView] = useState("gallery");

  const [search, setSearch] = useState<string | null>(null);

  const debouncedSearch = useDebounce(search, 500);

  const toggleView = () => {
    setView((prevView) => (prevView === "gallery" ? "list" : "gallery"));
  };

  useEffect(() => {
    // search the api

    async function fetchData() {
      setLoading(true);

      setNotices([]);

      const data = await fetch(
        `/api/search?searchString=${debouncedSearch}`
      ).then((res) => res.json());
      setNotices(data);
      setLoading(false);
    }

    if (debouncedSearch) fetchData();
  }, [debouncedSearch]);

  return (
    <div className="">
      <div className="">explore</div>

      <div className="">
        Non eiusmod et minim ullamco laboris veniam. Culpa adipisicing eiusmod
        magna sunt. Ipsum elit ad dolor et id magna pariatur enim proident culpa
        cupidatat ut aliquip ut ea. Laborum eiusmod aute ullamco et non.
        Occaecat incididunt sunt est cillum deserunt et. Adipisicing veniam
        veniam est laborum laborum.
      </div>
      <div>
        <div>
          <div>
            <button onClick={toggleView}>Toggle View</button>
            {view === "gallery" ? (
              <div>
                <button onClick={toggleView}>List</button>
                <button onClick={toggleView}>Gallery</button>
              </div>
            ) : (
              <div>
                <button onClick={toggleView}>List</button>
                <button onClick={toggleView}>Gallery</button>
              </div>
            )}
          </div>
          {view === "gallery" ? (
            <GalleryView data={posts} />
          ) : (
            <TableView data={posts} />
          )}
        </div>
      </div>
    </div>
  );
}
