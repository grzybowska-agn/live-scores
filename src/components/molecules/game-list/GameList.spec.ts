import { Game } from "@/types";
import GameList from "@/components/molecules/game-list/GameList.vue";
import { shallowMount } from "@vue/test-utils";
import { mockData } from "@/mocks/mock-data";

describe("GameList component", () => {
  it("renders number of elements based on props", () => {
    const { elements } = mountGameList({ games: mockData });
    expect(elements.games().length).toBe(5);
  });
  it("should propagate game-ended event coming from an element", () => {
    const { wrapper, elements } = mountGameList({ games: mockData });
    elements.games().at(2).vm.$emit("game-ended", 3);
    expect(wrapper.emitted("game-ended")).toEqual([[3]]);
  });
  it("should propagate score-change event coming from an element", () => {
    const { wrapper, elements } = mountGameList({ games: mockData });
    elements
      .games()
      .at(2)
      .vm.$emit("score-change", { score: 3, location: "home" });
    console.log(wrapper.emitted());
    expect(wrapper.emitted("score-change")).toEqual([
      [
        {
          score: 3,
          location: "home",
          gameId: 3,
        },
      ],
    ]);
  });
});

function mountGameList(propsData: { games: Game[]; isEditMode?: boolean }) {
  const wrapper = shallowMount(GameList, {
    propsData,
  });

  const elements = {
    games: () => wrapper.findAllComponents({ name: "SingleGame" }),
  };

  return {
    wrapper,
    elements,
  };
}
