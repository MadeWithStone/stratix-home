<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600;700&display=swap"
    rel="stylesheet"
  />
  <meta
    name="description"
    content="Sub Vysion delivers AR mapping and rugged hardware to help construction and utility crews see underground infrastructure before they dig."
  />
</svelte:head>

<div class="relative min-h-screen overflow-hidden font-sans">
  <div class="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-teal-200/60 to-emerald-100/40 blur-3xl"></div>
  <div class="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-sky-200/50 to-indigo-100/40 blur-3xl"></div>

  <header class="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
    <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
      <div class="flex items-center gap-2 font-semibold tracking-wide text-slate-900">
        <span class="text-lg text-teal-700">◆</span>
        <span>Sub Vysion</span>
      </div>
      <nav class="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
        <a class="hover:text-teal-700" href="#platform">Platform</a>
        <a class="hover:text-teal-700" href="#hardware">Hardware</a>
        <a class="hover:text-teal-700" href="#workflow">Workflow</a>
        <a class="hover:text-teal-700" href="#contact">Contact</a>
      </nav>
      <div class="flex items-center gap-3">
        <a class="text-sm font-semibold text-teal-700 hover:text-teal-800" href="#hardware">View specs</a>
        <a
          class="inline-flex items-center gap-2 rounded-xl border border-transparent bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition hover:-translate-y-0.5 hover:bg-teal-800"
          href="#contact"
        >
          Book a demo
        </a>
      </div>
    </div>
  </header>

  <main class="relative z-10">
    <section class="py-14 sm:py-16">
      <div class="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.05fr_0.95fr]">
        <div class="space-y-5">
          <p class="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800">
            Mapping intelligence for construction and utilities
          </p>
          <h1 class="text-4xl font-display font-semibold leading-tight text-slate-900 sm:text-5xl">
            See every buried asset before you dig.
          </h1>
          <p class="text-lg text-slate-600">
            Sub Vysion combines AR overlays with rugged field hardware so crews can visualize hidden infrastructure,
            validate as-builts, and hand off clean data without slowing work.
          </p>
          <div class="flex flex-wrap gap-3">
            <a
              class="inline-flex items-center gap-2 rounded-xl border border-teal-700 bg-teal-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:-translate-y-0.5 hover:bg-teal-800"
              href="#contact"
            >
              Schedule a walkthrough
            </a>
            <a
              class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
              href="#workflow"
            >
              See how it works
            </a>
          </div>
          <div class="grid gap-3 md:grid-cols-3">
            <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <p class="text-xs font-semibold uppercase tracking-wide text-teal-700">Live AR overlays</p>
              <p class="mt-1 text-sm text-slate-600">Align underground utilities within 5 cm using RTK + lidar.</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <p class="text-xs font-semibold uppercase tracking-wide text-teal-700">Field-to-cloud</p>
              <p class="mt-1 text-sm text-slate-600">Sync inspections, cross sections, and redlines to one map.</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <p class="text-xs font-semibold uppercase tracking-wide text-teal-700">Crew-ready hardware</p>
              <p class="mt-1 text-sm text-slate-600">Ruggedized kit survives dust, rain, and week-long deployments.</p>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
            <img src="header.png" alt="Sub Vysion mapping overlay displayed on a jobsite device" class="h-full w-full object-cover" />
            <div class="absolute bottom-4 right-4 w-full max-w-[280px] rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-lg shadow-slate-900/5 backdrop-blur">
              <div class="flex items-center justify-between text-sm font-semibold text-slate-800">
                <span class="text-slate-500">AR overlay</span>
                <span>Pipe depth 1.4 m</span>
              </div>
              <div class="mt-2 flex items-center justify-between text-sm font-semibold text-slate-800">
                <span class="text-slate-500">Confidence</span>
                <span class="text-teal-700">98%</span>
              </div>
              <div class="mt-3 space-y-1">
                <p class="text-xs font-medium text-slate-500">Segment validation</p>
                <div class="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div class="h-full w-3/4 rounded-full bg-teal-600"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-3">
            <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm">
              <p class="text-xl font-semibold text-teal-800">12 min</p>
              <p class="text-xs uppercase tracking-wide text-slate-500">to map a block</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm">
              <p class="text-xl font-semibold text-teal-800">-38%</p>
              <p class="text-xs uppercase tracking-wide text-slate-500">rework from strikes</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm">
              <p class="text-xl font-semibold text-teal-800">5 cm</p>
              <p class="text-xs uppercase tracking-wide text-slate-500">positional accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 sm:py-14" id="workflow">
      <div class="mx-auto max-w-6xl px-6">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800">
              Workflow
            </p>
            <h2 class="mt-3 text-3xl font-display font-semibold text-slate-900 sm:text-4xl">From scan to share in three moves.</h2>
          </div>
        </div>
        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-sm font-semibold text-teal-800">1</div>
            <h3 class="mt-4 text-lg font-semibold text-slate-900">Capture</h3>
            <p class="mt-2 text-slate-600">
              Walk the route with the Sub Vysion kit; lidar and RTK anchor pipes, conduits, and road crossings in real time.
            </p>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-sm font-semibold text-teal-800">2</div>
            <h3 class="mt-4 text-lg font-semibold text-slate-900">Verify</h3>
            <p class="mt-2 text-slate-600">
              Review overlays against design files, add offsets and cross sections, and lock in confidence thresholds before crews dig.
            </p>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-sm font-semibold text-teal-800">3</div>
            <h3 class="mt-4 text-lg font-semibold text-slate-900">Share</h3>
            <p class="mt-2 text-slate-600">
              Publish to the cloud map, push AR layers to field devices, and export GIS/CAD packages for inspectors and owners.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 sm:py-14" id="platform">
      <div class="mx-auto max-w-6xl px-6">
        <div class="space-y-3">
          <p class="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800">
            Platform
          </p>
          <h2 class="text-3xl font-display font-semibold text-slate-900 sm:text-4xl">
            One map that knows what is underground and where your crews are headed next.
          </h2>
          <p class="text-lg text-slate-600">
            Pair accurate positioning with live overlays to keep trenching, boring, and inspections predictable.
          </p>
        </div>
        <div class="mt-8 grid gap-4 md:grid-cols-3">
          <article class="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div class="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              AR overlays
            </div>
            <h3 class="text-xl font-semibold text-slate-900">Reveal hidden utilities in place</h3>
            <p class="text-slate-600">
              Stitch lidar, GNSS, and design files to show pipes, conduits, and hazards exactly where crews stand.
            </p>
            <ul class="mt-1 space-y-2 text-sm text-slate-600">
              <li>• Anchor to RTK for centimeter-grade alignment.</li>
              <li>• Toggle layers for electric, gas, water, and fiber.</li>
              <li>• Works offline; syncs when signal returns.</li>
            </ul>
          </article>
          <article class="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div class="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Spatial data
            </div>
            <h3 class="text-xl font-semibold text-slate-900">Keep as-builts living</h3>
            <p class="text-slate-600">
              Collect photos, offsets, and depth readings that attach to each segment and update the authoritative map automatically.
            </p>
            <ul class="mt-1 space-y-2 text-sm text-slate-600">
              <li>• Cross sections and redlines tied to coordinates.</li>
              <li>• Quality gates before handoff to GIS/CAD.</li>
              <li>• Instant exports for inspectors and subs.</li>
            </ul>
          </article>
          <article class="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div class="inline-flex w-fit items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
              Command center
            </div>
            <h3 class="text-xl font-semibold text-slate-900">Coordinate every crew</h3>
            <p class="text-slate-600">
              Track progress across sites, push overlays to devices, and flag conflicts before equipment rolls.
            </p>
            <ul class="mt-1 space-y-2 text-sm text-slate-600">
              <li>• Live status by crew, segment, and permit.</li>
              <li>• Role-based access for contractors and owners.</li>
              <li>• Automatic audit log for compliance.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="py-12 sm:py-14" id="hardware">
      <div class="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
        <div class="space-y-3">
          <p class="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800">
            Hardware kit
          </p>
          <h2 class="text-3xl font-display font-semibold text-slate-900 sm:text-4xl">Rugged capture built for jobsite abuse.</h2>
          <p class="text-lg text-slate-600">
            Sub Vysion pairs AR-ready tablets with lidar and RTK so your overlays stay precise while crews stay fast.
          </p>
          <div class="grid gap-3 sm:grid-cols-2">
            <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Ingress</p>
              <p class="text-base font-semibold text-slate-900">IP67 dust + water</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Runtime</p>
              <p class="text-base font-semibold text-slate-900">18 hrs hot-swappable</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Positioning</p>
              <p class="text-base font-semibold text-slate-900">RTK, dual-frequency</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Sensors</p>
              <p class="text-base font-semibold text-slate-900">360 lidar + IMU</p>
            </div>
          </div>
          <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <p class="text-sm text-slate-700">
              <span class="font-semibold text-slate-900">Drop it, spray it, keep mapping.</span> Each kit ships with
              quick-mount brackets, protective case, and calibration in under 90 seconds.
            </p>
          </div>
        </div>
        <div class="relative">
          <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
            <img src="equipment.png" alt="Sub Vysion AR mapping hardware kit with rugged tablet and sensors" class="h-full w-full object-cover" />
            <div class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-teal-800 shadow-sm backdrop-blur">
              Jobsite ready
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 sm:py-14">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div class="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
              alt="Construction and utility crew collaborating on site"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="space-y-4">
            <p class="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800">
              Trusted by field teams
            </p>
            <h3 class="text-2xl font-display font-semibold text-slate-900 sm:text-3xl">
              Built with crews, inspectors, and owners in mind.
            </h3>
            <p class="text-lg text-slate-600">
              From utility locators to fiber installers, Sub Vysion keeps every stakeholder aligned with clean, georeferenced data.
            </p>
            <div class="grid gap-3 sm:grid-cols-2">
              <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                Regional utilities
              </div>
              <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                Pipeline builders
              </div>
              <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                Fiber installers
              </div>
              <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                Municipal inspectors
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-16" id="contact">
      <div class="mx-auto max-w-6xl px-6">
        <div class="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-gradient-to-r from-teal-700 to-sky-700 px-6 py-8 text-white shadow-card sm:flex-row sm:items-center sm:justify-between">
          <div class="space-y-2">
            <p class="text-sm font-semibold uppercase tracking-wide text-teal-100">Ready to see it live?</p>
            <h2 class="text-3xl font-display font-semibold">Bring AR overlays to your next dig window.</h2>
            <p class="text-base text-teal-100">
              Tell us about your sites, utilities, and timelines—we will tailor a demo to your crew and handoff requirements.
            </p>
          </div>
          <div class="flex flex-wrap gap-3">
            <a
              class="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              href="mailto:hello@subvysion.com"
            >
              Book a demo
            </a>
            <a
              class="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              href="#platform"
            >
              Preview the platform
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
