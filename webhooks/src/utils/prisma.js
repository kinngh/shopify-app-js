import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

/** @type {PrismaClient} */
let prisma;
let isProd = process.env.NODE_ENV === "production";

if (isProd) {
  prisma = new PrismaClient().$extends(withAccelerate());
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient().$extends(withAccelerate());
  }
  prisma = global.prisma;
}

export default prisma;
