<script lang="ts">
    import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
    import { faArrowRight, faArrowUpRightFromSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    import { base } from "$app/paths";
    import { page } from "$app/state";
    import avatar from "$lib/images/pfp2_BW.jpg";
    import "./layout.css";

    const { children } = $props();
    const navItems = [
        { title: "About Me", href: `${base}/about`, external: false },
        { title: "Resume", href: `${base}/resume`, external: false },
        { title: "Projects", href: "https://github.com/Kanerix", external: true },
        { title: "Contact", href: `${base}/contact`, external: false },
    ];
    const languages = ["Rust", "Python", "TypeScript", "Go"];
    const tools = ["Git & GitHub", "Docker & K8s", "SQL & NoSQL"];
    const socials = [
        { icon: faGithub, label: "GitHub", href: "https://github.com/Kanerix" },
        { icon: faLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kanerix" },
        { icon: faEnvelope, label: "Email", href: "mailto:kas@lerpz.com" },
    ];
</script>

<svelte:head>
    <title>Kasper's Portfolio</title>
    <meta name="description" content="Portfolio of Kasper Jønsson — AI & Data Platform Engineer" />
</svelte:head>

<a href="#main-content" class="skip-link">Skip to content</a>
<div class="site-shell">
    <header class="site-header">
        <a href="{base}/about" class="wordmark" aria-label="Kasper Jønsson — home">
            <span class="wordmark-symbol" aria-hidden="true">k<span>.</span></span>
            <span>Kasper Jønsson<span class="wordmark-caption">Engineer & builder</span></span>
        </a>
        <span class="header-note">Copenhagen, Denmark <span aria-hidden="true">↗</span></span>
    </header>

    <div class="portfolio-layout">
        <aside class="profile-panel" aria-label="Profile and skills">
            <div class="profile-identity">
                <div class="portrait-frame">
                    <img src={avatar} alt="Kasper's avatar" width="128" height="128" class="portrait" />
                    <span class="portrait-caption">KASPER / KANERIX</span>
                </div>
                <div>
                    <p class="availability"><span aria-hidden="true"></span>Open to work</p>
                    <h2 class="profile-name">Kasper Jønsson<span class="name-period">.</span></h2>
                    <p class="profile-role">AI & Data<br class="desktop-break" /> Platform Engineer</p>
                </div>
            </div>

            <div class="skill-group">
                <h3 class="section-label">01 / Languages</h3>
                <ul class="skill-list">
                    {#each languages as language}
                        <li><span class="skill-marker" aria-hidden="true">⌁</span>{language}</li>
                    {/each}
                </ul>
            </div>
            <div class="skill-group">
                <h3 class="section-label">02 / Toolkit</h3>
                <ul class="skill-list">
                    {#each tools as tool}
                        <li><span class="skill-marker" aria-hidden="true">⌁</span>{tool}</li>
                    {/each}
                </ul>
            </div>

            <a href="{base}/contact" class="profile-contact">Let’s build something<Fa icon={faArrowRight} /></a>
            <div class="social-links">
                {#each socials as { icon, label, href }}
                    <a {href} aria-label={label} title={label} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noopener noreferrer"}>
                        <Fa {icon} />
                    </a>
                {/each}
                <span class="social-caption">Find me online</span>
            </div>
        </aside>

        <div class="content-panel">
            <nav class="main-nav" aria-label="Main navigation">
                {#each navItems as { title, href, external }}
                    <a {href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} aria-current={page.url.pathname === href ? "page" : undefined} data-sveltekit-preload-data={external ? undefined : "hover"}>
                        {title}
                        {#if external}<Fa icon={faArrowUpRightFromSquare} class="external-icon" />{/if}
                    </a>
                {/each}
            </nav>
            <main id="main-content" tabindex="-1" class="page-content">
                {#key page.url.pathname}
                    <div class="page-enter">{@render children()}</div>
                {/key}
            </main>
        </div>
    </div>

    <footer class="site-footer">
        <span>© {new Date().getFullYear()} Kasper Jønsson</span>
        <span>Built with Svelte. Made with curiosity<span class="name-period">.</span></span>
        <a href="https://github.com/Kanerix" target="_blank" rel="noopener noreferrer">Keep exploring <span aria-hidden="true">↗</span></a>
    </footer>
</div>
