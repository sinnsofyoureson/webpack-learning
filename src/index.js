import './main.scss';
import { init } from './app';
import AlertService from "./app/alert-service";
import ComponentService from "./app/component-service";

const alertService = new AlertService();
const componentService = new ComponentService();

init(alertService, componentService);
