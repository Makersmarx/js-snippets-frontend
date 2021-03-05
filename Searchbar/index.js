// * variables for HTML ID's Classes Tags
const searchField = document.querySelector('#searchInput');

// * event listeners

searchField.addEventListener('keyup', (event) => {
  const searchQuery = event.target.value.toLowerCase();
  const allNames = document.querySelectorAll('.name');

  for (let i = 0; i < allNames.length; i++) {
    const currentName = allNames[i].innerText.toLowerCase();
    if (searchQuery.includes(currentName)) {
      allNames[i].style.display = 'block';
    } else {
      allNames[i].style.display = 'none';
    }
  }
});
