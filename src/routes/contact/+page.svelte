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
            class="flex items-center justify-center w-10 h-10 rounded-xl"
            style="background: oklch(0.60 0.18 200 / 0.15); color: oklch(0.70 0.16 200);"
        >
            <Fa icon={faAddressBook} class="text-lg" />
        </div>
        <div>
            <h1 class="text-2xl font-bold leading-tight">Contact</h1>
            <p class="text-sm text-accent/70">Get in touch with me</p>
        </div>
    </div>

    <hr class="border-border" />

    <!-- Quick Links -->
    <div class="flex flex-col gap-3">
        <h2
            class="text-[0.65rem] font-bold uppercase tracking-widest text-accent/50"
        >
            Reach out directly
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <!-- Email -->
            <a
                href="mailto:kas@lerpz.com"
                class="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 group glass-hover"
                style="background: oklch(0.09 0.025 275 / 0.7); border: 1px solid oklch(0.55 0.12 260 / 0.15);"
            >
                <div
                    class="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg"
                    style="background: oklch(0.62 0.22 258 / 0.18);"
                >
                    <Fa icon={faEnvelope} color="oklch(0.72 0.2 258)" />
                </div>
                <div class="min-w-0">
                    <p
                        class="text-sm font-semibold transition-colors duration-200 group-hover:text-white"
                    >
                        Email
                    </p>
                    <p class="text-xs text-accent/60 truncate">kas@lerpz.com</p>
                </div>
            </a>

            <!-- LinkedIn -->
            <a
                href="https://www.linkedin.com/in/kanerix"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 group glass-hover"
                style="background: oklch(0.09 0.025 275 / 0.7); border: 1px solid oklch(0.55 0.12 260 / 0.15);"
            >
                <div
                    class="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg"
                    style="background: oklch(0.60 0.18 200 / 0.18);"
                >
                    <Fa icon={faLinkedin} color="oklch(0.70 0.16 200)" />
                </div>
                <div class="flex items-center gap-1.5 min-w-0">
                    <div>
                        <p
                            class="text-sm font-semibold transition-colors duration-200 group-hover:text-white"
                        >
                            LinkedIn
                        </p>
                        <p class="text-xs text-accent/60 truncate">
                            Connect with me
                        </p>
                    </div>
                </div>
            </a>

            <!-- GitHub -->
            <a
                href="https://github.com/Kanerix"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 group glass-hover"
                style="background: oklch(0.09 0.025 275 / 0.7); border: 1px solid oklch(0.55 0.12 260 / 0.15);"
            >
                <div
                    class="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg"
                    style="background: oklch(0.55 0.24 320 / 0.18);"
                >
                    <Fa icon={faGithub} color="oklch(0.72 0.2 320)" />
                </div>
                <div class="flex items-center gap-1.5 min-w-0">
                    <div>
                        <p
                            class="text-sm font-semibold transition-colors duration-200 group-hover:text-white"
                        >
                            GitHub
                        </p>
                        <p class="text-xs text-accent/60 truncate">
                            View my projects
                        </p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <hr class="border-border" />

    <!-- Contact Form -->
    <div class="flex flex-col gap-4">
        <h2
            class="text-[0.65rem] font-bold uppercase tracking-widest text-accent/50"
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
                    <label
                        for="name"
                        class="text-xs font-semibold text-accent/70 uppercase tracking-wider"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        bind:value={name}
                        placeholder="Your name"
                        required
                        class="w-full px-3 py-2.5 rounded-lg text-sm text-foreground placeholder:text-accent/30 transition-all duration-200 outline-none"
                        style="background: oklch(0.09 0.025 275 / 0.8); border: 1px solid oklch(0.4 0.05 260 / 0.25); focus-within:border-color: oklch(0.62 0.22 258 / 0.6);"
                    />
                </div>

                <!-- Email -->
                <div class="flex flex-col gap-1.5">
                    <label
                        for="email"
                        class="text-xs font-semibold text-accent/70 uppercase tracking-wider"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        bind:value={email}
                        placeholder="your@email.com"
                        required
                        class="w-full px-3 py-2.5 rounded-lg text-sm text-foreground placeholder:text-accent/30 transition-all duration-200 outline-none"
                        style="background: oklch(0.09 0.025 275 / 0.8); border: 1px solid oklch(0.4 0.05 260 / 0.25);"
                    />
                </div>
            </div>

            <!-- Message -->
            <div class="flex flex-col gap-1.5">
                <label
                    for="message"
                    class="text-xs font-semibold text-accent/70 uppercase tracking-wider"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    bind:value={message}
                    placeholder="What would you like to say?"
                    required
                    rows={5}
                    class="w-full px-3 py-2.5 rounded-lg text-sm text-foreground placeholder:text-accent/30 transition-all duration-200 outline-none resize-none"
                    style="background: oklch(0.09 0.025 275 / 0.8); border: 1px solid oklch(0.4 0.05 260 / 0.25);"
                ></textarea>
            </div>

            <!-- Submit -->
            <div>
                <button
                    type="submit"
                    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-all duration-200 hover:brightness-115 active:scale-[0.97] cursor-pointer"
                    style="
                        background: linear-gradient(135deg, oklch(0.62 0.22 258), oklch(0.60 0.18 200));
                        box-shadow: 0 4px 16px oklch(0.62 0.22 258 / 0.35), 0 0 0 1px oklch(0.62 0.22 258 / 0.2);
                    "
                >
                    <Fa icon={faPaperPlane} class="text-xs" />
                    Send Message
                </button>
            </div>
        </form>
    </div>
</div>
