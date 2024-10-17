<script>
    import Entry from "$lib/Entry.svelte";

    export let data;
    $: entries = data.indexedEntries;

    let title_input = "title";
    let description_input = "description";
</script>

<main>
    {#each entries as entry}
        <Entry 
            title={entry.title}
            description={entry.description}
            task_id={entry._id}
        ></Entry>
    {/each}
    <form id="add" method="POST" action="?/add">
        <div>
            <input id="title" type="text" name="title" value="{title_input}"/>
            <input id="descp" type="text" name="description" value="{description_input}"/>
        </div>
        <button type="submit">ADD</button>
    </form>
</main>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
    }

    button {
        background-color: rgb(7, 202, 7);
        font-size: 4rem;
        height: 100%;
        width: 10%;
        margin-right: 10px;
        border: none;
        border-radius: 5px;
    }

    button:hover {
        background-color: rgb(19, 105, 19);
    }

    form {
        background-color: rgb(66, 65, 65);
        position: fixed;
        bottom: 0;
        padding: 10px 0 15px 0; 
        display: flex;
        flex-direction: row;
        margin: 1% 0 1% 0;
        width: 100%;
        height: fit-content;
        align-items: center;
        border: 1px solid azure;
    }

    input {
        background-color: rgb(40, 38, 38);
        border: 1px solid azure;
        font-size: 1.3rem;
        padding: 2px;
        margin: 3px;
    }

    main {
        display: flex;
        width: 100%;
        flex-direction: column;
        min-height: 100vh;
        background-color: rgb(40, 38, 38);
    }
</style>