import { loadEntries } from "$lib/Load";
import { deleteEntry } from "$lib/Delete"

export async function load({ params }) {
    
    const { e, Entries} = await loadEntries();

    if (e) {
        return fail(500, {e});
    }

    // need to do this to as the id causes issues
    let indexedEntries = [];

    Entries.forEach((entry) => {
        let newEntry = {
            _id: entry._id.toString(),  // so that i ca stringify this and remove the userid
            title: entry.title,
            description: entry.description,
        };

        indexedEntries.push(newEntry);
    });

    console.log(indexedEntries);
    return {indexedEntries};
}

export const actions = {
    delete: async({request}) => {
        const formData = Object.fromEntries(await request.formData());
        console.log(formData)
        const { id } = formData;
        
        const { e, entry } = await deleteEntry(id);

        if (e) {
            return fail(500, {e})
        }
    }
}
