import Entry from "./Database/Entry";


export async function loadEntries() {
    // load all entrys into an object and return that object
    try {
        const Entries = await Entry.find().exec()

        if (!Entries) {
            return {e: "Failed to retrieve entries"}
        }

        return {Entries}
    } catch (e) {
        return e;
    }
}




