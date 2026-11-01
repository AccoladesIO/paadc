"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, CircleHelp, ArrowUp } from "lucide-react";
import { socials, navLinks } from "@/lib/site";

export const Logo = () => (<Link href="/" aria-label="PAADC home"><Image src="/images/logo.png" alt="Prof. Ayodele Awojobi Design Competition" width={190} height={50} priority /></Link>);

export const Socials = ({ className = "", size = 20 }: { className?: string; size?: number }) => (
    <ul className={`flex gap-4 text-ink/50 ${className}`}>
        {socials.map(({ label, href, Icon }) => (
            <li key={label}><a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:text-brand"><Icon size={size} /></a></li>
        ))}
    </ul>
);

function NavItems({ onClick }: { onClick?: () => void }) {
    const path = usePathname();
    return navLinks.map(({ label, href }) => {
        const active = path === href;
        return (
            <Link key={href} href={href} onClick={onClick} aria-current={active ? "page" : undefined}
                className={`relative whitespace-nowrap hover:text-brand ${active ? "pl-2 text-brand before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-sun" : ""}`}>{label}</Link>
        );
    });
}

export function Header() {
    const [open, setOpen] = useState(false);
    const topNav = usePathname() === "/support-us";
    return (
        <>
            <header className="fixed inset-x-0 top-0 z-[45] flex items-center justify-between bg-white/85 px-6 py-4 shadow-[0_1px_0_rgba(80,113,52,0.08)] backdrop-blur-md md:px-[8vw] md:py-5">
                <Logo />
                {topNav ? (
                    <div className="hidden items-stretch shadow-soft md:flex">
                        <nav className="flex items-center gap-9 bg-white/80 px-8 text-sm text-ink/80 backdrop-blur"><NavItems /></nav>
                        <Link href="/apply" className="border border-brand/30 bg-white px-6 py-4 font-medium text-brand">Start application</Link>
                    </div>
                ) : (
                    <Link href="/apply" className="btn-solid hidden md:block">Start application</Link>
                )}
                <button className="md:hidden" aria-label="Open menu" onClick={() => setOpen(true)}><Menu className="text-brand" /></button>
            </header>

            <div className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}>
                <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-brand/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
                <aside className={`absolute inset-y-0 right-0 flex w-[63%] flex-col bg-white px-6 py-10 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
                    <button className="self-end text-brand" aria-label="Close menu" onClick={() => setOpen(false)}><X size={28} /></button>
                    <nav className="mt-10 flex flex-col items-start gap-8 text-lg text-ink/80">
                        <NavItems onClick={() => setOpen(false)} />
                        <Link href="/apply" onClick={() => setOpen(false)} className="btn-solid w-full text-center">Start Application</Link>
                    </nav>
                    <a href="#" className="mt-auto flex items-center gap-2 text-sm text-ink/60"><CircleHelp size={18} />Find help</a>
                    <Socials className="mt-10 text-brand/70" />
                </aside>
            </div>

            {!topNav && <Socials className="fixed left-[8.5vw] top-1/2 z-30 hidden -translate-y-1/2 flex-col md:flex" />}
            {!topNav && (
                <nav className="fixed bottom-8 left-[7vw] z-30 hidden gap-12 bg-white/80 px-5 py-4 text-sm text-ink/70 shadow-soft backdrop-blur md:flex"><NavItems /></nav>
            )}
        </>
    );
}

export function Footer() {
    const col = "flex flex-col gap-3 text-sm";
    const h = "mb-4 font-bold tracking-wide text-brand";
    return (
        <footer id="footer" className="bg-mist">
            <div className="grid md:grid-cols-4 md:divide-x md:divide-brand/10">
                <div className="flex justify-center py-10"><Image src="/images/mark.svg" alt="" width={56} height={64} /></div>
                <div className="px-8 py-10"><h3 className={h}>QUICK NAVIGATION</h3>
                    <div className={col}><Link href="/">Home</Link>{navLinks.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}</div></div>
                <div className="px-8 py-10"><h3 className={h}>QUICK LINKS</h3>
                    <div className={col}><Link href="/apply">Start Application</Link><Link href="/volunteer">Volunteer</Link><Link href="/support-us">Sponsor</Link><Link href="/about#hall-of-fame">Hall of Fame</Link></div></div>
                <div className="relative px-8 py-10">
                    <h3 className={h}>REACH US</h3>
                    <div className={col}><a href="mailto:contact@paadc.com">contact@paadc.com</a><span>+234 807 321 4809</span><span>+234 806 926 6365</span>
                        <Socials className="text-ink/50" /><a href="#" className="flex items-center gap-2 text-brand"><CircleHelp size={16} />Find help</a></div>
                    <a href="#top" aria-label="Back to top" className="absolute bottom-10 right-8 hidden size-20 place-items-center rounded-full border border-brand text-brand md:grid"><ArrowUp /></a>
                </div>
            </div>
            <p className="border-t border-brand/10 py-8 text-center text-sm text-ink/50">An initiative of the University of Lagos Engineering Society</p>
        </footer>
    );
}