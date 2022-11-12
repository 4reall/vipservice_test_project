export const dateSubtraction = (date1: string, date2: string) => {
  const [hours1, minutes1] = date1.split(":").map((item) => +item);
  const [hours2, minutes2] = date2.split(":").map((item) => +item);

  return [Math.abs(hours1 - hours2), Math.abs(minutes1 - minutes2)];
};
