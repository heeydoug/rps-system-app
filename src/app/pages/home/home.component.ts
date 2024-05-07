import {Component, Inject} from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private toastr: ToastrService
  ) {
  }

  teste() {
    this.toastr.success('Teste');
  }

}
