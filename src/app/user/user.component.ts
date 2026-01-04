import { Component, input, computed } from '@angular/core';

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

  avatar = input.required<string>();
  name = input.required<string>();
  imagePath= computed(() => 'assets/'+ this.avatar())

  protected onSelectUser(){}
}
