import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(private jwtService: JwtService) {}

  async generatorToken(id: string, email: string) {
    return await this.jwtService.signAsync({
      id,
      email,
    });
  }
}
