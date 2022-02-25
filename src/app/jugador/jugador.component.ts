import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  //template:"<p> Jugador con código HTML inLine</p>",
  //styleUrls: ['./jugador.component.css']
  styles: ['p{background-color:black;color:white}']
})
export class JugadorComponent implements OnInit {

  nombre ="Massimiliano";
  apellido = "Utzeri";
  private edad = 21;
  empresa = "NTT DATA";
  ciudad = "Oslo";
/*
  cambiaCiudad(event : Event){

    this.ciudad = (<HTMLInputElement>event.target).value;

  }
  */

  getEdad(){
    return this.edad;
  }

  addNacionalidad(value:String){

  }

  habilitacionCuadro=false;

 usuarioRegistrado =false;

 textoDeRegistro = "No hay nadie registrado";

 getRegistroUsuario(){
   
  this.usuarioRegistrado = false;
 }

 setUsuarioRegistrado(event : Event){

  //alert("El usuario se acaba de registrar");
  if((<HTMLInputElement>event.target).value == "si"){
    this.textoDeRegistro="El usuario se acaba de registrar";
  }
  else{
    this.textoDeRegistro = " No hay nadie registrado ";
  }
  
 }

  constructor() { }

  ngOnInit(): void {
  }

}
