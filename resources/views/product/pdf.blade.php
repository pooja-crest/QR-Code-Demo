<!doctype html>
<html lang="en">
@php
// dd($data->description);    
@endphp
<head>
 
  <title>Product - #{{ $data->label }}</title>
  <style type="text/css">
    @page {
      margin: 0px;
    }

    body {
      margin: 0px;
    }

    * {
      font-family: DejaVu Sans, sans-serif;
    }

    a {
      color: #fff;
      text-decoration: none;
    }
    .main-div{
      text-align: center;
      margin:10px 50px;
      /* padding: 20% 10%; */
    }
    .tbl-main{
      padding:20px 50px;
      width: 100%;
    }
    .tbl-main td{
      padding: 8px 0px;
    }
    .fl-r{
      float: right;
      font-weight: 600;
      width: 100px;
    }
    .td-br{
      border-bottom: 1px solid #000;
    }
    .label-txt{
      float: right;
    }

  </style>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>

<body>

  <div class="container">
    <div class="main-div">
      <div>
        <h2>{{$data->title}}</h2>
        <p>{!! $data->description !!}</p>
      </div>
      <table class="tbl-main">
        <tr>
          <td style="width: 50%;">
            <table style="width: 100%">
              <tr>
                <td class="fl-r">Item#:</td>
                <td class="td-br">{{$data->item_no}}</td>
              </tr>
              <tr>
                <td class="fl-r">Supplier:</td>
                <td class="td-br">{{$data->supplier->name}}</td>
              </tr>
              <tr>
                <td class="fl-r">QTY:</td>
                <td class="td-br">{{$data->quantity}}</td>
              </tr>
              <tr>
                <td class="fl-r">Location:</td>
                <td class="td-br">{{$data->location}}</td>
              </tr>
              <tr>
                <td class="fl-r">Lead Time:</td>
                <td class="td-br">{{$data->lead_time}}</td>
              </tr>
            </table>
          </td>
          <td style="width: 50%; padding: 20px 50px;">
            {{-- {{$data->image}}
            {{asset('images/products/products_16915780538012.jpg')}} --}}
            <img src="{{public_path('images/products/'.$data->image)}}" style="width:100px;height:100px;" />
            {{-- <img src="{{$data->image_path}}" style="width:100px;height:100px;"  /> --}}
          </td>
        </tr>
      </table>
      <div>
        <p class="label-txt">{{$data->label}}</p>
      </div>
    </div>
  </div>
</body>

</html>
