import { DynamoDBDocumentClient, TranslateConfig } from '@aws-sdk/lib-dynamodb'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'

const REGION = 'eu-west-2'

export const ddbClient: DynamoDBClient = new DynamoDBClient({ region: REGION })

const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false,
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: false,
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: true,
}

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false,
}

const translateConfig: TranslateConfig = { marshallOptions, unmarshallOptions }

export const ddbDocClient = DynamoDBDocumentClient.from(
  ddbClient,
  translateConfig
)
