#My personal Portfolio

##HTML
link tag:
  The <link> tag defines the relationship between the current document and an external resource.
  The <link> tag is most often used to link to external style sheets or to add a favicon to your website.
  The <link> element is an empty element, it contains attributes only.
rel tag:
  The rel attribute specifies the relationship between the current document and the linked document/resource.
href tag:
  The href attribute specifies the location (URL) of the external resource (most often a style sheet file).
For example,
    <link rel="stylesheet" href="style.css">

script tag:
  The <script> tag is used to embed a client-side script (JavaScript).
  The <script> element either contains scripting statements, or it points to an external script file through the src attribute.
  Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.
src tag:
  The src attribute specifies the URL of an external script file.
  If you want to run the same JavaScript on several pages in a web site, you should create an external JavaScript file, instead of writing the same script over and over again. Save the script file with a .js extension, and then refer to it using the src attribute in the <script> tag.
crossorigin tag:
  The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
  Web pages often make requests to load resources on other servers. Here is where CORS comes in.
  A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.
  CORS is used to manage cross-origin requests.
  CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.
For example,
    <script src="https://kit.fontawesome.com/71ced39a4a.js" crossorigin="anonymous"></script>

div tag:
  The <div> element is used as a container for other HTML elements.
  The <div> element is by default a block element, meaning that it takes all available width, and comes with line breaks before and after.
For example,
    <div>Srijal Dangol</div>

nav tag:
  The <nav> tag defines a set of navigation links.
  Notice that NOT all links of a document should be inside a <nav> element. The <nav> element is intended only for major blocks of navigation links.
  Browsers, such as screen readers for disabled users, can use this element to determine whether to omit the initial rendering of this content.
For example,
    <nav>
      <a href="/html/">HTML</a> 
      <a href="/css/">CSS</a> 
      <a href="/js/">JavaScript</a> 
      <a href="/python/">Python</a>
    </nav>

img tag:
  The <img> tag is used to embed an image in an HTML page.
  Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.
  The <img> tag has two required attributes:
    src - Specifies the path to the image
    alt - Specifies an alternate text for the image, if the image for some reason cannot be displayed
For example,
    <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">

ul & li tags:
  The <ul> tag defines an unordered (bulleted) list.
  Use the <ul> tag together with the <li> tag to create unordered lists.
  The <li> tag defines a list item.
  The <li> tag is used inside ordered lists(<ol>), unordered lists (<ul>), and in menu lists (<menu>).
  In <ul> and <menu>, the list items will usually be displayed with bullet points.
  In <ol>, the list items will usually be displayed with numbers or letters.
For example,
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>

a tag:
  The <a> tag defines a hyperlink, which is used to link from one page to another.
  The most important attribute of the <a> element is the href attribute, which indicates the link's destination.
  By default, links will appear as follows in all browsers:
    -An unvisited link is underlined and blue
    -A visited link is underlined and purple
    -An active link is underlined and red
For example,
    <a href="https://www.srijaldangol.com.np">Srijal's Portfolio</a>

button tag:
  The <button> tag defines a clickable button.
  Inside a <button> element you can put text (and tags like <i>, <b>, <strong>, <br>, <img>, etc.). That is not possible with a button created with the <input> element! 
For example,
    <button type="button">Click Me!</button>

p tag:
  The <p> tag defines a paragraph.
  Browsers automatically add a single blank line before and after each <p> element.
For example,
    <p>I am Srijal...........................</p>

h1, h2, h3, h4, h5 and h6 tags:
  HTML headings are defined with the <h1> to <h6> tags.
  <h1> defines the most important heading. <h6> defines the least important heading.
For example,
    <h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h3>This is heading 3</h3>
    <h4>This is heading 4</h4>
    <h5>This is heading 5</h5>
    <h6>This is heading 6</h6>

span tag:
  The <span> tag is an inline container used to mark up a part of a text, or a part of a document.
  The <span> tag is easily styled by CSS or manipulated with JavaScript using the class or id attribute.
  The <span> tag is much like the <div> element, but <div> is a block-level element and <span> is an inline element.
For example,
    <p>My mother has <span style="color:blue">blue</span> eyes.</p>

br tag:
  The <br> tag inserts a single line break.
  The <br> tag is useful for writing addresses or poems.
  The <br> tag is an empty tag which means that it has no end tag.
For example,
    <p>To force<br> line breaks<br> in a text,<br> use the br<br> element.</p>

id:
  The HTML id attribute is used to specify a unique id for an HTML element.
  You cannot have more than one element with the same id in an HTML document.
  The id attribute specifies a unique id for an HTML element. The value of the id attribute must be unique within the HTML document.
  The id attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id.
  The syntax for id is: write a hash character (#), followed by an id name. Then, define the CSS properties within curly braces {}.
For example,
    <!DOCTYPE html>
    <html>
      <head>
        <style>
        #myHeader {
          background-color: lightblue;
          color: black;
          padding: 40px;
          text-align: center;
        }
        </style>
      </head>
      <body>
        <h1 id="myHeader">My Header</h1>
      </body>
    </html>
