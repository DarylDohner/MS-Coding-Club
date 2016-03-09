So, I have no clue where you are in your JS tutorial right now, since our CC attendence hasn't really overlapped since early January, so this might be too easy or too difficult -- we'll see.
This project will involve some research on your part, since it will require knowledge of how to have JS interact with HTML, something Codecademy unfortunately won't teach you in the JS tutorial.

The Objective: Invert the text on page.html after 1750 milliseconds.  In other words, after 1.75 seconds, make the last letter first and the first letter last.

Files provided:
-page.html: this is the HTML page with the text, and it is already linked to foo.js
-foo.js: this is blank, but it's where you should be putting your JS so you can test the page

The easiest way to get this to work would be to make an HTML file on your desktop, name it page.html, copy / paste in the code from github, then make a JS file on your desktop, name it foo.js, and start working.  To test your code, just go to your desktop, and open page.html with your browser.

These are the functions / properties you will need to research:
document.getElementById()
.innerHTML
setTimeout()

Note: the first parameter of setTimeout is a callback function, which basically means you do this:
```js
setTimeout(function()
           {
             /* code to execute after t_m milliseconds */
           }, t_m);
```

To invert the text, you will need to do a for loop like this:
```js
for(var i=0;i<text.length;i++)
{
  newTextArray[i]=text[text.length-i];
{
```
You will need to be able to explain to me how that works at the next CC session.

Good Luck!
