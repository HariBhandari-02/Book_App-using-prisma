
import jwt from 'jsonwebtoken';
import { Role } from '../generated/prisma/enums';


type TTokenPayLoad = {

    id: number;
    email: string;
    username: string;
    role: Role;
}
export async function generateToken(userPayLoad :TTokenPayLoad ) {
    const token = jwt.sign(userPayLoad, "secret_value", {
        expiresIn: "15 * 60 "//15 minutes
    })
return token;
}