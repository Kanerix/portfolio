<script lang="ts">
import {
  faGit,
  faPython,
  faRust,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import Fa from "svelte-fa";
import { base } from "$app/paths";
import { page } from "$app/state";
import avatar from "$lib/images/avatar.png";
import "./layout.css";

const { children } = $props();

function isActive(href: string): boolean {
  return page.url.pathname === href;
}

const navItems = [
  {
    title: "About Me",
    description: "Learn more about me",
    href: `${base}/about`,
    target: "_self",
  },
  {
    title: "Resume",
    description: "View my resume",
    href: `${base}/resume`,
    target: "_self",
  },
  {
    title: "Projects",
    description: "View my projects",
    href: "https://github.com/Kanerix",
    target: "_blank",
  },
  {
    title: "Contact",
    description: "Contact me",
    href: `${base}/contact`,
    target: "_self",
  },
];
</script>

<svelte:head>
    <title>Kasper's portfolio</title>
    <meta name="description" content="Portfolio App" />
</svelte:head>

<main class="max-w-250 min-h-screen flex flex-col lg:flex-row gap-4 p-4 sm:p-8 lg:p-16 mx-auto">
    <!-- Sidebar -->
    <section class="w-full lg:w-64 shrink-0 flex flex-col gap-5 p-5 sm:p-6 rounded-xl bg-card-background">
        <!-- Mobile: horizontal layout / Desktop: vertical layout -->
        <div class="flex flex-row lg:flex-col items-center lg:items-center gap-4 lg:gap-3">
            <img
                alt="Kasper's avatar"
                width={128}
                height={128}
                class="w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 rounded-xl ring-2 ring-accent/20"
                src={avatar}
            />
            <div class="text-left lg:text-center">
                <h2 class="text-base sm:text-lg font-semibold leading-tight">Kasper Jønsson</h2>
                <h3 class="text-xs sm:text-sm text-accent mt-0.5">Software Engineer</h3>
            </div>
        </div>

        <!-- Divider -->
        <hr class="border-accent/15" />

        <!-- Languages & Tools: side-by-side on mobile, stacked on desktop -->
        <div class="flex flex-row lg:flex-col gap-5 lg:gap-5">
            <!-- Languages -->
            <div class="flex flex-col gap-2">
                <h5 class="text-xs font-semibold uppercase tracking-wider text-accent/60">Languages</h5>
                <ul class="flex flex-col gap-1.5">
                    <li class="flex items-center gap-2.5 text-sm text-accent">
                        <Fa icon={faRust} class="text-base" />
                        <span>Rust</span>
                    </li>
                    <li class="flex items-center gap-2.5 text-sm text-accent">
                        <Fa icon={faPython} class="text-base" />
                        <span>Python</span>
                    </li>
                    <li class="flex items-center gap-2.5 text-sm text-accent">
                        <Fa icon={faTypescript} class="text-base" />
                        <span>TypeScript</span>
                    </li>
                </ul>
            </div>

            <!-- Divider: only visible on desktop -->
            <hr class="hidden lg:block border-accent/15" />

            <!-- Tools -->
            <div class="flex flex-col gap-2">
                <h5 class="text-xs font-semibold uppercase tracking-wider text-accent/60">Tools</h5>
                <ul class="flex flex-col gap-1.5">
                    <li class="flex items-center gap-2.5 text-sm text-accent">
                        <Fa icon={faGit} class="text-base" />
                        <span>Git & GitHub</span>
                    </li>
                    <li class="flex items-center gap-2.5 text-sm text-accent">
                        <Fa icon={faCloud} class="text-base" />
                        <span>Azure & AWS</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Content -->
    <section class="grow min-w-0 px-3 sm:px-4 pt-3 sm:pt-4 pb-4 rounded-xl bg-card-background">
        <nav>
            <ul class="flex gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-xl bg-background overflow-x-auto">
                {#each navItems as { title, description, href, target }}
                    <li class="shrink-0">
                        <a
                            {href}
                            {target}
                            aria-label={description}
                            data-sveltekit-preload-data
                            class="flex items-center gap-1.5 py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200
                                {isActive(href)
                                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                                    : 'text-accent hover:text-foreground hover:bg-card-background'}"
                        >
                            {title}
                            {#if target === "_blank"}
                                <Fa icon={faArrowUpRightFromSquare} class="text-[0.6rem] opacity-50" />
                            {/if}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
        <div class="pt-4 sm:pt-5">
            {@render children()}
        </div>
    </section>
</main>