import { Button } from "@/components/ui/button";
import Image from "next/image";

const testimonials = [
  {
    image: "/placeholder.svg?height=400&width=600",
    alt: "Modern interior with yellow accent chair and minimalist art",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Lectus nunc dui nunc massa est ipsum. Eget magna arcu sociis in.",
    author: "JASON MAYCE",
    project: "WHITE CASTLE",
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    alt: "Cream colored living room with circular wall decorations",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Lectus nunc dui nunc massa est ipsum. Eget magna arcu sociis in.",
    author: "JASON MAYCE",
    project: "WHITE CASTLE",
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    alt: "Luxurious marble bathroom with gold accents",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Lectus nunc dui nunc massa est ipsum. Eget magna arcu sociis in.",
    author: "JASON MAYCE",
    project: "WHITE CASTLE",
  },
];

export default function Testimonial() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-center font-serif text-3xl mb-16 tracking-wider">
        WHAT OUR CLIENTS ARE SAYING
      </h2>

      <div className="relative space-y-24">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 ${
              index % 2 === 0 ? "justify-start" : "flex-row-reverse"
            }`}
          >
            <div className="relative w-1/2">
              <Image
                src={testimonial.image}
                alt={testimonial.alt}
                width={600}
                height={400}
                className="object-cover aspect-[3/2]"
              />
            </div>

            <div className="w-1/2 relative">
              <div className="bg-[#F5F5F5] p-8 max-w-md relative">
                <div className="text-4xl font-serif absolute -left-4 -top-4 text-gray-300">
                  &quot;
                </div>
                <p className="text-sm leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="text-4xl font-serif absolute -right-4 -bottom-4 text-gray-300">
                  &quot;
                </div>
                <div className="text-xs">
                  <div className="font-medium">- {testimonial.author}</div>
                  <div className="text-gray-500">{testimonial.project}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Button
          variant="outline"
          className="bg-[#4A4F41] hover:bg-[#3A3F31] text-white border-0 rounded-none px-8 py-2 text-sm tracking-wider"
        >
          View All Reviews
        </Button>
      </div>
    </div>
  );
}
