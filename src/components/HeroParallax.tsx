import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Props = {
  heroImage: string
}

export default function HeroParallax({ heroImage }: Props) {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const imgWrapRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current || !imgRef.current) return

    const ctx = gsap.context(() => {
      // imagem sobe e some
      gsap.fromTo(
        imgRef.current,
        { yPercent: 0, opacity: 1 },
        {
          yPercent: -60, // controla o “quanto sobe” (ajuste: -30 ~ -60)
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 600px", // começa quando o topo entra na viewport
            end: "top 400px",   // termina quando sai por cima
            scrub: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-40 mx-auto w-full"
      style={{ isolation: "isolate" }} // garante sobreposição correta
    >
    <div className="relative">
        <img
        ref={imgRef}
        src={heroImage}
        alt="Dashboard da ChatVexio mostrando caixa de entrada unificada com WhatsApp, Instagram e outros canais"
        className="w-full h-auto will-change-transform [transform:translateZ(0)] drop-shadow-xl"
        />
        {/* overlay opcional (ex: radial gradient) */}
        <div className="absolute inset-0" />
    </div>
    </section>
  )
}
