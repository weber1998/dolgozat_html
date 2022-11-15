import View from "../view/autokView.js";
import Model from "../model/model.js";

class controller {
    constructor() {
        console.log("Controller");
        const autoModel = new Model();
        autoModel.adatBe("../adat.json", this.autoAdatok);



        $(window).on("torol", (event) => {
            console.log("az adat törlésre kerül", event.detail)
        })
    }

    

    autoAdatok(tomb) {
        console.log(tomb);
        let szuloElem=$("body");
        new View(tomb, szuloElem);
    }

    
}
export default controller;