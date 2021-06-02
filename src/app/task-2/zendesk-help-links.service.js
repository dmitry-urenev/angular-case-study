"use strict";
// Task 2
// 
// You see some error in the app (see ./src/assests/error.png file). 
// You need to fix it somehow. How would you do this? 
// 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ZendeskHelpLinksService = exports.helpLinks = void 0;
var core_1 = require("@angular/core");
var languageCodeLength = 2;
exports.helpLinks = {
    booking: {
        en: 'https://apaleo.zendesk.com/hc/de/articles/360021444512',
        _default: 'https://apaleo.zendesk.com/hc/en-us/articles/360021444512'
    },
    group_booking: {
        en: 'https://apaleo.zendesk.com/hc/de/articles/360021738011',
        _default: 'https://apaleo.zendesk.com/hc/en-us/articles/360021738011'
    },
    receiptNumber: {
        en: 'https://apaleo.zendesk.com/hc/de/articles/360000513352',
        _default: 'https://apaleo.zendesk.com/hc/en-us/articles/360000513352'
    },
    userRolePermissions: {
        _default: 'https://apaleo.zendesk.com/hc/en-us/articles/360001498771-User-Roles-Rights'
    }
};
var ZendeskHelpLinksService = /** @class */ (function () {
    function ZendeskHelpLinksService(localeId) {
        this.normalizedLocale = localeId.toLocaleLowerCase().substr(0, languageCodeLength);
    }
    ZendeskHelpLinksService.prototype.getLink = function (topicName) {
        var topic = exports.helpLinks[topicName];
        return topic[this.normalizedLocale] || topic._default;
    };
    ZendeskHelpLinksService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(core_1.LOCALE_ID))
    ], ZendeskHelpLinksService);
    return ZendeskHelpLinksService;
}());
exports.ZendeskHelpLinksService = ZendeskHelpLinksService;
