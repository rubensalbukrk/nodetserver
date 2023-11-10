import { 
    get, create, 
    remove, update 
} from '../controllers/posts-controllers'

const postsRoutes = (app: any) => {
    app.post('/posts', create );
    app.get('/posts', get );
    app.delete('/posts', remove )
    app.put('/posts', update )
}

export default postsRoutes