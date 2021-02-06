const urlParams = new URLSearchParams(window.location.search);
const page = urlParams.get('page') ?? 1;


const getUsers = (page) => {
    fetch(`https://reqres.in/api/users?page=${page}`)
        .then((res) => res.json())
        .then((result) => {
            total_pages = result.total_pages;
            const loadContainer = document.querySelector('.load-container');
            loadContainer.remove();
            const list = document.createElement('ul');
            result.data.forEach(user => {
                const item = document.createElement('li');
                item.append(user.first_name + user.last_name);
                list.append(item);
            });
            const user_container = document.querySelector('.users');
            user_container.append(list);
            const link = document.createElement('a');
            if (page == 1) {
                // only next page
                link.setAttribute('href', `/userlist.html?page=${parseInt(page)+1}`);
                link.innerHTML = 'NEXT PAGE';
                user_container.append(link);
            } else if (page == total_pages) {
                // previous page
                link.setAttribute('href', `/userlist.html?page=${parseInt(page)-1}`);
                link.innerHTML = 'PREVIOUS PAGE';
                user_container.append(link);
            } else if (page > 1 && page < total_pages) {
                // both previous and next buttons
                // didn't complete it cause total_pages is 2 by default :)
            }
        })
        .catch((err) => console.log(err));

}

getUsers(page);