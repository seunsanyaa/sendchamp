This library allows you to quickly and easily use the sendchamp nodejs library.
<h1>Installing</h1>
using npm<br><br>

```javascript
  npm install sendchamp

```
using yarn<br><br>

```javascript
 yarn install sendchamp

```


<h1>Example</h1>

<h4>note: CommonJS usage</h4>

In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with require() use the following approach:<br><br>

```javascript
const sendchamp = require('sendchamp');

```


<h1>Using Email API</h1>

```javascript
 sendchamp.emailotp( publickey , token_length , customer_email )

```
  

 
 <h1>Using SMS API</h1>
 
 
```javascript
sendchamp.smsotp( publickey , customer_mobile_number , message , sender_name )

```
 
  
 
 
  <h1>Using whatsapp OTP API</h1>
  
  
  
```javascript
 sendchamp.whatsappOTP( publickey , sender , recipient , template_code , message)
```
  

