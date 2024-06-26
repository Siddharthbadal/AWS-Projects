# Website Hosting on AWS S with Custom Domain

Hosted a static website on aws s3 with custom domain.

-   Created an IAM user with permissions.
-   Created a S3 bucket to store files.
-   Added DNS records to custom domain server.
-   Enabling the custome URL pointing to S3 endpoint.
-   Created SSl certificate
-   Validated the certificate by creating a record in Route53
-   Created a cloud front distribution with catch policies to allow redirection.
-   Updated the A record to point to the CDN instead to s3 bucket endpoint.


