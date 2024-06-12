import { NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { error } from "console";
import { NextFunction , Request, Response} from "express";

export class UserMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
    if(req.body.Age>=18){
        next();
    }
    else{
        throw new UnauthorizedException('your are not qualified to go further')
    }
    }

}