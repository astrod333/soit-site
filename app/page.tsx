import { AnimatedTestimonials } from "@/components/AnimatedTestimonials";
import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-3";
import FeaturesSection from "@/components/features-8";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import WallOfLoveSection from "@/components/testimonials";
import { div } from "motion/react-client";
import Image from "next/image";

// What people say about us
const testimonials = [
  {
    quote: "Soit Studio's strategic approach to branding transformed our company's identity. Their deep understanding of design and technology delivered exactly what we needed.",
    name: "Freddy",
    designation: "CEO, Twenzetu Camp",
    src: "/jassir-jonis-QWa0TIUW638-unsplash.jpg"  // Changed from "public/..." to "/..."
  },
  {
    quote: "Working with Soit was a revelation. Their meticulous attention to detail and innovative web solutions helped us establish a powerful online presence.",
    name: "Raymond Maningi",
    designation: "Founder, Packia Ltd",
    src: "/mohammad-faruque-SpIKPT8zeAs-unsplash.jpg"
  },
  {
    quote: "The team at Soit Studio created a brand identity that truly resonates with our audience. Their combination of strategic thinking and creative execution is unmatched.",
    name: "Jackson Mkwashapi",
    designation: "Owner, Swahiba",
    src: "/tamarcus-brown-29pFbI_D1Sc-unsplash.jpg"
  }
];

export default function Home() {
  return (
<div>
  <HeroSection />
  <ContentSection />
  <FeaturesSection />
  <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
  <CallToAction />
  <FooterSection />
    </div>
  );
}
