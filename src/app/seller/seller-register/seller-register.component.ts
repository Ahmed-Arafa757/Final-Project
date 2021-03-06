
import { SellerAuthService } from 'src/app/_services/seller-auth.service';
import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/_model/sellers';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.scss']
})
export class SellerRegisterComponent implements OnInit {
  seller:Seller={sellerName:'' , email: '', password: '', repeatedPassword: '', phone:'' };
  errors = '';
  showPass:Boolean=false;
  dontMatch:Boolean=false;
  constructor(
    private sellerAuthService:SellerAuthService, 
    private router: Router,
    private activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.seller.sellerName = params.name;
      this.seller.email = params.email;
      this.seller.provider = params.provider;
    });
    if(this.seller.provider === undefined)
    {
      this.seller.provider = '';
    }
  
  }

  onRegister() {
    
    this.sellerAuthService.register(this.seller).subscribe(
      (res) => {
        console.log(res); 
        this.sellerAuthService.login(this.seller).subscribe(
          (res:any)=>{
            
            let myId=res.seller._id
            let myToken=res.token
    
            var sellerLoginStorage = {'_id': myId, 'token':myToken};
             localStorage.setItem('sellerLoginStorage', JSON.stringify(sellerLoginStorage));
             this.router.navigate(['seller/home']);
           
          },
          (err)=>{this.errors = err.error;
            console.log(err.error)},
          () => { },
          )
      },
      (err) => {
        this.errors = err.error.err;
        console.log(err);
      },
      () => { },
    );
  }

checkPassword(){
  var password = document.getElementById('password') as HTMLInputElement;
  var repeatedPass=document.getElementById('confirm-password') as HTMLInputElement;
console.log(password.value,repeatedPass.value)
  if(password.value===repeatedPass.value){
    this.dontMatch=false
  }else{
    this.dontMatch=true
  }
}

  showPassword() {
    var x = document.getElementById('password') as HTMLInputElement;
    if (x.type === 'password') {
      x.type = 'text';
      this.showPass=true
    } else {
      x.type = 'password';
      this.showPass=false
    }
  }
}
