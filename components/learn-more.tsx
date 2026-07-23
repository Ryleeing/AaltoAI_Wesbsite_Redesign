import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function LearnMore({
  href = "#",
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 text-sm font-medium text-accent",
        className
      )}
    >
      <span className="flex h-6 w-9 items-center justify-center rounded-full bg-accent text-white transition-colors group-hover:bg-accent-hover">
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
      Learn More
    </Link>
  );
}
