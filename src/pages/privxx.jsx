import React from "react";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";

const ParishDentalPracticePolicy = () => {
  return (
    <Layout>
      <PageHeader pageTitle="Parish Dental Practice Policy" />

      <details>
        <summary class="accordion">What is an accordion?</summary>

        <div class="accordionDrop">
          What you just did was click on an accordion. Essentially, an accordion
          is a graphical control element comprising a vertically stacked list of
          of items that can be expanded or collapsed to reveal content.
        </div>
      </details>

      <details>
        <summary class="accordion">What do you use an accordion for?</summary>

        <div class="accordionDrop">
          An accordion is great for hiding information that you only want to be
          display when a user is interested. For example: Using an accordion is
          great on a frequently asked questions page, especially if you have a
          bunch of questions!
        </div>
      </details>

      <details>
        <summary class="accordion">I still need help!</summary>

        <div class="accordionDrop">
          I'm always open to helping you out. If you wish to contact me, my{" "}
          <a href="http://twitter.com/techjohnson">Twitter</a> is always open!
        </div>
      </details>
    </Layout>
  );
};

export default ParishDentalPracticePolicy;
