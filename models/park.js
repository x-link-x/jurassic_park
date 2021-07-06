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

    mostPopular() {
        let mostPopular = this.dinosaurs[0];
        for (let dinosaur of this.dinosaurs) {
            if (dinosaur.guestsAttractedPerDay > mostPopular.guestsAttractedPerDay) {
                mostPopular = dinosaur;
            }
        }
        return mostPopular;
    }

    oneSpecies(species) {
        const oneSpecies = [];
        for (let dinosaur of this.dinosaurs) {
            if (dinosaur.species === species) {
                oneSpecies.push(dinosaur);
            }
        }
        return oneSpecies;
    }

    calculateDailyVisitors() {
        let totalVisitors = 0;
        for (let dinosaur of this.dinosaurs) {
            totalVisitors += dinosaur.guestsAttractedPerDay;
        }
        return totalVisitors;
    }

    calculateYearlyVisitors() {
        return this.calculateDailyVisitors() * 365;
    }

    calculateAnnualRevenue() {
        return this.calculateYearlyVisitors() * this.ticketPrice;
    }

    removeDinosaursBySpecies(species) {
        for (let dinosaur of this.dinosaurs) {
            if (dinosaur.species === species) {
                let dinosaurIndex = this.dinosaurs.indexOf(dinosaur);
                this.dinosaurs.splice(dinosaurIndex, 1);
            }
        }
    }

    getDietTypes() {
        let dietTypes = {};
        for (let dinosaur of this.dinosaurs) {
            if (dietTypes[dinosaur.diet]) {
                dietTypes[dinosaur.diet] += 1;
            } else {
                dietTypes[dinosaur.diet] = 1;
            }
        }
        return dietTypes;
    }
}

module.exports = Park;