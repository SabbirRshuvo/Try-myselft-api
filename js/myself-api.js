const tryMyselfData = () =>{
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(res => res.json())
    .then(data =>getData(data));
}

const getData = data =>{
    console.log(data);
    data.forEach(id=>{
        console.log(id);
        const container = document.getElementById('get-data');
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src="${id.url}" class="card-img-top" alt="...">
        <a href="${id.url}">LINK</a>
        `;
        container.appendChild(div);
    })

}