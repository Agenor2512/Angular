import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pseudo: string = '';
  pseudoList: Array<string> = [];

  clearPseudoField() {
    this.pseudo = '';
    //this.pseudoField.
  }

  onPseudoFieldKeyPressed(event:KeyboardEvent) {
    if (event.key == "Enter") {
      this.addPseudo();
    }
  }

  addPseudo() {
    this.pseudoList.push(this.pseudo);
    console.log(this.pseudoList);
    this.clearPseudoField();
  }

  removePseudo(pseudoId:number) {
    this.pseudoList = this.pseudoList.filter((_, id) => id != pseudoId) // _ -> unused parameter
  }
}
