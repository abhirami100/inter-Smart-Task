import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { AiProcess } from "@/components/sections/ai-process";
import { Contact } from "@/components/sections/contact";
import { RecentProjects } from "@/components/sections/recent-projects";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <AiProcess />
        <Contact />
        <RecentProjects />
      </main>
      <Footer />
    </div>
  );
}
