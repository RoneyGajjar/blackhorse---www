import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function ComingSoonHero() {
  return (
    <>
     <Navbar />
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg text-gray-600">We're working hard to bring you this feature. Stay tuned!</p>
    </div>
     <Footer />
    </>
  );
}