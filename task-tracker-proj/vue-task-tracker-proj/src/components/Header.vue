<template>
    <header>
        <!-- Accessing props through curly braces -->
        <h1>{{title}}</h1>

        <!-- Button Component, catching the toggle from the button component -->
        <Button @toggle-form="$emit('toggle-form')" text="Add Task" color="green"/>
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
                default: 'Task Tracker',
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