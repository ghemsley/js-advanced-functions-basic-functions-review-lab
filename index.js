// Your code here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

const wrapAdjective = (flair = '*') => {
  return (string = 'special') => {
    return `You are ${flair}${string}${flair}!`
  }
}

const Calculator = {
  add: () => 1 + 3,
  subtract: () => 1 - 3,
  multiply: () => 1 * 3,
  divide: () => 10 / 5
}

const actionApplyer = (start, array) => {
  if (array.length < 1) {
    return start
  } else {
    let firstRun = false
    let result
    array.forEach((element) => {
      if (firstRun === false) {
        result = element(start)
        firstRun = true
      } else {
        result = element(result)
      }
    })
    return result
  }
}
