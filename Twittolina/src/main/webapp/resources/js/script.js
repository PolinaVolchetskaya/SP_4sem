class Model {
    _newPosts = [];

    constructor(posts) {
        posts = posts || [];
        //this._newPosts = posts.concat();
        this._posts = posts.filter(post => this.validate(post));
    }

    static dateComparator(a, b) {
        return b.createdAt - a.createdAt;
    }

    getPage(skip = 0, top = 10, filterConfig = undefined) {
        let resultPosts = this._newPosts;

        if (filterConfig) {
            if (filterConfig.author) {
                resultPosts = resultPosts.filter(function (post) {
                    if (post.author.includes(filterConfig.author))
                        return post.author;
                });
            }

            if (filterConfig.from) {
                resultPosts = resultPosts.filter(function (post) {
                    return post.createdAt >= filterConfig.from;
                });
            }

            if (filterConfig.to) {
                resultPosts = resultPosts.filter(function (post) {
                    return post.createdAt <= filterConfig.to;
                });
            }

            if (filterConfig.hashtags) {
                resultPosts = resultPosts.filter(function (post) {
                    if (filterConfig.hashtags.every(hashtag => post.hashtags.includes(hashtag)))
                        return post.hashtags;
                });
            }
        }

        resultPosts.sort(Model.dateComparator);
        return resultPosts.slice(skip, skip + top);
    }


    get(id) {
        return this._newPosts.find(post => post.id === id) || null;
    }

    validate(post) {
        if (post) {

            if (!post.description)
                return false;

            if (post.description) {
                if ((typeof post.description !== 'string') || (post.description.length > 200))
                    return false;
            }

            if (post.photoLink) {
                if (typeof post.photoLink !== 'string')
                    return false;
            }

            if (post.hashtags) {
                if (post.hashtags.some(hashtag => typeof hashtag !== 'string'))
                    return false;
            }
        }

        return true;
    }

    add(post) {
        const date = new Date();
        const id = +date;
        const author = 'user' + id;
        const newPost = {
            description: post.description,
            photoLink: post.photoLink,
            //hashtags: post.hashtags.split('#'),
            hashtags: post.hashtags,
            id,
            author,
            createdAt: date
        }
        if (this.validate(post)) {
            this._newPosts.push(post);
            return true;
        }
        return false;
    }

    edit(id, post) {
        let editingPost = this.get(id);

        if (post.description) {
            editingPost.description = post.description;
        }
        if (post.photoLink) {
            editingPost.photoLink = post.photoLink;
        }
        if (post.hashtags) {
            editingPost.hashtags = post.hashtags;
        }
        if (this.validate(editingPost)) {
            this._newPosts.push(editingPost);
            return true;
        }
        return false;
    }

    remove(id) {
        if (this._newPosts.findIndex(post => post.id === id) !== -1) {
            this._newPosts.splice(this._newPosts.findIndex(post => post.id === id), 1);
            return true;
        }
        return false;
    }

    addAll(posts) {
        let invalidPosts = [];

        posts.forEach(post => {
            if (!this.add(post)) invalidPosts.push(post)
        });

        return invalidPosts;
    }

    clear() {
        this._newPosts = [];
    }

}

