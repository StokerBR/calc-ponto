<template>
  <div class="inline-flex items-center" :title="title">
    <label
      class="relative flex cursor-pointer items-center rounded mr-2 border border-blue-800"
      :for="id"
    >
      <input
        :id="id"
        type="checkbox"
        value=""
        :checked="checked"
        @input="$emit('update:checked', $event.target.checked)"
        class="peer h-5 w-5 py-0 px-0 cursor-pointer appearance-none rounded transition-all checked:border-blue-700 checked:bg-blue-700 checked:before:bg-blue-700"
      />
      <div
        class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </label>
    <label class="cursor-pointer select-none font-light text-sm" :for="id">
      {{ label }}
    </label>
  </div>
</template>

<script setup>
import randomId from '~/utils/randomId';

const props = defineProps({
  id: {
    type: String,
    default: `checkbox-${randomId()}`,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
});
</script>
