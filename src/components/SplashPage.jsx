import React from 'react';
import SkiDayList from './SkiDayList';
import SkiDayCount from './SkiDayCount';
import Menu from './Menu';
import AddDayForm from './AddDayForm';
import '../stylesheets/ui.scss';

class SplashPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allSkiDays: [
        {
          resort: 'Squaw Valley',
          date: new Date('1/2/2016'),
          powder: true,
          backcountry: false
        },
        {
          resort: 'Kirkwood',
          date: new Date('3/28/2016'),
          powder: false,
          backcountry: false
        },
        {
          resort: 'Mt. Tallac',
          date: new Date('4/2/2016'),
          powder: false,
          backcountry: true
        }
      ]
    };
    this.countDays = this.countDays.bind(this);
  }

  countDays(filter) {
    const { allSkiDays } = this.state;
    return allSkiDays.filter(
      (day) => (filter) ? day[filter] : day).length;
  }
  render() {
    return (
      <div className="app">
        <Menu />
        {(this.props.location.pathname === "/") ?
  			  <SkiDayCount total={this.countDays()}
  							 powder={this.countDays(
  							 		"powder"
  							 	)}
  							 backcountry={this.countDays(
  							 		"backcountry"
  							 	)}/> :
  			 (this.props.location.pathname === "/add-day") ?
  			 	<AddDayForm /> :
  			 	<SkiDayList days={this.state.allSkiDays}/>
  			}
      </div>
    );
  }
}


export default SplashPage;
