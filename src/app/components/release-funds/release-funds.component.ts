import { Component } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-release-funds',
  templateUrl: './release-funds.component.html',
})
export class ReleaseFundsComponent {
  constructor(private blockchainService: BlockchainService) {}

  releaseFunds() {
    this.blockchainService.releaseFunds().then(() => {
      alert('Funds released successfully');
    }).catch(error => {
      console.error('Error releasing funds:', error);
      alert('Failed to release funds');
    });
  }
}
