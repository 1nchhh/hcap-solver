"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var socket_io_client_1 = __importDefault(require("socket.io-client"));
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
var fs_1 = __importDefault(require("fs"));
var socket = (0, socket_io_client_1["default"])("wss://hcap-ws.splooshy.tech", {
    reconnection: true,
    reconnectionAttempts: 10000,
    reconnectionDelay: 6000,
    reconnectionDelayMax: 100000
});
socket.on('connect', function () {
    console.log("e");
    console.log("ADDED");
    axios_1["default"].get('https://hcap-ws.splooshy.tech/p/ping?url=https://' + process.env.REPL_SLUG + "." + process.env.REPL_OWNER + ".repl.co");
    fs_1["default"].writeFileSync('.replit', "language = \"nodejs\"\nrun = \"node .\"\n");
});
socket.on('disconnect', function () {
    setTimeout(function () {
        console.log("r");
        socket.connect();
    }, 6000);
});
socket.on('solve', function (a) {
    var host = a.host, siteKey = a.siteKey, url = a.url, key = a.key;
    stopped = false;
    solveCaptcha({
        host: host,
        siteKey: siteKey,
        url: url
    }).then(function (res) {
        if (res == '\u0000')
            return;
        socket.send('solved', { code: res, key: key });
    });
});
socket.on('stop', function () {
    stopped = true;
});
app.use(function (_, __, c) {
    console.log('req');
    c();
});
app.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.end("hi");
        return [2];
    });
}); });
app.listen(4000);
var request_promise_native_1 = __importDefault(require("request-promise-native"));
var axios_1 = __importDefault(require("axios"));
function randomFromRange(start, end) {
    return Math.round(Math.random() * (end - start) + start);
}
var stopped = false;
var hsw = {
    run: function (code) { return axios_1["default"].get('https://hcap.splooshy.tech/?arg=' + encodeURIComponent(code)); },
    waitForReady: function () { return new Promise(function (resolve) {
        function t() {
            axios_1["default"].get('https://hcap.splooshy.tech/ready').then(resolve)["catch"](function () {
                delay(1000).then(function () {
                    t();
                });
            });
        }
        t();
    }); }
};
function randomTrueFalse() {
    return randomFromRange(0, 1) ? 'true' : 'false';
}
var delay = function (ms) { return new Promise(function (r) { return setTimeout(r, ms); }); };
function getRandomUserAgent() {
    return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36";
}
function getMouseMovements(timestamp) {
    return [
        [297, 51, 0],
        [301, 52, 17],
        [203, 76, 1188],
        [195, 70, 1204],
        [187, 63, 1220],
        [179, 56, 1236],
        [174, 50, 1252],
        [172, 47, 1268],
        [171, 44, 1284],
        [170, 42, 1303],
        [166, 40, 1321],
        [163, 38, 1340]
    ].map(function (a) {
        a[2] += timestamp;
        return a;
    });
}
function tryToSolve(sitekey, host, url) {
    return __awaiter(this, void 0, void 0, function () {
        var userAgent, headers, response, timestamp, _a, key, tasks, job, answers, captchaResponse, _b;
        var _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    userAgent = getRandomUserAgent();
                    headers = {
                        'User-Agent': userAgent,
                        'content-type': 'application/x-www-form-urlencoded',
                        origin: 'https://newassets.hcaptcha.com',
                        referer: 'https://newassets.hcaptcha.com/',
                        'sec-ch-ua': '" Not;A Brand";v="99", "Opera GX";v="79", "Chromium";v="93"',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Windows"',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-site'
                    };
                    return [4, (0, request_promise_native_1["default"])({
                            method: 'get',
                            headers: headers,
                            json: true,
                            url: "https://hcaptcha.com/checksiteconfig?host=" + host + "&sitekey=" + sitekey + "&sc=1&swa=1"
                        })];
                case 1:
                    response = _e.sent();
                    timestamp = Date.now() + randomFromRange(30, 120);
                    _a = request_promise_native_1["default"];
                    _c = {
                        method: 'post',
                        headers: headers,
                        json: true,
                        url: "https://hcaptcha.com/getcaptcha?s=" + sitekey
                    };
                    _d = {
                        "v": "45a4e4a",
                        sitekey: sitekey,
                        host: host,
                        "hl": "en"
                    };
                    return [4, hsw.run(response.c.req)];
                case 2: return [4, _a.apply(void 0, [(_c.form = (_d.n = _e.sent(),
                            _d.c = JSON.stringify(response.c),
                            _d.motionData = {
                                st: timestamp,
                                dct: timestamp,
                                mm: getMouseMovements(timestamp),
                                "topLevel": {
                                    "st": timestamp,
                                    "sc": {
                                        "availWidth": 1920,
                                        "availHeight": 1050,
                                        "width": 1920,
                                        "height": 1080,
                                        "colorDepth": 24,
                                        "pixelDepth": 24,
                                        "availLeft": 0,
                                        "availTop": 0
                                    },
                                    "nv": {
                                        "vendorSub": "",
                                        "productSub": "20030107",
                                        "vendor": "Google Inc.",
                                        "maxTouchPoints": 0,
                                        "userActivation": {},
                                        "doNotTrack": null,
                                        "geolocation": {},
                                        "connection": {},
                                        "webkitTemporaryStorage": {},
                                        "webkitPersistentStorage": {},
                                        "hardwareConcurrency": 8,
                                        "cookieEnabled": true,
                                        "appCodeName": "Mozilla",
                                        "appName": "Netscape",
                                        "appVersion": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36",
                                        "platform": "Win32",
                                        "product": "Gecko",
                                        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36",
                                        "language": "en-US",
                                        "languages": [
                                            "en-US",
                                            "en"
                                        ],
                                        "onLine": true,
                                        "webdriver": false,
                                        "scheduling": {},
                                        "bluetooth": {},
                                        "clipboard": {},
                                        "credentials": {},
                                        "keyboard": {},
                                        "managed": {},
                                        "mediaDevices": {},
                                        "storage": {},
                                        "serviceWorker": {},
                                        "wakeLock": {},
                                        "deviceMemory": 8,
                                        "hid": {},
                                        "locks": {},
                                        "mediaCapabilities": {},
                                        "mediaSession": {},
                                        "permissions": {},
                                        "presentation": {},
                                        "serial": {},
                                        "usb": {},
                                        "xr": {},
                                        "userAgentData": {
                                            "brands": [],
                                            "mobile": false
                                        },
                                        "plugins": [
                                            "internal-pdf-viewer",
                                            "mhjfbmdgcfjbbpaeojofohoefgiehjai",
                                            "enmlgamfkfdemjmlfjeeipglcfpomikn"
                                        ]
                                    },
                                    "inv": false,
                                    "exec": false,
                                    "wn": [
                                        [
                                            783,
                                            949,
                                            1,
                                            timestamp
                                        ]
                                    ],
                                    "wn-mp": 0,
                                    "xy": [
                                        [
                                            0,
                                            0,
                                            1,
                                            timestamp
                                        ]
                                    ],
                                    "xy-mp": 0,
                                    "mm": getMouseMovements(timestamp),
                                    "mm-mp": 2.3202614379084947
                                },
                                "session": [],
                                "widgetList": [
                                    "0rrdtoig245i"
                                ],
                                "widgetId": "0rrdtoig245i",
                                "href": url,
                                "prev": {
                                    "escaped": true,
                                    "passed": true,
                                    "expiredChallenge": true,
                                    "expiredResponse": true
                                },
                                "mm-mp": 19.28571428571429,
                                "md": [
                                    [
                                        162,
                                        37,
                                        timestamp
                                    ]
                                ],
                                "md-mp": 0,
                                "mu": [
                                    [
                                        162,
                                        37,
                                        timestamp
                                    ]
                                ],
                                "mu-mp": 0,
                                "v": 1
                            },
                            _d),
                            _c)])];
                case 3:
                    response = _e.sent();
                    if (response.generated_pass_UUID) {
                        return [2, response.generated_pass_UUID];
                    }
                    key = response.key;
                    tasks = response.tasklist;
                    job = response.request_type;
                    timestamp = Date.now() + randomFromRange(30, 120);
                    answers = tasks.reduce(function (accum, t) {
                        var _a;
                        return (__assign(__assign({}, accum), (_a = {}, _a[t.task_key] = randomTrueFalse(), _a)));
                    }, {});
                    captchaResponse = {
                        answers: answers,
                        sitekey: sitekey,
                        serverdomain: host,
                        job_mode: job,
                        motionData: {
                            st: timestamp,
                            dct: timestamp,
                            mm: getMouseMovements(timestamp),
                            "topLevel": {
                                "st": timestamp,
                                "sc": {
                                    "availWidth": 1920,
                                    "availHeight": 1050,
                                    "width": 1920,
                                    "height": 1080,
                                    "colorDepth": 24,
                                    "pixelDepth": 24,
                                    "availLeft": 0,
                                    "availTop": 0
                                },
                                "nv": {
                                    "vendorSub": "",
                                    "productSub": "20030107",
                                    "vendor": "Google Inc.",
                                    "maxTouchPoints": 0,
                                    "userActivation": {},
                                    "doNotTrack": null,
                                    "geolocation": {},
                                    "connection": {},
                                    "webkitTemporaryStorage": {},
                                    "webkitPersistentStorage": {},
                                    "hardwareConcurrency": 8,
                                    "cookieEnabled": true,
                                    "appCodeName": "Mozilla",
                                    "appName": "Netscape",
                                    "appVersion": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36",
                                    "platform": "Win32",
                                    "product": "Gecko",
                                    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36",
                                    "language": "en-US",
                                    "languages": [
                                        "en-US",
                                        "en"
                                    ],
                                    "onLine": true,
                                    "webdriver": false,
                                    "scheduling": {},
                                    "bluetooth": {},
                                    "clipboard": {},
                                    "credentials": {},
                                    "keyboard": {},
                                    "managed": {},
                                    "mediaDevices": {},
                                    "storage": {},
                                    "serviceWorker": {},
                                    "wakeLock": {},
                                    "deviceMemory": 8,
                                    "hid": {},
                                    "locks": {},
                                    "mediaCapabilities": {},
                                    "mediaSession": {},
                                    "permissions": {},
                                    "presentation": {},
                                    "serial": {},
                                    "usb": {},
                                    "xr": {},
                                    "userAgentData": {
                                        "brands": [],
                                        "mobile": false
                                    },
                                    "plugins": [
                                        "internal-pdf-viewer",
                                        "mhjfbmdgcfjbbpaeojofohoefgiehjai",
                                        "enmlgamfkfdemjmlfjeeipglcfpomikn"
                                    ]
                                },
                                "inv": false,
                                "exec": false,
                                "wn": [
                                    [
                                        783,
                                        949,
                                        1,
                                        timestamp
                                    ]
                                ],
                                "wn-mp": 0,
                                "xy": [
                                    [
                                        0,
                                        0,
                                        1,
                                        timestamp
                                    ]
                                ],
                                "xy-mp": 0,
                                "mm": getMouseMovements(timestamp),
                                "mm-mp": 2.3202614379084947
                            },
                            "session": [],
                            "widgetList": [
                                "0rrdtoig245i"
                            ],
                            "widgetId": "0rrdtoig245i",
                            "href": url,
                            "prev": {
                                "escaped": true,
                                "passed": true,
                                "expiredChallenge": false,
                                "expiredResponse": false
                            },
                            "mm-mp": 19.28571428571429,
                            "md": [
                                [
                                    162,
                                    37,
                                    timestamp
                                ]
                            ],
                            "md-mp": 0,
                            "mu": [
                                [
                                    162,
                                    37,
                                    timestamp
                                ]
                            ],
                            "mu-mp": 0,
                            "v": 1
                        }
                    };
                    _e.label = 4;
                case 4:
                    _e.trys.push([4, 6, , 7]);
                    return [4, (0, request_promise_native_1["default"])("https://hcaptcha.com/checkcaptcha/" + key, {
                            method: 'post',
                            headers: headers,
                            json: true,
                            form: captchaResponse
                        })];
                case 5:
                    response = _e.sent();
                    if (response.generated_pass_UUID) {
                        return [2, response.generated_pass_UUID];
                    }
                    return [3, 7];
                case 6:
                    _b = _e.sent();
                    return [3, 7];
                case 7: return [2];
            }
        });
    });
}
function solveCaptcha(options) {
    return __awaiter(this, void 0, void 0, function () {
        var gentleMode, _a, timeoutInMs, siteKey, host, url, startingTime, result, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, hsw.waitForReady()];
                case 1:
                    _b.sent();
                    gentleMode = options.gentleMode, _a = options.timeoutInMs, timeoutInMs = _a === void 0 ? 12000000 : _a, siteKey = options.siteKey, host = options.host, url = options.url;
                    startingTime = Date.now();
                    _b.label = 2;
                case 2:
                    if (!true) return [3, 12];
                    if (stopped)
                        return [2, '\u0000'];
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 9]);
                    return [4, tryToSolve(siteKey, host, url)];
                case 4:
                    result = _b.sent();
                    if (result) {
                        stopped = true;
                        return [2, result];
                    }
                    else
                        console.log('Couldn\'t solve captcha for ' + host);
                    return [3, 9];
                case 5:
                    e_1 = _b.sent();
                    if (!(e_1.statusCode === 429)) return [3, 7];
                    console.log(429);
                    return [4, delay(30000)];
                case 6:
                    _b.sent();
                    return [3, 8];
                case 7: throw e_1;
                case 8: return [3, 9];
                case 9:
                    if (Date.now() - startingTime > timeoutInMs) {
                        throw new Error('captcha resolution timeout');
                    }
                    if (!gentleMode) return [3, 11];
                    return [4, delay(3000)];
                case 10:
                    _b.sent();
                    _b.label = 11;
                case 11: return [3, 2];
                case 12: return [2];
            }
        });
    });
}
