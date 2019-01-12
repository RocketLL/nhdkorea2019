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

      var childrenFrom = sceneFrom.children;
      var childrenTo = sceneTo.children;

      for (i = 0; i < childrenFrom.length; i++) {
        childrenFrom[i].setAttribute("visible", "false");
      }

      for (i = 0; i < childrenTo.length; i++) {
        childrenTo[i].setAttribute("visible", "true");
      }

      el.removeEventListener("click", this.clickHandler);
    };
    el.addEventListener("click", this.clickHandler);
  }
});