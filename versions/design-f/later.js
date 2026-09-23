(() => {
  document.documentElement.classList.add("later-ready");
  const ownershipScroll = document.querySelector("[data-ownership-scroll]");
  const ownershipSticky = ownershipScroll?.querySelector(".ownership-sticky");
  const ownershipScene = ownershipScroll?.querySelector("[data-ownership-scene]");
  const ownershipCopy = [...document.querySelectorAll("[data-owner-copy]")];
  const ownershipEvents = [...document.querySelectorAll("[data-owner-event]")];
  const boundary = document.querySelector(".boundary");
  const boundaryItems = [...document.querySelectorAll("[data-boundary-item]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const wideLayout = window.matchMedia("(min-width: 981px)");
  const clamp = (value) => Math.min(1, Math.max(0, value));
  let lastPhase = -1;
  let lastShowAllCopy = false;

  const setPhase = (phase, showAllCopy = false) => {
    if (!ownershipScene || !ownershipSticky || (phase === lastPhase && showAllCopy === lastShowAllCopy)) return;
    lastPhase = phase;
    lastShowAllCopy = showAllCopy;
    ownershipScene.dataset.phase = String(phase);
    ownershipSticky.dataset.phase = String(phase);
    ownershipEvents.forEach((event) => {
      event.classList.toggle("is-visible", Number(event.dataset.ownerEvent) <= phase || showAllCopy);
    });
    ownershipCopy.forEach((copy, index) => {
      const active = index === phase;
      copy.classList.toggle("is-active", active);
      if (showAllCopy) copy.removeAttribute("aria-hidden");
      else copy.setAttribute("aria-hidden", String(!active));
    });
  };

  const updateScenes = () => {
    const staticLayout = reduceMotion.matches || !wideLayout.matches;
    if (ownershipScroll && ownershipSticky) {
      if (staticLayout) {
        setPhase(3, true);
      } else {
        const rect = ownershipScroll.getBoundingClientRect();
        const travel = Math.max(1, ownershipScroll.offsetHeight - ownershipSticky.offsetHeight);
        const progress = clamp((window.innerHeight * .05 - rect.top) / travel);
        setPhase(Math.min(3, Math.floor(progress * 4)));
      }
    }

    if (boundary) {
      if (reduceMotion.matches) {
        boundaryItems.forEach((item) => item.classList.add("is-visible"));
      } else {
        const progress = clamp((window.innerHeight * .85 - boundary.getBoundingClientRect().top) / (window.innerHeight * .6));
        boundaryItems.forEach((item, index) => item.classList.toggle("is-visible", progress >= [.1, .4, .7][index]));
      }
    }
  };

  let scheduled = false;
  const scheduleUpdate = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      updateScenes();
      scheduled = false;
    });
  };

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  reduceMotion.addEventListener("change", scheduleUpdate);
  wideLayout.addEventListener("change", scheduleUpdate);
  updateScenes();
})();
