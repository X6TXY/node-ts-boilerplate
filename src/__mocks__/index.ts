import { Request,Response } from "express-serve-static-core";

export const mockRequest = {

} as Request


export const mockReponse = {
    send: jest.fn(),
} as unknown as Response;