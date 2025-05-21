console.log('Hello, World!');

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * (max + 1));
};
console.log(getRandomNumber(10));
console.log(getRandomNumber(100));

const getCurrentTime = () => {
  const currentDate = new Date();
  return currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
};

console.log(`The current time is ${getCurrentTime()}.`);

// global varialbe is called document, it is an object with method
const fancyParagraphElement = document.getElementById("fancy-paragraph");
console.log(fancyParagraphElement);
console.log(fancyParagraphElement.nodeName);

// same as , gives the first matches = 
// const fancyParagraphElement = docunt.querySelector("fancy-paragraph");

// this will chanage it text to 'I love pizza!
fancyParagraphElement.textContent = 'I love pizza!'

console.log(
  fancyParagraphElement.hasAttribute('id') // true
);

// add class
fancyParagraphElement.classList.add('highlight');

// create new elements
const traitsList = document.querySelector('#traits');

const newAppearanceFact = document.createElement('li');

newAppearanceFact.textContent = 'covered in sand (when on a sandy beach)';

traitsList.appendChild(newAppearanceFact);

const anotherFact = document.createElement('li');
anotherFact.textContent = 'Often have hard shells';
traitsList.appendChild(anotherFact);

// const appearanceList = document.getElementById('facts__list');

// appearanceList.appendChild(newAppearanceFact);

