import Intro from "@/components/Intro";
import Invitation from "@/components/Invitation";
import Calendar from "@/components/Calendar";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Account from "@/components/Account";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FDFDFD" }}>
      <Intro />
      <Invitation />
      <Calendar />
      <Gallery />
      <Location />
      <Contact />
      <Account />
      <Footer />
    </main>
  );
}
