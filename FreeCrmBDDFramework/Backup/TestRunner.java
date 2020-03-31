package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\ELCOT\\eclipse-workspace\\Cucumber\\FreeCrmBDDFramework\\src\\main\\java\\Features\\login1.feature",
glue= {"stepDefinition"}
,plugin= {"html:test-output","json:json_output/cucumber.json","junit:junit_xml/junit.xml"},
monochrome=true,
dryRun = true
		)
public class TestRunner {

}
