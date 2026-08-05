import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";

/**
 * Single wrapper over Hugeicons so stroke weight and sizing stay consistent
 * everywhere. Hugeicons free (@hugeicons/react and @hugeicons/core-free-icons)
 * is MIT licensed, 5,437 icons. Stroke style, per the brief.
 *
 * Always inherits currentColor, so an icon takes the colour of whatever it sits
 * in and never needs a colour prop at the call site.
 */
export function Icon({
  icon,
  size = 18,
  strokeWidth = 1.5,
  className,
}: {
  icon: IconSvgElement;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      strokeWidth={strokeWidth}
      color="currentColor"
      className={className}
      aria-hidden
    />
  );
}
