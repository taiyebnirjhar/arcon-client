"use client";

const steps = [
  {
    step: "01",
    description:
      "CLIENT WILL VISIT OUR OFFICE OR WE WILL HAVE AN ONLINE MEETING FOR A CONCEPTUAL PLAN",
  },
  {
    step: "02",
    description:
      "WE WILL VISIT THE PROJECT & WILL DO SPACE ANALYSIS, ACCORDING TO THE PLAN.",
  },
  {
    step: "03",
    description:
      "AFTER STEP 2, WE WILL DO 2D FURNITURE PLAN, ELECTRIC LAYOUT PLAN, & SANITARY PLAN, APPX BUDGET.",
  },
  {
    step: "04",
    description:
      "AS WE HAVE COMPLETED THE CONCEPTUAL PLAN, LAYOUTS & SPACE ANALYSIS WE WILL DO AN AGREEMENT BASED ON THE PLANNING",
  },
  {
    step: "05",
    description:
      "DESIGN STRATEGY & DEVELOPMENT WILL BE DONE, AND WE WILL PROVIDE 3D GRAPHICAL PRESENTATION OF THE DESIGN THAT IS PLANNED TO IMPLEMENT",
  },
  {
    step: "06",
    description:
      "WE WILL CHOOSE THE BEST MATERIALS FOR THE PROJECT & PROVIDE A FINAL BUDGET SUMMARY ACCORDING TO CLIENT'S REQUIREMENT.",
  },
];

const boldSubSentences = [
  "VISIT OUR OFFICE",
  "ONLINE MEETING",
  "SPACE ANALYSIS",
  "2D FURNITURE PLAN, ELECTRIC LAYOUT PLAN, & SANITARY PLAN, APPX BUDGET",
  "AGREEMENT",
  "3D GRAPHICAL PRESENTATION",
  "FINAL BUDGET SUMMARY",
];

export default function Works() {
  return (
    <div className="w-full text-[#353D2B]">
      <div className="relative bg-[#E9D21E] p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-20 md:divide-x-2 md:divide-dotted md:divide-black/20">
          {/* Title */}
          <div className="font-bigilla font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl leading-[1.1] tracking-tight mb-6 md:mb-0">
            <div className="mb-1">OUR WORK</div>
            <div>PROCEDURE</div>
          </div>

          {/* Steps */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 md:pl-8 lg:pl-12 xl:pl-20">
            {steps.map(({ step, description }, index) => (
              <div key={index} className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                  <span className="font-bigilla text-3xl sm:text-4xl md:text-5xl lg:text-6xl opacity-20">
                    {step}
                  </span>
                  <p
                    className="text-sm sm:text-base leading-tight pt-1 sm:pt-1.5 font-libreFranklin opacity-95"
                    dangerouslySetInnerHTML={{
                      __html: boldSubSentences.reduce(
                        (text, subSentence) =>
                          text.replace(
                            subSentence,
                            `<span class="font-semibold">${subSentence}</span>`
                          ),
                        description
                      ),
                    }}
                  />
                </div>
                {index < steps.length - 1 && (
                  <div className="border-b border-dotted border-black/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
