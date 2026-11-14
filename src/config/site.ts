export const site = {
  name: "BlackX",
  tokenSymbol: "$BLACKX",
  logo: "/blackx-emblem.png",
  launchDate: "17 November 2026",
  contractAddress: null as string | null,
  socials: [
    { label: "X", href: "https://x.com/blackX589", handle: "Updates and conversation" },
    { label: "Discord", href: "https://discord.gg/2DGqxaawqw", handle: "Community discussions" },
    { label: "Telegram", href: "https://t.me/+ZtEUjb9VJnQ2OGUx", handle: "Follow the signal" },
  ],
  tokenomics: [
    { label: "Remaining Supply", percentage: 70 },
    { label: "Team", percentage: 20 },
    { label: "Marketing", percentage: 10 },
  ],
  roadmap: [
    { title: "The blackout", description: "Introduce BlackX, its visual world, and the switch story." },
    { title: "The signal", description: "Build the community around the XRP switch and 589 legend." },
    { title: "The launch", description: "Share the verified contract, network and XRP trading route when ready." },
    { title: "After the flip", description: "Grow the story and community through future campaigns." },
  ],
} as const;
