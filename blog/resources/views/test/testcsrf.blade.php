<form action='/post_to_this' method="POST">
    <input type="text" name = "name"/>
    <input type="hidden" name="_token" value= "{{csrf_token()}}"/>
    <input type="submit" value="Submit"/>
</form>