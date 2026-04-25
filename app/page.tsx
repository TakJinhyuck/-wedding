import Intro from "@/components/Intro";
import Invitation from "@/components/Invitation";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Account from "@/components/Account";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-beige-50">
      <Intro />
      <Invitation />
      <Gallery />
      <Location />
      <Contact />
      <Account />
      <Footer />
    </main>
  );
}
