import './main.scss';
import { init } from './app';

const getAlertService = async () => {
  let alertService;

  try {
    const AlertService = await import(
      /* 
        webpackChunkName: "AlertService"
        webpackPrefetch: true
      */
      "./app/alert-service"
    );
    alertService = new AlertService();
  } catch (e) {
    console.error("Error occured while fetching Alert Service", e);
  }

  return alertService;
};

const getComponentService = async () => {
  let componentService;

  try {
    const ComponentService = await import(
      /*
        webpackChunkName: "ComponentService"
        webpackPreload: true
      */
      "./app/component-service"
    );
    componentService = new ComponentService();
  } catch (e) {
    console.error("Error occured while fetching Component Service", e);
  }

  return componentService;
};

init(getAlertService, getComponentService);
