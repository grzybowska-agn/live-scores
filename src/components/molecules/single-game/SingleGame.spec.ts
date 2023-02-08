import { mockGame } from "@/mocks/mock-game";
import { byTestId } from "@/test-helpers";
import { Game } from "@/types";
import { shallowMount } from "@vue/test-utils";
import SingleGame from "./SingleGame.vue";

describe("Game component", () => {
  it("renders two elements as passed with props", () => {
    const { elements } = mountGame({ game: mockGame });
    expect(elements.teams().length).toBe(2);
  });
  it("should propagate events coming from aan element", async () => {
    const { wrapper, elements } = mountGame({ game: mockGame });
    elements.teams().at(0).vm.$emit("score-change", 6);
    expect(wrapper.emitted("score-change")).toEqual([
      [
        {
          score: 6,
          location: "home",
        },
      ],
    ]);
  });
  it("renders a button", () => {
    const { elements } = mountGame({ game: mockGame });
    expect(elements.button().exists()).toBe(true);
  });
  describe("button", () => {
    it("should emit on click", async () => {
      const { wrapper, elements } = mountGame({ game: mockGame });
      await elements.button().trigger("click");
      expect(wrapper.emitted("game-ended")).toEqual([[1]]);
    });
  });
});

function mountGame(propsData: { game: Game }) {
  const wrapper = shallowMount(SingleGame, {
    propsData,
  });

  const elements = {
    teams: () => wrapper.findAllComponents({ name: "SingleScoreEditable" }),
    button: () => wrapper.find(byTestId("game-button")),
  };

  return {
    wrapper,
    elements,
  };
}
