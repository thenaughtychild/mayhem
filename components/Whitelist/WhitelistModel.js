define(["core/Logger","core/CoreAPI","components/List/ListModel"],function(e,t,n){return t.Class.extend(n,{add:function(e,n,i){if(t.StayFocusd.isMaxTimeAllowedExceeded()){var a=t.Component.get("Blacklist","blacklist");if(a.model.has(e))return alert(t.Chrome.Translation.get("cannotAllowBlockedSiteOnceTimeIsUp")),!1;if(e.indexOf("*")>-1)return alert(t.Chrome.Translation.get("cannotAllowSitesUsingWildcardsOnceTimeIsUp")),!1}return t.NuclearOption.isActive()?(alert(t.Chrome.Translation.get("cannotAddAllowedSitesDuringNuclearOption")),!1):this._parent.add(e,n,i)},addListeners:function(){var e=this;this._parent.addListeners(),t.PubSub.listen("Settings.data.refreshed",function(t,n){n.changes.whitelist&&e.load()})},canRemoveSiteWhenMaxTimeAllowedExceeded:function(){return!0}})});