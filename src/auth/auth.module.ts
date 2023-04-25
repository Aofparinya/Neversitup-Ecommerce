import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { MockDataUserModule } from 'src/mock-data-user/mock-data-user.module';

@Module({
  controllers: [AuthController,MockDataUserModule],
  providers: [AuthService]
})
export class AuthModule {}
