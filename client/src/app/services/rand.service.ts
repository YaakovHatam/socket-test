import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class RandService {
   socket;
   private randSubject: BehaviorSubject<number>;
   isSocketListenerActive = false;

   constructor() {
      this.socket = io("localhost:4500");
      this.randSubject = new BehaviorSubject<number>(0);
   }

   getRand(): Observable<number> {
      if (!this.isSocketListenerActive) {
         this.socket.on('rand', data => this.randSubject.next(data));
         this.isSocketListenerActive = true;
      }
      return this.randSubject;
   }
}
