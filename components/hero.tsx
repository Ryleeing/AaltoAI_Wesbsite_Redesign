const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3FH7Ck8fSac1101cheC6Fdnaagw/hf_20260622_173820_a6841d02-d1f6-4d86-8403-61330839ed33.mp4";

export function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
      {/* Background video — autoplays muted and loops forever */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Soft wash so the nav stays readable over the video */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-paper/70 to-transparent" />

      {/* Wordmark, as in the design draft */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <h1 className="select-none text-center font-sans text-[16vw] font-bold leading-none tracking-tight text-ink/90 mix-blend-multiply md:text-[11vw]">
          {/* AALTOAI */}
        </h1>
      </div>
    </section>
  );
}
