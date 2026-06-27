import Image from "next/image"

export function VigiaLogo({
  className = "",
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    // Cambiamos gap-2 por gap-0 para quitar la separación automática
    <span className={`inline-flex items-center gap-0 ${className}`}>
      {/* IMAGEN 1: El ícono original */}
      <Image
        src="/vigia-logo.png"
        alt="VigIA Icono"
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
        priority
      />

      {/* IMAGEN 2: El Logo 2R nuevo al lado */}
      {showWordmark && (
        <Image
          src="/Logo 2R.png"
          alt="VigIA Nombre"
          width={200}
          height={64}
          // Agregamos -ml-4 (margin-left: -1rem) para "tirar" esta imagen hacia la izquierda
          // Podés probar con -ml-2, -ml-6 o -ml-8 hasta que queden exactamente donde te guste.
          className="h-20 w-auto object-contain -ml-4"
          priority
        />
      )}
    </span>
  )
}