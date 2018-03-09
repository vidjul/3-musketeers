# cash

[![Current Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/vidjul/3-musketeers/tree/master/cash)

cash is a tool written in JavaScript that aims to easily convert various currencies thanks to one single command line. :dollar:

* Convert one currency to several others through one command
* Save the default configuration in which you want to convert the currencies

# Installation

In order to be able to use cash, you have to first install some [dependencies](#dependencies)

```sh
npm install
```

# Usage

Check the current version of the application:

```sh
node bin/index.js --version
```

Have a summary of the available commands:

```sh
node bin/index.js --help
```

Convert a currency to cash default currencies (see [below](#configuration)):

```sh
node bin/index.js <amount> <currency>
```
Specify the currencies you want to convert to:

```sh
node bin/index.js <amount> <currency> <targetCurrency1> <targetCurrency2>...
```


# Configuration

If you don't specify the currencies you want convert your amount to, cash is configured to convert your amount to
* EUR
* USD
* GBP

You can change this behaviour thanks to this command line:
```sh
node bin/index.js --save <defaultCurrency1> <defaultCurrency2> ...
```


# Available currencies


| ISO Code      | Name              |
| ------------- |:-----------------:|
|AUD            | Australian Dollar |
|RUB            | Russian Rouble    |
|EUR            | Euro              |
|BGN            | Bulgarian Lev     |
|BRL            | Real Brazilian    |
|CAD            | Canadian Dollar   |
|CHF            | Swiss Franc       |
|CNY            | Chinese Yuan      |
|CZK            | Czech Koruna      |
|DKK            | Danish Krone      |
|GBP            | Pound Sterling    |
|HKD            | Hong Kong Dollar  |
|HRK            | Croatian Kuna     |
|HUF            | Hungarian Forint  |
|IDR            | Indonesian Rupiah |
|ILS            | Israeli Shekel    |
|INR            | Indian Rupee      |
|JPY            | Japanes Yen       |
|KRW            | South Korean Won  |
|MXN            | Mexican Peso      |
|MYR            | Malaysian Ringgit |
|NOK            | Norwegian Krone   |
|PHP            | Philippine Peso   |
|PLN            | Polish Zloty      |
|RON            | Romanian New Leu  |
|SEK            | Swedish Krona     |
|SGD            | Singapore Dollar  |
|THB            | Thai Baht         |
|TRY            | Turkish Lira      |
|USD            | US Dollar         |
|ZAR            | South African Rand|
|NZD            | New Zealand Dollar|

# Resources

* https://api.fixer.io/ API that serves the change rate.

# Dependencies

* [chalk](https://github.com/chalk/chalk): Terminal string styling done right
* [conf](https://github.com/sindresorhus/conf): Simple config handling for your app or module
* [got](https://www.npmjs.com/package/got): Simplified HTTP requests
* [money](https://www.npmjs.com/package/money): Simple and tiny JavaScript library for realtime currency conversion and exchange rate calculation, from any currency, to any currency.
* [ora](https://github.com/sindresorhus/ora): Elegant terminal spinner
* [update-notifier](https://github.com/yeoman/update-notifier): Update notifications for your CLI app
