<template>
<!-- The v-for directive needs to be wrapped in a parent div because this directive needs a single root -->
    <div>
        <div v-for="task in tasks" :key="task.id">
            <Task :task="task" />
        </div>
    </div>
</template>

<script>
    import Task from './Task'

    export default {
        name: 'Tasks',
        props: {
            tasks: Array
        },
        components: {
            Task,
        }
    }
</script>