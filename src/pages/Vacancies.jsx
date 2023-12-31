import React from "react";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";

const ParishDentalPracticePolicy = () => {
  return (
    <Layout>
      <PageHeader pageTitle="Vacancies" />
      <div className="container mx-auto my-40">
        <details>
          <summary class="accordion">Apprentice Nurse</summary>

          <div class="accordionDrop">
            <div className="policy">
              <h3 className="text-2xl	 font-bold	text-black my-8">
                Parish Dental - Failed Appointments and Short Notice
                <br />
                Cancellations Policy
              </h3>
              <p className="Blue font-bold text-xl my-8">Introduction</p>
              <p className="text-xl my-8">
                At Parish Dental, we strive to provide timely and quality dental
                care to all our patients. We understand that your time is
                valuable, and so is ours. Unattended appointments and short
                notice cancellations disrupt the practice's ability to serve
                other patients in need. Therefore, we have implemented the
                following Failed Appointments and Short Notice Cancellations
                Policy.
              </p>
              <p className="Blue font-bold text-xl my-8">Policy Guidelines</p>
              <ol className="list-decimal px-10 text-xl">
                <li className="my-4">
                  <b>Notification Requirement:</b> We require a minimum of 2
                  working days' notice if you need to cancel or reschedule an
                  appointment. This allows us to offer the time slot to other
                  patients who may be in urgent need of care.
                </li>
                <li className="my-4">
                  <b>Short Notice Cancellation:</b> If an appointment is
                  cancelled with less than 2 working days' notice, the following
                  will apply:
                  <ul className="list-disk p-6 text-xl">
                    <li className="my-3">
                      For NHS patients: In line with NHS regulations, if a
                      patient cancels at short notice 4 times within a 2-year
                      period, we reserve the right to deny any further NHS
                      treatment.
                    </li>
                    <li className="my-3">
                      For private appointments: Cancellations under the 2
                      working days' notice period will result in a loss of
                      deposit.
                    </li>
                  </ul>
                </li>
                <li className="my-4">
                  <b>Failed to Attend:</b> If a patient fails to show up for an
                  appointment without any prior notice, the following will
                  apply:
                  <ul className="list-disk p-6 text-xl">
                    <li className="my-3">
                      For NHS patients: If a patient fails to attend 2
                      appointments within a 2-year period, we reserve the right
                      to deny any further NHS treatment.
                    </li>
                    <li className="my-3">
                      {" "}
                      For private appointments: A failed appointment will result
                      in a loss of deposit and may also incur an additional fee.
                    </li>
                  </ul>
                </li>
                <li className="my-4">
                  <b>Double Appointments:</b> If a double appointment is booked,
                  which is greater than 40 minutes, this will count as 2
                  appointments. Consequently, if such an appointment is missed
                  or cancelled with less than the required notice, it will count
                  as 2 failed appointments or 2 short notice cancellations, as
                  applicable
                </li>
                <li className="my-4">
                  <b>Late Cancellation:</b> Cancellations made less than 3 hours
                  before the scheduled appointment time will be marked as a
                  "Failed to Attend."
                </li>
                <li className="my-4">
                  <b> Non-Discrimination:</b> This policy is applied uniformly
                  across our entire patient base to ensure fairness and to
                  prevent any form of discrimination.
                </li>
              </ol>
              <p className="Blue font-bold text-xl my-8">Exceptions</p>
              <p className="text-xl my-8">
                We understand that emergencies and unforeseen circumstances can
                occur. Exceptions to this policy will be considered on a
                case-by-case basis and are at the discretion of Parish Dental.
              </p>
              <p className="Blue font-bold text-xl my-8">Contact Information</p>
              <p className=" text-xl my-8">
                If you need to cancel or reschedule an appointment, please
                contact us as soon as possible at{" "}
                <a href="mailto:parishdental@gmail.com">
                  parishdental@gmail.com
                </a>
              </p>
            </div>
          </div>
        </details>
        <details>
          <summary class="accordion">Registered Nurse</summary>

          <div class="accordionDrop">
            <p className="text-2xl	 font-bold	text-black my-8">
              Purpose: To ensure the smooth operation of our facility and
              minimize disruption to our patients, it is essential that staff
              members provide timely notification in the event of illness or any
              unforeseen circumstances that prevent them from attending work.
              This policy outlines the procedure for notifying management of
              such absences.
            </p>
            <p className="text-xl my-8">
              In this practice, we take complaints seriously to ensure that our
              service meets expectations. All complaints are dealt with
              courteously and promptly to resolved the matter as quickly as
              possible.
            </p>
            <p className="text-xl mt-8">
              Our aim is to react to complaints and learn from every mistake
              that we make. We respond to any concerns in a caring and sensitive
              way.
            </p>
            <ol className="list-decimal p-10 text-xl">
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
            <p className="text-xl mb-8">
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
          <summary class="accordion">Associate Dentist</summary>

          <div class="accordionDrop">
            <p className="text-2xl	 font-bold	text-black my-8">
              Complaints handling policy Code of practice for complaints
            </p>
            <p className="text-xl my-8">
              In this practice, we take complaints seriously to ensure that our
              service meets expectations. All complaints are dealt with
              courteously and promptly to resolved the matter as quickly as
              possible.
            </p>
            <p className="text-xl mt-8">
              Our aim is to react to complaints and learn from every mistake
              that we make. We respond to any concerns in a caring and sensitive
              way.
            </p>
            <ol className="list-decimal p-10 text-xl">
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
            <p className="text-xl mb-8">
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
          <summary class="accordion">Dental Therapist</summary>

          <div class="accordionDrop">
            <p className="text-2xl	 font-bold	text-black my-8">
              Complaints handling policy Code of practice for complaints
            </p>
            <p className="text-xl my-8">
              In this practice, we take complaints seriously to ensure that our
              service meets expectations. All complaints are dealt with
              courteously and promptly to resolved the matter as quickly as
              possible.
            </p>
            <p className="text-xl mt-8">
              Our aim is to react to complaints and learn from every mistake
              that we make. We respond to any concerns in a caring and sensitive
              way.
            </p>
            <ol className="list-decimal p-10 text-xl">
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
            <p className="text-xl mb-8">
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
          <summary class="accordion">Dental Hygienist
</summary>

          <div class="accordionDrop">
            <p className="text-2xl	 font-bold	text-black my-8">
              Complaints handling policy Code of practice for complaints
            </p>
            <p className="text-xl my-8">
              In this practice, we take complaints seriously to ensure that our
              service meets expectations. All complaints are dealt with
              courteously and promptly to resolved the matter as quickly as
              possible.
            </p>
            <p className="text-xl mt-8">
              Our aim is to react to complaints and learn from every mistake
              that we make. We respond to any concerns in a caring and sensitive
              way.
            </p>
            <ol className="list-decimal p-10 text-xl">
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
            <p className="text-xl mb-8">
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
          <summary class="accordion">Vocational Training Dentist – European Graduates
</summary>

          <div class="accordionDrop">
            <p className="text-2xl	 font-bold	text-black my-8">
              Complaints handling policy Code of practice for complaints
            </p>
            <p className="text-xl my-8">
              In this practice, we take complaints seriously to ensure that our
              service meets expectations. All complaints are dealt with
              courteously and promptly to resolved the matter as quickly as
              possible.
            </p>
            <p className="text-xl mt-8">
              Our aim is to react to complaints and learn from every mistake
              that we make. We respond to any concerns in a caring and sensitive
              way.
            </p>
            <ol className="list-decimal p-10 text-xl">
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
            <p className="text-xl mb-8">
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
          <summary class="accordion">Foreign Visa and Sponsorship for Qualified Dentists
</summary>

          <div class="accordionDrop">
            <p className="text-2xl	 font-bold	text-black my-8">
              Complaints handling policy Code of practice for complaints
            </p>
            <p className="text-xl my-8">
              In this practice, we take complaints seriously to ensure that our
              service meets expectations. All complaints are dealt with
              courteously and promptly to resolved the matter as quickly as
              possible.
            </p>
            <p className="text-xl mt-8">
              Our aim is to react to complaints and learn from every mistake
              that we make. We respond to any concerns in a caring and sensitive
              way.
            </p>
            <ol className="list-decimal p-10 text-xl">
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
            <p className="text-xl mb-8">
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
      </div>
    </Layout>
  );
};

export default ParishDentalPracticePolicy;
