function fillItemData(item, data, user) {
    let placeholders = item.querySelectorAll('[data-target]');
    [].forEach.call(placeholders || [], (phElement) => {
        let key = phElement.getAttribute('data-target');

        if (key === 'createdAt') {
            phElement.textContent = String(data[key].toLocaleString('en-GB'));
        } else if ((key === 'hashtags')) {
            if(data.hashtags) {
                phElement.textContent = data.hashtags.map(temp => '#' + temp).join(' ');
            }
        } else
        {
            phElement.textContent = String(data[key])
        }

        if (key === 'author' && String(data[key]) === user) {
            item.firstElementChild.style.background = "rgba(153, 153, 153, 0.25)";
            item.firstElementChild.querySelector(".buttonLike").style.visibility="visible";
            item.firstElementChild.querySelector(".buttonEdit").style.visibility="visible";
            item.firstElementChild.querySelector(".buttonEdit").setAttribute('data-post-id', data.id);
            item.firstElementChild.querySelector(".buttonDelete").style.visibility="visible";
            item.firstElementChild.querySelector(".buttonDelete").setAttribute('data-post-id', data.id);
        } else if (key === 'author' && String(data[key]) !== user) {
            item.firstElementChild.style.background = "rgba(153, 153, 153, 0.25)";
            item.firstElementChild.querySelector(".buttonLike").style.visibility="visible";
            item.firstElementChild.querySelector(".buttonEdit").style.visibility="hidden";
            item.firstElementChild.querySelector(".buttonDelete").style.visibility="hidden";
        }
        if(user === null){
            item.firstElementChild.querySelector(".buttonLike").style.visibility="hidden";
            item.firstElementChild.querySelector(".buttonEdit").style.visibility="hidden";
            item.firstElementChild.querySelector(".buttonDelete").style.visibility="hidden";
        }
    });

    item.firstElementChild.setAttribute('id', data.id);
}

class View {
    user = null;
    template = document.getElementById('tweet-template');
    container = document.getElementById('container');

    addItem(data, departure) {
        let newTweet = document.importNode(this.template.content, true);
        fillItemData(newTweet, data, this.user);
        if(departure === 'begin')
            this.container.prepend(newTweet);
        if(departure === 'end')
            this.container.appendChild(newTweet);
    }

    edit(id = '', data = {}) {
        let newTweet = document.importNode(this.template.content, true);
        fillItemData(newTweet, data, this.user);
        document.getElementById(id).replaceWith(newTweet);
    }

    addAll(posts = []) {
        posts.forEach((post) => this.addItem(post))
    }

    delete(id = '') {
        document.getElementById(id).remove();
    }
}