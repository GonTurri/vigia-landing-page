"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VigiaLogo } from "@/components/vigia-logo"

const navLinks = [
  { href: "#problema", label: "El problema" },
  { href: "#solucion", label: "Solución" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#planes", label: "Planes" },
  { href: "#quienes-somos", label: "Quiénes somos" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#inicio" aria-label="VigIA inicio">
          <VigiaLogo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href="#contacto">Solicitar demo</a>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <a href="#contacto" onClick={() => setOpen(false)}>
                Solicitar demo
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
