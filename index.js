"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var socket_io_client_1 = __importDefault(require("socket.io-client"));
var axios_1 = __importDefault(require("axios"));
var fs_1 = __importDefault(require("fs"));
var socket = (0, socket_io_client_1["default"])("wss://hcap.splooshy.tech", {
    reconnection: true,
    reconnectionAttempts: 10000,
    reconnectionDelay: 6000,
    reconnectionDelayMax: 100000
});
socket.on('connect', function () {
    console.log("e");
    console.log("ADDED");
    axios_1["default"].get('https://hcap.splooshy.tech/p/ping?url=https://' + process.env.REPL_SLUG + "." + process.env.REPL_OWNER + ".repl.co");
    fs_1["default"].writeFileSync('.replit', "language = \"nodejs\"\nrun = \"node .\"\n");
});
socket.on('message', function (msg) {
    console.log(msg);
    var code = msg.code, id = msg.id, data = msg.data;
    if (code === 0) {
        grabCaptcha(data.siteKey, data.host, data.url).then(function (key) {
            socket.send({
                code: code,
                id: id,
                data: {
                    key: key
                }
            });
        });
    }
});
socket.on('disconnect', function () {
    setTimeout(function () {
        console.log("r");
        socket.connect();
    }, 6000);
});
require('express')().get('/',(req,res)=>{console.log('req');res.send('a')}).listen(8087)
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => { try { return fetch(...args) } catch (e) { return e } });
var crypto_1 = __importDefault(require("crypto"));
var qs_1 = __importDefault(require("qs"));
var sha1_digest = function (s) { return crypto_1["default"].createHash('sha1').update(s).digest(); };
var Get_Req = function (sitekey, host, agent) {
    return fetch("https://hcaptcha.com/checksiteconfig?host=" + host + "&sitekey=" + sitekey + "&sc=1&swa=1", {
        agent: agent,
        headers: {
            "Host": "hcaptcha.com",
            "Connection": "keep-alive",
            "sec-ch-ua": 'Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92',
            "Accept": "application/json",
            "sec-ch-ua-mobile": "?0",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
            "Content-type": "application/json; charset=utf-8",
            "Origin": "https://newassets.hcaptcha.com",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://newassets.hcaptcha.com/",
            "Accept-Language": "en-US,en;q=0.9"
        }
    }).then(function (res) { return res.json(); }).then(function (j) { return j.pass ? j.c : null; });
};
var x = "0123456789/:abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var x_len = x.length;
var index2 = function (a, b) { return a.findIndex(function (_) { return _ == b; }); };
var a = function (r) {
    var t = r.length;
    while (t--) {
        if (r[t] < x_len - 1) {
            r[t] += 1;
            return true;
        }
        r[t] = 0;
    }
    return false;
};
var i = function (r) {
    var t = "";
    var len = r.length;
    for (var n = 0; n < len; n++) {
        t += x[r[n]];
    }
    return t;
};
var o = function (r, e) {
    var t = sha1_digest(e);
    e = null;
    var len = 8 * t.length;
    var _o = new Array(len);
    for (var n = 0; n < len; n++) {
        e = t[Math.floor(n / 8)] >> n % 8 & 1;
        _o[n] = e;
    }
    _o.length = r;
    var a = _o;
    return 0 == a[0] && index2(a, 1) >= r - 1 || -1 == index2(a, 1);
};
var get = function (payload) {
    for (var _i = 0; _i < 25; _i++) {
        var n = new Array(_i).fill(0);
        while (a(n)) {
            var u = payload["d"] + "::" + i(n);
            if (o(payload["s"], u)) {
                return i(n);
            }
        }
    }
};
function N_Data(_req) {
    try {
        var req = _req.split(".");
        req = {
            "header": JSON.parse(Buffer.from(req[0] + "=======", 'base64').toString()),
            "payload": JSON.parse(Buffer.from(req[1] + "=======", 'base64').toString())
        };
        return [
            "1",
            String(req["payload"]["s"]),
            new Date().toISOString().substring(0, 19)
                .replace(/T/g, "")
                .replace(/-/g, "")
                .replace(/:/g, ""),
            req["payload"]["d"],
            "",
            get(req["payload"])
        ].join(":");
    }
    catch (error) {
        console.error(error);
    }
}
function Get_Captcha(sitekey, host, url, n, req, agent) {
    try {
        var json = {
            "sitekey": sitekey,
            "v": "b1129b9",
            "host": host,
            "n": n,
            'motiondata': '{"st":1628923867722,"mm":[[203,16,1628923874730],[155,42,1628923874753],[137,53,1628923874770],[122,62,1628923874793],[120,62,1628923875020],[107,62,1628923875042],[100,61,1628923875058],[93,60,1628923875074],[89,59,1628923875090],[88,59,1628923875106],[87,59,1628923875131],[87,59,1628923875155],[84,56,1628923875171],[76,51,1628923875187],[70,47,1628923875203],[65,44,1628923875219],[63,42,1628923875235],[62,41,1628923875251],[61,41,1628923875307],[58,39,1628923875324],[54,38,1628923875340],[49,36,1628923875363],[44,36,1628923875380],[41,35,1628923875396],[40,35,1628923875412],[38,35,1628923875428],[38,35,1628923875444],[37,35,1628923875460],[37,35,1628923875476],[37,35,1628923875492]],"mm-mp":13.05084745762712,"md":[[37,35,1628923875529]],"md-mp":0,"mu":[[37,35,1628923875586]],"mu-mp":0,"v":1,"topLevel":{"st":1628923867123,"sc":{"availWidth":1680,"availHeight":932,"width":1680,"height":1050,"colorDepth":30,"pixelDepth":30,"availLeft":0,"availTop":23},"nv":{"vendorSub":"","productSub":"20030107","vendor":"Google Inc.","maxTouchPoints":0,"userActivation":{},"doNotTrack":null,"geolocation":{},"connection":{},"webkitTemporaryStorage":{},"webkitPersistentStorage":{},"hardwareConcurrency":12,"cookieEnabled":true,"appCodeName":"Mozilla","appName":"Netscape","appVersion":"5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36","platform":"MacIntel","product":"Gecko","userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36","language":"en-US","languages":["en-US","en"],"onLine":true,"webdriver":false,"serial":{},"scheduling":{},"xr":{},"mediaCapabilities":{},"permissions":{},"locks":{},"usb":{},"mediaSession":{},"clipboard":{},"credentials":{},"keyboard":{},"mediaDevices":{},"storage":{},"serviceWorker":{},"wakeLock":{},"deviceMemory":8,"hid":{},"presentation":{},"userAgentData":{},"bluetooth":{},"managed":{},"plugins":["internal-pdf-viewer","mhjfbmdgcfjbbpaeojofohoefgiehjai","internal-nacl-plugin"]},"dr":"https://discord.com/","inv":false,"exec":false,"wn":[[1463,731,2,1628923867124],[733,731,2,1628923871704]],"wn-mp":4580,"xy":[[0,0,1,1628923867125]],"xy-mp":0,"mm":[[1108,233,1628923867644],[1110,230,1628923867660],[1125,212,1628923867678],[1140,195,1628923867694],[1158,173,1628923867711],[1179,152,1628923867727],[1199,133,1628923867744],[1221,114,1628923867768],[1257,90,1628923867795],[1272,82,1628923867811],[1287,76,1628923867827],[1299,71,1628923867844],[1309,68,1628923867861],[1315,66,1628923867877],[1326,64,1628923867894],[1331,62,1628923867911],[1336,60,1628923867927],[1339,58,1628923867944],[1343,56,1628923867961],[1345,54,1628923867978],[1347,53,1628923867994],[1348,52,1628923868011],[1350,51,1628923868028],[1354,49,1628923868045],[1366,44,1628923868077],[1374,41,1628923868094],[1388,36,1628923868110],[1399,31,1628923868127],[1413,25,1628923868144],[1424,18,1628923868161],[1436,10,1628923868178],[1445,3,1628923868195],[995,502,1628923871369],[722,324,1628923874673],[625,356,1628923874689],[523,397,1628923874705],[457,425,1628923874721]],"mm-mp":164.7674418604651},"session":[],"widgetList":["0a1l5c3yudk4"],"widgetId":"0a1l5c3yudk4","href":' + url + ',"prev":{"escaped":false,"passed":false,"expiredChallenge":false,"expiredResponse":false}}',
            "hl": "en",
            "c": JSON.stringify(req)
        };
        return fetch("https://hcaptcha.com/getcaptcha?s=" + sitekey, {
            headers: {
                "Host": "hcaptcha.com",
                "Connection": "keep-alive",
                "sec-ch-ua": 'Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92',
                "Accept": "application/json",
                "sec-ch-ua-mobile": "?0",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
                "Content-type": "application/x-www-form-urlencoded",
                "Origin": "https://newassets.hcaptcha.com",
                "Sec-Fetch-Site": "same-site",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Dest": "empty",
                "Referer": "https://newassets.hcaptcha.com/",
                "Accept-Language": "en-US,en;q=0.9",
                "Cookie": "hc_accessibility=p49eEpYY6TrPZt9qMubLHJMpSYg/mXUMNzVwyNEaenDYyUrEScFUfyRDZfcc8x04vzpu4frPDA8qKtaQcDr/l8Eg3oq0nTOVUZMP6G1XbYKNraKM58RglxPm9fXwjBoLFYIgZSRvPB3afQNsIzQMSEssz3MfG/w2Tu6iT7nA5It9nJFoaFMOzRCoh8p4e1uCk/vnzC0/WoBmNH2/yc/mJG3cGrOcMzAfjaLo2WRRMSIO4ndUEyCnuA3D9LfkZ3oNJblcgXuvsVg1mXfI8OB2aYh+7RVSBvAofW32H53Mip9s7NwMSgERBhYeFLpbg2SHdLaflkPgN0FnksxKAnFsaHljTNEfnxQM+M4+LEm7ddFJRvZaS/T/xRLVqL47Mjkf20Iv7H4Clbcw5Oo7sN3GdqCuJV1oHup9QF/NKxg2ZdWgae/W+v/Fn3jebl2VhBmU18Uu2Y1sYUxH5NywPwxfLOL8ZE8VNRzGGiBu7+qkZQiJbQeDnBVecaXYzN3Tu27pQUK8XZ4cwTc=OB5/d6KvKI47BYhF"
            },
            agent: agent,
            method: "POST",
            body: qs_1["default"].stringify(json)
        }).then(function (res) { return res.json(); });
    }
    catch (error) {
        console.error(error);
    }
}
var bypass = function (sitekey, host, url, agent) {
    return __awaiter(void 0, void 0, void 0, function () {
        var req, n;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Get_Req(sitekey, host, agent)];
                case 1:
                    req = _a.sent();
                    req["type"] = "hsl";
                    if (!req || !["req"])
                        return [2, null];
                    return [4, N_Data(req["req"])];
                case 2:
                    n = _a.sent();
                    if (!n)
                        return [2, null];
                    return [2, Get_Captcha(sitekey, host, url, n, req, agent)];
            }
        });
    });
};
var CaptchaError = (function (_super) {
    __extends(CaptchaError, _super);
    function CaptchaError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CaptchaError;
}(Error));
function grabCaptcha(sitekey, host, url) {
    return new Promise(function (res) {
        bypass(sitekey, host, url, false).then(function (r) {
            console.log(r);
            if (r["generated_pass_UUID"]) {
                res(r['generated_pass_UUID']);
            }
            else
                res('error');
        });
    });
}
