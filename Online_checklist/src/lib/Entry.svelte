<script>
    export let title = "Task";
    export let description = "This is the task!";
    export let task_id = 1; // for determining deletion in json doc

</script>

<header>
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
    <form id="delete" method="POST" action="?/delete">
        <input  type="hidden" name="id" value="{task_id}"/>
        <button type="submit">X</button>
    </form>
</header>


<style>
    form {
        width: 10%;
        height: 100%;
        margin-right: 10px;
    }

    button {
        background-color: red;
        font-size: 4rem;
        height: 100%;
        width: 100%;
        border: none;
        border-radius: 5px;
    }

    div {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       width: 90%;
    }

    button:hover {
        background-color: rgb(117, 25, 25);
    }

    header {
        padding: 10px 0 15px 0; 
        display: flex;
        flex-direction: row;
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