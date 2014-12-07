<!DOCTYPE>
<html>

	<head>
		<title>Home</title>
		<link rel="stylesheet" href="{{ asset('admin-assets/css/foundation.min.css') }}" />
		<link rel="stylesheet" href="{{ asset('admin-assets/css/foundation-icons/foundation-icons.css') }}" />
		<link rel="stylesheet" href="{{ asset('admin-assets/css/custom.css') }} "/>
	</head>

	<body>


		<div class="row">
			<div class="icon-bar five-up small-12">

				<a class="item" href="{{ URL::route('admin.index') }}"><i class="fi-home"></i></a>
				<a class="item" href="{{ URL::route('admin.create') }}"><i class="fi-page-add"></i></a>

				<a class="item"><i class=""></i>


				<a class="item" href="{{ URL::route('admin.settings') }}"><i class="fa fa-cogs"></i></a>
				<a class="item" href="{{ URL::route('admin.create') }}"><i class="fi-like"></i></a>
			</div>

		</div>

		<div class="admin-page-content row">

			<div class="large-12">
			

				@yield('content')

			</div>

		</div>


		{{ HTML::script("admin-assets/js/foundation.js") }}
		{{ HTML::script("admin-assets/js/tinymce/tinymce.min.js") }}
		<script type="text/javascript">
		tinymce.init({
		    selector: "textarea",
		    height: 350,
		    removed_menuitems: 'newdocument',
		    plugins: [
		        "advlist autolink lists link image charmap print preview anchor",
		        "searchreplace visualblocks code fullscreen",
		        "insertdatetime media table contextmenu paste"
		    ],
		    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
		});
		</script>

	</body>

</html>