import { Module } from '@nestjs/common';
import { PrismaModule } from '@/prisma/prisma.module';
import { UserResolver } from '@/user/user.resolver';

@Module({
  imports: [PrismaModule],
  providers: [UserResolver],
})
export class UserModule {}