import { Component, Input, OnInit, inject } from '@angular/core';
import { UserProfileServiceService } from '../../services/user-profile-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.css'
})
export class UserProfilePageComponent implements OnInit {

  private router = inject(Router);

  private userProfileService = inject(UserProfileServiceService);
  public nombre?: string;
  public email?: string;
  public apellidos?: string;
  public categoria?: string;
  public dni?: string;
  public estadisticas?: string;
  public genero?: string;
  public historico?: string;
  public posicionPista?: string;
  public ranking?: number;
  public tallaCamiseta?: string;
  public telefono?: string;
  public idJugador?: number;








  ngOnInit(): void {
    const dataUser = this.userProfileService.getUserData()
      .subscribe(
        (resp) => {
          if (resp.status) {
            //console.log(resp);
            this.nombre = resp.usuario['name'];
            this.email = resp.usuario['email'];
            this.apellidos = resp.usuarioAll['apellidos'];
            this.categoria = resp.usuarioAll['categoria'];
            this.dni = resp.usuarioAll['dni'];
            this.estadisticas = resp.usuarioAll['estadisticas'];
            this.genero = resp.usuarioAll['genero'];
            this.historico = resp.usuarioAll['historico'];
            this.posicionPista = resp.usuarioAll['posicionPista'];
            this.ranking = resp.usuarioAll['ranking'];
            this.tallaCamiseta = resp.usuarioAll['tallaCamiseta'];
            this.telefono = resp.usuarioAll['telefono'];
            this.idJugador = resp.usuarioAll['idJugador'];
          } else {
            console.error('Error al obtener usuario');
          }
        },
      );
  }

  logout(): void {
    console.log('Cerrar sesión.');
    this.userProfileService.logoutUser().subscribe(
      //(response) => console.log(response),

    );
    setTimeout(() => {
      localStorage.removeItem('token');
      window.location.reload();
    }, 2000);

  }

  openLookGamesUser() {
    //console.log('Vs');
    //this.router.navigate(['userProfile/look-games-user']);look-game-open
    this.router.navigate(['userProfile/look-game-open']);
  }

}
