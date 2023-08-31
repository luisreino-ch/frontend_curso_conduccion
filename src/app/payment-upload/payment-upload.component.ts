import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-upload',
  templateUrl: './payment-upload.component.html',
  styleUrls: ['./payment-upload.component.css']
})
export class PaymentUploadComponent {
  selectedFile: File | null = null;
  errorMessage: string = '';

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;
    this.errorMessage = '';
  }

  onRemoveFile() {
    this.selectedFile = null;
    this.errorMessage = '';
  }

  onSubmit() {
    if (!this.selectedFile) {
      this.errorMessage = 'Por favor, agregue el archivo antes de enviar.';
    }
  }
}
