const stats = [
  { value: "24/7", label: "Monitoreo en tiempo real" },
  { value: "10–15 km", label: "Alcance por gateway LoRaWAN" },
  { value: "21 días", label: "Que cuesta un celo no detectado" },
  { value: "IP67", label: "Hardware solar resistente al campo" },
]

export function StatsSection() {
  return (
    <section className="border-t border-border/60 bg-card/40 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
