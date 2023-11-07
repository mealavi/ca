import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() avatar: string | undefined = 'assets/shiba_face.jpeg'
  @Input() title: string | undefined = 'assets/shiba_face.jpeg'
  @Input() subtitle: string | undefined = 'assets/shiba_face.jpeg'
  @Input() imageSrc: string | undefined = 'assets/shiba_face.jpeg'
  @Input() text: string | undefined = 'assets/shiba_face.jpeg'
  @Input() buttonLabel: string | undefined = 'assets/shiba_face.jpeg'
  @Input() colorButton: 'primary' | 'accent' | 'warn' = 'warn'
  @Output() action: EventEmitter<void> = new EventEmitter<void>();

  onAction(){
    this.action.emit();
  }

}
