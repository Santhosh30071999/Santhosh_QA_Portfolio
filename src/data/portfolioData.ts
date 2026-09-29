export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectDetail {
  id: string;
  name: string;
  subtitle: string;
  role: string;
  company?: string;
  description: string;
  highlights: string[];
  keyTestingAreas: string[];
}

export const PERSONAL_INFO = {
  name: "Santhosh AR",
  title: "QA Engineer / Software Test Engineer",
  experienceYears: "3.6+ years",
  email: "Santhoshcse54@gmail.com",
  phone: "+91-8883459673",
  phoneDisplay: "+91 88834 59673",
  linkedInUrl: "https://www.linkedin.com/in/santhosh-ar-qa",
  headline: "QA Engineer | Manual Testing | Data & ETL Testing | SQL | API | Selenium Automation",
  subheadline: "QA Engineer with 3.6+ years of experience in enterprise application testing, data validation, backend testing, release testing, and automation.",
  resumePath: "/resume/Santhosh_AR_QA_Resume.pdf",
  education: {
    degree: "Bachelor of Engineering – Computer Science and Engineering",
    institution: "Muthayammal Engineering College",
    location: "Rasipuram, Tamil Nadu",
    period: "2016 – 2020",
  },
};

export const CORE_SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Manual Testing",
    skills: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Integration Testing",
      "System Testing",
      "Smoke Testing",
      "Sanity Testing",
      "End-to-End Testing",
      "UAT",
    ],
  },
  {
    title: "Data Testing",
    skills: [
      "Data Validation",
      "Data Migration Testing",
      "ETL Testing",
      "Data Reconciliation",
      "Source-to-Target Validation",
      "Data Integrity Testing",
      "Backend Testing",
    ],
  },
  {
    title: "Automation Testing",
    skills: [
      "Selenium WebDriver",
      "Java",
      "TestNG",
      "Regression Automation",
    ],
  },
  {
    title: "API & Backend",
    skills: [
      "API Validation",
      "SQL",
      "Oracle SQL",
      "PostgreSQL",
      "Database Validation",
      "Backend Validation",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Power BI Testing",
      "Data Visualization Testing",
      "Data Catalog",
      "Data Governance",
      "Data Security",
      "Data Lineage",
      "Metadata Management",
    ],
  },
  {
    title: "GenAI",
    skills: [
      "GenAI-Assisted Testing",
      "Prompt Engineering",
      "Prompt-Based Data Extraction",
      "AI Workflow Validation",
    ],
  },
  {
    title: "Cloud & Data Platforms",
    skills: [
      "Azure Data Lake Storage Gen2",
      "Azure Databricks",
      "Hive",
      "Impala",
    ],
  },
  {
    title: "Tools & Methodologies",
    skills: [
      "Jira",
      "GitHub",
      "WinSCP",
      "SharePoint",
      "Agile Scrum",
      "SDLC",
      "STLC",
      "Release Management",
    ],
  },
];

export const EXPERIENCE_CHAINSYS = {
  company: "ChainSys Software Exports Pvt. Ltd.",
  role: "Quality Assurance Engineer – DataZense",
  period: "November 2022 – May 2026",
  responsibilities: [
    "Performed end-to-end software testing for enterprise Data Governance, Data Catalog, Data Visualization, Data Security, Analytics, Metadata Management, and Compliance applications.",
    "Analyzed business requirements and created test scenarios, test cases, test data, and test execution plans.",
    "Executed Functional, Regression, Integration, System, Smoke, Sanity, End-to-End, and UAT testing.",
    "Tested Data Visualization and Power BI reporting capabilities.",
    "Performed source-to-target data validation across source systems, Azure Data Lake Gen2, Databricks, and reporting/visualization layers.",
    "Tested Data Catalog and Metadata Management functionality.",
    "Performed GenAI and prompt-based workflow testing.",
    "Tested Data Security and Data Governance functionality.",
    "Validated RBAC, user permissions, authorization, data access restrictions, governance rules, and PII masking.",
    "Performed Data Migration Testing.",
    "Executed SQL queries for backend validation, data integrity testing, ETL validation, migration validation, and source-to-target reconciliation.",
    "Designed positive, negative, boundary, integration, and regression scenarios.",
    "Managed the complete defect lifecycle.",
    "Collaborated with Product Owners, Business Analysts, Developers, and Business Stakeholders.",
    "Participated in Agile Scrum ceremonies.",
    "Supported release validation, production verification, post-deployment validation, and production smoke testing.",
    "Developed and executed regression automation scenarios using Selenium WebDriver, Java, and TestNG.",
    "Used GitHub for automation source-code management and collaboration.",
  ],
};

export const TESTING_PROCESS_STEPS = [
  { step: 1, title: "Requirement Analysis", desc: "Reviewing business requirements, specifications, and user stories to identify testable conditions." },
  { step: 2, title: "Test Planning", desc: "Defining testing scope, approach, resource allocation, and target milestones." },
  { step: 3, title: "Test Scenario Design", desc: "Identifying broad end-to-end testing conditions and high-level verification scopes." },
  { step: 4, title: "Test Case Design", desc: "Authoring detailed step-by-step test cases with preconditions, positive, negative, and boundary criteria." },
  { step: 5, title: "Test Data Preparation", desc: "Generating realistic test datasets, source files, and database records matching test conditions." },
  { step: 6, title: "Test Execution", desc: "Executing planned test cases, validating expected outputs, and recording actual execution results." },
  { step: 7, title: "Defect Reporting", desc: "Logging identified bugs in Jira with clear reproduction steps, logs, screenshots, and severity." },
  { step: 8, title: "Retesting", desc: "Verifying fixed defects against updated builds to confirm successful resolution." },
  { step: 9, title: "Regression Testing", desc: "Executing regression suites via manual and Selenium automation to guarantee unaffected system areas." },
  { step: 10, title: "UAT", desc: "Supporting business users, product owners, and stakeholders during user acceptance verification." },
  { step: 11, title: "Release Validation", desc: "Performing pre-deployment and release sign-off checks across staging and release candidates." },
  { step: 12, title: "Production Verification", desc: "Conducting post-deployment smoke tests and production verification to ensure live stability." },
];

