const posts = [
    {title: 'Post Başlık 1', detail: 'Post Detay 1'},
    {title: 'Post Başlık 2', detail: 'Post Detay 2'},
    {title: 'Post Başlık 3', detail: 'Post Detay 3'}
];

const listPost = () => {
    posts.map( post => {
        console.log(post.title);
    })
};

const addPosts = (newPost) => {

    const promise1 = new Promise((resolve,reject) =>{
        posts.push( newPost);

        resolve(posts);
        reject('Bir Hata Oluştu');
    })
    
    return promise1;
   
}

async function showPosts () {
    try{
        await addPosts( {title: 'Post Başlık 4', detail: 'Post Detay 4'});
        listPost();
    }
    catch(error){
        console.log(error);
    }
    
}

showPosts();