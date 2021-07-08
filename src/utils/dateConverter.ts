export function convertDateAndTime(date: number){
  const dayHour = (new Date(date)).toLocaleString();

  return dayHour.slice(0, dayHour.lastIndexOf(":"));
}

export function convertDate(date: number){
  return (new Date(date)).toLocaleDateString();
}

export function getYearsOld(birthday: number){
  return ((Date.now() - birthday) / 1000 / 60 / 60 / 24 / 365).toFixed(0);
}