<script lang="ts">
    import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
    import {
        faAward,
        faFileLines,
        faGraduationCap,
        faRobot,
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

    interface TimelineEntry {
        icon: IconDefinition;
        title: string;
        subtitle: string;
        date: string;
        description: string;
        tags?: string[];
        iconColor?: string;
    }

    const experience: TimelineEntry[] = [
        {
            icon: faRobot,
            iconColor: "#7c8ff7",
            title: "Student Worker — AI & Data Platform Engineer",
            subtitle: "Egmont, Copenhagen",
            date: "Nov 2023 — Present",
            description:
                "Working on the AI & Data platform across three focus areas: \
                designing and developing internal automation workflows that \
                reduce manual workload; playing a key role in building a \
                company-wide AI image and video generation platform; and \
                contributing to the development and maintenance of the AI & Data \
                platform infrastructure.",
            tags: ["Python", "TypeScript", "Docker", "Rust", "AI/ML"],
        },
    ];

    const education: TimelineEntry[] = [
        {
            icon: faGraduationCap,
            iconColor: "#a78bfa",
            title: "B.Sc. Software Development",
            subtitle: "IT University of Copenhagen",
            date: "Aug 2023 — Jun 2027",
            description:
                "Pursuing a Bachelor of Science in Software Development at one \
                of Denmark's leading universities specialising in IT and \
                technology. The programme provides a strong foundation in both \
                theoretical and practical aspects of software development.",
        },
        {
            icon: faAward,
            iconColor: "#f472b6",
            title: "Higher Technical Examination (HTX)",
            subtitle: "Københavns Mediegymnasium",
            date: "Aug 2020 — Jun 2023",
            description:
                "Completed the HTX at Next Københavns Mediegymnasium with a \
                strong emphasis on technology, science and computer science. The \
                programme provided a solid technical foundation and prepared for \
                further studies within IT and engineering.",
            tags: ["Computer Science", "Technology", "Mathematics"],
        },
    ];
</script>

<svelte:head>
    <title>Resume — Kasper Jønsson</title>
    <meta
        name="description"
        content="Kasper Jønsson's resume and work experience."
    />
</svelte:head>

<div class="flex flex-col gap-6">
    <!-- Page Header -->
    <div class="flex items-center gap-3">
        <div
            class="flex items-center justify-center w-10 h-10 rounded-xl"
            style="background: oklch(0.62 0.22 258 / 0.15); color: oklch(0.75 0.18 258);"
        >
            <Fa icon={faFileLines} class="text-lg" />
        </div>
        <div>
            <h1 class="text-2xl font-bold leading-tight">Resume</h1>
            <p class="text-sm text-accent/70">My experience and education</p>
        </div>
    </div>

    <hr class="border-border" />

    <!-- Experience Section -->
    <div class="flex flex-col gap-4">
        <h2
            class="text-[0.65rem] font-bold uppercase tracking-widest text-accent/50"
        >
            Experience
        </h2>

        <div class="relative flex flex-col">
            <!-- Timeline line -->
            <div
                class="absolute left-4 top-6 bottom-6 w-px"
                style="background: linear-gradient(to bottom, oklch(0.62 0.22 258 / 0.4), oklch(0.60 0.18 200 / 0.2));"
            ></div>

            {#each experience as entry, i}
                <div
                    class="relative flex gap-4 sm:gap-5 {i !==
                    experience.length - 1
                        ? 'pb-8'
                        : ''}"
                >
                    <!-- Icon node -->
                    <div
                        class="relative z-10 flex items-center justify-center w-8 h-8 shrink-0 rounded-lg"
                        style="
                            background: color-mix(in srgb, {entry.iconColor ??
                            '#7c8ff7'} 18%, oklch(0.12 0.035 275));
                            box-shadow: 0 0 0 4px oklch(0.12 0.035 275), 0 0 10px color-mix(in srgb, {entry.iconColor ??
                            '#7c8ff7'} 40%, transparent);
                        "
                    >
                        <Fa
                            icon={entry.icon}
                            color={entry.iconColor ?? "#7c8ff7"}
                            class="text-xs"
                        />
                    </div>

                    <!-- Content -->
                    <div class="flex flex-col gap-1.5 pt-0.5 min-w-0">
                        <div
                            class="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2"
                        >
                            <h3 class="text-sm font-semibold leading-tight">
                                {entry.title}
                            </h3>
                            <span class="text-xs text-accent/50"
                                >{entry.subtitle}</span
                            >
                        </div>
                        <span
                            class="text-xs font-semibold"
                            style="color: {entry.iconColor ??
                                'oklch(0.62 0.22 258)'};">{entry.date}</span
                        >
                        <p
                            class="text-xs sm:text-sm leading-relaxed text-accent/75"
                        >
                            {entry.description}
                        </p>
                        {#if entry.tags}
                            <div class="flex flex-wrap gap-1.5 pt-1">
                                {#each entry.tags as tag}
                                    <span
                                        class="text-[0.65rem] font-semibold px-2 py-0.5 rounded-md"
                                        style="background: oklch(0.62 0.22 258 / 0.12); color: oklch(0.78 0.15 258); border: 1px solid oklch(0.62 0.22 258 / 0.2);"
                                    >
                                        {tag}
                                    </span>
                                {/each}
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <hr class="border-border" />

    <!-- Education Section -->
    <div class="flex flex-col gap-4">
        <h2
            class="text-[0.65rem] font-bold uppercase tracking-widest text-accent/50"
        >
            Education
        </h2>

        <div class="relative flex flex-col">
            <!-- Timeline line -->
            <div
                class="absolute left-4 top-6 bottom-6 w-px"
                style="background: linear-gradient(to bottom, oklch(0.55 0.24 320 / 0.4), oklch(0.60 0.18 200 / 0.2));"
            ></div>

            {#each education as entry, i}
                <div
                    class="relative flex gap-4 sm:gap-5 {i !==
                    education.length - 1
                        ? 'pb-8'
                        : ''}"
                >
                    <!-- Icon node -->
                    <div
                        class="relative z-10 flex items-center justify-center w-8 h-8 shrink-0 rounded-lg"
                        style="
                            background: color-mix(in srgb,
                            {entry.iconColor ?? '#a78bfa'}
                            18%, oklch(0.12 0.035 275)); box-shadow: 0 0 0 4px
                            oklch(0.12 0.035 275), 0 0 10px
                            color-mix(in srgb,
                            {entry.iconColor ?? '#a78bfa'}
                            40%, transparent);
                        "
                    >
                        <Fa
                            icon={entry.icon}
                            color={entry.iconColor ?? "#a78bfa"}
                            class="text-xs"
                        />
                    </div>

                    <!-- Content -->
                    <div class="flex flex-col gap-1.5 pt-0.5 min-w-0">
                        <div
                            class="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2"
                        >
                            <h3 class="text-sm font-semibold leading-tight">
                                {entry.title}
                            </h3>
                            <span class="text-xs text-accent/50"
                                >{entry.subtitle}</span
                            >
                        </div>
                        <span
                            class="text-xs font-semibold"
                            style="color: {entry.iconColor ?? '#a78bfa'};"
                            >{entry.date}</span
                        >
                        <p
                            class="text-xs sm:text-sm leading-relaxed text-accent/75"
                        >
                            {entry.description}
                        </p>
                        {#if entry.tags}
                            <div class="flex flex-wrap gap-1.5 pt-1">
                                {#each entry.tags as tag}
                                    <span
                                        class="text-[0.65rem] font-semibold px-2 py-0.5 rounded-md"
                                        style="background: oklch(0.55 0.24 320 / 0.12); color: oklch(0.75 0.18 320); border: 1px solid oklch(0.55 0.24 320 / 0.2);"
                                    >
                                        {tag}
                                    </span>
                                {/each}
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
