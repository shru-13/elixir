function validate(){
    var email1=document.myform.email.value;  
    var password1=document.myform.password.value;  
    var a=email1.indexOf("@");
    var b=email1.lastIndexOf(".");

if(a<1 || b<a+2 || b+2>=email1.length ) 
{
    alert("Please enter valid email ID");
}   
  
if (email1==null || email1=="")
{   
    alert("Email cannot be blank");
  return false; 
} 
else if(password1.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
}