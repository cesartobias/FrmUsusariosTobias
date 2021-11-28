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

  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan', 'California','Texas']

/*   get aliases() {
    return this.usuarioForm.get('aliases') as FormArray;
  }
 */
  constructor(private fb: FormBuilder) { }

 /*  updateProfile() {
    this.usuarioForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
 */
 /*  changeCity(e) {
    console.log(e.value)
    this.city.setValue(e.target.value, {
      onlySelf: true
    })
  }
 */
  // Getter method to access formcontrols
    get cityName() {
      return this.usuarioForm.get('cityName');
    }

 /*  addAlias() {
    this.aliases.push(this.fb.control(''));
  } */

  onSubmit() {
  
    console.warn(this.usuarioForm.value);
  }
}
