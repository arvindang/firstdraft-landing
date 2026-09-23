(() => {
  const section = document.querySelector('[data-thread-section]');
  const track = section?.querySelector('[data-thread-track]');
  const host = section?.querySelector('[data-thread-svg]');
  const steps = [...(section?.querySelectorAll('[data-thread-step]') || [])];
  if (!section || !track || !host || !steps.length || !window.SVG) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const compact = window.matchMedia('(max-width: 900px)');
  const draw = window.SVG().addTo(host).size('100%', '100%');
  let drawnPath;
  let pathLength = 1;

  const redraw = () => {
    const bounds = track.getBoundingClientRect();
    const points = steps.map((step) => {
      const mark = step.querySelector('.thread-mark').getBoundingClientRect();
      return { x: mark.left + mark.width / 2 - bounds.left, y: mark.top + mark.height / 2 - bounds.top };
    });
    const commands = [`M ${points[0].x} ${points[0].y}`];
    for (let index = 1; index < points.length; index += 1) {
      const before = points[index - 1];
      const after = points[index];
      if (compact.matches) {
        const middle = (before.y + after.y) / 2;
        commands.push(`C ${before.x} ${middle}, ${after.x} ${middle}, ${after.x} ${after.y}`);
      } else {
        const middle = (before.x + after.x) / 2;
        commands.push(`C ${middle} ${before.y}, ${middle} ${after.y}, ${after.x} ${after.y}`);
      }
    }
    draw.clear();
    draw.viewbox(0, 0, bounds.width, bounds.height);
    const pathData = commands.join(' ');
    draw.path(pathData).fill('none').stroke({ color: '#ccc5ba', width: 2, linecap: 'round' });
    drawnPath = draw.path(pathData).fill('none').stroke({ color: '#a65d46', width: 2.5, linecap: 'round' });
    pathLength = drawnPath.node.getTotalLength();
    drawnPath.attr({ 'stroke-dasharray': pathLength, 'stroke-dashoffset': pathLength });
    update();
  };

  const update = () => {
    const rect = section.getBoundingClientRect();
    const travel = Math.max(1, rect.height + window.innerHeight * .45);
    const progress = reducedMotion.matches || compact.matches ? 1 : Math.min(1, Math.max(0, (window.innerHeight * .72 - rect.top) / travel));
    drawnPath?.attr({ 'stroke-dashoffset': pathLength * (1 - progress) });
    const active = Math.min(steps.length - 1, Math.floor(progress * steps.length));
    steps.forEach((step, index) => {
      step.classList.toggle('is-active', !reducedMotion.matches && !compact.matches && index === active);
      step.classList.toggle('is-passed', !reducedMotion.matches && !compact.matches && index < active);
    });
  };

  let pending = false;
  window.addEventListener('scroll', () => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => { update(); pending = false; });
  }, { passive: true });
  window.addEventListener('resize', redraw);
  reducedMotion.addEventListener('change', redraw);
  compact.addEventListener('change', redraw);
  redraw();
})();
