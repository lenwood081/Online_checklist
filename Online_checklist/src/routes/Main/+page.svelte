<script>
    import Entry from "$lib/Entry.svelte";

    export let data;
    $: entries = data.indexedEntries;
</script>

<main>
    {#each entries as entry}
        <Entry 
            title={entry.title}
            description={entry.description}
            task_id={entry._id}
        ></Entry>
    {/each}
</main>

<style>
    main {
        display: flex;
        width: 100%;
        flex-direction: column;
        min-height: 100vh;
        background-color: rgb(40, 38, 38);
    }
</style>