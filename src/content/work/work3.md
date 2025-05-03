---
layout: ../../layouts/LayoutBlogPost.astro
title: "Reaction-Diffusion #3"
description: "Liquid Cells"
pubDate: 2024-10-23
category: "viusals"
image: "https://github.com/blackars/Touchdesigner/blob/master/Reaction-Diffusion/rd3.png?raw=true"
slug: "reaction-diffusion3"
---


This is the sample #3 of a Reaction-Diffusion system made with node components in Touchdessigner. 

**Reaction-Diffusion #3** 

![Reaction-Diffusion #3 ](https://github.com/blackars/Touchdesigner/blob/master/Reaction-Diffusion/rd3-16-9.gif?raw=true)

**Node Network** 

![Node Network to reaction-diffusion system #3](https://github.com/blackars/Touchdesigner/blob/master/Reaction-Diffusion/rd3-td-node.png?raw=true)

**Upper Path**
noise5 → feedback3 → blur3 → sharpen2
Simulates a basic reaction-diffusion process that produces clipped patches.
**Intermediate Path**
noise6 → lumaBlur3
A softer noise that introduces grayscale variation.
**Combination**
The two paths are merged using comp3 (multiplication or addition) to blend the spots.
At the output of comp3, noise7 is injected, followed by slope1 (which remaps values with a curve) to define smooth contours.

Finally, displace1 uses the slope1 map to slightly distort the resulting texture, creating fluid organic shapes.
Result
Softer volumetric patterns with smooth transitions and more liquid-like forms, resembling cells or membranes.

To download .toe file from the repository, **[CLICK HERE](https://github.com/blackars/Touchdesigner/tree/master/Reaction-Diffusion)**.

