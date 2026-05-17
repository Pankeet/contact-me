import ContactMe from "./components/contact-me";
import Navbar from "./components/header"

export default function Home() {
  return (
    <div className="font-inter">
      <Navbar />
      <main>
        <ContactMe />
      </main>
    </div>
  );
}
