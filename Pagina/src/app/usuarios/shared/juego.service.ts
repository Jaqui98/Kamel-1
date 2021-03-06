import { Injectable, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JuegoService{

  private juegos: Juego[] = [];
  i:number=0;
  buscar:any;



  itemList: AngularFireList<any>;
  items: Observable<any>;

  constructor( private db: AngularFireDatabase,public angularAuth: AngularFireAuth) {

    this.itemList = db.list('games');
    this.items = db.list('games').valueChanges();

  }

  getJuegos(juego:Juego[]): Juego[]{
    this.juegos=juego;
    return this.juegos;
  }

  getJuego( idx: number ): Juego{
    return this.juegos[idx];
  }

  buscarJuego( nombrej: string ):number{
    let index = this.juegos.findIndex( p => p.nombre === nombrej )
    return index;
  }
}

export interface Juego{
  nombre:string;
  descrip: string;
  img: string;
  precio: string;
  consola: string;
}
