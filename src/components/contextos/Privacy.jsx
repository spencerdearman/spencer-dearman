/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import { useEffect } from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  useEffect(() => {
    document.title = "ContextOS - Privacy";
    const favicon = document.querySelector("link[rel~='icon']");
    const defaultIcon = favicon.href;

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
          <Link to="/contextos" className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium inline-flex items-center gap-2 group w-fit">
            <span className="material-symbols-rounded text-[18px] leading-none -mt-px">arrow_back</span>
            <span>Back to ContextOS</span>
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900">Privacy Policy</h1>
        <p className="text-zinc-500 mb-12 text-sm">Effective Date: May 26, 2025</p>

        <div className="space-y-12 text-zinc-600 text-base leading-relaxed">

          <div className="prose prose-zinc max-w-none">
            <p className="mb-6">
              This privacy policy applies to the ContextOS app (hereby referred to as "Application") for mobile devices that was created by Spencer Dearman (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">On-Device Processing</h2>
            <p className="mb-4">
              ContextOS is designed with privacy as a core principle. All data processing — including health data, calendar events, photos, weather, and AI-generated briefings — occurs entirely on your device using Apple Foundation Models and on-device frameworks. Your personal data is never transmitted to external servers.
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>Health and fitness data remains on-device and is never shared externally</li>
              <li>Calendar events are read locally and never uploaded to third-party servers</li>
              <li>Photos are analyzed using on-device Vision APIs; no images leave your device</li>
              <li>AI briefings are generated using Apple Foundation Models, which run entirely on-device</li>
              <li>Memories you save are synced only via your personal iCloud account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Information Collection and Use</h2>
            <p className="mb-4">The Application may collect the following data solely to provide its core functionality:</p>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>Health and fitness data via HealthKit (read-only, on-device)</li>
              <li>Calendar events via EventKit (read-only, on-device)</li>
              <li>Photo library access via PhotoKit (read-only, on-device)</li>
              <li>Location for weather context (not stored, not transmitted)</li>
              <li>Device motion and activity data for workout detection</li>
            </ul>
            <p className="mt-4">
              None of this data is collected by the Service Provider, stored on external servers, or shared with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">iCloud Sync</h2>
            <p>
              Memories saved within ContextOS are synced across your devices using Apple's CloudKit via your personal iCloud account. This data is governed by Apple's iCloud privacy policy. The Service Provider does not have access to this data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Use of Artificial Intelligence</h2>
            <p>
              ContextOS uses Apple Foundation Models, which run entirely on-device, to generate contextual summaries and briefings. No user data is sent to any AI cloud service. All inference happens locally on your iPhone, ensuring your personal information stays private.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Third Party Access</h2>
            <p>
              ContextOS does not share your personal data with any third parties. The Application does not include third-party analytics SDKs, advertising networks, or data brokers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Opt-Out Rights</h2>
            <p>
              You can revoke any permission (Health, Calendar, Photos, Location) at any time via iOS Settings → Privacy & Security. You can stop all use of the Application by uninstalling it through the standard iOS process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Data Retention</h2>
            <p>
              All data processed by ContextOS resides on your device or in your personal iCloud account. Deleting the Application removes all locally stored data. iCloud data can be managed via your iCloud account settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Children</h2>
            <p className="mb-4">
              The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
            </p>
            <p>
              If you believe a child has provided personally identifiable information through the Application, please contact the Service Provider at <a href="mailto:dearmanspencer@gmail.com" className="text-blue-600 hover:underline">dearmanspencer@gmail.com</a> so that appropriate action can be taken.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Security</h2>
            <p>
              Because all data is processed on-device, ContextOS benefits from the full security model of iOS, including hardware-level encryption and the iOS sandbox. The Service Provider takes reasonable precautions to protect the security of the Application itself.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Changes</h2>
            <p>
              This Privacy Policy may be updated from time to time. The Service Provider will notify you of any changes by updating this page. Continued use of the Application is deemed acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Your Consent</h2>
            <p>
              By using the Application, you consent to this Privacy Policy and any future amendments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or the Application's data practices, please contact the Service Provider at <a href="mailto:dearmanspencer@gmail.com" className="text-blue-600 hover:underline">dearmanspencer@gmail.com</a>.
            </p>
          </section>

          <hr className="border-zinc-200 my-12" />

          <p className="text-zinc-400 text-xs text-center">
            Designed by Spencer Dearman. All data stays on your device.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
