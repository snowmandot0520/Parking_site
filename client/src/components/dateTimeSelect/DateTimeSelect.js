import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


class DateTimeSelect extends Component {

    constructor (props) {
        super(props)
        this.state = {
          startDate: moment(),
          endDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
    this.setState({
        startDate: date,
        endDate: date
    });
    }
    

    render() {

        return(
            <div>
                <div>
                    Start Rental at:
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={60}
                        dateFormat="LLL"
                        timeCaption="time"
                    />
                </div>
                <div>
                    End Rental at:
                    <DatePicker
                        selected={this.state.endDate}
                        onChange={this.handleChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={60}
                        dateFormat="LLL"
                        timeCaption="time"
                    />
            </div>
         </div>
        )
    }

}


export default DateTimeSelect;