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
    <div v-if="userStore.user">
        <h1>{{ userStore.user?.name }}</h1>
    </div>
</template>