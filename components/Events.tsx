import Image from "next/image";
const events = ["PAADC Design Competition", "PAADC Covid 19 Challenge", "PAADC Hackaton", "PAADC FLEX"];
export default function Events() {
    return (
        <section id="events" className="section glow">
            <h2 className="h-display text-6xl md:pl-[3vw]">Our Events</h2>
            <p className="mt-6 text-sm text-ink/70 md:pl-[3vw]">Copy stays here if any</p>
            <ul className="mt-12 flex snap-x gap-4 overflow-x-auto md:grid md:grid-cols-4 md:overflow-visible md:pl-[3vw]">
                {events.map((e, i) => (
                    <li key={e} className="relative aspect-[3/4] w-[65%] shrink-0 snap-start overflow-hidden md:w-auto">
                        <Image src={`/images/event-${i + 1}.jpg`} alt="" fill className="object-cover grayscale" />
                        <div className="absolute inset-0 bg-gradient-to-br from-brand/70 to-sun/70 mix-blend-multiply" />
                        <p className="absolute inset-x-0 bottom-0 border-t border-white/40 p-5 text-sm font-bold text-white">{e}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}