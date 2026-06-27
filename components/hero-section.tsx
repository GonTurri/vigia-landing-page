import Image from "next/image"
import { ShieldCheck, MapPin, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        Monitoreo ganadero con Inteligencia Artificial
      </span>

      <h1 className="mt-6 text-pretty text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl flex flex-wrap items-center gap-x-2">
        <span>Lo que no se</span>
        <span className="inline-flex items-center">
          {/* Logo reemplazando la V */}
          <Image 
            src="/vigia-logo.png" 
            alt="Logo VigIA" 
            width={48} 
            height={48} 
            className="inline-block h-[1em] w-auto mr-1 pb-1"
            priority
          />
          <span>ig</span>
          {/* Letras separadas para aplicar los colores de la marca */}
          <span className="text-pink-500 font-bold ml-[2px]">I</span>
          <span className="text-blue-600 font-bold mx-[2px]">L</span>
          <span className="text-pink-500 font-bold">A</span>
        </span>
        <span>se pierde.</span>
      </h1>

      <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
        Protegé tu rodeo las 24 horas. VigIA combina sensores biométricos, GPS
        y IA para alertarte ante robos, detectar celo y problemas de salud a
        tiempo, y cumplir con el SENASA sin tocar el teclado.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <a href="#contacto">Solicitar demo</a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="#solucion">Conocer la solución</a>
        </Button>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { icon: ShieldCheck, label: "Blindaje patrimonial 24/7" },
          { icon: MapPin, label: "Perímetros virtuales en tiempo real" },
          { icon: Activity, label: "Detección temprana de celo y salud" },
        ].map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-sm leading-relaxed text-muted-foreground">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>
  ) 
}
