import {Component, input, computed, Output, EventEmitter, output} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // @Input({required: true})  avatar!: string;
  // @Input({required: true})  name!: string;
  // @Output() select = new EventEmitter()

  avatar = input.required<string>();
  name = input.required<string>();
  userId = input.required<string>()
  imagePath= computed(() => 'assets/'+ this.avatar())
  select = output<string>()

  protected onSelectUser(){
    this.select.emit(this.userId())
  }
}
