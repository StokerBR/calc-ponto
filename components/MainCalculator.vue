<template>
  <div>
    <div class="flex mb-2">
      <div class="flex-1">
        <h2 class="text-xl font-bold">Calcular usando Pontos</h2>
        <p class="text-sm">
          Insira os horários do seus pontos para calcular o tempo.
        </p>
        <!-- <small class="text-xs leading-none"
          >Caso o último ponto de saída não seja inserido, ele será calculado
          automaticamente com o menor tempo possível de forma a manter seu saldo
          positivo</small
        > -->
      </div>
      <div class="flex items-start gap-2">
        <button
          class="btn btn-icon btn-outline"
          title="Limpar campos"
          @click="clearPeriods"
        >
          <i class="ri-eraser-line leading-none"></i>
        </button>
        <button
          class="btn btn-icon btn-outline"
          title="Adicionar Período"
          :disabled="periods.length >= maxPeriods"
          @click="addPeriod"
        >
          <i class="ri-add-circle-line leading-none"></i>
        </button>
      </div>
    </div>
    <form class="flex flex-col gap-4" @submit="onSubmit">
      <TransitionGroup name="period">
        <PeriodInputs
          v-for="(period, index) in periods"
          :key="period.id"
          v-model:entrance="period.entrance"
          v-model:exit="period.exit"
          :exitRequired="index !== periods.length - 1"
          :removePeriod="
            periods.length > minPeriods ? () => removePeriod(period.id) : null
          "
        />
      </TransitionGroup>
      <button class="btn btn-primary mt-2">Calcular</button>
    </form>
  </div>
</template>

<script setup>
import { workload } from '~/constants';
import calculateConsideredTime from '~/utils/calculateConsideredTime';

const minPeriods = 2;
const maxPeriods = 4;

const periods = ref([]);

const consideredTime = useState('consideredTime');
const totalTime = useState('totalTime');
const balance = useState('balance');
const balancePositive = useState('balancePositive');

// Adiciona os períodos iniciais
for (let i = 0; i < minPeriods; i++) {
  addPeriod(i);
}

// Adiciona um período
function addPeriod(id = null) {
  if (periods.value.length < maxPeriods) {
    periods.value.push({
      id: id ?? Date.now(),
      entrance: '',
      exit: '',
      interval: null,
    });
  }
}

// Remove um período
function removePeriod(id) {
  periods.value = periods.value.filter((period) => period.id != id);
}

// Limpa a entrada e saida dos períodos
function clearPeriods() {
  periods.value.forEach((period) => {
    period.entrance = '';
    period.exit = '';
  });
}

function onSubmit(e) {
  e.preventDefault();

  let worktime = 0;

  periods.value.forEach((period, index) => {
    if (period.entrance && period.exit) {
      // Obtem o tempo de trabalho do período
      worktime += calculateMins(period.exit) - calculateMins(period.entrance);
    }

    // Se for o último período e não tiver saída, calcula o horário de saída
    if (index == periods.value.length - 1 && period.entrance && !period.exit) {
      let remainingTime = workload - 10 - worktime;
      remainingTime = remainingTime < 0 ? 0 : remainingTime;

      worktime += remainingTime;
      let exit = calculateMins(period.entrance) + remainingTime;

      period.exit = getTimeString(exit, true);
    }
  });

  const considered = calculateConsideredTime(worktime, workload);

  const calculatedBalance = considered - workload;

  totalTime.value = getTimeString(worktime);
  consideredTime.value = getTimeString(considered);
  balance.value = getTimeString(calculatedBalance);
  balancePositive.value = calculatedBalance >= 0;
}
</script>

<style scoped>
.period-enter-active,
.period-leave-active {
  transition: all 0.2s ease;
}
.period-enter-from,
.period-leave-to {
  opacity: 0;
}
</style>
