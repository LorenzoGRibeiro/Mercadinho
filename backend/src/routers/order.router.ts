import { Router } from "express";
import asyncHander from "express-async-handler";
import {HTTP_STATUS} from "../constants/http_status";
import { OrderModel } from "../models/order.model";
import auth from "../middlewares/aut.mid";


const router = Router();
router.use(auth);

router.post('/creat',
asyncHander(async (req, res) => {
    const requestOrder = req.body;

    if(requestOrder.items.length<=0){
        res.status(HTTP_STATUS).send('Cart is Empty!')
        return
    }

    await OrderModel.deleteOne({
        user: requestOrder.user,
        status: 'new'
    })
    

    const newOrder = new OrderModel({...requestOrder, user: requestOrder.user});
    await newOrder.save();
    res.send(newOrder);
})
)

export default router;