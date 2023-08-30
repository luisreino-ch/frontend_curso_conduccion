import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public nombres!: string;
  public apellidos!: string;
  public cedula!: string;
  public fechaNacimiento!: Date;
  public correoElectronic!: string;
  public nivelAcademico!: string;
  public tipoSangre!: string;
  public tipoLicencia!: string;
  public fotoExamenPs!: File;
  public imagenPago!: File;
  public id!: number;

  


  protected formulario: FormGroup;

  siteKey: string = "6LctGnYmAAAAAI_RlcWxFwwArNMLNMWN6ihIRl4v";

  mostrarCampoArchivo: boolean = false;

  constructor(private formBuilder: FormBuilder, public UsuarioService: UsuarioService) {
    this.formulario = this.formBuilder.group({
      nombres: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      apellidos: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      fechaNacimiento: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      nivelAcademico: ['secundaria', Validators.required],
      tipoSangre: ['', Validators.required],
      tipoLicencia: ['', Validators.required],
      examenPsicometrico: ['', Validators.requiredTrue],
      archivo: ['', Validators.required]
    });
  }

  legalAgeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value) {
        const fechaNacimiento = new Date(control.value);
        fechaNacimiento.setHours(0, 0, 0, 0); // Establecer la hora a medianoche
        const hoy = new Date();
        const fechaMayorEdad = new Date(hoy.getFullYear() - 18, hoy.getMonth(), hoy.getDate());
        fechaMayorEdad.setHours(0, 0, 0, 0); // Establecer la hora a medianoche
  
        if (fechaNacimiento > fechaMayorEdad) {
          return { 'menorDeEdad': true };
        }
      }
  
      return null;
    };
  }

  async saveNewUsuarioOnBDD(){
    try{
      await this.UsuarioService.saveUsuario(this.buildAndGetNewUsuarioObject());
      console.log("El usuario ha sido registrado con éxito");
    }catch(error){
      console.log(error);
    }
  }



  buildAndGetNewUsuarioObject(){
    let newUsuario ={

      nombres : this.nombres,
      apellidos : this.apellidos,
      cedula : this.cedula,
      fechaNacimiento : this.fechaNacimiento,
      correoElectronic : this.correoElectronic,
      nivelAcademico : this.nivelAcademico,
      tipoSangre : this.tipoSangre,
      tipoLicencia : this.tipoLicencia,
      fotoExamenPs : this.fotoExamenPs,


    }

    return newUsuario;

  }






  ngOnInit(): void {



  }


  get f() {
    return this.formulario.controls;
  }

  cambiarNivelAcademico(nivel: string) {
    if (nivel === 'tercer-nivel') {
      this.formulario.get('nivelAcademico')?.setValue(nivel);
    } else {
      this.formulario.get('nivelAcademico')?.setValue('secundaria');
    }
  }

  cambiarExamenPsicometrico() {
    this.mostrarCampoArchivo = this.formulario.get('examenPsicometrico')?.value;
    if (!this.mostrarCampoArchivo) {
      this.formulario.get('archivo')?.setValue('');
    }
  }

  guardar() {
    if (this.formulario.invalid) {
      return;
    }

    // Aquí puedes hacer algo con los datos del formulario
    console.log(this.formulario.value);
  }
}
