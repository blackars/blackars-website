---
layout: ../../layouts/LayoutBlogPost.astro
title: "Reaction-Diffusion #2"
description: "Granulated Clouds"
pubDate: 2024-10-22
category: "visuals"
image: "https://github.com/blackars/Touchdesigner/blob/master/Reaction-Diffusion/rd2.png?raw=true"
slug: "reaction-diffusion2"
---


This is the sample #2 of a Reaction-Diffusion system made with node components in Touchdessigner. 

**Reaction-Diffusion #2** 

![Reaction-Diffusion #2](https://github.com/blackars/Touchdesigner/blob/master/Reaction-Diffusion/rd2-16-9.gif?raw=true)

**Node Network** 

![Node Network to reaction-diffusion system #2](https://github.com/blackars/Touchdesigner/blob/master/Reaction-Diffusion/rd2-td-node.png?raw=true)

Initial Seed: A noise3 operator generates a more contrasted pattern than RD1.

**Feedback:** feedback2 feeds back into the network.

**Diffusion:** blur2 smooths the feedback signal.

**Reaction:** sharpen1 enhances contrasted details.

**Multi-source Mixing:** Parallel to the main route, a noise4 (fine noise) and a lumaBlur2 are injected, then **everything is combined in comp2. This adds granularity and disrupts repetition.

**Output:** The result is sent directly to out2, producing a granular “cloud” of light and dark patches, with less defined contours.

**Result:** A “cloud fabric” of softer, textured points/clusters with reduced edge definition.


To download .toe file from the repository, **[CLICK HERE](https://github.com/blackars/Touchdesigner/tree/master/Reaction-Diffusion)**.