import productsRoutes from './products.routes'
import userRoutes from './user.routes'

const routes = (app: any) => {
    productsRoutes(app);
    userRoutes(app);
}

export default routes