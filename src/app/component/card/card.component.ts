import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CardModel } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() card: CardModel | undefined;
  @Output() action: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    if (this.card) {
      this.card.colorButton = this.card.colorButton || 'warn';
      this.card.buttonDisabled = this.card.buttonDisabled || false;
      this.card.hideButton = this.card.hideButton || false;
    }
  }

  onAction() {
    console.log("teest")
    this.action.emit();
  }
}
