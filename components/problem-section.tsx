import Image from "next/image"
import { Moon, HeartPulse, Sprout, Users } from "lucide-react"

const problems = [
  {
    icon: Moon,
    title: "Abigeato nocturno",
    text: "El delito rural destruye capital de noche, cuando el campo no tiene control humano y el robo se descubre al día siguiente.",
  },
  {
    icon: Sprout,
    title: "Celo no detectado",
    text: "Cada evento reproductivo no identificado a tiempo significa 21 días vacíos de producción y rentabilidad perdida.",
  },
  {
    icon: HeartPulse,
    title: "Salud detectada tarde",
    text: "Los problemas sanitarios del rodeo se identifican demasiado tarde, aumentando la mortalidad y los costos ocultos.",
  },
  {
    icon: Users,
    title: "Escasez de mano de obra",
    text: "El éxodo rural deja miles de hectáreas extensivas sin control humano activo y sin capacidad de supervisión.",
  },
]

export function ProblemSection() {
  return (
    <section id="problema" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary">El problema</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            La ganadería argentina enfrenta cuatro crisis simultáneas
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A esto se suma la presión legal del SENASA (Resoluciones 71/2024 y
            40/2026), que obliga a la identificación electrónica individual del
            ganado.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl border border-border/60">
          <Image
            src="/vacas-rodeo.png"
            alt="Rodeo de ganado en campo abierto al atardecer"
            width={1600}
            height={700}
            className="h-56 w-full object-cover md:h-72"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <p className="absolute bottom-0 left-0 max-w-xl p-6 text-pretty text-lg font-medium text-foreground md:p-8 md:text-xl">
            Miles de hectáreas extensivas, expuestas día y noche, sin control
            humano permanente.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border/60 bg-card p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-medium text-card-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
