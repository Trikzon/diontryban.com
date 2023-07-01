---
title: Flourish
description: "Lets you spread small flowers with bonemeal."
logo: "projects/flourish.gif"
startDate: "2019-12-30"
tags:
  - "minecraft-mod"
  - "java"
---

Use bonemeal to spread small flowers. This is a port of the Bedrock Edition mechanic of [Flower Farming](https://minecraft.fandom.com/wiki/Tutorials/Flower_farming).

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/SKGd66HaAWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Configuration
The configuration file is located at `.minecraft/config/flourish.json`. It can also be edited through in-game UI (using [Mod Menu](https://modrinth.com/mod/modmenu) on Fabric and Quilt).

### Default Config File
```json
{
  "version": 1,
  "wither_rose": false,
  "use_tall_flower_behavior": false
}
```

### Config Option Descriptions
- `wither_rose`: When true, allows wither roses to be spread.
- `use_tall_flower_behavior`: Previously, this mod made it so that bonemealing a small flower would spawn a small flower item just like it does for tall flowers. When true, this config replaces the Bedrock Edition mechanic with this mechanic. [YouTube Video Demonstration](https://youtu.be/SebkrRJZ-GU)
