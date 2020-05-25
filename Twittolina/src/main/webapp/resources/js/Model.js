class Model {
    constructor(posts) {
        posts = posts || [];
        this._posts = posts.filter(post => this.validate(post));
    }

    static dateComparator(a, b) {
        return b.createdAt - a.createdAt;
    }

    getPage(skip = 0, top = 10, filterConfig = undefined) {
        let resultPosts = this._posts;

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
        return this._posts.find(post => post.id === id) || null;
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
        const date = new Date(post.createdAt);
        const id = String(+date);
        const newPost = {
            author: post.author,
            description: post.description,
            photoLink: post.photoLink,
            //hashtags: post.hashtags.split('#'),
            hashtags: post.hashtags,
            id,
            createdAt: date
        };
        if (this.validate(newPost)) {
            this._posts.push(newPost);
            this.save();
            return newPost;
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
           // this._posts.push(editingPost);
            this.save();
            return post;
        }
        return false;
    }

    remove(id) {
        if (this._posts.findIndex(post => post.id == id) !== -1) {
            this._posts.splice(this._posts.findIndex(post => post.id == id), 1);
            this.save();
            return true;
        }
        return false;
    }

    save(){
        let json = JSON.stringify(this._posts);
        localStorage.setItem("posts", json);
    }

    restore(){
        let json = localStorage.getItem("posts");
        if(json) {
            let posts = JSON.parse(json);
            this._posts = posts.map((post) => ({
                ...post, createdAt: new Date(post.createdAt)
            }));
        }
    }

    addAll(posts) {
        let invalidPosts = [];
        posts.forEach(post => {
            if (!this.add(post)) invalidPosts.push(post)
        });

        return invalidPosts;
    }

    clear() {
        this._posts = [];
    }

    size(){
        return this._posts.length;
    }
}