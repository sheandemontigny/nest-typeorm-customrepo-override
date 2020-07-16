import { EntityRepository, Repository } from 'typeorm';
import { Account } from './account.entity';

@EntityRepository(Account)
export class AccountRepository extends Repository<Account> {
  async createAccount(): Promise<void> {
    // This method is not available
  }
}
