<script lang="ts">
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faAward,
  faBriefcase,
  faCode,
  faFileLines,
  faGraduationCap,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import Fa from "svelte-fa";

interface TimelineEntry {
  icon: IconDefinition;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tags?: string[];
}

const experience: TimelineEntry[] = [
  {
    icon: faServer,
    title: "Backend Engineer",
    subtitle: "Some Company",
    date: "2023 — Present",
    description:
      "Designed and maintained scalable backend services using Rust and Python. Built cloud-native infrastructure on Azure and AWS, improving deployment pipelines and system reliability.",
    tags: ["Rust", "Python", "Azure", "Docker"],
  },
  {
    icon: faCode,
    title: "Software Developer",
    subtitle: "Another Company",
    date: "2022 — 2023",
    description:
      "Developed full-stack web applications with TypeScript and Svelte. Collaborated with cross-functional teams to deliver features on tight deadlines while maintaining code quality.",
    tags: ["TypeScript", "Svelte", "Node.js", "PostgreSQL"],
  },
  {
    icon: faBriefcase,
    title: "Junior Developer",
    subtitle: "Startup Inc.",
    date: "2021 — 2022",
    description:
      "Contributed to an early-stage product, building REST APIs and frontend components. Gained hands-on experience with agile workflows, Git, and CI/CD pipelines.",
    tags: ["Python", "React", "Git", "CI/CD"],
  },
];

const education: TimelineEntry[] = [
  {
    icon: faGraduationCap,
    title: "B.Sc. Software Engineering",
    subtitle: "University of Copenhagen",
    date: "2020 — Present",
    description:
      "Studying software engineering with a focus on systems programming, distributed systems, and algorithm design. Active participant in coding competitions and open-source projects.",
  },
  {
    icon: faAward,
    title: "High School Diploma",
    subtitle: "Technical Gymnasium",
    date: "2017 — 2020",
    description:
      "Graduated with a specialization in computer science and mathematics. Completed a final project on network security and encryption algorithms.",
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
            class="flex items-center justify-center w-10 h-10 rounded-lg bg-background"
        >
            <Fa icon={faFileLines} class="text-accent text-lg" />
        </div>
        <div>
            <h1 class="text-2xl font-bold leading-tight">Resume</h1>
            <p class="text-sm text-accent">My experience and education</p>
        </div>
    </div>

    <hr class="border-accent/15" />

    <!-- Experience Section -->
    <div class="flex flex-col gap-4">
        <h2
            class="text-xs font-semibold uppercase tracking-wider text-accent/60"
        >
            Experience
        </h2>

        <div class="relative flex flex-col">
            <!-- Timeline line -->
            <div class="absolute left-4 top-6 bottom-6 w-px bg-accent/15"></div>

            {#each experience as entry, i}
                <div
                    class="relative flex gap-4 sm:gap-5 {i !==
                    experience.length - 1
                        ? 'pb-8'
                        : ''}"
                >
                    <!-- Icon node -->
                    <div
                        class="relative z-10 flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-primary/15 text-primary ring-4 ring-card-background"
                    >
                        <Fa icon={entry.icon} class="text-xs" />
                    </div>

                    <!-- Content -->
                    <div class="flex flex-col gap-1.5 pt-0.5 min-w-0">
                        <div
                            class="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2"
                        >
                            <h3 class="text-sm font-semibold leading-tight">
                                {entry.title}
                            </h3>
                            <span class="text-xs text-accent/60"
                                >{entry.subtitle}</span
                            >
                        </div>
                        <span class="text-xs text-primary font-medium"
                            >{entry.date}</span
                        >
                        <p
                            class="text-xs sm:text-sm leading-relaxed text-accent"
                        >
                            {entry.description}
                        </p>
                        {#if entry.tags}
                            <div class="flex flex-wrap gap-1.5 pt-1">
                                {#each entry.tags as tag}
                                    <span
                                        class="text-[0.65rem] font-medium px-2 py-0.5 rounded-md bg-background text-accent"
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

    <hr class="border-accent/15" />

    <!-- Education Section -->
    <div class="flex flex-col gap-4">
        <h2
            class="text-xs font-semibold uppercase tracking-wider text-accent/60"
        >
            Education
        </h2>

        <div class="relative flex flex-col">
            <!-- Timeline line -->
            <div class="absolute left-4 top-6 bottom-6 w-px bg-accent/15"></div>

            {#each education as entry, i}
                <div
                    class="relative flex gap-4 sm:gap-5 {i !==
                    education.length - 1
                        ? 'pb-8'
                        : ''}"
                >
                    <!-- Icon node -->
                    <div
                        class="relative z-10 flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-primary/15 text-primary ring-4 ring-card-background"
                    >
                        <Fa icon={entry.icon} class="text-xs" />
                    </div>

                    <!-- Content -->
                    <div class="flex flex-col gap-1.5 pt-0.5 min-w-0">
                        <div
                            class="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2"
                        >
                            <h3 class="text-sm font-semibold leading-tight">
                                {entry.title}
                            </h3>
                            <span class="text-xs text-accent/60"
                                >{entry.subtitle}</span
                            >
                        </div>
                        <span class="text-xs text-primary font-medium"
                            >{entry.date}</span
                        >
                        <p
                            class="text-xs sm:text-sm leading-relaxed text-accent"
                        >
                            {entry.description}
                        </p>
                        {#if entry.tags}
                            <div class="flex flex-wrap gap-1.5 pt-1">
                                {#each entry.tags as tag}
                                    <span
                                        class="text-[0.65rem] font-medium px-2 py-0.5 rounded-md bg-background text-accent"
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
