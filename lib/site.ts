import { LinkedinIcon, TwitterIcon, FacebookIcon, YoutubeIcon } from "@/components/Icons";

// NEXT_PUBLIC_* values are inlined at build time, so each must be referenced literally.
export const socials = [
    { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "#", Icon: LinkedinIcon },
    { label: "Twitter", href: process.env.NEXT_PUBLIC_TWITTER_URL ?? "#", Icon: TwitterIcon },
    { label: "Facebook", href: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "#", Icon: FacebookIcon },
    { label: "YouTube", href: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "#", Icon: YoutubeIcon },
];

export const navLinks = [
    { label: "About us", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Support us", href: "/support-us" },
] as const;