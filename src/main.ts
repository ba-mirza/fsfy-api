import { FastifyReply, FastifyRequest } from "fastify";
import Fastify from "fastify";
import { userRoutes } from "./modules/user/user.route";

const fastify = Fastify();

fastify.get(
  "/healthcheck",
  async (request: FastifyRequest, reply: FastifyReply) => {
    return { status: "ok" };
  }
);

async function main() {
  fastify.register(userRoutes, { prefix: "api/users" });

  try {
    await fastify.listen({
      port: 4000,
      host: "0.0.0.0",
    });
    console.log(`Server is running at http://localhost:4000`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
