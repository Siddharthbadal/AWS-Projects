# Step-by-Step Guide to Building a EDA Project on AWS

### Project Description:

A simple event-driven application using AWS services; S3, Lambda, SNS (Simple Notification Service). This project helps improve and have deeper understanidng in cloud computing, serverless architecture with AWS multiple services.


Use Case: Image Upload Notification System | 
When an image is uploaded to an S3 bucket, a Lambda function processes the event and sends a notification message through SNS.

### Project Architecture:

<img width="1136" alt="Screenshot 2024-06-15 at 2 40 01 PM" src="https://github.com/yeshwanthlm/EDA-Project-on-AWS/assets/66474973/6d3aab89-c68e-4462-81e4-0114fa93e2dd">

### Steps to Build the Project:

* Step 1: Set Up an AWS IAM Account 
* Step 2: Create an S3 Bucket (S3 Bucket Name: eda-project-bkt) 
* Step 3: Create an SNS Topic (SNS Topic Name: edaimageuploadedproject) 
* Step 4: Create a Subscription (SNS Subscription)
    Confirm the email by clicking on the confirm in the email recived on given email.
    This would confirm the SNS subscription from pending to confirm.

* Step 5: Create a Lambda Function (Lambda Function Name: EdaImageUploadFunction) 
* Step 6: Add S3 trigger in the lambda function
* Step 7: Write Lambda Function Code and deploy it.
* Step 8: Test the System by uploading files. 


### Outcome:

An event-driven application on AWS that demonstrates the core principles of EDA with S3, SNS and Lambda services. and can be extended to more complex scenarios. 