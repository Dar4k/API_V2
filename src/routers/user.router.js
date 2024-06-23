
import { Router } from "express";

const router = Router();

router.get('/user',(req,res)=>{
    res.send("Este es el Usuario Get");
});


export default router;