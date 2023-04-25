import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/log-in.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../mock-data-user/schemas/users.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserDto } from './dto/user.dto';
import { Observable } from 'rxjs';


@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private readonly jwtService: JwtService) { }

    // register
    async register(createUserDto: createUserDto) : Promise<User>{
        const user = new this.userModel();
        user.email = createUserDto.email;
        user.password = await bcrypt.hash(createUserDto.password,10);;
        return user.save();
    }
    
    // login 
    async login(loginDto: LoginDto): Promise<UserDto> {
        const user:User = await this.userModel.findOne({email: loginDto.email}).select('+password').exec();
        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
        }
        const isPasswordMatching = await bcrypt.compare(
            loginDto.password,
            user.password
          );
        if (!isPasswordMatching) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
        }
        const userDto = new UserDto();
        const token = this._createToken(loginDto);
        userDto.email = user.email;
        userDto.token = token;
        return userDto;
    }

    // create token for login
    private _createToken({ email }: LoginDto): any {
        const user:any = { email };    
        const accessToken = this.jwtService.sign(user);    
        return {
            expiresIn: '15s',
            accessToken,    
        };  
    }

    // buying product and get order 

    // view order history
    async viewOrderHistory(username:string) : Promise<any> {
        
    }
}
