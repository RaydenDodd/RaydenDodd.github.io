(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href^='#']");
    if (!a) return;
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  const mount = document.getElementById("cards");
  if (!mount) return;

  const isProjects = !!window.PROJECTS;
  const items = isProjects ? window.PROJECTS : (window.GAMES || []);
  const page = isProjects ? "projects" : "games";

  mount.innerHTML = items.map((item) => {
    const tags = (item.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("");
    const title = escapeHtml(item.title);
    const desc = escapeHtml(item.desc || "");

    if (page === "projects") {
      const href = item.href;
      return `
        <article class="card">
          <h3>${title}</h3>
          <p>${desc}</p>
          <div class="tag-row">${tags}</div>
          <div class="card-actions">
            <a class="btn small" href="${href}" target="_blank" rel="noopener">View on GitHub</a>
          </div>
        </article>
      `;
    }

    // games
    const slug = encodeURIComponent(item.slug);
    const t = encodeURIComponent(item.title);
    const d = encodeURIComponent(item.desc || "");
    return `
      <article class="card">
        <h3>${title}</h3>
        <p>${desc}</p>
        <div class="tag-row">${tags}</div>
        <div class="card-actions">
          <a class="btn small" href="play.html?g=${slug}&t=${t}&d=${d}">Play</a>
          <a class="btn small ghost" href="games/${slug}/index.html" target="_blank" rel="noopener">Open in new tab</a>
        </div>
      </article>
    `;
  }).join("");

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
})();
