import { CheckCircle2, Target, BookOpen } from "lucide-react";

const CurriculumSection = ({ modules, gains }) => {
  return (
    <section className="py-12 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-black">Training Content</h2>
            <div className="w-20 h-1 bg-[#f76324] mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Training Modules */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f76324]/20 rounded-xl">
                  <BookOpen className="h-6 w-6 text-[#f76324]" />
                </div>
                <h3 className="text-2xl font-bold text-black">What You'll Learn</h3>
              </div>

              <div className="space-y-6">
                {modules.map((module, index) => (
                  <div key={index} className="border-l-4 border-[#f76324]/30 pl-4">
                    <h4 className="font-bold text-black mb-2">{module.title}</h4>
                    <ul className="space-y-1">
                      {module.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="text-sm text-[#65758B] flex items-start gap-2"
                        >
                          <span className="text-[#f76324] mt-1">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* What You'll Gain */}
            <div className="bg-gradient-to-br from-[#f76324]/10 to-[#f76324]/5 border !border-[#f76324]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f76324]/20 rounded-xl">
                  <Target className="h-6 w-6 text-[#f76324]" />
                </div>
                <h3 className="text-2xl font-bold text-black">What You'll Gain</h3>
              </div>

              <ul className="space-y-4">
                {gains.map((gain, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#f76324] mt-0.5 flex-shrink-0" />
                    <span className="text-[#65758B]">{gain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
