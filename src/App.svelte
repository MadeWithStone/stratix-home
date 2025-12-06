<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
  <meta
    name="description"
    content="Ground Guide delivers AR mapping and rugged hardware to help construction and utility crews see underground infrastructure before they dig."
  />
</svelte:head>

<div class="page">
  <div class="glow glow-one"></div>
  <div class="glow glow-two"></div>

  <header class="site-header">
    <div class="brand">
      <span class="brand-mark">◆</span>
      <span class="brand-name">Ground Guide</span>
    </div>
    <nav class="nav-links">
      <a href="#platform">Platform</a>
      <a href="#hardware">Hardware</a>
      <a href="#workflow">Workflow</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="nav-actions">
      <a class="text-link" href="#hardware">View specs</a>
      <a class="btn primary" href="#contact">Book a demo</a>
    </div>
  </header>

  <main>
    <section class="hero" id="top">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Mapping intelligence for construction and utilities</p>
          <h1>See every buried asset before you dig.</h1>
          <p class="lede">
            Ground Guide combines AR overlays with rugged field hardware so crews can visualize hidden infrastructure, validate
            as-builts, and hand off clean data without slowing work.
          </p>
          <div class="cta-group">
            <a class="btn primary" href="#contact">Schedule a walkthrough</a>
            <a class="btn ghost" href="#workflow">See how it works</a>
          </div>
          <div class="hero-highlights">
            <div class="highlight">
              <span class="dot accent"></span>
              <div>
                <p class="label">Live AR overlays</p>
                <p class="small">Align underground utilities within 5 cm using RTK + lidar.</p>
              </div>
            </div>
            <div class="highlight">
              <span class="dot amber"></span>
              <div>
                <p class="label">Field-to-cloud</p>
                <p class="small">Sync inspections, cross sections, and redlines to one map.</p>
              </div>
            </div>
            <div class="highlight">
              <span class="dot mint"></span>
              <div>
                <p class="label">Crew-ready hardware</p>
                <p class="small">Ruggedized kit survives dust, rain, and week-long deployments.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-frame">
            <img
              src="/header.png"
              alt="Ground Guide mapping overlay displayed on a jobsite device"
            />
            <div class="overlay-card">
              <div class="overlay-row">
                <div class="overlay-label">AR overlay</div>
                <div class="overlay-value">Pipe depth 1.4 m</div>
              </div>
              <div class="overlay-row">
                <div class="overlay-label">Confidence</div>
                <div class="overlay-value strong">98%</div>
              </div>
              <div class="overlay-progress">
                <span>Segment validation</span>
                <div class="progress">
                  <div class="bar"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="stat-strip">
            <div class="stat">
              <p class="stat-number">12 min</p>
              <p class="stat-label">to map a block</p>
            </div>
            <div class="stat">
              <p class="stat-number">-38%</p>
              <p class="stat-label">rework from strikes</p>
            </div>
            <div class="stat">
              <p class="stat-number">5 cm</p>
              <p class="stat-label">positional accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="workflow" id="workflow">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Workflow</p>
          <h2>From scan to share in three moves.</h2>
        </div>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Capture</h3>
            <p>Walk the route with the Ground Guide kit; lidar and RTK anchor pipes, conduits, and road crossings in real time.</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Verify</h3>
            <p>
              Review overlays against design files, add offsets and cross sections, and lock in confidence thresholds before
              crews dig.
            </p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Share</h3>
            <p>
              Publish to the cloud map, push AR layers to field devices, and export GIS/CAD packages for inspectors and
              owners.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="pillars" id="platform">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Platform</p>
          <h2>One map that knows what is underground and where your crews are headed next.</h2>
          <p class="lede">
            Pair accurate positioning with live overlays to keep trenching, boring, and inspections predictable.
          </p>
        </div>
        <div class="pillar-grid">
          <article class="card">
            <div class="tag">AR overlays</div>
            <h3>Reveal hidden utilities in place</h3>
            <p>Stitch lidar, GNSS, and design files to show pipes, conduits, and hazards exactly where crews stand.</p>
            <ul>
              <li>Anchor to RTK for centimeter-grade alignment.</li>
              <li>Toggle layers for electric, gas, water, and fiber.</li>
              <li>Works offline; syncs when signal returns.</li>
            </ul>
          </article>
          <article class="card">
            <div class="tag">Spatial data</div>
            <h3>Keep as-builts living</h3>
            <p>
              Collect photos, offsets, and depth readings that attach to each segment and update the authoritative map
              automatically.
            </p>
            <ul>
              <li>Cross sections and redlines tied to coordinates.</li>
              <li>Quality gates before handoff to GIS/CAD.</li>
              <li>Instant exports for inspectors and subs.</li>
            </ul>
          </article>
          <article class="card">
            <div class="tag">Command center</div>
            <h3>Coordinate every crew</h3>
            <p>Track progress across sites, push overlays to devices, and flag conflicts before equipment rolls.</p>
            <ul>
              <li>Live status by crew, segment, and permit.</li>
              <li>Role-based access for contractors and owners.</li>
              <li>Automatic audit log for compliance.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="split" id="hardware">
      <div class="container split-grid">
        <div class="split-copy">
          <p class="eyebrow">Hardware kit</p>
          <h2>Rugged capture built for jobsite abuse.</h2>
            <p class="lede">
            Ground Guide pairs AR-ready tablets with lidar and RTK so your overlays stay precise while crews stay fast.
          </p>
          <div class="hardware-specs">
            <div class="spec">
              <span class="spec-label">Ingress</span>
              <span class="spec-value">IP67 dust + water</span>
            </div>
            <div class="spec">
              <span class="spec-label">Runtime</span>
              <span class="spec-value">18 hrs hot-swappable</span>
            </div>
            <div class="spec">
              <span class="spec-label">Positioning</span>
              <span class="spec-value">RTK, dual-frequency</span>
            </div>
            <div class="spec">
              <span class="spec-label">Sensors</span>
              <span class="spec-value">360 lidar + IMU</span>
            </div>
          </div>
          <div class="callout">
            <p>
              <strong>Drop it, spray it, keep mapping.</strong> Each kit ships with quick-mount brackets, protective
              case, and calibration in under 90 seconds.
            </p>
          </div>
        </div>
        <div class="split-visual">
          <div class="hardware-frame">
            <img
              src="/equipment.png"
              alt="Ground Guide AR mapping hardware kit with rugged tablet and sensors"
            />
            <div class="badge">Jobsite ready</div>
          </div>
        </div>
      </div>
    </section>

    <section class="trusted">
      <div class="container trusted-grid">
        <div class="trusted-visual">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
            alt="Construction and utility crew collaborating on site"
          />
          <div class="trust-badge">Field crews in action</div>
        </div>
        <div>
          <p class="eyebrow">Trusted by field teams</p>
          <h3>Built with crews, inspectors, and owners in mind.</h3>
            <p class="lede">
            From utility locators to fiber installers, Ground Guide keeps every stakeholder aligned with clean, georeferenced
            data.
          </p>
          <div class="trust-logos">
            <span>Regional utilities</span>
            <span>Pipeline builders</span>
            <span>Fiber installers</span>
            <span>Municipal inspectors</span>
          </div>
        </div>
      </div>
    </section>

    <section class="cta" id="contact">
      <div class="container cta-inner">
        <div>
          <p class="eyebrow">Ready to see it live?</p>
          <h2>Bring AR overlays to your next dig window.</h2>
          <p class="lede">
            Tell us about your sites, utilities, and timelines—we will tailor a demo to your crew and handoff requirements.
          </p>
        </div>
        <div class="cta-actions">
          <a class="btn primary" href="mailto:hello@groundguide.com">Book a demo</a>
          <a class="btn ghost" href="#platform">Preview the platform</a>
        </div>
      </div>
    </section>
  </main>
