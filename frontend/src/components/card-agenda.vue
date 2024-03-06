<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'card-agenda',
    props: ['lastEventTitle', 'lastEventDescription', 'name','username']
})

</script>

<template>
    <article class="mt-2.5 rounded-xl border bg-slate-800 border-slate-700 p-4">
        <div class="flex items-center gap-4">
            <img alt=""
                src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                class="w-24 h-24 rounded-full object-cover" />

            <div>
                <h3 class="text-lg font-medium text-white">{{name}}</h3>

                <div class="flow-root">
                    <ul class="-m-1 flex flex-nowrap">
                        <li class="p-1 leading-none">
                            <a href="#" class="text-xs font-medium text-gray-300"> {{username}} </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <ul class="mt-4 space-y-2">
            <li>
                <p class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                    <strong class="font-medium text-white">{{lastEventTitle}}</strong>

                    <p class="mt-1 text-xs font-medium text-gray-300">
                        {{lastEventDescription}}
                    </p>
                </p>
            </li>
        </ul>
    </article>
</template>