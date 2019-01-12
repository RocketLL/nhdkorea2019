AFRAME.registerComponent("scene-changer", {
  schema: {
    from: { type: "string", default: "welcome" },
    to: { type: "string", default: "joseon" }
  },

  init: function() {
    var data = this.data;
    var el = this.el;
    this.clickHandler = function() {
      var from = "scene-" + data.from;
      var to = "scene-" + data.to;
      var sceneFrom = document.getElementById(from);
      var sceneTo = document.getElementById(to);
      sceneFrom.setAttribute("visible", "false");
      sceneTo.setAttribute("visible", "true");

      var c = sceneFrom.children;

      for (i = 0; i < c.length; i++) {
        c[i].setAttribute("visible", "false");
      }

      el.removeEventListener("click", this.clickHandler);
    };
    el.addEventListener("click", this.clickHandler);
  }
});