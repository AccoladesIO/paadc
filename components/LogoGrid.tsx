import Image from "next/image";
export const slug = (n: string) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-");
export default function LogoGrid({ names, cols, dir }: { names: string[]; cols: string; dir: string }) {
    return (
        <ul className={`grid border border-ink/10 bg-white/70 ${cols}`}>
            {names.map((n) => (
                <li key={n} className="grid aspect-[1.4] place-items-center border border-ink/10 p-3">
                    <Image src={`/images/${dir}/${slug(n)}.svg`} alt={n} width={140} height={48} className="max-h-10 w-auto max-w-full opacity-80 grayscale" />
                </li>
            ))}
        </ul>
    );
}