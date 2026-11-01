import { Footer } from "@/components/Chrome";
import Hero from "@/components/Hero";
import Milestone from "@/components/Milestone";
import Partners from "@/components/Partners";
import Events from "@/components/Events";
import Trustees from "@/components/Trustees";
import Testimonials from "@/components/Testimonials";

export default function Page() {
  return (
    <main>
      <Hero />
      <Milestone />
      <Partners />
      <Events />
      <Trustees />
      <Testimonials />
      <span id="apply" />
      <Footer />
    </main>
  );
}