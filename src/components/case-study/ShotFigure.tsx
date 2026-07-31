import Image from "next/image";
import BrowserFrame from "@/components/ui/BrowserFrame";
import { cx } from "@/lib/cx";

export interface ShotFigureProps {
  src: string;
  alt: string;
  url: string;
  caption: string;
  aspect?: string;
  priority?: boolean;
  className?: string;
}

export default function ShotFigure({
  src,
  alt,
  url,
  caption,
  aspect = "aspect-[16/10]",
  priority = false,
  className,
}: ShotFigureProps) {
  return (
    <figure className={className}>
      <BrowserFrame url={url} className="shadow-soft">
        <div className={cx("relative w-full bg-muted", aspect)}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover object-top"
            sizes="(min-width: 1024px) 900px, 94vw"
          />
        </div>
      </BrowserFrame>
      <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}
