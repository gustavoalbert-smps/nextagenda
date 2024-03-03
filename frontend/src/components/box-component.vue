<script>
    import { defineComponent } from 'vue';

    import cardAgenda from "../components/card-agenda.vue";

    export default defineComponent({
        name: 'box-component',
        props: ['title','titleIcon','body']
    })

</script>

<template>
    <div class="avoid-sidebar box box-min-height">
        <div class="box-title">
            <h1 class="text-xl text-black font-bold"><i :class="titleIcon"></i> {{ title }}</h1>
            <hr />
        </div>
        
        <div class="box-body">
            <slot></slot>            
        </div>
    </div>
</template>