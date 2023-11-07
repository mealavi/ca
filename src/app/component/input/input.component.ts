import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable, of, switchMap, tap} from "rxjs";
import {MatFormFieldAppearance} from "@angular/material/form-field";

export declare type InputType = ('text' | 'email' | 'number' | 'password' | 'search' | 'time' | 'date')

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
  @Input() placeholder: string | undefined
  @Input() control?: FormControl<string | null>;
  @Input() icon: string | undefined
  @Input() type: InputType = 'text'
  @Input() hint: string | undefined
  @Input() errorMessage: string | undefined = ''
  @Input() iconPosition: 'left' | 'right' = 'right'
  @Input() appearanceType: MatFormFieldAppearance = 'outline'
  showClearIcon$: Observable<boolean> | undefined = of(false)


  ngOnInit(): void {
    this.showClearIcon$ = this.control?.valueChanges.pipe(switchMap((value) => {
      return value?.length !== 0 ? of(true) : of(false)
    }));
  }


}
