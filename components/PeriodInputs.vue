<template>
  <div class="flex">
    <div class="flex-1 transition-transform">
      <div>
        <label
          >Entrada
          <span v-if="entranceRequired" class="text-red-600">*</span></label
        >
        <input
          type="time"
          :value="entrance"
          @change="$emit('update:entrance', $event.target.value)"
          :required="entranceRequired"
        />
      </div>
      <div class="mt-2">
        <label
          >Saída <span v-if="exitRequired" class="text-red-600">*</span></label
        >
        <input
          type="time"
          :value="exit"
          @change="$emit('update:exit', $event.target.value)"
          :required="exitRequired"
        />
      </div>
    </div>
    <transition name="remove-button">
      <div
        v-if="removePeriod"
        class="flex items-center mt-6 opacity-50 hover:opacity-100 cursor-pointer"
        @click="removePeriod"
      >
        <div class="flex items-center h-full">
          <div class="h-full w-1 bg-red-900 rounded mx-2"></div>
          <i class="ri-delete-bin-2-line leading-none text-red-900"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  entrance: {
    type: String,
    required: true,
  },
  exit: {
    type: String,
    required: true,
  },
  entranceRequired: {
    type: Boolean,
    default: true,
  },
  exitRequired: {
    type: Boolean,
    default: true,
  },
  removePeriod: {
    type: Function,
  },
});
</script>

<style scoped>
.remove-button-enter-active,
.remove-button-leave-active {
  transition: all 0.2s ease;
}
.remove-button-enter-from,
.remove-button-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
