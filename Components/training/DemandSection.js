import { LucideIcon } from "lucide-react";

const DemandSection = ({ title, cards }) => {
  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-black">{title}</h2>
            <div className="w-20 h-1 bg-[#f76324] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f76324]/20 rounded-xl flex-shrink-0">
                      <Icon className="h-6 w-6 text-[#f76324]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">{card.title}</h3>
                      <p className="text-sm text-[#65758B]">{card.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemandSection;
