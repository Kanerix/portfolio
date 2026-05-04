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
            class="flex items-center justify-center w-10 h-10 rounded-lg bg-background"
        >
            <Fa icon={faUser} class="text-accent text-lg" />
        </div>
        <div>
            <h1 class="text-2xl font-bold leading-tight">About Me</h1>
            <p class="text-sm text-accent">A little bit about who I am</p>
        </div>
    </div>

    <hr class="border-accent/15" />

    <!-- Introduction -->
    <div class="flex flex-col gap-3">
        <p class="text-sm leading-relaxed text-accent">
            Ut aute duis voluptate laboris voluptate. Ut ad velit reprehenderit
            irure adipisicing est et magna sunt consequat excepteur. Incididunt
            minim laboris ad do excepteur. Cupidatat mollit anim consequat do
            non sunt commodo. Quis tempor eu magna minim in nostrud voluptate
            veniam. Adipisicing qui est reprehenderit incididunt officia id enim
            nisi aute dolor. Irure Lorem magna tempor.
        </p>
        <p class="text-sm leading-relaxed text-accent">
            Ullamco non consectetur fugiat in qui. Tempor est dolore irure do
            amet minim. Esse ullamco mollit ipsum ea dolor ad velit consequat
            sint cillum ea reprehenderit reprehenderit. Ipsum consequat dolore
            commodo nisi. Culpa enim qui officia sint minim aliquip nisi eiusmod
            voluptate irure incididunt sunt mollit ullamco.
        </p>
    </div>

    <!-- Highlight Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div class="flex flex-col gap-2 p-4 rounded-xl bg-background">
            <div class="flex items-center gap-2">
                <Fa icon={faCode} class="text-accent/60" />
                <h3 class="text-sm font-semibold">What I Do</h3>
            </div>
            <p class="text-xs leading-relaxed text-accent">
                I build robust and scalable software with a focus on backend
                systems, cloud infrastructure, and developer tooling.
            </p>
        </div>

        <div class="flex flex-col gap-2 p-4 rounded-xl bg-background">
            <div class="flex items-center gap-2">
                <Fa icon={faGraduationCap} class="text-accent/60" />
                <h3 class="text-sm font-semibold">Education</h3>
            </div>
            <p class="text-xs leading-relaxed text-accent">
                Currently pursuing a degree in software engineering, combining
                academic foundations with hands-on project experience.
            </p>
        </div>

        <div class="flex flex-col gap-2 p-4 rounded-xl bg-background">
            <div class="flex items-center gap-2">
                <Fa icon={faLightbulb} class="text-accent/60" />
                <h3 class="text-sm font-semibold">Interests</h3>
            </div>
            <p class="text-xs leading-relaxed text-accent">
                Passionate about systems programming, open source, and exploring
                new technologies that push the boundaries of performance.
            </p>
        </div>
    </div>
</div>
