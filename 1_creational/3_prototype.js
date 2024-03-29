const car = {
    wheels: 4,

    init() {
        console.log(`У меня ${this.wheels} колеса, мой владелец ${this.owner}`)
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Dmitri'
    }
})

console.log(carWithOwner.__proto__ === car)
carWithOwner.init()