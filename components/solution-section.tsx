import Image from "next/image"
import { ShieldCheck, FileCheck2, Radar, BellRing } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Blindaje patrimonial",
    text: "Perímetros virtuales con alertas inmediatas ante robos. Un solo animal recuperado paga el servicio.",
  },
  {
    icon: BellRing,
    title: "Tu empleado que no duerme",
    text: "Monitoreo del comportamiento del rodeo las 24 horas en campo abierto, sin depender de personal físico.",
  },
  {
    icon: Radar,
    title: "Inteligencia productiva",
    text: "Detección automática de celo y problemas de salud mediante IA, para decidir con datos en tiempo real.",
  },
  {
    icon: FileCheck2,
    title: "SENASA sin tocar el teclado",
    text: "Reporta de forma nativa y automática altas, bajas y movimientos a la base oficial del SENASA.",
  },
]

export function SolutionSection() {
  return (
    <section id="solucion" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-medium text-primary">La solución</span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Un ecosistema integral de hardware robusto e IA
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Dispositivos con sensores biométricos y GPS autónomos, carcasa IP67
              y alimentación solar, conectados a una plataforma analítica que
              transforma el comportamiento del rodeo en decisiones rentables.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-xl border border-border/60 bg-card p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-medium text-card-foreground">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-card">
              <Image
                src="/device-collar.png"
                alt="Dispositivo VigIA con sensores, GPS, carcasa IP67 y panel solar"
                width={900}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
