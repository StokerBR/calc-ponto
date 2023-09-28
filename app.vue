<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="md:p-10 p-5 w-screen max-w-screen-2xl">
      <h1
        class="font-black text-slate-100 italic md:text-7xl text-5xl max-md:text-center"
      >
        CALC PONTO
      </h1>

      <div
        class="flex gap-2 mt-5 md:w-1/2 w-full border border-b-0 border-blue-800 rounded-t-xl overflow-auto"
      >
        <CalculatorTabs :tabs="tabs" v-model:selectedTab="selectedTab" />
      </div>
      <div class="flex max-md:flex-col mx-auto relative">
        <div class="md:w-1/2 border border-blue-800 md:rounded-bl-xl p-6">
          <MainCalculator v-if="selectedTab == 0" />
          <EntranceExitCalculator v-if="selectedTab == 1" />
        </div>
        <div
          class="md:w-1/2 border md:border-l-0 border-blue-800 md:rounded-r-xl max-md:rounded-b-xl max-md:border-t-0 p-6"
        >
          <CalculatedTime />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'remixicon/fonts/remixicon.css';

const tabs = ['Pontos', 'Entrada/Saída'];
const selectedTab = ref(0);
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/mona-sans');

html {
  font-family: 'Mona-Sans', sans-serif;
}
</style>
