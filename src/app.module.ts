import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TsService } from './ts.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TsService],
})
export class AppModule {}
