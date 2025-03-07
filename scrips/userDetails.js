let user = JSON.parse(localStorage.getItem('user'));
let buttonPost = document.getElementById('post');
let mainElement=document.getElementsByTagName('main')
buttonPost.onclick = () => {
    let url = new URL('https://jsonplaceholder.typicode.com/posts')
    url.searchParams.set('userId', user.id)
    fetch(url)
        .then((response) => response.json())
        .then((posts) => {
            for (const post of posts) {
                let pElement = document.createElement('p');
                let button = document.createElement('button');
                button.innerText='post-details'
                pElement.innerText = post.title;
                mainElement[0].appendChild(pElement)
                pElement.appendChild(button);
                button.onclick=()=>{
                    let url ='post-details.html';

                    location.href = url;
                    localStorage.setItem('post',JSON.stringify(post))
                }
            }
        });
    buttonPost.remove()
}
buttonPost.addEventListener('click', () => {
    let elementsDiv = document.body.getElementsByTagName('div');
    for (let i = elementsDiv.length - 1; i > -1; i--) {
        const elementsDivElement = elementsDiv[i];
        elementsDivElement.remove()
    }
})

for (let fieldName in user) {
    if (typeof user[fieldName] !== 'object') {
        let htmlDivElement = document.createElement('div');
        htmlDivElement.innerText = fieldName + '-' + user[fieldName]
        mainElement[0].appendChild(htmlDivElement)
        // console.log(fieldName, user[fieldName]);
    } else if (typeof user[fieldName] === 'object') {
        let htmlDivElement1 = document.createElement("div");
        htmlDivElement1.innerText = fieldName + ':'
        mainElement[0].appendChild(htmlDivElement1)
        for (fildNameNext in user[fieldName]) {
            if (typeof user[fieldName][fildNameNext] !== 'object') {
                let htmlDivElement2 = document.createElement("div");
                htmlDivElement2.setAttribute('class', 'cicle2')
                htmlDivElement2.innerText = fildNameNext + '-' + user[fieldName][fildNameNext]
                htmlDivElement1.appendChild(htmlDivElement2)
            } else if (typeof user[fieldName][fildNameNext] === 'object') {
                // console.log(user[fieldName][fildNameNext])
                for (const key in user[fieldName][fildNameNext]) {
                    let nameField = user[fieldName][fildNameNext]
                    let htmlDivElement3 = document.createElement('div');
                    htmlDivElement3.innerText = key + ':' + nameField[key]
                    mainElement[0].appendChild(htmlDivElement3)
                }
            }
        }
    }
}