/**
 * TearDate
 *
 * Extends the functionality of JavaScript's Date object
 * adds two new methods getShort and getLong that return a TearDateOutput
 * @extends {Date}
 * @param {Options} [config]
 * @method getShort
 * @method getLong
 *
 */
export class TearDate extends Date {
  config= {};

  constructor(config) {
    super(config.date);
  }

 getShort() {
    return {
      date: this.getDate(),
      day: daysDic.short[this.getDay()],
      month: monthsDic.short[this.getMonth()],
      year: this.getFullYear()
    };
  }

   getLong() {
    return {
      date: this.getDate(),
      day: daysDic.short[this.getDay()],
      month: monthsDic.short[this.getMonth()],
      year: this.getFullYear()
    };
  }
}



// Day & Month Dictionaries
const monthsDic = {
  short: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  long: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};

const daysDic = {
  short: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  long: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]
};
