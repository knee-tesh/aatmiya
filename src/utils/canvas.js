const BLOB_COUNT = 5;
const PARTICLE_COUNT_DESKTOP = 50;
const PARTICLE_COUNT_MOBILE = 25;
const PARTICLE_MIN_OPACITY = 0.2;
const PARTICLE_MAX_OPACITY = 0.5;

const BLOB_COLORS = [
  "rgba(108, 99, 255, 0.4)",   // aurora
  "rgba(0, 212, 255, 0.3)",    // cyan
  "rgba(90, 50, 180, 0.35)",   // deep violet
  "rgba(108, 99, 255, 0.25)",  // aurora faint
  "rgba(0, 180, 220, 0.3)",    // cyan faint
];

function isMobile() {
  return window.innerWidth < 768;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function initCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  let animId;
  let scrollProgress = 0;
  let lastTime = 0;
  const targetFps = isMobile() ? 30 : 60;
  const frameInterval = 1000 / targetFps;

  const blobs = Array.from({ length: BLOB_COUNT }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.0003,
    vy: (Math.random() - 0.5) * 0.0003,
    radius: 0.15 + Math.random() * 0.15,
    color: BLOB_COLORS[Math.floor(Math.random() * BLOB_COLORS.length)],
  }));

  const particleCount = isMobile() ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
  const particles = Array.from({ length: particleCount }, () => ({
    x: Math.random(),
    y: Math.random(),
    speed: 0.0002 + Math.random() * 0.0004,
    opacity: PARTICLE_MIN_OPACITY + Math.random() * (PARTICLE_MAX_OPACITY - PARTICLE_MIN_OPACITY),
    size: 1 + Math.random() * 2,
  }));

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawBlobs(time) {
    blobs.forEach((blob) => {
      blob.x += blob.vx + Math.sin(time * 0.0005 + blob.y * 10) * 0.00005;
      blob.y += blob.vy + Math.cos(time * 0.0003 + blob.x * 10) * 0.00005;

      // wrap around
      if (blob.x < -0.2) blob.x = 1.2;
      if (blob.x > 1.2) blob.x = -0.2;
      if (blob.y < -0.2) blob.y = 1.2;
      if (blob.y > 1.2) blob.y = -0.2;

      // parallax from scroll
      const parallaxY = blob.y + scrollProgress * 0.05;

      const cx = blob.x * canvas.width;
      const cy = parallaxY * canvas.height;
      const r = blob.radius * Math.min(canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      gradient.addColorStop(0, blob.color);
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function drawParticles() {
    particles.forEach((p) => {
      p.y -= p.speed;
      if (p.y < -0.05) {
        p.y = 1.05;
        p.x = Math.random();
      }

      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      ctx.beginPath();
      ctx.arc(p.x * canvas.width, p.y * canvas.height, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function animate(time) {
    animId = requestAnimationFrame(animate);

    // frame skip for mobile
    if (time - lastTime < frameInterval) return;
    lastTime = time;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBlobs(time);
    drawParticles();
  }

  function onScroll() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  }

  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("scroll", onScroll, { passive: true });
  animId = requestAnimationFrame(animate);

  return {
    destroy() {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    },
    setScrollProgress(p) {
      scrollProgress = p;
    },
  };
}
