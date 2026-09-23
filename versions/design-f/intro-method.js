(() => {
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const wideLayout = window.matchMedia("(min-width: 981px)");
  const terminal = document.querySelector("[data-intro-terminal]");
  const scrollStory = document.querySelector("[data-method-scroll]");
  const stage = scrollStory?.querySelector(".method-stage");
  const scenes = [...(scrollStory?.querySelectorAll("[data-method-scene]") ?? [])];
  const count = scrollStory?.querySelector("[data-method-count]");
  const clamp = (value) => Math.min(1, Math.max(0, value));

  if (terminal) {
    const typed = terminal.querySelector("[data-intro-typed]");
    const tasks = [...terminal.querySelectorAll("[data-intro-task]")];
    const result = terminal.querySelector("[data-intro-result]");
    const replay = terminal.querySelector("[data-intro-replay]");
    const prompt = typed.textContent;
    let runNumber = 0;
    let hasStarted = false;
    const pause = (duration) => new Promise((resolve) => window.setTimeout(resolve, duration));

    const showComplete = () => {
      runNumber += 1;
      typed.textContent = prompt;
      tasks.forEach((task) => task.classList.add("is-complete"));
      result.classList.add("is-visible");
      terminal.classList.remove("is-playing");
      terminal.classList.add("is-complete");
      replay.hidden = true;
    };

    const play = async () => {
      const thisRun = ++runNumber;
      hasStarted = true;
      terminal.classList.add("is-playing");
      terminal.classList.remove("is-complete");
      typed.textContent = "";
      tasks.forEach((task) => task.classList.remove("is-complete"));
      result.classList.remove("is-visible");
      replay.hidden = false;

      await pause(400);
      for (const character of prompt) {
        if (thisRun !== runNumber || motionPreference.matches) return;
        typed.textContent += character;
        await pause(character === "." ? 175 : 24);
      }
      await pause(390);
      for (const task of tasks) {
        if (thisRun !== runNumber || motionPreference.matches) return;
        task.classList.add("is-complete");
        await pause(530);
      }
      if (thisRun !== runNumber || motionPreference.matches) return;
      result.classList.add("is-visible");
      terminal.classList.remove("is-playing");
      terminal.classList.add("is-complete");
    };

    if (!motionPreference.matches) {
      replay.addEventListener("click", play);
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
          if (entries.some((entry) => entry.isIntersecting) && !hasStarted) {
            observer.disconnect();
            play();
          }
        }, { threshold: .35 });
        observer.observe(terminal);
      } else {
        play();
      }
    }
    motionPreference.addEventListener?.("change", () => {
      if (motionPreference.matches) showComplete();
    });
  }

  if (!scrollStory || !stage || scenes.length === 0) return;
  const starts = [-.08, .29, .64];
  let ticking = false;
  let enhanced = false;

  const render = () => {
    const shouldEnhance = wideLayout.matches && !motionPreference.matches;
    if (shouldEnhance !== enhanced) {
      enhanced = shouldEnhance;
      scrollStory.classList.toggle("is-enhanced", enhanced);
      if (!enhanced) {
        scenes.forEach((scene) => {
          scene.classList.remove("is-current");
          const screen = scene.querySelector(".method-screen");
          screen.style.transform = "";
          screen.style.opacity = "";
        });
        count.textContent = "01—03 / 03";
      }
    }
    if (!enhanced) return;

    const rect = scrollStory.getBoundingClientRect();
    const stickyTop = window.innerHeight * .06;
    const travel = Math.max(1, scrollStory.offsetHeight - stage.offsetHeight - stickyTop);
    const progress = clamp((stickyTop - rect.top) / travel);
    const active = progress >= .66 ? 2 : progress >= .32 ? 1 : 0;
    count.textContent = `0${active + 1} / 03`;
    stage.dataset.methodStep = String(active);

    scenes.forEach((scene, index) => {
      const screen = scene.querySelector(".method-screen");
      const entry = clamp((progress - starts[index]) / .17);
      const retire = index === scenes.length - 1 ? 0 : clamp((progress - starts[index + 1] - .06) / .16);
      const y = (1 - entry) * 165 - retire * 25;
      const angle = (1 - entry) * (index % 2 ? 4.5 : -4.5);
      const scale = .92 + entry * .08 - retire * .035;
      screen.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) rotate(${angle.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      screen.style.opacity = String((entry * (1 - retire * .52)).toFixed(3));
      scene.classList.toggle("is-current", index === active);
    });
  };

  const scheduleRender = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      render();
      ticking = false;
    });
  };

  window.addEventListener("scroll", scheduleRender, { passive: true });
  window.addEventListener("resize", scheduleRender);
  wideLayout.addEventListener?.("change", scheduleRender);
  motionPreference.addEventListener?.("change", scheduleRender);
  render();
})();
