import Intro from "@/components/Intro";
import Invitation from "@/components/Invitation";
import Calendar from "@/components/Calendar";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Account from "@/components/Account";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center" style={{ backgroundColor: "#E8E5E0" }}>
      <main className="w-full min-h-screen bg-white" style={{ maxWidth: 430 }}>
        <Intro />
        <Invitation />
        <Calendar />
        <Contact />
        <Gallery />
        <Location />
        <Account />
        <Footer />
      </main>
    </div>
  );
}
