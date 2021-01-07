import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: User;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,) {
  }

  userForm: FormGroup = this.fb.group({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  });

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      console.log(id);
      this.userService.getById(id).subscribe(result => {
        this.user = result;
        console.log(result)
      }, error => {
        console.log(error);
      })
    })

    this.user = {
      username: '',
      email: '',
      password: ''
    }
  }
  updateUserProfile() {
    const user = this.userForm.value;
    console.log(user);
    this.userService.updateUserProfile(this.user.id, user).subscribe(() => {
      alert("Thành công!")
    })
  }

  delete() {
    alert("Hello");
    this.userService.deleteUser(this.user.id).subscribe(() =>{
      alert("Xoá thành công!");
    })
  }
}
