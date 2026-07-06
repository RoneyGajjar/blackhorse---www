import Hero from "@/components/organisms/about-hero";
import OurStory from "@/components/organisms/our-story";
import PrincipleCard from "@/components/organisms/principlecard";
import { Footer } from "@/components/organisms/footer";
import { Navbar } from "@/components/organisms/navbar";
import ExecutiveLeadershipSection from "@/components/organisms/executiveleadership";

function AboutUs() {
    return (
        <main className="bg-white min-h-screen selection:bg-brand-dark selection:text-white">
            <Navbar />
            <Hero />
            <OurStory />
            <PrincipleCard />
            {/* Add remaining organisms here: */}
            {/* <ComplexNeeds /> */}
            {/* <Testimonials /> */}
            <ExecutiveLeadershipSection />
            <Footer />
        </main>
    )

}
export default AboutUs;