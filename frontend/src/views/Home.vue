<script setup>
    import { ref, onMounted, defineEmits } from "vue";
    import { useUserStore } from '../stores/userStore';

    const userStore = useUserStore();
    const emit = defineEmits(['sendUser','adjustNavBar']);

    onMounted(async () => {
        await userStore.getUser();

        emit('sendUser',userStore.user);
        emit('adjustNavBar');
    })
</script>

<template>
    <div class="avoid-sidebar box">
        <h1 class="text-xl text-black font-bold"><i class="bx bxs-calendar"></i> Agendas</h1>
        
        <h3 class="text-xs uppercase">Current lesson:</h3>
        <h2 class="tracking-wide">
            Object in JavaScript
            <br />
            (Challenge)
        </h2>
        <button class="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">Go to lesson</button>
    </div>
</template>