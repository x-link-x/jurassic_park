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
        return this.dinosaurs.reduce((mostPopular, dinosaur) =>  {
            if (dinosaur.guestsAttractedPerDay > mostPopular.guestsAttractedPerDay) {
                mostPopular = dinosaur;
            }
            return mostPopular;  
        });
    }

    oneSpecies(species) {
        return this.dinosaurs.filter(dinosaur => dinosaur.species === species);
    }

    calculateDailyVisitors() {
        return this.dinosaurs.reduce((totalVisitors, dinosaur) => totalVisitors + dinosaur.guestsAttractedPerDay, 0);
    }

    calculateYearlyVisitors() {
        return this.calculateDailyVisitors() * 365;
    }

    calculateAnnualRevenue() {
        return this.calculateYearlyVisitors() * this.ticketPrice;
    }

    removeDinosaursBySpecies(species) {
        // this.dinosaurs.forEach(dinosaur => {
        //     if (dinosaur.species === species) {
        //         this.dinosaurs.remove(dinosaur);
        //     }
        // })
        
        // for (let dinosaur of this.dinosaurs) {
        //     if (dinosaur.species === species) {
        //         let dinosaurIndex = this.dinosaurs.indexOf(dinosaur);
        //         this.dinosaurs.splice(dinosaurIndex, 1);
        //     }
        // }
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