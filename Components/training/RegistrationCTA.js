import React from "react";
import { ArrowRight, Sparkles, Download } from "lucide-react";
import { Link } from "react-router-dom";


const RegistrationCTA = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-[#ff57241a]/10 via-white to-[#ff57240d ]/5 relative overflow-hidden " >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,119,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,119,0,0.05),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff57240d]/20 text-[#f76324] rounded-full text-sm font-semibold mb-6 border border-[#f76324]/30">
              <Sparkles className="h-4 w-4" />
              Limited Seats Available - Enroll Now!
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-black">
              Transform Your Life.
              <span className="block text-[#f76324] mt-2">
                Start Your Cybersecurity Journey Today.
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-[#65758B] mb-4 max-w-3xl mx-auto leading-relaxed">
              Don't let this opportunity pass. Join thousands who've
              successfully launched their cybersecurity careers with Beaconer
              Academy.
            </p>

            <p className="text-lg text-[#65758B] mb-10 max-w-2xl mx-auto">
              💼 Career support • 🎓 Industry certification • 🚀 Hands-on labs •
              💯 Job placement assistance
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a to="">
                <button
                  size="lg"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md bg-[#f76324] hover:bg-[#f76324]/90 text-white text-lg px-8 py-4 h-auto shadow-lg hover:shadow-[0_0_30px_rgba(255,119,0,0.4)] transition-all duration-300 hover:scale-105 font-bold"
                >
                  Register Now <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </a>
              <a to="/" target="_blank">
                <button
                  size="lg"
                  variant="outline"
                  className="justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-white hover:text-accent-foreground rounded-md border-2 border-[#f76324] text-black hover:bg-[#f76324]/5 text-lg px-8 py-4 h-auto flex items-center gap-2"
                >
                  <Download className="h-5 w-5" />
                  Download Brochure
                </button>
              </a>
            </div>

            <p className="text-sm text-[#65758B] mt-8">
              ✨ Early bird discount available • No hidden fees • Flexible
              payment options
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationCTA;
