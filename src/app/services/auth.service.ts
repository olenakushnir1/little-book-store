import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  checkAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
