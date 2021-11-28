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
    })/*,
     aliases: this.fb.array([
      this.fb.control('')
    ]) */
  });

/*   get aliases() {
    return this.usuarioForm.get('aliases') as FormArray;
  }
 */
  constructor(private fb: FormBuilder) { }

  updateProfile() {
    this.usuarioForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

 /*  addAlias() {
    this.aliases.push(this.fb.control(''));
  } */

  onSubmit() {
  
    console.warn(this.usuarioForm.value);
  }
}
