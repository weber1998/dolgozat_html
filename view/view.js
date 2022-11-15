class view {

    #elem;

    constructor(elem, szuloElem) {
        console.log("view");
        console.log(szuloElem);
        this.#elem = elem;
        szuloElem.append(   `<div>${elem.ID}</div>`
                            `<div>${elem.marka}</div>`
                            `<div>${elem.tipus}</div>`
                            `<div>${elem.szin}</div>
                            <button class="torol">törlés</button>`)
        this.recordElem = szuloElem.children(`div:last-child`);
        this.torolElem = this.recordElem.children('button');
        
    }

    kattintasTrigger(esemenyNeve) {
        console.log(esemenyNeve)
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem.ID})
        window.dispatchEvent(esemeny);
    }
}
export default view;

