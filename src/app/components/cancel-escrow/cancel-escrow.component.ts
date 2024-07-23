import { Component } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-cancel-escrow',
  templateUrl: './cancel-escrow.component.html',
})
export class CancelEscrowComponent {
  constructor(private blockchainService: BlockchainService) {}

  cancelEscrow() {
    this.blockchainService.cancelEscrow().then(() => {
      alert('Escrow canceled successfully');
    }).catch(error => {
      console.error('Error canceling escrow:', error);
      alert('Failed to cancel escrow');
    });
  }
}
