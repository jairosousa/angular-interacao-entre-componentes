import { Component, ViewChild } from '@angular/core';
import { FilhoComponent } from '../filho/filho.component';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent {

  @ViewChild(FilhoComponent, { static: false })

  private filhoComponent: FilhoComponent;

  nome: string;

  ngAfterViewInit() {
    setTimeout(() => this.nome = this.filhoComponent.nome, 0);
  }

}
