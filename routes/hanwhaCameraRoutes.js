const express = require("express");
const HanwhaCamera = require("../controllers/hanwhaCameraController");
const router = express.Router();

router.get("/cameraDisconnect", (req, res) => {
  HanwhaCamera.generateEvent({
    eventType: "cameraDisconnect",
    res: res,
    req: req,
  });
});

router.get("/storageFailureDetection", (req, res) => {
  HanwhaCamera.generateEvent({
    eventType: "storageFailureDetection",
    res: res,
    req: req,
  });
});

router.get("/networkIssue", (req, res) => {
  HanwhaCamera.generateEvent({ eventType: "networkIssue", res: res, req: req });
});

router.get("/fanErrorEvent", (req, res) => {
  HanwhaCamera.generateEvent({
    eventType: "fanErrorEvent",
    res: res,
    req: req,
  });
});

router.get("/cameraIpConflict", (req, res) => {
  HanwhaCamera.generateEvent({
    eventType: "cameraIpConflict",
    res: res,
    req: req,
  });
});

router.get("/licenseIssueEvent", (req, res) => {
  HanwhaCamera.generateEvent({
    eventType: "licenseIssueEvent",
    res: res,
    req: req,
  });
});

// Analytic Events
router.get("/motionDetected", (req, res) => {
  HanwhaCamera.generateEvent({
    eventType: "motionDetected",
    res: res,
    req: req,
  });
});

router.get("/tamperingDetection", (req, res) => {
  HanwhaCamera.generateEvent({
    eventType: "tamperingDetection",
    res: res,
    req: req,
  });
});

router.get("/defocusDetection", (req, res) => {
  HanwhaCamera.generateEvent({
    eventType: "defocusDetection",
    res: res,
    req: req,
  });
});

router.get("/objectDetection", (req, res) => {
  HanwhaCamera.generateEvent({
    eventType: "objectDetection",
    res: res,
    req: req,
  });
});

router.get("/faceMaskDetection", (req, res) => {
  HanwhaCamera.generateEvent({
    eventType: "faceMaskDetection",
    res: res,
    req: req,
  });
});

router.get("/socialDistanceDetection", (req, res) => {
  HanwhaCamera.generateEvent({
    eventType: "socialDistanceDetection",
    res: res,
    req: req,
  });
});

router.get("/iva", (req, res) => {
  HanwhaCamera.generateEvent({ eventType: "iva", res: res, req: req });
});

router.get("/audioDetection", (req, res) => {
  HanwhaCamera.generateEvent({
    eventType: "audioDetection",
    res: res,
    req: req,
  });
});

module.exports = router;
