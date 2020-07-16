import { Injectable } from '@nestjs/common';
import { AccountRepository } from './account.repository';

@Injectable()
export class AccountService {
  constructor(private accountRepository: AccountRepository) {}
  async createAccount(): Promise<void> {
    return this.accountRepository.createAccount();
  }
}
