import React from "react";
import {
  Clock,
  BarChart3,
  Monitor,
  Calendar,
  UserCheck,
  Award,
} from "lucide-react";

const CourseHeroSection = ({
  badge,
  title,
  description,
  specs,
  batchInfo,
  footnote,
}) => {
  const BadgeIcon = badge?.icon || Award;

  return (
    <section className="pt-6 pb-12 md:pt-12 md:pb-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 mt-14">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-950/80 to-slate-900/90" />
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-950/30 via-transparent to-blue-950/30" />
      {/* Corner glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="container max-w-4xl mx-auto px-4 text-center relative z-10 ">
        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 text-[#f76324] rounded-full text-sm font-semibold mb-6 border border-orange-500/20 shadow-sm ">
            <BadgeIcon className="h-4 w-4" />
            {badge.text}
          </div>
        )}

        

        {/* Specs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-[#ffffffcc] border rounded-lg px-4 py-2 shadow-sm">
            <Clock className="h-5 w-5 text-[#f76324]" />
            <span className="text-sm font-semibold text-[#1d2530]">
              {specs.hours}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#ffffffcc] border rounded-lg px-4 py-2 shadow-sm">
            <BarChart3 className="h-5 w-5 text-[#f76324]" />
            <span className="text-sm font-semibold text-[#1d2530]">
              {specs.level}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#ffffffcc] border rounded-lg px-4 py-2 shadow-sm">
            <Monitor className="h-5 w-5 text-[#f76324]" />
            <span className="text-sm font-semibold text-[#1d2530]">
              {specs.format}
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {title.main} <span className="text-[#f76324]">{title.highlight}</span>
        </h1>

        {/* Description */}
        <p className="text-white text-lg max-w-2xl mx-auto mb-8">
          {description}
        </p>

        {/* Batch Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                      <div className="bg-[#f76324]/50 border-2 border-[#f76324] rounded-xl px-4 py-2.5 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent-foreground" />
                <div className="text-sm">
                  <div className="text-[#ffffffb3] font-medium">Next Batch</div>
                  <div className="text-accent-foreground font-semibold">{batchInfo.nextBatch}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#fff5f080]/50 border-2 border-[#fff5f080] rounded-xl px-4 py-2.5 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <UserCheck className="h-4 w-4 text-[#1d2530b3]" />
                <div className="text-sm">
                  <div className="text-[#1d2530b3] font-medium">Seats Available</div>
                  <div className="text-black font-semibold">{batchInfo.seatsAvailable} of {batchInfo.totalSeats} left</div>
                </div>
              </div>
            </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="bg-[#f76324] text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-orange-700 transition">
            Enroll Now
          </button>

          <button className=" inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md border-2 border-orange-500 bg-white text-black hover:bg-orange-500/10 hover:text-black text-base px-8 py-3.5 h-auto shadow-lg hover:shadow-xl transition-all font-semibold w-full sm:w-auto">
            Free Consultation
          </button>
        </div>

        {/* Footnote */}
        {footnote && (
          <p className="text-[#cbd5e1] text-sm max-w-xl mx-auto">{footnote}</p>
        )}
      </div>
    </section>
  );
};

export default CourseHeroSection;
