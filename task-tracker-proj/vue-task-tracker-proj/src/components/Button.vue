<template>
    <button 
        :style="{background: color}" 
        @click="onClick()"
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
            onClick() {
                this.$emit('btn-click')
            }
        }
    }
</script>