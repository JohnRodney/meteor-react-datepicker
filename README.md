#React Date Picker
Is a simple wrapper for the TinyDatePicker. Through frustration of not finding a good date picker to
play nice with mobile devices this was put together to save others the time and frustrations.

##Install
`meteor add jrod:react-datepicker`

##Use
```
const SomeComponent = React.createClass({
  testDate(e){
    console.log(this.refs.datepicker.getDate());
  },

  render() {
    return (
      <div>
        <DatePicker ref="datepicker" />
        <button onClick={this.testDate}>Test</button>
      </div>
    );
  },
});
```

##Style
To overwrite the colors you since your css will load last you can just overwrite any rules.

Ex:
```
.dp-today:active, .dp-close:active, .dp-clear:active, .dp-selected{
  background-color: $yourColor;
}
```
