<template>
    <div id="alert-1" class="alert" :class="[type,show ? '' : 'hidden']" role="alert">
        <i class="mr-1.5" :class="icon"></i>
        <slot name="message">
            error
        </slot>
        <button type="button" class="ms-auto ml-1.5 -my-1.5 bg-gray-50 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white" data-dismiss-target="#alert-1" aria-label="Close">
            <i class="bx bx-x"></i>
        </button>
    </div>
  </template>

<script>
import { defineComponent, onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

    export default defineComponent({
        name: 'alert-component',
        props: ['icon','type','show'],
        setup () {
            onMounted(() => {
                initFlowbite();
            })
        }
    })
</script>

<style scoped>
</style>