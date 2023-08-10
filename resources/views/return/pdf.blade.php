<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Return - #{{ $data['code'] }}</title>
  <style type="text/css">
    @page {
      margin: 0px;
    }

    body {
      margin: 0px;
    }

    * {
      font-family: Verdana, Arial, sans-serif;
    }

    a {
      color: #fff;
      text-decoration: none;
    }

    .invoice h3 {
      margin-left: 15px;
    }

    .container {
      padding: 30px;
    }

    .logo {
      height: 45px;
    }

    .container p {
      font-size: 15px;
    }

    .table td {
      vertical-align: 'top';
    }

    .information .table {
      margin-top: 35px;
    }

    .invoice .table {
      border-collapse: collapse;
      text-transform: uppercase;
    }

    .invoice .table th {
      border-top: dotted 2px;
      border-bottom: groove 3px solid #dedede;
      font-size: 13px;
    }

    .invoice .table tbody td {
      margin: 0;
      border-bottom: dotted 1px;
      padding-top: 12px;
      padding-bottom: 10px;
      font-size: 12px;
    }

    .invoice .table tfoot td {
      margin: 0;
      border-top: double 3px;
      padding-top: 12px;
      padding-bottom: 10px;
      font-size: 12px;
    }

    .footer p {
      font-size: 8px;
      font-weight: bold;
      line-height: .4;
    }

    .footer span {
      font-size: 10px;
      font-weight: bold;
    }

  </style>
</head>

<body>

  <div class="container">
    <div class="information">
      <table width="100%" class="table" style="margin-bottom:0px">
        <tr>
          <td width="40%">
            <img class="logo" src="{{ public_path('images/logo/elco_logo_vertical.png') }}" />
          </td>
          <td width="30%">
            <p style="font-size:24px;text-align:center"><strong>Return</strong></p>
          </td>
          <td width="30%">
            <p style="margin-bottom:0px;"><strong>Date: </strong>{{ $data['date'] }}</p>
          </td>
        </tr>
      </table>
      <hr style="margin-top:0px;">
      @if (!$data['is_created_by_customer'])
        <p>Placed by <strong>{{ $data['created_by_detail']['code'] }}</strong></p>
        <hr>
      @endif
    </div>
    <hr style="height:.3px;border:none;color:#c9c9c9;background-color:#c9c9c9;" />
    <table width="100%" class="table">
      <tr>
        <td width="40%">
          <p>CUSTOMER ACCOUNT NUMBER</p>
          <p>{{ $data['customer_id'] }}</p>
        </td>
        <td>
          <p>CUSTOMER ACCOUNT NAME</p>
          <p>{{ $data['customer']['name'] }}</p>
        </td>
      </tr>

    </table>

    <div class="invoice">
      <table width="100%" class="table">
        <thead>
          <tr>
            <th align="left">REASON</th>
            <th align="left">ITEM #</th>
            <th align="left">PO#/ORDER#/DATE</th>
            <th align="left">QTY</th>
            <th align="left">NOTE</th>
            <th align="left">PRICE</th>
          </tr>
        </thead>
        <tbody>
          @foreach ($data['returns'] as $return)
            <tr>
              <td align="left">{{ $return['reason'] }}</td>
              <td align="left">{{ $return['item_id'] }}</td>
              <td align="left">{{ $return['order'] ? $return['order']['po_number'] . ' - ' . $return['order']['number'] . ' - ' . $return['order']['date'] : '' }}</td>
              <td align="left">{{ $return['quantity'] }}</td>
              <td align="left">{{ $return['note'] }}</td>
              <td align="left">$ {{ $return['price'] }}</td>
            </tr>
          @endforeach
        </tbody>

        <tfoot>
          <tr>
            <td colspan="5">TOTAL</td>
            <td align="right" class="gray">$ {{ number_format($data['subtotal'], 2) }}</td>
          </tr>
          <tr>
            <td colspan="5">OVER 6 MONTHS</td>
            <td align="right" class="gray">- $ {{ number_format($data['over_six_month_price'], 2) }}</td>
          </tr>
          <tr>
            <td colspan="5">RESTOCK (30%)</td>
            <td align="right" class="gray">- $ {{ number_format($data['restock_price'], 2) }}</td>
          </tr>
          <tr>
            <td colspan="5">ESTIMATED RETURN</td>
            <td align="right" class="gray">$ {{ number_format($data['estimated_return_price'], 2) }}</td>
          </tr>
        </tfoot>
      </table>
      <p style="margin-top:36px;color:red;">
        THIS RGA HAS BEEN SUBMITTED FOR REVIEW, PLEASE DO NOT TAKE A CREDIT UNTIL ONE HAS BEEN SENT TO YOU AND APPROVED
      </p>
    </div>

    <div class="footer" style="position: absolute; bottom: 0;">
      <hr>
      <table width="100%">
        <tr>
          <td align="left" style="width: 80%;">
            <p>2042 E. Vernon Ave., Vernon, CA 90058 • Tel (323) 231-2600 Fax (323) 231-3200 • elcolighting.com</p>
            <p>© ELCO Lighting 2020. All rights reserved • Rev. 23 Nov 2020 • ELCO Lighting reserves the right to make specification and design changes without notice.</p>
          </td>
          <td align="right" style="width: 20%;">
            <span>Page 1 of 1</span>
          </td>
        </tr>

      </table>
    </div>
  </div>
</body>

</html>
