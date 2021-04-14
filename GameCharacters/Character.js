import { Axe, Knife, Sword, Weapon } from "./Weapon.js";

class Character {
    
    constructor(name) {
        this.name = name;
        this.weapon = new Weapon();
    }

    fight() {
        console.log(`• ${this.name} te empieza a ${this.weapon.useWeapon()} y mueres.`);
    }
}

export class Queen extends Character {

    constructor(name) {
        super(name);
        this.weapon = new Knife();
    }
}

export class King extends Character {
    
    constructor(name) {
        super(name);
        this.weapon = new Weapon();
    }

}

export class Troll extends Character {

    constructor(name) {        
        super(name);
        this.weapon = new Axe();
    }
}

export class Knight extends Character {

    constructor(name) {
        super(name);
        this.weapon = new Sword();
    }
}