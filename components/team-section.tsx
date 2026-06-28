import Image from "next/image"

const team = [
  { 
    name: "Santiago Mendez", 
    role: "CEO", 
    image: "/team/santiago-mendez.jpg" 
  },
  { 
    name: "Diego Hernandez Canetti", 
    role: "CMO", 
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWAOm097ClmBN6A_YjTeu78iI7dmDdvROtnzO9ytLOaPSSHRHc=s48-p" 
  },
  { 
    name: "Sofía Rabey Fischer", 
    role: "CFO", 
    image: "/team/sofia-rabey.jpg" 
  },
  { 
    name: "Uriel Grifman", 
    role: "Desarrollador de Software", 
    image: "/team/uriel-grifman.jpg" 
  },
  { 
    name: "Gonzalo Ivo Turri", 
    role: "Desarrollador de Software", 
    image: "/team/gonzalo-turri.jpg" 
  },
  { 
    name: "Iñaki Joaquín Lorences", 
    role: "Técnico de Campo", 
    image: "/team/inaki-lorences.jpg" 
  },
  { 
    name: "Julián Cardoso Landin", 
    role: "Técnico de Campo", 
    image: "/team/julian-cardoso.jpg" 
  },
  { 
    name: "Matías Gabriel Jastrebow", 
    role: "Asesor Contable y Legal", 
    image: "/team/matias-jastrebow.jpg" 
  },
]

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

        <div className="relative mt-12 overflow-hidden rounded-3xl border border-border/60">
          <Image
            src="/campo-vacas-dia.png"
            alt="Ganado pastando en la llanura pampeana argentina"
            width={1600}
            height={700}
            className="h-56 w-full object-cover md:h-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center rounded-2xl border border-border/60 bg-card p-6 text-center"
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-border/50">
                <Image
                  src={member.image}
                  alt={`Foto de perfil de ${member.name}`}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm font-medium text-card-foreground">{member.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}