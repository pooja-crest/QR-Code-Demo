<!DOCTYPE html>
<html>

<body>
  <div>
    <p>These files are received at FTP server but not yet imported into the site for more than 2 hour:</p>
    <ul>
      @foreach ($files as $file)
        <li>{{ $file }}</li>
      @endforeach
    </ul>
  </div>
  <br>
  <p>Best regards,<br>
    ELCO lighting CS<br>
    2042 E Vernon Ave. Vernon CA 90058<br>
    T. 323 231 2600 W. elcolighting.com</p>
</body>

</html>
