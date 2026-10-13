import { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import type { Dish } from "@/config/restaurantConfig";
import { restaurantConfig } from "@/config/restaurantConfig";
import { Button } from "@/components/ui/button";

export function DishSheet({ dish, onClose }: { dish: Dish | null; onClose: () => void }) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!dish) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [dish]);

  const spring = { type: "spring" as const, stiffness: 145, damping: 21, mass: 0.9 };
  const rise = reducedMotion ? { opacity: 0 } : { opacity: 0, y: 28, z: -35 };

  return (
    <Dialog.Root open={Boolean(dish)} onOpenChange={(isOpen) => { if (!isOpen) onClose(); }}>
      <Dialog.Portal forceMount>
        <AnimatePresence>
          {dish && (
            <motion.div key={dish.id} className="dish-cinema fixed inset-0 z-50" exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.24 }}>
              <Dialog.Overlay forceMount asChild>
                <motion.div
                  className="absolute inset-0 bg-overlay backdrop-blur-3xl"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ duration: reducedMotion ? 0 : 0.4 }}
                />
              </Dialog.Overlay>
              <div className="pointer-events-none absolute inset-0 flex items-end justify-center px-3 pt-6 sm:items-center sm:p-8">
                <Dialog.Content forceMount asChild aria-describedby={`dish-description-${dish.id}`}>
                  <motion.div
                    className="cinema-stage pointer-events-auto relative max-h-[92dvh] w-full max-w-lg overflow-y-auto overscroll-contain rounded-t-[2rem] bg-background text-foreground shadow-sheet outline-none sm:rounded-[2rem]"
                    initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 65 }}
                    animate={{ opacity: 1, y: 0 }} transition={reducedMotion ? { duration: 0.15 } : spring}
                  >
                    <div className="cinema-perspective relative p-3 pb-0 sm:p-4 sm:pb-0">
                      <motion.div
                        className="cinema-photo relative aspect-square origin-center rounded-[1.25rem] shadow-card"
                        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.76, z: -160, rotateX: 18, rotateY: -14, rotateZ: -4, y: 35 }}
                        animate={{ opacity: 1, scale: 1, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0, y: 0 }}
                        transition={reducedMotion ? { duration: 0.15 } : { ...spring, delay: 0.06 }}
                      >
                        {/\.(mp4|webm)$/i.test(dish.mediaUrl ?? dish.image) ? (
                          <video
                            src={dish.mediaUrl ?? dish.image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="h-full w-full rounded-[1.25rem] object-cover"
                          />
                        ) : (
                          <img src={dish.image} alt={dish.name} width={1024} height={1024} className="h-full w-full rounded-[1.25rem] object-cover" />
                        )}
                      </motion.div>
                      <Dialog.Close asChild>
                        <Button variant="secondary" size="icon" aria-label="Close" title="Close" className="absolute right-6 top-6 z-10 h-10 w-10 rounded-full border border-border bg-background/85 text-foreground backdrop-blur-md sm:right-7 sm:top-7">
                          <X className="h-5 w-5" />
                        </Button>
                      </Dialog.Close>
                    </div>
                    <div className="cinema-perspective space-y-6 px-6 pb-10 pt-6">
                      <motion.div initial={rise} animate={{ opacity: 1, y: 0, z: 0 }} transition={reducedMotion ? { duration: 0.15 } : { ...spring, delay: 0.18 }}>
                        {dish.japanese && <p className="text-sm tracking-[0.2em] text-accent">{dish.japanese}</p>}
                        <div className="mt-1 flex items-baseline justify-between gap-4">
                          <Dialog.Title className="min-w-0 break-words font-display text-4xl text-foreground">{dish.name}</Dialog.Title>
                          {restaurantConfig.showPrices && dish.price && <span className="shrink-0 text-muted-foreground">{dish.price}</span>}
                        </div>
                      </motion.div>
                      <Dialog.Description asChild>
                        <motion.p id={`dish-description-${dish.id}`} className="leading-relaxed text-foreground/80" initial={rise} animate={{ opacity: 1, y: 0, z: 0 }} transition={reducedMotion ? { duration: 0.15 } : { ...spring, delay: 0.24 }}>
                          {dish.details}
                        </motion.p>
                      </Dialog.Description>
                      <div>
                        <motion.p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reducedMotion ? 0 : 0.3 }}>Ingredients</motion.p>
                        <div className="cinema-perspective flex flex-wrap gap-2">
                          {dish.ingredients.map((ingredient, index) => (
                            <motion.span
                              key={ingredient} className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground shadow-card"
                              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 30, z: -55, rotateX: 16 }}
                              animate={{ opacity: 1, y: 0, z: 0, rotateX: 0 }}
                              transition={reducedMotion ? { duration: 0.15 } : { ...spring, stiffness: 120, delay: 0.32 + index * 0.055 }}
                            >{ingredient}</motion.span>
                          ))}
                        </div>
                      </div>
                      <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: reducedMotion ? 0 : 0.45 }}>
                        {dish.tags && dish.tags.length > 0 && <p className="text-sm text-accent">{dish.tags.join(" · ")}</p>}
                        <p className="border-t border-border pt-5 text-sm text-muted-foreground">{restaurantConfig.note}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
