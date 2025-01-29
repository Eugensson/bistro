import { Hero } from "@/components/hero";
import { Menu } from "@/components/menu";
import { Team } from "@/components/team";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Testimonial } from "@/components/testimonial";
import { Reservation } from "@/components/reservation";

const Homepage = () => {
  return (
    <div className="h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden">
      <Hero />
      <About />
      <Menu />
      <Team />
      <Testimonial />
      <Reservation />
      <Footer />
      <div className="h-[380px] md:h-[370px]" />
    </div>
  );
};

export default Homepage;
