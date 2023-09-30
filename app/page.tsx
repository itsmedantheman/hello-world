import { Hero, Navbar } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
      </main>
    </>
  );
}
