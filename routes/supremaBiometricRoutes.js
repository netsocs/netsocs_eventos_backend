const express = require("express");
const router = express.Router();
const HikvisionBiometric = require("../controllers/supremaBiometricController");

router.get("/openDoor", (req, res) => {
  HikvisionBiometric.generateEvent({
    eventType: "openDoor",
    res: res,
    req: req,
  });
});

router.get("/closeDoor", (req, res) => {
  HikvisionBiometric.generateEvent({
    eventType: "closeDoor",
    res: res,
    req: req,
  });
});

router.get("/verificationFail", (req, res) => {
  HikvisionBiometric.generateEvent({
    eventType: "verificationFail",
    res: res,
    req: req,
  });
});

router.get("/verificationFailFace", (req, res) => {
  HikvisionBiometric.generateEvent({
    eventType: "verificationFailFace",
    res: res,
    req: req,
  });
});

router.get("/verificationFailCard", (req, res) => {
  HikvisionBiometric.generateEvent({
    eventType: "verificationFailCard",
    res: res,
    req: req,
  });
});

router.get("/verificationFailFingerprint", (req, res) => {
  HikvisionBiometric.generateEvent({
    eventType: "verificationFailFingerprint",
    res: res,
    req: req,
  });
});

module.exports = router;
