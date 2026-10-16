import { ArticleLayout, H2, P, UL } from '../../components/ArticleLayout';

export function OfflineEmrPage() {
  return (
    <ArticleLayout
      path="/guides/offline-emr-zimbabwe"
      title="Offline EMR for clinics with power cuts and weak internet"
      intro="Load-shedding and patchy connectivity are normal for clinics in Zimbabwe. An electronic medical record that stops when the network does is worse than paper. Here is what offline-first means and what to check before you buy."
    >
      <H2>Cloud-only vs offline-first</H2>
      <P>
        A cloud-only system needs a live connection for every action. When the connection drops, the screen stops, and staff
        are back to scraps of paper that someone must type in later.
      </P>
      <P>
        An offline-first system saves each entry on the device first, then sends it to the server in the background.
        The clinic keeps working through an outage, and nothing is lost when the connection returns.
      </P>

      <H2>What to check in any offline EMR</H2>
      <UL>
        <li><strong>What works offline?</strong> Registration, vitals, consultations and prescriptions should all work, not just viewing.</li>
        <li><strong>How are conflicts handled?</strong> If two people edit the same record while offline, the system must resolve it safely and not silently overwrite.</li>
        <li><strong>Is it clear when data is waiting to sync?</strong> Staff should be able to see that.</li>
        <li><strong>Where is data stored?</strong> Data on a device should be protected by login and role-based access.</li>
        <li><strong>Does it need installation?</strong> A browser-based system is easier to roll out on existing computers.</li>
      </UL>

      <H2>How Axon handles it</H2>
      <P>
        Axon is built offline-first. Entries are written to the device first, then synced automatically when the connection is
        available. Records that have been locked after a consultation are never overwritten; changes are added as
        amendments, so the original stays on file.
      </P>
      <P>
        Because it runs in a web browser, there is no server to maintain and no IT team required.
      </P>

      <H2>Practical tips for clinics with unreliable power</H2>
      <UL>
        <li>A small UPS on the reception computer keeps you working through short cuts and lets the browser close properly.</li>
        <li>Make sure each device syncs at least once a day on a working connection, so records reach the server.</li>
        <li>Use a laptop for the consulting room if power is the main problem, since the battery covers short outages.</li>
      </UL>
    </ArticleLayout>
  );
}
