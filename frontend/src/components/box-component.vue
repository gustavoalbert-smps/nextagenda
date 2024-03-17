<script>
    import { defineComponent } from 'vue';
    import { RouterLink } from 'vue-router';

    export default defineComponent({
        name: 'box-component',
        props: ['title','titleIcon','links','multiples'],
        components: {RouterLink}
    })

</script>

<template>
    <div class="avoid-sidebar box box-min-height">
        <div class="box-title flex justify-between items-center text-xl">
            <h1 class="text-black font-bold my-4"><i :class="titleIcon"></i> {{ title }}</h1>
            <div v-for="(link, index) in links" :key="index">
                <RouterLink :to="link.route" class="rounded border" :class="link.button">
                    <i :class="link.icon"></i>
                </RouterLink>
            </div>
        </div>
        <hr />
        
        <div class="box-body">
            <slot class="mb-4"></slot>
            <slot name="secondBox"></slot>
        </div>
    </div>
</template>