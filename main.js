// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users☺
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.☻
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід
// на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули☻
    .then((user) => {
        for (const element of user) {
            let divBlock = document.createElement("div");
            divBlock.innerText = element.id+'-'+ element.name;
            let buttonElement = document.createElement('button');
            buttonElement.innerText = 'click';
            divBlock.appendChild(buttonElement)
            document.body.appendChild(divBlock)
            buttonElement.onclick=()=>{
                let baseUrl='http://localhost:63342/JSkontrolWork/user-details.html?_ijt=th0s6vnpdf09b159lsb3osa4ep&_ij_reload=RELOAD_ON_SAVE'
                let url =new URL(baseUrl);

                location.href = url;
                localStorage.setItem('user',JSON.stringify(element))


            }

        }
            // console.log(user)
    });
