class model {
    #autok = [];
    constructor() {
        console.log("model");
        
    }

    adatTorol(adat) {
        console.log("törlöm", adat)
        delete this.#autok[adat];
    }


    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                this.#autok = data.auto;

                console.log(this.#autok);
                myCallBack(this.#autok);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}
export default model;
