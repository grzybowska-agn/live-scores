import { byTestId } from "@/test-helpers";
import { shallowMount } from "@vue/test-utils";
import SingleGameForm from "./SingleGameForm.vue";

describe("SingleGameForm", () => {
  it("should render two input fields", () => {
    const { elements } = mountSingleGameForm();
    expect(elements.inputs().length).toBe(2);
  });

  it("should render a button which is initially disabled", () => {
    const { elements } = mountSingleGameForm();
    expect(elements.button().exists()).toBe(true);
    expect(elements.button().attributes("disabled")).toBeTruthy();
  });

  it("should switch button to enabled mode when every input is filled out", async () => {
    const { elements } = mountSingleGameForm();

    await elements.inputs().at(0).setValue("a");
    await elements.inputs().at(1).setValue("b");

    expect(elements.button().attributes("disabled")).toBeFalsy();
  });

  it("should emit an event on the button click", async () => {
    const onClickSpy = jest.spyOn(
      (SingleGameForm as any).options.methods,
      "onClick"
    );
    const { wrapper, elements } = mountSingleGameForm();

    await elements.inputs().at(0).setValue("a");
    await elements.inputs().at(1).setValue("b");

    await elements.button().trigger("click");

    expect(onClickSpy).toHaveBeenCalled();
    expect(wrapper.emitted("start-game")).toBeTruthy();
  });
});

function mountSingleGameForm() {
  const wrapper = shallowMount(SingleGameForm);

  const elements = {
    inputs: () => wrapper.findAll(byTestId("single-game-form-input")),
    button: () => wrapper.find(byTestId("single-game-form-button")),
    error: () => wrapper.find(byTestId("single-game-form-error")),
  };
  return { wrapper, elements };
}
