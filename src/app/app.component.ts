import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {CardComponent} from "./component/card/card.component";
import {CardModel} from "./component/card/card.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
cards= [
  new CardModel(undefined,'CNN','NY','assets/shiba_face.jpeg',undefined,'read more',undefined,undefined,true),
  new CardModel(undefined,'BBC','London','assets/shiba_face.jpeg',undefined,'read more',undefined,undefined,true),
  new CardModel(undefined,'ABC','DC','assets/shiba_face.jpeg',undefined,'read more',undefined,undefined,true),
  new CardModel(undefined,'ANB','TEX','assets/shiba_face.jpeg',undefined,'read more',undefined,undefined,true),
  new CardModel(undefined,'CHINNNNNA','PQ','assets/shiba_face.jpeg',undefined,'read more',undefined,undefined,true),
  new CardModel(undefined,'ORF','Vienna','assets/shiba_face.jpeg',undefined,'read more',undefined,undefined,true)
]

}
