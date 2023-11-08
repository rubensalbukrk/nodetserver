import { get, create } from "../controllers/user-controlers";

const userRoutes = (app: any) => {
    app.get("/users", get)
    app.post("/users", create)
}

export default userRoutes