const clientEnv: Record<string, string | undefined> = {
  CLIENT_URL_API: process.env.CLIENT_URL_API,
  SERVER_URL_API: process.env.SERVER_URL_API,
}

const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = clientEnv[environmentVariable]
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(`Couldn't find environment variable: ${environmentVariable}`)
  } else {
    return unvalidatedEnvironmentVariable
  }
}

export const config = {
  clientUrlApi: getEnvironmentVariable('CLIENT_URL_API'),
  serverUrlApi: getEnvironmentVariable('SERVER_URL_API'),
}
