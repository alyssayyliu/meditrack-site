import Image from "next/image";

interface PhoneFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export function PhoneFrame({
  src,
  alt,
  width = 320,
  height = 712,
  priority = false,
  className = "",
}: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto ${className}`}>
      <div className="overflow-hidden rounded-[2.5rem] border-2 border-zinc-700 bg-zinc-900 p-2 shadow-2xl shadow-black/40">
        <div className="mx-auto mb-2 h-1 w-[40%] rounded-full bg-zinc-700" />
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full rounded-[2rem]"
          priority={priority}
        />
      </div>
    </div>
  );
}
