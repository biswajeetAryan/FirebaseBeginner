const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

function renderCafe(item){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', item.id);
    
    name.textContent = item.data().name;
    city.textContent = item.data().city;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross)

    cafeList.appendChild(li);

    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('cafes').doc(id).delete();
    })
}

// db.collection('cafes').where('city', '==', 'Kolkata').get().then((snapshot) => {
//     snapshot.docs.forEach(element => {
//         renderCafe(element);
//         console.log(element.data());
//     });
// })

db.collection('cafes').where('city', '==', 'Bangalore').orderBy('name').get().then((snapshot) => {
    snapshot.docs.forEach(element => {
        renderCafe(element);
        console.log(element.data());
    });
})

// db.collection('cafes').get().then((snapshot) => {
//     snapshot.docs.forEach(element => {
//         renderCafe(element);
//         console.log(element.data());
//     });
// })

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('cafes').add({
        name: form.name.value,
        city: form.city.value
    });
    form.name.value = '';
    form.city.value = '';
})