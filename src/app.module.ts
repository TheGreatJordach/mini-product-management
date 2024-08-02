import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseDevModule } from './app/db/database-dev/database-dev.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseDevModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
