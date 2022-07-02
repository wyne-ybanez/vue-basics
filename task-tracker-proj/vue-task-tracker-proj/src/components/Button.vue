<template>
    <button 
        :style="{background: color}" 
        @click="Add()"
        class="btn"
        >   
        {{text}}
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: {
                type: String,
                default: 'Button',
            },
            color: {
                type: String,
            }
        },
        methods: {
            Add() {
                console.log('Added');
            },
            Update() {
                console.log('Update');
            },
            Delete() {
                console.log('Delete');
            }
        }
    }
</script>