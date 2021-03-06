define(["core/Logger", "core/CoreAPI", "components/List/ListModel"], function(t, e, n) {
    return e.Class.extend(n, {
        add: function(t, n, s) {
            return "string" == typeof t && t.indexOf("stayfocusd") >= 0 ? (alert(e.Chrome.Translation.get("cannotBlockStayFocusd")), !1) : this._parent.add(t, n, s)
        },
        addListeners: function() {
            var t = this;
            this._parent.addListeners(), e.PubSub.listen("Settings.data.refreshed", function(e, n) {
                n.changes.blacklist && t.load()
            })
        }
    })
});
