import { get, create, remove } from "../controllers/users-controllers";

const userRoutes = (app: any) => {
    app.get("/users", get)
    app.post("/users", create)
    app.delete("/users", remove)
}

export default userRoutes