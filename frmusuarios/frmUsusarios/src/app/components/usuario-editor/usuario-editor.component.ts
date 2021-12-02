import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-usuario-editor',
  templateUrl: './usuario-editor.component.html',
  styleUrls: ['./usuario-editor.component.css']
})
export class UsuarioEditorComponent  {
  usuarioForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    user:['', Validators.required],
    password:['', Validators.required],
    ubicacion: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
      country:['']
    })
  });

  City: any = ['Miami', 'Indianapolis', 'Monterrey', 'Buenos Aires', 'Los Angeles','Houston']
  State: any = ['Florida', 'Indiana', 'California', 'Texas', 'Nuevo Leon', 'Capital Federal','Cali']
  Country: any = ['USA', 'Mexico', 'Colombia', 'Argentina']
  
  constructor(private fb: FormBuilder) { }

 

  onSubmit() {
  
    console.warn(this.usuarioForm.value);
  }
}
