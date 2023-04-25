import { Module } from '@nestjs/common';
import { MockUserService } from './mock-data-user.service';
import { UsersService } from 'src/users/users.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule],
  providers: [MockUserService,UsersService],
  exports: [UsersService]
})
export class MockDataUserModule {}
