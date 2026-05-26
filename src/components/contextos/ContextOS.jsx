/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import { ButtonPrimary } from "../Button";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// ─── Events ───────────────────────────────────────────────────────────────────

const EVENTS = [
  {
    label: "Morning",    time: "7:00 AM",  icon: "/images/contextOS/icons/sun.svg",          accent: "#FF8D00",
    img: "/images/contextOS/morning.jpeg",
    title: "Morning briefing.",
    desc:  "Opens to a summary of last night's sleep, current weather, and today's upcoming events — compiled into a single card each morning.",
  },
  {
    label: "Schedule",   time: "9:00 AM",  icon: "/images/contextOS/icons/calendar.svg",     accent: "#007BFF",
    img: "/images/contextOS/schedule.jpeg",
    title: "Daily schedule.",
    desc:  "Calendar events laid out in a scrollable timeline with meeting links, locations, and direct access to Maps, Zoom, and Calendar.",
  },
  {
    label: "On-Device",  time: "12:00 PM", icon: "/images/contextOS/icons/intelligence.svg", accent: "#4AA6FF",
    img: "/images/contextOS/meeting.jpeg",
    title: "Runs entirely on-device.",
    desc:  "All processing happens locally using Apple Foundation Models. Health, calendar, and photo data is never sent to external servers.",
    gradient: true,
  },
  {
    label: "Run",        time: "3:30 PM",  icon: "/images/contextOS/icons/run.svg",          accent: "#00CF42",
    img: "/images/contextOS/training.jpeg",
    title: "Workout summaries.",
    desc:  "Completed workouts appear automatically with active calories, average heart rate, distance, and pace. Tap to open in Fitness.",
  },
  {
    label: "Photo",      time: "5:30 PM",  icon: "/images/contextOS/icons/photo.svg",        accent: "#FF0089",
    img: "/images/contextOS/photo.jpeg",
    title: "Photo context.",
    desc:  "Recent photos are analyzed on-device using Vision, surfacing scene, location, and weather context alongside your daily timeline.",
  },
  {
    label: "Memories",   time: "10:00 PM", icon: "/images/contextOS/icons/moon.svg",         accent: "#5957DF",
    img: "/images/contextOS/memories.jpeg",
    title: "Save to Memories.",
    desc:  "Long-press any card to save it as a Memory. Saved cards sync across your devices through iCloud.",
  },
];

const N = EVENTS.length;

// ─── Scrubber tick geometry ───────────────────────────────────────────────────

const LEAD      = 8;
const BETWEEN   = 12;
const TRAIL     = 8;
const TICK_W    = 3;   // thin ticks matching app reference
const TICK_GAP  = 7;
const TICK_STEP = TICK_W + TICK_GAP; // 10 px per tick slot
const TICK_H_MINOR = 10; // fixed minor tick height
const TICK_H_EVENT = 20; // fixed event tick height (2×)

const { TICKS, EVENT_IDXS } = (() => {
  const TICKS = [];
  const EVENT_IDXS = [];
  for (let i = 0; i < LEAD; i++) TICKS.push({ kind: "minor" });
  for (let ei = 0; ei < N; ei++) {
    EVENT_IDXS.push(TICKS.length);
    TICKS.push({ kind: "event", ei });
    if (ei < N - 1) for (let i = 0; i < BETWEEN; i++) TICKS.push({ kind: "minor" });
  }
  for (let i = 0; i < TRAIL; i++) TICKS.push({ kind: "minor" });
  return { TICKS, EVENT_IDXS };
})();

// Center-x of tick at index i
const tickCx = (i) => i * TICK_STEP + TICK_W / 2;

// Two fixed heights only — event ticks taller, minor ticks consistent
const tickH = (i) => EVENT_IDXS.includes(i) ? TICK_H_EVENT : TICK_H_MINOR;

// ─── Component ────────────────────────────────────────────────────────────────

