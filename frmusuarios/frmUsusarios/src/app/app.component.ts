import { Component } from '@angular/core';
//import { Usuarios } from './usuarios';
export type EditorType = 'usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editor: EditorType = 'usuario';

  get showUsuarioEditor() {
    return this.editor === 'usuario';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}