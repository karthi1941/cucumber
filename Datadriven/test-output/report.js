$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ELCOT/eclipse-workspace/Cucumber/Datadriven/src/main/java/Features/facebook.feature");
formatter.feature({
  "name": "Face book sign up",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Facebook Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already on Facebook Page",
  "keyword": "Given "
});
formatter.step({
  "name": "title of login page if facebook",
  "keyword": "When "
});
formatter.step({
  "name": "user enters firstname and lastname",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "karthi",
        "Velu"
      ]
    }
  ]
});
formatter.step({
  "name": "user entered email and password",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "karthivelu1941@gmail.com",
        "kj720783"
      ]
    }
  ]
});
formatter.step({
  "name": "user enters DOB",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters Gender",
  "keyword": "Then "
});
formatter.step({
  "name": "user click signup button",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "Jegan",
        "Jas",
        "jeganjas18@gmail.com",
        "8667227438"
      ]
    },
    {
      "cells": [
        "Karthi",
        "velu",
        "karthivelu1941@gmail.com",
        "8148791285"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Facebook Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already on Facebook Page",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookStepDefinition.user_is_already_on_Facebook_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of login page if facebook",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookStepDefinition.title_of_login_page_if_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters firstname and lastname",
  "rows": [
    {
      "cells": [
        "karthi",
        "Velu"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.user_enters_firstname_and_lastname(DataTable)"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: row: 1, Height: 1\r\n\tat io.cucumber.datatable.DataTable.rangeCheckRow(DataTable.java:300)\r\n\tat io.cucumber.datatable.DataTable.row(DataTable.java:398)\r\n\tat stepDefinition.FacebookStepDefinition.user_enters_firstname_and_lastname(FacebookStepDefinition.java:37)\r\n\tat ✽.user enters firstname and lastname(C:/Users/ELCOT/eclipse-workspace/Cucumber/Datadriven/src/main/java/Features/facebook.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user entered email and password",
  "rows": [
    {
      "cells": [
        "karthivelu1941@gmail.com",
        "kj720783"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters DOB",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.user_enters_DOB()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters Gender",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.user_enters_Gender()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.user_click_signup_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Facebook Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already on Facebook Page",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookStepDefinition.user_is_already_on_Facebook_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of login page if facebook",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookStepDefinition.title_of_login_page_if_facebook()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.16 (320f6526c1632..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53953}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 69f87d844c3c5e2a259affa9146e5af1\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat stepDefinition.FacebookStepDefinition.title_of_login_page_if_facebook(FacebookStepDefinition.java:29)\r\n\tat ✽.title of login page if facebook(C:/Users/ELCOT/eclipse-workspace/Cucumber/Datadriven/src/main/java/Features/facebook.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters firstname and lastname",
  "rows": [
    {
      "cells": [
        "karthi",
        "Velu"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.user_enters_firstname_and_lastname(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user entered email and password",
  "rows": [
    {
      "cells": [
        "karthivelu1941@gmail.com",
        "kj720783"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters DOB",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.user_enters_DOB()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters Gender",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.user_enters_Gender()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.user_click_signup_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});