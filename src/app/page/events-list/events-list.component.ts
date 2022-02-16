import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})

export class EventsListComponent<T> implements OnInit {

  @Output() startEdit: EventEmitter<T> = new EventEmitter();

  eventList: Observable<Event[]> = this.eventService.getAll();

  constructor(
    private eventService: EventService,
  ) { }

  ngOnInit(): void {}

  onUpdate(event: Event): void {
      //this.eventService.get(event.id);
      this.eventService.update(event);
      console.log(event);
   }



}
