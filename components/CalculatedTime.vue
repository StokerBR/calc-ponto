<template>
  <div class="flex flex-col items-center justify-center gap-8 h-full relative">
    <button
      class="btn btn-icon btn-outline absolute top-0 right-0"
      title="Limpar"
      @click="clear"
    >
      <i class="ri-eraser-line leading-none"></i>
    </button>
    <div class="flex flex-col items-center">
      <span class="text-md font-semibold">Tempo Total</span>
      <span class="text-3xl font-bold">{{ totalTime ?? '-' }}</span>
    </div>

    <div class="flex flex-col items-center">
      <span class="text-md font-semibold">Tempo Considerado</span>
      <span class="text-3xl font-bold">{{ consideredTime ?? '-' }}</span>
    </div>

    <div class="flex flex-col items-center">
      <span class="text-md font-semibold">Saldo</span>
      <span
        :class="[
          'text-2xl font-bold',
          { 'text-green-600': balancePositive == true },
          { 'text-red-600': balancePositive == false },
        ]"
        >{{ balance ?? '-' }}</span
      >
    </div>
  </div>
</template>

<script setup>
const consideredTime = useState('consideredTime', () => null);
const totalTime = useState('totalTime', () => null);
const balance = useState('balance', () => null);
const balancePositive = useState('balancePositive', () => null);

function clear() {
  consideredTime.value = null;
  totalTime.value = null;
  balance.value = null;
  balancePositive.value = null;
}
</script>
