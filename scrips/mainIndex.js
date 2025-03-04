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
                let baseUrl='http://localhost:63342/JSkontrolWork/user-details.html?_ijt=th0s6vnpdf09b159lsb3osa4ep&_ij_reload=RELOAD_ON_SAVE'
                let url =new URL(baseUrl);
                location.href = url;
                localStorage.setItem('user',JSON.stringify(element))
            }
        }
    });

