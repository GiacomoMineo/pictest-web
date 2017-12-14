import PubSub from 'pubsub-js'

const events = {
  unauthorized: 'unauthorized'
}

function publish (eventName, eventData) {
  PubSub.publish(eventName, eventData)
}

function subscribe (eventName, callback) {
  return PubSub.subscribe(eventName, callback)
}

export default class EventsService {
  static unauthorized () {
    publish(events.unauthorized)
  }

  static onUnauthorized (callback) {
    return subscribe(events.unauthorized, callback)
  }
}
