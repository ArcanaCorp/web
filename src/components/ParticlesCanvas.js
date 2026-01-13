import { useEffect, useRef } from "react";

export default function ParticlesCanvas() {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: null, y: null });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles = [];
        const PARTICLE_COUNT = Math.floor((width * height) / 15000);
        const REPULSE_RADIUS = 120;

        class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.size = Math.random() * 1.5 + 0.5;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255,0.6)";
            ctx.fill();
        }

        update() {
            if (mouse.current.x !== null) {
            const dx = this.x - mouse.current.x;
            const dy = this.y - mouse.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < REPULSE_RADIUS) {
                const force = (REPULSE_RADIUS - distance) / REPULSE_RADIUS;
                this.vx += (dx / distance) * force * 0.6;
                this.vy += (dy / distance) * force * 0.6;
            }
            }

            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            this.draw();
        }
        }

        for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
        }

        const animate = () => {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => p.update());
        requestAnimationFrame(animate);
        };

        animate();

        const onMouseMove = e => {
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;
        };

        const onResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("resize", onResize);

        return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="--hero-canvas absolute inset-0" />;
}