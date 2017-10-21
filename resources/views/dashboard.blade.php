@extends('layouts.app')

@section('content')
    <div class="container-fluid dashboard">
        <div class="row">
            <div class="col-md-7">
                <div class="panel panel-default panel-dashboard">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            News
                            <a href="/news" class="pull-right">View all</a>
                        </h3>
                    </div>
                    <div style="height:875px; overflow-y:scroll;">
                        <news-list></news-list>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="panel panel-default panel-dashboard">
                    <div class="panel-heading">
                        <he class="panel-title">
                            Tasks
                            <a href="/tasks" class="pull-right">View all</a>
                        </he>

                    </div>
                    <div class="panel-body" style="height:400px; overflow-y:scroll;">
                        <tasks></tasks>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="panel panel-default panel-dashboard">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Contacts
                            <a href="/contacts" class="pull-right">View all</a>
                        </h3>
                    </div>
                    <div class="panel-body" style="height:400px; overflow-y:scroll;">
                        <contacts-widget></contacts-widget>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="panel panel-default panel-dashboard">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Files
                            <a href="/files" class="pull-right">View all</a>
                        </h3>
                    </div>
                    <div class="panel-body" style="height:300px; overflow-y:scroll;">
                        <files-widget></files-widget>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
@endsection
