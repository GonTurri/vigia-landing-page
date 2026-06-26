import Image from "next/image"

export function VigiaLogo({
  className = "",
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/vigia-logo.png"
        alt="VigIA"
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
        priority
      />
      {showWordmark && (
        <span className="text-xl font-semibold tracking-tight text-foreground">
          Vig<span className="text-primary">IA</span>
        </span>
      )}
    </span>
  )
}
