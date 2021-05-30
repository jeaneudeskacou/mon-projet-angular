export class AppareilService {
    appareils = [
        {
          name:"Machine à Laver",
          status:false,
          id: 1
        },
        {
          name:"Télévision",
          status:true,
          id: 2
        },
        {
          name:"Ordinateur",
          status:false,
          id: 3
        }
      ];

    getAppareilById(id: number){
      const appareil = this.appareils.find(
        (appareilObject) => {
          return appareilObject.id === id;
        }
      );
      return appareil;
    }

    getAppareilStatus(id: number){
      const appareil = this.getAppareilById(id);
      return appareil.status
    }

    getAppareilReadableStatus(id: number){
      const appareilStatus = this.getAppareilStatus(id);
      return appareilStatus ? "Allumé" : "Eteint";
    }
      switchOnAll(){
          for(let appareil of this.appareils){
              appareil.status = true;
          }
      }

      switchOffAll(){
          for(let appareil of this.appareils){
              appareil.status = false;
          }
      }

      switchOnOne(index: number){
          this.appareils[index].status = true;
          console.log("here");
      }

      switchOffOne(index: number){
          this.appareils[index].status = false;
      }
}