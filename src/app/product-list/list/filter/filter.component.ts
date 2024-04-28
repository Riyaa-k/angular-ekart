import { Component, Input ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all:number = 0;

  @Input()
  instock:number=0;

  @Input()
  outstock:number=0;

  // we will create an event to pass data to parent component
  @Output()
  selectedFilterchange=new EventEmitter<string>();

  selectedradiobutton:string="all";

  // we will raise the previos event whenever the radio button is changed
  onselectedFilterchange(){
    // console.log(this.selectedradiobutton)
    this.selectedFilterchange.emit(this.selectedradiobutton)

  }
}
