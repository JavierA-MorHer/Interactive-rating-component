
ratingsElement = document.querySelectorAll(" button[id]");
submitElement = document.querySelector(".btn");
raitingContainer = document.querySelector(".rating-container");
resultsContainer = document.querySelector(".results-container");
ratingSelectedElement = document.querySelector('#rating-selected')


let choosen = null;

ratingsElement.forEach(element => {
  element.addEventListener('click', toggleActive)
});

function toggleActive(e) {
  if (choosen == null) {
      choosen = e.target
      addActive(e.target, true)
  }
  else if (choosen != e.target) {
      addActive(choosen, false)
      choosen = e.target
      addActive(e.target, true)
  }
  else if (choosen == e.target) {
      choosen = null
      addActive(e.target, false)

  }
  else {
      choosen = e.target
      addActive(e.target, true)
  }
}

function addActive(element, bool) {
  if (bool) {
      element.classList.add('selected')
  }
  else {
      element.classList.remove('selected')
  }
}

submitElement.addEventListener('click', handleSubmit)

function handleSubmit(e) {
    if (choosen == null) {
        alert('Select a rating please')
    }
    else {
        raitingContainer.style.display = 'none';
        resultsContainer.style.display = 'flex';
        ratingSelectedElement.innerText = choosen.innerText;
    }
  }





