import { Component, OnInit } from '@angular/core';
import { Account } from '../../_models/account';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accounts : Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(){
    return this.accountService.getAccounts()
    .subscribe(
        accounts => {
          console.log(accounts);
          this.accounts = accounts;
      }
    )
  }

}
