$(document).ready(function(){
    $(".design").click(function(){
      $("#design").toggle();
      $(".design").toggle()
    });
    $("#design").click(function(){
      $("#design").toggle();
      $(".design").toggle()
    });
    $(".development").click(function(){
        $("#development").toggle();
        $(".development").toggle();
      });
      $("#development").click(function(){
        $("#development").toggle();
        $(".development").toggle();
      });
      $(".management").click(function(){
        $("#management").toggle();
        $(".management").toggle();
      });
      $("#management").click(function(){
        $("#management").toggle();
        $(".management").toggle();
      });
  });
  $(document).ready(function(){
    $(".paragraph").css('display','none');
    var works =["work1", "work2", "work3", "work4", "work5", "work6", "work7", "work8"]
    works.forEach(function(work){
    $("."+work).hover(function(){
      $(".paragraph",this).fadeIn();
      $("."+work).css('opacity','0.4')
       },
    function (){
      $(".paragraph").fadeOut()
      $("."+work).css('opacity','1')
      });
    });
  });

  $(document).ready(function(){
    $("form#formValidity").submit(function(event){
      var name = $("input#merge1").val();
      var email = $("input#merge0").val();
      var message = $("textarea#comment").val();
      if ($("input#merge1").val() && $("input#merge0").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });