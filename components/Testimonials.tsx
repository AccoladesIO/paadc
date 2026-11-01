import Image from "next/image";
const items = Array.from({ length: 3 }, () => ({ name: "Bolupe Akinsanya", role: "Participant 4.0", quote: "PAADC's emphasis on innovation and problem-solving encouraged me to develop my project, Agritech Nigeria, an agricultural technology solution enhancing farm yields. The experience has been instrumental in shaping my entrepreneurial journey." }));
export default function Testimonials() {
    return (
        <section className="section glow">
            <h2 className="h-display text-5xl md:pl-[3vw] md:text-6xl">Our Testimonials</h2>
            <p className="mt-6 max-w-5xl leading-7 md:pl-[3vw]">PAADC&apos;s impact is felt through the stories of innovators and entrepreneurs who have transformed their ideas into reality. From breakthroughs to sustainable solutions, our community has achieved remarkable success. Explore their testimonials and discover how PAADC&apos;s unique approach has empowered individuals to shape the future.</p>
            <ul className="mt-12 grid gap-6 md:grid-cols-3 md:pl-[3vw]">
                {items.map((t, i) => (
                    <li key={i} className="border border-sun/70 bg-white/70 p-6">
                        <div className="flex items-center gap-4">
                            <Image src="/images/avatar.jpg" alt="" width={44} height={44} className="size-11 object-cover" />
                            <div><p className="font-bold text-brand">{t.name}</p><p className="text-xs italic text-ink/50">{t.role}</p></div>
                        </div>
                        <blockquote className="mt-6 text-sm leading-7 text-ink/80">&quot;{t.quote}&quot; <a href="#" className="text-brand">Read more</a></blockquote>
                    </li>
                ))}
            </ul>
            <div className="mt-10 flex justify-center"><a href="#" className="btn-outline">See All Testimonials</a></div>
        </section>
    );
}