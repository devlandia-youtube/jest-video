import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

interface IPayload {
  sub: string;
}

async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.sendStatus(401).end();
  }

  const [, token] = authHeader.split(" ");

  try {
    verify(token, 'key123') as IPayload;

    return next();
  } catch (error) {
    return response.sendStatus(401).end();
  }
}

export { ensureAuthenticated };
