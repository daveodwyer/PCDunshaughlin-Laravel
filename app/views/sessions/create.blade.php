<head>
	<title>Login</title>
	<link rel="stylesheet" href="{{ asset('admin-assets/css/custom.css') }} "/>
</head>
<body>

	<div id="login-cont">
		<h1 id="login-heading">Login</h1>

		<span id="login-error">{{{ Session::get('error') }}}</span>

		{{ Form::open(['route' => 'sessions.store', 'id' => 'login']) }}

		{{ Form::text('user', null, ['placeholder' => 'Username']) }}
		{{ Form::password('password', ['placeholder' => 'Password']) }}
		{{ Form::submit('Login') }}

		{{ Form::close() }}

	</div>


</body>
