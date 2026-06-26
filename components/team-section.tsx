const team = [
  { name: "Santiago Mendez", role: "CEO" },
  { name: "Diego Hernandez Canetti", role: "CMO" },
  { name: "Uriel Grifman", role: "Desarrollador de Software" },
  { name: "Gonzalo Ivo Turri", role: "Desarrollador de Software" },
  { name: "Iñaki Joaquín Lorences", role: "Técnico de Campo" },
  { name: "Julián Cardoso Landin", role: "Técnico de Campo" },
  { name: "Matías Gabriel Jastrebow", role: "Asesor Contable y Legal" },
]

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

export function TeamSection() {
  return (
    <section id="quienes-somos" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">Quiénes somos</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            El equipo detrás de VigIA
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Somos un equipo de desarrolladores, técnicos de campo y especialistas
            del agro que une tecnología y conocimiento rural. Promovemos una marca
            que no promete innovación: promete resultados.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center rounded-2xl border border-border/60 bg-card p-6 text-center"
            >
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-lg font-semibold text-primary"
                aria-hidden="true"
              >
                {initials(member.name)}
              </span>
              <h3 className="mt-4 text-sm font-medium text-card-foreground">{member.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Imágenes del equipo próximamente. Los avatares actuales son provisorios.
        </p>
      </div>
    </section>
  )
}
