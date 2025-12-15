import React from "react";

const privacyCards = [
  {
    title: "Scope",
    content: `This policy applies to the collection, use, and disclosure of personal information about any person by our organization personnel, excluding (to the extent the employee records exclusion applies) personal information of our employees.`,
  },
  {
    title: "Policy",
    content: `Services Provided:\nOur organization platform is designed to help you consistently with our services. We offer the capacity to provide a platform for all the services required by small and medium enterprises, providing an end-to-end solution enabling businesses.\n\nPrivacy Principles:\n- We do not collect any more personal data about you than is necessary.\n- We will be transparent about our uses of your personal data.\n- We do not keep your personal data if it is no longer needed for the purposes described in this Privacy Notice.\n- Other than as we specify in this Privacy Notice, we do not share your personal data with third parties.`,
  },
  {
    title: "What Information Do We Collect?",
    content: `The personal information we collect is determined by your relationship with Beaconer. In this way we strive to never collect more personal information than is necessary to provide you with our products, services, and industry information.\n\nTo provide our managed third-party risk services, we must collect a limited amount of personal information to satisfy our contractual obligations. This personal information is provided to us by our customers and network participants for communication purposes to support: the assessment process; to establish an audit record for compliance purposes; and, to otherwise manage and service your account(s). This personal information is never used for any other purpose, and includes:\n- Name\n- Business email address\n- Business role\n- Business telephone number\n- Business IP address\n- Cookies\n\nFor all non-customer and network communications, Beaconer collects information about your interactions with us and with some of our business partners, including information about your use of the services that we offer. We may combine information about you that we have with information we obtain from business partners or other companies.\n\nBeaconer automatically receives and records information from your computer and browser, including your IP address, cookie information, and certain software and hardware attributes. Some of our business partners may use cookies on our site (for example, advertisers). However, we have no access to or control over these cookies.\n\nBeaconer uses information for the following general purposes: to customize the content you see, fulfil your requests for products and services, improve our services, contact you, and conduct research.`,
  },
  {
    title: "How We Secure, Store and Retain Your Personal Information",
    content: `We retain personal information for a period no longer than is reasonably necessary to provide the services you have requested and thereafter for legitimate legal or business purposes. These retention periods include:\n- Those required by law, contract, or similar obligations applicable to our business operations.\n- To preserve, resolve, defend or enforce our legal/contractual rights.\n- As necessary to maintain adequate and accurate business, compliance, and financial records.\n- Compliance with Legal, Regulatory and Law Enforcement Requests:\n\nWe cooperate with government and law enforcement officials and private parties to enforce and comply with the law. We will disclose any information about you to government or law enforcement officials or private parties as we, in our sole discretion, believe necessary or appropriate to respond to claims and legal process (such as subpoena requests), to protect our property and rights or the property and rights of a third party, to protect the safety of the public or any person, or to prevent or stop activity we consider to be illegal or unethical.`,
  },
  {
    title: "International Data Transfer",
    content: `If you utilize our services from a country other than the country where our servers are located, your communication with us may result in transferring your personal information across international borders. Also, when you call us, we may provide you with support from one of our locations outside your country of origin. In these cases, your personal information is handled according to this Privacy Policy.`,
  },
  {
    title: "Confidentiality and Security",
    content: `We limit access to personal information about you to only those employees and consultants who we believe reasonably need to use that information to provide products or services to you, or to do their jobs.\n\nWe have physical, electronic, and procedural safeguards that comply with federal regulations to protect personal information about you.\n\nAs we collect and use information about our customers, we may contract with vendors to assist us in processing that information. These vendors are required to maintain the confidentiality of the information and are restricted from using the information for any purpose other than helping to provide Beaconer’s services to our customers.`,
  },
  {
    title: "Cookies Technology",
    content: `We sometimes use cookie technology on our websites to provide information and services to web site visitors. Cookies are pieces of information that a website transfers to your computer's hard disk for record keeping purposes and are a necessary part of facilitating online transactions. Most web browsers are set to accept cookies. Cookies are useful to estimate our number of members and determine overall traffic patterns through our websites.\n\nIf you do not wish to receive any cookies you may set your browser to refuse cookies. This may mean you will not be able to take full advantage of the services on the website.`,
  },
  {
    title: "User Rights",
    content: `Our organization would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:\n- The right to access: You have the right to request our organization for copies of your personal data.\n- The right to rectification: You have the right to request that our organization correct any information you believe is inaccurate. You also have the right to request our organization to complete information you believe is incomplete.\n- The right to restrict processing: You have the right to request that our organization restrict the processing of your personal data, under certain conditions.\n- The right to object processing: You have the right to object to our organization’s processing of your personal data, under certain conditions.\n\nIf you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us using the contact details mentioned in the “Contact Us” section.`,
  },
  {
    title: "Consent Management",
    content: `Obtaining Consent:\nWhen you visit our website or platform, we will request your consent before collecting any personal information. Clear and easily understandable explanations will be provided regarding the purpose and scope of data processing activities. You have the right to grant or deny consent.\n\nModification of Consent:\nIf you wish to modify your consent for data processing, you can do so easily by contacting us using the details mentioned in the section “Contact Us”. Modification will not affect the lawfulness of any processing based on prior consent.\n\nWithdrawal of Consent:\nIf you wish to withdraw your consent for data processing, you can do so easily by contacting us using the details mentioned in the section “Contact Us”. Withdrawal will not affect the lawfulness of any processing based on prior consent.\n\nBy incorporating this consent management facility, we aim to empower you with control over your personal data, ensuring transparency and compliance with privacy regulations.`,
  },
  {
    title: "Data Breach Procedure and Reporting Time Period",
    content: `In the event of a data breach, we follow a stringent procedure to mitigate and address the incident promptly. Our response includes identifying the breach, containing its impact, assessing affected data, notifying relevant authorities, and communicating transparently with affected individuals. We conduct thorough investigations to understand the extent of the breach and implement corrective measures to prevent recurrence.\n\nAny detected data breach will be reported to relevant authorities and affected individuals within 72 hours of its identification, in compliance with applicable data protection regulations.`,
  },
  {
    title: "Data Protection Officer and Responsibilities",
    content: `A Data Protection Officer (DPO) is responsible for ensuring an organization's compliance with data protection regulations, such as GDPR.\n\nTheir responsibilities include advising on data protection impact assessments, monitoring compliance, acting as a point of contact for data subjects, and coordinating with regulatory authorities on data protection matters.`,
  },
  {
    title: "Changes in our Privacy Policy",
    content: `We reserve the right to modify this Privacy Policy at any time. If we decide to change our Privacy Policy, we will post those changes to this Privacy Policy and any other places we deem appropriate, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. If we make material changes to this Privacy Policy, we will notify you here, by email, or by means of a notice on our home page, at least thirty (30) days prior to the implementation of the changes.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions, concerns or complaints about our Privacy Policy, our practices, or our services please contact us.\n\nOur contact details for this purpose are:\n- Legal Name: Beaconer Inc.\n- DPO Name: Himanshu Joshi\n- Office Address: 6271 sam iorfida drive, Niagara Falls, L2G 0G9, Canada\n- Email: contact@beaconer.io`,
  },
];

const PrivacyPolicyPage = () => {
  return (
    <div className="w-full min-h-screen bg-white py-[130px] px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl lg:text-5xl font-bold text-gray-900 block leading-tight">
          Privacy Policy
        </h1>
        <div className="space-y-6 mt-8">
          {privacyCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col gap-4 border border-gray-200 transition-all duration-200 mb-6"
            >
              <h2 className="text-2xl font-medium text-gray-900 leading-tight">
                {card.title}
              </h2>
              <p className="text-gray-700 text-sm leading-6 whitespace-pre-line">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
