# BlackX

A component-based Next.js landing page based on the QTX section flow, reimagined around the BlackX blackout and XRP switch narrative.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content updates

- Launch date, contract address, buy link, tokenomics percentages and labels, roadmap copy, and social links: `src/config/site.ts`
- Section copy and interactions: the matching file in `src/components/`
- Brand images and favicons: `public/`

The remaining 70% allocation is intentionally labeled **Remaining Supply**. The site displays a 17 November 2026 launch date. The contract address and official buy link are configured in `src/config/site.ts`.

To update the official buying details, change `contractAddress` and `buyUrl` in `src/config/site.ts`. The contract cards show the address with a copy control. Every **Buy now** CTA uses the trading URL.

The switch interaction runs a lit-city blackout sequence and reveals the XRP community 589 legend. The first switch also replays the scene. Scroll reveals and the scene animation honor reduced-motion preferences.

Hero desktop and mobile backgrounds were generated specifically for this site; the emblem and favicons were supplied by the project owner.

Set `NEXT_PUBLIC_SITE_URL` to the confirmed public origin before deployment to enable an absolute Open Graph image URL. The site does not assume a domain.
