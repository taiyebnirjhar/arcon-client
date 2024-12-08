import Image from "next/image";

export default function SubFooter() {
  return (
    <div className="bg-[#F5F5F5] w-full h-auto ">
      <Image
        src={"/assets/images/sub-footer.png"}
        alt="sub-footer"
        width={1280}
        height={100}
        className="w-full object-cover"
      />
    </div>
  );
}
