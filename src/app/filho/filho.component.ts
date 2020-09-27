import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent {

  private _nome = "";

  @Input()
  set nome(nome: string) {
    this._nome = (nome && nome.trim()) || '<nome em branco>';
  }

  get nome(): string { return this._nome; }

}
