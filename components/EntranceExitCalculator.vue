<template>
  <div>
    <div class="flex mb-2">
      <div class="flex-1">
        <h2 class="text-xl font-bold">Calcular usando Entrada e/ou Saída</h2>
        <p class="text-sm">
          Insira o tempo de almoço e o horário de entrada e/ou saída.
          <!-- Insira quanto tempo quer fazer de almoço e o horário que quer
          entrar/sair para calcular o outro. -->
        </p>
      </div>
      <div class="flex items-start gap-2">
        <button
          class="btn btn-icon btn-outline"
          title="Limpar campos"
          @click="clear"
        >
          <i class="ri-eraser-line leading-none"></i>
        </button>
      </div>
    </div>
    <form class="flex flex-col gap-4" @submit="onSubmit">
      <div class="flex items-end gap-3">
        <div class="mt-2">
          <label>Tempo de Almoço <span class="text-red-600">*</span></label>
          <input
            type="number"
            :min="minLunchTime"
            :max="maxLunchTime"
            v-model="lunchTimeAmount"
            required
          />
        </div>
        <button
          type="button"
          class="btn btn-outline"
          @click="
            lunchTimeAmount
              ? lunchTimeAmount > minLunchTime
                ? (lunchTimeAmount -= 30)
                : null
              : (lunchTimeAmount = minLunchTime)
          "
        >
          -30
        </button>
        <button
          type="button"
          class="btn btn-outline"
          @click="
            lunchTimeAmount
              ? lunchTimeAmount < maxLunchTime
                ? (lunchTimeAmount += 30)
                : null
              : (lunchTimeAmount = maxLunchTime)
          "
        >
          +30
        </button>
      </div>
      <PeriodInputs
        v-model:entrance="entrance"
        v-model:exit="exit"
        :entranceRequired="false"
        :exitRequired="false"
      />
      <button class="btn btn-primary mt-2">Calcular</button>
    </form>
  </div>
</template>

<script setup>
import { workload } from '~/constants';

const minLunchTime = 30;
const maxLunchTime = 180;

const consideredTime = useState('consideredTime');
const totalTime = useState('totalTime');
const balance = useState('balance');
const balancePositive = useState('balancePositive');

const lunchTimeAmount = ref(60);
const entrance = ref('');
const exit = ref('');

// Limpa os campos
function clear() {
  lunchTimeAmount.value = 60;
  entrance.value = '';
  exit.value = '';
}

// Calcula o tempo considerado e a entrada/saída
function onSubmit(event) {
  event.preventDefault();

  // Se tiver o tempo de almoço e a entrada ou saída
  if (lunchTimeAmount.value && (entrance.value || exit.value)) {
    const lunchTime = parseInt(lunchTimeAmount.value);

    let entranceTime = entrance.value ? calculateMins(entrance.value) : null;
    let exitTime = exit.value ? calculateMins(exit.value) : null;

    let worktime;
    let considered;

    if (entrance.value && !exit.value) {
      // Calcula a saída
      exitTime = entranceTime + lunchTime + workload - 20;
      exit.value = getTimeString(exitTime, true);
    } else if (!entrance.value && exit.value) {
      // Calcula a entrada
      entranceTime = exitTime - workload - lunchTime + 10;
      entrance.value = getTimeString(entranceTime, true);
    }

    worktime = exitTime - entranceTime - lunchTime;
    considered = calculateConsideredTime(worktime, workload);

    const calculatedBalance = considered - workload;

    totalTime.value = getTimeString(worktime);
    consideredTime.value = getTimeString(considered);
    balance.value = getTimeString(calculatedBalance);
    balancePositive.value = calculatedBalance >= 0;
  }
}
</script>
