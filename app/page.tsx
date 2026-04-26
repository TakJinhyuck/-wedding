import Intro from "@/components/Intro";
import Invitation from "@/components/Invitation";
import DDay from "@/components/DDay";
import Calendar from "@/components/Calendar";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Account from "@/components/Account";
import Share from "@/components/Share";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // 외부 배경: 연한 미색
    <div className="min-h-screen flex justify-center" style={{ backgroundColor: "#F8F8F8" }}>
      {/* 중앙 카드: max-w-[450px], shadow-xl */}
      <main className="w-full min-h-screen bg-white shadow-xl" style={{ maxWidth: 450 }}>
        <Intro />
        <Invitation />
        <DDay />
        <Calendar />
        <Contact />
        <Gallery />
        <Location />
        <Account />
        <Share />
        <Footer />
      </main>
    </div>
  );
}
