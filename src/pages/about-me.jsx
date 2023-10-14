import React from "react";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";

const AboutPage = () => {
  return (
    <Layout>
      <PageHeader pageTitle="About Me" />
      <div className="container mx-auto my-40">
      <img src="https://res.cloudinary.com/db1i46uiv/image/upload/v1697262648/Picture1_jnhekh.png" alt="" />
      </div>

    </Layout>
  );
};

export default AboutPage;
