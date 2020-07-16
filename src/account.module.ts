import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountService } from './account.service';
import { AccountRepository } from './account.repository';
import { Account } from './account.entity';
import { AccountController } from './account.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AccountRepository, Account])], // <----- This will not work
  // imports: [TypeOrmModule.forFeature([Account, AccountRepository])], <----- This will work
  providers: [AccountService],
  controllers: [AccountController],
})
export class AccountModule {}
