import { LucideIcon } from "lucide-react";

const CourseOverviewSection = ({
  title,
  description,
  features,
  centerDescription = false
}) => {
  return (
    <section className="py-12 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-black">{title}</h2>
            <div className="w-20 h-1 bg-[#f76324] mx-auto mb-6"></div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 mb-8">
            <p
              className={`text-lg text-[#65758B] mb-6 leading-relaxed ${
                centerDescription ? "text-center" : ""
              }`}
            >
              {description}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-gradient-to-br from-[#f76324]/10 to-[#f76324]/5 rounded-2xl  border  !border-[#f76324]/20 hover:shadow-lg transition-all hover:scale-105"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f76324]/20 rounded-2xl mb-4">
                      <Icon className="h-8 w-8 text-[#f76324]" />
                    </div>
                    <h3 className="font-bold text-black mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#65758B]">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverviewSection;
