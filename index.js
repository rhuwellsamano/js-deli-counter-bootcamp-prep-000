function takeANumber(katzDeliLine) {
  katzDeliLine.push()

  return "Welcome"
}

let line = []
takeANumber(line) // line is [1]
takeANumber(line) // lins is [1,2]

nowServing(line)
nowServing(line)

takeANumber(line) // [3]
////

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return `There is nobody waiting to be served!`
  }
  return `Currently serving ${katzDeliLine.shift()}.`

}

////

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return `The line is currently empty.`
  }
  else {
    return `The line is currently: 1. ` + katzDeliLine[0] +`, 2. ` + katzDeliLine[1] +`, 3. ` + katzDeliLine[2];
  }
}
