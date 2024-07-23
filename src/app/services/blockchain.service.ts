import { Injectable } from '@angular/core';
import { AptosClient,Account, TxnBuilderTypes, BCS } from "@aptos-labs/ts-sdk";
// import {  AccountAddress, Aptos, AptosConfig, Network, NetworkToNetworkName } from "@aptos-labs/ts-sdk";

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  private client: AptosClient;
  private account: Account;

  constructor() {
    this.client = new AptosClient('https://fullnode.testnet.aptoslabs.com');
    // Replace with your private key
    this.account = '0xf5f8638b9dd6f1e7156903a9eb94b2957c8ca1a8cf63cec614057e9b2d59a033';
  }

  async createEscrow(seller: string, buyer: string, amount: number): Promise<void> {
    const payload = new TxnBuilderTypes.TransactionPayloadEntryFunction(
      TxnBuilderTypes.ModuleId.fromStr('escrow_program::escrowContract'),'create_escrow',[],
      [
        BCS.bcsToBytes(TxnBuilderTypes.AccountAddress.fromHex(seller)),
        BCS.bcsToBytes(TxnBuilderTypes.AccountAddress.fromHex(buyer)),
        BCS.bcsSerializeUint64(amount),
      ]
    );

    const txnRequest = await this.client.generateTransaction(this.account.address(), payload);
    const signedTxn = await this.client.signTransaction(this.account, txnRequest);
    await this.client.submitTransaction(signedTxn);
    await this.client.waitForTransaction(signedTxn.hash);
  }

  async releaseFunds(): Promise<void> {
    const payload = new TxnBuilderTypes.TransactionPayloadEntryFunction(
      TxnBuilderTypes.ModuleId.fromStr('escrow_program::escrowContract'),
      'release_funds',
      [],
      []
    );

    const txnRequest = await this.client.generateTransaction(this.account.address(), payload);
    const signedTxn = await this.client.signTransaction(this.account, txnRequest);
    await this.client.submitTransaction(signedTxn);
    await this.client.waitForTransaction(signedTxn.hash);
  }

  async cancelEscrow(): Promise<void> {
    const payload = new TxnBuilderTypes.TransactionPayloadEntryFunction(
      TxnBuilderTypes.ModuleId.fromStr('escrow_program::escrowContract'),
      'cancel_escrow',
      [],
      []
    );

    const txnRequest = await this.client.generateTransaction(this.account.address(), payload);
    const signedTxn = await this.client.signTransaction(this.account, txnRequest);
    await this.client.submitTransaction(signedTxn);
    await this.client.waitForTransaction(signedTxn.hash);
  }
}
