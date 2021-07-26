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

async function emailotp(publickey:string,customer_mobile_number:string,customer_email:string,token_type:string,token_length:number,expiration_time:number,metadata:object ){


    let tokenType= token_type!==undefined?token_type:'numeric';
    let expiration= expiration_time!==undefined?expiration_time:6;
    let token  = token_length !== undefined ? token_length : 5;
    let options = {
        'method': 'POST',
        'url': 'https://api.sendchamp.com/api/v1/verification/create',
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publickey}`
        },
        body: JSON.stringify({"channel":"email","token_type":tokenType,"token_length":`${token}`,"expiration_time":expiration,"customer_email":`${customer_email}`,"customer_mobile_number":`${customer_mobile_number}`,"meta_data":metadata})

    };
    request(options, function (error: string | undefined, response: { body: any; }) {
        if (error) throw new Error(error);
        console.log(response.body);
    });

}





async function smsotp(publickey:string,customer_mobile_number:string,customer_email:string,token_type:string,token_length:number,expiration_time:number,metadata:object ){
    let tokenType= token_type!==undefined?token_type:'numeric';
    let expiration= expiration_time!==undefined?expiration_time:6;
    let token  = token_length !== undefined ? token_length : 5;
    let options = {
        'method': 'POST',
        'url': 'https://api.sendchamp.com/api/v1/verification/create',
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publickey}`
        },
        body: JSON.stringify({"channel":"sms","token_type":tokenType,"token_length":`${token}`,"expiration_time":expiration,"customer_email":`${customer_email}`,"customer_mobile_number":`${customer_mobile_number}`,"meta_data":metadata})

    };
    request(options, function (error: string | undefined, response: { body: any; }) {
        if (error) throw new Error(error);
        console.log(response.body);
    });

}






async function whatsappOTP(publickey:string,customer_mobile_number:string,customer_email:string,token_type:string,token_length:number,expiration_time:number,metadata:object ){

let tokenType= token_type!==undefined?token_type:'numeric';
    let expiration= expiration_time!==undefined?expiration_time:6;
    let token  = token_length !== undefined ? token_length : 5;
    let options = {
        'method': 'POST',
        'url': 'https://api.sendchamp.com/api/v1/verification/create',
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publickey}`
        },
        body: JSON.stringify({"channel":"whatsapp","token_type":tokenType,"token_length":`${token}`,"expiration_time":expiration,"customer_email":`${customer_email}`,"customer_mobile_number":`${customer_mobile_number}`,"meta_data":metadata})

    };
    request(options, function (error: string | undefined, response: { body: any; }) {
        if (error) throw new Error(error);
        console.log(response.body);
    });

}






async function texttospeech(publickey:string,customer_mobile_number:string,message:string,sender_name:string ){



  let options = {
        'method': 'POST',
        'url': 'https://api.sendchamp.com/api/v1/voice/send',
        'headers': {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${publickey}`
        },
        body: JSON.stringify({"customer_mobile_number":`${customer_mobile_number}`,"message":`${message}`,"sender_name":`${sender_name}`})

    };
    request(options, function (error: string | undefined, response: { body: any; }) {
        if (error) throw new Error(error);
        console.log(response.body);
    });

}






async function confirmotp(publickey:string,verifiationCode:string,verification_reference:string ){


  let options = {
        'method': 'POST',
        'url': 'https://api.sendchamp.com/api/v1/verification/confirm',
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publickey}`
        },
        body: JSON.stringify({"verification_code":verifiationCode,"verification_reference":verification_reference})

    };

    request(options, function (error: string | undefined, response: { body: any; }) {
        if (error) throw new Error(error);
        console.log(response.body);
    });


}











app.listen(port, () => {
    console.log(`sendchamp listening at http://localhost:${port}`);

})



exports.emailotp = emailotp;
exports.smsotp = smsotp;
exports.texttospeech=texttospeech;
exports.whatsappOTP=whatsappOTP;
exports.confirmotp=confirmotp;
