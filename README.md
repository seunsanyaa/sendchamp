This library allows you to quickly and easily use the sendchamp nodejs library.
<h1>Installing</h1>
using npm<br><br>
<b> $ npm install sendchamp</b><br><br>
using yarn<br><br>
<b> $ yarn install sendchamp</b><br><br>

<h1>Example</h1>

<h4>note: CommonJS usage</h4>

In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with require() use the following approach:<br><br>

const sendchamp = require('sendchamp');

<h1>Using Email API</h1>
  
 sendchamp.email( <b>publickey , token_length , customer_email</b> )
 
 <h1>Using SMS API</h1>
  
 sendchamp.smsotp( <b>publickey , customer_mobile_number , message , sender_name</b> )
 
  <h1>Using whatsapp OTP API</h1>
  
 sendchamp.whatsappOTP( <b>publickey , sender , recipient , template_code , message</b> )
