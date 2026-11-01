import Image from "next/image";
export default function Hero() {
    return (
        <section id="top" className="section glow flex items-center">
            <div className="grid w-full items-center gap-12 md:grid-cols-[1fr_1.3fr] md:pl-[6vw]">
                <div>
                    <h1 className="h-display text-7xl md:text-[9rem]">Think</h1>
                    <p className="mt-6 max-w-sm text-lg md:text-base">The solution to Nigeria&apos;s problems lies with you. What are you going to do about it?</p>
                    <a href="#apply" className="btn-outline mt-8 inline-block md:hidden">Start application</a>
                </div>
                <div className="relative mx-auto aspect-square w-full max-w-[760px]">
                    <div className="absolute inset-0 overflow-hidden rounded-[22%]">
                        <Image src="/images/hero.png" alt="Two participants holding a sign" fill priority className="object-cover" />
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-brand/50 to-sun/60 mix-blend-multiply" /> */}
                    </div>
                    {/* <span className="absolute left-[2%] top-[62%] size-12 rounded-full bg-gradient-to-br from-lime-300 to-brand" /> */}
                    {/* <span className="absolute right-[2%] top-[34%] size-14 rotate-12 rounded-lg bg-gradient-to-br from-sun to-lime-600" />
                    <span className="absolute bottom-[2%] left-[60%] h-14 w-8 rounded-full bg-gradient-to-br from-sun to-brand" /> */}
                </div>
            </div>
        </section>
    );
}