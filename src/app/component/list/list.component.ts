import { Component, Input } from "@angular/core";
import { Appointment } from "../../app.component";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html"
})
export class ListComponent {
  @Input() appointmentList!: Appointment[];
}
