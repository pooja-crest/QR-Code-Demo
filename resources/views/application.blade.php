<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="shortcut icon" href="favicon.ico" />


  <title>Elco Purchase</title>
  <!-- Styles -->
  <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">
  <link rel="stylesheet" href="{{ asset(mix('css/main.css')) }}">
  <link rel="stylesheet" href="{{ asset(mix('css/feather-icon.css')) }}">
  <link rel="stylesheet" href="{{ asset(mix('css/variables.css')) }}">

  <link rel="shortcut icon" href="{{ asset('favicon.png') }}">
</head>

<body>
  <noscript>
    <strong>We're sorry but Elco Purchase doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <div id="app">
  </div>

  <!-- <script src="js/app.js"></script> -->
  <script src="{{ asset(mix('js/main/app.js')) }}"></script>

</body>

</html>