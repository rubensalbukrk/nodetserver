import { create, get, remove } from "../controllers/product-controllers";

const productsRoutes = (app: any) => {
    app.post("/product", create);
    app.get("/product", get)
    app.delete("/product", remove)
}

export default productsRoutes