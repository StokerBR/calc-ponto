export default (worktime: number, workload: number): number => {
  // Verificar se o tempo total esta dentro do período de carência
  if (worktime >= workload - 10 && worktime <= workload + 10) {
    // Tempo considerado será o mesmo que a carga horaria se for 10min a menos ou a mais que ela
    return workload;
  } else {
    return worktime;
  }
};
