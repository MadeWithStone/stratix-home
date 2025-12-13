<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600;700&display=swap"
    rel="stylesheet"
  />
  <meta
    name="description"
    content="Sub Vysion lets crews upload their own GIS and CAD maps, align visually, and view accurate AR overlays on site or on the web."
  />
</svelte:head>

<div class="relative min-h-screen overflow-hidden font-sans">
  <div
    class="absolute inset-x-0 top-0 -z-10 h-[110vh] min-h-[720px] bg-cover bg-center bg-no-repeat"
    style="background-image: linear-gradient(180deg, rgba(0,0,0,0.28), rgba(0,0,0,0.6)), url('header.png'); background-size: cover; background-position: center; background-repeat: no-repeat;"
  ></div>
  <header class="sticky top-0 z-30 bg-transparent">
    <div class="relative">
      <div
        class="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-white"
      >
        <div class="flex items-center gap-3 font-semibold tracking-wide">
          <span
            class="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/25 ring-1 ring-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          >
            <span
              class="h-2.5 w-2.5 rounded-full bg-teal-300 ring-2 ring-white/70 shadow-[0_0_0_8px_rgba(94,234,212,0.25)]"
            ></span>
          </span>
          <span>Sub Vysion</span>
        </div>
        <nav
          class="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex"
        >
          <a class="hover:text-white" href="#workflow">Workflow</a>
          <a class="hover:text-white" href="#platform">Platform</a>
          <a class="hover:text-white" href="#pricing">Pricing</a>
          <a class="hover:text-white" href="#trusted">Trusted</a>
          <a class="hover:text-white" href="#contact">Contact</a>
        </nav>
        <div class="flex items-center gap-3">
          <a
            class="text-sm font-semibold text-white/80 underline decoration-white/30 underline-offset-4 transition hover:text-white"
            href="#workflow">View workflow</a
          >
          <a
            class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-teal-500/20 transition hover:-translate-y-0.5 hover:bg-white"
            href="https://subvysion.setmore.com/services/71a943e6-77b0-4cdb-934f-de94600a9bb5"
            target="_blank"
            rel="noreferrer"
          >
            Book a demo
          </a>
        </div>
      </div>
    </div>
  </header>

  <main class="relative z-10">
    <section class="relative overflow-hidden py-20 sm:py-24 text-white">
      <div class="relative mx-auto max-w-5xl px-6">
        <div
          class="space-y-7 max-w-3xl md:w-3/5"
          style="text-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);"
        >
          <p
          class="inline-flex items-center gap-2 rounded-full bg-white/25 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white ring-1 ring-white/30"
          >
            Bring your own maps to life in AR
          </p>
          <h1
            class="text-4xl font-display font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            See every buried asset before you dig.
          </h1>
          <p class="max-w-2xl text-lg text-slate-100">
            Turn your GIS, CAD, or as-built data into accurate AR overlays,
            align visually on site, and walk your own maps in the field or on
            the web.
          </p>
          <div class="flex flex-wrap gap-3">
            <a
              class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-xl shadow-teal-500/20 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-teal-500/30"
              href="https://subvysion.setmore.com/services/71a943e6-77b0-4cdb-934f-de94600a9bb5"
              target="_blank"
              rel="noreferrer"
            >
              Schedule a walkthrough
            </a>
            <a
              class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15"
              href="#workflow"
            >
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden py-14 sm:py-16"
      id="workflow"
    >
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50"
      ></div>
      <div
        class="pointer-events-none absolute -left-20 top-[-10%] h-64 w-64 rounded-full bg-teal-200/40 blur-3xl"
      ></div>
      <div
        class="pointer-events-none absolute right-6 bottom-6 h-56 w-56 rounded-full bg-sky-200/35 blur-2xl"
      ></div>
      <div class="relative mx-auto max-w-6xl px-6">
        <div
          class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p
              class="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800 shadow-sm"
            >
              Workflow
            </p>
            <h2
              class="mt-3 text-3xl font-display font-semibold text-slate-900 sm:text-4xl"
            >
              From Upload to AR Walkthrough.
            </h2>
          </div>
        </div>
        <div class="mt-8 grid gap-5 md:grid-cols-3">
          <div
            class="group flex h-full flex-col gap-4 rounded-3xl border border-white/60 bg-white/80 p-5 shadow-xl shadow-slate-900/5 ring-1 ring-slate-200/60 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-500/15"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"
              >
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    d="M12 3a5 5 0 0 1 5 5c0 3.5-3.8 7.3-4.6 8.1a.6.6 0 0 1-.8 0C10.8 15.3 7 11.5 7 8a5 5 0 0 1 5-5Z"
                  />
                  <circle cx="12" cy="8" r="1.6" />
                  <path d="M8 20h8" stroke-linecap="round" />
                  <path d="M10 18h4" stroke-linecap="round" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Upload</h3>
            </div>
            <p class="text-slate-600">
              Upload GIS, CAD, or GeoJSON files and keep them versioned in the
              cloud. Your source of truth is ready for AR in minutes.
            </p>
            <div
              class="mt-auto overflow-hidden rounded-2xl border border-slate-200/70 shadow-inner"
            >
              <img
                src="map.jpg"
                alt="Surveyed map preview"
                class="w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                style="aspect-ratio: 4 / 3;"
              />
            </div>
          </div>
          <div
            class="group flex h-full flex-col gap-4 rounded-3xl border border-white/60 bg-white/80 p-5 shadow-xl shadow-slate-900/5 ring-1 ring-slate-200/60 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-500/15"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600"
              >
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M5 7.5c3-1.5 11-1.5 14 0" />
                  <rect x="5" y="7.5" width="14" height="9" rx="2" />
                  <path
                    d="M9 12s1.5-1.5 3-1.5 3 1.5 3 1.5"
                    stroke-linecap="round"
                  />
                  <circle
                    cx="9"
                    cy="13.5"
                    r=".8"
                    fill="currentColor"
                    stroke="none"
                  />
                  <circle
                    cx="15"
                    cy="13.5"
                    r=".8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">
                Align & View
              </h3>
            </div>
            <p class="text-slate-600">
              Align visually or to control points and walk your route in AR.
              Toggle layers, validate segments, and switch between AR and web
              views.
            </p>
            <div
              class="mt-auto overflow-hidden rounded-2xl border border-slate-200/70 shadow-inner"
            >
              <img
                src="view.png"
                alt="AR and web overlay preview"
                class="w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                style="aspect-ratio: 4 / 3;"
              />
            </div>
          </div>
          <div
            class="group flex h-full flex-col gap-4 rounded-3xl border border-white/60 bg-white/80 p-5 shadow-xl shadow-slate-900/5 ring-1 ring-slate-200/60 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-500/15"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600"
              >
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M6 16c2-2 4.5-4.5 6-7" stroke-linecap="round" />
                  <path d="M14 3h3l-1 5" />
                  <path d="M5 21h14" stroke-linecap="round" />
                  <path d="M9 12c-.5 1.5-1.5 2.5-3 3" stroke-linecap="round" />
                  <path d="M12.5 8.5 16 12" stroke-linecap="round" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Share</h3>
            </div>
            <p class="mt-2 text-slate-600">
              Share AR sessions or web links with crews, inspectors, and owners
              so everyone sees the same, up-to-date map in context.
            </p>
            <div
              class="mt-auto overflow-hidden rounded-2xl border border-slate-200/70 shadow-inner"
            >
              <img
                src="dig.png"
                alt="Crews digging with AR overlay"
                class="w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                style="aspect-ratio: 4 / 3;"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 sm:py-14"
      id="platform"
    >
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div class="space-y-3">
            <p
              class="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800"
            >
              Integrations
            </p>
            <h2
              class="text-3xl font-display font-semibold text-slate-900 sm:text-4xl"
            >
              Bring Sub Vysion into your mapping stack.
            </h2>
            <p class="text-lg text-slate-600">
              Sync overlays with the GIS and CAD tools your teams already use,
              so AR stays in step with design and field updates.
            </p>
          </div>
          <div
            class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
          >
            <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div
                class="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <span
                  class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18" />
                    <path d="M12 3c2.5 3 2.5 15 0 18" />
                    <path d="M12 3c-2.5 3-2.5 15 0 18" />
                  </svg>
                </span>
                <div>
                  <p class="text-sm font-semibold text-slate-900">ArcGIS</p>
                  <p class="text-xs text-slate-500">Esri</p>
                </div>
              </div>
              <div
                class="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <span
                  class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path d="M12 4 5 19h14L12 4Z" />
                    <path d="M12 9.5 15 16H9l3-6.5Z" />
                  </svg>
                </span>
                <div>
                  <p class="text-sm font-semibold text-slate-900">AutoCAD</p>
                  <p class="text-xs text-slate-500">Autodesk</p>
                </div>
              </div>
              <div
                class="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <span
                  class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path d="M12 3 6 7v10l6 4 6-4V7l-6-4Z" />
                    <path d="M6 7 12 11 18 7" />
                    <path d="M12 11v10" />
                  </svg>
                </span>
                <div>
                  <p class="text-sm font-semibold text-slate-900">Revit</p>
                  <p class="text-xs text-slate-500">Autodesk</p>
                </div>
              </div>
              <div
                class="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <span
                  class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      d="M7 20c1.5-3 3.5-5 8-5 1.6 0 3.1.3 4.5.9"
                      stroke-linecap="round"
                    />
                    <path d="M6 4h12" />
                    <path d="M8 4 6 12h4l2-5" stroke-linecap="round" />
                    <path d="M16 4 18 12h-4l-2-5" stroke-linecap="round" />
                  </svg>
                </span>
                <div>
                  <p class="text-sm font-semibold text-slate-900">Bentley</p>
                  <p class="text-xs text-slate-500">OpenRoads</p>
                </div>
              </div>
              <div
                class="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <span
                  class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <circle cx="12" cy="12" r="7" />
                    <path d="M12 5v14M5 12h14" />
                    <path d="M9 9h6v6H9z" />
                  </svg>
                </span>
                <div>
                  <p class="text-sm font-semibold text-slate-900">Trimble</p>
                  <p class="text-xs text-slate-500">TBC</p>
                </div>
              </div>
              <div
                class="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <span
                  class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path d="M5 5h14v10H5z" />
                    <path d="M9 15v4l3-2 3 2v-4" />
                    <circle cx="9" cy="9" r="1.2" />
                    <circle cx="15" cy="9" r="1.2" />
                  </svg>
                </span>
                <div>
                  <p class="text-sm font-semibold text-slate-900">QGIS</p>
                  <p class="text-xs text-slate-500">Desktop</p>
                </div>
              </div>
              <div
                class="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <span
                  class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path d="M7 8 4 12l3 4" stroke-linecap="round" />
                    <path d="M17 8 20 12l-3 4" stroke-linecap="round" />
                    <path d="M10 6h4v12h-4z" />
                  </svg>
                </span>
                <div>
                  <p class="text-sm font-semibold text-slate-900">GeoJSON</p>
                  <p class="text-xs text-slate-500">Import</p>
                </div>
              </div>
              <div
                class="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <span
                  class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path d="M6 9h12l-6-4-6 4Z" />
                    <path d="M6 15h12l-6 4-6-4Z" />
                    <path d="M6 9v6l6 4 6-4V9l-6 4-6-4Z" />
                  </svg>
                </span>
                <div>
                  <p class="text-sm font-semibold text-slate-900">KML</p>
                  <p class="text-xs text-slate-500">Import</p>
                </div>
              </div>
              <div
                class="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <span
                  class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path d="M8 3h6l4 4v14H8z" />
                    <path d="M14 3v4h4" />
                    <path d="M10 12h4" />
                    <path d="M10 16h4" />
                  </svg>
                </span>
                <div>
                  <p class="text-sm font-semibold text-slate-900">Shapefile</p>
                  <p class="text-xs text-slate-500">Export</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 sm:py-14"
      id="pricing"
    >
      <div class="mx-auto max-w-6xl px-6">
        <div class="space-y-3">
          <p
            class="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800"
          >
            Pricing
          </p>
          <h2
            class="text-3xl font-display font-semibold text-slate-900 sm:text-4xl"
          >
            Choose the right fit for your crews.
          </h2>
          <p class="text-lg text-slate-600">
            Flexible options whether you are piloting a crew or rolling out
            across the fleet.
          </p>
        </div>
        <div class="mt-6 grid gap-4 md:grid-cols-2">
          <div
            class="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
          >
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-semibold text-slate-900">Team</h3>
                <p class="text-sm text-slate-600">
                  For pilot crews and focused deployments.
                </p>
              </div>
              <div class="text-right">
                <div class="text-3xl font-display font-semibold text-slate-900">
                  $25
                </div>
                <div class="text-sm text-slate-500">per seat / month</div>
              </div>
            </div>
            <ul class="space-y-2 text-sm text-slate-700">
              <li class="flex items-center gap-2">
                <span class="text-teal-700">✓</span
                ><span>Uploads & cloud sync</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-teal-700">✓</span><span>Platform</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-teal-700">✓</span><span>AR App</span>
              </li>
              <li class="flex items-center gap-2 text-slate-400">
                <span class="">–</span><span>SSO</span>
              </li>
              <li class="flex items-center gap-2 text-slate-400">
                <span class="">–</span><span>Custom software integrations</span>
              </li>
              <li class="flex items-center gap-2 text-slate-400">
                <span class="">–</span><span>Data export</span>
              </li>
            </ul>
            <div class="pt-2">
              <a
                class="inline-flex items-center justify-center gap-2 rounded-xl border border-teal-700 bg-teal-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition hover:-translate-y-0.5 hover:bg-teal-800"
                href="https://subvysion.setmore.com/services/71a943e6-77b0-4cdb-934f-de94600a9bb5"
                target="_blank"
                rel="noreferrer"
              >
                Get started
              </a>
            </div>
          </div>
          <div
            class="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
          >
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-semibold text-slate-900">Enterprise</h3>
                <p class="text-sm text-slate-600">
                  For full-field rollouts and advanced controls.
                </p>
              </div>
              <div class="text-right">
                <div class="text-3xl font-display font-semibold text-slate-900">
                  Talk to sales
                </div>
              </div>
            </div>
            <ul class="space-y-2 text-sm text-slate-700">
              <li class="flex items-center gap-2">
                <span class="text-teal-700">✓</span
                ><span>Uploads & cloud sync</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-teal-700">✓</span><span>Platform</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-teal-700">✓</span><span>AR App</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-teal-700">✓</span><span>SSO</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-teal-700">✓</span><span
                  >Custom software integrations</span
                >
              </li>
              <li class="flex items-center gap-2">
                <span class="text-teal-700">✓</span><span>Data export</span>
              </li>
            </ul>
            <div class="pt-2">
              <a
                class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-teal-800 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300"
                href="https://subvysion.setmore.com/services/71a943e6-77b0-4cdb-934f-de94600a9bb5"
                target="_blank"
                rel="noreferrer"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 sm:py-14"
      id="trusted"
    >
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div
            class="overflow-hidden rounded-2xl border border-slate-200 shadow-card"
          >
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
              alt="Construction and utility crew collaborating on site"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="space-y-4">
            <p
              class="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800"
            >
              Trusted by field teams
            </p>
            <h3
              class="text-2xl font-display font-semibold text-slate-900 sm:text-3xl"
            >
              Built with crews, inspectors, and owners in mind.
            </h3>
            <p class="text-lg text-slate-600">
              From utility locators to fiber installers, Sub Vysion keeps every
              stakeholder aligned with clean, georeferenced data.
            </p>
            <div class="grid gap-3 sm:grid-cols-2">
              <div
                class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
              >
                Regional utilities
              </div>
              <div
                class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
              >
                Pipeline builders
              </div>
              <div
                class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
              >
                Fiber installers
              </div>
              <div
                class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
              >
                Municipal inspectors
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 sm:py-14"
      id="contact"
    >
      <div class="mx-auto max-w-6xl px-6">
        <div
          class="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-gradient-to-r from-teal-700 to-sky-700 px-6 py-8 text-white shadow-card sm:flex-row sm:items-center sm:justify-between"
        >
          <div class="space-y-2">
            <p
              class="text-sm font-semibold uppercase tracking-wide text-teal-100"
            >
              Ready to see it live?
            </p>
            <h2 class="text-3xl font-display font-semibold">
              Bring AR overlays to your next dig window.
            </h2>
            <p class="text-base text-teal-100">
              Tell us about your sites, utilities, and timelines—we will tailor
              a demo to your crew and handoff requirements.
            </p>
          </div>
          <div class="flex flex-wrap gap-3">
            <a
              class="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              href="https://subvysion.setmore.com/services/71a943e6-77b0-4cdb-934f-de94600a9bb5"
              target="_blank"
              rel="noreferrer"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 sm:py-14"
    >
      <div class="mx-auto max-w-6xl px-6">
        <div
          class="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-card md:grid-cols-[1.1fr_0.9fr] md:p-8"
        >
          <div class="space-y-3">
            <p
              class="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800"
            >
              Contact us
            </p>
            <h3 class="text-2xl font-display font-semibold text-slate-900">
              Questions about your site or deployment?
            </h3>
            <p class="text-slate-600">
              Tell us about your utilities, timelines, or alignment needs. We
              respond within one business day with next steps and a tailored
              plan.
            </p>
            <div class="grid gap-3 sm:grid-cols-2">
              <div
                class="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
              >
                <div class="font-semibold text-slate-900">Email</div>
                <a
                  class="text-teal-700 underline"
                  href="mailto:maxwell@subvysion.com">maxwell@subvysion.com</a
                >
              </div>
            </div>
          </div>
          <form class="grid gap-3" on:submit={handleContactSubmit}>
            <div class="grid gap-1">
              <label class="text-sm font-semibold text-slate-800" for="name"
                >Name</label
              >
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                class="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
            </div>
            <div class="grid gap-1">
              <label class="text-sm font-semibold text-slate-800" for="email"
                >Email</label
              >
              <input
                id="email"
                type="email"
                name="email"
                placeholder="name@company.com"
                class="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
            </div>
            <div class="grid gap-1">
              <label class="text-sm font-semibold text-slate-800" for="details"
                >Project details</label
              >
              <textarea
                id="details"
                name="details"
                rows="3"
                placeholder="Utility type, timelines, sites, alignment needs..."
                class="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              ></textarea>
            </div>
            <button
              type="submit"
              class="mt-2 inline-flex items-center justify-center rounded-xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition hover:-translate-y-0.5 hover:bg-teal-800"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</div>
<script>
  const CONTACT_EMAIL = 'maxwell@subvysion.com';

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const details = (data.get('details') || '').toString().trim();

    const subject = encodeURIComponent('Sub Vysion inquiry');
    const bodyLines = [
      name ? `Name: ${name}` : null,
      email ? `Email: ${email}` : null,
      details ? `Project details: ${details}` : null
    ].filter(Boolean);

    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}${body ? `&body=${body}` : ''}`;
  };
</script>
