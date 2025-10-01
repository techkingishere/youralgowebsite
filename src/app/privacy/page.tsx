export default function PrivacyPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toISOString().split("T")[0]}</p>

      <p>
        YOURALGO (&quot;we&quot;, &quot;us&quot;) is an AI-native social media app. This policy
        explains how we collect, use, and share information when you use our
        mobile app and website.
      </p>

      <h2>Data We Collect</h2>
      <ul>
        <li>Account data: name, email, phone number (for login/verification).</li>
        <li>Authentication data via third parties (e.g., Facebook Login).</li>
        <li>Verification data via SMS/voice (e.g., Twilio).</li>
        <li>Usage data: app interactions, device identifiers, diagnostics.</li>
        <li>Content you create or upload within the app.</li>
      </ul>

      <h2>How We Use Data</h2>
      <ul>
        <li>Provide, maintain, and improve the YOURALGO app and services.</li>
        <li>Authenticate users, prevent fraud/abuse, and ensure account security.</li>
        <li>Send one-time passcodes (OTP) and service notifications.</li>
        <li>Comply with legal obligations and enforce our Terms.</li>
      </ul>

      <h2>Third-Party Services</h2>
      <p>
        We integrate with providers to deliver parts of our service. These
        providers process data as described below:
      </p>
      <ul>
        <li>
          Facebook Login (Meta Platforms, Inc.) to let you sign in with your
          Facebook account. Data received is used only for authentication and
          account creation.
        </li>
        <li>
          Twilio (Twilio Inc.) to send SMS/voice OTP for verification. Phone
          numbers are used only for verification and security purposes.
        </li>
      </ul>

      <h2>Data Retention</h2>
      <p>
        We retain personal data only for as long as necessary to provide the
        service or as required by law. You may request account deletion at any
        time; see Data Deletion.
      </p>

      <h2>Your Rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct,
        delete, or port your data, and to object or restrict certain
        processing. Contact us to exercise these rights.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy requests, email: support@youralgo.tech
      </p>
      <h3>Mailing Address</h3>
      <p>
        YOURALGO — Attn: Privacy
        <br />
        Unit 804 - 2101 Islington Avenue
        <br />
        Etobicoke, Ontario M9P 3R2, Canada
      </p>
    </article>
  );
}


