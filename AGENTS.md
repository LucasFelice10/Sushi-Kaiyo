<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Expanded dish views use Radix Dialog for focus containment and dismissal, with Framer Motion for spring-based 3D transforms and reduced-motion alternatives, so cinematic effects preserve keyboard accessibility.
- The expanded dish view must keep the app's global color tokens — never scope dark-palette overrides onto the modal; only the entrance motion, heavy blurred backdrop, and hero media (image or MP4/WebM loop) may differ.
- The category nav row is a `w-max mx-auto` flex row inside an `overflow-x-auto` container, so it centers when all pills fit and scrolls from the left edge when they don't; justify-center alone would clip the first pill out of reach on narrow phones.
