import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent {

  @Input() pais: string;

  @Output() votado = new EventEmitter<string>();

  vota(pais: string) {
    this.votado.emit(pais);
  }
}
