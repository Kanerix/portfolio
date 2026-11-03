<script lang="ts">
    let name = $state("");
    let email = $state("");
    let message = $state("");
</script>

<svelte:head>
    <title>Contact — Kasper Jønsson</title>
    <meta name="description" content="Get in touch with Kasper Jønsson." />
</svelte:head>

<div class="contact-page">
    <header class="page-header section-rule">
        <p class="eyebrow">Contact</p>
        <h1 class="page-heading">Let’s talk.</h1>
        <p class="page-intro">
            Have a project in mind, a question about my work, or just want to connect?
            Reach out directly or use the form to open a message in your email app.
        </p>
    </header>

    <div class="contact-layout">
        <section class="direct-contact" aria-labelledby="direct-heading">
            <h2 class="section-heading" id="direct-heading">Reach out directly</h2>
            <div class="contact-links">
                <a href="mailto:kas@lerpz.com" class="contact-row surface">
                    <span class="section-label">Email</span>
                    <span class="contact-address">kas@lerpz.com</span>
                    <span class="link-arrow" aria-hidden="true">↗</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/kanerix"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="contact-row surface"
                >
                    <span class="section-label">LinkedIn</span>
                    <span class="contact-address">linkedin.com/in/kanerix</span>
                    <span class="link-arrow" aria-hidden="true">↗</span>
                    <span class="visually-hidden">(opens in a new tab)</span>
                </a>
                <a
                    href="https://github.com/Kanerix"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="contact-row surface"
                >
                    <span class="section-label">GitHub</span>
                    <span class="contact-address">github.com/Kanerix</span>
                    <span class="link-arrow" aria-hidden="true">↗</span>
                    <span class="visually-hidden">(opens in a new tab)</span>
                </a>
            </div>
        </section>

        <section class="message-section" aria-labelledby="message-heading">
            <h2 class="section-heading" id="message-heading">Write a message</h2>
            <p class="form-intro" id="form-instructions">All fields are required.</p>
            <form
                action="mailto:kas@lerpz.com"
                method="POST"
                enctype="text/plain"
                aria-describedby="form-instructions email-app-note"
            >
                <div class="identity-fields">
                    <div class="form-field">
                        <label for="name" class="section-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            bind:value={name}
                            autocomplete="name"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div class="form-field">
                        <label for="email" class="section-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            bind:value={email}
                            autocomplete="email"
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                </div>
                <div class="form-field">
                    <label for="message" class="section-label">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        bind:value={message}
                        placeholder="What would you like to say?"
                        required
                        rows={5}
                    ></textarea>
                </div>
                <div class="form-footer">
                    <button type="submit" class="button-primary">
                        Open email app <span aria-hidden="true">↗</span>
                    </button>
                    <p class="email-app-note" id="email-app-note">
                        This opens your configured email app. Review and send the
                        message there; this website does not send it for you.
                        If no app opens, email
                        <a class="text-link" href="mailto:kas@lerpz.com">kas@lerpz.com</a>
                        directly.
                    </p>
                </div>
            </form>
        </section>
    </div>
</div>

<style>
    .contact-page {
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
        max-width: 58ch;
        text-wrap: pretty;
    }

    .contact-layout {
        display: grid;
        grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
        gap: 40px;
        padding-top: 36px;
    }

    .direct-contact,
    .message-section {
        min-width: 0;
    }

    .section-heading {
        margin: 0 0 24px;
    }

    .contact-links {
        display: grid;
        gap: 12px;
    }

    .contact-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 8px 16px;
        padding: 20px;
        color: var(--foreground);
        text-decoration: none;
        transition: border-color 160ms ease, background-color 160ms ease;
    }

    .contact-row .section-label {
        color: var(--accent);
    }

    .contact-address {
        grid-column: 1;
        font-size: 15px;
        line-height: 1.6;
        overflow-wrap: anywhere;
    }

    .link-arrow {
        grid-column: 2;
        grid-row: 1 / 3;
        align-self: center;
        color: var(--primary);
        font-size: 20px;
    }

    .contact-row:hover {
        border-color: var(--primary);
        background-color: var(--background);
    }

    .contact-row:active {
        background-color: var(--surface);
    }

    .form-intro {
        margin: -12px 0 24px;
        color: var(--accent);
        font-size: 14px;
        line-height: 1.6;
    }

    form {
        display: grid;
        gap: 24px;
    }

    .identity-fields {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px;
    }

    .form-field {
        display: grid;
        min-width: 0;
        gap: 10px;
    }

    label {
        color: var(--accent);
    }

    input,
    textarea {
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        padding: 14px 16px;
        border: 1px solid var(--border);
        border-radius: 4px;
        background: var(--surface);
        color: var(--foreground);
        font: inherit;
        font-size: 16px;
        line-height: 1.6;
        transition: border-color 160ms ease;
    }

    input::placeholder,
    textarea::placeholder {
        color: var(--accent);
        opacity: 1;
    }

    input:hover,
    textarea:hover {
        border-color: var(--accent);
    }

    textarea {
        min-height: 180px;
        resize: vertical;
    }

    input:focus,
    textarea:focus,
    .contact-row:focus-visible,
    button:focus-visible,
    .text-link:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 4px;
    }

    input:focus,
    textarea:focus {
        border-color: var(--primary);
    }

    .form-footer {
        display: grid;
        justify-items: start;
        gap: 16px;
    }

    button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        min-height: 48px;
        cursor: pointer;
    }

    button:hover {
        filter: brightness(1.06);
    }

    button:active {
        filter: brightness(0.94);
    }

    .email-app-note {
        max-width: 52ch;
        margin: 0;
        color: var(--accent);
        font-size: 14px;
        line-height: 1.7;
        text-wrap: pretty;
    }

    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip-path: inset(50%);
        white-space: nowrap;
    }

    @container (max-width: 650px) {
        .contact-layout {
            grid-template-columns: minmax(0, 1fr);
            gap: 36px;
        }

        .message-section {
            padding-top: 32px;
            border-top: 1px solid var(--border);
        }
    }

    @media (max-width: 900px) {
        .contact-layout {
            grid-template-columns: minmax(0, 1fr);
            gap: 36px;
        }

        .message-section {
            padding-top: 32px;
            border-top: 1px solid var(--border);
        }
    }

    @media (max-width: 540px) {
        .page-header {
            padding-bottom: 28px;
        }

        .identity-fields {
            grid-template-columns: minmax(0, 1fr);
            gap: 24px;
        }

        button {
            width: 100%;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .contact-row,
        input,
        textarea {
            transition: none;
        }
    }
</style>
