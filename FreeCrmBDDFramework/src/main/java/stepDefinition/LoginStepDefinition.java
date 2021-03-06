package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^User is already on Login Page$")
	public void user_is_already_on_Login_Page() {
	   System.setProperty("webdriver.chrome.driver", "C:\\Users\\ELCOT\\eclipse-workspace\\Cucumber\\Sample\\Driver\\chromedriver.exe");
	   driver=new ChromeDriver();
		driver.get("https://freecrm.co.in/");
		
	}

	@When("^title of login page if Free CRM$")
	public void title_of_login_page_if_Free_CRM() {
		
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Free CRM #1 cloud software for any business large or small", title);
	}

	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username,String password) {
		
	   driver.findElement(By.xpath("//a[@class='btn btn-primary btn-xs-2 btn-shadow btn-rect btn-icon btn-icon-left']")).click();
	   driver.manage().timeouts().implicitlyWait(3000, TimeUnit.SECONDS);
	   driver.findElement(By.name("email")).sendKeys(username);
	   driver.findElement(By.name("password")).sendKeys(password);
	   
	}

	@Then("^user enter on login button$")
	public void user_enter_on_login_button() {
	   driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();
		
	}

	@Then("user is on home page")
	public void user_is_on_home_page() {
	    
	String title1=driver.getTitle();
	System.out.println(title1);
	Assert.assertEquals("Cogmento CRM", title1);
		
	System.out.println("My First Test case got passed");
	
	
	}

	@Then("close the browser")
	public void close_the_browser() {
	    driver.close();
	}


}
