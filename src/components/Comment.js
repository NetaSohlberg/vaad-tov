
import "./Comment.css"

function Comment(){

    return(
        <div class="wrapper fadeInDown">
  <div class="formContent">
    <h3 class="active"> השאר תגובה </h3>
    {/* <h2 class="inactive underlineHover">Sign Up </h2> */}


    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="שם"/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="כתובת מייל"/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="תוכן התגובה"/>
      <input type="submit" class="fadeIn fourth" value="שלח"/>
    </form>


  </div>
</div>

    );

}

export default Comment;