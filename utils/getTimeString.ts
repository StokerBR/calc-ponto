/**
 * Retorna uma string com o tempo em horas e minutos
 */
export default (mins: number, defaultPattern = false): string => {
  // Obter valor absoluto
  mins = Math.abs(mins);

  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;

  if (defaultPattern) {
    // Valor no padrão HH:MM
    return (
      String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0')
    );
  } else {
    // Valor por extenso

    let time = '0min';

    // Se tiver horas
    if (hours > 0) {
      time = hours + 'h';
    }

    // Se tiver minutos
    if (minutes > 0) {
      if (hours > 0) {
        // Se tiver horas e minutos
        time += ' e ' + minutes + 'min';
      } else {
        // Se tiver apenas minutos
        time = minutes + 'min';
      }
    }

    return time;
  }
};
