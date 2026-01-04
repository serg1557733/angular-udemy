import { Component, signal, computed } from '@angular/core';
import {DUMMY_USERS} from '../dummy-users/users';

const randIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  protected selectedUser = signal(DUMMY_USERS[randIndex])
  protected imagePath = computed(() => 'assets/'+ this.selectedUser().avatar)

  protected onSelectUser(){
    const randIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randIndex])
  }
}