const ContextOS = () => {
  const outerRef       = useRef(null);
  const trackVpRef     = useRef(null);
  const trackRef       = useRef(null);
  const [active, setActive] = useState(0);
  const activeRef      = useRef(0);

  useEffect(() => {
    document.title = "ContextOS";
    const fav = document.querySelector("link[rel~='icon']");
    const def = fav.href;
    const themeMeta = document.querySelector("meta[name='theme-color']");
    if (themeMeta) themeMeta.setAttribute("content", "#000000");
    const prevHtmlBg = document.documentElement.style.backgroundColor;
    const prevBodyBg = document.body.style.backgroundColor;
    document.documentElement.style.backgroundColor = "#000";
    document.body.style.backgroundColor = "#000";
    return () => {
      fav.href = def;
      document.title = "Spencer Dearman - Portfolio";
      if (themeMeta) themeMeta.setAttribute("content", "#ffffff");
      document.documentElement.style.backgroundColor = prevHtmlBg;
      document.body.style.backgroundColor = prevBodyBg;
    };
  }, []);

  useGSAP(() => {
    const vp    = trackVpRef.current;
    const track = trackRef.current;
    const outer = outerRef.current;
    if (!vp || !track || !outer) return;

    const vpW  = vp.getBoundingClientRect().width;
    const cx   = vpW / 2;
    const from = cx - tickCx(EVENT_IDXS[0]);
    const to   = cx - tickCx(EVENT_IDXS[N - 1]);

    // Set initial x position — vertical centering handled by CSS marginTop
    gsap.set(track, { x: from });

    gsap.to(track, {
      x: to,
      ease: "none",
      scrollTrigger: {
        trigger: outer,
        start: () => `top+=${window.innerHeight * 0.4} top`,
        end:   () => `bottom-=${window.innerHeight * 0.4} top`,
        scrub: 1.2,
        invalidateOnRefresh: true,
        onUpdate(self) {
          const idx = Math.min(N - 1, Math.floor(self.progress * N));
          if (idx !== activeRef.current) {
            activeRef.current = idx;
            setActive(idx);
          }
        },
      },
    });
  }, { dependencies: [] });

  const ae = EVENTS[active];

  return (
    <section style={{ background: "#000", color: "#fff" }}>

      <style>{`
        /* Time chip */
        .cos-chip {
          display: inline-flex; flex-direction: column; align-items: center;
          padding: 10px 20px;
          background: rgba(36,36,36,0.88);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.08);
          line-height: 1.45;
        }
        /* Scrubber pill */
        .cos-scrubber {
          display: flex; align-items: center; gap: 14px;
          padding: 12px 20px;
          background: rgba(28,28,30,0.92);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.07);
        }
        @media (max-width: 768px) {
          .cos-scrubber { gap: 10px; padding: 9px 14px; }
          .cos-cursor { height: 20px; }
        }
        /* Glowing white playhead cursor */
        .cos-cursor {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 3px; height: 28px;
          background: #fff; border-radius: 2px;
          box-shadow: 0 0 4px 1px rgba(255,255,255,0.35);
          z-index: 10; pointer-events: none;
        }
        /* Card content crossfade */
        .cos-in  { opacity: 1; transform: translateY(0px);  transition: opacity .4s ease, transform .4s ease; }
        .cos-out { opacity: 0; transform: translateY(10px); transition: opacity .3s ease, transform .3s ease; pointer-events: none; }
        /* Scrubber label fade on change */
        @keyframes cosFadeIn { from { opacity: 0 } to { opacity: 1 } }
        .cos-label-fade { animation: cosFadeIn .3s ease; }
      `}</style>

      {/* ═══════════════════════════════════════════════════════ HERO */}
      <div
        className="relative h-screen flex flex-col items-center justify-center text-center px-6"
        style={{ background: "#000" }}
      >
        <h1
          className="font-black tracking-tight leading-[1.04] text-white"
          style={{ fontSize: "clamp(52px, 9vw, 96px)" }}
        >
          ContextOS
        </h1>

        <div className="absolute bottom-10 flex items-center justify-center" style={{ opacity: 0.35 }}>
          <span className="material-symbols-rounded text-zinc-400" style={{ fontSize: 20 }}>keyboard_arrow_down</span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════ PINNED TIMELINE */}
      {/* Outer div creates N×100vh of scroll space */}
      <div ref={outerRef} style={{ height: `${N * 100 + 80}vh` }}>
        {/* Sticky inner stays pinned while outer scrolls */}
        <div
          className="sticky top-0 h-screen flex flex-col overflow-hidden"
          style={{ background: "#000" }}
        >

          {/* ── Main content area ──────────────────────────────────────── */}
          <div className="flex-1 flex items-center justify-center overflow-hidden md:pr-4">

            {/* Group: text + card, centered as a unit */}
            <div className="flex items-center gap-12 px-6 md:px-0">

              {/* Desktop text */}
              <div className="hidden md:block shrink-0 relative" style={{ width: 340, minHeight: 200 }}>
                {EVENTS.map((e, i) => (
                  <div
                    key={i}
                    className={i === active ? "cos-in" : "cos-out"}
                    style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}
                  >
                    {e.gradient ? (
                      <h2 className="font-bold mb-3 leading-tight pb-1 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent" style={{ fontSize: "clamp(26px, 2.8vw, 42px)" }}>
                        {e.title}
                      </h2>
                    ) : (
                      <h2 className="font-bold mb-3 leading-tight text-white" style={{ fontSize: "clamp(26px, 2.8vw, 42px)" }}>
                        {e.title}
                      </h2>
                    )}
                    <p className="text-zinc-400 leading-relaxed" style={{ fontSize: 16 }}>{e.desc}</p>
                  </div>
                ))}
              </div>

              {/* Screenshot */}
              <div className="flex flex-col items-center gap-10">
                <div className="flex justify-center items-center relative" style={{ width: "min(520px, 90vw)", height: "min(85vw, calc(100vh - 260px))", minHeight: 260 }}>
                  {EVENTS.map((e, i) => (
                    <img
                      key={i}
                      src={e.img}
                      alt={e.title}
                      className={i === active ? "cos-in" : "cos-out"}
                      style={{ position: "absolute", width: "100%", maxHeight: "100%", objectFit: "contain" }}
                    />
                  ))}
                </div>

                {/* Mobile text — below card */}
                <div className="md:hidden relative text-center" style={{ width: "min(520px, 90vw)", minHeight: 80 }}>
                  {EVENTS.map((e, i) => (
                    <div
                      key={i}
                      className={i === active ? "cos-in" : "cos-out"}
                      style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}
                    >
                      {e.gradient ? (
                        <h2 className="font-bold mb-1 leading-tight pb-1 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent" style={{ fontSize: "clamp(20px, 5vw, 28px)" }}>
                          {e.title}
                        </h2>
                      ) : (
                        <h2 className="font-bold mb-1 leading-tight text-white" style={{ fontSize: "clamp(20px, 5vw, 28px)" }}>
                          {e.title}
                        </h2>
                      )}
                      <p className="text-zinc-400 leading-relaxed" style={{ fontSize: 13 }}>{e.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ── Scrubber pill ──────────────────────────────────────────── */}
          <div className="shrink-0 pb-8 md:pb-8 px-6 flex justify-center" style={{ paddingBottom: "max(32px, calc(env(safe-area-inset-bottom) + 24px))" }}>
            <div className="cos-scrubber" style={{ width: "min(640px, calc(100% - 48px))" }}>

              {/* Left: icon + label */}
              <div
                key={`l-${active}`}
                className="cos-label-fade shrink-0 flex items-center gap-2"
                style={{ minWidth: 110 }}
              >
                <img
                  src={ae.icon}
                  alt={ae.label}
                  style={{ width: 18, height: 18, objectFit: "contain" }}
                />
                <span
                  style={{
                    fontSize: 13, fontWeight: 600, color: "#fff",
                    whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 88,
                  }}
                >
                  {ae.label}
                </span>
              </div>

              {/* Track viewport — overflow hidden with fixed-center cursor */}
              <div
                ref={trackVpRef}
                style={{ flex: 1, position: "relative", overflow: "hidden", height: 40 }}
              >
                {/* White glowing playhead */}
                <div className="cos-cursor" />


                {/* Moving tick track */}
                <div
                  ref={trackRef}
                  style={{
                    position:   "absolute",
                    top:        "50%",
                    left:       0,
                    marginTop:  -(TICK_H_EVENT / 2),
                    display:    "flex",
                    alignItems: "center",
                    gap:        `${TICK_GAP}px`,
                  }}
                >
                  {TICKS.map((tick, i) => {
                    const isEvent = tick.kind === "event";
                    const h = tickH(i);
                    const color = isEvent
                      ? EVENTS[tick.ei].accent
                      : `rgba(255,255,255,${h > 12 ? 0.32 : 0.15})`;
                    // Active event tick = full opacity; inactive event ticks = dimmed
                    const opacity = isEvent ? (tick.ei === active ? 1 : 0.28) : 1;
                    return (
                      <div
                        key={i}
                        style={{
                          width:      TICK_W,
                          height:     h,
                          background: color,
                          opacity,
                          transition: "opacity 0.4s ease",
                          borderRadius: 2,
                          flexShrink: 0,
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Right: time */}
              <div
                key={`r-${active}`}
                className="cos-label-fade shrink-0"
                style={{ minWidth: 64, textAlign: "right" }}
              >
                <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.45)" }}>
                  {ae.time}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ════════════════════════════════════════════════ WIDGET GALLERY */}
      <div style={{ background: "#000", paddingTop: 96, paddingBottom: 96 }}>
        <div className="text-center px-6 mb-12">
          <h2 className="font-bold text-white mb-3" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>
            Widgets that adapt.
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Small, medium, and large — each one shifts based on your context,<br className="hidden md:block" /> health, weather, and schedule.
          </p>
        </div>
        {/* Desktop: full-width. Mobile: horizontally scrollable so widgets are legible */}
        <div className="hidden md:block">
          <img src="/images/contextOS/widget-grid.png" alt="ContextOS widget gallery" style={{ display: "block", width: "100%" }} />
        </div>
        <div
          className="md:hidden"
          style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}
        >
          <img
            src="/images/contextOS/widget-grid.png"
            alt="ContextOS widget gallery"
            style={{ display: "block", width: 760, maxWidth: "none" }}
          />
        </div>
        <p style={{ textAlign: "center", marginTop: 20, fontSize: 12, color: "rgba(255,255,255,0.3)", letterSpacing: "0.02em" }}>
          All widgets captured on an actual device.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════ FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #1a1a1a",
          padding: "28px 0",
          display: "flex",
          justifyContent: "center",
          gap: 32,
        }}
      >
        <Link to="/"                   className="text-zinc-600 hover:text-white transition-colors text-sm">Portfolio</Link>
        <Link to="/contextos/privacy"  className="text-zinc-600 hover:text-white transition-colors text-sm">Privacy</Link>
      </footer>

    </section>
  );
};

export default ContextOS;
