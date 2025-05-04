---
layout: ../../layouts/LayoutBlogPost.astro
title: "Circle Echoes ⌾"
description: "Parametric Curves"
pubDate: 2025-04-15
category: "visuals"
image: "https://github.com/blackars/Touchdesigner/blob/master/Circle-Echoes/circle_echoes-16-9.gif?raw=true"
slug: "circle-echoes"
---


**Circle Echoes ⌾** 

![Circle Echoes](https://github.com/blackars/Touchdesigner/blob/master/Circle-Echoes/circle_echoes-16-9.gif?raw=true)



**Base Shape Generation**

Circle1 and superFormula define a parametric profile (a circle or a "superformula" curve).
That profile is sent to geo1, which converts it into 2D/3D geometry within TouchDesigner.
With render1 and chopto1, the geometry output is passed to a TOP (image) and then to CHOP for use as an instance channel.

**Multi-layer Instancing**

You have four pattern TOPs (red/black) created from a constant + LFOs/Noise and combined through several math operations in merge1.
The instancing CHOP receives both the shape (circle/superFormula) and the combined patterns, so the geometry is duplicated and positioned according to the information in those maps (e.g., an instance appears wherever there is a "white" area).
This allows you to populate the scene with thousands of copies of your original curve, distributed in sophisticated patterns.

**Feedback and Post-processing**

The instance TOP enters a null and a feedback1 → transform3 → level3 → ... system, which eliminates, stretches, and attenuates the image each frame.
This accumulation-based "painting" generates the spirals/concentric patterns seen in the final out. Each frame absorbs part of the previous one and adds the new instance rendering, resulting in a dynamic and organic stroke.
A keyboardin1 allows you to "erase" or reset the feedback buffer with a key press.

To download .toe file from the repository, **[CLICK HERE](https://github.com/blackars/Touchdesigner/tree/master/Circle-Echoes)**.

