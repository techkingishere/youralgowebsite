export default function DataDeletionPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Data Deletion</h1>
      <p>
        You can request deletion of your YOURALGO account and associated
        personal data at any time.
      </p>

      <h2>In-App Deletion</h2>
      <p>
        In the YOURALGO iOS app, go to Settings → Account → Delete Account and
        follow the prompts. Deletion requests are processed promptly.
      </p>

      <h2>Email Request</h2>
      <p>
        If you cannot access the app, email
        {" "}
        <a href="mailto:privacy@youralgo.tech">privacy@youralgo.tech</a>
        {" "}
        from the email associated with your account with the subject
        &quot;Account Deletion Request&quot;.
      </p>

      <h2>What Will Be Deleted</h2>
      <ul>
        <li>Account profile and authentication identifiers</li>
        <li>User-generated content and interactions</li>
        <li>Device and diagnostic data linked to your account</li>
      </ul>

      <p>
        Certain records may be retained if required by law or for fraud
        prevention, per our Privacy Policy.
      </p>
    </article>
  );
}


