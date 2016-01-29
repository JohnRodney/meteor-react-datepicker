DatePicker = React.createClass({
  propTypes: {
    defaultDate: React.PropTypes.string,
  },

  getInitialState() {
    this.id = Meteor.uuid();
    return null;
  },

  componentDidMount() {
    Tiny(document.getElementById(this.id));
  },

  getDate() {
    return document.getElementById(this.id).value;
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
