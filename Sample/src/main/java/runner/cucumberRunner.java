package runner;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

 @RunWith(Cucumber.class)
 @CucumberOptions(features= "C:\\Users\\ELCOT\\eclipse-workspace\\Cucumber\\Sample\\src\\main\\java\\feature\\login.feature")
 public class cucumberRunner {}