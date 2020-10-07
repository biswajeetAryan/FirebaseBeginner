const cafeList = document.querySelector('#cafe-list');

function renderCafe(item){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');

    li.setAttribute('data-id', item.id);
    name.textContent = item.data().name;
    city.textContent = item.data().city;

    li.appendChild(name);
    li.appendChild(city);

    cafeList.appendChild(li);
}

db.collection('cafes').get().then((snapshot) => {
    snapshot.docs.forEach(element => {
        renderCafe(element);
        console.log(element.data());
    });
    
})