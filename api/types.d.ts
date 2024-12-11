export interface Message {
    id: string;
    author: string;
    message: string;
    image: string;
}

export type MessageWithoutId = Omit<Message, "id">