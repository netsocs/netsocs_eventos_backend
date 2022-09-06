const io = require("../domain/wsConnection");
const EventObjectBase = require("../models/EventObjectBase");

exports.generateEvent = ({
  eventType,
  deviceType,
  res,
  req,
  generateEventData,
}) => {
  eventData = generateEventData(req, eventType);
  arguments.eventData = eventData;
  const eventInfo = EventObjectBase.generateEvent({
    deviceType: deviceType,
    eventData: eventData,
  });
  sendWebsocketMessage(io, eventInfo);
  sendJSONSuccessMsg(res, `${eventType} event sended`, eventInfo);
};

const sendWebsocketMessage = (io, data) => io.sockets.emit("message", data);

const sendJSONSuccessMsg = (res, msg, data) =>
  res.json(EventObjectBase.generateSuccessMsg(msg, data));
