/**
 * Little Dispatcher inspired by MicroEvent.js
 * @namespace Barba.Dispatcher
 */
var Dispatcher = {
  /**
   * Event array
   * @memberOf Barba.Dispatcher
   * @type {Object}
   */
  events: {},

  /**
   * Bind a callback to an event
   * @memberOf Barba.Dispatcher
   * @param  {String} eventName
   * @param  {Function} function
   */
  on: function(e, f) {
    this.events[e] = this.events[e] || [];
    this.events[e].push(f);
  },

  /**
   * Unbind
   * @memberOf Barba.Dispatcher
   * @param  {String} eventName
   * @param  {Function} function
   */
  off: function(e, f) {
    if(e in this.events === false)
      return;

    this.events[e].splice(this.events[e].indexOf(f), 1);
  },

  /**
   * Fire the event running all the event associated
   * @memberOf Barba.Dispatcher
   * @param  {String} eventName
   */
  trigger: function(e) {//e, ...args
    if (e in this.events === false)
      return;

    for(var i = 0; i < this.events[e].length; i++){
      this.events[e][i].apply(this, Array.prototype.slice.call(arguments, 1));
    }
  }
};

module.exports = Dispatcher;
