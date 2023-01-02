import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  imgUrl:string = 'https://t4.ftcdn.net/jpg/04/53/22/23/240_F_453222345_ffihvp8GbEW7kaDGTNkv2u7l1zHTSKD3.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
