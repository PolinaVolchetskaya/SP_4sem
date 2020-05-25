let tweets = [
    {
        id: '1',
        description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
        createdAt: new Date('2020-03-17T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
        hashtags: ['coronavirus', 'коронавирус'],
        likes: ['Иван Иванов', 'polina_volchetskaya']
    },

    {
        id: '2',
        description: 'Hi there!',
        createdAt: new Date('2020-05-20T13:13:13'),
        author: 'polina_volchetskaya',
        photoLink: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/assets/2015/11/23330/image1170x530cropped.jpg',
        hashtags: ['happiness', 'life'],
        likes: ['sstrazdina', 'mariakolyachko']
    },

    {
        id: '3',
        description: 'HB-day, Faculty of Applied Mathematics and Computer Science! The best faculty!',
        createdAt: new Date('2020-02-13T12:20:00'),
        author: 'sstrazdina',
        photoLink: 'https://sun9-47.userapi.com/c633516/v633516632/3013c/m_Wty2Kgo0k.jpg?ava=1',
        hashtags: ['famcs', 'bsu'],
        likes: ['polina_volchetskaya', 'alex.kurch']
    },

    {
        id: '4',
        description: 'My name is Alex! I like spring!',
        createdAt: new Date('2020-03-08T22:30:00'),
        author: 'alex.kurch',
        photoLink: 'http://static-cdn3.vigbo.tech/u36944/49011/blog/3881024/4674924/60603229/1000-acb5d94d85f91370d06cb6fb32017670.jpg',
        hashtags: ['joy', 'weather'],
        likes: ['sstrazdina', 'Иван Иванов', 'polina_volchetskaya']
    },

    {
        id: '5',
        description: 'Hello, girls!',
        createdAt: new Date('2020-02-06T13:48:32'),
        author: 'sstrazdina',
        photoLink: 'https://expertpovolosam.com/sites/default/files/styles/cover/public/images/cover/1271-13537.jpg?itok=vie7y8Ch',
        hashtags: ['girl', 'yes_ss'],
        likes: ['polina_volchetskaya']
    },

    {
        id: '6',
        description: '-Вероника, хочешь апельсин?\n' + '-Нет, я хочу умереть',
        createdAt: new Date('2020-01-21T16:52:02'),
        author: 'mariakolyachko',
        photoLink: 'https://ripeme.com/wp-content/uploads/RF-10046-RIPE-ORGANIC-ORGANIC-ORANGES.jpg',
        hashtags: ['апельсин', 'сессия', 'смерть', 'токсик', 'toxic'],
        likes: ['polina_volchetskaya', 'sstrazdina']
    },

    {
        id: '7',
        description: 'Для лучших или для тебя?',
        createdAt: new Date('2020-01-19T19:34:00'),
        author: 'veronikcha',
        photoLink: 'https://cloud.addictivetips.com/wp-content/uploads/2018/12/instagram-close-friends-list.jpg',
        hashtags: ['Маша', 'инстаграм', 'истории', 'токсик'],
        likes: ['mariakolyachko', 'sstrazdina']
    },

    {
        id: '8',
        description: '-Почему мы жёлтые?\n' + '-Мы жёлтые',
        createdAt: new Date('2020-01-13T11:26:27'),
        author: 'ar_kud',
        photoLink: 'https://www.8asians.com/wp-content/uploads/2011/05/8a-yellow.jpg',
        hashtags: ['кулачки', 'survivors', 'артём_такой_артём'],
        likes: ['mariakolyachko', 'veronikcha']
    },

    {
        id: '9',
        description: 'Happy New Year! :)',
        createdAt: new Date('2020-01-01T00:01:10'),
        author: 'polina_volchetskaya',
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/1748857/1578302b-716c-4120-ba1a-cef6566cd324/s600',
        hashtags: ['newyear', 'christmas', 'friends'],
        likes: ['sstrazdina', 'alex.kurch']
    },

    {
        id: '10',
        description: 'Сдал все зачёты!',
        createdAt: new Date('2019-12-29T17:17:17'),
        author: 'OnlyKir',
        photoLink: 'https://lh3.googleusercontent.com/proxy/1rJWfgCpHDzthzwHELk03r1118mfMkQDq8zEHmdeqkAGHcsAn5nvyE7Dx6Z7ldqjHzH6HQuhYigarP4NOEUDB__bp7lpN2rM8tEa4BzUyD-iv2A7',
        hashtags: ['универ', 'сессия', 'Кирилл_молодец'],
        likes: ['polina_volchetskaya', 'sstrazdina']
    },

    {
        id: '11',
        description: 'Грутсный март',
        createdAt: new Date('2020-03-18T13:20:00'),
        author: 'mariakolyachko',
        photoLink: 'http://static-cdn3.vigbo.tech/u36944/49011/blog/3881024/4674924/60603227/1000-a46472974e23ee41cbf24768b7e73a9a.jpg',
        hashtags: ['карантин'],
        likes: ['veronikcha']
    },

    {
        id: '12',
        description: 'В Бобруйске хорошо!',
        createdAt: new Date('2020-03-22T23:30:16'),
        author: 'veronikcha',
        photoLink: 'https://34travel.me/media/posts/5cca8f793355e-babrujsk-941.jpg',
        hashtags: ['Бобруйск'],
        likes: ['mariakolyachko', 'ar_kud']

    },

    {
        id: '13',
        description: 'Ура! Заработал KOLOBIKE!',
        createdAt: new Date('2020-03-21T23:59:00'),
        author: 'ar_kud',
        photoLink: 'https://sun9-33.userapi.com/c849216/v849216111/1c3861/nHshPc79Wgw.jpg?ava=1',
        hashtags: ['kolobike', 'sport'],
        likes: ['polina_volchetskaya', 'OnlyKir']
    },

    {
        id: '14',
        description: 'Сколько новой информации узнал на старостате!',
        createdAt: new Date('2020-03-23T12:59:55'),
        author: 'OnlyKir',
        photoLink: 'https://st1.stranamam.ru/data/cache/2013nov/18/14/10121471_28552-700x500.jpg',
        hashtags: ['старостат', 'староста', '513аудитория'],
        likes: ['sstrazdina', 'mariakolyachko']
    },

    {
        id: '15',
        description: 'Отменили др фпми :(',
        createdAt: new Date('2020-03-14T13:20:20'),
        author: 'sstrazdina',
        photoLink: 'https://snob.ru/i/indoc/user_22121/290104385c97b2737b29d48b953009a6.jpg',
        hashtags: ['грустно', 'обидно'],
        likes: ['polina_volchetskaya', 'mariakolyachko', 'OnlyKir']
    },

    {
        id: '16',
        description: 'почему по непрофильным предметам задают так много дз?',
        createdAt: new Date('2020-03-17T23:00:00'),
        author: 'polina_volchetskaya',
        photoLink: 'http://static-cdn3.vigbo.tech/u36944/49011/blog/3881024/4288185/55211204/1000-e0e82b69baf08cbccc565f607ee4024c.jpg',
        hashtags: ['когда', 'делать', 'профильные'],
        likes: ['sstrazdina']
    },

    {
        id: '17',
        description: 'В марте выпал снег!!!',
        createdAt: new Date('2020-03-19T21:50:00'),
        author: 'ar_kud',
        photoLink: 'http://static-cdn3.vigbo.tech/u36944/49011/blog/3881024/3887286/49710863/1000-37fc952440a74a0a0a8258d166a5f7f8.JPG',
        hashtags: ['шок'],
        likes: ['veronikcha', 'mariakolyachko']
    },

    {
        id: '18',
        description: 'Хочу теплую погоду!',
        createdAt: new Date('2020-03-01T09:20:20'),
        author: 'polina_volchetskaya',
        photoLink: 'http://static-cdn3.vigbo.tech/u36944/49011/blog/3881024/4234870/54722368/1000-a7078c8ecc9510969d69b71dd5c58044.jpg',
        hashtags: ['весна'],
        likes: ['veronikcha', 'OnlyKir']
    },

    {
        id: '19',
        description: 'С праздником, девушки!',
        createdAt: new Date('2020-03-08T12:10:00'),
        author: 'Иван Иванов',
        photoLink: 'http://static-cdn3.vigbo.tech/u36944/49011/blog/3881024/4674924/60603226/1000-6e3aa098bfb9d4323518839c76d0466a.jpg',
        hashtags: ['8марта', 'весна', 'праздник'],
        likes: ['mariakolyachko', 'veronikcha', 'polina_volchetskaya', 'sstrazdina']
    },

    {
        id: '20',
        description: 'С 23 февраля!',
        createdAt: new Date('2020-02-23T09:10:00'),
        author: 'polina_volchetskaya',
        photoLink: 'https://sib.fm/storage/article/February2020/1sF4neyAJajVyWLCxDzI.jpg',
        hashtags: ['праздник', 'мужчины'],
        likes: ['alex.kurch', 'ar_kud']
    }

];

class App {
    //Testing
    constructor() {
        this.countOfPostsOnFeed = 0;
        this.user = null;
        this.view = new View();
        this.model = new Model();
        this.model.restore();
        if (!this.model.size()) {
            this.model.addAll(tweets);
        }
        this.filterConfig = {
            author: null,
            hashtags: null,
            from: null,
            to: null
        };
        this.postForEdit;
        this.buttonLoadMore = document.getElementById("buttonMore");
        this.buttonLoadMore.addEventListener("click", () => this.loadMorePosts());

        this.buttonFilter = document.getElementById("filter");
        this.buttonFilter.addEventListener("submit", (event) => {
            event.preventDefault();
            this.filterPosts(event);
        });

        document.getElementById("container").addEventListener("click", (event) => {
            this.deleteOnePost(event);
        });

        document.getElementById("container").addEventListener("click", (event) => {
            this.EditOnePost(event);
        });

        this.loadMorePosts();

        this.buttonAddingNewPost = document.getElementById("buttonNewPost");
        this.buttonAddingNewPost.addEventListener("click", () => this.addNewPost());

        this.buttonCancelNewPost = document.getElementById("buttonCancel");
        this.buttonCancelNewPost.addEventListener("click", () => this.cancelNewPost());

        this.buttonPublishPost = document.getElementById("formNewPost");
        this.buttonPublishPost.addEventListener("submit", (event) => {
            event.preventDefault();
            this.publishPost(event);
        });

        this.buttonExitTW = document.getElementById("buttonEXIT");
        this.buttonExitTW.addEventListener("click", () => this.exitTW());

        this.buttonEnterTW = document.getElementById("buttonENTER");
        this.buttonEnterTW.addEventListener("click", () => this.enterTW());

        this.buttonEnter = document.getElementById("authorizationField");
        this.buttonEnter.addEventListener("submit", (event) => {
            event.preventDefault();
            this.enter(event);
        });

    }

    loadMorePosts() {
        let departure = 'end';
        let nextPosts = this.model.getPage(this.countOfPostsOnFeed, 10, this.filterConfig);
        nextPosts.forEach(post => this.view.addItem(post, departure));
        this.countOfPostsOnFeed += nextPosts.length;
        if (this.countOfPostsOnFeed === this.model.size() || nextPosts.length < 10) {
            document.getElementById("buttonMore").style.visibility = "hidden";
        }
    }

    cancelNewPost(){
        document.getElementById("AddNewPost").style.visibility = "hidden";
    }

    addNewPost() {
        this.postForEdit = null;
        document.getElementById("AddNewPost").style.visibility = "visible";
        document.getElementById("nameUser").innerHTML = this.user;
        let form = document.getElementById("formNewPost");
        form.formDescription.value = "";
        form.formHashtags.value = "";
    }

    exitTW() {
        this.user = null;
        this.view.user = null;
        document.getElementById("buttonEXIT").style.visibility = "hidden";
        document.getElementById("buttonENTER").style.visibility = "visible";
        document.getElementById("profile").style.visibility = "hidden";
        document.getElementById("buttonNewPost").style.visibility = "hidden";
        document.querySelectorAll(".buttonLike").forEach(item=>item.style.visibility = "hidden");
        document.querySelectorAll(".buttonEdit").forEach(item=>item.style.visibility = "hidden");
        document.querySelectorAll(".buttonDelete").forEach(item=>item.style.visibility = "hidden");
    }

    enterTW() {
        document.getElementById("authorizationField").style.visibility = "visible";
    }

    enter(event) {
        let password;
        let username;
        let item=event.target;
        if(item.usernameField.value){
            username = item.usernameField.value;
        }
        if(item.passwordField.value){
            password = item.passwordField.value;
        }
        this.user = username;
        this.view.user = username;
        document.getElementById("userName").innerHTML = this.user;
        document.getElementById("authorization").style.visibility = "visible";
        document.getElementById("buttonEXIT").style.visibility = "visible";
        document.getElementById("buttonENTER").style.visibility = "hidden";
        document.getElementById("profile").style.visibility = "visible";
        document.getElementById("buttonNewPost").style.visibility = "visible";
        document.getElementById("authorizationField").style.visibility = "hidden";
        document.getElementById("container").innerHTML = "";
        this.countOfPostsOnFeed = 0;
        this.loadMorePosts();
    }

    publishPost(event) {
        let departure = 'begin';
        let post = {
            author: this.user,
            description: null,
            createdAt: new Date(),
            likes: null,
            hashtags: null,
            photoLink: null
        };
        let item = event.target;
        if (item.formDescription.value) {
            post.description = item.formDescription.value;
        }
        if (item.formHashtags.value) {
            post.hashtags = item.formHashtags.value.split(" ");
        }
        if(this.postForEdit) {
            this.view.edit(this.postForEdit.id, this.model.edit(this.postForEdit.id, post));
        }
        else this.view.addItem(this.model.add(post), departure);
        this.postForEdit = null;
        document.getElementById("AddNewPost").style.visibility = "hidden";
    }

    deleteOnePost(event) {
        let current = event.target;
        while (current && current.className !== "buttonDelete" && current.id !== "container") {
            current = current.parentNode;
        }
        if (current && current.className === "buttonDelete") {
            this.model.remove(current.getAttribute('data-post-id'));
            while (current && current.className !== "post") {
                current = current.parentNode;
            }
            current.remove();
        }
    }

    EditOnePost(event) {
        let current = event.target;
        while (current && current.className !== "buttonEdit" && current.id !== "container") {
            current = current.parentNode;
        }
        if (current && current.className === "buttonEdit") {
            this.postForEdit = this.model.get(current.getAttribute('data-post-id'));
            while (current && current.className !== "post") {
                current = current.parentNode;
            }
            let form = document.getElementById("formNewPost");
            form.formDescription.value = this.postForEdit.description;
            form.formHashtags.value = this.postForEdit.hashtags;
            document.getElementById("AddNewPost").style.visibility = "visible";
        }
    }

    filterPosts(event) {
        let departure = 'begin';
        let item = event.target;
        if (item.filterUsername.value) {
            this.filterConfig.author = item.filterUsername.value;
        }
        if (item.filterHashtags.value) {
            this.filterConfig.hashtags = item.filterHashtags.value.split(" ");
        }
        if (item.from.valueAsDate) {
            this.filterConfig.from = item.from.valueAsDate;
        }
        if (item.to.valueAsDate) {
            this.filterConfig.to = item.to.valueAsDate;
        }
        document.getElementById("container").innerHTML = "";
        let searchedPosts = this.model.getPage(0, 10, this.filterConfig);
        searchedPosts.forEach(post => this.view.addItem(post, departure));
        this.countOfPostsOnFeed = searchedPosts.length;
        if (this.countOfPostsOnFeed < 10) {
            document.getElementById("buttonMore").style.visibility = "hidden";
        } else {
            document.getElementById("buttonMore").style.visibility = "visible";
        }
    }
}

let app = new App();


