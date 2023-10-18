import Client from "@/components/Client";
import Copyright from "@/components/Copyright";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Who from "@/components/Who";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Who />
      <Client />
      <Partners />
      <Footer />
      <Copyright />
    </main>
  );
}
