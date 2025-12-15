import React from "react";
import CourseHeroSection from "../Components/training/CourseHeroSection";
import TrainingBatchesTable from "../Components/training/TrainingBatchesTable";
import CourseOverviewSection from "../Components/training/CourseOverviewSection";
import {
  Shield,
  Terminal,
  TrendingUp,
  Building2,
  AlertTriangle,
  Users,
  Bell,
  Award
} from "lucide-react";
import DemandSection from "../Components/training/DemandSection";
import CurriculumSection from "../Components/training/CurriculumSection";
import RegistrationCTA from "../Components/training/RegistrationCTA";
import Footer from "../Components/Footer";

const batches = [
  {
    name: "SOC Fundamentals",
    level: "Beginner",
    startDate: "Feb 5, 2025",
    schedule: "3 hrs • Sat & Sun",
    price: "$1,199",
  },
  {
    name: "SOC Analyst - Evening",
    level: "Intermediate",
    startDate: "Feb 10, 2025",
    schedule: "1 hr • Mon-Thu • 5-6 PM",
    price: "$1,399",
  },
  {
    name: "Advanced SOC Operations",
    level: "Advanced",
    startDate: "Feb 20, 2025",
    schedule: "1 hr • Mon-Thu • 6:30-7:30 PM",
    price: "$1,599",
  },
  {
    name: "SOC Professional Weekend",
    level: "Advanced",
    startDate: "Mar 1, 2025",
    schedule: "3 hrs • Sat & Sun",
    price: "$1,599",
  },
  {
    name: "SOC Mastery - Late Evening",
    level: "Advanced",
    startDate: "Mar 10, 2025",
    schedule: "1 hr • Mon-Thu • 9-10 PM",
    price: "$1,799",
  },
  {
    name: "Complete SOC Bootcamp",
    level: "Advanced",
    startDate: "Mar 15, 2025",
    schedule: "3 hrs • Sat & Sun",
    price: "$1,799",
  },
];

const overviewFeatures = [
  {
    icon: Terminal,
    title: "Live Monitoring",
    description: "24/7 security event monitoring",
  },
  {
    icon: Bell,
    title: "Threat Detection",
    description: "Identify malicious activities",
  },
  {
    icon: Shield,
    title: "Incident Response",
    description: "Handle security breaches effectively",
  },
];

const trainingModules = [
  {
    title: "SOC Fundamentals",
    topics: [
      "Security Operations Center overview",
      "SOC roles and responsibilities",
      "Security frameworks and standards",
    ],
  },
  {
    title: "Threat Intelligence",
    topics: [
      "Threat intelligence lifecycle",
      "IOC and threat actor analysis",
      "Threat hunting methodologies",
    ],
  },
  {
    title: "Security Monitoring",
    topics: [
      "SIEM configuration and management",
      "Log analysis and correlation",
      "Detection rule engineering",
    ],
  },
  {
    title: "Incident Response",
    topics: [
      "Incident triage and prioritization",
      "Investigation and forensics",
      "Containment and remediation",
    ],
  },
];

const gains = [
  "Master SIEM tools and security monitoring platforms",
  "Develop threat hunting and detection engineering skills",
  "Learn incident response and digital forensics fundamentals",
  "Understand malware analysis and reverse engineering basics",
  "Prepare for SOC analyst interviews with mock sessions",
  "Build a portfolio demonstrating your security operations skills",
];

const demandCards = [
  {
    icon: TrendingUp,
    title: "High Salary Potential",
    description:
      "SOC analysts earn $70,000-$120,000+ annually, with senior roles exceeding $150,000.",
  },
  {
    icon: Building2,
    title: "Every Industry Needs SOC",
    description:
      "Finance, healthcare, tech, government—every sector needs security operations professionals.",
  },
  {
    icon: AlertTriangle,
    title: "Rising Cyber Threats",
    description:
      "With increasing cyber attacks, organizations are investing heavily in security operations.",
  },
  {
    icon: Users,
    title: "Skill Shortage",
    description:
      "The cybersecurity industry has millions of unfilled positions globally.",
  },
];

function Soc() {
  return (
    <div className=" bg-white relative z-1 thirdparty-page">
      <CourseHeroSection
        title={{
          main: "Security Operations Center",
          highlight: "Analyst Training",
        }}
        badge={{ text: "Advanced Level • 100 Hours • Instructor-Led Virtual", icon: Award }}
        description="Immersive, hands-on training to become a skilled SOC analyst. Master threat detection, incident response, and security monitoring with real-world scenarios."
        specs={{
          hours: "40 Hours",
          level: "Beginner",
          format: "Instructor-Led Virtual",
        }}
        batchInfo={{
          nextBatch: "Feb 5, 2025",
          seatsAvailable: "6",
          totalSeats: "18",
        }}
 
      />

      <TrainingBatchesTable
        title="Upcoming SOC Training Batches"
        batches={batches}
      />

      <CourseOverviewSection
        title="What is SOC Analyst Training?"
        description="A Security Operations Center (SOC) Analyst is the frontline defender against cyber threats. They monitor, detect, investigate, and respond to security incidents in real-time, protecting organizations from evolving cyber attacks using advanced security tools and methodologies."
        features={overviewFeatures}
      />

      <DemandSection
        title="Why SOC Analysts Are in High Demand"
        cards={demandCards}
      />

      <CurriculumSection modules={trainingModules} gains={gains} />

      <RegistrationCTA />
      <Footer />
    </div>
  );
}

export default Soc;
