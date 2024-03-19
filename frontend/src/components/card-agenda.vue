<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'card-agenda',
    props: ['agenda'],
    setup() {
        const router = useRouter();

        return {
            router
        }
    }
})

</script>

<template>
    <article class="mt-2.5 rounded-xl border bg-slate-800 border-slate-700 p-4 cursor-pointer" @click="router.push({name: 'agenda-show', params: {id: agenda.id}})">
        <div class="flex items-center gap-4">
            <img alt=""
                src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                class="w-24 h-24 rounded-full object-cover" />

            <div>
                <h3 class="text-lg font-medium text-white">{{agenda.name}}</h3>

                <div class="flow-root">
                    <ul class="-m-1 flex flex-nowrap">
                        <li class="p-1 leading-none">
                            <a class="text-xs font-medium text-gray-300" @click.stop.prevent=""> {{agenda.creator.first_name}} </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <ul class="mt-4 space-y-2">
            <li>
                <p class="block h-full truncate rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                    <strong class="font-medium text-white">
                        {{agenda.lastEventTitle ? agenda.lastEventTitle : 'Nenhum evento de destaque no momento.'}}
                    </strong>

                    <p class="mt-1 text-xs font-medium text-gray-300">
                        {{agenda.lastEventDescription}}
                    </p>
                </p>
            </li>
        </ul>
    </article>
</template>