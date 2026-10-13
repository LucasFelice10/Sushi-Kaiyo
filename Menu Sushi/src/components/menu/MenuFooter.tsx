import { ExternalLink, MapPin, Star } from "lucide-react";
import { restaurantConfig } from "@/config/restaurantConfig";

// Bottom-of-page footer: logo mark, rating, review CTA and developer credit.
// Reads all copy/links from restaurantConfig so it stays swappable.
export function MenuFooter() {
  return (
    <footer className="mt-16 border-t border-border pt-14 pb-10">
      <div className="mx-auto flex w-full max-w-md flex-col items-center px-2 text-center">
        {/* Logo placeholder — swap this block for an <img src={logo} /> when the real mark arrives */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card shadow-card">
          <span className="font-display text-2xl leading-none text-accent">
            {restaurantConfig.japaneseMark}
          </span>
        </div>
        <p className="mt-4 font-display text-2xl text-foreground">{restaurantConfig.name}</p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          {restaurantConfig.tagline}
        </p>

        {/* Rating */}
        <p className="mt-10 font-display text-7xl leading-none text-foreground lining-nums tabular-nums">
          {restaurantConfig.rating}
        </p>
        <div
          className="mt-4 flex items-center gap-1.5"
          role="img"
          aria-label={`Rating ${restaurantConfig.rating} out of 5`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" strokeWidth={0} />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">{restaurantConfig.reviewPrompt}</p>

        {/* Review CTA */}
        <a
          href={restaurantConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-3 rounded-full border border-accent/40 px-6 py-3 text-sm text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <MapPin className="h-4 w-4 shrink-0" />
          <span>{restaurantConfig.reviewCta}</span>
          <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" />
        </a>

        <p className="mt-12 font-display text-base leading-relaxed tracking-[0.05em] text-muted-foreground sm:text-xl sm:tracking-[0.08em]">
          {restaurantConfig.thankYou}
        </p>

        {/* Developer credit */}
        <p className="mt-10 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80">
          Desarrollada por{" "}
          <span className="normal-case font-medium text-foreground/80">
            {restaurantConfig.developer}
          </span>
        </p>
      </div>
    </footer>
  );
}
