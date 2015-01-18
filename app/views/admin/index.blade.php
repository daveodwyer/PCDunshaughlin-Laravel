@extends('admin.template')

@section('content')

	<div class="alert-box admin-title">
		<h3>Pages</h3>
	</div>

	<div class="page-list">

		@if (isset($pages))

			<table class="large-12" role="grid">
				<tbody>

					@foreach ($pages as $page)

						<tr>
							<td><span>{{ $page->title }}</span></td>
							<td width="20">{{ link_to_route('page.show', '', [$page->slug], ['class' => 'fi-page-doc' ]) }} </td>
							<td width="20">{{ link_to_route('admin.page.edit', '', [$page->id], ['class' => 'fi-page-edit' ]) }} </td>
							{{ Form::model($page, ['route' => ['admin.page.destroy', $page->id], 'method' => 'delete'])}}
								<td width="20">{{ Form::button('', ['type' => 'submit', 'class' => 'fi-page-delete delete-button' ]) }} </td>
							{{ Form::close() }}
						</tr>

					@endforeach
				</tbody>
			</table>

		@endif
	</div>

@endsection