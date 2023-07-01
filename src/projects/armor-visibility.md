---
title: "Armor Visibility"
description: "Lets you toggle the rendering of armor with a keyboard shortcut."
logo: "/projects/armor-visibility.png"
startDate: "2020-06-21"
tags:
  - "minecraft-mod"
  - "java"
---

View yours and others' skins through armor.

When toggled (with `v` by default) your armor will stop rendering.

If you shift and press the toggle key (`V` by default) all player armor will stop rendering.

This mod is only client-side and won't affect the rendering of armor on other clients.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/y9PXSRNULdw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Configuration
The configuration file is located at `.minecraft/config/armor_visibility.json`. It can also be edited through in-game UI (using [Mod Menu](https://modrinth.com/mod/modmenu) on Fabric and Quilt).

### Default Config File
```json
{
  "version": 3,
  "keep_elytra_visible": false,
  "keep_cape_visible": true,
  "players_only": true
}
```

### Config Option Descriptions
- `keep_elytra_visible`: When true, elytra will remain visible.
- `keep_cape_visible`: When true, capes will remain visible.
- `players_only`: When true, armor rendering on other entities (zombies, armor stands, etc.) won't be toggle-able.
