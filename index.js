function takeANumber(currentLine, name) {
  currentLine.push(name);
  return `"Welcome, ${name}. You are number ${currentLine.length} in line."`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  let firstPerson = katzDeliLine.shift();
  return firstPerson;
  }
}

function currentLine(katzDeliLine)
