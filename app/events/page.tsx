import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Footer } from "@/components/Chrome";

const events = [
    { title: "Design Competittion", cta: "See past winners", body: "The Professor Ayodele Awojobi Design Competition is an annual Nigerian STEM (Science, Technology, Engineering, and Mathematics) based design competition, targeted at the undergraduate population. Our vision is to encourage the development of indigenous solutions to Nigerian problems, using science and technology. The Professor Ayodele Awojobi Design Competition (PAADC) began in 2017," },
    { title: "Covid Challenge", cta: "See winner", body: "The Professor Ayodele Awojobi Covid 19 innovation challenge is an opportunity for developers and innovators to build software and hardware solutions that drive social impact with the aim tackling some of the challenges engendered by the Coronavirus (Covid-19) Pandemic" },
    { title: "Masterclass", cta: "Tell me more", body: "PAADC is proud to announce that in addition to the competition cycles which we have yearly, we would be having Hackathons this year. Our hackathons are organized to target specific problems peculiar to specific industries in the Nigerian economy. We will be using all our platforms to spur engagement with our ecosystem of young innovators and technology enthusiasts with the goal of turning viable innovations into practical products." },
    { title: "PAADC Nexus", cta: "Tell me more", body: "The Professor Ayodele Awojobi Covid 19 innovation challenge is an opportunity for developers and innovators to build software and hardware solutions that drive social impact with the aim tackling some of the challenges engendered by the Coronavirus (Covid-19) Pandemic" },
];

export default function EventsPage() {
    return (
        <main>
            {events.map((e, i) => (
                <section key={e.title} id={`event-${i}`} className="section glow">
                    <h2 className="h-display text-2xl md:pl-[6vw]">Our Events</h2>
                    <div className="mt-8 grid items-center gap-10 md:grid-cols-[minmax(0,430px)_1fr] md:gap-[8vw] md:pl-[6vw]">
                        <div className="relative aspect-square w-full overflow-hidden">
                            <Image src={`/images/event-${i + 1}.jpg`} alt="" fill className="object-cover grayscale" />
                            <div className="absolute inset-0 bg-gradient-to-br from-brand/70 to-sun/80 mix-blend-multiply" />
                        </div>
                        <div className="max-w-md">
                            <h3 className="text-3xl font-bold text-brand">{e.title}</h3>
                            <p className="mt-6 text-sm font-light leading-7 text-ink/80">{e.body}</p>
                            <a href="#" className="btn-outline mt-8 inline-block bg-white/50 px-4 py-2 text-xs font-light">{e.cta}</a>
                        </div>
                    </div>
                    <a href={i < events.length - 1 ? `#event-${i + 1}` : "#footer"} aria-label="Next" className="absolute bottom-8 right-[8vw] hidden size-[72px] place-items-center rounded-full border border-brand text-brand md:grid"><ArrowDown /></a>
                </section>
            ))}
            <Footer />
        </main>
    );
}