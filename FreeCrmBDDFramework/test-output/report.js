$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ELCOT/eclipse-workspace/Cucumber/FreeCrmBDDFramework/src/main/java/Features/login1.feature");
formatter.feature({
  "name": "Free CRM Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "title of login page if Free CRM",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "jeganjas18@gmail.com",
        "kj720783"
      ]
    },
    {
      "cells": [
        "tom",
        "test456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of login page if Free CRM",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_if_Free_CRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"jeganjas18@gmail.com\" and \"kj720783\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_enter_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of login page if Free CRM",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_if_Free_CRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"tom\" and \"test456\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_enter_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});