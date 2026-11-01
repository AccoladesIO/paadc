"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, Mail, Phone, X } from "lucide-react";
import LogoGrid from "@/components/LogoGrid";

const current = ["Shuttlers", "Techcabal", "Kawai Technologies", "Microsoft", "MTN", "Jobberman", "Africa Fintech Foundry", "Paga", "Endeavor"];
const past = ["Techpoint", "Hult Prize", "Iroko TV", "Nigeria Info", "Semicolon", "Verraki", "GasInvest", "HO", "Verod", "Primero", "Nigeria Climate Innovation", "Tangerine Life", "The Future Project", "The Afara Initiative", "Lagos Innovates", "Kawai Technologies", "Jumia", "NBC", "Wema Bank", "LSETF", "Lagos State", "Primero 2", "Wennovation Hub", "Geoplex"];

const contacts = [
    { name: "Oluwalana Ajayi", role: "Chairman, PAADC 5.0", phone: "+2348073214809", email: "chair@paadc.com", img: "ajayi" },
    { name: "Oluwatobi Adewale", role: "Deputy Chairman, PAADC 5.0", phone: "+2348073214809", email: "deputy@paadc.com", img: "adewale" },
    { name: "Ridwan Ganiy", role: "Sponsoship and Partnership, PAADC 5.0", phone: "+2348069266365", email: "sponsors@paadc.com", img: "ganiy" },
    { name: "Chisom Igboanugo", role: "Sustainability, PAADC 5.0", phone: "+2348069266365", email: "sustainability@paadc.com", img: "igboanugo" },
    { name: "Blessing Ekarume", role: "Guests, Judges and Panelists, PAADC 5.0", phone: "+2348069266365", email: "guests@paadc.com", img: "ekarume" },
];

const groups = [
    { title: "Our Sponsors", names: current, cols: "grid-cols-3", dir: "partners" },
    { title: "Past Sponsors", names: past, cols: "grid-cols-3 lg:grid-cols-4", dir: "sponsors" },
];

export default function SupportClient() {
    const [active, setActive] = useState(0);
    const [reach, setReach] = useState(false);
    const refs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        if (!reach) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setReach(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [reach]);

    // Dots follow the page scroll: whichever group is centred in the viewport is active.
    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(refs.current.indexOf(e.target as HTMLElement))),
            { rootMargin: "-45% 0px -45% 0px" }
        );
        refs.current.forEach((el) => el && io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <main className="glow px-6 pb-24 pt-28 md:px-[8vw] md:pt-40">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_1fr] lg:gap-[5vw]">
                {/* Copy: first on mobile; pinned on the right on desktop while the logos scroll past */}
                <div className={`relative lg:sticky lg:top-40 lg:order-2 lg:self-start ${reach ? "z-50" : ""}`}>
                    {reach && <div onClick={() => setReach(false)} aria-hidden className="fixed inset-0 bg-brand/50" />}
                    <h1 className="text-2xl font-bold leading-snug text-brand md:text-4xl">PAADC Design Competition Sponsorship</h1>
                    <p className="mt-6 max-w-xl text-sm font-light leading-7 text-ink/80 md:text-base md:leading-8">Since the inception of this competition four years ago, we have successfully showcased and presented many brilliant designs and innovations by young Nigerian undergraduates and have also fostered the implementation of these designs, with the support from our past sponsors who have tirelessly supported this course in everyway possible. You can be part this innovative change.</p>
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <a href="/files/sponsorship-packet.pdf" download className="btn-outline bg-white px-6 text-center font-normal text-brand">Download Sponsorship Packet</a>
                        <div className="relative z-10">
                            <button onClick={() => setReach(!reach)} aria-expanded={reach} aria-haspopup="dialog" className="btn-solid flex w-full items-center justify-center gap-4 font-normal sm:w-auto sm:px-12">Reach out to us <ChevronDown size={18} className={reach ? "rotate-180" : ""} /></button>
                            {reach && (
                                <div role="dialog" aria-label="Contact the PAADC team" className="absolute bottom-full left-0 mb-4 w-[calc(100vw-3rem)] sm:left-auto sm:right-0 sm:w-[430px]">
                                    <button onClick={() => setReach(false)} aria-label="Close" className="mb-3 ml-auto block text-white"><X size={26} /></button>
                                    <ul className="relative bg-white px-7 py-6 shadow-soft after:absolute after:-bottom-2 after:left-1/2 after:size-4 after:rotate-45 after:bg-white sm:after:left-auto sm:after:right-8">
                                        {contacts.map((c) => (
                                            <li key={c.name} className="flex items-center gap-4 py-3">
                                                <Image src={`/images/contacts/${c.img}.jpg`} alt="" width={56} height={56} className="size-14 shrink-0 rounded-full object-cover" />
                                                <div className="min-w-0 flex-1">
                                                    <p className="font-bold text-ink/80">{c.name}</p>
                                                    <p className="text-sm text-ink/70">{c.role}</p>
                                                </div>
                                                <div className="flex shrink-0 gap-2 bg-mist px-2 py-1.5 text-brand">
                                                    <a href={`tel:${c.phone}`} aria-label={`Call ${c.name}`}><Phone size={20} className="fill-current stroke-none" /></a>
                                                    <a href={`mailto:${c.email}`} aria-label={`Email ${c.name}`}><Mail size={24} className="fill-current stroke-white" /></a>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Logos: one continuous vertical scroll, each group taking roughly a screen */}
                <div className="flex flex-col gap-14 lg:order-1 lg:gap-0">
                    {groups.map((g, k) => (
                        <section key={g.title} ref={(el) => { refs.current[k] = el; }} className="scroll-mt-32 lg:flex lg:min-h-[80vh] lg:flex-col lg:justify-center lg:py-6">
                            <h2 className="mb-8 text-2xl font-bold text-brand lg:text-3xl lg:text-ink/80">{g.title}</h2>
                            <LogoGrid names={g.names} cols={g.cols} dir={g.dir} />
                        </section>
                    ))}
                    <div className="sticky bottom-8 hidden justify-center gap-6 lg:flex" aria-hidden>
                        {groups.map((g, k) => (
                            <span key={g.title} className={`rounded-full bg-brand transition-all ${k === active ? "size-8" : "size-5"}`} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}