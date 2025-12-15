import React from "react";
import CourseHeroSection from "../Components/training/CourseHeroSection";
import TrainingBatchesTable from "../Components/training/TrainingBatchesTable";
import CourseOverviewSection from "../Components/training/CourseOverviewSection";
import {
  Cloud,
  Lock,
  TrendingUp,
  Building2,
  AlertTriangle,
  Users,
  Shield,
  Award
} from "lucide-react";
import DemandSection from "../Components/training/DemandSection";
import CurriculumSection from "../Components/training/CurriculumSection";
import RegistrationCTA from "../Components/training/RegistrationCTA";
import Footer from "../Components/Footer";

const batches = [
  {
    name: "Cloud Security Fundamentals",
    level: "Beginner",
    startDate: "Feb 1, 2025",
    schedule: "3 hrs • Sat & Sun",
    price: "$999",
  },
  {
    name: "AWS Security Essentials - Evening",
    level: "Intermediate",
    startDate: "Feb 8, 2025",
    schedule: "1 hr • Mon-Thu • 5-6 PM",
    price: "$1,299",
  },
  {
    name: "Advanced Cloud Security",
    level: "Advanced",
    startDate: "Feb 18, 2025",
    schedule: "1 hr • Mon-Thu • 6:30-7:30 PM",
    price: "$1,499",
  },
  {
    name: "Multi-Cloud Security Weekend",
    level: "Advanced",
    startDate: "Mar 1, 2025",
    schedule: "3 hrs • Sat & Sun",
    price: "$1,499",
  },
  {
    name: "Cloud Security Mastery - Late Evening",
    level: "Advanced",
    startDate: "Mar 8, 2025",
    schedule: "1 hr • Mon-Thu • 9-10 PM",
    price: "$1,699",
  },
  {
    name: "Complete Cloud Security Bootcamp",
    level: "Advanced",
    startDate: "Mar 15, 2025",
    schedule: "3 hrs • Sat & Sun",
    price: "$1,699",
  },
];

const overviewFeatures = [
  {
    icon: Cloud,
    title: "Multi-Cloud Expertise",
    description: "Secure AWS, Azure, and GCP platforms",
  },
  {
    icon: Lock,
    title: "Zero Trust Architecture",
    description: "Implement modern security models",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Meet cloud regulatory requirements",
  },
];

const trainingModules = [
  {
    title: "Cloud Fundamentals",
    topics: [
      "Cloud computing models (IaaS, PaaS, SaaS)",
      "Major cloud providers (AWS, Azure, GCP)",
      "Cloud architecture and design principles",
    ],
  },
  {
    title: "Security Architecture",
    topics: [
      "Identity and Access Management (IAM)",
      "Network security and segmentation",
      "Data encryption and key management",
    ],
  },
  {
    title: "Compliance & Governance",
    topics: [
      "Cloud compliance frameworks",
      "Security policies and controls",
      "Audit and monitoring strategies",
    ],
  },
  {
    title: "Threat Management",
    topics: [
      "Cloud-specific threat vectors",
      "Incident response in cloud environments",
      "Security automation and DevSecOps",
    ],
  },
];

const gains = [
  "Master security across AWS, Azure, and GCP cloud platforms",
  "Implement zero-trust architecture and modern security models",
  "Configure cloud-native security tools and automation",
  "Understand compliance requirements for cloud environments",
  "Prepare for cloud security certifications and interviews",
  "Build a portfolio demonstrating multi-cloud security skills",
];

const demandCards = [
  {
    icon: TrendingUp,
    title: "High Salary Potential",
    description:
      "Cloud security engineers earn $100,000-$160,000+, with senior roles exceeding $200,000.",
  },
  {
    icon: Building2,
    title: "Cloud-First World",
    description:
      "94% of enterprises use cloud services—every organization needs cloud security experts.",
  },
  {
    icon: AlertTriangle,
    title: "Data Protection Priority",
    description:
      "With data breaches costing millions, companies invest heavily in cloud security talent.",
  },
  {
    icon: Users,
    title: "Massive Skill Gap",
    description:
      "Cloud security is the fastest-growing area in cybersecurity with severe talent shortages.",
  },
];

function Cloudsecurity() {
  return (
    <div className=" bg-white relative z-1 thirdparty-page">
      <CourseHeroSection
        title={{
          main: "Cloud Security",
          highlight: "Mastery Training",
        }}
        badge={{ text: "Intermediate Level • 80 Hours • Instructor-Led Virtual", icon: Award }}
        description="Master cloud security across AWS, Azure, and GCP. Learn to secure cloud infrastructure, implement compliance controls, and manage cloud-native security tools."
        specs={{
          hours: "40 Hours",
          level: "Beginner",
          format: "Instructor-Led Virtual",
        }}
        batchInfo={{
          nextBatch: "Feb 1, 2025",
          seatsAvailable: "12",
          totalSeats: "20",
        }}
      />

      <TrainingBatchesTable
        title="Upcoming Cloud Security Training Batches"
        batches={batches}
      />

      <CourseOverviewSection
        title="What is Cloud Security?"
        description="Cloud Security encompasses the policies, technologies, applications, and controls utilized to protect data, applications, and infrastructure in cloud computing environments. It's a shared responsibility between cloud providers and customers."
        features={overviewFeatures}
      />

      <DemandSection
        title="Why Cloud Security is in High Demand"
        cards={demandCards}
      />

      <CurriculumSection modules={trainingModules} gains={gains} />

      <RegistrationCTA />
      <Footer />
    </div>
  );
}

export default Cloudsecurity;
