import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local'],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.getOrThrow<string>('MYSQL_HOST'),
        port: configService.getOrThrow<number>('MYSQL_PORT'),
        username: configService.getOrThrow<string>('MYSQL_USERNAME'),
        password: configService.getOrThrow<string>('MYSQL_PASSWORD'),
        database: configService.getOrThrow<string>('MYSQL_DATABASE'),
        synchronize: configService.getOrThrow('MYSQL_SYNC_DATABASE'),
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseDevModule {}
