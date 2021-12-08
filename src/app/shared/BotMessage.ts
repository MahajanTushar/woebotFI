import { MessageType } from "./MessageType";
import { ResponseType } from "./ResponseType";
export class BotMessage {
	id: string;
    msgTxt: string;
	ansId: string;
	redirectUrl: string;
	imageUrl: string;
	response: string;
	orderNumber: number;
    type: MessageType;
    responseType: ResponseType;
}