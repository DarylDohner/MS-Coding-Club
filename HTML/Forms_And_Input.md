First, let's quickly go over one really basic thing about the internet.  When you visit a website, your computer (specifically, your web browser) asks another computer (the other computer is called a server) for the data.  This communication is usually done through **HTTP** - **H**yper **T**ext **T**ransfer **P**rotocol

There are two or three principle ways that a web page can allow a user to talk with the server.  Two of them use JavaScript, so if you are still learning HTML, then you don't have to consider them yet.

Forms are HTML's way of taking a user's input and sending it to the server.  

Now, the easiest way to show this is by you following along.  So we will do make a test page.

```
Windows Instructions:
1) Press the Windows button (in between the fn or ctrl and alt keys to the left of the spacebar on your keyboard) + R.
2) Type "notepad.exe" and press enter.  Notepad will open.

Mac Instructions:
1) Open the Applications section of your main drive.
2) Find and Open TextEdit.
```

So, let's start this HTML file, like always, with our <a href="https://github.com/AirPenn/MS-Coding-Club/blob/master/HTML/standard_form.md">Standard Form</a>:
```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

Now, let's add a title so we know what we are testing:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Forms and Input Test Page</title>
  </head>
  <body>
  </body>
</html>
```

So, we start a form using the form tag.  However there are two attributes that every form tag must have if it is going to work: *method* and *action*.
The action is whatever web page you are sending the data to.  Keep in mind, if you do not include the "http://" (called the 'HTTP scheme' btw), the browser will decide that you mean that the web page is on your website, and not on another.
The method is how the form will send it.  99% of the time it will be one of two values: *POST* or *GET*.  POST sends the data through HTTP when the web browser asks the server for data.  GET puts the data into the URL of the webpage.  With GET, users can see the data, however, with POST, users cannot.

So, let's add the form tag to our HTML document.  We will make the method GET so we can see the data.
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Forms and Input Test Page</title>
  </head>
  <body>
    <form method="GET" action="http://foo.com">
    </form>
  </body>
</html>
```

So, there's our form.  But it needs input.  For this, we use the input tag.  (Exceptions include <button> and <textarea>)
<input> has a few really important attributes:
name=" " (the name of the input)
value=" " (the value of the input i.e. what data will be sent to the server)
placeholder=" " (the gray text that tells you what the field is.  Example below.)
<input type="text" placeholder="Click this box and type, and this text will dissappear!" />
p
