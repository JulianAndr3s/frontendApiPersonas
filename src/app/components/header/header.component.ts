import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  isAutenticated(): boolean {
    if (this.loginService.isAutenticated()){
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.loginService.logout();
    alert('Has cerrado la sesión exitosamente');
    this.router.navigate(['/login']);
  }

}
