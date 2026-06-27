import Image from "next/image"
import { ShieldCheck, MapPin, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/campo-vacas-dia.png"
          alt="Ganado pastando en el campo durante el día"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />
      </div>

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
              ig
              {/* La 'L' en color azul. Usaremos el color primary por defecto, si querías otro tono específico de azul, podés cambiar la clase 'text-blue-500' o similar */}
              <span className="text-blue-600 font-bold mx-[1px]">I L A</span>
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
```eof

### Consideraciones técnicas sobre este cambio:

1.  **Alineación del Logo:** Transformé el `<h1>` en un *flexbox* (agregando `flex flex-wrap items-center gap-x-2`). Esto permite que el texto se adapte a distintas pantallas sin que el logo se desalinee.
2.  **Tamaño del Logo Relativo:** Usé la clase `h-[1em] w-auto` en el logo. Esto es clave: hace que el logo tome automáticamente la misma altura que la fuente del texto que lo rodea (ya sea que se vea en celular o en un monitor 4K).
3.  **Color Azul:** Agregué la clase de Tailwind `text-blue-600` a la frase "I L A". Si tu marca usa un azul en particular que tenés configurado como tu color primario en el `tailwind.config.ts`, podés cambiar ese `text-blue-600` por `text-primary`.

Asegurate de que tu logo esté en la carpeta `public/` y se llame exactamente `/vigia-logo.png` (como usamos antes para la pestaña). Si el archivo del logo no tiene márgenes internos, debería encajar perfectamente en la oración.
