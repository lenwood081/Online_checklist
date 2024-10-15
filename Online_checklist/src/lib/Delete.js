import Entry from "$lib/Database/Entry";

export async function deleteEntry(_id) {
    
    try {
        // find task to delete
        const entry = await Entry.deleteOne({ _id: _id }).exec();

        if (!entry) {
            return {e: "Could not find entry to delete"};
        }

        return {entry}
    } catch (e) {
        return e;
    }
}