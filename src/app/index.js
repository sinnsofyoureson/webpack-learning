import { parseInputs, inputsAreValid } from "./utils";

export const init = async (getAlertService, getComponentService) => {
  try {
    const { default: _ } = await import(/* webpackChunkName: "lodash" */ "lodash");

    console.log(
      _.join(["This", "module", "imports", "lodash", "library"], " ")
    );

    await import(/* webpackChunkName: "bootstrap" */ "bootstrap");
  } catch (e) {
    console.error(e);
  }

  const alertService = getAlertService();
  const componentService = getComponentService();
  
  alertService.hideErrors();
  
  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentService.setResult(numA + numB);
    } else {
      componentService.setResult("");
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
};
