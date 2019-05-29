import React from 'react';
import ReactDOM from 'react-dom';
import BookingApp from '../Modules/FEC-Airbnb-BookingCard/client/src/components/BookingApp.jsx';
import CalendarApp from '../Modules/FEC-Airbnb-Calendar/client/src/components/CalendarApp.jsx';
import PhotoApp from '../Modules/FEC-Airbnb-Photo-Gallery/client/src/components/PhotoApp.jsx';
import ReviewApp from '../Modules/FEC-Airbnb-Reviews/client/src/components/ReviewApp.jsx';

ReactDOM.render(<PhotoApp />, document.getElementById('photos'));
ReactDOM.render(<BookingApp />, document.getElementById('booking'));
ReactDOM.render(<CalendarApp />, document.getElementById('calendar'));
ReactDOM.render(<ReviewApp />, document.getElementById('review'));
