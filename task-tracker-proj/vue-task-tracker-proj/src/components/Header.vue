<template>
    <header>
        <!-- Accessing props through curly braces -->
        <h1>{{title}}</h1>

        <!-- Button Component, catching the toggle from the button component -->
        <Button 
        @btn-click="$emit('btn-click')" 
        :text="showAddTask ? 'Close' : 'Add Task'" 
        :color="showAddTask ? 'black' : 'green'"
        />
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
            title: String,
            // Boolean prop types are automatically true unless specified
            showAddTask: Boolean,
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