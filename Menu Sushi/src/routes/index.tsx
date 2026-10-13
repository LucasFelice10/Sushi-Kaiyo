import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { restaurantConfig, type Dish } from "@/config/restaurantConfig";
import { DishCard } from "@/components/menu/DishCard";
import { DishSheet } from "@/components/menu/DishSheet";
import { MenuFooter } from "@/components/menu/MenuFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${restaurantConfig.name} — Menu` },
      { name: "description", content: `Visual menu of ${restaurantConfig.name}: starters, sushi, sashimi, desserts and drinks.` },
      { property: "og:title", content: `${restaurantConfig.name} — Menu` },
      { property: "og:description", content: "A visual lookbook of our sushi, sashimi, desserts and drinks." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { categories, dishes } = restaurantConfig;
  const [active, setActive] = useState(categories[0]?.id ?? "");
  const [open, setOpen] = useState<Dish | null>(null);
  const sections = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    Object.values(sections.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const jump = (id: string) => {
    const el = sections.current[id];
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto w-full max-w-[1600px] px-4 pb-8 pt-12 text-center sm:px-6 lg:px-8">
        <p className="text-sm tracking-[0.4em] text-accent">{restaurantConfig.japaneseMark}</p>
        <h1 className="mt-2 font-display text-6xl text-foreground">{restaurantConfig.name}</h1>
        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{restaurantConfig.tagline}</p>
      </header>

      <nav className="sticky top-0 z-40 bg-background/85 backdrop-blur-md">
        <div className="mx-auto w-full max-w-[1600px] overflow-x-auto px-3 py-4 no-scrollbar sm:px-6 lg:px-8">
          <div className="mx-auto flex w-max justify-center gap-1 sm:gap-2 md:gap-6">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => jump(c.id)}
              aria-current={active === c.id ? "true" : undefined}
              className={`flex shrink-0 flex-col items-center gap-0.5 rounded-full border px-2 py-2 transition-colors sm:px-4 lg:px-5 xl:px-6 ${
                active === c.id
                  ? "border-nav-active-border bg-nav-active text-foreground"
                  : "border-nav-inactive-border bg-nav-inactive text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className={`text-[10px] leading-none sm:text-[11px] ${active === c.id ? "text-accent" : "text-muted-foreground/80"}`}>
                {c.japanese}
              </span>
              <span className="whitespace-nowrap text-[10px] uppercase leading-tight tracking-[0.14em] sm:text-xs sm:tracking-[0.2em]">
                {c.label}
              </span>
            </button>
          ))}
          </div>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-[1600px] px-4 pb-20 sm:px-6 lg:px-8">
        {categories.map((c, ci) => (
          <section key={c.id} id={c.id} ref={(el) => { sections.current[c.id] = el; }} className="pt-10">
            <div className="mb-5 flex items-baseline gap-3 px-2">
              <h2 className="font-display text-3xl text-foreground">{c.label}</h2>
              <span className="text-sm text-accent">{c.japanese}</span>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-2">
              {dishes.filter((d) => d.category === c.id).map((d, i) => (
                <DishCard key={d.id} dish={d} eager={ci === 0 && i === 0} onOpen={() => setOpen(d)} />
              ))}
            </div>
          </section>
        ))}
        <MenuFooter />
      </main>

      <DishSheet dish={open} onClose={() => setOpen(null)} />
    </div>
  );
}
