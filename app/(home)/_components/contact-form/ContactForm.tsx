import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <div className="bg-[#F5F5F5] w-full">
      <div className="max-w-3xl mx-auto px-4 py-16 bg-[#F5F5F5]">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl mb-4 tracking-wide">
            CONTACT FORM
          </h1>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Ready to explore our Full or Virtual Interior Design Services?
            Connect with our team by completing the form below, and we&apos;ll
            guide you towards the best solution for your space.
          </p>
        </div>

        <form className="space-y-8">
          {/* THE ESSENTIALS */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium text-gray-700">
              1. THE ESSENTIALS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">What type of design service?</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Full Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full">Full Service</SelectItem>
                  <SelectItem value="virtual">Virtual Design</SelectItem>
                  <SelectItem value="consultation">Consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* YOUR HOME */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium text-gray-700">2. YOUR HOME</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Project Location (City)</Label>
                <Input id="location" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="square-feet">
                  Square feet of home (Approx)
                </Label>
                <Input id="square-feet" type="number" required />
              </div>
            </div>
          </div>

          {/* BUDGET & TIMELINE */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium text-gray-700">
              3. BUDGET & TIMELINE
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Construction Budget (Approx)</Label>
                <Input id="budget" type="number" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Starting Timeframe</Label>
                  <Input id="start-date" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="completion-date">Completion Timeframe</Label>
                  <Input id="completion-date" type="date" required />
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT OBJECTIVES */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium text-gray-700">
              4. PROJECT OBJECTIVES
            </h2>
            <div className="space-y-2">
              <Label htmlFor="objectives">
                What is the main reason you would like to hire an interior
                designer?
              </Label>
              <Textarea id="objectives" rows={6} required />
            </div>
          </div>

          <div className="text-center">
            <Button
              type="submit"
              className="bg-[#4A4F41] hover:bg-[#3A3F31] text-white px-8 py-2 rounded-none"
            >
              Send Inquiry
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
