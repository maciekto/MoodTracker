const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const months = (config: any) => {
  const cfg = config || {};
  const count = cfg.count || 12;
  const section = cfg.section;
  const start = cfg.start || 0;
  const values: string[] = [];
  // eslint-disable-next-line no-shadow
  const months = cfg.months || null
  let i, value;
  if(months) {
    months.forEach((month: number) => {
      value = MONTHS[Math.ceil(month) % 12];
      values.push((value ?? '').substring(0, section));
    })
    return values;
  }
  for (i = start; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 12];
    values.push((value ?? '').substring(0, section));
  }
  
  return values;
};

export const years = (from: number, to: number) => {
  const result = [];
  for(let i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
}