(() => {
  document.documentElement.classList.add("middle-ready");
  const session = document.querySelector("[data-session-scene]");
  const sessionShell = session?.querySelector(".plan-shell");
  const sessionHeading = session?.querySelector(".chapter-heading");
  const sessionStory = session?.querySelector("[data-plan-story]");
  const sessionSteps = [...(session?.querySelectorAll("[data-session-step]") ?? [])];
  const sessionPhases = [...(session?.querySelectorAll("[data-session-phase]") ?? [])];
  const sessionCount = session?.querySelector("[data-session-count]");
  const sessionPanel = session?.querySelector("[data-session-panel]");
  const outputRunway = document.querySelector("[data-output-runway]");
  const outputStage = outputRunway?.querySelector("[data-output-stage]");
  const outputVideos = [...(outputRunway?.querySelectorAll("[data-output-video]") ?? [])];
  const outputPercent = outputRunway?.querySelector("[data-output-percent]");
  const outputInstruction = outputRunway?.querySelector(".outputs-stage-heading > span:first-child");
  const wideSession = window.matchMedia("(min-width: 981px)");
  const wideVideo = window.matchMedia("(min-width: 761px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const clamp = (value) => Math.max(0, Math.min(1, value));
  let activeSession = -1;
  let frame = 0;
  let outputControllers = [];

  function updateSession() {
    if (!sessionShell || !sessionHeading || !sessionStory || !sessionSteps.length) return;

    if (!wideSession.matches || reducedMotion.matches) {
      sessionSteps.forEach((step) => step.classList.add("is-active"));
      sessionPhases.forEach((phase) => {
        phase.classList.add("is-active");
        phase.removeAttribute("aria-hidden");
        phase.inert = false;
      });
      if (sessionCount) sessionCount.textContent = "01–04 / 04";
      sessionPanel?.style.setProperty("--session-progress", "1");
      activeSession = -1;
      return;
    }

    const shellRect = sessionShell.getBoundingClientRect();
    const headingRect = sessionHeading.getBoundingClientRect();
    const headingMargin = Number.parseFloat(getComputedStyle(sessionHeading).marginBottom) || 0;
    const naturalTop = headingRect.bottom - shellRect.top + headingMargin;
    const stickyTop = Number.parseFloat(getComputedStyle(sessionStory).top) || 0;
    const scrollDistance = Math.max(1, shellRect.height - naturalTop - sessionStory.getBoundingClientRect().height);
    const progress = clamp((stickyTop - shellRect.top - naturalTop) / scrollDistance);
    const nextActive = Math.min(sessionSteps.length - 1, Math.floor(progress * sessionSteps.length));
    sessionPanel?.style.setProperty("--session-progress", String(Math.max(.25, progress)));
    if (nextActive === activeSession) return;
    activeSession = nextActive;
    sessionSteps.forEach((step, index) => step.classList.toggle("is-active", index === nextActive));
    sessionPhases.forEach((phase, index) => {
      const selected = index === nextActive;
      phase.classList.toggle("is-active", selected);
      phase.setAttribute("aria-hidden", String(!selected));
      phase.inert = !selected;
    });
    if (sessionCount) sessionCount.textContent = `${String(nextActive + 1).padStart(2, "0")} / ${String(sessionSteps.length).padStart(2, "0")}`;
  }

  function scheduleSession() {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      updateSession();
    });
  }

  function setOutputProgress(progress) {
    const value = clamp(progress);
    outputRunway?.style.setProperty("--output-progress", String(value));
    if (outputPercent) outputPercent.textContent = `${String(Math.round(value * 100)).padStart(2, "0")}%`;
  }

  function updateOutputMode() {
    if (!outputRunway || !outputStage || !outputVideos.length) return;
    const enabled = wideVideo.matches && !reducedMotion.matches && Boolean(window.ScrollVideoScrubber?.createVideoScrubber);
    if (!enabled) {
      outputControllers.forEach((controller) => controller.destroy());
      outputControllers = [];
      outputVideos.forEach((video, index) => video.controls = index === 0);
      if (outputInstruction) outputInstruction.textContent = "PLAY THE SAMPLE VIDEO";
      setOutputProgress(0);
      return;
    }
    if (outputControllers.length) return;
    if (outputInstruction) outputInstruction.textContent = "SCROLL TO SCRUB BOTH VIEWS";
    outputControllers = outputVideos.map((video, index) => window.ScrollVideoScrubber.createVideoScrubber({
      root: outputRunway,
      sticky: outputStage,
      video,
      onProgress: index === 0 ? setOutputProgress : undefined,
      onError: () => { video.controls = index === 0; }
    }));
  }

  window.addEventListener("scroll", scheduleSession, { passive: true });
  window.addEventListener("resize", scheduleSession, { passive: true });
  wideSession.addEventListener("change", scheduleSession);
  reducedMotion.addEventListener("change", () => { scheduleSession(); updateOutputMode(); });
  wideVideo.addEventListener("change", updateOutputMode);
  updateSession();
  updateOutputMode();
})();
