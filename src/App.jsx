function App() {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-5">
        Software Engineer
      </p>
      <h1 className="text-4xl sm:text-5xl font-medium text-stone-900 text-balance text-center max-w-2xl leading-[1.15] tracking-tight">
        Jagadish Ravichandran
      </h1>
      <p className="mt-5 text-lg sm:text-xl text-stone-500 text-center max-w-lg text-balance leading-relaxed">
        I design and build scalable backend systems.
      </p>
      <p className="mt-6 text-stone-500 text-center max-w-lg text-balance leading-relaxed">
        I build systems that are designed to last — with clean architecture,
        well-considered tradeoffs, and a focus on delivering real value.
        I care about software quality, developer experience, and turning
        complexity into clarity.
      </p>
      <a
        href="mailto:hello@jagadish.dev"
        className="mt-10 text-sm text-accent hover:text-stone-900 transition-colors"
      >
        Get in touch &rarr;
      </a>
    </main>
  )
}

export default App
