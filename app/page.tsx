import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { HistoryCarousel } from "@/components/history-carousel";
import { EventsSection } from "@/components/events-section";

export default function Home() {
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <HistoryCarousel />
      <EventsSection />
    </main>
  );
}
