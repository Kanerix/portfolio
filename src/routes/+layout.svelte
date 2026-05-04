<script lang="ts">
    import {
        faDocker,
        faGithub,
        faGolang,
        faLinkedin,
        faPython,
        faRust,
        faTypescript,
    } from "@fortawesome/free-brands-svg-icons";
    import {
        faArrowUpRightFromSquare,
        faCodeBranch,
        faDatabase,
        faEnvelope,
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    import { base } from "$app/paths";
    import { page } from "$app/state";
    import { BackgroundCanvas } from "$lib/components";
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

    const languages = [
        { icon: faRust, label: "Rust", color: "#e8613a" },
        { icon: faPython, label: "Python", color: "#4e9fd1" },
        { icon: faTypescript, label: "TypeScript", color: "#3c83c5" },
        { icon: faGolang, label: "Go", color: "#00aed8" },
    ];

    const tools = [
        { icon: faCodeBranch, label: "Git & GitHub", color: "#f05032" },
        { icon: faDocker, label: "Docker & K8s", color: "#2496ed" },
        { icon: faDatabase, label: "SQL & NoSQL", color: "#f29111" },
    ];

    const socials = [
        {
            icon: faGithub,
            label: "GitHub",
            href: "https://github.com/Kanerix",
            color: "#e2e8f0",
        },
        {
            icon: faLinkedin,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/kanerix",
            color: "#0a66c2",
        },
        {
            icon: faEnvelope,
            label: "Email",
            href: "mailto:kas@lerpz.com",
            color: "#7c8ff7",
        },
    ];
</script>

<svelte:head>
    <title>Kasper's Portfolio</title>
    <meta
        name="description"
        content="Portfolio of Kasper Jønsson — AI & Data Platform Engineer"
    />
</svelte:head>

<!-- ─── Fixed Aurora Background ─────────────────────────────────────── -->
<div
    class="fixed inset-0 overflow-hidden pointer-events-none"
    style="z-index: 0;"
    aria-hidden="true"
>
    <!-- Blob 1 — blue-purple, top-left -->
    <div
        class="absolute rounded-full opacity-[0.18]"
        style="
      width: 70vw; height: 70vw;
      max-width: 900px; max-height: 900px;
      top: -20%; left: -15%;
      background: radial-gradient(circle, oklch(0.55 0.28 265) 0%, transparent 70%);
      filter: blur(72px);
      animation: aurora-1 22s ease-in-out infinite;
    "
    ></div>

    <!-- Blob 2 — teal-cyan, bottom-right -->
    <div
        class="absolute rounded-full opacity-[0.14]"
        style="
      width: 65vw; height: 65vw;
      max-width: 820px; max-height: 820px;
      bottom: -20%; right: -10%;
      background: radial-gradient(circle, oklch(0.58 0.22 200) 0%, transparent 70%);
      filter: blur(80px);
      animation: aurora-2 28s ease-in-out infinite;
    "
    ></div>

    <!-- Blob 3 — magenta-pink, top-right accent -->
    <div
        class="absolute rounded-full opacity-[0.09]"
        style="
      width: 45vw; height: 45vw;
      max-width: 580px; max-height: 580px;
      top: 5%; right: 5%;
      background: radial-gradient(circle, oklch(0.55 0.24 320) 0%, transparent 70%);
      filter: blur(64px);
      animation: aurora-3 18s ease-in-out infinite;
    "
    ></div>
</div>

<!-- ─── Particle Canvas ───────────────────────────────────────────────── -->
<BackgroundCanvas />

<!-- ─── Main Layout ───────────────────────────────────────────────────── -->
<main
    class="relative max-w-250 min-h-screen lg:h-screen flex flex-col lg:flex-row gap-4 px-4 py-2 sm:px-8 sm:py-4 lg:px-16 lg:py-8 mx-auto"
    style="z-index: 10;"
>
    <!-- ── Sidebar ──────────────────────────────────────────────────────── -->
    <aside
        class="w-full lg:w-64 shrink-0 flex flex-col gap-5 p-5 sm:p-6 rounded-2xl glass"
    >
        <!-- Avatar + Identity -->
        <div
            class="flex flex-row lg:flex-col items-center lg:items-center gap-4 lg:gap-4"
        >
            <!-- Avatar with animated glow ring -->
            <div class="relative shrink-0">
                <img
                    alt="Kasper's avatar"
                    width={128}
                    height={128}
                    class="w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 rounded-2xl avatar-glow object-cover"
                    src={avatar}
                />
            </div>

            <div class="text-left lg:text-center">
                <h2
                    class="text-base sm:text-lg lg:text-xl font-bold leading-tight"
                >
                    Kasper Jønsson
                </h2>
                <h3 class="text-xs sm:text-sm text-accent mt-0.5 font-medium">
                    AI & Data Platform Engineer
                </h3>

                <!-- Availability badge -->
                <div class="flex items-center lg:justify-center gap-1.5 mt-2">
                    <span
                        class="availability-dot inline-block w-2 h-2 rounded-full"
                        style="background: oklch(0.65 0.25 150);"
                    ></span>
                    <span
                        class="text-[0.65rem] font-semibold uppercase tracking-wider"
                        style="color: oklch(0.65 0.22 150);"
                    >
                        Open to work
                    </span>
                </div>
            </div>
        </div>

        <!-- Divider -->
        <hr class="border-border" />

        <!-- Languages + Tools -->
        <div class="flex flex-row lg:flex-col gap-5 lg:gap-5">
            <!-- Languages -->
            <div class="flex flex-col gap-2.5">
                <h5
                    class="text-[0.65rem] font-bold uppercase tracking-widest text-accent/50"
                >
                    Languages
                </h5>
                <ul class="flex flex-col gap-1.5">
                    {#each languages as { icon, label, color }}
                        <li class="flex items-center gap-2.5">
                            <span
                                class="flex items-center justify-center w-6 h-6 rounded-md shrink-0"
                                style="background: {color}22; color: {color};"
                            >
                                <Fa {icon} class="text-[0.7rem]" />
                            </span>
                            <span class="text-sm text-foreground/80 font-medium"
                                >{label}</span
                            >
                        </li>
                    {/each}
                </ul>
            </div>

            <!-- Divider (desktop only) -->
            <hr class="hidden lg:block border-border" />

            <!-- Tools -->
            <div class="flex flex-col gap-2.5">
                <h5
                    class="text-[0.65rem] font-bold uppercase tracking-widest text-accent/50"
                >
                    Tools
                </h5>
                <ul class="flex flex-col gap-1.5">
                    {#each tools as { icon, label, color }}
                        <li class="flex items-center gap-2.5">
                            <span
                                class="flex items-center justify-center w-6 h-6 rounded-md shrink-0"
                                style="background: {color}22; color: {color};"
                            >
                                <Fa {icon} class="text-[0.7rem]" />
                            </span>
                            <span class="text-sm text-foreground/80 font-medium"
                                >{label}</span
                            >
                        </li>
                    {/each}
                </ul>
            </div>
        </div>

        <!-- Push social links to bottom on desktop -->
        <div class="hidden lg:block flex-1"></div>

        <!-- Divider -->
        <hr class="border-border" />

        <!-- Social Links -->
        <div class="flex items-center justify-center lg:justify-between gap-2">
            {#each socials as { icon, label, href, color }}
                <a
                    {href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 opacity-60 hover:opacity-100 hover:scale-110"
                    style="background: color-mix(in srgb, {color} 12%, transparent);"
                >
                    <Fa {icon} {color} class="text-base" />
                </a>
            {/each}
        </div>
    </aside>

    <!-- ── Content Area ──────────────────────────────────────────────────── -->
    <section
        class="grow min-w-0 flex flex-col rounded-2xl glass overflow-hidden"
    >
        <!-- Navigation -->
        <nav class="px-3 sm:px-4 pt-3 sm:pt-4">
            <ul
                class="flex gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-xl overflow-x-auto"
                style="background: oklch(0.07 0.025 275 / 0.6);"
            >
                {#each navItems as { title, description, href, target }}
                    <li class="shrink-0">
                        <a
                            {href}
                            {target}
                            aria-label={description}
                            data-sveltekit-preload-data
                            class="relative flex items-center gap-1.5 py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-150
                {isActive(href)
                                ? 'text-white'
                                : 'text-accent hover:text-foreground hover:bg-white/5'}"
                        >
                            <!-- Active pill — always in DOM, cross-fades via opacity so there's no flicker -->
                            <span
                                class="absolute inset-0 rounded-lg pointer-events-none"
                                style="
                  background: linear-gradient(135deg, oklch(0.62 0.22 258), oklch(0.60 0.18 200));
                  box-shadow: 0 2px 12px oklch(0.62 0.22 258 / 0.4), 0 0 0 1px oklch(0.62 0.22 258 / 0.3);
                  opacity: {isActive(href) ? 1 : 0};
                  transition: opacity 150ms ease;
                "
                                aria-hidden="true"
                            ></span>
                            <span class="relative">{title}</span>
                            {#if target === "_blank"}
                                <Fa
                                    icon={faArrowUpRightFromSquare}
                                    class="relative text-[0.55rem] opacity-60"
                                />
                            {/if}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>

        <!-- Page content with enter animation keyed to route -->
        {#key page.url.pathname}
            <div
                class="grow overflow-y-auto px-3 sm:px-4 pb-4 pt-4 sm:pt-5 page-enter"
            >
                {@render children()}
            </div>
        {/key}
    </section>
</main>
