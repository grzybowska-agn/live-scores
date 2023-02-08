import { mockTeam } from "@/mocks/mock-team";
import { byTestId } from "@/test-helpers";
import type { TeamPlaying } from "@/types";
import { shallowMount } from "@vue/test-utils";
import SingleScore from "./SingleScore.vue";

describe("SingleScore component", () => {
  it("should display a name", () => {
    const { elements } = mountSingleScore(mockTeam);
    expect(elements.name().exists()).toBe(true);
  });
  it("should display a location", () => {
    const { elements } = mountSingleScore(mockTeam);
    expect(elements.location().exists()).toBe(true);
  });
  it("should display a score", () => {
    const { elements } = mountSingleScore(mockTeam);
    expect(elements.score().exists()).toBe(true);
  });
});

function mountSingleScore(propsData: TeamPlaying) {
  const wrapper = shallowMount(SingleScore, {
    propsData,
  });

  const elements = {
    name: () => wrapper.find(byTestId("name")),
    location: () => wrapper.find(byTestId("location")),
    score: () => wrapper.find(byTestId("score")),
  };

  return {
    wrapper,
    elements,
  };
}
