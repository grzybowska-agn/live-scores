import { mockData } from "@/mocks/mock-data";
import { shallowMount } from "@vue/test-utils";
import ScoreBoard from "./ScoreBoard.vue";

describe("ScoreBoard component", () => {
  it("should render list component", () => {
    const { elements } = mountScoreBoard();
    expect(elements.list().exists()).toBe(true);
  });
  it("should call onScoreChange on list emit score-change", () => {
    const onScoreChangeSpy = jest.spyOn(
      (ScoreBoard as any).options.methods,
      "onScoreChange"
    );

    const { wrapper, elements } = mountScoreBoard();
    elements.list().vm.$emit("score-change", {
      gameId: 2,
      score: 3,
      location: "home",
    });

    expect(onScoreChangeSpy).toHaveBeenCalled();
    expect(wrapper.vm.$data.games["2"].home.score).toBe(3);
  });
  it("should call onGameEnded on list emit game-ended", () => {
    const onGameEndedSpy = jest.spyOn(
      (ScoreBoard as any).options.methods,
      "onGameEnded"
    );

    const { wrapper, elements } = mountScoreBoard();
    elements.list().vm.$emit("game-ended", 1);

    expect(onGameEndedSpy).toHaveBeenCalled();
    expect(wrapper.vm.$data.games["1"]).toBeUndefined();
  });
});

function mountScoreBoard() {
  const wrapper = shallowMount(ScoreBoard, {
    data: () => ({ games: mockData }),
  });

  const elements = {
    list: () => wrapper.findComponent({ name: "GameList" }),
  };

  return { wrapper, elements };
}
