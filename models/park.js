class Park {

    constructor(name, ticketPrice, dinosaurs) {
        this.name = name;
        this.ticketPrice = ticketPrice;
        this.dinosaurs = dinosaurs;
    }

    addDinosaur(dinosaur) {
        this.dinosaurs.push(dinosaur);
    }

    removeDinosaur(dinosaur) {
        let dinosaurIndex = this.dinosaurs.indexOf(dinosaur);
        this.dinosaurs.splice(dinosaurIndex, 1);
    }
}

module.exports = Park;