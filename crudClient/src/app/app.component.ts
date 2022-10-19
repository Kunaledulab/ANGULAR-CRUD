import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudClient';
  apiUrl = 'http://localhost:3000'
  constructor(private http: HttpClient){

  }
  
  insert(id: any,firstname: any,lastname: any){
    this.http.post<any[]>(this.apiUrl+"/details",{
      id:id,
    firstname:firstname,
    lastname:lastname}).subscribe(data => 
      console.log(data));

    console.log("data inserted !");
    
  }
  getData(){
    this.http.get<any[]>(this.apiUrl+"/details").subscribe(data => 
      alert(JSON.stringify(data)));
      
  }

  getDataId(id:any){
    this.http.get<any[]>(this.apiUrl+"/details1?id="+id).subscribe(data => 
      alert(JSON.stringify(data)));
      
  }

  delete(id : any){
    this.http.delete<any[]>(this.apiUrl+"/details?id="+id).subscribe(data => 
      alert(JSON.stringify(data)));
      
  }

  update(id: any,firstname: any,lastname: any){
    this.http.put<any[]>(this.apiUrl+"/details?id="+id,{
      id:id,
    firstname:firstname,
    lastname:lastname}).subscribe(data => 
       console.log(data));
      // alert(JSON.stringify(data)));
  }
}
