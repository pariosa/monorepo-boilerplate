
import { Request, Response } from "express";
import { dummyData } from "../dummyData/dummyData";
import { rows } from "./Types/TradePartner";

const router = require('express').Router()

type TestData = {
    source:String;
    data:String;
}
interface JsonHome{
    success:boolean;
    data: []
}

router.get('/home', function (_req: Request, res: Response) {
    res.status(200).json({
        "Message": "🍱 Your Data has arrived!",
        "Data": dummyData,
        "Time": new Date().toISOString()
    });
});

router.get('/tradePartners', (req: Request, res: Response) => {
    res.status(200).json({
        "Message": "⛑️🦺🚧 Here is your list of Trade Partners",
        "Data": rows,
        "Time": new Date().toISOString()
    });
});

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        "Message": "🏡 Your have arrived at the homepage of the Trade Partner Capacity App!",
        "Time": new Date().toISOString()
    });
});

module.exports = router;