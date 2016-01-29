DatePicker = React.createClass({

  statics: {
    getDate() {
      return document.getElementById(this.id).value;
    }
  },

  propTypes: {
    data: React.PropTypes.object,
  },

  getInitialState() {
    this.id = Meteor.uuid();
    return null;
  },

  componentDidMount() {
    Tiny(document.getElementById(this.id));
  },

  getCurrentDate() {
    return this.props.defaultDate || moment().format('MM/DD/YYYY');
  },

  render() {
    return (
      <div>
        <input id={this.id} value={this.getCurrentDate()} />
      </div>
    );
  },
});