In the above example we have an <h1> element that points to the id name "myHeader". This <h1> element will be styled according to the #myHeader style definition in the head section.

class:
  The HTML class attribute is used to specify a class for an HTML element.
  Multiple HTML elements can share the same class.
  The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.
For example,
    <!DOCTYPE html>
    <html>
      <head>
        <style>
        .city {
          background-color: tomato;
          color: white;
          border: 2px solid black;
          margin: 20px;
          padding: 20px;
        }
        </style>
      </head>
      <body>
        <div class="city">
          <h2>London</h2>
          <p>London is the capital of England.</p>
        </div>
        <div class="city">
          <h2>Paris</h2>
          <p>Paris is the capital of France.</p>
        </div>
        <div class="city">
          <h2>Tokyo</h2>
          <p>Tokyo is the capital of Japan.</p>
        </div>
      </body>
    </html>
In the above example we have three <div> elements with a class attribute with the value of "city". All of the three <div> elements will be styled equally according to the .city style definition in the head section.

form tag:
  An HTML form is used to collect user input. The user input is most often sent to a server for processing.
  The <form> element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.
For example,
    <form>
    .
    form elements
    .
    </form>

input tag:
  The HTML <input> element is the most used form element.
  An <input> element can be displayed in many ways, depending on the type attribute.
For example,
    <form>
      <label for="fname">First name:</label><br>
      <input type="text" id="fname" name="fname"><br>
      <label for="lname">Last name:</label><br>
      <input type="text" id="lname" name="lname">
    </form>

textarea tag:
  The <textarea> tag defines a multi-line text input control.
  The <textarea> element is often used in a form, to collect user inputs like comments or reviews.
  A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).
  The size of a text area is specified by the cols and rows attributes (or with CSS).
  The name attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the text area will be submitted).
  The id attribute is needed to associate the text area with a label. 
For example,
    <textarea name="Message" rows="6" placeholder="Your Message"></textarea>


##CSS
Used various CSS properties according to the need in my webpage.


##Submit a Form to Google Sheets
####1. Create a new Google Sheet
  -First, go to Google Sheets and Start a new spreadsheet with the Blank template.
  -Rename it Email Subscribers. Or whatever, it doesn't matter.

####2.Create a Google Apps Script
  -Click on Tools > Script Editor… which should open a new tab.
  -Rename it Submit Form to Google Sheets. Make sure to wait for it to actually save and update the title before editing the script.   
  -Now, delete the function myFunction() {} block within the Code.gs tab.
  -Paste the following script in it's place and File > Save:
    var sheetName = 'Sheet1'
    var scriptProp = PropertiesService.getScriptProperties()
    function intialSetup () 
    {
      var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
      scriptProp.setProperty('key', activeSpreadsheet.getId())
    }
    function doPost (e) 
    {
      var lock = LockService.getScriptLock()
      lock.tryLock(10000)
      try 
      {
        var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
        var sheet = doc.getSheetByName(sheetName)
        var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
        var nextRow = sheet.getLastRow() + 1
        var newRow = headers.map(function(header) 
        {
          return header === 'timestamp' ? new Date() : e.parameter[header]
        })
        sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])
        return ContentService
          .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
          .setMimeType(ContentService.MimeType.JSON)
      }
      catch (e) 
      {
        return ContentService
          .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
          .setMimeType(ContentService.MimeType.JSON)
      }
      finally 
      {
        lock.releaseLock()
      }
    }

####3. Run the setup function
 -Next, go to Run > Run Function > initialSetup to run this function.
  -In the Authorization Required dialog, click on Review Permissions.
  -Sign in or pick the Google account associated with this projects.
  -You should see a dialog that says Hi {Your Name}, Submit Form to Google Sheets wants to...
  -Click Allow 

####4. Add a new project trigger
  -Click on Edit > Current project’s triggers.
  -In the dialog click No triggers set up. Click here to add one now.
  -In the dropdowns select doPost
  -Set the events fields to From spreadsheet and On form submit
  -Then click Save

####5. Publish the project as a web app
  -Click on Publish > Deploy as web app….
  -Set Project Version to New and put initial version in the input field below.
  -Leave Execute the app as: set to Me(your@address.com).
  -For Who has access to the app: select Anyone, even anonymous.
  -Click Deploy.
  -In the popup, copy the Current web app URL from the dialog.
  -And click OK.

####6. Input your web app URL
  Add below script to your html file.
   <script>
    const scriptURL = '<SCRIPT URL>'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
  </script> 
