"use client";
import { useState } from "react";
import Image from "next/image";

const winners = [
    { team: "PAADC 3.0 - Team Rawmac", school: "University of Lagos" },
    { team: "PAADC 4.0 - Team Hive", school: "University of Ibadan" },
    { team: "PAADC 2.0 - Team Styled", school: "Covenant University" },
    { team: "PAADC 1.0 - Team Afrifi", school: "University of Benin" },
];
export default function HallOfFame() {
    const [i, setI] = useState(1);
    const n = winners.length;
    const at = (o: number) => (i + o + n) % n;
    const img = (k: number, cls: string) => (
        <div className={`relative shrink-0 overflow-hidden ${cls}`}>
            <Image src={`/images/hall-${k + 1}.jpg`} alt="" fill className="object-cover" />
        </div>
    );
    const side = "h-[190px] w-[22vw] md:h-[250px]";
    return (
        <section id="hall-of-fame" className="glow relative overflow-hidden px-0 pb-24 pt-20 text-center">
            <h2 className="h-display text-4xl md:text-5xl">Hall of Fame</h2>
            <div className="mt-20 flex items-end justify-center gap-0">
                <button onClick={() => setI(at(-1))} aria-label="Previous winner" className="relative">
                    {img(at(-1), `${side} -ml-[4vw] w-[26vw] after:absolute after:inset-0 after:bg-gradient-to-br after:from-brand/50 after:to-sun/60 after:mix-blend-multiply`)}
                </button>
                <div className="relative z-10 shadow-2xl shadow-black/30">{img(i, "h-[200px] w-[min(62vw,555px)] md:h-[365px]")}</div>
                <button onClick={() => setI(at(1))} aria-label="Next winner" className="relative">
                    {img(at(1), `${side} -mr-[4vw] w-[26vw] after:absolute after:inset-0 after:bg-gradient-to-br after:from-brand/50 after:to-sun/60 after:mix-blend-multiply`)}
                </button>
            </div>
            <h3 className="mt-6 text-3xl font-semibold text-ink/80">{winners[i].team}</h3>
            <p className="text-brand">{winners[i].school}</p>
            <div className="mt-14 flex justify-center gap-2">
                {winners.map((w, k) => (
                    <button key={w.team} onClick={() => setI(k)} aria-label={w.team} aria-current={k === i} className={`size-3 ${k === i ? "bg-brand/25" : "bg-brand"}`} />
                ))}
            </div>
        </section>
    );
}