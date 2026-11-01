"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const trustees = Array.from({ length: 6 }, (_, i) => ({
    name: "Engr. Nasir Giwa",
    role: "Coordinator, BUA Refinery & Petrochemical Ltd. Founder, Engy Energy Limited.",
    teaser: "Tosin leads the Lagos Innovates team at the Lagos State Employment Trust Fund. In her current role, Tosin is responsible for designing and…",
    lead: "Is a top-notch strategist and has been instrumental to the successful operation of many multinational energy and power companies, including Siemens Energy Limited, Solar Turbines Services Nigeria, and Tractor and Equipment Nigeria Limited (now Mantrac Nigeria Limited).",
    bio: ["With extensive experience in strategic leadership, corporate policy formulation, and technical innovation in this industry, he was listed as one of the 60 Most Influential Figures in Power by ESI Africa 2015.", "A COREN registered engineer, Nasir began his management training at UAC of Nigeria Plc."],
    photo: `/images/trustee-${i + 1}.png`,
}));

export default function Trustees() {
    const [i, setI] = useState(1);
    const [open, setOpen] = useState(false);
    const t = trustees[i];
    const go = (d: number) => setI((i + d + trustees.length) % trustees.length);
    const arrows = (
        <div className="flex gap-3">
            <button onClick={() => go(-1)} aria-label="Previous" className="grid size-10 place-items-center bg-white/80 text-brand shadow-soft"><ArrowLeft size={20} /></button>
            <button onClick={() => go(1)} aria-label="Next" className="grid size-10 place-items-center bg-white/80 text-brand shadow-soft"><ArrowRight size={20} /></button>
        </div>
    );
    return (
        <section className="section glow overflow-hidden">
            <div className="flex items-start justify-between md:pl-[3vw]">
                <h2 className={`h-display text-5xl md:text-6xl ${open ? "hidden" : ""}`}>Our Board of Trustees</h2>
                {open && <button onClick={() => setOpen(false)} className="btn-outline ml-auto">Collapse info</button>}
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.2fr_auto] md:pl-[3vw]">
                <div className="order-3 md:order-1 md:self-center">
                    <h3 className="text-4xl font-extrabold tracking-tighter text-ink/70">{t.name}</h3>
                    <p className="mt-3 max-w-sm text-sm text-ink/60">{t.role}</p>
                    {open ? (
                        <div className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-ink/70"><p className="text-lg leading-8">{t.lead}</p>{t.bio.map(p => <p key={p}>{p}</p>)}</div>
                    ) : (
                        <p className="mt-8 max-w-sm text-sm leading-7 text-ink/70">{t.teaser}</p>
                    )}
                    {!open && <button onClick={() => setOpen(true)} className="btn-outline mt-8">Unroll more info</button>}
                </div>
                <div className="relative order-2 aspect-[3/4]">
                    <Image src={t.photo} alt={t.name} fill className="object-contain object-bottom" />
                    <div className="absolute bottom-4 right-0 md:hidden">{arrows}</div>
                </div>
                <div className="order-1 flex gap-3 md:order-3 md:flex-col">
                    {trustees.map((x, n) => (
                        <button key={n} onClick={() => setI(n)} aria-label={`Trustee ${n + 1}`} className={`relative size-14 shrink-0 overflow-hidden ${n === i ? "bg-sun ring-4 ring-sun" : "bg-brand/20"}`}>
                            <Image src={x.photo} alt="" fill className="object-cover object-top" />
                        </button>
                    ))}
                    <div className="mt-auto hidden md:block">{arrows}</div>
                </div>
            </div>
        </section>
    );
}