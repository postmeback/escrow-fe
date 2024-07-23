import { Component } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-create-escrow',
  templateUrl: './create-escrow.component.html',
})
export class CreateEscrowComponent {
  seller: string = '';
  buyer: string = '';
  amount: number = 0;

  constructor(private blockchainService: BlockchainService) {}

  createEscrow() {
    this.blockchainService.createEscrow(this.seller, this.buyer, this.amount).then(() => {
      alert('Escrow created successfully');
    }).catch(error => {
      console.error('Error creating escrow:', error);
      alert('Failed to create escrow');
    });
  }
}
