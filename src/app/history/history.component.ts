import { Component, OnInit, AfterContentInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import tableau from 'tableau-api';

declare var tableau: any;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, AfterContentInit {

  viz: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    var placeholderDiv = document.getElementById('vizContainer');
    // Replace this url with the url of your Tableau dashboard
    var url = environment.url_tableu;
    var options = {
      hideTabs: true,
      width: "90%",
      height: "800px",
      onFirstInteractive: function () {
        // The viz is now ready and can be safely used.
        console.log("Run this code when the viz has finished     loading.");
      }
    };
    // Creating a viz object and embed it in the container div.
    this.viz = new tableau.Viz(placeholderDiv, url, options);
  }

}
