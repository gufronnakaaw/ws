// ts3.service.ts
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { TeamSpeak } from 'ts3-nodejs-library';

@Injectable()
export class TsService implements OnModuleInit, OnModuleDestroy {
  onModuleDestroy() {
    throw new Error('Method not implemented.');
  }
  private ts3: TeamSpeak;

  async onModuleInit() {
    this.ts3 = await TeamSpeak.connect({
      host: '172.168.10.10',
      queryport: 10011,
      serverport: 9987,
      username: 'serveradmin',
      password: 'GG00rvik',
      nickname: 'BotNodeJS',
    });
  }

  async getClients() {
    const clients = await this.ts3.clientList({ clientType: 0 });

    return clients.map((client) => {
      return {
        nickname: client.nickname,
        is_talk: client.flagTalking,
      };
    });
  }
}
