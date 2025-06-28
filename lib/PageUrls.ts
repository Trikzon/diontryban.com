// A single place to store string references to page urls.
// Stored as functions because some urls might take parameters.
export const PageUrls = {
    home: () => "/",
    external: {
        bluesky: () => "https://bsky.app/profile/tryban.dev",
        github: () => "https://github.com/trikzon",
        linkedin: () => "https://www.linkedin.com/in/diontryban",
        mastodon: () => "https://peoplemaking.games/@tryban",
        maven: () => "https://maven.tryban.dev",
        source: () => "https://github.com/trikzon/tryban.dev",
    },
};
