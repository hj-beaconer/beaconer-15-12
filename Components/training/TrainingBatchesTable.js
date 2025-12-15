// NEXT.JS VERSION (NO TYPESCRIPT)

// Level badge styles
const getLevelStyles = (level) => {
  switch (level) {
    case "Beginner":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    case "Intermediate":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
    case "Advanced":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
    default:
      return "";
  }
};

const TrainingBatchesTable = ({
  title,
  subtitle = "Choose a schedule that works best for you",
  batches = [],
  footerText = "All prices are in USD. Limited seats available for each batch."
}) => {
  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-background border-y border-border relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">
              {title}
            </h2>
            <p className="text-[#65758B]">{subtitle}</p>
          </div>

          {/* Table */}
          <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#f76324]/10 border-b-2 border-[#f76324]/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-black">Training Name</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-black">Level</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-black">Start Date</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-black">Schedule</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-black">Price</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-black">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border">
                  {batches.map((batch, index) => (
                    <tr key={index} className="hover:bg-[#f76324]/5 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-[#1d2530]">{batch.name}</td>

                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getLevelStyles(batch.level)}`}>
                          {batch.level}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm text-[#65758B]">{batch.startDate}</td>
                      <td className="px-6 py-4 text-sm text-[#65758B]">{batch.schedule}</td>

                      <td className="px-6 py-4 text-right text-sm font-semibold text-[#f76324]">
                        {batch.price}
                      </td>

                      <td className="px-6 py-4 text-center">
                        <a href="/training/register">
                          <button size="sm" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md px-3 bg-[#f76324] hover:bg-orange-700 text-white">
                            Enroll
                          </button>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

            {/* Footer notice */}
            <div className="bg-[#f76324]/5 px-6 py-4 border-t border-border">
              <p className="text-sm text-[#65758B] text-center">
                {footerText}
                <span className="text-[#f76324] font-semibold ml-1">
                  Early bird discount available!
                </span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingBatchesTable;
