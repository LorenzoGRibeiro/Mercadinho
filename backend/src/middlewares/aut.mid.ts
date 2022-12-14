import { verify } from "jsonwebtoken";


export default (req: any, res: any, next: any) => {
    const token = req.header.access_token as string;
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = verify(token, process.env.JWT_PRIVATE_KEY as string);
        req.user = decoded;
        next();
    }
    catch (ex) {
        res.status(400).send('Invalid token.');
    }

    return next();
}