var now = new Date();

// implement methods:
now.beginningOfMonth(); // => new instance 2013-03-01 00:00:00
now.endOfMonth(); // => new instance 2013-03-31 23:59:59
now.add({
  days: 3,
  hours: -2,
  minutes: 151,
  seconds: -99
}); // => new instance
