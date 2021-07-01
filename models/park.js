class Park {

    constructor(name, ticketPrice, dinosaurs) {
        this.name = name;
        this.ticketPrice = ticketPrice;
        this.dinosaurs = dinosaurs;
    }

    addDinosaur(dinosaur) {
        this.dinosaurs.push(dinosaur);
    }
}

module.exports = Park;