# serverless_ulr_shortener

deploys a Lambda Function, an Api Gateway, a S3 buket and a Cloufront Distribution

## Setup

 ```node
 npm install
 ```

copy *config.sample.json* to *config.json* and edit

check *serverless.yml* and edit

when done run:
```bash
serverless deploy
```

the deployment might take a while e.g 15-20 minutes.

copy *index-sample.html* to *index.html*. from the console copy the APIGW endpoint and paste in the form action:

```html
<form action="<pastehere>">
```

upload the staic content to the s3 bucket

```bash
aws s3 sync static/ s3://yourBucket/
```

point the domain to the cloudfront URL