package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class FacebookStepDefinition {
	
	WebDriver driver;
	@Given("^User is already on Facebook Page$")
	public void user_is_already_on_Facebook_Page() {
		 System.setProperty("webdriver.chrome.driver", "C:\\Users\\ELCOT\\eclipse-workspace\\Cucumber\\Sample\\Driver\\chromedriver.exe");
		   driver=new ChromeDriver();
			driver.get("https://www.facebook.com/");
	}

	@When("^title of login page if facebook$")
	public void title_of_login_page_if_facebook() {
	   String title=driver.getTitle();
	   System.out.println(title);
	   Assert.assertEquals("Facebook – log in or sign up", title);
	}

	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_firstname_and_lastname(String firstname,String lastname)
	{
		driver.findElement(By.id("u_0_m")).sendKeys(firstname);
		driver.findElement(By.id("u_0_o")).sendKeys(lastname);
	}

	@Then("user entered \"(.*)\" and \"(.*)\"$")
	public void user_entered_email_and_phone(String email,String password) {
	    driver.findElement(By.id("u_0_r")).sendKeys(email);
	    driver.findElement(By.id("u_0_w")).sendKeys(password);
	}
	

	@Then("^user enters DOB$")
	public void user_enters_DOB() {
	    WebElement day = driver.findElement(By.id("day"));
	   Select s1=new Select(day);
	   s1.selectByVisibleText("4");
	   
	   WebElement month = driver.findElement(By.id("month"));
	   Select s2=new Select(month);
	   s1.selectByVisibleText("Feb");
	   
	   WebElement year = driver.findElement(By.id("year"));
	   Select s3=new Select(year);
	   s1.selectByVisibleText("1994");
	}

	@Then("^user enters Gender$")
	public void user_enters_Gender() {
	    
		driver.findElement(By.id("u_0_7")).click();;
		
	}

	@Then("^user click signup button$")
	public void user_click_signup_button() {
	    driver.findElement(By.id("u_0_13"));
	}


	
}
