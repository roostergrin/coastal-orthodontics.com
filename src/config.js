export default {
  s3: {
    REGION: 'us-west-2',
    BUCKET: 'uploader-images'
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://y6lnri3o7c.execute-api.us-west-2.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_SyulRwTbt',
    APP_CLIENT_ID: '5fvt333ng4selgnu82p457vcp5',
    IDENTITY_POOL_ID: 'us-west-2:21dae248-f8c3-4049-adfd-01bd46215721'
  },
  website: {
    EMAIL: 'admin@example.com',
    SECRET: 'Passw0rd!'
  }
}
