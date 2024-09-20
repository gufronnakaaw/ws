import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class EventGateway {
  @SubscribeMessage('chat')
  handleEvent(@MessageBody() data: string): string {
    console.log(data);
    return data;
  }

  @SubscribeMessage('voice')
  async handleVoice(client: Socket, data: Buffer) {
    try {
      const buffer = Buffer.from(new Uint8Array(data));

      console.log('voice received!');
      console.log('send to the another user!');
      client.broadcast.emit('voice', buffer);
    } catch (error) {
      console.log(error);
    }
  }
}
