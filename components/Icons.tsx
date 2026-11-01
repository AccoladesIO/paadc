type P = { size?: number };
const wrap = (d: string, label: string) =>
    function Icon({ size = 20 }: P) {
        return (<svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" role="img" aria-label={label}><path d={d} /></svg>);
    };
export const LinkedinIcon = wrap("M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.75 9.75h3.8v1.6h.06c.53-1 1.82-2.05 3.75-2.05 4 0 4.74 2.64 4.74 6.07V21h-4v-5.07c0-1.2-.02-2.76-1.68-2.76-1.68 0-1.94 1.31-1.94 2.67V21h-4z", "LinkedIn");
export const TwitterIcon = wrap("M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", "Twitter");
export const FacebookIcon = wrap("M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.6v-7h-2.4v-2.8h2.4V9.1c0-2.4 1.5-3.7 3.6-3.7 1 0 1.9.1 2.2.1v2.5h-1.5c-1.2 0-1.4.6-1.4 1.4v1.8h2.8l-.4 2.8h-2.4v7H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z", "Facebook");
export const YoutubeIcon = wrap("M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z", "YouTube");