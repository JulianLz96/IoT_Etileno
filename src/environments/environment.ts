// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_base: 'https://i3vahk4356.execute-api.us-east-1.amazonaws.com/Test/',
  url_cuentas: 'https://5nkzly23pk.execute-api.us-east-1.amazonaws.com/prod',
  url_tableu: 'https://us-west-2b.online.tableau.com/t/rasandbox/views/ReportForIot/Dashboard1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link',
  url_login: 'https://iot-equipo6.auth.us-east-1.amazoncognito.com/login?client_id=48v9fpc23ldq4jbblkpmddbpmm&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:4200/logIn',
  url_singin: 'https://iot-equipo6.auth.us-east-1.amazoncognito.com/signup?client_id=48v9fpc23ldq4jbblkpmddbpmm&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:4200/logIn'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
