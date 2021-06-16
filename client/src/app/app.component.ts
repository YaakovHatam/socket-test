import { Component, OnInit } from '@angular/core';
import { RandService } from './services/rand.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
   randArray: number[];

   constructor(private randService: RandService) {
      this.randArray = [];

   }
   ngOnInit(): void {
      this.randService.getRand().subscribe(res => this.randArray.push(res));
   }
   title = 'ws-client-app';
}
