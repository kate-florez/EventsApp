import React, { Component } from "react";

import "./Event.css";
import image from "../../images/test-image.jpg";
 
class Event extends Component {
  constructor(props) {
    super(props);

    this.formatDateStickerMonth = this.formatDateStickerMonth.bind(this);
    this.formatDateStickerDay = this.formatDateStickerDay.bind(this);
  }

  formatDateStickerMonth(date) {
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    date = date.split(' ');
    console.log(date);
    let day = date.find(d => months.indexOf(d.substr(0, 3).toUpperCase()));
    day = day.substr(0, 3).toUpperCase();
    return months[months.indexOf(day)];
  }

  formatDateStickerDay(date) {
    date = date.split(' ');
    let day = date.find(d => d.includes(','));
    return parseInt(day.split(',')[0]);
  }

  render() {
    const { name, date, address } = this.props.event;
    return (
      <div className="event"> 
        <div className="event-picture">
          <img className="event-image" src={image} alt={`${name}`} />
        </div>
        <div className="event-info-container">
          <div className="event-header">
            <div className="event-info">
              <h3>{name}</h3>
              <p>{date} &bull; {address}</p>
            </div>
            <div className="date-sticker">
              <div className="month">{this.formatDateStickerMonth(date)}</div>
              <div className="day">{this.formatDateStickerDay(date)}</div>
            </div>
          </div>

          <div className="event-message">
            You’re invited to Andrew’s Birthday Fest! on April 14, 2019.
          </div>

          <div className="attendance">
            <div className="rsvp">
              RSVP
            </div>
            <div className="guests">
              You + 14 Guests are attending this event.
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

export default Event;