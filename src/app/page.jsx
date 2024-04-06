import About from "@/components/About";
import FeatureCards from "@/components/FeatureCards";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero />
    <FeatureCards/>
    <About />
    <Services />
    <Projects />
    </>
  );
}
