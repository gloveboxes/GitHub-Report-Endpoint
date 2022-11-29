"use strict";(self.webpackChunkgit_hub_metrics_docs=self.webpackChunkgit_hub_metrics_docs||[]).push([[671],{9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1,slug:"/"},r="GitHub Metrics",l={unversionedId:"intro",id:"intro",title:"GitHub Metrics",description:"Ever wanted to track your GitHub activity over time? Well, now you can!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/GitHub-Metrics-Endpoint/",draft:!1,editUrl:"https://github.com/gloveboxes/GitHub-Metrics-Endpoint/tree/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar"},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Set up options",id:"set-up-options",level:2},{value:"Deploy the GitHub Metrics solution",id:"deploy-the-github-metrics-solution",level:2},{value:"Azure Function App Endpoint URL",id:"azure-function-app-endpoint-url",level:3},{value:"Initialize the Azure SQL Database",id:"initialize-the-azure-sql-database",level:2},{value:"Set up a repo to report metrics",id:"set-up-a-repo-to-report-metrics",level:2},{value:"Create a GitHub Personal Access Token",id:"create-a-github-personal-access-token",level:3},{value:"Update the GitHub Secrets environment file",id:"update-the-github-secrets-environment-file",level:3},{value:"Upload the GitHub secrets to your GitHub repos",id:"upload-the-github-secrets-to-your-github-repos",level:3},{value:"Add the GitHub Metrics Action to a GitHub repo",id:"add-the-github-metrics-action-to-a-github-repo",level:3},{value:"Power BI Report",id:"power-bi-report",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Appendix",id:"appendix",level:2},{value:"GitHub organization repos",id:"github-organization-repos",level:3},{value:"Create a GitHub Organization Personal Access Token",id:"create-a-github-organization-personal-access-token",level:4}],u={toc:s};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"github-metrics"},"GitHub Metrics"),(0,i.kt)("p",null,"Ever wanted to track your GitHub activity over time? Well, now you can!"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://gloveboxes.github.io/GitHub-Metrics-Endpoint/"},"GitHub metrics docs")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The image shows the solution architecture",src:n(4176).Z,width:"1309",height:"286"})),(0,i.kt)("h2",{id:"set-up-options"},"Set up options"),(0,i.kt)("p",null,"If you are setting up a repo to report to an existing GitHub Metrics application then follow the ",(0,i.kt)("a",{parentName:"p",href:"#set-up-a-repo-to-report-metrics"},"Set up a repo to report metrics")," instructions."),(0,i.kt)("p",null,"If you are deploying the GitHub Metrics application then follow the ",(0,i.kt)("a",{parentName:"p",href:"#deploy-the-github-metrics-solution"},"Deploy the GitHub Metrics solution")," instructions."),(0,i.kt)("h2",{id:"deploy-the-github-metrics-solution"},"Deploy the GitHub Metrics solution"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The image shows cloud deployment",src:n(5792).Z,width:"513",height:"256"})),(0,i.kt)("p",null,"Follow these steps to deploy the GitHub Metrics solution."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the following tools:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git client")),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cli/cli#installation"},"GitHub CLI")),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/cli/azure/install-azure-cli"},"Azure CLI")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open a command prompt.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone the GitHub metrics solution repository."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/gloveboxes/GitHub-Metrics-Endpoint.git\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change to the ",(0,i.kt)("inlineCode",{parentName:"p"},"infra")," folder in the cloned repository."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd GitHub-Metrics-Endpoint/infra\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You need to set the Azure location where you want to deploy the solution. The following command lists the available locations."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'az account list-locations --query "[].{Name:name, DisplayName:displayName}" -o table\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the following command to deploy the GitHub Metrics solution."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"PowerShell")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:RESOURCE_GROUP_NAME="<Your_Preferred_Resource_Group_Name>"\n$env:LOCATION_NAME="<Your_Preferred_Location_Name>"\naz group create --name $env:RESOURCE_GROUP_NAME --location $env:LOCATION_NAME\naz deployment group create --resource-group $env:RESOURCE_GROUP_NAME --template-file main.bicep --query properties.outputs\n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Bash")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'RESOURCE_GROUP_NAME="<Your_Preferred_Resource_Group_Name>"\nLOCATION_NAME="<Your_Preferred_Location_Name>"\naz group create --name $RESOURCE_GROUP_NAME --location $LOCATION_NAME\naz deployment group create --resource-group $RESOURCE_GROUP_NAME --template-file main.bicep --query properties.outputs\n')))),(0,i.kt)("h3",{id:"azure-function-app-endpoint-url"},"Azure Function App Endpoint URL"),(0,i.kt)("p",null,"When the deployment completes, the output will display the ",(0,i.kt)("em",{parentName:"p"},"reporting_endpoint_url")," and the ",(0,i.kt)("em",{parentName:"p"},"reporting_endpoint_key"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reporting_endpoint_url": {\n    "type": "String",\n    "value": "Azure Function App URL: https://function-app-sample.azurewebsites.net"\n  },\n  "reporting_endpoint_key": {\n    "type": "String",\n    "value": "Azure Function Host Key: 989asd98a789d7a8d7a98_sample_key"\n  }\n}\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the ",(0,i.kt)("strong",{parentName:"p"},"github.env")," file found in the ",(0,i.kt)("strong",{parentName:"p"},"config")," folder with the ",(0,i.kt)("em",{parentName:"p"},"reporting_endpoint_url")," and the ",(0,i.kt)("em",{parentName:"p"},"reporting_endpoint_key"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"REPORTING_PAT=\nREPORTING_ENDPOINT_URL=https://function-app-sample.azurewebsites.net\nREPORTING_ENDPOINT_KEY=989asd98a789d7a8d7a98_sample_key\nREPORTING_GROUP=\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save the ",(0,i.kt)("strong",{parentName:"p"},"github.env")," file as you will use this file to upload the GitHub metrics secrets to a repo you want to report to the GitHub Metrics application.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Send the ",(0,i.kt)("strong",{parentName:"p"},"github.env")," file to a repo owner so they can upload the GitHub metrics secrets to their repo and start reporting to the GitHub Metrics application."))),(0,i.kt)("h2",{id:"initialize-the-azure-sql-database"},"Initialize the Azure SQL Database"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The image shows sql set up",src:n(8949).Z,width:"217",height:"256"})),(0,i.kt)("p",null,"For now a manual process. This may be automated in the future."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the Azure Portal")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to the Azure SQL Database, by default named ",(0,i.kt)("inlineCode",{parentName:"p"},"github-metrics"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the Query Editor")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Authenticate with the Azure SQL Database using the SQL Admin user and password you used when you deployed the solution.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the GitHubStats table"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SET ANSI_NULLS ON\nGO\n\nSET QUOTED_IDENTIFIER ON\nGO\n\nCREATE TABLE [dbo].[GitHubStats](\n    [repo_id] [bigint] NOT NULL,\n    [date] [datetime] NOT NULL,\n    [id] [int] IDENTITY(1,1) NOT NULL,\n    [repo] [nvarchar](256) NOT NULL,\n    [group] [nvarchar](64) NOT NULL,\n    [clones] [int] NULL,\n    [views] [int] NULL,\n    [stars] [int] NULL,\n    [forks] [int] NULL,\n    [active] [bit] NOT NULL,\n CONSTRAINT [PK_GitHubStats] PRIMARY KEY CLUSTERED\n(\n    [repo_id] ASC,\n    [date] ASC\n)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]\n) ON [PRIMARY]\nGO\n\nALTER TABLE [dbo].[GitHubStats] ADD  CONSTRAINT [DF_GitHubStats_active]  DEFAULT ('true') FOR [active]\nGO\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the GitHubStatsDaily view"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SET ANSI_NULLS ON\nGO\n\nSET QUOTED_IDENTIFIER ON\nGO\n\nCREATE VIEW [dbo].[GitHubStatsDaily]\nAS\n\nSELECT TOP(100) PERCENT [group] AS team, repo, clones, [stars], forks, [views], date, EOMONTH(date) AS month_ending, DATEFROMPARTS(YEAR(date),MONTH(date),1)AS [month]\nFROM  dbo.GitHubStats\nWHERE active = 'true'\nGO\n")))),(0,i.kt)("h2",{id:"set-up-a-repo-to-report-metrics"},"Set up a repo to report metrics"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The image shows connecting a GitHub action to the Azure Function App",src:n(185).Z,width:"519",height:"256"})),(0,i.kt)("p",null,"The instructions below assume you are tracking GitHub metrics for repos in your personal GitHub account. "),(0,i.kt)("p",null,"To track GitHub metrics for repos in a GitHub organization, then refer to ",(0,i.kt)("a",{parentName:"p",href:"#github-organization-repos"},"GitHub organization repos")," for information on creating a Personal Access Token for an organization."),(0,i.kt)("h3",{id:"create-a-github-personal-access-token"},"Create a GitHub Personal Access Token"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the GitHub web portal and log in."),(0,i.kt)("li",{parentName:"ol"},"Select your profile icon in the top right corner."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Settings"),", then ",(0,i.kt)("strong",{parentName:"li"},"Developer Settings"),", then ",(0,i.kt)("strong",{parentName:"li"},"Personal Access Tokens"),"."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Fine-grained tokens")," and then ",(0,i.kt)("strong",{parentName:"li"},"Generate new token"),"."),(0,i.kt)("li",{parentName:"ol"},"Name the token ",(0,i.kt)("strong",{parentName:"li"},"GitHub Metrics"),"."),(0,i.kt)("li",{parentName:"ol"},"Set the ",(0,i.kt)("strong",{parentName:"li"},"Expiration"),". You probably want to set this to custom and set the date to 1 year in the future."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"All repositories"),", or if you want finer control, select ",(0,i.kt)("strong",{parentName:"li"},"Only select repositories")," and select the repos you want to track."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Repository permissions"),"."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Administration")," to ",(0,i.kt)("strong",{parentName:"li"},"Read-only"),"."),(0,i.kt)("li",{parentName:"ol"},"Leave the remaining fields with their default values."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Generate token"),"."),(0,i.kt)("li",{parentName:"ol"},"Copy the token to the clipboard.")),(0,i.kt)("h3",{id:"update-the-github-secrets-environment-file"},"Update the GitHub Secrets environment file"),(0,i.kt)("p",null,"A GitHub secrets environment file simplifies the process of uploading the secrets to one or more GitHub repos."),(0,i.kt)("p",null,"Use the github.env file you received from the GitHub Metrics solution owner or the one you created in the ",(0,i.kt)("a",{parentName:"p",href:"#deploy-the-github-metrics-solution"},"Deploy the GitHub Metrics solution")," section."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("strong",{parentName:"li"},"github.env")," file in the ",(0,i.kt)("inlineCode",{parentName:"li"},"deploy")," folder of the cloned repo."),(0,i.kt)("li",{parentName:"ol"},"Update the ",(0,i.kt)("strong",{parentName:"li"},"REPORTING_PAT")," value with the Personal Access Token you copied to the clipboard in the previous step."),(0,i.kt)("li",{parentName:"ol"},"Update the ",(0,i.kt)("strong",{parentName:"li"},"REPORTING_GROUP")," field. The group secret is used for consolidated reporting. The group name is arbitrary, for example, use your team name or your GitHub name."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"REPORTING_ENDPOINT_URL")," and ",(0,i.kt)("strong",{parentName:"li"},"REPORTING_ENDPOINT_KEY")," values are populated by the GitHub Metrics solution owner.")),(0,i.kt)("h3",{id:"upload-the-github-secrets-to-your-github-repos"},"Upload the GitHub secrets to your GitHub repos"),(0,i.kt)("p",null,"For each repo you want to track, upload the GitHub secrets by following these steps."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cli/cli#installation"},"GitHub CLI"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open a command prompt and change to the ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy")," folder of the cloned repo.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Authenticate with the GitHub CLI"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gh auth login\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the GitHub repo secrets by running the following command. Be sure to replace the ",(0,i.kt)("strong",{parentName:"p"},"\\<GITHUB_REPO_URL>")," with your target GitHub repo URL."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gh secret set --env-file github.env --repo <GITHUB_REPO_URL>\n")))),(0,i.kt)("h3",{id:"add-the-github-metrics-action-to-a-github-repo"},"Add the GitHub Metrics Action to a GitHub repo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'# GitHub Action to post GitHub metrics to an Azure Function App webhook\n# Required secrets\n#   1. A PAT with repo rights:    PAT_REPO_REPORT\n#   2. The webhook endpoint url:  REPORTING_ENDPOINT_URL\n#   3. The webhook endpoint key:  REPORTING_ENDPOINT_KEY\n#   4. Reporting group/team:      REPORTING_GROUP\n\nname: "GitHub repo metrics report"\n\non:\n  schedule:\n    # Run this once per day, towards the end of the day for keeping the most\n    # recent data point most meaningful (hours are interpreted in UTC).\n    - cron: "0 23 * * *"\n  workflow_dispatch: # Allow for running this manually.\n\njobs:\n  report_metrics_job:\n    runs-on: ubuntu-latest\n    name: GitHub repo metrics report\n    steps:\n      - name: run github metrics image\n        id: github_metrics\n        uses: gloveboxes/GitHubMetricsAction@v1\n        with:\n          github_repo: ${{ github.repository }}\n          github_personal_access_token: ${{ secrets.REPORTING_PAT }}\n          reporting_endpoint_url: ${{ secrets.REPORTING_ENDPOINT_URL }}\n          reporting_endpoint_key: ${{ secrets.REPORTING_ENDPOINT_KEY }}\n          reporting_group: $${{ secrets.REPORTING_GROUP }}\n')),(0,i.kt)("h2",{id:"power-bi-report"},"Power BI Report"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The image shows Power BI Reporting",src:n(4307).Z,width:"703",height:"286"})),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"This project is open source and welcomes contributions. Please raise an issue or submit a pull request."),(0,i.kt)("h2",{id:"appendix"},"Appendix"),(0,i.kt)("h3",{id:"github-organization-repos"},"GitHub organization repos"),(0,i.kt)("h4",{id:"create-a-github-organization-personal-access-token"},"Create a GitHub Organization Personal Access Token"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the GitHub web portal and login."),(0,i.kt)("li",{parentName:"ol"},"Select your profile icon in the top right corner."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Settings"),", then ",(0,i.kt)("strong",{parentName:"li"},"Developer Settings"),", then ",(0,i.kt)("strong",{parentName:"li"},"Personal Access Tokens"),"."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Fine-grained tokens")," and then ",(0,i.kt)("strong",{parentName:"li"},"Generate new token"),"."),(0,i.kt)("li",{parentName:"ol"},"Name the token ",(0,i.kt)("strong",{parentName:"li"},"GitHub Metrics ORGANIZATION_NAME")," and add the name of the GitHub organization you want to track."),(0,i.kt)("li",{parentName:"ol"},"Set the ",(0,i.kt)("strong",{parentName:"li"},"Expiration"),". You probably want to set this to custom and set the date to 1 year in the future."),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Organization")," you want to track from the ",(0,i.kt)("strong",{parentName:"li"},"Resource owner")," dropdown list."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"All repositories"),", or if you want finer control, select ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Only select repositories"))," and select the repos you want to track."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Repository permissions"),"."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Administration")," to ",(0,i.kt)("strong",{parentName:"li"},"Read-only"),"."),(0,i.kt)("li",{parentName:"ol"},"Leave the remain fields with their default values."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Generate token"),"."),(0,i.kt)("li",{parentName:"ol"},"Copy the token to the clipboard.")))}h.isMDXComponent=!0},4176:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/architecture-20e4beaaf6670a135638441bc717097d.png"},5792:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deploy-9447365eb38233d6bf19a16fb93fb806.png"},185:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-action-42b42ca16ecaf3d01e1209acc216487c.png"},4307:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/power-bi-report-438a53127c59db68822f51257cd3e658.png"},8949:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);