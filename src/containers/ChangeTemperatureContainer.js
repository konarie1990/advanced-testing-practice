import { connect } from "react-redux";
import { setTemp } from "../actions";
import ChangeTemperature from "../components/ChangeTemperature";

// ### ChangeTemperatureContainer.js

// - Create a test file for this container to ensure that when the text box changes, the state currentTemp changes

function mapDispatchToProps(dispatch) {
  return {
    set: function(temp) {
      let action = setTemp(temp);
      dispatch(action);
    }
  };
}
const ChangeTemperatureContainer = connect(
  null,
  mapDispatchToProps
)(ChangeTemperature);
export default ChangeTemperatureContainer;
