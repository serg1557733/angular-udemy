import { Component } from '@angular/core';
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
  protected selectedUser = DUMMY_USERS[randIndex]
}
