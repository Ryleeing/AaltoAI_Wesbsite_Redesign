import { Badge } from "@/components/ui/badge";
import { LearnMore } from "@/components/learn-more";

type EventItem = {
  name: string;
  status: "active" | "past";
  description: string;
  owner: string;
  created: string;
  image?: string;
};

// Mock data — replace with your real events (or fetch from a CMS/API).
const events: EventItem[] = [
  {
    name: "LLM Alignment Hackathon",
    status: "active",
    description:
      "A weekend hackathon exploring practical alignment techniques for large language models...",
    owner: "Jane Doe",
    created: "06/22/2026",
  },
  {
    name: "Intro to Transformers",
    status: "past",
    description:
      "A hands-on workshop covering attention, tokenization and building a small transformer...",
    owner: "Jane Doe",
    created: "03/14/2026",
  },
  {
    name: "AI Safety Reading Group",
    status: "past",
    description:
      "A weekly reading circle through foundational and recent papers in AI safety research...",
    owner: "Jane Doe",
    created: "01/09/2026",
  },
];

export function EventsSection() {
  return (
    <section id="events" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-serif text-6xl leading-tight sm:text-7xl lg:text-8xl">
          Current <span className="text-accent">Events</span>
        </h2>
        <LearnMore href="#events" className="mb-3" />
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <article
            key={event.name}
            className="group flex flex-col overflow-hidden rounded-card bg-white/60 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
          >
            {/* Image area (placeholder tint until real photos are added) */}
            <div className="relative aspect-[4/3] bg-neutral-200/70">
              {event.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={event.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              )}
              <Badge
                variant={event.status === "active" ? "active" : "past"}
                className="absolute left-5 top-5"
              >
                {event.status === "active" ? "Active" : "Past"}
              </Badge>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-card text-4xl font-light tracking-tight">
                {event.name}
              </h3>
              <p className="mt-3 text-sm font-bold leading-relaxed text-muted">
                {event.description}
              </p>
              <dl className="mt-3 space-y-0.5 text-sm font-bold text-muted">
                <div>
                  <dt className="inline">Owner: </dt>
                  <dd className="inline">{event.owner}</dd>
                </div>
                <div>
                  <dt className="inline">Created: </dt>
                  <dd className="inline">{event.created}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
