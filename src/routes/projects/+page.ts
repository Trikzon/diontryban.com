export async function load({ fetch }) {
    const response = await fetch("/api/projects");
    const projects = await response.json();
    return { projects };
}
