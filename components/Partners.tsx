import Image from "next/image";
const partners = ["Shuttlers", "Techcabal", "Kawai Technologies", "Microsoft", "MTN", "Jobberman", "Africa Fintech Foundry", "Paga", "Endeavor"];
export default function Partners() {
    return (
        <section id="partners" className="section glow">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.5fr] lg:pl-[6vw]">
                <div>
                    <h2 className="h-display text-6xl lg:text-7xl">Our Partners</h2>
                    <p className="mt-6 max-w-xs leading-8">They are our backbone, our strength and the reason why you can be one</p>
                </div>
                <ul className="grid grid-cols-3 border border-ink/10 bg-white/70">
                    {partners.map(p => (
                        <li key={p} className="grid aspect-[4/3] place-items-center border border-ink/10 p-4 lg:aspect-[1.4]">
                            <Image src={`/images/partners/${p.toLowerCase().replace(/ /g, "-")}.svg`} alt={p} width={150} height={50} className="max-h-10 w-auto opacity-80 grayscale" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}