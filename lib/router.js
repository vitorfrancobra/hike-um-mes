FlowRouter.route("/", {
    action: function(params, queryParams) {
    	BlazeLayout.render("LayoutPrincipal", {main: "inicio"});
    }
});

FlowRouter.route("/sobre", {
    action: function(params, queryParams) {
    	BlazeLayout.render("LayoutPrincipal", {main: "sobre"});
    }
});