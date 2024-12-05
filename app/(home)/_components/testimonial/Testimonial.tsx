import { Button } from "@/components/ui/button";
import Image from "next/image";

const testimonials = [
  {
    image: "/assets/images/testimonial-placeholder-one.png",
    alt: "Modern interior with yellow accent chair and minimalist art",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Lectus nunc dui nunc massa est ipsum. Eget magna arcu sociis in.",
    author: "JASON MAYCE",
    project: "WHITE CASTLE",
  },
  {
    image: "/assets/images/testimonial-placeholder-two.png",
    alt: "Cream colored living room with circular wall decorations",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Lectus nunc dui nunc massa est ipsum. Eget magna arcu sociis in.",
    author: "JASON MAYCE",
    project: "WHITE CASTLE",
  },
  {
    image: "/assets/images/testimonial-placeholder-three.png",
    alt: "Luxurious marble bathroom with gold accents",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Lectus nunc dui nunc massa est ipsum. Eget magna arcu sociis in.",
    author: "JASON MAYCE",
    project: "WHITE CASTLE",
  },
];

export default function Testimonial() {
  return (
    <div className="bg-white w-full py-24">
      <div className="max-w-[1200px] mx-auto px-4 text-[#353D2B]">
        <h2 className="text-center font-bigilla font-bold text-4xl md:text-5xl mb-20 tracking-wide">
          WHAT OUR CLIENTS ARE SAYING
        </h2>

        <div className="space-y-32 font-libreFranklin">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-0`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={testimonial.image}
                  alt={testimonial.alt}
                  width={600}
                  height={400}
                  className="object-cover aspect-[4/3]"
                />
              </div>

              <div className="w-full md:w-1/2 md:relative">
                <div
                  className={`bg-[#f0f0f0] p-8 md:p-12 md:absolute ${
                    index % 2 === 0 ? "md:-ml-24" : "md:-mr-24"
                  } top-1/2 md:-translate-y-1/2`}
                >
                  <span className="font-bigilla font-bold text-8xl absolute left-6 top-4">
                    “
                  </span>
                  <p className="text-sm md:text-base leading-relaxed mb-8 mt-4 max-w-lg">
                    {testimonial.quote}
                  </p>
                  <span className="font-bigilla font-bold text-8xl absolute right-6 bottom-4 rotate-180">
                    “
                  </span>
                  <div className="text-xs uppercase tracking-wider">
                    <div className="font-medium">- {testimonial.author}</div>
                    <div className="text-gray-600 mt-1">
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Button
            variant="outline"
            className="bg-[#4A4F41] hover:bg-[#353D2B] text-white hover:text-white border-0 rounded-none px-8 py-6 text-sm tracking-wider uppercase transition-colors duration-300"
          >
            View All Reviews
          </Button>
        </div>
      </div>
    </div>
  );
}
