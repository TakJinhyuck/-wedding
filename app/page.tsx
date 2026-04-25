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
    // 외부: 데스크탑에서 양쪽 여백 색상
    <div className="min-h-screen" style={{ backgroundColor: "#E8E5E0" }}>
      {/* 내부: 모바일 카드 최대 430px, 화면 중앙 고정 */}
      <main
        className="w-full min-h-screen mx-auto bg-white"
        style={{ maxWidth: 430 }}
      >
        <Intro />
        <Invitation />
        <Calendar />
        <Gallery />
        <Location />
        <Contact />
        <Account />
        <Footer />
      </main>
    </div>
  );
}
