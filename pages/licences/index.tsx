import React, { ReactNode, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import SectionHero from "../../components/SectionHero";

import prisma from "../../lib/prisma";
import { makeSerializable } from "../../lib/util";

type Props = {
  feedSources: SourceProps[];
};

const LicencesPage: React.FC<Props> = (props) => {
  return (
    <>
      {/* Hero Section */}
      <SectionHero
        subtitle="Proident duis"
        title="licences"
        description="Proident duis nulla id aute amet duis ullamco do qui qui labore. Cupidatat culpa consectetur cillum qui exercitation cupidatat laboris commodo pariatur est ea veniam."
      />
      {/* Search Section */}

      <div className="my-9 col-span-2 border-t bg-black-200">
        <div className="flex flex-flex-wrap justify-between">
          <div className="text-sectionTitle font-bold uppercase">
            Source List
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
          {props.data.map((data, i) => (
            <div key={data.id}>
              <div className="">{data.name}</div>
              <div className="">{data.abbrication}</div>
              <Link href="#">Site ↗</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const allLicences = await prisma.license.findMany({
    where: {},
  });
  return {
    props: { data: makeSerializable(allLicences) },
  };
};

export default LicencesPage;
