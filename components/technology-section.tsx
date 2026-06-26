import Image from "next/image"
import { Cpu, Radio, Sun, BrainCircuit } from "lucide-react"

const stack = [
  {
    icon: Radio,
    title: "Redes LoRaWAN propias",
    text: "Gateways de 10–15 km de alcance y conectividad a costo cero (red TTN) para autonomía total en campo abierto.",
  },
  {
    icon: Sun,
    title: "Alimentación solar",
    text: "Carcasa IP67 y paneles solares para operar de forma continua en entornos rurales adversos.",
  },
  {
    icon: BrainCircuit,
    title: "Inteligencia Artificial",
    text: "Procesamiento del comportamiento del rodeo para detectar celo, anomalías de salud y eventos críticos.",
  },
  {
    icon: Cpu,
    title: "IoT y sensores biométricos",
    text: "Captura, transmisión y análisis de datos en tiempo real desde cada cabeza de ganado.",
  },
]

export function TechnologySection() {
  return (
    <section id="tecnologia" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-3xl border border-border/60 bg-card lg:order-1">
            <Image
              src="/dashboard-mockup.png"
              alt="Plataforma analítica de VigIA con mapa, salud y detección de celo"
              width={1000}
              height={700}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-medium text-primary">Tecnología</span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Tecnología madura, lista para el campo
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              VigIA se apoya en tecnologías probadas que permiten monitorear el
              rodeo en tiempo real con bajo costo operativo y amplia cobertura
              rural.
            </p>

            <div className="mt-8 space-y-4">
              {stack.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-medium text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
