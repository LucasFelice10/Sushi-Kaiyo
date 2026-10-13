import type { Dish } from "@/config/restaurantConfig";
import { restaurantConfig } from "@/config/restaurantConfig";

export function DishCard({ dish, onOpen, eager }: { dish: Dish; onOpen: () => void; eager?: boolean }) {
  return (
    <button
      onClick={onOpen}
      className="group block w-full overflow-hidden rounded-[1.75rem] bg-card text-left shadow-card transition-transform duration-300 active:scale-[0.98]"
    >
      <div className="relative aspect-[4/5] overflow-hidden sm:aspect-square lg:aspect-[4/3]">
        <img
          src={dish.image}
          alt={dish.name}
          width={1024}
          height={1024}
          loading={eager ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {dish.tags?.[0] && (
          <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-foreground backdrop-blur">
            {dish.tags[0]}
          </span>
        )}
      </div>
      <div className="space-y-2 px-5 pb-6 pt-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="min-w-0 truncate font-display text-2xl text-foreground">{dish.name}</h3>
          {restaurantConfig.showPrices && dish.price && (
            <span className="shrink-0 text-sm text-muted-foreground">{dish.price}</span>
          )}
        </div>
        <p className="text-[15px] text-muted-foreground">{dish.description}</p>
        <p className="text-xs uppercase tracking-[0.16em] text-accent">
          {dish.ingredients.slice(0, 3).join(" · ")}
        </p>
      </div>
    </button>
  );
}
