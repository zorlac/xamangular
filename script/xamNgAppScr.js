window.xam = window.xam || {  };
window.xam.zorlac = window.xam.zorlac || {  };
window.xam.zorlac.ng = window.xam.zorlac.ng || {  };


xam.zorlac.exception = {

	XamNgException: function ( msg ) {
		this.message  = msg;
		this.name     = 'XamNgException';
        this.toString = function (  ) { return this.name + ': ' + this.message };

	}
};

xam.zorlac.ng.Screen1 = {


    XamAppModule: null,

    Init: function (  ) {

        XamAppModule = angular.module ( 'XamNgApp', [ 'ngRoute' ] );

        XamAppModule.controller ( 'XamController', xam.zorlac.ng.Screen1.XamController );
        XamAppModule.controller ( 'XamController1', xam.zorlac.ng.Screen1.XamController1 );

        XamAppModule.config ( xam.zorlac.ng.Screen1.XamRouter1 );


        xam.zorlac.ng.Screen1.XamAppModule = XamAppModule;

        angular.bootstrap ( document, [ 'XamNgApp' ] );
    },

    XamController: function ( $scope ) {

        $scope.adhocs = [
            { name:'Zorlac',     applied:'Starcraft' },
            { name:'Totnuckers', applied:'Dota' },
            { name:'OccamsRazor',applied:'Diablo' },
            { name:'SpeedGOA',   applied:'Counter Strike' }
        ]

    },

    XamController1: function ( $scope ) {


        $scope.addAdhoc = function (  ) {
            $scope.adhocs.push ( { name: $scope.Adhoc.name.in, applied: $scope.Adhoc.applied.in } );
        }
    },

    XamRouter1: function ( $routeProvider ) {

        $routeProvider
            .when ( '/panel3',
                {
                    controller: 'XamController1',
                    templateUrl: 'fragments/panel3.html'

                }
            )
            .when ( '/panel4',
                {
                    controller: 'XamController1',
                    templateUrl: 'fragments/panel4.html'
                }
            )
            .otherwise (
                {
                    redirectTo: '/'
                }
            );

    }

}
