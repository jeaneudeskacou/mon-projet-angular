import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRouteSnapshot, CanActivate, Route, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
    
    constructor(private authService: AuthService,
                private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean{
        if(this.authService.isAuth){
            return true;
        }
        else{
            this.router.navigate(["/auth"]);
            return false;
        }
    }
}