export const TESTING_TYPES = [
  {
    title: "Functional Testing",
    tag: "Requirements Compliance",
    description: "Validate application functionality against business requirements, user stories, and acceptance criteria.",
  },
  {
    title: "Regression Testing",
    tag: "Change Impact Validation",
    description: "Verify that existing functionality continues to work as expected after code changes, bug fixes, or enhancements.",
  },
  {
    title: "Integration Testing",
    tag: "Interface & Data Flow",
    description: "Validate interactions, data exchange, and communication between integrated system components and modules.",
  },
  {
    title: "System Testing",
    tag: "Complete Platform Scope",
    description: "Validate complete end-to-end application workflows across the unified platform environment.",
  },
  {
    title: "UAT",
    tag: "Business Acceptance",
    description: "Support business stakeholders, analysts, and product owners during user acceptance and business validation.",
  },
  {
    title: "Data Testing",
    tag: "Integrity & Reconciliation",
    description: "Validate data accuracy, completeness, consistency, source-to-target reconciliation, and transformation rules.",
  },
  {
    title: "End-to-End Testing",
    tag: "Complete Lifecycle",
    description: "Validate complete business workflows from initiation to final output across all connected layers.",
  },
];

export const DATA_PIPELINE_STAGES = [
  {
    id: "sources",
    name: "Source Systems",
    role: "Origin Data Layers",
    qaTasks: "Validating raw schema consistency, initial record counts, extraction triggers, and data extraction formats.",
  },
  {
    id: "adls",
    name: "Azure Data Lake Gen2",
    role: "Data Lake Storage",
    qaTasks: "Validating file ingestion integrity, landing zone structures, file completeness, and folder partitioning.",
  },
  {
    id: "databricks",
    name: "Azure Databricks",
    role: "Data Processing & ETL",
    qaTasks: "Executing SQL/ETL transformation validation, data deduplication, business logic checks, and aggregate calculations.",
  },
  {
    id: "powerbi",
    name: "Power BI / Visualization",
    role: "Reporting & Presentation",
    qaTasks: "Verifying report KPIs, dashboard charts, interactive filters, drill-downs, calculations, and data refresh cycles.",
  },
];

export const DATA_TESTING_PIPELINE = [
  {
    title: "SQL Validation",
    summary: "Executing structured SQL queries across source and target databases to verify schema, table constraints, and data accuracy.",
  },
  {
    title: "Source-to-Target Validation",
    summary: "Verifying mapping of data fields, column mappings, data types, and transformation rules between source systems and target repositories.",
  },
  {
    title: "Data Integrity Testing",
    summary: "Checking primary key uniqueness, foreign key relationships, referential integrity, null-value constraints, and duplicate detection.",
  },
  {
    title: "ETL Validation",
    summary: "Verifying the end-to-end extraction, transformation, and loading of records, ensuring business transformations execute accurately.",
  },
  {
    title: "Data Reconciliation",
    summary: "Executing row-count checks, checksum comparisons, sum-value reconciliations, and boundary audits between source and target datasets.",
  },
  {
    title: "Migration Validation",
    summary: "Validating historical and ongoing data migration batches for completeness, accuracy, and schema alignment without data loss.",
  },
  {
    title: "Backend Validation",
    summary: "Validating backend database state changes, transactional commits, rollbacks, and storage synchronization post-application operations.",
  },
];

export const DEFECT_LIFECYCLE_STEPS = [
  { step: "01", name: "Defect Identification", desc: "Uncovering deviation from expected business requirements during test execution." },
  { step: "02", name: "Logging", desc: "Creating a detailed ticket in Jira with summary, environment, severity, reproducible steps, and logs." },
  { step: "03", name: "Prioritization", desc: "Reviewing defects with developers and Product Owners during defect triage meetings." },
  { step: "04", name: "Tracking", desc: "Monitoring progress, developer updates, and state transitions within Jira." },
  { step: "05", name: "Retesting", desc: "Deploying bug fix to QA environment and re-executing failed test scenarios." },
  { step: "06", name: "Verification", desc: "Validating resolution, confirming no side effects, and running targeted regression." },
  { step: "07", name: "Closure", desc: "Updating ticket status to Closed with resolution verification comments in Jira." },
];

export const AGILE_CEREMONIES = [
  { name: "Sprint Planning", desc: "Reviewing sprint backlog user stories, clarifying acceptance criteria, and estimating QA effort." },
  { name: "Daily Stand-up", desc: "Sharing daily QA progress, test execution status, blockers, and planned testing activities." },
  { name: "Backlog Grooming", desc: "Collaborating with Product Owners and BAs to refine requirements and identify edge scenarios." },
  { name: "Sprint Review", desc: "Demonstrating tested features and validated workflows to stakeholders." },
  { name: "Retrospective", desc: "Evaluating sprint testing processes, identifying improvements, and optimizing STLC practices." },
  { name: "Defect Triage", desc: "Meeting with Dev leads and POs to review open bugs, severity, and resolution timelines." },
  { name: "Release Activities", desc: "Executing release validation checklists, deployment smoke tests, and production sign-off." },
];
