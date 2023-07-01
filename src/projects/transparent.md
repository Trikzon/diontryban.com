---
title: "Transparent"
description: "Allows resource packs to make certain entities support transparency."
logo: "projects/transparent.png"
startDate: "2020-04-20"
tags:
  - "minecraft-mod"
  - "java"
---

Transparent allows resource packs to give certain entities textures with transparent (or translucent) pixels. To use, simply install the mod and use or create a resource pack that gives one of the supported entities a transparent texture.

![Promotional Image](https://github.com/Trikzon/transparent/blob/1.20/promo.png?raw=true)

Resource pack used in the above image: [BwW Texturepack](https://www.curseforge.com/minecraft/texture-packs/bww-texturepack).

Officially supports [Paintings++ Mod](https://www.curseforge.com/minecraft/mc-mods/paintings)!

## Supported Entities
- Armor Stand (1.19.4+)
- Painting
- Item Frame
- End Crystal
- Beacon Beam (disabled by default)

If you want another entity to be supported by this mod, please let me know on [Discord](https://discord.gg/aqXkvbJ) or [GitHub Issues](https://github.com/Trikzon/transparent/issues).

## Configuration
| Entity      | Enabled By Default | Reason                                          | Versions |
|-------------|--------------------|-------------------------------------------------|----------|
| Armor Stand | true               |                                                 | 1.19.4+  |
| Painting    | true               |                                                 |          |
| Item Frame  | true               |                                                 |          |
| End Crystal | true               |                                                 |          |
| Beacon Beam | false              | Enabling transparency causes render layer bugs. |          |

In order to change the default configuration, paste the following json file content into a file in your resource pack located at `/assets/transparent/transparent.json`.

```json
{
    "armor_stand": true,
    "beacon_beam": false,
    "end_crystal": true,
    "item_frame": true,
    "painting": true
}
```

<style lang="scss">
    img {
        max-width: 100%;
        height: auto;
    }
</style>
