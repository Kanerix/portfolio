<script lang="ts">
    interface TimelineEntry {
        title: string;
        subtitle: string;
        date: string;
        description: string;
        tags?: string[];
    }

    const experience: TimelineEntry[] = [
        {
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

    const sections = [
        { id: "experience", title: "Experience", entries: experience },
        { id: "education", title: "Education", entries: education },
    ];
</script>

<svelte:head>
    <title>Resume — Kasper Jønsson</title>
    <meta
        name="description"
        content="Kasper Jønsson's resume and work experience."
    />
</svelte:head>

<div class="resume-page">
    <header class="page-header section-rule">
        <p class="eyebrow">Resume</p>
        <h1 class="page-heading">Experience &amp; education.</h1>
        <p class="page-intro">
            My work in AI and data platforms, and the technical education behind it.
        </p>
    </header>

    {#each sections as section}
        <section class="resume-section" aria-labelledby={section.id}>
            <h2 class="section-heading" id={section.id}>{section.title}</h2>
            <ol class="timeline">
                {#each section.entries as entry}
                    <li class="timeline-entry">
                        <p class="entry-date section-label">{entry.date}</p>
                        <div class="entry-content">
                            <h3>{entry.title}</h3>
                            <p class="entry-organisation">{entry.subtitle}</p>
                            <p class="entry-description">{entry.description}</p>
                            {#if entry.tags}
                                <ul class="entry-tags" aria-label="Topics and technologies">
                                    {#each entry.tags as tag}
                                        <li class="tag">{tag}</li>
                                    {/each}
                                </ul>
                            {/if}
                        </div>
                    </li>
                {/each}
            </ol>
        </section>
    {/each}
</div>

<style>
    .resume-page {
        min-width: 0;
        color: var(--foreground);
    }

    .page-header {
        display: grid;
        gap: 16px;
        padding-bottom: 36px;
    }

    .page-header p,
    .page-header h1 {
        margin: 0;
    }

    .page-intro {
        max-width: 54ch;
        text-wrap: pretty;
    }

    .resume-section {
        padding-top: 36px;
    }

    .resume-section + .resume-section {
        margin-top: 36px;
        border-top: 1px solid var(--border);
    }

    .section-heading {
        margin: 0 0 28px;
    }

    .timeline {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .timeline-entry {
        display: grid;
        grid-template-columns: 170px minmax(0, 1fr);
        gap: 32px;
    }

    .timeline-entry + .timeline-entry {
        margin-top: 32px;
        padding-top: 32px;
        border-top: 1px solid var(--border);
    }

    .entry-date {
        margin: 0;
        padding-top: 4px;
        color: var(--accent);
        font-size: 12px;
        line-height: 1.8;
        font-variant-numeric: tabular-nums;
    }

    .entry-content {
        min-width: 0;
        padding-left: 24px;
        border-left: 1px solid var(--border);
    }

    .entry-content h3 {
        margin: 0;
        font-size: 20px;
        font-weight: 600;
        line-height: 1.5;
        text-wrap: pretty;
    }

    .entry-organisation {
        margin: 8px 0 0;
        color: var(--primary);
        font-size: 15px;
        line-height: 1.6;
    }

    .entry-description {
        max-width: 65ch;
        margin: 20px 0 0;
        color: var(--accent);
        font-size: 16px;
        line-height: 1.8;
        text-wrap: pretty;
    }

    .entry-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 20px 0 0;
        padding: 0;
        list-style: none;
    }

    @container (max-width: 600px) {
        .timeline-entry {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
        }

        .entry-content {
            padding-left: 16px;
        }
    }

    @media (max-width: 700px) {
        .page-header {
            padding-bottom: 28px;
        }

        .timeline-entry {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
        }

        .entry-date {
            padding-top: 0;
        }

        .entry-content {
            padding-left: 16px;
        }

        .entry-content h3 {
            font-size: 18px;
        }
    }
</style>
