export class Weapon {

    useWeapon() {
        return "atacar con sus manos";
    }
}

export class Sword extends Weapon {

    useWeapon() {
        return "atacar con una espada";
    }
}

export class Axe extends Weapon {

    useWeapon() {
        return "cortar con un hacha";
    }
}

export class Knife extends Weapon {

    useWeapon() {
        return "cortar con un cuchillo";
    }
}

export class BowAndArrow extends Weapon {

    useWeapon() {
        return "atacar con flecha y arco"
    }
}