import { shallowMount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Search from "@/components/Search.vue";

//import VueRouter from "vue-router";

/*const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();*/

describe("Search", () => {
    let wrapper, events, kajsas ,gammaltslott,yogo ;
    beforeEach(() => {
        kajsas = { name: "Kajsas kör", id: 1, type: "Adventure",image: "", location: "Stockholm",
        date: ""}
        gammaltslott={ name: "Gammalt slott", id: 2,type: "Adventure" ,image: "", location: "Stockholm",
        date: ""},
        yogo={ name: "Yoga", id: 4,type: "Health" ,image: "", location: "Nacka",
        date: ""},
      events = [
        kajsas,
        gammaltslott,
        yogo
        
      ];
  
      wrapper = shallowMount(Search, {
        propsData: { events },
        /*localVue,
        router,
        stubs: {
          RouterLink: RouterLinkStub,
        },*/
      });
    });
    it("should emit meetupMatch with data on search", async () => {
    const input = wrapper.find("input");
    await input.setValue("Kajsas kör");
    await input.trigger("keyup.enter");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().meetupMatch[0][0]).toEqual([kajsas]);
  });
  it("should emit meetupMatch with data on search", async () => {
    const input = wrapper.find("input");
    await input.setValue("o");
    await input.trigger("keyup.enter");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().meetupMatch[0][0]).toEqual([gammaltslott,yogo]);
    expect(wrapper.emitted().meetupMatch[0][0].length).toBe(2)
  });
})
