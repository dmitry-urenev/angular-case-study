// Task 2
// 
// You see some error in the app (see ./src/assests/error.png file). 
// You need to fix it somehow. How would you do this? 
// 

import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Dictionary } from 'lodash';

const languageCodeLength = 2;

export type HelpTopicName =
  | 'booking'
  | 'group_booking'
  | 'receiptNumber'
  | 'userRolePermissions';

declare type HelpLinksDictionaryValue = Dictionary<string | undefined> & {
  _default: string;
};

declare type HelpLinksDictionary = Record<HelpTopicName, HelpLinksDictionaryValue>;

export const helpLinks: HelpLinksDictionary = {
  booking: {
    de: 'https://apaleo.zendesk.com/hc/de/articles/360021444512',
    _default: 'https://apaleo.zendesk.com/hc/en-us/articles/360021444512'
  },
  group_booking: {
    de: 'https://apaleo.zendesk.com/hc/de/articles/360021738011',
    _default: 'https://apaleo.zendesk.com/hc/en-us/articles/360021738011'
  },
  receiptNumber: {
    de: 'https://apaleo.zendesk.com/hc/de/articles/360000513352',
    _default: 'https://apaleo.zendesk.com/hc/en-us/articles/360000513352'
  },
  userRolePermissions: {
    _default:
      'https://apaleo.zendesk.com/hc/en-us/articles/360001498771-User-Roles-Rights'
  }  
};

@Injectable()
export class ZendeskHelpLinksService {
  private readonly normalizedLocale: string;

  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.normalizedLocale = localeId.toLocaleLowerCase().substr(0, languageCodeLength);
  }

  public getLink(topicName: HelpTopicName): string {
    const topic = helpLinks[topicName];

    return topic[this.normalizedLocale] || topic._default;
  }
}
