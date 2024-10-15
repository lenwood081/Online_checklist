import Entry from "$lib/Database/Entry";

export async function createEntry(title, description) {

    try {
        let entry = await Entry.create({
            title: title,
            description: description
        });

        return {entry};
    } catch(e) {
        return e;
    }
}
