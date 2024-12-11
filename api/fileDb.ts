import { promises as fs } from "fs";
import {Message, MessageWithoutId} from "./types";

const fileName = 'db.json';
let data: Message[] = [];

const fileDb = {
    async init() {
        try {
            await fs.access(fileName);
        } catch {
            await fs.writeFile(fileName, JSON.stringify([]));
        }

        try {
            const fileContent = await fs.readFile(fileName);
            data = JSON.parse(fileContent.toString());
        } catch (e) {
            console.error(e);
        }
    },

    getMessages(): Message[] {
        return data;
    },

    async addMessage(msg: MessageWithoutId): Promise<Message> {
        const id =crypto.randomUUID();
        const message: Message = {id, ...msg};
        data.push(message);
        await this.save();
        return message;
    },

    async save() {
        try {
            await fs.writeFile(fileName, JSON.stringify(data, null, 2));
        } catch (e) {
            console.error(e);
        }
    }
};

export default fileDb;