import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SectionHeader from "../global/SectionHeader";
import PrivateFeeFiltered from "./PrivateFeeFiltered";

const PrivateFees = () => {
  const data = useStaticQuery(graphql`
    query PrivateFeeQuery {
      contentfulPages(title: { eq: "Pricing" }) {
        id
        blocks {
          ... on ContentfulSections {
            id
            mainTitle
            subtitle
            description {
              description
            }
          }
        }
      }
    }
  `);

  const header = data?.contentfulPages?.blocks[4];

  return (
    <>
      <section className="w-full bg-white">
        <div className="py-24 mx-auto container px-10 ">
          <SectionHeader
            mainTitle={header?.mainTitle}
            description={header?.description?.description}
          />

          <div className="mt-3">
            <PrivateFeeFiltered category={null} />
            <PrivateFeeFiltered category="Periodontal" />
            <PrivateFeeFiltered category="Restorative" />
            <PrivateFeeFiltered category="Root Canal Treatment" />
            <PrivateFeeFiltered category="Extractions" />
            <PrivateFeeFiltered category="Crown & Bridge" />
            <PrivateFeeFiltered category="Dentures" />
            <PrivateFeeFiltered category="Prevention" />
            <PrivateFeeFiltered category="Aesthetics" />
            <div>
              <h3 className="text-primary font-semibold text-2xl mt-8 mb-2">
              Aesthetics
              </h3>
              <details>
                <summary>
                  <h3 className="text-primary font-semibold text-2xl mt-8 mb-2">
                    Dermal Fillers
                  </h3>
                </summary>
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center w-full border-b">
                    <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                      Teeth Whitening
                    </h5>
                    <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                      £300
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full border-b">
                    <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                      Teeth Whitening
                    </h5>
                    <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                      £300
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full border-b">
                    <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                      Teeth Whitening
                    </h5>
                    <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                      £300
                    </p>
                  </div>
                  
                </div>
              </details>
            </div>

            <PrivateFeeFiltered category="Other Items" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateFees;
