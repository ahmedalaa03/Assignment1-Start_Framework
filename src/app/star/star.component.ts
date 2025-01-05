import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  title: string = 'start Framework';
  color: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      if (data['title']) {
        this.title = data['title'];
      }
    });
    if(this.title==='start Framework'||this.title==='about component'){
      this.color = 'white';
    }
    else if(this.title==='portfolio component'||this.title==='conatct section'){
      this.color = 'rgb(44, 62, 80)';
    }

  }
}