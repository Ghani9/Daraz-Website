

function daysForMonth(daysNumber){
  const days =[];
  for(let i=1; i<=daysNumber; i++){
    days.push(i)
  }
  return days;
}

function returnYears(){
  const years =[]
  for(let i=0; i<=200; i++){
    years.push(1900+i)
  }
  return years
}

export const years = returnYears();

export const dateOfBirth = [
  {
    id : 1,
    month: 'January',
    days : daysForMonth(31)
  },
  {
    id : 2,
    month: 'February',
    days : daysForMonth(28)
  },
  {
    id : 3,
    month: 'March',
    days : daysForMonth(31)
  },
  {
    id : 4,
    month: 'April',
    days : daysForMonth(30)
  },
  {
    id : 5,
    month: 'May',
    days : daysForMonth(31)
  },
  {
    id : 6,
    month: 'June',
    days : daysForMonth(30)
  },
  {
    id : 7,
    month: 'July',
    days : daysForMonth(31)
  },
  {
    id : 8,
    month: 'August',
    days : daysForMonth(31)
  },
  {
    id : 9,
    month: 'September',
    days : daysForMonth(30)
  },
  {
    id : 10,
    month: 'October',
    days : daysForMonth(31)
  },
  {
    id : 11,
    month: 'November',
    days : daysForMonth(30)
  },
  {
    id : 12,
    month: 'December',
    days : daysForMonth(31)
  }
]