import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { MockDataUserModule } from 'src/mock-data-user/mock-data-user.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [AuthModule, UsersModule, forwardRef(() => MockDataUserModule)],
  providers: [UsersService, AuthService],
  controllers: [UsersController]
})
export class UsersModule {}
