<h1>Login Plzzz</h1>

{{ Form::open(['route' => 'sessions.store']) }}

	<ul>
		<li>
			{{ Form::label('email', 'email') }}
			{{ Form::text('email') }}
		</li>

		<li>
			{{ Form::label('password', 'password') }}
			{{ Form::password('password') }}
		</li>

		<li>
			{{ Form::submit('Login') }}
		</li>
	</ul>

{{ Form::close() }}