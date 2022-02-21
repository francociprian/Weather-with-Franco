/*

const items = document.getElementById('ítems');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

// Como anidar el json al proyecto
document.addEventListener('DOMContentLoaded', () => {
  fetchData();
});

const fetchData = async () => {
  try {
      const res = await fetch('api.json');
      const data = await res.json();
      pintarCards(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector('h4').textContent = producto.title

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
}
*/