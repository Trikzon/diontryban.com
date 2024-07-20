const mcMods = [
    {
        name: "Ash API",
        slug: "ash-api",
    },
    {
        name: "Pitch Dark",
        slug: "pitch-dark",
    },
    {
        name: "Shuffle",
        slug: "shuffle",
    },
    {
        name: "Armor Visibility",
        slug: "armor-visibility",
    },
    {
        name: "Transparent",
        slug: "transparent",
    },
    {
        name: "Flourish",
        slug: "flourish",
    },
    {
        name: "Sneak Through Berries",
        slug: "sneak-through-berries",
    }
]

export default function McMods() {
    return (
        <div>
            <h1>Minecraft Mods</h1>
            {mcMods.map(mod => (
                <div key={mod.name}>
                    <img src={`/projects/mc-mods/${mod.slug}/promo.png`}/>
                    <div>
                        <img src={`/projects/mc-mods/${mod.slug}/icon.png`}/>
                        <h2>{mod.name}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}
