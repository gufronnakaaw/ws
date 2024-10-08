import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TsService } from './ts.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private ts: TsService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/teamspeak')
  async getClients() {
    return await this.ts.getClients();
  }

  @Get('/priority')
  async getPriority() {
    return await this.ts.getPriority();
  }
}
