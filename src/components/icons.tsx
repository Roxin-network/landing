import type { SVGProps } from "react";

type IconName =
  | "clock" | "receipt" | "package" | "calendar" | "chart" | "wallet"
  | "users" | "inventory" | "arrow" | "check" | "shield" | "layers" | "spark";

export function Icon({ name, size = 22, ...props }: SVGProps<SVGSVGElement> & { name: IconName; size?: number }) {
  const shared = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const shapes: Record<IconName, React.ReactNode> = {
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    receipt: <><path d="M5 3h14v18l-3-2-4 2-4-2-3 2V3Z"/><path d="M9 8h6M9 12h6M9 16h3"/></>,
    package: <><rect x="3" y="5" width="18" height="15" rx="3"/><path d="M3 10h18M12 5v15"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4M17 3v4M3 11h18M8 15h3"/></>,
    chart: <><path d="M4 20V4M4 20h16M8 16l4-5 3 2 5-7"/><path d="M16 6h4v4"/></>,
    wallet: <><rect x="3" y="6" width="18" height="15" rx="3"/><path d="M3 10V7a3 3 0 0 1 3-3h12M16 15h5"/></>,
    users: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 6a3 3 0 0 1 0 6M17 16a5 5 0 0 1 4 4"/></>,
    inventory: <><path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z"/><path d="m3 7 9 5 9-5M12 12v10"/></>,
    arrow: <><path d="M18 12H6M11 7l-5 5 5 5"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>,
    shield: <><path d="M12 2 4 5v7c0 5 3.5 8 8 10 4.5-2 8-5 8-10V5l-8-3Z"/><path d="m9 12 2 2 4-4"/></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5"/></>,
    spark: <><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2ZM19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z"/></>,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...shared} {...props}>{shapes[name]}</svg>;
}
