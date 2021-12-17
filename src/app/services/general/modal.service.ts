import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  showModal(id: string) {
    const modal: any = document.getElementById(id);
    modal.style.display = 'block';
    modal.style.background = '#000000d6';
  }

  hideModal(id: string) {
    const modal: any = document.getElementById(id);
    modal.style.display = 'none';
  }
}
