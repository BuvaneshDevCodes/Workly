"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Timeline for hero entrance animations
    const tl = gsap.timeline()

    // Initial fade-in animations
    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        descriptionRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        buttonsRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        statsRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      )

    // Blob animations - floating effect
    gsap.to(blob1Ref.current, {
      y: -50,
      x: 30,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    gsap.to(blob2Ref.current, {
      y: 50,
      x: -30,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    // Scroll animations - starts from current position
    gsap.to(backgroundRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "30% center",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
      y: -100,
      ease: "none",
    })

    // Parallax effect for blobs - with reduced opacity change
    gsap.to(blob1Ref.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "30% center",
        end: "bottom center",
        scrub: 1,
      },
      y: 200,
      opacity: 0.2,
      ease: "none",
    })

    gsap.to(blob2Ref.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "30% center",
        end: "bottom center",
        scrub: 1,
      },
      y: -200,
      opacity: 0.2,
      ease: "none",
    })

    // Title parallax - subtle movement
    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "30% center",
        end: "bottom center",
        scrub: 0.5,
      },
      y: -80,
      ease: "none",
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated background */}
      <div ref={backgroundRef} className="absolute inset-0 -z-10">
        {/* Background gradient blur blobs */}
        <div
          ref={blob1Ref}
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300 to-blue-200 rounded-full blur-3xl opacity-40"
        ></div>
        <div
          ref={blob2Ref}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-green-300 to-green-200 rounded-full blur-3xl opacity-40"
        ></div>

        {/* Grid pattern background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto text-center w-full relative z-10">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-[var(--text-heading)] mb-6 leading-tight"
        >
          Find Your <span className="bg-gradient-text">Dream Job</span> Today
        </h1>

        <p
          ref={descriptionRef}
          className="text-lg md:text-xl text-[var(--text-body)] max-w-3xl mx-auto mb-8"
        >
          Discover thousands of job opportunities from top companies. Connect
          with employers and advance your career with Workly - the modern job
          search platform.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link href="/auth/register">
            <Button className="bg-[var(--primary)] hover:bg-[#1D4ED8] text-white font-semibold h-12 px-8 text-base flex items-center gap-2 group shadow-md hover:shadow-lg transition-all">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button
              variant="outline"
              className="border-[var(--border-default)] text-[var(--text-heading)] hover:bg-[var(--text-muted)] hover:border-[var(--primary)] h-12 px-8 text-base transition-all shadow-sm hover:shadow-md"
            >
              Sign In
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-[var(--border-default)]/30 hover:bg-white/70 transition-smooth">
            <div className="text-3xl font-bold text-[var(--primary)]">10K+</div>
            <p className="text-sm text-[var(--text-muted)]">Active Jobs</p>
          </div>
          <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-[var(--border-default)]/30 hover:bg-white/70 transition-smooth">
            <div className="text-3xl font-bold text-[var(--secondary)]">5K+</div>
            <p className="text-sm text-[var(--text-muted)]">Companies</p>
          </div>
          <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-[var(--border-default)]/30 hover:bg-white/70 transition-smooth">
            <div className="text-3xl font-bold text-[var(--primary)]">100K+</div>
            <p className="text-sm text-[var(--text-muted)]">Users</p>
          </div>
        </div>
      </div>

      {/* Animated accent shapes */}
      <div className="absolute top-1/4 right-10 w-32 h-32 border-2 border-[var(--primary)]/20 rounded-full animate-float opacity-50"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 border-2 border-[var(--secondary)]/20 rounded-full animate-float opacity-50" style={{ animationDelay: "1s" }}></div>
    </section>
  )
}
