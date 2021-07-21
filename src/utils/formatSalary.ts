const formatSalary = (salary: { value: number; currency: string }): string => {
  return beautifySalary(salary.value);
};

const formatSalaryViseVerse = (formattedSalary: string): number => {
  return parseInt(formattedSalary);
};

// helpers
const beautifySalary = (salaryValue: number): string => {
  const salaryValueString = salaryValue.toString();

  let beutifiedSalary = "";

  for (let i = 0; i < salaryValueString.length; i++) {
    if ((i + 1) % 3 === 0) {
      console.log(i);

      beutifiedSalary += ` ${salaryValueString[i]}`;
    } else beutifiedSalary += salaryValueString[i];
  }

  return beutifiedSalary;
};
export { formatSalary, formatSalaryViseVerse };
