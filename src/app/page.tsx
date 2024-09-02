import AboutUs from "./components/about-us";
import Contact from "./components/contact-us";

export default function Home() {
  return (
    <main>
      <section>
        <nav className="sticky top-0 h-[48px] flex flex-row gap-1 justify-between items-center p-3 bg-cyan-100/50">
          <div>
            <img src="book.svg" className="fill-red-800" />
          </div>
          <div>
            <button className="navbar-button">เกี่ยวกับ</button>
            <button className="navbar-button">ติดต่อเรา</button>
            <button className="navbar-button">ล็อคอิน</button>
            <button className="navbar-button">สมัครสมาชิก</button>
          </div>
        </nav>
      </section>
      <AboutUs />
      <Contact />
    </main>
  );
}
