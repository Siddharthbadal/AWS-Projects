import json
import boto3

def lambda_handler(event, context):
    #  create sns client
    sns_client = boto3.client('sns')
    topic_arn = 'arn:aws:sns:ap-south-1:211****495566:edaimag******adedproject'
    
    # Parse the S3 event
    for record in event['Records']:
        bucket = record['s3']['bucket']['name']
        key = record['s3']['object']['key']
        message = f'Image uploaded to bucket {bucket} with key {key}'
        
        # Publish message to SNS
        sns_client.publish(
            TopicArn=topic_arn,
            Message=message,
            Subject='AWS S3 Image Upload Notification'
        )
        
    return {
        'statusCode': 200,
        'body': json.dumps('Notification sent successfully!')
    }


 