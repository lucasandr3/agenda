import { FastifyInstance } from "fastify";
import { UserUserCase } from "../usecases/user.usercase";
import { UserCreate } from "../interfaces/user.interface";

export async function userRoutes(fastify: FastifyInstance) {

    const userUserCase = new UserUserCase();

    fastify.post<{ Body: UserCreate }>("/", (req, reply) => {

        const { name, email } = req.body;

        try {
            const data = userUserCase.create({ name, email });
            reply.send(data);
        } catch (error) {
            reply.send(error);
        }
    });

    fastify.get("/", (req, reply) => {
        reply.send("Hello, world!");
    });
}