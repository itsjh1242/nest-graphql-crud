import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Dayzen server!!!!!';
  }
  getBye(): string {
    return 'Bye, See you';
  }
}
