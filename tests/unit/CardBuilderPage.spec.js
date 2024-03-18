import CardBuilderPage from "./../../src/pages/CardBuilderPage.vue";
import { shallowMount } from "@vue/test-utils";

describe("CardBuilderPage", () => {
  it("has DOM element with id #app ", () => {
    const wrapper = shallowMount(CardBuilderPage);

    expect(wrapper.find("#app").exists()).toBe(true);
  });
});
