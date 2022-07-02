<template>
    <header>
        <!-- Accessing props through curly braces -->
        <h1>{{title}}</h1>

        <!-- Button Component -->
        <Button text="Add Task" color="green"/>
    </header>
</template>

<script>
    import Button from './Button';

    export default {
        name: 'Header',
        props: {
            /* 
            Passing in props in the form of an object
            Props can also be objects with type and default values for more control
            */
            title: {
                type: String,
                default: 'Hello World',
            },
        },
        components: {
            Button,
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>