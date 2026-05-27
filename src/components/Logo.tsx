import Image from "next/image";

export function Logo({
  size = 40,
  className = "",
  priority = false,
}: {
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <span
      className={`inline-block relative ${className}`}
      style={{ width: size, height: size }}
    >
      <span
        className="absolute inset-0 rounded-full blur-md"
        style={{
          background:
            "radial-gradient(circle, rgba(199,125,255,0.55) 0%, rgba(123,44,191,0.25) 60%, transparent 80%)",
        }}
        aria-hidden
      />
      <Image
        src="/logo.png"
        alt="BMBY"
        width={size}
        height={size}
        priority={priority}
        className="relative rounded-full"
        style={{ width: size, height: size }}
      />
    </span>
  );
}
