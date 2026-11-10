"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { SwitchScenery } from "./SwitchScenery";

type Phase = "ready" | "cut" | "blackout" | "awakening" | "signal";

export function Switch() {
  const [phase, setPhase] = useState<Phase>("ready");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const sceneRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const transitioning = phase === "cut" || phase === "blackout" || phase === "awakening";
  const signal = phase === "awakening" || phase === "signal";

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const observer = new IntersectionObserver(([entry]) => {
      scene.dataset.active = String(entry.isIntersecting);
    }, { threshold: 0.05 });
    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  function flipSwitch() {
    if (transitioning) return;
    timers.current.forEach(clearTimeout);
    timers.current = [];

    if (signal) {
      setPhase("ready");
      return;
    }

    if (reduceMotion) {
      setPhase("signal");
      return;
    }

    setPhase("cut");
    timers.current.push(setTimeout(() => setPhase("blackout"), 1100));
    timers.current.push(setTimeout(() => setPhase("awakening"), 1850));
    timers.current.push(setTimeout(() => setPhase("signal"), 2850));
  }

  return (
    <section className="section switch-section" id="switch" aria-labelledby="switch-title">
      <div className="shell switch-heading">
        <p className="eyebrow">The switch</p>
        <h2 id="switch-title">Watch the lights go.<br />Watch the legend wake.</h2>
        <p>Cut the city power. A second switch turns on. That is the BlackX moment.</p>
      </div>

      <div className="shell switch-scene-wrap">
        <div ref={sceneRef} className={`switch-scene switch-scene--${phase}`} data-phase={phase}>
          <SwitchScenery />
          <div className="scene-scrim" aria-hidden="true" />
          <div className="scene-cut-veil" aria-hidden="true" />
          <div className="scene-signal-trace" aria-hidden="true" />

          <div className="scene-meta">
            <span>BLACKX / THE SWITCH</span>
            <span className="scene-status" role="status" aria-live="polite">
              <span className="scene-status-light" />
              {phase === "ready" ? "CITY GRID ONLINE" : phase === "cut" ? "GRID FAILING" : phase === "blackout" ? "TOTAL BLACKOUT" : phase === "awakening" ? "SIGNAL DETECTED" : "XRP SIGNAL ONLINE"}
            </span>
          </div>

          <div className="scene-instruction" aria-hidden={phase !== "ready"}>
            <span>THE CITY IS LIT</span>
            <p>One move changes everything.</p>
          </div>

          <div className="scene-dock">
            <div className="scene-control">
              <div className="scene-control-copy"><span>01 / CITY POWER</span><strong>{phase === "ready" ? "ON" : "OFF"}</strong></div>
              <button
                type="button"
                className={`scene-lever ${phase !== "ready" ? "scene-lever--down" : ""}`}
                onClick={flipSwitch}
                disabled={transitioning}
                aria-pressed={phase !== "ready"}
                aria-label={signal ? "Restore city lights and reset the switch" : "Flip the city power switch off"}
              ><span className="scene-lever-well"><span className="scene-lever-handle" /></span></button>
            </div>
            <div className="scene-wire" aria-hidden="true"><span /></div>
            <div className="scene-control scene-control--signal">
              <div className="scene-control-copy"><span>02 / XRP SIGNAL</span><strong>{signal ? "ON" : "OFF"}</strong></div>
              <div className={`scene-lever scene-lever--passive ${signal ? "scene-lever--signal" : ""}`} aria-hidden="true"><span className="scene-lever-well"><span className="scene-lever-handle" /></span></div>
            </div>
          </div>
        </div>
        <div className="switch-understory" aria-live="polite">
          <p>{phase === "signal" ? "The city is dark. The 589 legend appears on the billboard. Flip the first switch to replay." : transitioning ? "The grid falls silent. Watch the second switch come on." : "Flip the first switch to see the blackout become the signal."}</p>
          <p>589 is an XRP community meme and speculative price target, not a guarantee.</p>
        </div>
      </div>
    </section>
  );
}