let tweets = new Model([
    {
        id: '1',
        description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
        createdAt: new Date('2020-03-17T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
        hashtags: ['coronavirus', 'коронавирус'],
        likes: ['Иван Иванов', 'polina_volchetskaya']
    }
]);

function fillItemData(item, data) {
    let placeholders = item.querySelectorAll('[data-target]');
    [].forEach.call(placeholders || [], (phElement) => {
        let key = phElement.getAttribute('data-target');

        if (key == 'createdAt') {
            phElement.textContent = String(data[key].toLocaleString('en-GB'))
        } else if (key == 'hashtags') {
            phElement.textContent = String(data.hashtags.map(temp => '#' + temp).join(' '))
        } else
        {
            phElement.textContent = String(data[key])
        }

        if (key == 'author' && String(data[key]) == this.user) {
            item.firstElementChild.style.background = "rgba(153, 153, 153, 0.25)"
            item.firstElementChild.querySelector('[class="buttonLike"]').style.visibility="visible"
            item.firstElementChild.querySelector('[class="buttonEdit"]').style.visibility="visible"
            item.firstElementChild.querySelector('[class="buttonDelete"]').style.visibility="visible"
        } else if (key == 'author' && String(data[key]) != this.user) {
            item.firstElementChild.style.background = "rgba(153, 153, 153, 0.25)"
            item.firstElementChild.querySelector('[class="buttonLike"]').style.visibility="visible"
            item.firstElementChild.querySelector('[class="buttonEdit"]').style.visibility="hidden"
            item.firstElementChild.querySelector('[class="buttonDelete"]').style.visibility="hidden"
        }
    });

    item.firstElementChild.setAttribute('id', data.id)
}

class View {

    constructor() {
        this._Model = tweets;
    }

    user = 'Polina Volchetskaya';
    template = document.getElementById('tweet-template');
    container = document.getElementById('container');

    addItem(data) {
        let newTweet = document.importNode(this.template.content, true);
        fillItemData(newTweet, data);
        this.container.appendChild(newTweet);
    }

    edit(id = '', data = {}) {
        let newTweet = document.importNode(this.template.content, true);
        fillItemData(newTweet, data);
        document.getElementById(id).replaceWith(newTweet);
    }

    addAll(posts = []) {
        posts.forEach((post) => this.addItem(post))
    }

    delete(id = '') {
        document.getElementById(id).remove();
    }

}

//Testing
let view
let model
window.onload = () => {
    view = new View()
    model = new Model()
}

function addPost(post) {
    if (model.add(post))
        view.addItem(post)
}

function addPosts(posts) {
    if (model.addAll(posts))
        view.addAll(posts)
}

function deletePost(id) {
    view.delete(id)
    model.remove(id)
}

function editPost(id, post) {
    if (model.edit(id, post)) {
        view.edit(id, model.get(id))
    }
}

// console tests
/*
addPost({id: '9',
          description: 'Happy New Year! :)',
          createdAt: new Date('2020-01-01T00:01:10'),
          author: 'polina_volchetskaya',
          hashtags: ['newyear', 'christmas', 'friends']})

addPost({id: '10',
          description: 'Hello! :)',
          createdAt: new Date('2020-01-01T00:01:10'),
          author: 'polina_volchetskaya',
          hashtags: ['newyear', 'christmas', 'friends']})

addPost({id: '11',
          description: 'Happy New Year! :)',
          createdAt: new Date('2020-01-01T00:01:10'),
          author: 'p',
          hashtags: ['newyear', 'christmas', 'friends']})

addPost({id: '12',
          description: ':)',
          createdAt: new Date,
          author: 'a',
          hashtags: ['newyear', 'christmas', 'friends']})
*/

//addPost({id: '9',
//          description: 'Happy New Year! :)',
//          createdAt: new Date('2020-01-01T00:01:10'),
//          author: 'polina_volchetskaya',
//          photoLink: 'https://avatars.mds.yandex.net/get-pdb/1748857/1578302b-716c-4120-ba1a-cef6566cd324/s600',
//          hashtags: ['newyear', 'christmas', 'friends'],
//          likes: ['sstrazdina', 'alex.kurch']})

//editPost('9',{
//          description: ':)',
//          createdAt: new Date('2020-01-01T00:01:10'),
//          author: 'polina_volchetskaya',
//          photoLink: 'https://avatars.mds.yandex.net/get-pdb/1748857/1578302b-716c-4120-ba1a-cef6566cd324/s600',
//          hashtags: ['newyear', 'christmas', 'friends'],
//          likes: ['sstrazdina', 'alex.kurch']})

//
//     {
//         id: '3',
//         description: 'HB-day, Faculty of Applied Mathematics and Computer Science! The best faculty!',
//         createdAt: new Date('2020-02-13T12:20:00'),
//         author: 'sstrazdina',
//         photoLink: 'https://sun9-47.userapi.com/c633516/v633516632/3013c/m_Wty2Kgo0k.jpg?ava=1',
//         hashtags: ['famcs', 'bsu'],
//         likes: ['polina_volchetskaya', 'alex.kurch']
//     },
//
//     {
//         id: '4',
//         description: 'My name is Alex! I like spring!',
//         createdAt: new Date('2020-03-08T22:30:00'),
//         author: 'alex.kurch',
//         photoLink: 'http://static-cdn3.vigbo.tech/u36944/49011/blog/3881024/4674924/60603229/1000-acb5d94d85f91370d06cb6fb32017670.jpg',
//         hashtags: ['joy', 'weather'],
//         likes: ['sstrazdina', 'Иван Иванов', 'polina_volchetskaya']
//     },
//
//     {
//         id: '5',
//         description: 'Hello, girls!',
//         createdAt: new Date('2020-02-06T13:48:32'),
//         author: 'sstrazdina',
//         photoLink: 'https://expertpovolosam.com/sites/default/files/styles/cover/public/images/cover/1271-13537.jpg?itok=vie7y8Ch',
//         hashtags: ['girl', 'yes_ss'],
//         likes: ['polina_volchetskaya']
//     },
//
//     {
//         id: '6',
//         description: '-Вероника, хочешь апельсин?\n' + '-Нет, я хочу умереть',
//         createdAt: new Date('2020-01-21T16:52:02'),
//         author: 'mariakolyachko',
//         photoLink: 'https://ripeme.com/wp-content/uploads/RF-10046-RIPE-ORGANIC-ORGANIC-ORANGES.jpg',
//         hashtags: ['апельсин', 'сессия', 'смерть', 'токсик', 'toxic'],
//         likes: ['polina_volchetskaya', 'sstrazdina']
//     },
//
//     {
//         id: '7',
//         description: 'Для лучших или для тебя?',
//         createdAt: new Date('2020-01-19T19:34:00'),
//         author: 'veronikcha',
//         photoLink: 'https://cloud.addictivetips.com/wp-content/uploads/2018/12/instagram-close-friends-list.jpg',
//         hashtags: ['Маша', 'инстаграм', 'истории', 'токсик'],
//         likes: ['mariakolyachko', 'sstrazdina']
//     },
//
//     {
//         id: '8',
//         description: '-Почему мы жёлтые?\n' + '-Мы жёлтые',
//         createdAt: new Date('2020-01-13T11:26:27'),
//         author: 'ar_kud',
//         photoLink: 'https://www.8asians.com/wp-content/uploads/2011/05/8a-yellow.jpg',
//         hashtags: ['кулачки', 'survivors', 'артём_такой_артём'],
//         likes: ['mariakolyachko', 'veronikcha']
//     },
//
//     {
//         id: '9',
//         description: 'Happy New Year! :)',
//         createdAt: new Date('2020-01-01T00:01:10'),
//         author: 'polina_volchetskaya',
//         photoLink: 'https://avatars.mds.yandex.net/get-pdb/1748857/1578302b-716c-4120-ba1a-cef6566cd324/s600',
//         hashtags: ['newyear', 'christmas', 'friends'],
//         likes: ['sstrazdina', 'alex.kurch']
//     },
//
//     {
//         id: '10',
//         description: 'Сдал все зачёты!',
//         createdAt: new Date('2019-12-29T17:17:17'),
//         author: 'OnlyKir',
//         photoLink: 'https://lh3.googleusercontent.com/proxy/1rJWfgCpHDzthzwHELk03r1118mfMkQDq8zEHmdeqkAGHcsAn5nvyE7Dx6Z7ldqjHzH6HQuhYigarP4NOEUDB__bp7lpN2rM8tEa4BzUyD-iv2A7',
//         hashtags: ['универ', 'сессия', 'Кирилл_молодец'],
//         likes: ['polina_volchetskaya', 'sstrazdina']
//     },
//
//     {
//         id: '11',
//         description: 'Грутсный март',
//         createdAt: new Date('2020-03-18T13:20:00'),
//         author: 'mariakolyachko',
//         photoLink: 'http://static-cdn3.vigbo.tech/u36944/49011/blog/3881024/4674924/60603227/1000-a46472974e23ee41cbf24768b7e73a9a.jpg',
//         hashtags: ['карантин'],
//         likes: ['veronikcha']
//     },
//
//     {
//         id: '12',
//         description: 'В Бобруйске хорошо!',
//         createdAt: new Date('2020-03-22T23:30:16'),
//         author: 'veronikcha',
//         photoLink: 'https://34travel.me/media/posts/5cca8f793355e-babrujsk-941.jpg',
//         hashtags: ['Бобруйск'],
//         likes: ['mariakolyachko', 'ar_kud']
//
//     },
//
//     {
//         id: '13',
//         description: 'Ура! Заработал KOLOBIKE!',
//         createdAt: new Date('2020-03-21T23:59:00'),
//         author: 'ar_kud',
//         photoLink: 'https://sun9-33.userapi.com/c849216/v849216111/1c3861/nHshPc79Wgw.jpg?ava=1',
//         hashtags: ['kolobike', 'sport'],
//         likes: ['polina_volchetskaya', 'OnlyKir']
//     },
//
//     {
//         id: '14',
//         description: 'Сколько новой информации узнал на старостате!',
//         createdAt: new Date('2020-03-23T12:59:55'),
//         author: 'OnlyKir',
//         photoLink: 'https://st1.stranamam.ru/data/cache/2013nov/18/14/10121471_28552-700x500.jpg',
//         hashtags: ['старостат', 'староста', '513аудитория'],
//         likes: ['sstrazdina', 'mariakolyachko']
//     },
//
//     {
//         id: '15',
//         description: 'Отменили др фпми :(',
//         createdAt: new Date('2020-03-14T13:20:20'),
//         author: 'sstrazdina',
//         photoLink: 'https://snob.ru/i/indoc/user_22121/290104385c97b2737b29d48b953009a6.jpg',
//         hashtags: ['грустно', 'обидно'],
//         likes: ['polina_volchetskaya', 'mariakolyachko', 'OnlyKir']
//     },
//
//     {
//         id: '16',
//         description: 'почему по непрофильным предметам задают так много дз?',
//         createdAt: new Date('2020-03-17T23:00:00'),
//         author: 'polina_volchetskaya',
//         photoLink: 'http://static-cdn3.vigbo.tech/u36944/49011/blog/3881024/4288185/55211204/1000-e0e82b69baf08cbccc565f607ee4024c.jpg',
//         hashtags: ['когда', 'делать', 'профильные'],
//         likes: ['sstrazdina']
//     },
//
//     {
//         id: '17',
//         description: 'В марте выпал снег!!!',
//         createdAt: new Date('2020-03-19T21:50:00'),
//         author: 'ar_kud',
//         photoLink: 'http://static-cdn3.vigbo.tech/u36944/49011/blog/3881024/3887286/49710863/1000-37fc952440a74a0a0a8258d166a5f7f8.JPG',
//         hashtags: ['шок'],
//         likes: ['veronikcha', 'mariakolyachko']
//     },
//
//     {
//         id: '18',
//         description: 'Хочу теплую погоду!',
//         createdAt: new Date('2020-03-01T09:20:20'),
//         author: 'polina_volchetskaya',
//         photoLink: 'http://static-cdn3.vigbo.tech/u36944/49011/blog/3881024/4234870/54722368/1000-a7078c8ecc9510969d69b71dd5c58044.jpg',
//         hashtags: ['весна'],
//         likes: ['veronikcha', 'OnlyKir']
//     },
//
//     {
//         id: '19',
//         description: 'С праздником, девушки!',
//         createdAt: new Date('2020-03-08T12:10:00'),
//         author: 'Иван Иванов',
//         photoLink: 'http://static-cdn3.vigbo.tech/u36944/49011/blog/3881024/4674924/60603226/1000-6e3aa098bfb9d4323518839c76d0466a.jpg',
//         hashtags: ['8марта', 'весна', 'праздник'],
//         likes: ['mariakolyachko', 'veronikcha', 'polina_volchetskaya', 'sstrazdina']
//     },
//
//     {
//         id: '20',
//         description: 'С 23 февраля!',
//         createdAt: new Date('2020-02-23T09:10:00'),
//         author: 'polina_volchetskaya',
//         photoLink: 'https://sib.fm/storage/article/February2020/1sF4neyAJajVyWLCxDzI.jpg',
//         hashtags: ['праздник', 'мужчины'],
//         likes: ['alex.kurch', 'ar_kud']
//     }
//
// ]);


