import { Cards, Footer, Hero, Navbar } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Cards />
      </main>
      <Footer />
    </>
  );
}
