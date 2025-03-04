let post=JSON.parse(localStorage.getItem('post'))
let mainElement = document.getElementsByTagName("main");
let sectionElement = document.getElementsByTagName('section');
// console.log(sectionElement[0])
for (const postKey in post) {
    let h2Element = document.createElement('h2');
    h2Element.innerText=postKey+':'+post[postKey]
    mainElement[0].appendChild(h2Element)
}
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then((response) => response.json())
    .then((coments) => {
        for (const coment of coments) {
            for (const comentKey in coment) {
                let h3Element = document.createElement('h3');
                h3Element.innerText=comentKey+'-'+coment[comentKey]
                sectionElement[0].appendChild(h3Element)
            }
        }
    });