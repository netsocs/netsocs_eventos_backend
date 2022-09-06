// Objects base
const EventBase = {
  // This is the base class for all events.
  // It is used to create a new event object.
  deviceType: "AccessControl",
  eventType: "openDoor",
  eventTime: "2016-01-01T00:00:00.000Z",
  eventData: {
    deviceIp: "0.0.0.0",
    doorId: "1",
    doorName: "Door 1",
    doorStatus: "open",
  },
};

const successMsj = {
  success: true,
  message: "",
  data: {},
  error: null,
};

// Utils function

exports.generateSuccessMsg = (msg, data) => {
  const result = { ...successMsj };
  result.message = msg;
  result.data = data;
  return result;
};

exports.generateEvent = ({ deviceType, eventType, eventData }) => {
  const result = { ...EventBase };
  result.deviceType = deviceType;
  result.eventType = eventType;
  result.eventTime = new Date().toISOString();
  result.eventData = eventData ? eventData : EventBase.eventData;
  return result;
};
