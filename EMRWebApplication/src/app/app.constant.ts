import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'http://localhost:8080';
    //public Server = 'http://naus00067310:777/';
    
    public LoginToken = this.Server + '/save';
    
}
