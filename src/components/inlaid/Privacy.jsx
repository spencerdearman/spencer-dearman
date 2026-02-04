/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import { useEffect } from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  useEffect(() => {
      document.title = "Inlaid - Privacy";
      const favicon = document.querySelector("link[rel~='icon']");
      const defaultIcon = favicon.href;
      favicon.href = "/images/inlaid/inlaid-favicon.png";
      
      return () => {
        favicon.href = defaultIcon;
        document.title = "Spencer Dearman - Portfolio";
      };
    }, []);

  return (
    <section className="section min-h-screen pt-12 pb-24 bg-white text-zinc-900">
      <div className="container mx-auto px-6 max-w-3xl">
        
        {/* Navigation */}
        <div className="mb-12">
           <Link to="/inlaid" className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium inline-flex items-center gap-2 group w-fit">
             <span className="material-symbols-rounded text-[18px] leading-none -mt-px">arrow_back</span>
             <span>Back to Inlaid</span>
           </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900">Privacy Policy</h1>
        <p className="text-zinc-500 mb-12 text-sm">Effective Date: January 28, 2026</p>
        
        <div className="space-y-12 text-zinc-600 text-base leading-relaxed">
          
          <div className="prose prose-zinc max-w-none">
            <p className="mb-6">
              This privacy policy applies to the Inlaid app (hereby referred to as "Application") for mobile devices that was created by Spencer Dearman (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Information Collection and Use</h2>
            <p className="mb-4">The Application collects information when you download and use it. This information may include information such as:</p>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>Your device's Internet Protocol address (e.g. IP address)</li>
              <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
              <li>The time spent on the Application</li>
              <li>The operating system you use on your mobile device</li>
            </ul>
            <p className="mt-4">The Application does not gather precise information about the location of your mobile device.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Third Party Access</h2>
            <p className="mb-4">
              Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
            </p>
            <p className="mb-4">The Service Provider may disclose User Provided and Automatically Collected Information:</p>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
              <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
              <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Use of Artificial Intelligence</h2>
            <p>
              The Application uses Artificial Intelligence (AI) technologies to enhance user experience and provide certain features. The AI components may process user data to deliver personalized content, recommendations, or automated functionalities. All AI processing is performed in accordance with this privacy policy and applicable laws. If you have questions about the AI features or data processing, please contact the Service Provider.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Opt-Out Rights</h2>
            <p>
              You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Data Retention Policy</h2>
            <p>
              The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at <a href="mailto:dearmanspencer@gmail.com" className="text-blue-600 hover:underline">dearmanspencer@gmail.com</a> and they will respond in a reasonable time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Children</h2>
            <p className="mb-4">
              The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
            </p>
            <p>
              The Service Provider does not knowingly collect personally identifiable information from children. Encourgaging parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider (<a href="mailto:dearmanspencer@gmail.com" className="text-blue-600 hover:underline">dearmanspencer@gmail.com</a>) so that they will be able to take the necessary actions. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries we may allow your parent or guardian to do so on your behalf).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Security</h2>
            <p>
              The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Changes</h2>
            <p>
              This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Your Consent</h2>
            <p>
              By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Contact Us</h2>
            <p>
              If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <a href="mailto:dearmanspencer@gmail.com" className="text-blue-600 hover:underline">dearmanspencer@gmail.com</a>.
            </p>
          </section>

          <hr className="border-zinc-200 my-12" />
          
          <p className="text-zinc-400 text-xs text-center">
            This privacy policy page was generated by <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 underline">App Privacy Policy Generator</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
