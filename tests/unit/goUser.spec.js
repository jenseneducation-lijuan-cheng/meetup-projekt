import { mount, shallowMount,createLocalVue} from "@vue/test-utils";
import Hearder from "@/components/Header.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();

localVue.use(VueRouter);
const router = new VueRouter();
describe("Hearder", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(Hearder, {
        localVue,
        router: router,
        })
    
    });
    it("should show UserMeetup page when clicking Skapa din meetup",async() =>{

        const expected = "/userMeetup";
        const link = wrapper.find(".goPage");
        await link.trigger("click")
        expect(wrapper.vm.$route.path).toBe(expected)
    })

})