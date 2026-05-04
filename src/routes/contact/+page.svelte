<script lang="ts">
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faArrowUpRightFromSquare,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Fa from "svelte-fa";

let name = $state("");
let email = $state("");
let message = $state("");
</script>

<svelte:head>
    <title>Contact — Kasper Jønsson</title>
    <meta name="description" content="Get in touch with Kasper Jønsson." />
</svelte:head>

<div class="flex flex-col gap-6">
    <!-- Page Header -->
    <div class="flex items-center gap-3">
        <div
            class="flex items-center justify-center w-10 h-10 rounded-lg bg-background"
        >
            <Fa icon={faAddressBook} class="text-accent text-lg" />
        </div>
        <div>
            <h1 class="text-2xl font-bold leading-tight">Contact</h1>
            <p class="text-sm text-accent">Get in touch with me</p>
        </div>
    </div>

    <hr class="border-accent/15" />

    <!-- Quick Links -->
    <div class="flex flex-col gap-3">
        <h2
            class="text-xs font-semibold uppercase tracking-wider text-accent/60"
        >
            Reach out directly
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <!-- Email -->
            <a
                href="mailto:kas@lerpz.com"
                class="flex items-center gap-3 p-4 rounded-xl bg-background transition-all duration-200 hover:ring-2 hover:ring-primary/30 group"
            >
                <div
                    class="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg bg-primary/15 text-primary transition-colors duration-200 group-hover:bg-primary/25"
                >
                    <Fa icon={faEnvelope} />
                </div>
                <div class="min-w-0">
                    <p
                        class="text-sm font-semibold group-hover:text-primary transition-colors duration-200"
                    >
                        Email
                    </p>
                    <p class="text-xs text-accent truncate">kas@lerpz.com</p>
                </div>
            </a>

            <!-- LinkedIn -->
            <a
                href="https://www.linkedin.com/in/kanerix"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 p-4 rounded-xl bg-background transition-all duration-200 hover:ring-2 hover:ring-primary/30 group"
            >
                <div
                    class="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg bg-primary/15 text-primary transition-colors duration-200 group-hover:bg-primary/25"
                >
                    <Fa icon={faLinkedin} />
                </div>
                <div class="flex items-center gap-1.5 min-w-0">
                    <div>
                        <p
                            class="text-sm font-semibold group-hover:text-primary transition-colors duration-200"
                        >
                            LinkedIn
                        </p>
                        <p class="text-xs text-accent truncate">
                            Connect with me
                        </p>
                    </div>
                    <Fa
                        icon={faArrowUpRightFromSquare}
                        class="text-[0.55rem] text-accent/40 shrink-0"
                    />
                </div>
            </a>

            <!-- GitHub -->
            <a
                href="https://github.com/Kanerix"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 p-4 rounded-xl bg-background transition-all duration-200 hover:ring-2 hover:ring-primary/30 group"
            >
                <div
                    class="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg bg-primary/15 text-primary transition-colors duration-200 group-hover:bg-primary/25"
                >
                    <Fa icon={faGithub} />
                </div>
                <div class="flex items-center gap-1.5 min-w-0">
                    <div>
                        <p
                            class="text-sm font-semibold group-hover:text-primary transition-colors duration-200"
                        >
                            GitHub
                        </p>
                        <p class="text-xs text-accent truncate">
                            View my projects
                        </p>
                    </div>
                    <Fa
                        icon={faArrowUpRightFromSquare}
                        class="text-[0.55rem] text-accent/40 shrink-0"
                    />
                </div>
            </a>
        </div>
    </div>

    <hr class="border-accent/15" />

    <!-- Contact Form -->
    <div class="flex flex-col gap-4">
        <h2
            class="text-xs font-semibold uppercase tracking-wider text-accent/60"
        >
            Send a message
        </h2>

        <form
            action="mailto:kas@lerpz.com"
            method="POST"
            enctype="text/plain"
            class="flex flex-col gap-4"
        >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- Name -->
                <div class="flex flex-col gap-1.5">
                    <label for="name" class="text-xs font-medium text-accent"
                        >Name</label
                    >
                    <input
                        type="text"
                        id="name"
                        name="name"
                        bind:value={name}
                        placeholder="Your name"
                        required
                        class="w-full px-3 py-2.5 rounded-lg bg-background text-sm text-foreground placeholder:text-accent/40 border border-accent/15 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200 outline-none"
                    />
                </div>

                <!-- Email -->
                <div class="flex flex-col gap-1.5">
                    <label for="email" class="text-xs font-medium text-accent"
                        >Email</label
                    >
                    <input
                        type="email"
                        id="email"
                        name="email"
                        bind:value={email}
                        placeholder="your@email.com"
                        required
                        class="w-full px-3 py-2.5 rounded-lg bg-background text-sm text-foreground placeholder:text-accent/40 border border-accent/15 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200 outline-none"
                    />
                </div>
            </div>

            <!-- Message -->
            <div class="flex flex-col gap-1.5">
                <label for="message" class="text-xs font-medium text-accent"
                    >Message</label
                >
                <textarea
                    id="message"
                    name="message"
                    bind:value={message}
                    placeholder="What would you like to say?"
                    required
                    rows={5}
                    class="w-full px-3 py-2.5 rounded-lg bg-background text-sm text-foreground placeholder:text-accent/40 border border-accent/15 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200 outline-none resize-none"
                ></textarea>
            </div>

            <!-- Submit -->
            <div>
                <button
                    type="submit"
                    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium shadow-md shadow-primary/25 transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98] cursor-pointer"
                >
                    <Fa icon={faPaperPlane} class="text-xs" />
                    Send Message
                </button>
            </div>
        </form>
    </div>
</div>
