import { Observable } from 'tns-core-modules/data/observable';
import { Gw2apiWrapper } from 'nativescript-gw2api-wrapper';

export class HelloWorldModel extends Observable {
  public message: string;
  private gw2apiWrapper: Gw2apiWrapper;

  constructor() {
    super();

    this.gw2apiWrapper = new Gw2apiWrapper();
    this.message = this.gw2apiWrapper.message;
  }
}
