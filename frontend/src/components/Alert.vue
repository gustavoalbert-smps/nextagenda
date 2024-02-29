<template>
    <div class="position-absolute z-50 top-7 start-50 translate-middle-x alert alert-dismissible fade d-flex align-items-center" :class="[type,show ? 'show' : '']" role="alert">
        <i class="mr-1.5" :class="icon"></i>
        <slot name="message">
            error
        </slot>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  </template>

<script>
    export default {
        props: ['icon','type','show']        
    }
</script>

<style scoped>
</style>