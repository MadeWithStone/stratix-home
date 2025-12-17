<script>
  import { onMount } from "svelte";

  const CONTACT_EMAIL = "maxwell@subvysion.com";
  let scrollY = 0;
  let heroImage;

  const smoothScroll = (event) => {
    const href = event.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollY * 0.08}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const details = (data.get("details") || "").toString().trim();

    const subject = encodeURIComponent("Sub Vysion inquiry");
    const bodyLines = [
      name ? `Name: ${name}` : null,
      email ? `Email: ${email}` : null,
      details ? `Project details: ${details}` : null,
    ].filter(Boolean);

    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}${body ? `&body=${body}` : ""}`;
  };
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600;700&family=Noto+Sans:wght@400;600;700&display=swap"
    rel="stylesheet"
  />
  <meta
    name="description"
    content="Sub Vysion lets crews upload their own GIS and CAD maps, align visually, and view accurate AR overlays on site or on the web."
  />
</svelte:head>

<div class="relative min-h-screen overflow-hidden font-sans">
  <div class="absolute inset-0 -z-10 bg-white"></div>
  <!-- Color splashes -->
  <div
    class="pointer-events-none absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-teal-400/20 blur-[100px]"
  ></div>
  <div
    class="pointer-events-none absolute right-[-8rem] top-[5%] h-[350px] w-[350px] rounded-full bg-sky-400/15 blur-[100px]"
  ></div>
  <div
    class="pointer-events-none absolute left-[10%] top-[50%] h-[300px] w-[300px] rounded-full bg-emerald-400/15 blur-[120px]"
  ></div>
  <div
    class="pointer-events-none absolute right-[15%] top-[60%] h-[250px] w-[250px] rounded-full bg-teal-300/12 blur-[100px]"
  ></div>
  <header class="sticky top-0 z-30 bg-transparent">
    <div class="relative">
      <div
        class="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 text-slate-900"
      >
        <a href="#" class="flex items-center gap-2">
          <img src="logo.svg" alt="SubVysion logo" class="h-9 w-9" />
          <span
            class="text-xl font-bold"
            style="font-family: 'Noto Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;"
          >
            SubVysion
          </span>
        </a>
        <nav
          class="hidden items-center gap-7 text-base font-medium text-slate-700 md:flex"
        >
          <a
            class="hover:text-slate-900"
            href="#workflow"
            on:click={smoothScroll}>Workflow</a
          >
          <a
            class="hover:text-slate-900"
            href="#platform"
            on:click={smoothScroll}>Platform</a
          >
          <a
            class="hover:text-slate-900"
            href="#pricing"
            on:click={smoothScroll}>Pricing</a
          >
          <a
            class="hover:text-slate-900"
            href="#trusted"
            on:click={smoothScroll}>Trusted</a
          >
          <a
            class="hover:text-slate-900"
            href="#contact"
            on:click={smoothScroll}>Contact</a
          >
        </nav>
        <div class="flex items-center gap-4">
          <a
            class="text-base font-semibold text-slate-700 underline decoration-teal-400/50 underline-offset-4 transition hover:decoration-teal-400"
            href="#workflow"
            on:click={smoothScroll}>View workflow</a
          >
          <a
            class="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-2.5 text-base font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:-translate-y-0.5 hover:bg-teal-700"
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
    <section class="relative overflow-hidden py-20 sm:py-24 text-slate-900">
      <div class="relative mx-auto max-w-6xl px-6">
        <div class="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div class="space-y-7">
            <p
              class="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800 shadow-sm"
            >
              Bring underground infrastructure to life
            </p>
            <h1
              class="text-3xl font-display font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              See every buried asset before you dig.
            </h1>
            <p class="max-w-2xl text-lg text-slate-600">
              We combine ground-penetrating radar with your GIS and as-built
              data to create accurate AR overlays you can view on any phone.
            </p>
            <div class="flex flex-wrap gap-3">
              <a
                class="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/40 transition hover:-translate-y-0.5 hover:bg-teal-700"
                href="https://subvysion.setmore.com/services/71a943e6-77b0-4cdb-934f-de94600a9bb5"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a walkthrough
              </a>
              <a
                class="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:bg-white"
                href="#workflow"
                on:click={smoothScroll}
              >
                See how it works
              </a>
            </div>
          </div>
          <div class="flex justify-center md:justify-end">
            <img
              bind:this={heroImage}
              src="map_render_export.png"
              alt="3D render of underground utilities"
              class="w-full max-w-2xl transition-transform duration-100 ease-out will-change-transform"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden py-14 sm:py-16" id="workflow">
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
              From Data to AR in Three Steps.
            </h2>
          </div>
        </div>
        <div class="mt-8 grid gap-8 md:grid-cols-3">
          <div class="group flex h-full flex-col gap-5">
            <div class="overflow-hidden rounded-2xl shadow-lg shadow-slate-900/10">
              <img
                src="map.jpg"
                alt="GPR and GIS data collection"
                class="w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                style="aspect-ratio: 4 / 3;"
              />
            </div>
            <div class="flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
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
              <h3 class="text-lg font-semibold text-slate-900">Collect</h3>
            </div>
            <p class="text-slate-600">
              We combine ground-penetrating radar scans with your as-builts and
              GIS map data to build a complete picture of what's underground.
            </p>
          </div>
          <div class="group flex h-full flex-col gap-5">
            <div class="overflow-hidden rounded-2xl shadow-lg shadow-slate-900/10">
              <img
                src="view.png"
                alt="Data processing and overlay creation"
                class="w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                style="aspect-ratio: 4 / 3;"
              />
            </div>
            <div class="flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600"
              >
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M4 6h16M4 12h16M4 18h10" stroke-linecap="round" />
                  <path d="M17 15l3 3-3 3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Process</h3>
            </div>
            <p class="text-slate-600">
              Our platform fuses radar data with your existing records to create
              accurate, georeferenced AR overlays ready for the field.
            </p>
          </div>
          <div class="group flex h-full flex-col gap-5">
            <div class="overflow-hidden rounded-2xl shadow-lg shadow-slate-900/10">
              <img
                src="dig.png"
                alt="Viewing underground utilities in AR on phone"
                class="w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                style="aspect-ratio: 4 / 3;"
              />
            </div>
            <div class="flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600"
              >
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M12 18h.01" stroke-linecap="round" />
                  <path d="M9 5h6" stroke-linecap="round" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">View in AR</h3>
            </div>
            <p class="text-slate-600">
              Open the app on your phone, point at the ground, and see buried
              utilities rendered in augmented reality right where they are.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden bg-white py-12 sm:py-14"
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
      class="relative overflow-hidden bg-white py-12 sm:py-14"
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
                <div class="text-xl font-display font-semibold text-slate-900">
                  Talk to sales
                </div>
              </div>
            </div>
            <ul class="space-y-2 text-sm text-slate-700">
              <li class="flex items-center gap-2">
                <span class="text-teal-700">✓</span><span
                  >Uploads & cloud sync</span
                >
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
                <div class="text-xl font-display font-semibold text-slate-900">
                  Talk to sales
                </div>
              </div>
            </div>
            <ul class="space-y-2 text-sm text-slate-700">
              <li class="flex items-center gap-2">
                <span class="text-teal-700">✓</span><span
                  >Uploads & cloud sync</span
                >
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
      class="relative overflow-hidden bg-white py-12 sm:py-14"
      id="trusted"
    >
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div
            class="overflow-hidden rounded-2xl border border-slate-200 shadow-card"
          >
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80"
              alt="Construction site with workers"
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
              Built with crews and contractors in mind.
            </h3>
            <p class="text-lg text-slate-600">
              From utility locators to general contractors, SubVysion keeps every
              stakeholder aligned with clean, georeferenced data.
            </p>
            <div class="grid gap-3 sm:grid-cols-2">
              <div
                class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
              >
                General contractors
              </div>
              <div
                class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
              >
                Utility locators
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
                Excavation crews
              </div>
              <div
                class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
              >
                Civil engineers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden bg-white py-12 sm:py-14"
      id="contact"
    >
      <div class="mx-auto max-w-6xl px-6">
        <div
          class="rounded-2xl bg-gradient-to-r from-teal-600 to-teal-700 p-8 shadow-xl md:p-10"
        >
          <div class="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div class="space-y-4">
              <p
                class="text-sm font-semibold uppercase tracking-wide text-teal-100"
              >
                Ready to see it live?
              </p>
              <h2 class="text-3xl font-display font-semibold text-white">
                Bring AR overlays to your next dig window.
              </h2>
              <p class="text-base text-white/90">
                Tell us about your sites, utilities, and timelines—we'll tailor
                a demo to your crew and handoff requirements.
              </p>
              <div class="flex flex-wrap gap-x-4 gap-y-2 pt-2">
                <a
                  class="inline-flex items-center gap-2 text-sm font-medium text-white underline decoration-white/60 underline-offset-4 transition hover:decoration-white"
                  href="mailto:maxwell@subvysion.com"
                >
                  maxwell@subvysion.com
                </a>
                <a
                  class="inline-flex items-center gap-2 text-sm font-medium text-white underline decoration-white/60 underline-offset-4 transition hover:decoration-white"
                  href="mailto:wenson@subvysion.com"
                >
                  wenson@subvysion.com
                </a>
                <a
                  class="inline-flex items-center gap-2 text-sm font-medium text-white underline decoration-white/60 underline-offset-4 transition hover:decoration-white"
                  href="tel:+12158747715"
                >
                  (215) 874-7715
                </a>
              </div>
            </div>
            <form class="grid gap-3" on:submit={handleContactSubmit}>
              <div class="grid gap-1">
                <label class="text-sm font-medium text-white" for="name"
                  >Name</label
                >
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  class="w-full rounded-lg border border-white/30 bg-white/20 px-3 py-2.5 text-white placeholder-white/50 outline-none transition focus:border-white/50 focus:bg-white/25"
                />
              </div>
              <div class="grid gap-1">
                <label class="text-sm font-medium text-white" for="email"
                  >Email</label
                >
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  class="w-full rounded-lg border border-white/30 bg-white/20 px-3 py-2.5 text-white placeholder-white/50 outline-none transition focus:border-white/50 focus:bg-white/25"
                />
              </div>
              <div class="grid gap-1">
                <label class="text-sm font-medium text-white" for="details"
                  >Project details</label
                >
                <textarea
                  id="details"
                  name="details"
                  rows="3"
                  placeholder="Utility type, timelines, sites..."
                  class="w-full rounded-lg border border-white/30 bg-white/20 px-3 py-2.5 text-white placeholder-white/50 outline-none transition focus:border-white/50 focus:bg-white/25"
                ></textarea>
              </div>
              <button
                type="submit"
                class="mt-2 inline-flex items-center justify-center rounded-lg bg-white px-4 py-3 text-sm font-semibold text-teal-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-teal-50"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
