export class AuthService{
    isAuth = false;
    signIn(){
        return new Promise(
            (resole, reject) => {
                setTimeout(
                    () => {
                        this.isAuth = true;
                        resole(true);
                    }, 2000
                );
            }
        );
    }

    signOut(){
        this.isAuth = false;
    }
}