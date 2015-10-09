#Readability
Readabilty.  It's "the ease with which a written text can be understood by a reader".  
For us, it's "the likelyhood of somebody's eyes bleeding when they try to read your code".  
We don't want bloody eyes.  

In HTML, there are a few things to keep in mind.  
  
***Indentation***  
BAD:
```HTML
<!DOCTYPE html>
<html>
<head>
<title>Example</title>
<link rel="stylesheet" type="text/css" href="example.css">
<script src="http://subdomain.ExampleLongDomainName.com/folder/folder/folder/folder/example.js"></script>
</head>
<body>
<header>
<div class="example-1">
<div class="example-2">
<p contenteditable="contenteditable">Example</p>
</div>
</div>
</header>
</body>
</html>
```

***Proper Nesting***  
BAD:
```HTML
<!DOCTYPE html><html><head><title>Example</title><link rel="stylesheet" type="text/css" href="example.css"><script src="http://subdomain.ExampleLongDomainName.com/folder/folder/folder/folder/example.js"></script></head><body><header><div class="example-1"><div class="example-2"><p contenteditable="contenteditable">Example</p></div></div></header></body></html>
```

***Capitalization***  
BAD:
```HTML
<!DOCTYPE HTML>
<HTML>
  <HEAD>
    <TITLE>Example</TITLE>
    <LINK REL="STYLESHEET" TYPE="TEST/CSS" HREF="EXAMPLE.CSS">
    <SCRIPT SRC="HTTP://SUBDOMAIN.EXAMPLELONGDOMAINNAME.COM/FOLDER/FOLDER/FOLDER/FOLDER/EXAMPLE.JS"></SCRIPT>
  </HEAD>
  <BODY>
    <HEADER>
      <DIV CLASS="example-1">
        <DIV CLASS="example-2">
          <P CONTENTEDITABLE="CONTENTEDITABLE">Example</p>
        </DIV>
      </DIV>
    </HEADER>
  </BODY>
</HTML>
```

GOOD:
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
    <link rel="stylesheet" type="text/css" href="example.css">
    <script src="http://subdomain.ExampleLongDomainName.com/folder/folder/folder/folder/example.js"></script>
  </head>
  <body>
    <header>
      <div class="example-1">
        <div class="example-2">
          <p contenteditable="contenteditable">Example</p>
        </div>
      </div>
    </header>
  </body>
</html>
```
