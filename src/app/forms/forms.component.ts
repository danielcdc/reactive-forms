import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  // Declaramos nuestro formulario como un atributo del componente.
  form: FormGroup;
  // Utilizamos FormBuilder
  constructor(private fb: FormBuilder) { 
    // Al instanciar el componente, este se inicializa con 5 elementos.
    this.form = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      telephone: [,[Validators.minLength(9), Validators.required]],
      email: ["", [Validators.email, Validators.required]],
      password : ["",Validators.required, Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")],
      repeatedPassword : ["", [Validators.required, this.checkRepeatedPassword]] 
    });
  }

  ngOnInit(): void {
  }

  submitForm(){
    if (this.form.valid){
      this.form.getRawValue();
    }else{
     console.log("Hay un problema con el formulario.");
    }
  }

  checkRepeatedPassword(fc : FormControl){
    const value = fc.value as string;
    const samePassword = 'password' !== value;
    return samePassword ? {passwordError : "La constraseña no coincide"} : null;
  }

  
}


