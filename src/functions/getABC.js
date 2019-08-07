let abcRetry = 0;
function getABC() {
  if (window.lpTag.section === '') {
    window.lpTag.section = []
  }
  // set ABC eligibility
  setTimeout(() => {
    if (typeof (UAParser) !== "undefined") {
      var ua = new UAParser;
      var os = ua.getOS();
      var device = ua.getDevice();
      os._version = os.version.split(".")[0] + '.' + os.version.split(".")[1];
      console.log("os: " + os.name);
      console.log("version: " + os._version);
      if (os.name == "iOS" && Number(os._version) >= 11.3) {
        console.log("ABC compatible!");
        lpTag.section.push("ABC");
      } else if (os.name == "iOS" && Number(os._version) <= 11.1) {
        console.log("device not compatible!");
        lpTag.section.push("unsupportedDevice");
      }
      if (device.type == "mobile" || device.type == "tablet") {
        lpTag.section.push(device.type);
      } else {
        lpTag.section.push("desktop");
      }
    } else {
      i++;
      if (i < 10) {
        getABC();
      } else {
        console.log('UAParser not loaded');
      }
    }
  }, 500);
}

export default getABC;
