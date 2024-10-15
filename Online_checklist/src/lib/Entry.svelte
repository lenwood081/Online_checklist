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
    <button>X</button>
</header>


<style>
    button {
        background-color: red;
        font-size: 4rem;
        height: 100%;
        width: 10%;
        margin-right: 10px;
    }

    div {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       width: 90%;
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