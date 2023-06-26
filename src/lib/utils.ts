export function formatDate(date: string): string {
    const d = new Date(date);
    const year = d.getUTCFullYear();
    const month = d.toLocaleString("default", { month: "long", timeZone: "UTC" });
    return `${month} ${year}`;
}
