"use client";

import { useEffect, useRef } from "react";
import { PROJECTS } from "@/lib/projects-data";
import { ProjectCard } from "@/components/sections/project-card";

/**
 * Horizontal-scroll gallery for the project cards. The row starts flush
 * with the page's left gutter and bleeds off the right edge of the
 * viewport (matching the design) — the first card shows in full, the next
 * peeks in at the edge. Visitors can swipe or drag (mouse or touch) the
 * row to see the rest, with a glassy "drag" cursor following the pointer
 * whenever it's over a card.
 */
export function ProjectsScroll() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const cursor = cursorRef.current;
    if (!track || !cursor) return;

    let isDown = false;
    let startX = 0;
    let startScrollLeft = 0;

    function dragStart(clientX: number) {
      isDown = true;
      startX = clientX;
      startScrollLeft = track!.scrollLeft;
      cursor!.style.transform = "translate(-50%, -50%) scale(0.85)";
    }

    function dragMove(clientX: number) {
      if (!isDown) return;
      track!.scrollLeft = startScrollLeft - (clientX - startX);
    }

    function dragEnd() {
      isDown = false;
      cursor!.style.transform = "translate(-50%, -50%)";
    }

    function onMouseDown(e: MouseEvent) {
      dragStart(e.clientX);
    }

    function onMouseMove(e: MouseEvent) {
      dragMove(e.clientX);
      const overCard = (e.target as HTMLElement).closest("[data-project-card]");
      cursor!.style.left = `${e.clientX}px`;
      cursor!.style.top = `${e.clientY}px`;
      cursor!.style.opacity = isDown || overCard ? "1" : "0";
    }

    function onMouseUp() {
      dragEnd();
    }

    function onMouseLeave() {
      dragEnd();
      cursor!.style.opacity = "0";
    }

    function onTouchStart(e: TouchEvent) {
      dragStart(e.touches[0].clientX);
    }

    function onTouchMove(e: TouchEvent) {
      dragMove(e.touches[0].clientX);
    }

    function onTouchEnd() {
      dragEnd();
    }

    track.addEventListener("mousedown", onMouseDown);
    track.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    track.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      track.removeEventListener("mousedown", onMouseDown);
      track.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      track.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="no-scrollbar flex select-none gap-4 overflow-x-auto pl-4 pr-4 sm:gap-6 sm:pl-6 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))]"
      >
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            data-project-card
            className="w-[85vw] max-w-[26rem] flex-shrink-0 cursor-none sm:w-[54vw] sm:max-w-[42rem]"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div
        ref={cursorRef}
        style={{ transform: "translate(-50%, -50%)" }}
        className="pointer-events-none fixed z-50 flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/20 text-xs font-medium text-white opacity-0 shadow-lg backdrop-blur-md transition-[opacity,transform] duration-150 ease-out"
      >
        Drag
      </div>
    </div>
  );
}
