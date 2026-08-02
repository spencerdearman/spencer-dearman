/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import { useState, useRef, useEffect, useCallback } from 'react';

const EVENTS = [
  { label: 'Morning',   time: '7:00 AM',  icon: '/images/contextOS/icons/sun.svg',          accent: '#FF8D00', img: '/images/contextOS/morning.jpeg' },
  { label: 'Schedule',  time: '9:00 AM',  icon: '/images/contextOS/icons/calendar.svg',     accent: '#007BFF', img: '/images/contextOS/schedule.jpeg' },
  { label: 'On-Device', time: '12:00 PM', icon: '/images/contextOS/icons/intelligence.svg', accent: '#4AA6FF', img: '/images/contextOS/meeting.jpeg' },
  { label: 'Run',       time: '3:30 PM',  icon: '/images/contextOS/icons/run.svg',          accent: '#00CF42', img: '/images/contextOS/training.jpeg' },
  { label: 'Photo',     time: '5:30 PM',  icon: '/images/contextOS/icons/photo.svg',        accent: '#FF0089', img: '/images/contextOS/photo.jpeg' },
  { label: 'Memories',  time: '10:00 PM', icon: '/images/contextOS/icons/moon.svg',         accent: '#5957DF', img: '/images/contextOS/memories.jpeg' },
];

const N = EVENTS.length;

// Tick geometry (scaled-down version of the full ContextOS page)
const LEAD      = 2;
const BETWEEN   = 2;
const TRAIL     = 2;
const TICK_W    = 2;
const TICK_GAP  = 5;
const TICK_STEP = TICK_W + TICK_GAP;
const TICK_H_MINOR = 5;
const TICK_H_EVENT = 12;

const { TICKS, EVENT_IDXS } = (() => {
  const ticks = [];
  const eventIdxs = [];
  for (let i = 0; i < LEAD; i++) ticks.push({ kind: 'minor' });
  for (let ei = 0; ei < N; ei++) {
    eventIdxs.push(ticks.length);
    ticks.push({ kind: 'event', ei });
    if (ei < N - 1) for (let i = 0; i < BETWEEN; i++) ticks.push({ kind: 'minor' });
  }
  for (let i = 0; i < TRAIL; i++) ticks.push({ kind: 'minor' });
  return { TICKS: ticks, EVENT_IDXS: eventIdxs };
})();

// Center-x of tick at index i
const tickCx = (i) => i * TICK_STEP + TICK_W / 2;

const ContextOSTile = () => {
  const [active, setActive]     = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [vpWidth, setVpWidth]   = useState(0);
  const tileRef    = useRef(null);
  const trackVpRef = useRef(null);

  // Measure the track viewport width so we can compute the offset
  useEffect(() => {
    const el = trackVpRef.current;
    if (!el) return;
    const obs = new ResizeObserver(([entry]) => {
      setVpWidth(entry.contentRect.width);
    });
    obs.observe(el);
    setVpWidth(el.getBoundingClientRect().width);
    return () => obs.disconnect();
  }, []);

  // Auto-cycle through events when tile is not hovered
  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(() => setActive((prev) => (prev + 1) % N), 1800);
    return () => clearInterval(id);
  }, [isHovered]);

  // Map mouse X within the tile to an event index
  const handleMouseMove = useCallback((e) => {
    const rect = tileRef.current?.getBoundingClientRect();
    if (!rect) return;
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setActive(Math.min(N - 1, Math.floor(ratio * N)));
  }, []);

  const ae = EVENTS[active];

  // Track translation: center the active event's tick in the viewport
  const trackX = vpWidth > 0
    ? vpWidth / 2 - tickCx(EVENT_IDXS[active])
    : 0;

  return (
    <div
      ref={tileRef}
      style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#000', borderRadius: 'inherit', overflow: 'hidden', cursor: 'default' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px 6px' }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
          ContextOS
        </span>
        <div key={`hdr-${active}`} style={{ animation: 'cosTileFade .3s ease' }}>
          <img src={ae.icon} alt={ae.label} style={{ width: 16, height: 16, objectFit: 'contain' }} />
        </div>
      </div>

      {/* Screenshot — crossfades between events */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px 16px' }}>
        {EVENTS.map((e, i) => (
          <img
            key={i}
            src={e.img}
            alt={e.label}
            draggable={false}
            style={{
              position: 'absolute',
              maxHeight: '100%',
              maxWidth: '62%',
              objectFit: 'contain',
              opacity: i === active ? 1 : 0,
              transform: i === active ? 'translateY(0px)' : 'translateY(8px)',
              transition: 'opacity .35s ease, transform .35s ease',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />
        ))}
      </div>

      {/* Mini scrubber pill */}
      <div style={{ padding: '0 14px 16px', display: 'flex', justifyContent: 'center' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          height: 44,
          padding: '0 16px',
          boxSizing: 'border-box',
          background: 'rgba(28,28,30,0.95)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.08)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>

          {/* Icon + label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
            <img
              key={`icon-${active}`}
              src={ae.icon}
              alt=""
              style={{ width: 14, height: 14, objectFit: 'contain', animation: 'cosTileFade .3s ease' }}
            />
            <span
              key={`txt-${active}`}
              style={{ fontSize: 12, fontWeight: 600, color: '#fff', whiteSpace: 'nowrap', animation: 'cosTileFade .3s ease' }}
            >
              {ae.label}
            </span>
          </div>

          {/* Track viewport — fixed center cursor, moving tick track */}
          <div
            ref={trackVpRef}
            style={{ width: 64, flexShrink: 0, position: 'relative', height: 22, overflow: 'hidden' }}
          >
            {/* Glowing white playhead */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 2, height: 16,
              background: '#fff', borderRadius: 2,
              boxShadow: '0 0 4px 1px rgba(255,255,255,0.35)',
              zIndex: 10, pointerEvents: 'none',
            }} />

            {/* Moving tick track */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              marginTop: -(TICK_H_EVENT / 2),
              display: 'flex',
              alignItems: 'center',
              gap: `${TICK_GAP}px`,
              transform: `translateX(${trackX}px)`,
              transition: 'transform .35s ease',
            }}>
              {TICKS.map((tick, i) => {
                const isEvent  = tick.kind === 'event';
                const isActive = isEvent && tick.ei === active;
                const h        = isEvent ? TICK_H_EVENT : TICK_H_MINOR;
                const color    = isEvent ? EVENTS[tick.ei].accent : 'rgba(255,255,255,0.15)';
                const opacity  = isEvent ? (isActive ? 1 : 0.28) : 1;
                return (
                  <div key={i} style={{
                    width: TICK_W, height: h,
                    background: color, opacity,
                    transition: 'opacity .3s ease',
                    borderRadius: 2, flexShrink: 0,
                  }} />
                );
              })}
            </div>
          </div>

          {/* Time */}
          <div style={{ minWidth: 48, textAlign: 'right', flexShrink: 0 }}>
            <span
              key={`time-${active}`}
              style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.45)', animation: 'cosTileFade .3s ease' }}
            >
              {ae.time}
            </span>
          </div>

        </div>
      </div>

      <style>{`@keyframes cosTileFade { from { opacity:0 } to { opacity:1 } }`}</style>
    </div>
  );
};

export default ContextOSTile;
