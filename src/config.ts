const configjson = <IPortalConfig[]>require('../app-config.json');
interface IPortalConfig {
  env: string;
  uiHostname: string;
  apiServer: string;
  tenant: string;
  authApplicationId: string;
  blobStoragePath: string;
  instrumentationKey: string;
  kssSupportUrl: string;
}

const GetConfig = (): IPortalConfig => {
  const hostname = window && window.location && window.location.hostname;
  let envconfig = configjson.find(i => {
    return i.uiHostname === hostname;
  });
  if (!envconfig) {
    envconfig = {
      env: 'error',
      apiServer: 'error',
      authApplicationId: 'error',
      tenant: 'error',
      uiHostname: 'error',
      blobStoragePath: 'error',
      instrumentationKey: 'error',
      kssSupportUrl: 'error'
    };
  }

  return envconfig;
};

export { GetConfig };
