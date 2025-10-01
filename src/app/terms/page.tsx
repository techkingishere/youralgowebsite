export default function TermsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Terms of Service</h1>
      <p>Effective date: {new Date().toISOString().split("T")[0]}</p>

      <h2>1. Agreement</h2>
      <p>
        By accessing or using YOURALGO (the &quot;Service&quot;), you agree to these
        Terms. If you do not agree, do not use the Service.
      </p>

      <h2>2. Accounts and Eligibility</h2>
      <p>
        You must be legally permitted to use the Service. You are responsible
        for safeguarding your account and keeping information accurate.
      </p>

      <h2>3. Acceptable Use</h2>
      <p>
        Do not engage in unlawful, harmful, or abusive behavior. We may suspend
        or terminate accounts that violate these Terms.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        We may provide login via Facebook Login and verification via Twilio.
        Your use of third-party services is subject to their terms and privacy
        policies.
      </p>

      <h2>5. Content</h2>
      <p>
        You are responsible for the content you post. You grant us a license to
        host and display content for the purpose of operating the Service.
      </p>

      <h2>6. Disclaimers and Limitation of Liability</h2>
      <p>
        The Service is provided &quot;as is&quot; without warranties. To the maximum
        extent permitted by law, we are not liable for indirect or consequential
        damages.
      </p>

      <h2>7. Changes</h2>
      <p>
        We may update these Terms. We will post the updated version on this
        website with the effective date.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions about these Terms: legal@youralgo.tech
      </p>
    </article>
  );
}


