import express from "express";
import fileDb from "../fileDb";
import {Message} from "../types";
import {imagesUpload} from "../multer";

const messageRouter =express.Router();

messageRouter.get('/', (_req, res) => {
    const messages = fileDb.getMessages();
    res.send(messages);
});

messageRouter.post('/', imagesUpload.single("image") , async (req, res) => {

    if (!req.body.message) {
        res.status(400).send({error: "Message cannot be empty"});
        return;
    }

    const msg = {
        author: req.body.author || "Anonymous",
        message: req.body.message,
        image: req.file ? "images" + req.file.filename : null,
    };


    const savedMessage: Message = await fileDb.addMessage(msg);
    res.send(savedMessage);
});


export default messageRouter;