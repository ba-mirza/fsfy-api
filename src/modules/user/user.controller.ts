import { FastifyReply, FastifyRequest } from "fastify";
import { createUser } from "./user.service";
import { CreateUserInput } from "./user.schema";

export async function registerUserHandler(
  request: FastifyRequest<{
    Body: CreateUserInput;
  }>,
  reply: FastifyReply
) {
  try {
    const body = request.body;
    const user = await createUser(body);
    return reply.code(201).send(user);
  } catch (error) {
    console.log(error);
    return reply.code(500);
  }
}
