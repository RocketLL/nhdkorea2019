AFRAME.registerComponent("camera-changer", {
    schema: {
      from: { type: "string", default: "look" },
      to: { type: "string", default: "orbit" }
    },

    init: function() {
      var data = this.data;
      var el = this.el;
      this.clickHandler = function() {
        var cameraFrom = document.getElementById(data.from);
        var cameraTo = document.getElementById(data.to);
        cameraFrom.setAttribute("camera", "active: false");
        cameraFrom.setAttribute("visible", "false");
        cameraTo.setAttribute("camera", "active: true");
        cameraTo.setAttribute("visible", "true");

        el.removeEventListener("click", this.clickHandler);
      };
      el.addEventListener("click", this.clickHandler);
    }
  });