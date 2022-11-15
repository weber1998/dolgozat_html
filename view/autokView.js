import View from "./view.js";

class autokView {
    constructor(tomb, szuloElem) {
        
        szuloElem.append(`<main></main>`);
                            
        this.divElem = szuloElem.children("div");
        //console.log("elérhető view: ");
        tomb.forEach(auto => {
            const autoOBJ = new View(auto, this.divElem);
        });
        
    }
}

export default autokView;