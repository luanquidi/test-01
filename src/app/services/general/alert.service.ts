import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  // Función para mostrar toast.
  public showAlertToast(type: string = '', message: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showCancelButton: false,
      showConfirmButton: false,
      timer: 3000,
    })

    Toast.fire(message, '', (type == 'warning' ? 'warning' : 'success'));
  }
}
