import { useState } from 'react';
import { Terminal, Code2, GitBranch, ArrowRight, CheckCircle2, Play, FileCode, CheckSquare } from 'lucide-react';

export default function AutomationSection() {
  const [activeTab, setActiveTab] = useState<'flow' | 'code'>('flow');

  const automationFlow = [
    { name: "Java", role: "Programming Language", desc: "Core language for test script authoring and logic." },
    { name: "Selenium WebDriver", role: "Browser Automation", desc: "Automating browser interactions and UI verification." },
    { name: "TestNG", role: "Testing Framework", desc: "Test execution, assertions, annotations, and test suite grouping." },
    { name: "Regression Automation", role: "Execution Scope", desc: "Automating repetitive regression passes across releases." },
    { name: "GitHub", role: "Source Control", desc: "Version control, branching, and team collaboration." },
  ];

  const sampleTestCode = `package com.qa.automation.regression;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class RegressionTestSuite {
    private WebDriver driver;

    @BeforeMethod
    public void setup() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://app.datazense.enterprise/login");
    }

    @Test(description = "Verify Data Governance RBAC policy restriction")
    public void testGovernancePolicyAccess() {
        // Authenticate with test credentials
        driver.findElement(By.id("username")).sendKeys("qa_analyst_user");
        driver.findElement(By.id("password")).sendKeys("TestPassword123!");
        driver.findElement(By.id("btn-login")).click();

        // Navigate to Data Catalog & verify restricted access notice
        WebElement catalogHeader = driver.findElement(By.cssSelector(".catalog-header"));
        Assert.assertTrue(catalogHeader.isDisplayed(), "Catalog header should be visible");

        // Verify restricted PII attribute is masked
        WebElement maskedField = driver.findElement(By.id("pii-masked-ssn"));
        Assert.assertEquals(maskedField.getText(), "*********", "PII data must remain masked for analyst role");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}`;

  return (
    <section id="automation" className="py-20 bg-slate-900/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
            Automated Quality Assurance
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Selenium Automation &amp; Regression Testing
          </h2>
          <p className="text-sm text-slate-300">
            Developing and executing regression automation scenarios to accelerate build verification and validate core platform stability.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden space-y-0">
          
          {/* Top Bar with Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Automation Technology Stack &amp; Workflow
                </h3>
                <span className="text-xs text-slate-400">
                  Java &bull; Selenium WebDriver &bull; TestNG &bull; GitHub
                </span>
              </div>
            </div>

            {/* View Switcher */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs font-medium">
              <button
                onClick={() => setActiveTab('flow')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeTab === 'flow' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Technology Flow
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeTab === 'code' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Sample TestNG Script
              </button>
            </div>
          </div>

          {/* Content Pane */}
          {activeTab === 'flow' && (
            <div className="p-6 sm:p-8 space-y-8">
              {/* Technology Flow Diagram */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4">
                  End-to-End Automation Pipeline Flow
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {automationFlow.map((step, idx) => (
                    <div
                      key={step.name}
                      className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between relative"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-slate-500 uppercase">Step 0{idx + 1}</span>
                          {idx < automationFlow.length - 1 && (
                            <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden md:inline" />
                          )}
                        </div>
                        <h5 className="text-sm font-bold text-white">{step.name}</h5>
                        <p className="text-[11px] text-blue-400 font-mono">{step.role}</p>
                        <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>

                      <div className="pt-2 mt-3 border-t border-slate-800/80 text-[10px] font-mono text-emerald-400">
                        IMPLEMENTED
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Core Automation Experience Bullets */}
              <div className="p-5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Key Automation Responsibilities (Resume Verified)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Developed and executed regression automation scenarios to ensure build quality.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Utilized Selenium WebDriver with Java to automate web application test paths.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Used TestNG for test execution management, assertions, and suite configurations.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Maintained test scripts in GitHub for source-code management and team collaboration.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TestNG Code View */}
          {activeTab === 'code' && (
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">src/test/java/com/qa/automation/RegressionTestSuite.java</span>
                <span className="text-emerald-400 font-mono">SYNTAX: JAVA 17 / TESTNG</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs overflow-x-auto leading-relaxed text-slate-300 max-h-[440px]">
                <pre>{sampleTestCode}</pre>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
