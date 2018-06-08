@extends('layouts.app');

@section('content')
<form action = "insert.php" method ="POST">
        First Name:
        <input type = "text" name = "firstname"><br><br>
        Last Name:
        <input type = "text" name = "lastname"><br><br>
        Birthday:
        <input type = "date" name = "birthday"><br><br>
        Address:
        <input type = "text" name = "address"><br><br>
        Memo:
        <input type = "text" name = "memo" ><br><br>
        <input type = "submit" name = "Insert" value = "Insert"><br>
 </form>
<form action="/view" method ="POST">
 <input type="submit" name="View" value = "View"><br>
</form>
@endsection

