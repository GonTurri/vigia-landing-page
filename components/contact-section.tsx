import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contacto" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-medium text-primary">Contacto</span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Recuperá lo que el campo te cuesta
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Dejanos tus datos y un asesor te contactará para coordinar una demo
              en tu establecimiento. Atendemos la zona núcleo ganadera de Buenos
              Aires y La Pampa.
            </p>
            <dl className="mt-8 space-y-3 text-sm">
              <div className="flex gap-2">
                <dt className="text-muted-foreground">Email:</dt>
                <dd className="text-foreground">contacto@vigia.com.ar</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-muted-foreground">Cobertura:</dt>
                <dd className="text-foreground">Buenos Aires y La Pampa</dd>
              </div>
            </dl>
          </div>

          <form className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input id="nombre" name="nombre" placeholder="Tu nombre" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="establecimiento">Establecimiento</Label>
                <Input id="establecimiento" name="establecimiento" placeholder="Nombre del campo" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cabezas">Cabezas de ganado</Label>
                <Input id="cabezas" name="cabezas" type="number" placeholder="Ej: 500" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <Label htmlFor="mensaje">Mensaje</Label>
              <Textarea id="mensaje" name="mensaje" placeholder="Contanos sobre tu rodeo" rows={4} />
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full">
              Solicitar demo
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
