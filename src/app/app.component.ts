import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export interface Appointment {
  petName: string;
  ownerName: string;
  aptNotes: string;
  aptDate: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})

export class AppComponent implements OnInit {
  title = "VetDay";
  appointmentList!: Appointment[];

  constructor (private http: HttpClient) {}

  ngOnInit (): void {
    this.http.get<Appointment[]>("../assets/data.json").subscribe(data => {
      this.appointmentList = data;
    });
  }
}
