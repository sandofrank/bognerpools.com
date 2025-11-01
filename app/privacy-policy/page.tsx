import { Metadata } from 'next';
import { SEO_DEFAULTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Bogner Pools privacy policy. Learn how we collect, use, and protect your personal information when you visit our website or use our services.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy | Bogner Pools',
    description: 'Our commitment to protecting your privacy and personal information.',
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Privacy Policy',
      },
    ],
    type: 'website',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}<br />
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Paul Bogner Pools Inc. (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website bognerpools.com (the &quot;Site&quot;), use our services, or communicate with us.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By accessing or using our Site, you agree to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold mb-3 mt-4">2.1 Personal Information You Provide</h3>
              <p className="text-gray-700 leading-relaxed">
                We may collect personal information that you voluntarily provide to us, including but not limited to:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
                <li>Name, email address, phone number, and mailing address</li>
                <li>Property information (address, lot size, existing features)</li>
                <li>Project preferences and specifications</li>
                <li>Payment and billing information</li>
                <li>Communications you send to us (emails, contact forms, phone calls)</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed">
                When you visit our Site, we may automatically collect certain information about your device and usage, including:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
                <li>IP address and device identifiers</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited, time spent on pages, and navigation paths</li>
                <li>Referring website addresses</li>
                <li>Date and time of access</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">2.3 Cookies and Tracking Technologies</h3>
              <p className="text-gray-700 leading-relaxed">
                We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our Site.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
                <li>To provide, maintain, and improve our services</li>
                <li>To process consultation requests and project quotes</li>
                <li>To communicate with you about your inquiries, appointments, and projects</li>
                <li>To send marketing communications (with your consent where required)</li>
                <li>To process payments and prevent fraud</li>
                <li>To analyze Site usage and improve user experience</li>
                <li>To comply with legal obligations and enforce our terms</li>
                <li>To protect our rights, property, and safety, and that of our users and the public</li>
              </ul>
            </section>

            {/* Information Sharing and Disclosure */}
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell, rent, or trade your personal information. We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-4">4.1 Service Providers</h3>
              <p className="text-gray-700 leading-relaxed">
                We may share information with third-party vendors who perform services on our behalf, such as:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
                <li>Website hosting and maintenance</li>
                <li>Analytics providers (e.g., Google Analytics)</li>
                <li>Payment processors</li>
                <li>Email service providers</li>
                <li>Subcontractors and suppliers (only as necessary for project completion)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">4.2 Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed">
                We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
                <li>Comply with legal process</li>
                <li>Enforce our agreements and policies</li>
                <li>Protect our rights, property, or safety</li>
                <li>Investigate fraud or security issues</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">4.3 Business Transfers</h3>
              <p className="text-gray-700 leading-relaxed">
                In the event of a merger, acquisition, bankruptcy, or sale of assets, your information may be transferred to the successor entity.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, alteration, and disclosure. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>You are responsible for maintaining the confidentiality of any passwords or account credentials and for all activities that occur under your account.</strong>
              </p>
            </section>

            {/* Your Rights and Choices */}
            <section>
              <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>

              <h3 className="text-xl font-semibold mb-3 mt-4">6.1 Access and Correction</h3>
              <p className="text-gray-700 leading-relaxed">
                You have the right to access, update, or correct your personal information. Contact us to request access to or modification of your information.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-4">6.2 Opt-Out of Marketing</h3>
              <p className="text-gray-700 leading-relaxed">
                You may opt out of receiving marketing communications from us by following the unsubscribe instructions in our emails or by contacting us directly. Note that you may still receive transactional or administrative communications.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-4">6.3 California Privacy Rights (CCPA)</h3>
              <p className="text-gray-700 leading-relaxed">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
                <li>Right to know what personal information we collect and how it is used</li>
                <li>Right to request deletion of your personal information</li>
                <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
                <li>Right to non-discrimination for exercising your rights</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, contact us at (951) 688-5543 or via our contact information below.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-4">6.4 European Privacy Rights (GDPR)</h3>
              <p className="text-gray-700 leading-relaxed">
                If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
                <li>Right of access to your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            {/* Third-Party Websites */}
            <section>
              <h2 className="text-2xl font-bold mb-4">8. Third-Party Websites and Services</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Site may contain links to third-party websites, including:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
                <li>Contractors State License Board (CSLB)</li>
                <li>Better Business Bureau (BBB)</li>
                <li>Social media platforms</li>
                <li>Financing partners</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We are not responsible for the privacy practices of these third-party sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Site and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that we have collected information from a child under 18, we will promptly delete it. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            {/* Do Not Track */}
            <section>
              <h2 className="text-2xl font-bold mb-4">10. Do Not Track Signals</h2>
              <p className="text-gray-700 leading-relaxed">
                Some browsers have a &quot;Do Not Track&quot; feature that lets you tell websites you do not want your online activities tracked. We do not currently respond to Do Not Track signals.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other reasons. We will post the updated policy on this page with a revised &quot;Last Updated&quot; date. Your continued use of the Site after changes are posted constitutes your acceptance of the updated Privacy Policy.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>We encourage you to review this Privacy Policy periodically.</strong>
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold mb-4">12. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                TO THE FULLEST EXTENT PERMITTED BY LAW, PAUL BOGNER POOLS INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
                <li>Your use of or inability to use the Site</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from the Site</li>
                <li>Any bugs, viruses, or the like that may be transmitted to or through the Site by any third party</li>
              </ul>
            </section>

            {/* Consent */}
            <section>
              <h2 className="text-2xl font-bold mb-4">13. Consent</h2>
              <p className="text-gray-700 leading-relaxed">
                By using our Site, submitting information through our contact forms, or otherwise providing us with your personal information, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">14. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-100 rounded-lg p-6 mt-4">
                <p className="font-semibold text-gray-800">Paul Bogner Pools Inc.</p>
                <p className="text-gray-700 mt-2">5045 Van Buren Blvd<br />Riverside, CA 92503</p>
                <p className="text-gray-700 mt-2">Phone: <a href="tel:9516885543" className="text-blue-600 hover:underline">(951) 688-5543</a></p>
                <p className="text-gray-700 mt-2">License #C53 275843</p>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold mb-4">15. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from this Privacy Policy shall be resolved in the courts of Riverside County, California.
              </p>
            </section>

            {/* Severability */}
            <section>
              <h2 className="text-2xl font-bold mb-4">16. Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of this Privacy Policy is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that this Privacy Policy shall otherwise remain in full force and effect and enforceable.
              </p>
            </section>

            {/* Acknowledgment */}
            <section className="border-t-2 border-gray-300 pt-6 mt-8">
              <p className="text-gray-700 leading-relaxed font-semibold">
                BY USING THIS SITE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THIS PRIVACY POLICY.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
