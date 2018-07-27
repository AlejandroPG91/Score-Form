import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'score-form-app';
  private expand = true;

  constructor() { }

  ngOnInit() {
    console.log("AAAAAAAAAAAA: "+this.expandMenu);
  }

  public expandMenu(){
    this.expand = !this.expand;
  }
  
}
