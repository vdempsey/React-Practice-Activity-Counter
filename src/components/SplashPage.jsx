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
          date: "2016-01-02",
          powder: true,
          backcountry: false
        }
      ]
    };
    this.addDay = this.addDay.bind(this);
  }

  addDay(newDay) {
    this.setState({
      allSkiDays: [
        ...this.state.allSkiDays,
        newDay
      ]
    });
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
        {(this.props.location.pathname === '/') ?
  			  <SkiDayCount total={this.countDays()}
  							 powder={this.countDays(
  							 		'powder'
  							 	)}
  							 backcountry={this.countDays(
  							 		'backcountry'
  							 	)}/> :
  			 (this.props.location.pathname === '/add-day') ?
  			 	<AddDayForm onNewDay={this.addDay}/> :
  			 	<SkiDayList days={this.state.allSkiDays} filter={this.props.params.filter}/>
  			}
      </div>
    );
  }
}


export default SplashPage;
