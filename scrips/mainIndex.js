fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((user) => {

        for (const element of user) {
            let divBlock = document.createElement("div");
            divBlock.innerText = element.id+'-'+ element.name;
            let buttonElement = document.createElement('button');
            buttonElement.innerText = 'click';
            divBlock.appendChild(buttonElement)
            let main = document.getElementsByTagName('main');
            main[0].appendChild(divBlock)
            buttonElement.onclick=()=>{
                let url ='user-details.html';
                location.href = url;
                localStorage.setItem('user',JSON.stringify(element))
            }
        }
    });

