import { mockTeam } from "@/mocks/mock-team";
import { byTestId } from "@/test-helpers";
import { TeamPlaying } from "@/types";
import { shallowMount } from "@vue/test-utils";
import SingleScoreEditable from "./SingleScoreEditable.vue";

describe("SingleScoreEditable component", () => {
  it("renders score component", () => {
    const { elements } = mountSingleScoreEditable(mockTeam);
    expect(elements.score().exists()).toBe(true);
  });
  it("renders add button", () => {
    const { elements } = mountSingleScoreEditable(mockTeam);
    expect(elements.addButton().exists()).toBe(true);
  });
  it("renders subtract button", () => {
    const { elements } = mountSingleScoreEditable(mockTeam);
    expect(elements.subtractButton().exists()).toBe(true);
  });

  describe("add button", () => {
    it("should emit the correct value", async () => {
      const { wrapper, elements } = mountSingleScoreEditable(mockTeam);
      await elements.addButton().trigger("click");
      expect(wrapper.emitted("score-change")).toEqual([[8]]);
    });
  });

  describe("subtract button", () => {
    it("should emit the correct value", async () => {
      const { wrapper, elements } = mountSingleScoreEditable(mockTeam);
      await elements.subtractButton().trigger("click");
      expect(wrapper.emitted("score-change")).toEqual([[6]]);
    });
    it("should be disabled if the score value is 0", () => {
      const { elements } = mountSingleScoreEditable({ ...mockTeam, score: 0 });
      expect(elements.subtractButton().attributes("disabled")).toBeTruthy();
    });
  });
});

function mountSingleScoreEditable(propsData: TeamPlaying) {
  const wrapper = shallowMount(SingleScoreEditable, {
    propsData,
  });
  const elements = {
    score: () => wrapper.findComponent({ name: "SingleScore" }),
    addButton: () => wrapper.find(byTestId("single-score-editable-button-add")),
    subtractButton: () =>
      wrapper.find(byTestId("single-score-editable-button-subtract")),
  };

  return { wrapper, elements };
}
