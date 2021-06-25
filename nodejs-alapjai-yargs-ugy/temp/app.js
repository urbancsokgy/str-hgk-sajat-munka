const EventEmitter= require ('events')

const eventEmitter = new EventEmitter()

eventEmitter.on('speak', () => {console.log('valami')})
eventEmitter.on('say', () => {console.log('mondok')})
eventEmitter.on('hear', () => {console.log('hallok')})

eventEmitter.emit('speak')
eventEmitter.emit('say')
eventEmitter.emit('hear')