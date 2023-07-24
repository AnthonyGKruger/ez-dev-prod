// Import statements
import React from "react";
import animationData from "@/lotties/key-lock.json";
import Heading from "@/components/shared/Heading";

// PrivacyPolicyContent component
const PrivacyPolicyContent = () => {
  return (
    // Article container with max width and padding
    <article className="2xl:max-w-7xl xl:max-w-4xl max-w-2xl mx-auto px-5 py-9">
      {/* Heading component with animation */}
      <Heading
        animationData={animationData}
        subtitle={"All About Privacy"}
        content="Privacy Policy"
        className="mt-8 mb-12"
      />
      {/* Privacy policy content */}
      <p className="text-xl mb-6">
        This privacy policy applies to ezdev.solutions and explains how I use any
        personal information I collect about you when you use this website.
      </p>
      <p className="text-xl font-semibold mb-3">Topics:</p>
      {/* List of topics with anchor links */}
      <ul className="list-disc pl-8 mb-6">
        <li>
          <a href="#what" className="hover:text-primary-gold">
            What information do I collect about you?
          </a>
        </li>
        <li>
          <a href="#how" className="hover:text-primary-gold">
            How will I use the information about you?
          </a>
        </li>
        <li>
          <a href="#information" className="hover:text-primary-gold">
            Access to your information and corrections
          </a>
        </li>
        <li>
          <a href="#cookies" className="hover:text-primary-gold">
            Cookies
          </a>
        </li>
        <li>
          <a href="#other" className="hover:text-primary-gold">
            Other websites
          </a>
        </li>
        <li>
          <a href="#review" className="hover:text-primary-gold">
            Changes to my privacy policy
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-primary-gold">
            How to contact me
          </a>
        </li>
      </ul>
      {/* Sections describing privacy policy */}
      <p id="what" className="text-xl font-semibold">
        What information do I collect about you?
      </p>
      <p className="mb-6">
        I collect information about you when you complete a form on my website.
        The information you give me may include your name, company name, and email
        address.
      </p>
      <p id="how" className="text-xl font-semibold">
        How will I use the information about you?
      </p>
      <p className="mb-6">
        I collect information about you to gain a better understanding of how users
        are using my website to improve my personal development and provide the best
        user experience possible. If you contact me through my website, I will use
        the information provided to respond accordingly.
      </p>
      <p id="use" className="text-xl font-semibold">
        I use your information to:
      </p>
      {/* List of ways information is used */}
      <ul className="list-disc pl-8 mb-6">
        <li>Contact you if you have requested me to.</li>
        <li>Monitor site activity.</li>
      </ul>
      <p className="mb-6">
        If you change your mind about being contacted in the future, please let us
        know.
      </p>
      <p id="information" className="text-xl font-semibold">
        Access to your information and corrections
      </p>
      <p className="mb-6">
        You have the right to request a copy of the information that I hold about
        you if you have contacted me before. If you would like a copy of some or all
        of your personal information, please email me at anthony@ezdev.solutions.
      </p>
      <p id="cookies" className="text-xl font-semibold">
        Cookies
      </p>
      <p className="mb-6">
        I reserve the right to use cookies to give you the best experience on my
        website and to help improve the overall user experience. A cookie is a small
        file that is placed on your computer or mobile device when you visit a
        website. You can manage or delete cookies as you wish.
      </p>
      <p id="other" className="text-xl font-semibold">
        Other websites
      </p>
      <p className="mb-6">
        My website may contain links to other websites. This privacy policy only
        applies to this website, so when you link to other websites, you should read
        their own privacy policies.
      </p>
      <p id="review" className="text-xl font-semibold">
        Changes to my privacy policy
      </p>
      <p className="mb-6">
        I keep my privacy policy under regular review, and I will place any updates
        on this web page. This privacy policy was last updated on 16/05/2023.
      </p>
      <p id="contact" className="text-xl font-semibold">
        How to contact me
      </p>
      <p className="mb-6">
        Please contact me if you have any questions about my privacy policy or the
        information I hold about you.
      </p>
      <p className="hover:text-primary-gold">
        <a href="mailto:anthony@ezdev.solutions">
          Email: anthony@ezdev.solutions
        </a>
      </p>
    </article>
  );
};

export default PrivacyPolicyContent;
