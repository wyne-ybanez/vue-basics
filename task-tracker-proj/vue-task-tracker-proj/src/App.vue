<template>
  <div class="container">
    <!-- Header, contains the button component -->
    <Header @toggle-form="toggleAddTask" title="Task Tracker"/>

    <!-- AddTask, toggle effect for add task form -->
    <div v-show="showAddTask">
      <AddTask @add-task="addTask"/>
    </div>

    <!-- Task, 'delete-task' is emitted from Task.vue -->
    <Tasks 
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"  
    :tasks="tasks_data"
    />
  </div>
</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

export default {
  name: 'App',
  components: {
    Header,
    AddTask,
    Tasks,
  },
  // Somewhere to collect your data, an array
  data() {
    return {
      tasks_data: [],
      showAddTask: false,
    }
  },
  // Methods
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    addTask(task) {
      this.tasks_data = [...this.tasks_data, task]
    },
    deleteTask(id) {
      if(confirm('Are you sure?')){
        this.tasks_data = this.tasks_data.filter((task) => task.id 
        !== id)
      }
    },
    /*
      For each task, we check if it's the same ID.
      We destructure the task to make sure that it returns the reminders accurately.
      But for the reminder we want, for that specific ID, the reminder is toggled.
      Else, just return the task if the ID does not match.
    */
    toggleReminder(id) {
      this.tasks_data = this.tasks_data.map((task) => 
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    },
  },
  // Premade created data
  created() {
    this.tasks_data = [
      {
        id: 1,
        text: "Doctor's Appointment",
        day: 'March 1st at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at School",
        day: 'March 3rd at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: "Food Shopping",
        day: 'March 3rd at 11:00am',
        reminder: false,
      },
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
