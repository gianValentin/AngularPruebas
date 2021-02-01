import { Component } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'myfirstapp';
  users: String[] = ["juam", "pablo", "maria", "rocio"];
  posts = [];

  constructor(private dataService: DataService) {
    dataService.getData().subscribe(data => {
      this.posts = data;
    })    
    this.obtenerPrimeraLetra()    
  }

  private obtenerPrimeraLetra(): void {
    let list = this.users.map(value => {      
      return value.substring(0,1)
    })
    console.log("Gian: ",list)
  }
}
