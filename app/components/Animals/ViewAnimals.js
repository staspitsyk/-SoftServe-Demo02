export class ViewAnimals {
    constructor() {

    }

    renderAnimals(arr){
        console.log(arr);
        document.body.innerHTML = `<img src='data:image/jpg;base64,${arr[1].image}'/>`
    }
}

