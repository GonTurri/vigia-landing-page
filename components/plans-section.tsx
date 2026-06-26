import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Básico",
    tagline: "Geolocalización y cumplimiento",
    features: [
      "Geolocalización del rodeo 24/7",
      "Perímetros virtuales y alertas de robo",
      "Integración automática con el SENASA",
      "Soporte por canales digitales",
    ],
    featured: false,
  },
  {
    name: "Intermedio",
    tagline: "Suma monitoreo de salud",
    features: [
      "Todo lo del plan Básico",
      "Monitoreo del estado de salud por cabeza",
      "Alertas tempranas de anomalías sanitarias",
      "Reportes de bienestar animal",
    ],
    featured: true,
  },
  {
    name: "Superior",
    tagline: "Eficiencia reproductiva completa",
    features: [
      "Todo lo del plan Intermedio",
      "Detección temprana de celo con IA",
      "Optimización del intervalo parto-concepción",
      "Analítica productiva avanzada",
    ],
    featured: false,
  },
]

export function PlansSection() {
  return (
    <section id="planes" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">Planes</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Suscripción que crece con tu rodeo
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Modelo SaaS por cabeza de ganado, diseñado para adaptarse a las
            necesidades de cada establecimiento.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                plan.featured
                  ? "border-primary bg-card ring-1 ring-primary"
                  : "border-border/60 bg-card"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Más elegido
                </span>
              )}
              <h3 className="text-xl font-semibold text-card-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="mt-8"
                variant={plan.featured ? "default" : "outline"}
              >
                <a href="#contacto">Solicitar cotización</a>
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          El hardware inicial es 100% financiable mediante líneas de crédito
          agroindustrial locales.
        </p>
      </div>
    </section>
  )
}
