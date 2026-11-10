# BlackX

A component-based Next.js landing page based on the QTX section flow, reimagined around the BlackX blackout and XRP switch narrative.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content updates

- Launch date, contract address, tokenomics percentages and labels, roadmap copy, and social links: `src/config/site.ts`
- Section copy and interactions: the matching file in `src/components/`
- Brand images and favicons: `public/`

The remaining 70% allocation is intentionally labeled **Remaining Supply**. The site displays a 13th November 2026 launch date. The XRP pairing is confirmed; the network, contract address, trading venue, and exact buying steps remain pending confirmation. No purchase link is shown until those details are available.

The switch interaction runs a lit-city blackout sequence and reveals the XRP community 589 legend. The first switch also replays the scene. Scroll reveals and the scene animation honor reduced-motion preferences.

Hero desktop and mobile backgrounds were generated specifically for this site; the emblem and favicons were supplied by the project owner.

Set `NEXT_PUBLIC_SITE_URL` to the confirmed public origin before deployment to enable an absolute Open Graph image URL. The site does not assume a domain.
