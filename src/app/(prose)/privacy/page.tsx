import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Clawdoes",
  description: "Privacy Policy for the Clawdoes platform.",
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> April 1, 2026
        <br />
        <strong>Last Updated:</strong> April 1, 2026
      </p>
      <p>
        This Privacy Policy describes how Clawdoes (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects
        your information when you use our website and its related services
        (collectively, the &ldquo;Service&rdquo;). By using our Service, you
        agree to the collection and use of information in accordance with this
        policy.
      </p>

      <h2>1. Introduction</h2>
      <p>
        Clawdoes respects your privacy and is committed to protecting your
        personal data. Our Service deploys AI assistants on dedicated servers,
        ensuring your conversations remain private and are never shared with
        other users.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        We collect the following types of information:
      </p>
      <ul>
        <li>
          <strong>Account Information:</strong> Email address, name, and Google
          account ID when you sign in with Google. Our authentication is managed
          by Clerk.
        </li>
        <li>
          <strong>Payment Information:</strong> Processed securely by Stripe. We
          do not store your full credit card details.
        </li>
        <li>
          <strong>Channel Configuration:</strong> Your Telegram bot token and
          user ID (for Telegram), or your assigned WhatsApp phone number (for
          WhatsApp) to connect your assistant.
        </li>
        <li>
          <strong>Usage Data:</strong> Server status, model preferences, and
          service usage metrics.
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide and maintain the Service</li>
        <li>Process payments and manage subscriptions</li>
        <li>Provision and configure your AI assistant</li>
        <li>Send service-related communications</li>
        <li>Improve and optimize the Service</li>
        <li>Detect and prevent fraud or abuse</li>
      </ul>

      <h2>4. Data Storage and Security</h2>
      <p>
        Your data is stored securely using industry-standard encryption. We use:
      </p>
      <ul>
        <li>PostgreSQL database for account and server data</li>
        <li>Cloud infrastructure for your dedicated AI server</li>
        <li>Stripe for payment processing (PCI-DSS compliant)</li>
        <li>Cloudflare for DDoS protection and SSL</li>
      </ul>
      <p>
        Your Telegram bot token, WhatsApp phone number, and API keys are
        encrypted at rest and only accessed when configuring your server.
      </p>

      <h2>5. AI Conversations</h2>
      <p>
        Messages between you and your AI assistant are processed by third-party
        AI providers (OpenRouter, Anthropic, OpenAI, Google). We do not store or
        have access to your conversation content. Please review the privacy
        policies of the AI provider associated with your chosen model.
      </p>

      <h2>6. Third-Party Services</h2>
      <p>We integrate with the following third-party services:</p>
      <ul>
        <li>Google (authentication, Drive, Calendar)</li>
        <li>Stripe (payments)</li>
        <li>Cloud providers (infrastructure)</li>
        <li>OpenRouter / Anthropic / OpenAI / Google (AI models)</li>
        <li>Telegram (messaging platform)</li>
        <li>Twilio (WhatsApp messaging infrastructure)</li>
      </ul>
      <p>
        Each service has its own privacy policy governing how they handle your
        data.
      </p>

      <h2>7. Google User Data</h2>
      <p>
        Clawdoes accesses Google user data through the following scopes:
      </p>
      <ul>
        <li>
          <strong>Sign-in (email, profile):</strong> Your email address, name,
          and Google account ID are used solely for authentication and account
          management.
        </li>
        <li>
          <strong>Google Drive (drive.file):</strong> If you connect Google
          Drive, your assistant can list, read, create, and update files that it
          created or that you explicitly open with it. It cannot access your
          entire Drive.
        </li>
        <li>
          <strong>Google Calendar (calendar.events):</strong> If you connect
          Google Calendar, your assistant can list, read, create, update, and
          delete events on your behalf.
        </li>
      </ul>

      <h3>Who we share Google user data with</h3>
      <ul>
        <li>
          <strong>Your dedicated server:</strong> Google OAuth tokens are
          encrypted and transferred to your personal server so your assistant can
          access Drive and Calendar on your behalf. Each user has their own
          isolated server.
        </li>
        <li>
          <strong>AI model providers:</strong> When your assistant reads a Drive
          file or Calendar event to answer your question, that content is sent to
          the AI model provider you selected as part of the conversation context.
        </li>
      </ul>

      <h3>Who we do NOT share Google user data with</h3>
      <ul>
        <li>We do not sell, rent, or trade your Google user data to any third party.</li>
        <li>We do not use your Google user data for advertising or marketing purposes.</li>
        <li>We do not share your Google user data with data brokers or analytics providers.</li>
        <li>
          No human at Clawdoes accesses your Drive files, Calendar events, or
          OAuth tokens unless you explicitly grant temporary support access for
          troubleshooting.
        </li>
      </ul>

      <h3>Data retention for Google data</h3>
      <p>
        Google OAuth tokens are stored encrypted on your dedicated server. If you
        disconnect Drive or Calendar, the tokens are immediately revoked and
        deleted. If you cancel your subscription, your entire server (including
        all Google tokens and cached data) is deleted within 30 days.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        We retain your account data for as long as your account is active. When
        you delete your assistant or cancel your subscription, we delete your
        server and associated configuration within 30 days. Some data may be
        retained for legal or accounting purposes.
      </p>

      <h2>9. Your Rights</h2>
      <p>
        Depending on your location, you may have the right to:
      </p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Object to or restrict processing of your data</li>
        <li>Data portability</li>
      </ul>
      <p>
        To exercise these rights, contact us at{" "}
        <a href="mailto:privacy@clawdoes.com">privacy@clawdoes.com</a>.
      </p>

      <h2>10. Cookies</h2>
      <p>
        We use essential cookies for authentication and session management. We do
        not use tracking or advertising cookies.
      </p>

      <h2>11. Children&apos;s Privacy</h2>
      <p>
        The Service is not intended for users under 18 years of age. We do not
        knowingly collect personal information from children.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of significant changes via email or through the Service.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        For privacy-related questions or concerns, contact us at{" "}
        <a href="mailto:privacy@clawdoes.com">privacy@clawdoes.com</a>.
      </p>
    </>
  );
}
