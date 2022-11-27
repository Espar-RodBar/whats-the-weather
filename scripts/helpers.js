export async function AJAX(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();

        if (!res.ok) throw new Error(`${res.status}`);
        return data;
    } catch (er) {
        throw er;
    }
}
