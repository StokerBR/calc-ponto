/**
 * Obtém o tempo em minutos a partir de uma string no formato HH:mm
 */
export default (time: string): number => {
  if (time) {
    let parts = time.split(':');
    let hours = parseInt(parts[0]);
    let minutes = parseInt(parts[1]);

    if (hours >= 0 && minutes >= 0) {
      return hours * 60 + minutes;
    }
  }

  return -1;
};
