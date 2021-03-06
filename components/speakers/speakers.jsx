var React = require('react');
var Speaker = require('./speaker');
module.exports = React.createClass({
	getInitialState: function() {
        return {
            people: ''
        };
    },
	componentWillMount:function(){
		var people = [];
		this.props.people.forEach(function(el,i,as){
			people.push(<Speaker data={el}/>);
		});
		this.state.people = people;
		this.setState(this.state)
	},
	render: function() {
		return(
			<section className="speakers col-xs-12 no-padding-v" id="speakers">
				<div className="container col-md-8 col-md-offset-2">
					<div className="section-title wow fadeInUp text-center">
						<h4>Presentan en este Meetup</h4>
					</div>
					<div className="speaker-slider col-xs-12">
						{this.state.people}
					</div>
				</div>
			</section>
		);
	}	
});
