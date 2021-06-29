const express = require('express');
require('dotenv').config();
require('dotenv');
const request = require('request');
const port = process.env.PORT || 9021;
const app = express();







app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(expressSanitizer());

// Express Session Middleware

async function emailotp(publickey:string,token_length:number,customer_email:string ){



    let token  = token_length !== undefined ? token_length : 5;
    let options = {
        'method': 'POST',
        'url': 'https://api.sendchamp.com/api/v1/verification/create',
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':  `Bearer ${publickey}`

        },
        body: JSON.stringify({"channel":"email","token_type":"numeric","token_length":`${token}`,"expiration_time":6,"customer_email":`${customer_email}`,"meta_data":{"first_name":"name"}})

    };



    request(options, function (error: string | undefined, response: { body: any; }) {
        if (error) throw new Error(error);
        console.log(response.body);



    }) ;

}





async function smsotp(publickey:string,customer_mobile_number:string,message:string,sender_name:string ){



    let options = {
        'method': 'POST',
        'url': ' https://api.sendchamp.com/api/v1/sms/send',
        'headers': {
            'Accept': 'application/json',
            'Authorization': `Bearer ${publickey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"to":[`${customer_mobile_number}`],"message":`${message}`,"sender_name":`${sender_name}`})

    };
    request(options, function (error: string | undefined, response: { body: any; }) {
        if (error) throw new Error(error);
        console.log(response.body);
    });

}






async function voicecall(publickey:string,customer_mobile_number:string,message:string,sender_name:string ){


    let options = {
        'method': 'POST',
        'url': 'https://api.sendchamp.com/api/v1/voice/send',
        'headers': {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization':`Bearer ${publickey}`
        },
        body: JSON.stringify({"customer_mobile_number":`${customer_mobile_number}`,"message":`${message}`,"sender_name":`${sender_name}`})

    };
    request(options, function (error: string | undefined, response: { body: any; }) {
        if (error) throw new Error(error);
        console.log(response.body);
    });

}



async function whatsappOTP(publickey:string,sender:string,recipient:string,template_code:string,message:string ){


    let options = {
        'method': 'POST',
        'url': 'https://api.sendchamp.com/api/v1/whatsapp/template/send',
        'headers': {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization':`Bearer ${publickey}`
        },
        body: JSON.stringify({"sender":`${sender}`,"recipient":`${recipient}`,"template_code":`${template_code}`,"message":`${message}`})

    };
    request(options, function (error: string | undefined, response: { body: any; }) {
        if (error) throw new Error(error);
        console.log(response.body);
    });

}




app.listen(port, () => {
    console.log(`mobile app listening at http://localhost:${port}`);


})
exports.emailotp = emailotp;
exports.smsotp = smsotp;
exports.voicecall =voicecall;
exports.whatsappOTP=whatsappOTP;
