xdescribe("Evented", function() {
  var object, listener, eventName;

  beforeEach(function() {
    object = {};
    mixin(object, Evented);
    listener = sinon.spy();
    eventName = "click";
    object.on(eventName, listener);
  });

  it("should call litener function", function() {
    object.trigger(eventName);
    listener.called.should.be.true;
  });

  it("should call listener in evented object context", function() {
    object.trigger(eventName);
    listener.calledOn(object).should.be.true;
  });

  it("should call listener function with given arguments", function() {
    var args = ['qq', 123];
    object.trigger(eventName, args);
    listener.calledWith(args[0], args[1]).should.be.true;
  });

  it("should call every listener function", function() {
    var listener2 = sinon.spy();
    object.on(eventName, listener2);
    object.trigger(eventName);

    listener.called.should.be.true;
    listener2.called.should.be.true;
  });

  it("should call only assigned listener function", function() {
    var obj2 = {};
    mixin(obj2, Evented);

    object.trigger(eventName);
    obj2.trigger(eventName);

    listener.calledOnce.should.be.true;
    listener.calledOn(obj2).should.be.false;
  });
});
