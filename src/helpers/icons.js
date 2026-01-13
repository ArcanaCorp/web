import { IconChevronDown, IconChevronLeft, IconChevronRight, IconChevronUp, IconMenu, IconShare3, IconX } from "@tabler/icons-react";

/* =====================================================
   ICON REGISTRY
   ===================================================== */
const ICONS = {
    "chevron-up": IconChevronUp,
    "chevron-down": IconChevronDown,
    "chevron-left": IconChevronLeft,
    "chevron-right": IconChevronRight,
    "menu": IconMenu,
    "close": IconX,
    "share": IconShare3,
};

/* =====================================================
   SIZE TOKENS (aligned with system.css)
   ===================================================== */
const ICON_SIZES = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
};

/* =====================================================
   ICON COMPONENT
   ===================================================== */
export function Icon({name, size = "md", color = "currentColor", stroke = 2, className = "", ariaLabel, decorative = false}) {
    
    const IconComponent = ICONS[name];

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    return (
        <IconComponent
            size={ICON_SIZES[size] ?? size}
            stroke={stroke}
            color={color}
            className={className}
            aria-hidden={decorative}
            aria-label={!decorative ? ariaLabel || name : undefined}
            role={decorative ? "presentation" : "img"}
        />
    );
}