import { create, get } from "../controllers/product-controllers";

const productsRoutes = (app: any) => {
    app.post("/product", create);
    app.get("/product", get)
}

export default productsRoutes