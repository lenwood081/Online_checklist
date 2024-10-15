<script>
    export let title = "Task";
    export let description = "This is the task!";

</script>

<header>
    <h1>{title}</h1>
    <p>{description}</p>
</header>


<style>
    header {
        display: flex;
        flex-direction: column;
        padding: 10px 0 15px 0;
        margin: 1% 2% 1% 2%;
        width: 96%;
        height: fit-content;
        align-items: center;
        border: 1px solid azure;
    }

    p {
        font-size: 1.2rem;
    }

    h1 {
        font-size: 2rem;
        padding: 3px;
    }
</style>