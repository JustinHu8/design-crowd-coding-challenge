import BusinessCard from "./../../src/components/BusinessCard.vue";
import { shallowMount } from "@vue/test-utils";

describe("BusinessCard", () => {
  it("Renders business card", () => {
    const logoUrl = "testURL";
    const fields = {
      name: {
        givenname: "Justin",
        surname: "Hu",
      },
      email: "sam.smith@designcrowd.com",
      phone: "02 1234 5678",
      address: {
        houseName: "2",
        street: "Hill St",
        suburb: "Surry Hills",
        state: "NSW",
        postcode: "2010",
        country: "Australia",
        addressLine1: "2 Hill St",
        addressLine2: "Surry Hills, NSW",
      },
    };
    const wrapper = shallowMount(BusinessCard, {
      props: { fields, logoUrl },
    });

    expect(wrapper.find(".fullname").text()).toBe("Justin Hu");
  });
});
