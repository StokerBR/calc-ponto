<template>
  <div class="border-b border-blue-700 text-slate-400">
    <ul
      class="flex text-sm font-medium text-center"
      id="myTab"
      data-tabs-toggle="#myTabContent"
      role="tablist"
    >
      <!-- <li>
        <button
          class="text-white inline-block p-4 border-b-2 rounded-t-lg"
          type="button"
          role="tab"
        >
          Pontos
        </button>
      </li>
      <li>
        <button
          class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-slate-100 hover:border-blue-600"
          type="button"
          role="tab"
        >
          Entrada/Saída
        </button>
      </li> -->
      <li v-for="(item, index) in tabs" :key="index">
        <button
          :class="[
            'inline-block p-4 border-b-2 rounded-t-lg',
            { 'text-white': index === selectedTab },
            {
              'border-transparent hover:text-slate-100 hover:border-blue-600':
                index !== selectedTab,
            },
          ]"
          type="button"
          role="tab"
          @click="$emit('update:selectedTab', index)"
        >
          {{ item }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  selectedTab: {
    type: Number,
    required: true,
  },
});
</script>
