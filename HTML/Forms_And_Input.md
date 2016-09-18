First, let's quickly go over one really basic thing about the internet.  When you visit a website, your computer (specifically, your web browser) asks another computer (the other computer is called a server) for the data.  This communication is usually done through **HTTP** - **H**yper **T**ext **T**ransfer **P**rotocol

There are two or three principle ways that a web page can allow a user to talk with the server.  Two of them use JavaScript, so if you are still learning HTML, then you don't have to consider them yet.

Forms are HTML's way of taking a user's input and sending it to the server.  Note: it will either reload or redirect the webpage, depending on the action attribute (see below).

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

So, there's our form.  But it needs input.  For this, we use the input tag.  (Exceptions include the button and textarea tags)  Also, if you don't recognize some of the inputs, they will all show up in your test document!  
the input tag has a few really important attributes:  
name=" " (the name of the input)  
value=" " (the value of the input i.e. what data will be sent to the server)  
placeholder=" " (the gray text that tells you what the field is)  
type=" " (the type of input.  Either: text, email, number (not used often), password, button, checkbox, radio, or submit)

So, let's add one of each input to our form:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Forms and Input Test Page</title>
  </head>
  <body>
    <form method="GET" action="http://foo.com">
      <input type="text" name="txt" placeholder="Input Type=Text" />
      <br>
      <input type="email" name="email" placeholder="Input Type=Email" />
      <br>
      <input type="number" name="num" placeholder="Input Type=Number" />
      <br>
      <input type="password" name="pw" placeholder="Input Type=Password" />
      <br>
      <input type="button" name="btn" placeholder="Input Type=Button" />
      <br>
      <input type="checkbox" name="chk" placeholder="Input Type=Checkbox" />
      <br>
      <input type="radio" name="radio" placeholder="Input Type=Radio" />
      <br>
      <input type="submit" value="Input Type=Submit" />
    </form>
  </body>
</html>
```

Each of these input types do different things:
-Text allows any kind of text to be entered  
-Email will actually check to make sure an email address was entered  
-Number allows only numbers, surprisingly  
-Password has those bullets that replace the text  
-Button...you know what a button does, right?  
-Checkbox allows the user to select multiple items (if there were 3 checkboxes in the form, the user could choose 0-3)  
-Radio allows the user to select only one of the radio buttons provided (if there were 3 radio buttons in the form, the user could choose only one)  
-Submit is required for every HTML form (unless you use JavaScript).  It is a button, but when clicked, tells the form to send the data.  

Note: use the value attribute instead of the placeholder attribute for button and submit!

What data is actually being sent to the server?  The name and value of each input.  You will see.

```
Windows Instructions:
1) Press CTRL + S
2) Change "Text Document" to "All Files"
3) Save to your desktop as "input_test.html"

Mac Instructions:
1) File -> Save
2) Make sure it is not set to "Rich Text Document" or anything similar.
3) Save to your desktop as "input_test.html"
```
Now double click the icon on your desktop, and the file should open in a web browser.
