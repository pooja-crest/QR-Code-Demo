<!DOCTYPE html>
<html>

<body>
  <div>
    <p>A new user registration detected</p>
    <ul>
      <li>Email address: <b>{{ $data['code'] }}</b></li>
      <li>Telephone Number: <b>{{ $data['phone'] }}</b></li>
      <li>Distributor Name: <b>{{ $data['distributor_name'] }}</b></li>
      <li>Customer Account Number: <b>{{ $data['customer_id'] }}</b></li>
      <li>Customer Name: <b>{{ $data['customer_name'] }}</b></li>
      <li>Street: <b>{{ $data['street'] }}</b></li>
      <li>City: <b>{{ $data['city'] }}</b></li>
      <li>State: <b>{{ $data['state'] }}</b></li>
      <li>Zip: <b>{{ $data['zip'] }}</b></li>
    </ul>
  </div>
  <br>
  <p>Best regards,<br>
    ELCO lighting CS<br>
    2042 E Vernon Ave. Vernon CA 90058<br>
    T. 323 231 2600 W. elcolighting.com</p>
</body>

</html>
