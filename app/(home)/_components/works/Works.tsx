export default function Works() {
  return (
    <div className="w-full pb-32">
      <div className="relative bg-[#FFD700] p-12">
        <div className="grid grid-cols-2 gap-8">
          {/* Left column - Title */}
          <div className="font-serif text-3xl leading-tight">
            <div>OUR</div>
            <div>WORK</div>
            <div>PROCEDURE</div>
          </div>

          {/* Right column - Steps */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-start gap-4">
                <span className="font-serif text-xl">01</span>
                <p className="text-sm leading-tight">
                  CLIENT WILL VISIT OUR OFFICE OR WE WILL HAVE AN ONLINE MEETING
                  FOR A CONCEPTUAL PLAN
                </p>
              </div>
              <div className="border-b border-dotted border-black/30" />
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-4">
                <span className="font-serif text-xl">02</span>
                <p className="text-sm leading-tight">
                  WE WILL VISIT THE PROJECT & WILL DO SPACE ANALYSIS ACCORDING
                  TO THE PLAN
                </p>
              </div>
              <div className="border-b border-dotted border-black/30" />
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-4">
                <span className="font-serif text-xl">03</span>
                <p className="text-sm leading-tight">
                  AFTER STEP 2, WE WILL DO 2D FURNITURE PLAN, ELECTRIC LAYOUT
                  PLAN & SANITARY PLAN, APPX BUDGET
                </p>
              </div>
              <div className="border-b border-dotted border-black/30" />
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-4">
                <span className="font-serif text-xl">04</span>
                <p className="text-sm leading-tight">
                  AS WE HAVE COMPLETED THE CONCEPTUAL PLAN, LAYOUTS & SPACE
                  ANALYSIS WE WILL DO AN AGREEMENT BASED ON THE PLANNING
                </p>
              </div>
              <div className="border-b border-dotted border-black/30" />
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-4">
                <span className="font-serif text-xl">05</span>
                <p className="text-sm leading-tight">
                  DESIGN STRATEGY & DEVELOPMENT WILL BE DONE, AND WE WILL
                  PROVIDE 3D GRAPHICAL PRESENTATION OF THE DESIGN THAT IS
                  PLANNED TO IMPLEMENT
                </p>
              </div>
              <div className="border-b border-dotted border-black/30" />
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-4">
                <span className="font-serif text-xl">06</span>
                <p className="text-sm leading-tight">
                  WE WILL CHOOSE THE BEST MATERIALS FOR THE PROJECT & PROVIDE A
                  FINAL BUDGET SUMMARY ACCORDING TO CLIENT&apos;S REQUIREMENT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
