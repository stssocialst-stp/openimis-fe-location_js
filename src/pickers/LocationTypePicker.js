import React, { Component } from "react";
import { ConstantBasedPicker } from "@stssocialst-stp/fe-core";

import { DEFAULT_LOCATION_TYPES } from "../constants";

class LocationTypePicker extends Component {
  render() {
    return (
      <ConstantBasedPicker module="location" label="locationType" constants={DEFAULT_LOCATION_TYPES} {...this.props} />
    );
  }
}

export default LocationTypePicker;
