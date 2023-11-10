import postsRoutes from './posts.routes';
import productsRoutes from './products.routes'
import userRoutes from './user.routes'

const routes = (app: any) => {
    productsRoutes(app);
    userRoutes(app);
    postsRoutes(app);
}

export default routes