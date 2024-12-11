import express from "express";
import fileDb from "../fileDb";
import {Message} from "../types";

const messageRouter =express.Router();

messageRouter.get('/', (_req, res) => {
    const messages = fileDb.getMessages();
    res.send(messages);
});

messageRouter.post('/', async (req, res) => {
    const msg = {
        author: req.body.author || "Anonymous",
        message: req.body.message,
        image: req.body.image,
    };

    if (!msg.message) {
        res.status(400).send("Message is required");
    }

    const savedMessage: Message = await fileDb.addMessage(msg);
    res.send(savedMessage);
});


export default messageRouter;