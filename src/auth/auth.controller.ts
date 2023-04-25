import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from 'src/users/dto/log-in.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly userService: UsersService) { }

    // register
    @Post('register')
    async register(@Body() createUserDto: createUserDto) {
        return this.userService.register(createUserDto);
    }

    // log in 
    @Post('log-in')
    async logIn(@Body() loginDto: LoginDto) {
        return this.userService.login(loginDto);
    }
}
