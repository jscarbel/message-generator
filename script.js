// Arrays of data
const subjects = [
  "Your future",
  "Your journey",
  "Your creativity",
  "Your resilience",
  "Your energy"
];

const actions = [
  "will lead you to greatness",
  "is shaping a brighter tomorrow",
  "can overcome any obstacle",
  "is inspiring others",
  "is making the world better"
];

const advice = [
  "Keep going.",
  "Believe in yourself.",
  "Never stop learning.",
  "Stay true to your values.",
  "Embrace the unknown."
];

// Function to get a random element
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate message
function generateMessage() {
  const part1 = getRandomElement(subjects);
  const part2 = getRandomElement(actions);
  const part3 = getRandomElement(advice);
  
  return `${part1} ${part2}. ${part3}`;
}

// Output message
console.log(generateMessage());
