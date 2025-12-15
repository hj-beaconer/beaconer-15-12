import React from "react";
import CourseHeroSection from "../Components/training/CourseHeroSection";
import TrainingBatchesTable from "../Components/training/TrainingBatchesTable";
import CourseOverviewSection from "../Components/training/CourseOverviewSection";
import {
  Shield,
  Lock,
  TrendingUp,
  Building2,
  AlertTriangle,
  Users,
  Scale,
} from "lucide-react";
import DemandSection from "../Components/training/DemandSection";
import CurriculumSection from "../Components/training/CurriculumSection";
import RegistrationCTA from "../Components/training/RegistrationCTA";
import Footer from "../Components/Footer";

const batches = [
  {
    name: "GRC Fundamentals",
    level: "Beginner",
    startDate: "Jan 22, 2025",
    schedule: "3 hrs • Sat & Sun",
    price: "$949",
  },
  {
    name: "Compliance Essentials - Evening",
    level: "Beginner",
    startDate: "Jan 28, 2025",
    schedule: "1 hr • Mon-Thu • 5-6 PM",
    price: "$949",
  },
  {
    name: "Advanced GRC Practices",
    level: "Intermediate",
    startDate: "Feb 8, 2025",
    schedule: "1 hr • Mon-Thu • 6:30-7:30 PM",
    price: "$1,249",
  },
  {
    name: "GRC Professional Weekend",
    level: "Intermediate",
    startDate: "Feb 15, 2025",
    schedule: "3 hrs • Sat & Sun",
    price: "$1,249",
  },
  {
    name: "Compliance Mastery - Late Evening",
    level: "Advanced",
    startDate: "Feb 25, 2025",
    schedule: "1 hr • Mon-Thu • 9-10 PM",
    price: "$1,549",
  },
  {
    name: "Complete GRC Bootcamp",
    level: "Advanced",
    startDate: "Mar 5, 2025",
    schedule: "3 hrs • Sat & Sun",
    price: "$1,549",
  },
];

const overviewFeatures = [
  {
    icon: Scale,
    title: "Set Clear Direction",
    description:
      "Create and manage policies, procedures, and standards across the organization.",
  },
  {
    icon: Shield,
    title: "Reduce Business & Security Risks",
    description:
      "Identify risks early and recommend controls to protect the business.",
  },
  {
    icon: Lock,
    title: "Stay Compliant & Audit-Ready",
    description:
      "Help meet frameworks by building structured controls and documentation.",
  },
];

const trainingModules = [
  {
    title: "GRC Fundamentals",
    topics: [
      "Introduction to Governance, Risk & Compliance and how GRC supports secure business operations",
      "Overview of major frameworks: ISO 27001, SOC 2, PCI DSS, SOX ITGC, BCP & DR",
      "How GRC programs are structured and maintained within organizations",
    ],
  },
  {
    title: "Risk Management",
    topics: [
      "How to perform organizational risk assessments using real frameworks",
      "How to identify, analyse, and score risks across security and operations",
      "How to create risk treatment plans aligned with business needs",
      "Basics of continuous monitoring and maintaining risk registers",
    ],
  },
  {
    title: "Compliance & Audit",
    topics: [
      "How to implement and manage ISO 27001 controls and documentation",
      "How SOC 2 Type I & II audits work and how to prepare evidence",
      "Understanding PCI DSS and SOX ITGC control requirements",
      "How to identify compliance gaps and build practical remediation plans",
    ],
  },
  {
    title: "Controls & Monitoring",
    topics: [
      "How to design, map, and test controls for ISO 27001, SOC 2, PCI DSS, SOX ITGC",
      "How to monitor compliance and measure control effectiveness",
      "Introduction to GRC tools for automation, evidence collection, and reporting",
      "How to communicate risks, control gaps, and findings to stakeholders",
    ],
  },
];

const gains = [
  "Practical skills to implement ISO 27001, SOC 2, PCI DSS, and SOX ITGC frameworks",
  "Ability to perform risk assessments and build treatment plans",
  "Confidence answering scenario-based GRC interview questions",
  "Hands-on experience with audit preparation, evidence collection, and testing",
  "Interview preparation and mock interviews with GRC professionals",
  "Career-ready portfolio demonstrating your GRC/audit/risk skills",
];

const demandCards = [
  {
    icon: TrendingUp,
    title: "High Salary Potential",
    description:
      "GRC professionals earn $85,000-$140,000+, with senior roles exceeding $180,000.",
  },
  {
    icon: Building2,
    title: "Mandatory for Enterprises",
    description:
      "Every regulated company needs GRC—finance, healthcare, tech, and government.",
  },
  {
    icon: AlertTriangle,
    title: "Increasing Regulations",
    description:
      "New privacy laws and security requirements are driving massive GRC demand.",
  },
  {
    icon: Users,
    title: "Skill Shortage",
    description:
      "Organizations struggle to find qualified GRC professionals—demand far exceeds supply.",
  },
];

function Compliance() {
  return (
    <div className=" bg-white relative z-1 thirdparty-page">
      <CourseHeroSection
        title={{
          main: "Governance, Risk and",
          highlight: "Compliance Training",
        }}
        description="Learn the core principles of Governance, Risk, and Compliance and gain the practical skills to implement and support real-world security programs. This training covers ISO 27001, SOC 2, PCI DSS, SOX ITGC, and Business Continuity — giving you the knowledge and confidence to work in GRC roles from Day 1.

"
        specs={{
          hours: "40 Hours",
          level: "Beginner",
          format: "Instructor-Led Virtual",
        }}
        batchInfo={{
          nextBatch: "Jan 22, 2025",
          seatsAvailable: "15 ",
          totalSeats: "30 ",
        }}
        footnote="This training is built for beginners, career changers, and Security professionals who want practical, job-ready GRC skills used in real organizations.

"
      />

      <TrainingBatchesTable
        title="Upcoming GRC/Compliance Training Batches
"
        batches={batches}
      />

      <CourseOverviewSection
        title="What is Governance, Risk, and Compliance (GRC)?"
        description="Governance, Risk, and Compliance (GRC) is how organizations make sure their processes, security controls, and operations are aligned, protected, and audit-ready. It brings together the structure of governance, the awareness of risk, and the discipline of compliance to help companies operate securely and confidently.

"
        features={overviewFeatures}
      />

      <DemandSection title="Why GRC is in High Demand" cards={demandCards} />

      <CurriculumSection modules={trainingModules} gains={gains} />

      <RegistrationCTA />
      <Footer />
    </div>
  );
}

export default Compliance;
