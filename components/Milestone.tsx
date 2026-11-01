import Image from "next/image";
const items = [
    { n: "4 Startups", l: "Incubated", img: "/images/m1.png", pos: "lg:left-[8%] lg:top-[4%]", size: "size-28" },
    { n: "45+ Universities", l: "Featured", img: "/images/m2.png", pos: "lg:left-[34%] lg:top-[32%]", size: "size-36" },
    { n: "9 pressing sectors", l: "Identified", img: "/images/m3.png", pos: "lg:left-[66%] lg:top-[58%]", size: "size-40" },
];
export default function Milestone() {
    return (
        <section id="about" className="section glow">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:pl-[6vw]">
                <h2 className="h-display text-center text-5xl lg:self-center lg:text-left lg:text-7xl">Our Milestone</h2>
                <div className="relative flex flex-col items-center gap-14 lg:block lg:h-[620px]">
                    <svg aria-hidden className="absolute inset-0 hidden size-full lg:block" viewBox="0 0 700 620" fill="none">
                        <path d="M120 120 A250 250 0 0 1 370 80 A250 250 0 0 1 340 330 Q330 470 480 500" stroke="#F5E58A" strokeWidth="2" strokeDasharray="6 6" />
                    </svg>
                    {items.map(i => (
                        <figure key={i.l} className={`text-center lg:absolute ${i.pos}`}>
                            <div className={`relative mx-auto grid ${i.size} place-items-center rounded-full bg-gradient-to-br from-brand via-brand to-yellow-400 shadow-soft`}>
                                <Image src={i.img} alt="" width={80} height={80} className="object-contain" />
                            </div>
                            <figcaption className="mt-3 text-ink/70">{i.n}<b className="block text-lg font-bold text-ink/80">{i.l}</b></figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}