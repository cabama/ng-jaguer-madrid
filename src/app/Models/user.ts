export class User {

  public _id: string;
  public username: string;
  public email: string;
  public password: string;
  public name: string;
  public surname: string;
  public role: string;
  public image: string;

  set user (user) { this.username = user; }

}
