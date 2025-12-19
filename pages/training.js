import { useState } from "react";
import React from "react";
import {
  ArrowRight,
  Award,
  Users,
  Clock,
  CheckCircle2,
  BarChart3,
  Monitor,
  Shield,
  Lock,
  Network,
  Eye,
  FileKey,
  Database,
} from "lucide-react";
import Image from "next/image";
import {
  tprmcourse,
  compliancecourse,
  soccourse,
  cloudsecuritycourse,
  beginnersfriendly,
  interactivelearning,
  handsonlab,
  interviewprep,
  hero_woman,
} from "../Utils/images";

import RegistrationCTA from "../Components/training/RegistrationCTA";
import Footer from "../Components/Footer";

export default function training() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const features = [
    { icon: Users, title: "Built for Complete Beginners" },
    { icon: Monitor, title: "Live Interactive Sessions" },
    { icon: CheckCircle2, title: "Beginner-Friendly Approach" },
    { icon: Award, title: "Hands-On Practical Learning" },
    { icon: Clock, title: "Flexible Schedule" },
    { icon: Shield, title: "Personalized Mentorship" },
    { icon: FileKey, title: "Interview & Career Support" },
    { icon: Database, title: "Access to Recorded Sessions" },
  ];

  const staticCourses = [
    {
      title: "Third-Party Risk Management",
      description:
        "Master vendor risk assessment, compliance frameworks, and risk mitigation strategies from the ground up.",
      link: "/third-party-risk",
      image: tprmcourse,
      duration: "40 hours",
      level: "Beginner",
      mode: "Instructor-Led Virtual",
    },
    {
      title: "GRC & Compliance",
      description:
        "Learn regulatory frameworks, audit processes, and governance, risk, and compliance management essentials.",
      link: "/compliance",
      image: compliancecourse,
      duration: "70 hours",
      level: "Intermediate",
      mode: "Instructor-Led Virtual",
    },
    {
      title: "Security Operations Centre (SOC)",
      description:
        "Hands-on training in threat detection, incident response, and security monitoring operations.",
      link: "/soc",
      image: soccourse,
      duration: "100 hours",
      level: "Advanced",
      mode: "Instructor-Led Virtual",
    },
    {
      title: "Cloud Security Architecture",
      description:
        "Design and implement secure cloud infrastructures across AWS, Azure, and GCP platforms.",
      link: "/cloud-security",
      image: cloudsecuritycourse,
      duration: "80 hours",
      level: "Intermediate",
      mode: "Instructor-Led Virtual",
    },
  ];
  console.log(staticCourses);

  return (
    <div className="bg-white relative z-1 training-page">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src=""
            alt="Cybersecurity Training"
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-950/80 to-slate-900/90" />
          <div className="absolute inset-0 bg-gradient-to-tl from-orange-950/30 via-transparent to-blue-950/30" />
          {/* Corner glows */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 items-start">
            <div className="pt-8">
              <div className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-semibold mb-6 border border-orange-500/20">
                A Beaconer Initiative
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                Start your cybersecurity career,{" "}
                <span className="text-orange-500">
                  completely from scratch.
                </span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed mb-10 text-slate-200">
                Built to help you confidently clear interviews and begin working
                in a Information Security roles from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  size="lg"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md bg-[#f76324] hover:bg-orange-700 text-white text-base px-6 py-3 h-auto w-full sm:w-auto"
                >
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  size="lg"
                  variant="outline"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md border-2 border-orange-500 bg-white text-black hover:bg-orange-500/10 hover:text-black text-base px-6 py-3 h-auto"
                  onClick={() => setIsConsultationOpen(true)}
                >
                  Free Consultation
                </button>
              </div>

              <div className="mt-12">
                <p className="text-base md:text-lg leading-relaxed text-slate-200 mb-4">
                  Training you through practical GRC concepts and real-life
                  scenarios to help you transition smoothly into Information
                  Security roles from day one.
                </p>

                <p className="text-base md:text-lg font-semibold text-white mb-3 mt-8">
                  Focused on:
                </p>

                <ul className="space-y-4 mb-4">
                  <li className="flex items-start gap-3 text-slate-200">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-orange-400 flex-shrink-0" />
                    <span>How real security teams operate</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-200">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-orange-400 flex-shrink-0" />
                    <span>What actually happens in a Cybersecurity role</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-200">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-orange-400 flex-shrink-0" />
                    <span>What hiring managers look for</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-200">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-orange-400 flex-shrink-0" />
                    <span>Hands-on, real-world experience</span>
                  </li>
                </ul>

                <p className="text-base md:text-lg font-semibold text-orange-400">
                  Small batches. Personal mentorship.
                </p>
              </div>
            </div>

            {/* Success Story Image */}
            <div className="hidden lg:block relative mt-20">
              <div className="space-y-4">
                {/* Student Image */}
                <Image
                  src={hero_woman}
                  alt="Success Story"
                  className="w-full h-[500px] object-contain object-top"
                />
                {/* Testimonial Card Below */}
                <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 shadow-2xl">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-orange-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-white mb-3 italic">
                    "Beaconer helped me transition from a non-tech background to
                    cybersecurity. The hands-on training and mentorship made all
                    the difference!"
                  </p>
                  <div>
                    <p className="font-bold text-white text-sm">
                      Sarah Mitchell
                    </p>
                    <p className="text-xs text-slate-300">
                      Former Teacher → SOC Analyst
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 relative z-1">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#f76324] mb-3">
                $120K
              </div>
              <p className="text-[#65758B] text-sm md:text-base">
                Average Salary for Cybersecurity roles
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#f76324] mb-3">
                4M+
              </div>
              <p className="text-[#65758B] text-sm md:text-base">
                Unfilled cybersecurity positions globally - More demand
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#f76324] mb-3">
                18+
              </div>
              <p className="text-[#65758B] text-sm md:text-base">
                Years average Cybersecurity experience of Beaconer Trainers
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#f76324] mb-3">
                20+
              </div>
              <p className="text-[#65758B] text-sm md:text-base">
                Countries - Learners from across the world trained through
                Beaconer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Why <span className="text-[#f76324]">Beaconer Academy</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const isHighlight = index % 4 === 0 || index % 4 === 3;

              return (
                <div
                  key={index}
                  className={`group p-6 md:p-8 rounded-2xl border transition-all duration-500 animate-fade-in cursor-pointer ${
                    isHighlight
                      ? "bg-gradient-to-br from-[#ff57240d]/5 via-white to-[#ff57241a]/10   border-[#f76324]/30 hover:from-[#ff57240d]/10 hover:via-[#f76324]/5 hover:to-[#ff57241a]/15"
                      : "bg-card/50 backdrop-blur-sm  border-border hover:bg-card"
                  } hover:scale-105 hover:shadow-[0_10px_40px_rgba(255,119,0,0.25)] hover:border-[#f76324]/60 hover:-translate-y-1`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl mb-4 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                      isHighlight
                        ? "bg-gradient-to-br from-[#f76324] to-[#f76324]"
                        : "bg-gradient-to-br from-[#f76324]/80 to-[#f76324]/60"
                    }`}
                  >
                    <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-white transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-base md:text-lg font-semibold transition-colors duration-300 ${
                      isHighlight
                        ? "text-[#f76324]"
                        : "text-[#1d2530] group-hover:text-[#f76324]"
                    }`}
                  >
                    {feature.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Our Training Programs
            </h2>
            <p className="text-xl text-[#65758B] max-w-2xl mx-auto">
              Comprehensive courses designed by industry experts to prepare you
              for real-world challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {staticCourses.map((course, index) => (
              <a
                key={index}
                href={course.link}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#f76324]/50"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-[#f76324]/10 text-[#f76324] text-sm rounded-full border border-[#f76324] flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {course.duration}
                      </span>

                      <span className="px-3 py-1 bg-[#f76324]/10 text-black text-sm rounded-full flex items-center gap-1.5">
                        <BarChart3 className="h-3.5 w-3.5" />
                        {course.level}
                      </span>
                    </div>

                    <span className="px-3 py-1 bg-[#f76324] text-white text-sm rounded-full whitespace-nowrap flex items-center gap-1.5">
                      <Monitor className="h-3.5 w-3.5" />
                      {course.mode}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-black group-hover:text-[#f76324] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-[#65758B] mb-4">{course.description}</p>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 bg-[#f76324] hover:bg-[#f76324]/90 text-white flex-1 py-2">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </button>

                    <button
                      variant="outline"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background hover:text-accent-foreground h-11 rounded-md px-8 border-2 border-[#f76324] text-black hover:bg-[#f76324]/5 flex-1 py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsConsultationOpen(true);
                      }}
                    >
                      Free Consultation
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Designed for Beginners. Built for Success.
            </h2>
          </div>
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Feature 1 - Created for Complete Beginners */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src={beginnersfriendly}
                  alt="Created for Complete Beginners"
                  className="rounded-2xl shadow-2xl border border-border"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-6 text-black">
                  Created for Complete Beginners
                </h3>
                <p className="text-lg text-[#65758B] mb-6">
                  Starting from zero? Perfect. Our training provides a
                  beginner-friendly path into cybersecurity with no prior
                  experience needed.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#f76324] flex-shrink-0" />
                    <span className="text-[#65758B]">
                      Step-by-step guidance from the very fundamentals
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#f76324] flex-shrink-0" />
                    <span className="text-[#65758B]">
                      Supportive community of fellow beginners
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#f76324] flex-shrink-0" />
                    <span className="text-[#65758B]">
                      Structured roadmap to become job-ready
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2 - Live Interactive Learning */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-black">
                  Live, Interactive Learning
                </h3>
                <p className="text-lg text-[#65758B] mb-6">
                  This isn't pre-recorded content. Learn through live, two-way
                  sessions where you can ask questions and get real-time
                  answers.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#f76324] flex-shrink-0" />
                    <span className="text-[#65758B]">
                      Live Q&A with industry professionals
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#f76324] flex-shrink-0" />
                    <span className="text-[#65758B]">
                      Real-time clarification of doubts
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#f76324] flex-shrink-0" />
                    <span className="text-[#65758B]">
                      Interactive walkthroughs and exercises after each lesson
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src={interactivelearning}
                  alt="Live Interactive Learning"
                  className="rounded-2xl shadow-2xl border border-border"
                />
              </div>
            </div>

            {/* Feature 3 - Hands-On Labs */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src={handsonlab}
                  alt="Hands-On Labs"
                  className="rounded-2xl shadow-2xl border border-border"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-6 text-black">
                  Full Hands-On Labs
                </h3>
                <p className="text-lg text-[#65758B] mb-6">
                  You learn by doing. Our labs give you access to real tools and
                  simulations used in the industry.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#f76324] flex-shrink-0" />
                    <span className="text-[#65758B]">
                      Unlimited access to lab environment
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#f76324] flex-shrink-0" />
                    <span className="text-[#65758B]">
                      Industry-standard tools and platforms
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#f76324] flex-shrink-0" />
                    <span className="text-[#65758B]">
                      Realistic TPRM/GRC simulations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#f76324] flex-shrink-0" />
                    <span className="text-[#65758B]">
                      Safe, guided environment to experiment
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 4 - Interview & Career Support */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-black">
                  Interview & Career Success Support
                </h3>
                <p className="text-lg text-[#65758B] mb-6">
                  Cybersecurity is one of the highest-paid and most in-demand
                  fields globally. We prepare you to land your first role.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#f76324] flex-shrink-0" />
                    <span className="text-[#65758B]">
                      Mock interviews with industry professionals
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#f76324] flex-shrink-0" />
                    <span className="text-[#65758B]">
                      Resume and LinkedIn optimization for TPRM & GRC roles
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#f76324] flex-shrink-0" />
                    <span className="text-[#65758B]">
                      Technical interview preparation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#f76324] flex-shrink-0" />
                    <span className="text-[#65758B]">
                      Career guidance for landing your first role
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src={interviewprep}
                  alt="Interview & Career Support"
                  className="rounded-2xl shadow-2xl border border-border"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RegistrationCTA Section */}
      <RegistrationCTA />

      <Footer />
    </div>
  );
}
