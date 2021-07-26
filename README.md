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


<h1>Using Email OTP API</h1>

```javascript
 sendchamp.emailotp( publickey, customer_mobile_number, customer_email, token_type, token_length, expiration_time, metadata )
 
 The following parameters are not required and have default values.
 
token_type == 'numeric'
expiration_time == 6
token_length == 5

```
  

 
 <h1>Using SMS OTP API</h1>
 
 
 
 
```javascript
sendchamp.smsotp( publickey, customer_mobile_number, customer_email, token_type, token_length, expiration_time, metadata )

 The following parameters are not required and have default values.
 
token_type == 'numeric'
expiration_time == 6
token_length == 5


```
 
  
 
 
  <h1>Using whatsapp OTP API</h1>
  
  
  
```javascript


 sendchamp.whatsappOTP( publickey, customer_mobile_number, customer_email, token_type, token_length, expiration_time, metadata )
 
  The following parameters are not required and have default values.
 
token_type == 'numeric'
expiration_time == 6
token_length == 5

```



 <h1>Confriming the OTP codes from varioys channels</h1>
  
  
  
```javascript
 sendchamp.confirmotp( publickey, verifiationCode, verification_reference )
```
  



  <h1>Using Text TO Speech API</h1>
  
  
  
```javascript
 sendchamp.texttospeech( publickey, customer_mobile_number, message, sender_name)
```
  
  

Visit the <a href='https://docs.sendchamp.com/'>sendchamp website</a> for full doocumentation of APIs
