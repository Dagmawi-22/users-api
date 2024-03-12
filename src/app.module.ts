import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/controller/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/service/users.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || 'password',
      database: process.env.DB_NAME || 'users_db',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
