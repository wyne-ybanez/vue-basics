<template>
    <div :class="[task.reminder ? 'reminder' : '', 'task']"> 
        <h3>
            {{ task.text }} 
            <i @click="onDelete(task.id)" class="fas fa-times"></i>
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Task',
        props: {
            task: Object,
        },
        methods: {
            onDelete(id) {
                // Emits the ID to the App.vue level, emit always moves up one level, added title 'delete-task'
                this.$emit('delete-task', id)
            }
        }
    }
</script>

// Scoped styling means it will only style for this component
<style scope>
    .task {
        background: #f4f4f4;
        margin: 5px;
        padding: 10px 20px;
        cursor: pointer;
    }

    .task.reminder {
        border-left: 5px solid green;
    }

    .task h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .fas .fa-times {
        display: flex;
        justify-content: flex-end;
    }

    .fas {
        color: red;
    }
</style>