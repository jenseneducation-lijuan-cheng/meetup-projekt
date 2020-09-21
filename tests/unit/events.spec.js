import { shallowMount,mount} from '@vue/test-utils'
import Events from '@/components/Events.vue'

describe("Events", () => {
  it("should have to show  9 events  when rendering", async () => {
    let wrapper, events;
    events = [
      { name: "Kajsas kör", id: 1, image: "", type: "Adventure" },
      { name: "Gammalt slott", id: 2, image: "", type: "Adventure" },
      { name: "Skidor", id: 3, image: "", type: "Adventure" },
      { name: "Yoga", id: 4, image: "", type: "Health" },
      { name: "Meditera", id: 5, image: "", type: "Health" },
      { name: "Matlagning", id: 6, image: "", type: "Health" },
      { name: "Fika", id: 7, image: "", type: "Social" },
      { name: "Whiskey party", id: 8, image: "", type: "Social" },
      { name: "Titta på video", id: 9, image: "", type: "Social" }
    ];

    wrapper = mount(Events, {
      propsData: { events },
      stubs: {
        Header: true,
      },
    });

    const expected = 9;
    const actual = wrapper.findAll(".meetup").length;
    expect(actual).toBe(expected);
  
  })
})