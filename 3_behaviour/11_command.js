class MyMath {
  constructor(initialValue) {
    this.num = initialValue
  }

  squre() {
    return this.num ** 2
  }

  cube() {
    return this.num ** 3
  }
}

class Command {
  constructor(subject) {
    this.subject = subject
    this.commandsExecuted = []
  }

  executed(Command) {
    this.commandsExecuted.push(command)
    return this.subject[command]()
  }
}

