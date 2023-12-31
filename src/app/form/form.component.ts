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

  constructor(private formBuilder: FormBuilder, public UsuarioService: UsuarioService, private http:HttpClient) {
    this.formulario = this.formBuilder.group({
      nombres: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      apellidos: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]{10}$'), this.ecuadorianCedulaValidator()]],
      fechaNacimiento: ['', [Validators.required, this.legalAgeValidator()]], // Corrección aquí
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


  ecuadorianCedulaValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value) {
        const cedula = control.value.toString();
        if (cedula.length === 10) {
          const provinceCode = parseInt(cedula.substr(0, 2));
          if (provinceCode >= 1 && provinceCode <= 24) {
            // Additional checks based on province codes if needed
            return null; // Valid cédula
          }
        }
        return { 'invalidEcuadorianCedula': true };
      }
      return null;
    };
  }

  async saveNewUsuarioOnBDD() {
    try {
        await this.UsuarioService.saveUsuario(this.buildAndGetNewUsuarioObject());
        alert("El usuario ha sido registrado con éxito");
    } catch (error) {
        console.error(error);
        alert("Ha ocurrido un error al registrar al usuario");
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