</div>

<style>
  .page {
    position: relative;
    overflow: hidden;
    min-height: 100vh;
  }

  .glow {
    position: absolute;
    filter: blur(90px);
    opacity: 0.18;
    z-index: 0;
  }

  .glow-one {
    width: 420px;
    height: 420px;
    background: radial-gradient(circle, rgba(15, 118, 110, 0.25), transparent 60%);
    top: -120px;
    left: -120px;
  }

  .glow-two {
    width: 520px;
    height: 520px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.22), transparent 60%);
    top: 120px;
    right: -180px;
  }

  .site-header {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    letter-spacing: 0.04em;
  }

  .brand-mark {
    color: #0f4c46;
    font-size: 18px;
  }

  .nav-links {
    display: flex;
    gap: 18px;
    font-weight: 500;
  }

  .nav-links a {
    padding: 8px 10px;
    border-radius: 10px;
    transition: background 0.2s ease, color 0.2s ease;
  }

  .nav-links a:hover {
    background: #eef2f7;
    color: var(--text);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .text-link {
    color: var(--accent);
    font-weight: 500;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 18px;
    border-radius: 12px;
    font-weight: 600;
    border: 1px solid transparent;
    transition: transform 0.18s ease, box-shadow 0.2s ease, background 0.2s ease, border 0.2s ease;
  }

  .btn.primary {
    background: var(--accent);
    color: #ffffff;
    box-shadow: 0 8px 24px rgba(15, 118, 110, 0.22);
    border: 1px solid #0e6a63;
  }

  .btn.primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 16px 36px rgba(15, 118, 110, 0.28);
    background: #0d6b64;
  }

  .btn.ghost {
    border: 1px solid var(--border);
    color: var(--text);
    background: #f3f6fb;
  }

  .btn.ghost:hover {
    border-color: #d4d8e0;
    background: #e8edf5;
  }

  main {
    position: relative;
    z-index: 1;
  }

  .container {
    width: min(1180px, 92vw);
    margin: 0 auto;
  }

  .hero {
    padding: 64px 0 48px;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 32px;
    align-items: center;
  }

  .hero-copy h1 {
    font-size: clamp(40px, 5vw, 56px);
    margin: 10px 0 14px;
    line-height: 1.05;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(15, 118, 110, 0.1);
    color: #0b5a55;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-size: 12px;
  }

  .lede {
    color: var(--muted);
    margin: 0 0 20px;
    font-size: 17px;
    line-height: 1.6;
  }

  .cta-group {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }

  .hero-highlights {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 12px;
    margin-top: 12px;
  }

  .highlight {
    display: grid;
    gap: 6px;
    padding: 12px 14px 12px 16px;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
    border-left: 4px solid var(--accent);
  }

  .dot {
    display: none;
  }

  .label {
    margin: 0;
    font-weight: 600;
  }

  .small {
    margin: 4px 0 0;
    color: var(--muted);
    font-size: 14px;
  }

  .hero-visual {
    display: grid;
    gap: 14px;
  }

  .hero-frame {
    position: relative;
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--panel);
    box-shadow: 0 26px 46px rgba(15, 23, 42, 0.12);
  }

  .hero-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay-card {
    position: absolute;
    bottom: 16px;
    right: 16px;
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 14px;
    width: min(280px, 90%);
    box-shadow: 0 16px 32px rgba(15, 23, 42, 0.1);
  }

  .overlay-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-weight: 600;
  }

  .overlay-label {
    color: #6b7280;
  }

  .overlay-value.strong {
    color: var(--accent);
  }

  .overlay-progress {
    margin-top: 8px;
  }

  .overlay-progress span {
    color: var(--muted);
    font-size: 13px;
  }

  .progress {
    position: relative;
    background: rgba(15, 23, 42, 0.06);
    border-radius: 8px;
    overflow: hidden;
    margin-top: 6px;
    height: 8px;
  }

  .progress .bar {
    width: 76%;
    height: 100%;
    background: var(--accent);
  }

  .stat-strip {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
  }

  .stat {
    padding: 14px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--panel);
    box-shadow: 0 10px 26px rgba(15, 23, 42, 0.05);
  }

  .stat-number {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: #0f4c46;
  }

  .stat-label {
    margin: 2px 0 0;
    color: var(--muted);
    font-size: 14px;
  }

  .trusted {
    padding: 44px 0 30px;
  }

  .trusted-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
    align-items: center;
  }

  .trusted-visual {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--border);
    box-shadow: 0 18px 36px rgba(15, 23, 42, 0.08);
  }

  .trusted-visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .trust-badge {
    position: absolute;
    bottom: 14px;
    left: 14px;
    padding: 8px 12px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.94);
    border: 1px solid var(--border);
    color: var(--text);
    font-weight: 600;
    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.08);
  }

  .trust-logos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
    margin-top: 14px;
  }

  .trust-logos span {
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px dashed var(--border);
    text-align: center;
    color: var(--muted);
    background: #ffffff;
  }

  .pillars {
    padding: 48px 0;
  }

  .section-head h2 {
    font-size: clamp(28px, 4vw, 38px);
    margin: 6px 0 8px;
  }

  .section-head .lede {
    margin-bottom: 20px;
  }

  .pillar-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
  }

  .card {
    padding: 18px;
    border-radius: 14px;
    border: 1px solid var(--border);
    background: #ffffff;
    box-shadow: 0 16px 32px rgba(15, 23, 42, 0.06);
  }

  .tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    padding: 6px 10px;
    border-radius: 10px;
    background: rgba(15, 118, 110, 0.08);
    color: #0f4c46;
    margin-bottom: 8px;
  }

  .card h3 {
    margin: 0 0 10px;
    font-size: 20px;
  }

  .card p {
    color: var(--muted);
    margin: 0 0 10px;
  }

  .card ul {
    padding-left: 20px;
    color: var(--muted);
    margin: 0;
    display: grid;
    gap: 6px;
  }

  .split {
    padding: 48px 0;
  }

  .split-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 26px;
    align-items: center;
  }

  .hardware-specs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px;
    margin: 18px 0;
  }

  .spec {
    padding: 12px;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: var(--panel);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
  }

  .spec-label {
    color: var(--muted);
    font-size: 13px;
  }

  .spec-value {
    display: block;
    font-weight: 700;
    margin-top: 6px;
  }

  .callout {
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 12px;
    background: rgba(15, 118, 110, 0.06);
  }

  .callout strong {
    color: #0f4c46;
  }

  .hardware-frame {
    position: relative;
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--panel);
    box-shadow: 0 22px 44px rgba(15, 23, 42, 0.1);
  }

  .hardware-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .badge {
    position: absolute;
    top: 14px;
    right: 14px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(15, 118, 110, 0.12);
    color: #0f4c46;
    font-weight: 700;
  }

  .workflow {
    padding: 40px 0 32px;
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin-top: 10px;
  }

  .step {
    padding: 16px;
    border-radius: 14px;
    border: 1px solid var(--border);
    background: var(--panel);
    box-shadow: 0 8px 22px rgba(15, 23, 42, 0.05);
  }

  .step-number {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    background: var(--accent);
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .step h3 {
    margin: 0 0 8px;
  }

  .step p {
    margin: 0;
    color: var(--muted);
  }

  .cta {
    padding: 48px 0 64px;
  }

  .cta-inner {
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 22px;
    background: linear-gradient(140deg, rgba(15, 118, 110, 0.12), rgba(37, 99, 235, 0.08));
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .cta-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  @media (max-width: 820px) {
    .site-header {
      flex-wrap: wrap;
      gap: 10px;
      position: sticky;
    }

    .nav-links {
      width: 100%;
      justify-content: center;
    }

    .nav-actions {
      width: 100%;
      justify-content: flex-end;
    }

    .hero {
      padding-top: 32px;
    }

    .overlay-card {
      position: relative;
      inset: auto;
      margin: 12px;
    }
  }

  @media (max-width: 580px) {
    .site-header {
      position: static;
    }

    .nav-links,
    .nav-actions {
      justify-content: flex-start;
    }
  }
</style>
