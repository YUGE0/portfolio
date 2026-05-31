'use client'

import { ReactNode } from 'react'

/** Mirrored Contact Me path — use for nav docked beside footer */
export const NAV_DOCK_PATH =
  'M28.2486 27.4706C17.952 17.4576 25.0408 0 39.4032 0H672.804C688.427 0 703.434 6.09364 714.634 16.9854L771.751 72.5294C782.048 82.5424 774.959 100 760.597 100H127.196C111.573 100 96.566 93.9064 85.3658 83.0146L28.2486 27.4706Z'

export const SHAPE_VIEWBOX = '0 0 1400 100'

export type SlantedInset = {
  top?: number
  right?: number
  bottom?: number
  left?: number
}

export interface ShapeShellProps {
  /** `pill` for floating nav, `slanted` when docked near footer */
  variant?: 'pill' | 'slanted'
  /** SVG path for slanted variant */
  path?: string
  viewBox?: string
  /** Fill color of the slanted shape (visible as border + background) */
  borderColor?: string
  /**
   * Inset from slanted path edges in viewBox units (800×100).
   * Controls border thickness + inner padding when slanted is active.
   */
  slantedInset?: SlantedInset
  /** Tailwind classes for pill layout + padding */
  pillClassName?: string
  /** Tailwind classes for slanted inner content layout + padding */
  slantedClassName?: string
  /** Inner background when slanted — default transparent so path fill shows cleanly */
  slantedBgClassName?: string
  /** Tailwind classes on outer wrapper / svg */
  className?: string
  children: ReactNode
}

const DEFAULT_INSET: Required<SlantedInset> = {
  top: 6,
  right: 20,
  bottom: 6,
  left: 36,
}

function parseViewBox(viewBox: string) {
  const [, , width, height] = viewBox.split(/\s+/).map(Number)
  return { width, height }
}

export default function ShapeShell({
  variant = 'pill',
  path = NAV_DOCK_PATH,
  viewBox = SHAPE_VIEWBOX,
  borderColor = '#2A4064',
  slantedInset,
  pillClassName = 'flex items-center gap-4 px-5 py-2.5',
  slantedClassName = 'flex h-full w-full items-center gap-2',
  slantedBgClassName = 'bg-transparent',
  className = '',
  children,
}: ShapeShellProps) {
  if (variant === 'pill') {
    return (
      <div
        className={`rounded-full bg-white shadow-lg shadow-fcolor/20 ${pillClassName} ${className}`}
      >
        {children}
      </div>
    )
  }

  const inset = { ...DEFAULT_INSET, ...slantedInset }
  const { width, height } = parseViewBox(viewBox)
  const contentX = inset.left
  const contentY = inset.top
  const contentW = width - inset.left - inset.right
  const contentH = height - inset.top - inset.bottom

  return (
    <svg
      className={`block h-full w-full transition-[height] duration-300 ease-out ${className}`}
      viewBox={viewBox}
      preserveAspectRatio="none"
      shapeRendering="geometricPrecision"
      aria-hidden
    >
      <path d={path} fill={borderColor} shapeRendering="geometricPrecision" />
      <foreignObject x={contentX} y={contentY} width={contentW} height={contentH}>
        <div className={`h-full w-full ${slantedBgClassName} ${slantedClassName}`}>
          {children}
        </div>
      </foreignObject>
    </svg>
  )
}
