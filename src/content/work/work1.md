---
layout: ../../layouts/LayoutBlogPost.astro
title: "Reaction-Diffusion #1"
description: "Monochrome Labyrinth"
pubDate: 2024-10-21
category: "viusals"
image: "https://github.com/blackars/Touchdesigner/blob/master/Reaction-Diffusion/rd1.png?raw=true"
slug: "reaction-diffusion1"
---

This is the sample #1 of a Reaction-Diffusion system made with node components in Touchdessigner. 

**Reaction-Diffusion #1** 


![Reaction-Diffusion #1 ](https://github.com/blackars/Touchdesigner/blob/master/Reaction-Diffusion/rd1-16-9.gif?raw=true)

**Node Network** 


![Node Network to reaction-diffusion system #1](https://github.com/blackars/Touchdesigner/blob/master/Reaction-Diffusion/rd1-td-node.png?raw=true)

Initial Seed: A noise1 operator generates a random pattern in grayscale levels.

**Feedback:** The feedback1 accumulates iterations. Each frame reinjects the previous output.
**Diffusion:** A blur1 (Gaussian) smooths the feedback buffer, modeling the passage of time for the substance.
**Reaction:** A sharpen applied after the blur emphasizes the edges (areas with strong gradients), mimicking chemical interactions.
**Thresholding / Contours:** After the reaction, a lumaBlur1 followed by a comp1 (or a simple level/ramp map) transforms the image into black-and-white "rings," resembling the typical contoured patterns of the Gray–Scott model.
**Control:** Additionally, a keyboardin is connected to feedback1 to "seed" or reset the reaction with a key press.
**Result:** Maze-like textures with sharply defined black-and-white contours


To download .toe file from the repository, **[CLICK HERE](https://github.com/blackars/Touchdesigner/tree/master/Reaction-Diffusion)**.

