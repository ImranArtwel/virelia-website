import { ArticleLayout, H2, P, UL } from '../../components/ArticleLayout';

export function ClinicManagementSoftwarePage() {
  return (
    <ArticleLayout
      path="/clinic-management-software-zimbabwe"
      title="Clinic management software for Zimbabwe"
      intro="A clinic needs more than a patient register. Reception, nurses, doctors and the cashier all touch the same patient on the same day, and the software has to follow that flow. Here is what to look for, and how Axon handles it."
    >
      <H2>What clinic management software should do</H2>
      <P>
        At minimum, one system should cover the whole patient visit, from the front desk to the bill.
        If staff have to re-type the same details in a second place, the software is adding work instead of removing it.
      </P>
      <UL>
        <li><strong>Registration:</strong> one record per patient, quick search by name or ID, and consent recorded at the start.</li>
        <li><strong>Appointments and check-in:</strong> a daily schedule that reception can change in seconds.</li>
        <li><strong>Triage:</strong> nurses record vital signs and the queue reflects who needs to be seen first.</li>
        <li><strong>Consultation:</strong> the doctor sees the vitals, history and past visits, then records the diagnosis and prescription in the same record.</li>
        <li><strong>Billing:</strong> the invoice is built from what happened in the visit.</li>
        <li><strong>Accountability:</strong> a log of who viewed or changed what, and when.</li>
      </UL>

      <H2>Questions to ask before you choose</H2>
      <UL>
        <li>Does it keep working when the internet or power drops? In Zimbabwe, this is a daily question, not an edge case.</li>
        <li>Is pricing predictable? Per-user fees for every receptionist and nurse add up quickly. Axon charges per clinician only; nurses, receptionists, lab technicians and admins are free.</li>
        <li>Can your team learn it in a day? Staff who find it slower than paper will go back to paper.</li>
        <li>Who owns your data, and can you export it? You should be able to leave with your records.</li>
        <li>Does it support more than one branch if you grow?</li>
      </UL>

      <H2>How Axon works for a clinic</H2>
      <P>
        Axon runs in a web browser on the computers you already have, with no server to buy or maintain.
        It is built for the way Zimbabwean clinics work: reception registers and books, the nurse takes vitals,
        the doctor consults and prescribes, and billing closes the visit. Every step lands in one patient record.
      </P>
      <P>
        Axon is designed to keep working offline and syncs automatically when the connection returns.
        Locked records can be amended, but the original is preserved, so there is a clear history of any change.
      </P>

      <H2>Getting started</H2>
      <P>
        Most clinics can register their staff and begin entering patients within a day. The 90-day free trial
        gives full access, so you can run real visits through it before paying anything.
      </P>
    </ArticleLayout>
  );
}
