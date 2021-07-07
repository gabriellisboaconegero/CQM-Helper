export function convertDate(date: number){
  const dayHour = (new Date(date)).toLocaleString();

  return dayHour.slice(0, dayHour.lastIndexOf(":"));
}