export default function VisitOurOffice() {
  return (
    <div className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center divide-x divide-gray-200">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex-1 px-4 py-3 text-center">
            <span className="text-[#9CA3AF] text-xs tracking-wider font-light">
              VISIT OUR OFFICE
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
