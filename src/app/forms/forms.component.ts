import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    // Al instanciar el componente, este se inicializa con dos elementos: username y password.
    this.form = this.fb.group({
      username: ["Aquí va un usuario"],
      userpassword : [] 
    });
  }

  ngOnInit(): void {
  }

}
