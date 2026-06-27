import { VigiaLogo } from "@/components/vigia-logo"

const groups = [
  {
    title: "Producto",
    links: [
      { href: "#solucion", label: "Solución" },
      { href: "#tecnologia", label: "Tecnología" },
      { href: "#planes", label: "Planes" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "#quienes-somos", label: "Quiénes somos" },
      { href: "#problema", label: "El problema" },
      { href: "#contacto", label: "Contacto" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <VigiaLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              VigIA: vigilancia constante potenciada por Inteligencia Artificial.
              Lo que no se Vigila, se pierde.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium text-foreground">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} VigIA. Todos los derechos reservados.</p>
          <p>Buenos Aires y La Pampa, Argentina</p>
        </div>
      </div>
    </footer>
  )
}
