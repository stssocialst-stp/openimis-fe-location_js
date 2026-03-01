import React from "react";
import { ConstantBasedPicker } from "@stssocialst-stp/fe-core";

import { HEALTH_FACILITY_STATUSES } from "../constants";

const HealthFacilityStatusPicker = (props) => {
  return (
    <ConstantBasedPicker
      module="location"
      label="healthFacilityStatus"
      constants={HEALTH_FACILITY_STATUSES}
      {...props}
    />
  );
};

export default HealthFacilityStatusPicker;