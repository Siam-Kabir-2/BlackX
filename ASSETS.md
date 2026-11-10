# Visual assets

The two hero backgrounds were created with the built-in image generation tool for this project, then compressed to WebP. The BlackX emblem and favicon set were supplied by the project owner and copied into `public/`.

The switch scene is rendered from code in `src/components/SwitchScenery.tsx`. SVG buildings, storefronts, power lines, moving cars, and the billboard stay in the same frame while CSS changes the city from powered to blackout to XRP signal. The switch interaction does not load a background image. The older `switch-city-lit-*.webp` files remain in `public/` as unused source artwork.

## Desktop hero prompt

> A vast modern city at night during a complete blackout, seen from a high rooftop, quiet dark skyline fading into mist. One narrow ribbon of cold silver-white electric light begins to travel across distant buildings, suggesting a second switch has turned on. Photoreal cinematic architectural photography, refined premium editorial art direction, deep graphite blacks, restrained white highlights, realistic atmosphere, subtle grain. Wide 16:9 composition with the left half dark and uncluttered for a headline. No people, text, logos, symbols, purple, orange, saturated neon, or financial chart.

## Mobile hero prompt

> A modern city skyline at night in complete blackout, viewed from a high rooftop, with dark silhouettes and mist. A single cold silver-white current of light begins across a few distant buildings, signaling a second switch turning on. Photoreal cinematic architectural photography, premium restrained editorial art direction, deep graphite blacks, subtle grain. Vertical 9:16 composition with dark central upper space for a headline and the city lower in frame. No people, text, logos, symbols, purple, orange, saturated neon, or financial chart.

