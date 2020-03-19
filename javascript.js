const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'Now listen here Bob, did you know that :insertx: :inserty: :insertz:?';
let insertX = ['dogs','rocks','toilets', 'frogs', 'Italians', 'famous movie directors', 'zombies', 'both Obama and Trump'];
let insertY = ['can jump directly into','are terrified of','dont get along well with', 'sing constantly at', 'explode when mixed with'];
let insertZ = ['spiders','monsters','life-sized chicken nuggets', 'really big rocks', 'socks', 'squirrels', 'camouflaged leprechauns'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("fr").checked) {
    const baguette =  'baguettes';
    const bidet = 'bidets';
    const frenchies = 'both Napolean and Macron'
    const british = 'Brits'
    newStory = newStory.replace('dogs',baguette);
    newStory = newStory.replace('toilets',bidet);
    newStory = newStory.replace('both Obama and Trump',frenchies);
    newStory = newStory.replace('Italians',british);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

// close tab 
document.getElementById("close-window").addEventListener("click", function(){ 
  window.close();
});
// end of close tab