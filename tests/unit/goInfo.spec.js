import { mount,shallowMount ,createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Event from "@/components/Event.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();

localVue.use(VueRouter);
const router = new VueRouter();


describe("Event", () => {
  let event = {
    id: 1,
    name: "Kajsas kör",
    type: "Adventure",
    image: "kajsaskör.jpg",
    location: "Stockholm",
    date: "2020-9-30 09:00"
  };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Event, {
      localVue,
      router: router,
      propsData: { event: event },
    });
  });

  it("should go to /eventsInfo/1", async() => {
    const expected = "/eventsInfo/1";
    const link = wrapper.find(".noLine");
    await link.trigger("click")

    
    expect(wrapper.vm.$route.path).toBe(expected);

  });
});
