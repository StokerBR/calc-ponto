<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="md:p-10 p-5 w-screen max-w-screen-2xl">
      <h1
        class="font-black text-slate-100 italic md:text-7xl text-5xl max-md:text-center"
      >
        CALC PONTO
      </h1>
      <div
        class="flex gap-2 mt-5 md:w-1/2 w-full bg-blue-900 border-2 border-b-0 border-blue-800 rounded-t-xl overflow-auto"
        id="tabs"
      >
        <CalculatorTabs :tabs="tabs" v-model:selectedTab="selectedTab" />
      </div>
      <div class="flex max-md:flex-col mx-auto relative">
        <div
          class="md:w-1/2 bg-blue-900 border-2 border-blue-800 md:rounded-bl-xl p-6"
        >
          <keep-alive>
            <MainCalculator v-if="selectedTab == 0" />
          </keep-alive>
          <keep-alive>
            <EntranceExitCalculator v-if="selectedTab == 1" />
          </keep-alive>
        </div>
        <div
          class="md:w-1/2 bg-blue-900 border-2 md:border-l-0 border-blue-800 md:rounded-r-xl max-md:rounded-b-xl max-md:border-t-0 p-6"
        >
          <CalculatedTime />
        </div>
      </div>
      <p class="text-xs text-center text-slate-400 mt-3">
        Feito com <span class="text-red-700 text-sm">♥</span> por Henrique
      </p>
    </div>
  </div>
</template>

<script setup>
import 'remixicon/fonts/remixicon.css';

const tabs = ['Pontos', 'Entrada/Saída'];
const selectedTab = ref(0);

onMounted(() => {
  // Realiza o scroll horizontal nas tabs com a roda do mouse
  window.document.getElementById('tabs').addEventListener('wheel', (e) => {
    e.preventDefault();
    e.currentTarget.scrollLeft += e.deltaY / 2;
  });

  // Realiza a troca de tabs com o atalho Shift + [Número da tab]
  window.addEventListener('keypress', (e) => {
    if (e.shiftKey && e.code.startsWith('Digit')) {
      const pressedNumber = Number(e.code.replace('Digit', ''));
      if (pressedNumber && pressedNumber >= 1 && pressedNumber <= tabs.length) {
        selectedTab.value = pressedNumber - 1;
      }
    }
  });
});
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/mona-sans');

html {
  font-family: 'Mona-Sans', sans-serif;
}
</style>
