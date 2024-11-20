<script setup>
import {ref, watch} from 'vue';
import { useDebounceFn } from '@vueuse/core';

const props = defineProps({
    wire: {},
    mingleData: {},
})

const {wire, mingleData} = props

const users = ref([])
const query = ref('');
const loading = ref(false); // Track loading state

users.value = props.mingleData.users

const search = useDebounceFn(() => {
    loading.value = true; // Set loading state
    props.wire.search(query.value).then((data) => {
        users.value = data
        loading.value = false; // Clear loading state after fetching data
    })
}, 250);

</script>

<template>
    <div class="flex flex-col gap-4">
        <h1 class="text-2xl font-semibold">Search Users using $wire inside of Vuejs</h1>

        <div class="flex gap-4 items-end">
            <!-- Search input -->
            <label class="relative">
                <input type="text" @input="search" v-model="query" class="px-4 py-2 border border-gray-300 rounded-lg pr-8"/>
                <svg class="h-full aspect-square absolute end-2 top-0 stroke-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            </label>

            <!-- Loading Indicator -->
            <div v-if="loading" class="flex gap-1 text-gray-500 text-sm">
                <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Loading...
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <div v-for="user in users" :key="user.id" class="bg-gray-50 rounded flex flex-col px-4 py-1.5 border">
                <h2 class="font-semibold">{{ user.name }}</h2>
                <p class="text-gray-500">{{ user.email }}</p>
            </div>
        </div>
    </div>
</template>
