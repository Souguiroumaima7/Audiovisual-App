import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({ providedIn: 'root' })
export class TaskService {
private baseUrl = '/api/tasks';


constructor(private http: HttpClient, private auth: AuthService) {}


private headers() {
return new HttpHeaders({ Authorization: `Bearer ${this.auth.token}` });
}


encrypt(text: string) {
return this.http.get(`${this.baseUrl}/encrypt/${text}`, { headers: this.headers() });
}
decryptAES(cipher: string) {
return this.http.post(`${this.baseUrl}/decrypt/aes`, cipher, { headers: this.headers() });
}
decryptRSA(cipher: string) {
return this.http.post(`${this.baseUrl}/decrypt/rsa`, cipher, { headers: this.headers() });
}
}
