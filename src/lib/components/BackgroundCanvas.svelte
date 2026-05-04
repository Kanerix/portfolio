<script lang="ts">
    import { onMount } from "svelte";

    let canvas: HTMLCanvasElement;

    onMount(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (mq.matches) return;

        const maybeCtx = canvas.getContext("2d");
        if (!maybeCtx) return;
        const ctx: CanvasRenderingContext2D = maybeCtx;
        let W = 0,
            H = 0;
        let raf: number;

        interface Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            r: number;
        }

        const COUNT = 65;
        const LINK_DIST = 160;
        const particles: Particle[] = [];

        function resize() {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        }

        function spawn(): Particle {
            return {
                x: Math.random() * W,
                y: Math.random() * H,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: Math.random() * 1.2 + 0.5,
            };
        }

        function tick() {
            ctx.clearRect(0, 0, W, H);

            for (let i = 0; i < COUNT; i++) {
                for (let j = i + 1; j < COUNT; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < LINK_DIST) {
                        const a = (1 - d / LINK_DIST) * 0.22;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(100, 130, 240, ${a})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            for (const p of particles) {
                const g = ctx.createRadialGradient(
                    p.x,
                    p.y,
                    0,
                    p.x,
                    p.y,
                    p.r * 5,
                );
                g.addColorStop(0, "rgba(100, 130, 240, 0.1)");
                g.addColorStop(1, "rgba(100, 130, 240, 0)");
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
                ctx.fillStyle = g;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(135, 160, 255, 0.8)";
                ctx.fill();

                p.x += p.vx;
                p.y += p.vy;
                if (p.x < -10) p.x = W + 10;
                else if (p.x > W + 10) p.x = -10;
                if (p.y < -10) p.y = H + 10;
                else if (p.y > H + 10) p.y = -10;
            }

            raf = requestAnimationFrame(tick);
        }

        resize();
        for (let i = 0; i < COUNT; i++) particles.push(spawn());
        tick();

        window.addEventListener("resize", resize);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
        };
    });
</script>

<canvas
    bind:this={canvas}
    class="fixed inset-0 w-full h-full pointer-events-none"
    style="z-index: 1;"
    aria-hidden="true"
></canvas>
