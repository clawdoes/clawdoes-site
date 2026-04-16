import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Clawdoes",
  description: "Terms of Service for using the Clawdoes platform.",
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p>
        <strong>Effective Date:</strong> April 1, 2026
        <br />
        <strong>Last Updated:</strong> April 1, 2026
      </p>
      <p>
        Welcome to Clawdoes! These Terms of Service (&ldquo;Terms&rdquo;) govern
        your access to and use of the services provided by Clawdoes
        (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), including
        our website, our platform for deploying and managing OpenClaw instances,
        and any related software or services (collectively, the
        &ldquo;Service&rdquo;). By creating an account, accessing, or using our
        Service, you agree to be bound by these Terms and our{" "}
        <a href="/privacy">Privacy Policy</a>. If you do not agree to these
        Terms, you may not use the Service.
      </p>

      <h2>1. Who We Are</h2>
      <p>
        Clawdoes is a platform that simplifies the deployment of OpenClaw, an
        open-source, self-hosted AI assistant framework. Our Service allows you
        to launch and manage a private AI assistant on your own dedicated server.
        This enables you to interact with your AI through various messenger
        applications, including Telegram and WhatsApp, while maintaining a high
        degree of privacy and control over your data and API keys.
      </p>
      <p>
        Your use of the Service relies on third-party services, including but not
        limited to AI models (e.g., from Anthropic, OpenAI, Google), messenger
        platforms (e.g., Telegram, WhatsApp), and integrated applications (e.g.,
        Google Workspace, GitHub). Your use of these third-party services is
        subject to their respective terms and conditions.
      </p>

      <h2>2. Eligibility and Account Registration</h2>
      <p>
        To use the Service, you must be at least 18 years of age or the age of
        legal majority in your jurisdiction. By agreeing to these Terms, you
        represent and warrant that you meet this age requirement.
      </p>
      <p>
        You must register for an account to access the Service. We use
        third-party services like Clerk and Google for authentication. You agree
        to provide accurate, current, and complete information during the
        registration process and to keep your account information updated.
      </p>
      <p>
        You are solely responsible for all activities that occur under your
        account and for maintaining the confidentiality of your account
        credentials. You must notify us immediately of any unauthorized use of
        your account.
      </p>

      <h2>3. Fees, Payments, and Subscriptions</h2>
      <ul>
        <li>
          <strong>Subscription Plans:</strong> We offer several subscription
          plans with different features, resource allocations, and AI credit
          limits, as detailed on our Pricing page. We reserve the right to modify
          our subscription plans and pricing at any time, with reasonable notice
          to existing users.
        </li>
        <li>
          <strong>Billing and Payment:</strong> For paid subscriptions, you will
          be billed in advance on a recurring monthly basis. All payments are
          processed by our third-party payment processor, Stripe. By providing a
          payment method, you authorize us (through Stripe) to charge your
          payment method for all applicable fees.
        </li>
        <li>
          <strong>Refunds:</strong> All plans come with a 7-day money-back
          guarantee. If you are not satisfied with our Service, please contact
          our support team at{" "}
          <a href="mailto:support@clawdoes.com">support@clawdoes.com</a> to
          discuss your options.
        </li>
        <li>
          <strong>AI Credits:</strong> Your plan includes a specific amount of AI
          credits for using underlying AI models. Usage exceeding these credits
          may result in service limitations or additional charges.
        </li>
      </ul>

      <h2>4. User Responsibilities and Acceptable Use</h2>
      <p>
        You are responsible for your conduct while using the Service and for any
        content you provide or actions your AI assistant performs on your behalf.
        You agree not to use the Service for any purpose that is illegal or
        prohibited by these Terms, including but not limited to:
      </p>
      <ul>
        <li>Violating any applicable local, state, national, or international law.</li>
        <li>Infringing on the intellectual property rights of others.</li>
        <li>
          Transmitting any data that is unlawful, harmful, or contains viruses or
          malicious code.
        </li>
        <li>
          Attempting to gain unauthorized access to our systems or other
          users&apos; accounts.
        </li>
        <li>Interfering with the proper functioning of the Service.</li>
        <li>Sending spam, harassment, or abusive content.</li>
        <li>Generating illegal, harmful, or deceptive content.</li>
      </ul>

      <h2>5. AI Model Usage and Open-Source Software</h2>
      <p>
        The AI models powering your assistant are provided by third parties
        (OpenRouter, Anthropic, OpenAI, Google, etc.). Your use of these models
        is subject to their respective terms and acceptable use policies. We are
        not responsible for the outputs generated by AI models.
      </p>
      <p>
        Clawdoes is built on OpenClaw, an open-source AI assistant framework.
        You acknowledge and agree that:
      </p>
      <ul>
        <li>
          Your dedicated server runs open-source software. While we apply
          security hardening and automatic updates, no system is completely immune
          to vulnerabilities.
        </li>
        <li>
          You are responsible for how you use your AI assistant, including the
          content you generate and any actions you take based on AI outputs.
        </li>
        <li>
          AI models can produce inaccurate, misleading, or inappropriate content.
          You should not rely on AI outputs for critical decisions without
          independent verification.
        </li>
        <li>
          If you are on the Architect plan and provide your own API key, you are
          responsible for securing that key and any costs incurred through your
          API provider.
        </li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <ul>
        <li>
          <strong>Our Service:</strong> All rights, title, and interest in and to
          the Service, including its software, design, and branding, are and will
          remain the exclusive property of Clawdoes and its licensors.
        </li>
        <li>
          <strong>Your Content:</strong> You retain ownership of any data,
          information, or content you create or provide to the Service. By using
          the Service, you grant us a limited, non-exclusive, worldwide,
          royalty-free license to use, host, store, reproduce, and modify Your
          Content solely for the purpose of providing and improving the Service
          for you.
        </li>
      </ul>

      <h2>7. Service Availability</h2>
      <p>
        We strive for high availability but do not guarantee uninterrupted
        service. We may modify, suspend, or discontinue the Service at any time.
        We will provide reasonable notice for significant changes.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS
        AVAILABLE&rdquo; BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER
        EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLAWDOES
        SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
      </p>

      <h2>9. Termination</h2>
      <p>
        You may terminate your account and stop using the Service at any time. We
        may suspend or terminate your access to the Service at any time, with or
        without cause or notice, if we believe you have violated these Terms.
        Upon termination, your right to use the Service will immediately cease,
        and we may delete your server and data.
      </p>

      <h2>10. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. We will notify
        users of significant changes via email or through the Service. Continued
        use after changes constitutes acceptance.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at{" "}
        <a href="mailto:support@clawdoes.com">support@clawdoes.com</a>.
      </p>
    </>
  );
}
