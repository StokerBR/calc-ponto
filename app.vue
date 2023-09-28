<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="md:p-10 p-5 w-screen max-w-screen-2xl">
      <h1
        class="font-black text-slate-100 italic md:text-7xl text-5xl max-md:text-center"
      >
        CALC PONTO
      </h1>

      <div
        class="flex gap-2 mt-5 md:w-1/2 w-full border border-b-0 border-blue-800 rounded-t-xl"
      >
        <div class="border-b border-blue-700 text-slate-400">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li>
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
            </li>
          </ul>
        </div>
      </div>
      <div class="flex max-md:flex-col mx-auto relative">
        <div class="md:w-1/2 border border-blue-800 md:rounded-bl-xl p-6">
          <MainCalculator />
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
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/mona-sans');

html {
  font-family: 'Mona-Sans', sans-serif;
}
</style>
