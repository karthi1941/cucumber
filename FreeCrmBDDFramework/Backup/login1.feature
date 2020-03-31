Feature: Free CRM Login Feature

#Scenario: Free CRM Login Test Scenario

#Given User is already on Login Page
#When title of login page if Free CRM
#Then user enters "jeganjas18@gmail.com" and "kj720783"
#And user enter on login button
#And user is on home page


Scenario Outline: Free CRM Login Test Scenario

Given User is already on Login Page
When title of login page if Free CRM
Then user enters "<username>" and "<password>"
And user enter on login button
And user is on home page
And close the browser

Examples:
|username|password|
|jeganjas18@gmail.com|kj720783|
|tom|test456|
