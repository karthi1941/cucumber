$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ELCOT/eclipse-workspace/Cucumber/FaceBook/src/main/java/Features/facebook.feature");
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
  "name": "user enters \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user entered \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
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
  "name": "user enters \"Jegan\" and \"Jas\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.user_enters_firstname_and_lastname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered \"jeganjas18@gmail.com\" and \"8667227438\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.user_entered_email_and_phone(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters DOB",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.user_enters_DOB()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Feb\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat stepDefinition.FacebookStepDefinition.user_enters_DOB(FacebookStepDefinition.java:53)\r\n\tat ✽.user enters DOB(C:/Users/ELCOT/eclipse-workspace/Cucumber/FaceBook/src/main/java/Features/facebook.feature:9)\r\n",
  "status": "failed"
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
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Karthi\" and \"velu\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.user_enters_firstname_and_lastname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered \"karthivelu1941@gmail.com\" and \"8148791285\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.user_entered_email_and_phone(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters DOB",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.user_enters_DOB()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Feb\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat stepDefinition.FacebookStepDefinition.user_enters_DOB(FacebookStepDefinition.java:53)\r\n\tat ✽.user enters DOB(C:/Users/ELCOT/eclipse-workspace/Cucumber/FaceBook/src/main/java/Features/facebook.feature:9)\r\n",
  "status": "failed"
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