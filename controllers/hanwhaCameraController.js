const controller = require("./controller");

// Routes handlers

// Gateway Events
exports.generateEvent = ({ eventType, res, req }) => {
  controller.generateEvent({
    eventType: eventType,
    deviceType: "HanwhaCamera",
    res: res,
    req: req,
    generateEventData: generateEventData,
  });
};

const generateEventData = (req, eventType) => {
  return {
    eventType: eventType,
    deviceIp: req.query.deviceIp ? req.query.deviceIp : "0.0.0.0",
  };
};
