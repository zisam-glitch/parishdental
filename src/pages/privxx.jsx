import React from "react";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";

const ParishDentalPracticePolicy = () => {
  return (
    <Layout>
      <PageHeader pageTitle="Parish Dental Practice Policy" />
      <div className="container mx-auto my-40">
        <details>
          <summary class="accordion">Complaints policy</summary>

          <div class="accordionDrop">
            <p className="text-xl mx-10">
              Complaints handling policy Code of practice for complaints
            </p>
            <p className="text-xl mx-10">
              In this practice, we take complaints seriously to ensure that our
              service meets expectations. All complaints are dealt with
              courteously and promptly to resolved the matter as quickly as
              possible.
            </p>
            <p className="text-xl mx-10">
              Our aim is to react to complaints and learn from every mistake
              that we make. We respond to any concerns in a caring and sensitive
              way.
            </p>
            <ol>
              <li>
                <p>
                  The person responsible for dealing with any complaints about
                  the service that we provide is the Manager, our Complaints’
                  Manager.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  If we receive a complaint by telephone or in person, we will
                  listen and offer to refer the individual to the Complaints’
                  Manager immediately. If the Complaints’ Manager is not
                  available at the time, we arrange a convenient time for the
                  Complaints’ Manager to contact the individual. The member of
                  staff will take brief details of the issue and pass it to the
                  Complaints’ Manager and provide the individual with a copy. If
                  the matter requires a more immediate response, we will arrange
                  for a senior member of the dental team to deal with it.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  If we receive a complaint in writing or by e-mail, it will be
                  passed immediately to the Complaints’ Manager.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  If a complaint is about any aspect of clinical care or
                  associated charges, it will usually be referred to the dentist
                  concerned, unless the individual does not want this to happen.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  We will acknowledge a complaint in writing and enclose a copy
                  of this code of practice as soon as possible, normally within
                  3 working days. We will offer to discuss the complaint with
                  the individual, and confirm how they would like to be kept
                  informed of developments – by telephone, letters or e-mail or
                  by face-to-face meetings. We will inform the individual about
                  how the complaint will be handled and the likely time that the
                  investigation will take to complete. If the individual does
                  not wish to discuss the complaint further, we will still
                  inform them of the expected timescale for completing the
                  investigation.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  We will seek to investigate the complaint within six months
                  and, as far as reasonably practicable, we will keep the
                  individual informed as to the progress of the investigation.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  When we have completed our investigation, we will provide the
                  individual with a full written report, which will include an
                  explanation of how we considered the complaint, the
                  conclusions reached in respect of each specific part of the
                  complaint, details of any necessary remedial action taken and
                  whether further action will be taken.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  Proper and comprehensive records will be kept of any
                  complaints received and the action we take. These records will
                  be reviewed regularly to ensure that we take every opportunity
                  to improve our service
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  If the individual making the complaint is not satisfied with
                  the result of our investigation, we will advise them to refer
                  the complaint to:
                </p>
              </li>
            </ol>
            <p className="text-xl mx-10">
              For complaints about NHS treatment: NHS England, PO Box 16738,
              Redditch B97 9PT (email: England.contactus@nhs.net); or The
              Parliamentary and Health Service Ombudsman, Millbank Tower,
              Millbank London SW1P 4QP (0345 015 4033 or www.ombudsman.org.uk).
              For complaints about private treatment: Dental Complaints Service,
              Stephenson House, 2 Cherry Orchard Road, Croydon CR0 6BA (08456
              120 540). General Dental Council, 37 Wimpole Street, London, W1M
              8DQ
            </p>
          </div>
        </details>

        <details>
          <summary class="accordion">What do you use an accordion for?</summary>

          <div class="accordionDrop">
            An accordion is great for hiding information that you only want to
            be display when a user is interested. For example: Using an
            accordion is great on a frequently asked questions page, especially
            if you have a bunch of questions!
          </div>
        </details>

        <details>
          <summary class="accordion">I still need help!</summary>

          <div class="accordionDrop">
            I'm always open to helping you out. If you wish to contact me, my{" "}
            <a href="http://twitter.com/techjohnson">Twitter</a> is always open!
          </div>
        </details>
      </div>
    </Layout>
  );
};

export default ParishDentalPracticePolicy;
