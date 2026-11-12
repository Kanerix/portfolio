<script lang="ts">
    import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    import { resolve } from "$app/paths";
</script>

<svelte:head>
    <title>About Me — Kasper Jønsson</title>
    <meta name="description" content="Meet Kasper Jønsson, an AI & Data Platform Engineer at Egmont and Software Development student at the IT University of Copenhagen." />
</svelte:head>

<div class="about-page">
    <section class="intro section-rule" aria-labelledby="about-heading">
        <p class="eyebrow">About me / A little introduction</p>
        <h1 id="about-heading" class="page-heading">Curious by nature.<br />Engineer by <span class="accent-word">craft.</span></h1>
        <p class="page-intro">
            I’m Kasper, a Software Development student and AI & Data Platform
            Engineer at Egmont. I turn complex problems into useful tools,
            reliable infrastructure, and a little less manual work.
        </p>
        <div class="intro-actions">
            <a href={resolve("/resume")} class="button-primary">Explore my experience <Fa icon={faArrowRight} /></a>
            <a href="https://github.com/Kanerix" target="_blank" rel="noopener noreferrer" class="button-secondary">View GitHub <Fa icon={faArrowUpRightFromSquare} /></a>
        </div>
        <div class="current-focus"><span class="focus-dot" aria-hidden="true"></span><span>Currently building at <strong>Egmont</strong></span><span class="focus-location">Copenhagen, DK</span></div>
    </section>

    <section class="work-section section-rule" aria-labelledby="work-heading">
        <div class="section-topline"><h2 id="work-heading" class="section-heading">Where I make an impact</h2><span class="section-label">01 / What I do</span></div>
        <p class="section-description">Making AI useful is as much about the systems around it as the models themselves.</p>
        <div class="focus-grid">
            <div class="focus-item">
                <span class="focus-number">/01</span>
                <h3>AI & data platforms</h3>
                <p>Helping build a company-wide platform for AI image and video generation.</p>
                <div class="focus-tags"><span class="tag">AI / ML</span><span class="tag">Python</span></div>
            </div>
            <div class="focus-item">
                <span class="focus-number">/02</span>
                <h3>Less busywork.<br />Better workflows.</h3>
                <p>Developing internal automation that gives teams their time back.</p>
                <div class="focus-tags"><span class="tag">Automation</span><span class="tag">TypeScript</span></div>
            </div>
            <div class="focus-item">
                <span class="focus-number">/03</span>
                <h3>A solid foundation</h3>
                <p>Developing and maintaining the infrastructure that makes it all run.</p>
                <div class="focus-tags"><span class="tag">Docker</span><span class="tag">Rust</span></div>
            </div>
        </div>
    </section>

    <section class="beyond-section" aria-labelledby="beyond-heading">
        <div class="section-topline"><h2 id="beyond-heading" class="section-heading">Beyond the keyboard</h2><span class="section-label">02 / The human side</span></div>
        <p class="section-description">Usually climbing, bouldering, or supporting Brøndby IF. I value teamwork and community, whether I’m finding a route up a wall or working through a problem with a team.</p>
        <div class="education-note surface">
            <div><p class="section-label">Always learning</p><h3>B.Sc. Software Development</h3><p>IT University of Copenhagen <span>2023–2027</span></p></div>
            <a href={resolve("/resume")} class="text-link" aria-label="View education in my resume"><Fa icon={faArrowRight} /></a>
        </div>
    </section>
</div>

<style>
    .about-page { display: flex; flex-direction: column; gap: 32px; }
    .intro { padding-bottom: 28px; }
    .accent-word { color: var(--primary); }
    .intro-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 26px; }
    .current-focus { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin-top: 28px; font-size: 10px; color: var(--accent); }
    .current-focus strong { color: var(--foreground); font-weight: 500; }
    .focus-dot { width: 5px; height: 5px; background: var(--primary); border-radius: 50%; }
    .focus-location { margin-left: auto; font-variation-settings: "MONO" 1; font-size: 9px; }
    .section-topline { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .section-topline .section-label { font-size: 8px; }
    .section-description { font-size: 15px; color: var(--accent); line-height: 1.85; margin-top: 14px; }
    .work-section { padding-bottom: 32px; }
    .focus-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 25px; }
    .focus-item { display: flex; flex-direction: column; padding-right: 16px; }
    .focus-item + .focus-item { border-left: 1px solid var(--border); padding-left: 18px; }
    .focus-item:last-child { padding-right: 0; }
    .focus-number { font-variation-settings: "MONO" 1; color: var(--primary); font-size: 10px; margin-bottom: 14px; }
    .focus-item h3 { font-size: 14px; font-weight: 600; line-height: 1.5; min-height: 42px; letter-spacing: -0.3px; }
    .focus-item p { font-size: 13px; line-height: 1.85; color: var(--accent); margin-top: 10px; margin-bottom: 16px; }
    .focus-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: auto; }
    .focus-tags .tag { font-size: 8px; padding: 3px 6px; }
    .education-note { margin-top: 24px; padding: 20px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .education-note .section-label { font-size: 8px; }
    .education-note h3 { font-size: 13px; font-weight: 600; margin-top: 8px; }
    .education-note p:not(.section-label) { color: var(--accent); font-size: 10px; margin-top: 4px; }
    .education-note p span { display: inline-block; margin-left: 12px; font-variation-settings: "MONO" 1; font-size: 9px; }
    .education-note a { display: grid; place-items: center; width: 44px; height: 44px; flex-shrink: 0; }
    @media (max-width: 900px) and (min-width: 701px), (max-width: 440px) {
        .focus-grid { grid-template-columns: 1fr; gap: 20px; }
        .focus-item { padding: 0; }
        .focus-item + .focus-item { padding: 20px 0 0; border-left: 0; border-top: 1px solid var(--border); }
        .focus-number { margin-bottom: 8px; }
        .focus-item h3 { min-height: 0; font-size: 16px; }
        .focus-item p { font-size: 13px; margin-bottom: 12px; }
        .focus-location { margin-left: 13px; }
    }
</style>
