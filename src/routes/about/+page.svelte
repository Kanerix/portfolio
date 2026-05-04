<script lang="ts">
    import {
        faCode,
        faGraduationCap,
        faLightbulb,
        faUser,
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
</script>

<svelte:head>
    <title>About Me — Kasper Jønsson</title>
    <meta
        name="description"
        content="Learn more about Kasper Jønsson, a software engineer."
    />
</svelte:head>

<div class="flex flex-col gap-6">
    <!-- Page Header -->
    <div class="flex items-center gap-3">
        <div
            class="flex items-center justify-center w-10 h-10 rounded-xl"
            style="background: oklch(0.62 0.22 258 / 0.15); color: oklch(0.75 0.18 258);"
        >
            <Fa icon={faUser} class="text-lg" />
        </div>
        <div>
            <h1 class="text-2xl font-bold leading-tight">About Me</h1>
            <p class="text-sm text-accent/70">A little bit about who I am</p>
        </div>
    </div>

    <hr class="border-border" />

    <!-- Introduction -->
    <div class="flex flex-col gap-3">
        <p class="text-sm leading-relaxed text-accent/80">
            I am a passionate and driven Software Development student with a
            strong interest in AI, data and technology. Currently working as an
            AI &amp; Data Platform Engineer at Egmont, I thrive in environments
            where I can solve complex problems and build innovative solutions
            that make a real impact.
        </p>
        <p class="text-sm leading-relaxed text-accent/80">
            Outside of tech, I am an active and social person who values both
            teamwork and community. I am a dedicated Brøndby IF supporter and
            spend a lot of my free time climbing and bouldering — a sport that
            challenges both my physical and mental strength and mirrors my
            approach to problem-solving.
        </p>
    </div>

    <!-- Highlight Cards -->
    <div class="flex flex-col gap-3">
        <div
            class="flex items-start gap-4 p-4 rounded-xl glass-hover transition-all duration-200 cursor-default"
            style="background: oklch(0.09 0.025 275 / 0.7); border: 1px solid oklch(0.55 0.12 260 / 0.15);"
        >
            <span
                class="flex items-center justify-center w-9 h-9 rounded-lg shrink-0 mt-0.5"
                style="background: oklch(0.62 0.22 258 / 0.15); color: oklch(0.72 0.2 258);"
            >
                <Fa icon={faCode} class="text-sm" />
            </span>
            <div>
                <h3 class="text-sm font-semibold mb-1">What I Do</h3>
                <p class="text-xs leading-relaxed text-accent/70">
                    AI &amp; Data platform engineering, process automation and
                    infrastructure development at Egmont — building tools that
                    let teams across the company leverage cutting-edge AI.
                </p>
            </div>
        </div>

        <div
            class="flex items-start gap-4 p-4 rounded-xl glass-hover transition-all duration-200 cursor-default"
            style="background: oklch(0.09 0.025 275 / 0.7); border: 1px solid oklch(0.55 0.12 260 / 0.15);"
        >
            <span
                class="flex items-center justify-center w-9 h-9 rounded-lg shrink-0 mt-0.5"
                style="background: oklch(0.60 0.18 200 / 0.15); color: oklch(0.70 0.16 200);"
            >
                <Fa icon={faGraduationCap} class="text-sm" />
            </span>
            <div>
                <h3 class="text-sm font-semibold mb-1">Education</h3>
                <p class="text-xs leading-relaxed text-accent/70">
                    Pursuing a B.Sc. in Software Development at the IT
                    University of Copenhagen (2023–2027), with a focus on both
                    theoretical and practical software engineering.
                </p>
            </div>
        </div>

        <div
            class="flex items-start gap-4 p-4 rounded-xl glass-hover transition-all duration-200 cursor-default"
            style="background: oklch(0.09 0.025 275 / 0.7); border: 1px solid oklch(0.55 0.12 260 / 0.15);"
        >
            <span
                class="flex items-center justify-center w-9 h-9 rounded-lg shrink-0 mt-0.5"
                style="background: oklch(0.55 0.24 320 / 0.15); color: oklch(0.72 0.2 320);"
            >
                <Fa icon={faLightbulb} class="text-sm" />
            </span>
            <div>
                <h3 class="text-sm font-semibold mb-1">Interests</h3>
                <p class="text-xs leading-relaxed text-accent/70">
                    Climbing &amp; bouldering, supporting Brøndby IF, and
                    exploring the intersection of AI, automation and platform
                    engineering.
                </p>
            </div>
        </div>
    </div>
</div>
