import { Controller, Post } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}
  @Post()
  async createAccount(): Promise<void> {
    await this.accountService.createAccount();
  }
}
