import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class MockUserService {
  private readonly users = [
    {
      userId: 1,
      username: 'aof',
      password: 'parinya',
    },
    {
      userId: 2,
      username: 'test',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}