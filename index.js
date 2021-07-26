var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var express = require('express');
require('dotenv').config();
require('dotenv');
var request = require('request');
var port = process.env.PORT || 9021;
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(expressSanitizer());
// Express Session Middleware
function emailotp(publickey, customer_mobile_number, customer_email, token_type, token_length, expiration_time, metadata) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenType, expiration, token, options;
        return __generator(this, function (_a) {
            tokenType = token_type !== undefined ? token_type : 'numeric';
            expiration = expiration_time !== undefined ? expiration_time : 6;
            token = token_length !== undefined ? token_length : 5;
            options = {
                'method': 'POST',
                'url': 'https://api.sendchamp.com/api/v1/verification/create',
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + publickey
                },
                body: JSON.stringify({ "channel": "email", "token_type": tokenType, "token_length": "" + token, "expiration_time": expiration, "customer_email": "" + customer_email, "customer_mobile_number": "" + customer_mobile_number, "meta_data": metadata })
            };
            request(options, function (error, response) {
                if (error)
                    throw new Error(error);
                console.log(response.body);
            });
            return [2 /*return*/];
        });
    });
}
function smsotp(publickey, customer_mobile_number, customer_email, token_type, token_length, expiration_time, metadata) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenType, expiration, token, options;
        return __generator(this, function (_a) {
            tokenType = token_type !== undefined ? token_type : 'numeric';
            expiration = expiration_time !== undefined ? expiration_time : 6;
            token = token_length !== undefined ? token_length : 5;
            options = {
                'method': 'POST',
                'url': 'https://api.sendchamp.com/api/v1/verification/create',
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + publickey
                },
                body: JSON.stringify({ "channel": "sms", "token_type": tokenType, "token_length": "" + token, "expiration_time": expiration, "customer_email": "" + customer_email, "customer_mobile_number": "" + customer_mobile_number, "meta_data": metadata })
            };
            request(options, function (error, response) {
                if (error)
                    throw new Error(error);
                console.log(response.body);
            });
            return [2 /*return*/];
        });
    });
}
function whatsappOTP(publickey, customer_mobile_number, customer_email, token_type, token_length, expiration_time, metadata) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenType, expiration, token, options;
        return __generator(this, function (_a) {
            tokenType = token_type !== undefined ? token_type : 'numeric';
            expiration = expiration_time !== undefined ? expiration_time : 6;
            token = token_length !== undefined ? token_length : 5;
            options = {
                'method': 'POST',
                'url': 'https://api.sendchamp.com/api/v1/verification/create',
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + publickey
                },
                body: JSON.stringify({ "channel": "whatsapp", "token_type": tokenType, "token_length": "" + token, "expiration_time": expiration, "customer_email": "" + customer_email, "customer_mobile_number": "" + customer_mobile_number, "meta_data": metadata })
            };
            request(options, function (error, response) {
                if (error)
                    throw new Error(error);
                console.log(response.body);
            });
            return [2 /*return*/];
        });
    });
}
function texttospeech(publickey, customer_mobile_number, message, sender_name) {
    return __awaiter(this, void 0, void 0, function () {
        var options;
        return __generator(this, function (_a) {
            options = {
                'method': 'POST',
                'url': 'https://api.sendchamp.com/api/v1/voice/send',
                'headers': {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': "Bearer " + publickey
                },
                body: JSON.stringify({ "customer_mobile_number": "" + customer_mobile_number, "message": "" + message, "sender_name": "" + sender_name })
            };
            request(options, function (error, response) {
                if (error)
                    throw new Error(error);
                console.log(response.body);
            });
            return [2 /*return*/];
        });
    });
}
function confirmotp(publickey, verifiationCode, verification_reference) {
    return __awaiter(this, void 0, void 0, function () {
        var options;
        return __generator(this, function (_a) {
            options = {
                'method': 'POST',
                'url': 'https://api.sendchamp.com/api/v1/verification/confirm',
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + publickey
                },
                body: JSON.stringify({ "verification_code": verifiationCode, "verification_reference": verification_reference })
            };
            request(options, function (error, response) {
                if (error)
                    throw new Error(error);
                console.log(response.body);
            });
            return [2 /*return*/];
        });
    });
}
app.listen(port, function () {
    console.log("sendchamp listening at http://localhost:" + port);
});
exports.emailotp = emailotp;
exports.smsotp = smsotp;
exports.texttospeech = texttospeech;
exports.whatsappOTP = whatsappOTP;
exports.confirmotp = confirmotp;
