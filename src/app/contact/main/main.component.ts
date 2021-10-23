import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  /**
   * Usamos formularios reactivos para validad los campos y para tener un mejor manejo de estos.
   */

  mailForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', Validators.required],
    mensaje: ['', Validators.required],
  });

  /**
   * Llamamos a los servicios necesarios
   */

  constructor(private db: AngularFirestore, private fb: FormBuilder) {}

  ngOnInit(): void {}

  enviar() {
    /**
     * Si el formulario cumple con los requisitos que lo hacen válido, ese es enviado a firebase.
     * Al enviarlo a firebase, se limpian los campos del formulaio y se retorna una alerta indicando al
     * usuario que esto fue exitoso.
     * Si no se cumplen los campos, se le indica al usuario con una alerta que sucedió un error.
     */

    if (this.mailForm.valid) {
      this.db
        .doc(`${this.mailForm.value.email}/mensaje`)
        .set(this.mailForm.value)
        .then(() => {
          this.mailForm.reset();
        });

      return Swal.fire(
        'Éxito',
        'Nos pondremos en contacto contigo.',
        'success'
      );
    }

    return Swal.fire('Error', 'Llene todos los campos.', 'error');
  }
}
