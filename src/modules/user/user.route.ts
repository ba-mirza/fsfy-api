import { FastifyInstance } from "fastify";
import { registerUserHandler } from "./user.controller";

export async function userRoutes(instance: FastifyInstance) {
  instance.post("/", registerUserHandler);
}
