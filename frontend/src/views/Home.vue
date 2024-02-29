<script setup>
    import { ref, onMounted } from "vue";
    import { useUserStore } from '../stores/userStore';

    const user = ref();
    const userStore = useUserStore();

    onMounted(async () => {
        await userStore.getUser();
    })
</script>

<template>
    <div v-if="userStore.user">
        <h1>{{ userStore.user?.name }}</h1>
    </div>
</template>