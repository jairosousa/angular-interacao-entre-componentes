import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent {

  @Input() pais: string;

  ngOnChanges(changes: SimpleChanges) {
    for (let change in changes) {
      this.pais = (changes[change].currentValue && changes[change].currentValue.trim()) || '<País não informado>';
    }
  }

}
