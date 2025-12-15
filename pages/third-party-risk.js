import React from "react";
import CourseHeroSection from "../Components/training/CourseHeroSection";
import TrainingBatchesTable from "../Components/training/TrainingBatchesTable";
import CourseOverviewSection from "../Components/training/CourseOverviewSection";
import {   Shield, 
  FileCheck, 
  TrendingUp,
  Building2,
  AlertTriangle,
  Users,
  Scale } from "lucide-react";
import DemandSection from "../Components/training/DemandSection";
import CurriculumSection from "../Components/training/CurriculumSection";
import RegistrationCTA from "../Components/training/RegistrationCTA";
import Footer from "../Components/Footer";


const batches = [
  {
    name: "TPRM Fundamentals",
    level: "Beginner",
    startDate: "Jan 15, 2025",
    schedule: "3 hrs • Sat & Sun",
    price: "$899",
  },
  {
    name: "TPRM Essentials - Evening",
    level: "Beginner",
    startDate: "Jan 20, 2025",
    schedule: "1 hr • Mon-Thu • 5-6 PM",
    price: "$899",
  },
  {
    name: "Advanced TPRM Practices",
    level: "Intermediate",
    startDate: "Feb 1, 2025",
    schedule: "1 hr • Mon-Thu • 6:30-7:30 PM",
    price: "$1,199",
  },
  {
    name: "TPRM for Professionals",
    level: "Intermediate",
    startDate: "Feb 10, 2025",
    schedule: "3 hrs • Sat & Sun",
    price: "$1,199",
  },
  {
    name: "TPRM Mastery - Late Evening",
    level: "Advanced",
    startDate: "Feb 15, 2025",
    schedule: "1 hr • Mon-Thu • 9-10 PM",
    price: "$1,499",
  },
  {
    name: "Complete TPRM Bootcamp",
    level: "Advanced",
    startDate: "Mar 1, 2025",
    schedule: "3 hrs • Sat & Sun",
    price: "$1,499",
  },
];

const overviewFeatures = [
  {
    icon: Shield,
    title: "Protect Your Data",
    description: "Ensure vendors handling your information follow strong Security practices.",
  },
  {
    icon: FileCheck,
    title: "Stay Compliant",
    description: "Meet regulatory requirements by maintaining proper vendor oversight.",
  },
  {
    icon: Scale,
    title: "Reduce Business Risk",
    description: "Minimize operational and financial risks from third-party relationships.",
  },
];

const trainingModules = [
    {
      title: "Fundamentals",
      topics: [
        "Introduction to TPRM and how vendor ecosystems work",
        "Understanding inherent risk and why it matters",
        "How to classify vendors based on data access, criticality, and business impact"
      ]
    },
    {
      title: "Vendor Assessment",
      topics: [
        "How to review Security questionnaires effectively",
        "How to analyze SOC 2 reports and identify gaps",
        "How to evaluate vendor controls (IAM, BCP, cloud, encryption, incident response, etc.)",
        "How to write findings and score residual risk the way real TPRM teams do"
      ]
    },
    {
      title: "Ongoing Monitoring",
      topics: [
        "How to perform annual/periodic vendor reviews",
        "Tracking open issues and vendor remediations",
        "Understanding continuous monitoring indicators (alerts, changes, risk triggers)"
      ]
    },
    {
      title: "Incident Handling (TPRM Perspective)",
      topics: [
        "What to do when a vendor gets breached",
        "How TPRM analysts communicate issues internally",
        "How to document impact, raise risks, and support vendor remediation"
      ]
    }
  ];

  const gains = [
    "Practical skills to assess vendor risks using real-world methods",
    "Ability to read, interpret, and score SOC 2 reports confidently",
    "Confidence answering scenario-based TPRM interview questions",
    "Hands-on experience with questionnaires, scoring, and documentation",
    "Interview preparation and mock interviews with TPRM professionals",
    "Career-ready portfolio demonstrating TPRM assessment capabilities"
  ];


  const demandCards = [
    { icon: TrendingUp, title: "High Salary Potential", description: "TPRM professionals earn $80,000-$130,000+, with senior roles exceeding $160,000." },
    { icon: Building2, title: "Regulatory Requirements", description: "Banks, healthcare, and enterprises must maintain vendor risk programs by law." },
    { icon: AlertTriangle, title: "Supply Chain Attacks Rising", description: "63% of breaches involve third parties—companies are investing heavily in TPRM." },
    { icon: Users, title: "Growing Field", description: "TPRM teams are expanding as organizations rely on more vendors and cloud services." }
  ];

function Thirdpartyrisk() {
  return (
    <div className=" bg-white relative z-1 thirdparty-page">
      <CourseHeroSection
        title={{ main: "Third-Party", highlight: "Risk Management" }}
        description="Master vendor risk assessments, understand third-party risks, evaluate security controls, and confidently perform end-to-end TPRM activities used in real organizations."
        specs={{
          hours: "40 Hours",
          level: "Beginner",
          format: "Instructor-Led Virtual",
        }}
        batchInfo={{
          nextBatch: "Jan 15, 2025",
          seatsAvailable: "8",
          totalSeats: "25",
        }}
        footnote="This training is designed for beginners, career changers, and security professionals who want practical, job-ready TPRM skills."
      />

      <TrainingBatchesTable
        title="Upcoming TPRM Training Batches"
        batches={batches}
      />

      <CourseOverviewSection
        title="What is Third-Party Risk Management?"
        description="Third-Party Risk Management (TPRM) is the systematic process of identifying, assessing, and mitigating risks associated with external vendors, suppliers, and service providers who have access to your organization's data, systems, or operations."
        features={overviewFeatures}
      />

        <DemandSection
        title="Why TPRM is in High Demand"
        cards={demandCards}
      />

         <CurriculumSection
        modules={trainingModules}
        gains={gains}
      />

      <RegistrationCTA/>
      <Footer/>


    </div>
  );
}

export default Thirdpartyrisk;
