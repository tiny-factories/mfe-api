import React, { useState } from "react";
import { BookmarkIcon } from "@heroicons/react/24/solid";

const BookmarkToggle: React.FC<{}> = ({}) => {
  const [data, setData] = useState(["hello", "hi there", "holla"]);

  const [showAll, setShowAll] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showCurrent, setShowCurrent] = useState(false);

  const toggleAll = () => {
    setShowAll((val) => !val);
    setShowCurrent(false);
  };

  const toggleCurrent = () => {
    if (!showCurrent) {
      setShowCurrent(true);
      setShowAll(false);
      return;
    }
  };

  const setCurrent = (index) => {
    setCurrentIdx(index);
    toggleCurrent();
  };
  return (
    <div>
      <div className="">
        <button onClick={toggleAll}>
          {showAll ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                  clip-rule="evenodd"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default BookmarkToggle;
