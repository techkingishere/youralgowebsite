import Link from "next/link";

export default function ContactPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Contact & Support</h1>
      <p>
        Need help with YOURALGO? Reach us using the details below.
      </p>

      <h2>General Support</h2>
      <p>Email: support@youralgo.tech</p>

      <h2>Legal & Privacy</h2>
      <p>Email: legal@youralgo.tech</p>

      <h2>Data Deletion</h2>
      <p>
        To delete your account and associated personal data, follow the steps on
        the <Link href="/data-deletion">Data Deletion</Link> page.
      </p>

      <h2>Mailing Address</h2>
      <p>
        YOURALGO — Attn: Support
        <br />
        Unit 804 - 2101 Islington Avenue
        <br />
        Etobicoke, Ontario M9P 3R2, Canada
      </p>
    </article>
  );
}


