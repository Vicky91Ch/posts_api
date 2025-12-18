import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): any {
    throw new Error('Method not implemented.');
  }
  getHel(): any {
    return {
      success:true,
      message:'Vicky91Ch-posts-api on line',
      data: 'Sistema Posts API',
      version: '1.0.0.',
      }
    }
}
