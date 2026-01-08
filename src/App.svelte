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

<div class="relative min-h-screen overflow-hidden font-sans bg-white">
  <!-- Subtle gradient color accents that scroll with page -->
  <div class="pointer-events-none absolute top-0 left-0 right-0 h-[4000px] -z-10">
    <div class="absolute top-[400px] left-[-10%] h-[800px] w-[800px] rounded-full bg-teal-400/20 blur-[200px]"></div>
    <div class="absolute top-[1200px] right-[-10%] h-[700px] w-[700px] rounded-full bg-sky-400/15 blur-[200px]"></div>
    <div class="absolute top-[2000px] left-[10%] h-[600px] w-[600px] rounded-full bg-emerald-400/15 blur-[200px]"></div>
    <div class="absolute top-[2800px] right-[5%] h-[700px] w-[700px] rounded-full bg-teal-300/15 blur-[200px]"></div>
  </div>
  <header class="absolute top-0 left-0 right-0 z-30">
      <div
        class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 text-slate-900"
      >
        <a href="#" class="flex items-center">
          <img src="logo_full.svg" alt="SubVysion logo" class="h-8" />
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
        <a
          class="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
          href="https://subvysion.setmore.com/services/71a943e6-77b0-4cdb-934f-de94600a9bb5"
          target="_blank"
          rel="noreferrer"
        >
          Book a demo
        </a>
      </div>
  </header>

  <main class="relative z-10">
    <section class="relative overflow-hidden pt-40 pb-40 sm:pt-52 sm:pb-56 lg:pt-60 lg:pb-72 text-slate-900">
      <div
        class="pointer-events-none absolute inset-0 -z-10 bg-[url('/background.png')] bg-cover bg-center"
      ></div>
      <div
        class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-white/90 via-white/70 to-transparent"
      ></div>
      <div
        class="pointer-events-none absolute inset-x-0 bottom-0 h-32 -z-10 bg-gradient-to-t from-white to-transparent"
      ></div>
      <div class="relative mx-auto max-w-6xl px-6">
        <div class="max-w-2xl">
          <h1
            class="text-4xl font-display font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl tracking-tight"
          >
            See every buried asset before you dig.
          </h1>
          <p class="mt-6 text-lg text-slate-700 leading-relaxed">
            We combine ground-penetrating radar with your GIS and as-built
            data to create accurate AR overlays you can view on any phone.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <a
              class="inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
              href="https://subvysion.setmore.com/services/71a943e6-77b0-4cdb-934f-de94600a9bb5"
              target="_blank"
              rel="noreferrer"
            >
              Schedule a walkthrough
            </a>
            <a
              class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              href="#workflow"
              on:click={smoothScroll}
            >
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden py-16 sm:py-24 bg-transparent" id="workflow">
      <div class="relative mx-auto max-w-6xl px-6">
        <div class="max-w-xl">
          <p
            class="text-sm font-semibold uppercase tracking-wider text-teal-600"
          >
            Workflow
          </p>
          <h2
            class="mt-2 text-3xl font-display font-semibold text-slate-900 sm:text-4xl"
          >
            From Data to AR in Three Steps
          </h2>
        </div>
        <div class="mt-12 grid gap-8 md:grid-cols-3">
          <div class="group flex h-full flex-col">
            <div
              class="overflow-hidden rounded-xl border border-slate-200"
            >
              <img
                src="map.jpg"
                alt="GPR and GIS data collection"
                class="w-full object-cover"
                style="aspect-ratio: 4 / 3;"
              />
            </div>
            <div class="mt-5">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-600"
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
              <p class="mt-3 text-slate-600 text-sm leading-relaxed">
                We combine ground-penetrating radar scans with your as-builts and
                GIS map data to build a complete picture of what's underground.
              </p>
            </div>
          </div>
          <div class="group flex h-full flex-col">
            <div
              class="overflow-hidden rounded-xl border border-slate-200"
            >
              <img
                src="view.png"
                alt="Data processing and overlay creation"
                class="w-full object-cover"
                style="aspect-ratio: 4 / 3;"
              />
            </div>
            <div class="mt-5">
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
                    <path
                      d="M17 15l3 3-3 3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-slate-900">Process</h3>
              </div>
              <p class="mt-3 text-slate-600 text-sm leading-relaxed">
                Our platform fuses radar data with your existing records to create
                accurate, georeferenced AR overlays ready for the field.
              </p>
            </div>
          </div>
          <div class="group flex h-full flex-col">
            <div
              class="overflow-hidden rounded-xl border border-slate-200"
            >
              <img
                src="dig.png"
                alt="Viewing underground utilities in AR on phone"
                class="w-full object-cover"
                style="aspect-ratio: 4 / 3;"
              />
            </div>
            <div class="mt-5">
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
              <p class="mt-3 text-slate-600 text-sm leading-relaxed">
                Open the app on your phone, point at the ground, and see buried
                utilities rendered in augmented reality right where they are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden py-16 sm:py-24"
      id="platform"
    >
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p
              class="text-sm font-semibold uppercase tracking-wider text-teal-600"
            >
              Integrations
            </p>
            <h2
              class="mt-2 text-3xl font-display font-semibold text-slate-900 sm:text-4xl"
            >
              Bring SubVysion into your mapping stack
            </h2>
            <p class="mt-4 text-lg text-slate-600">
              Sync overlays with the GIS and CAD tools your teams already use,
              so AR stays in step with design and field updates.
            </p>
          </div>
          <div
            class="rounded-2xl border border-slate-200 bg-white p-6"
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
      class="relative overflow-hidden py-16 sm:py-24"
      id="pricing"
    >
      <div class="mx-auto max-w-6xl px-6">
        <div class="max-w-xl">
          <p
            class="text-sm font-semibold uppercase tracking-wider text-teal-600"
          >
            Pricing
          </p>
          <h2
            class="mt-2 text-3xl font-display font-semibold text-slate-900 sm:text-4xl"
          >
            Choose the right fit for your crews
          </h2>
          <p class="mt-4 text-lg text-slate-600">
            Flexible options whether you are piloting a crew or rolling out
            across the fleet.
          </p>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-2">
          <div
            class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h3 class="text-xl font-semibold text-slate-900">Team</h3>
            <p class="mt-1 text-sm text-slate-600">
              For pilot crews and focused deployments.
            </p>
            <ul class="mt-6 space-y-3 text-sm text-slate-700 flex-1">
              <li class="flex items-center gap-3">
                <svg class="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Uploads & cloud sync</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Platform access</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>AR App</span>
              </li>
            </ul>
            <a
              class="mt-6 inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
              href="https://subvysion.setmore.com/services/71a943e6-77b0-4cdb-934f-de94600a9bb5"
              target="_blank"
              rel="noreferrer"
            >
              Get started
            </a>
          </div>
          <div
            class="flex h-full flex-col rounded-2xl border-2 border-teal-600 bg-white p-6"
          >
            <h3 class="text-xl font-semibold text-slate-900">Enterprise</h3>
            <p class="mt-1 text-sm text-slate-600">
              For full-field rollouts and advanced controls.
            </p>
            <ul class="mt-6 space-y-3 text-sm text-slate-700 flex-1">
              <li class="flex items-center gap-3">
                <svg class="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Everything in Team</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>SSO</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom software integrations</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Data export</span>
              </li>
            </ul>
            <a
              class="mt-6 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
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
      class="relative overflow-hidden py-16 sm:py-24"
      id="trusted"
    >
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div
            class="overflow-hidden rounded-xl border border-slate-200"
          >
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80"
              alt="Construction site with workers"
              class="h-full w-full object-cover"
            />
          </div>
          <div>
            <p
              class="text-sm font-semibold uppercase tracking-wider text-teal-600"
            >
              Trusted by field teams
            </p>
            <h3
              class="mt-2 text-3xl font-display font-semibold text-slate-900 sm:text-4xl"
            >
              Built with crews and contractors in mind
            </h3>
            <p class="mt-4 text-lg text-slate-600">
              From utility locators to general contractors, SubVysion keeps
              every stakeholder aligned with clean, georeferenced data.
            </p>
            <div class="mt-8 flex flex-wrap gap-2">
              <span class="rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
                General contractors
              </span>
              <span class="rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
                Utility locators
              </span>
              <span class="rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
                Pipeline builders
              </span>
              <span class="rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
                Fiber installers
              </span>
              <span class="rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
                Excavation crews
              </span>
              <span class="rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
                Civil engineers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden py-16 sm:py-24"
      id="contact"
    >
      <div class="mx-auto max-w-6xl px-6">
        <div
          class="rounded-2xl bg-slate-900 p-8 md:p-12"
        >
          <div class="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 class="text-3xl font-display font-semibold text-white sm:text-4xl">
                Bring AR overlays to your next dig window
              </h2>
              <p class="mt-4 text-lg text-slate-400">
                Tell us about your sites, utilities, and timelines. We'll tailor
                a demo to your crew and handoff requirements.
              </p>
              <div class="mt-8 space-y-3">
                <a
                  class="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition"
                  href="mailto:maxwell@subvysion.com"
                >
                  <svg class="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  maxwell@subvysion.com
                </a>
                <a
                  class="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition"
                  href="mailto:wenson@subvysion.com"
                >
                  <svg class="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  wenson@subvysion.com
                </a>
                <a
                  class="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition"
                  href="tel:+12158747715"
                >
                  <svg class="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (215) 874-7715
                </a>
              </div>
            </div>
            <form class="space-y-4" on:submit={handleContactSubmit}>
              <div>
                <label class="block text-sm font-medium text-slate-300 mb-1.5" for="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  class="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-300 mb-1.5" for="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  class="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-300 mb-1.5" for="details">Project details</label>
                <textarea
                  id="details"
                  name="details"
                  rows="3"
                  placeholder="Utility type, timelines, sites..."
                  class="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
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
