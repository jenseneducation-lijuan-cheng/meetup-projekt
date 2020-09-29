import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ShowReview from "@/components/ShowReview.vue";

describe("ShowReview.vue", () => {
  let wrapper,review1,review2,review3;
  review1= 
   {
     textName: "bra",
     likes: 2,
     eventId: 7,
     id: 1,
   }
   review2= 
   {
     textName: "bra bra",
     likes: 2,
     eventId: 5,
     id: 2,
   }
   review3= 
   {
     textName: "bra bra bra ",
     likes: 4,
     eventId: 3,
     id: 3,
   }
    it("should have to show  a review if one exists", () => {
      wrapper = shallowMount(ShowReview, {
         propsData: {
            reviews:[review1]
         },
       });
      const expected = 1;
      let review = wrapper.findAll(".review").length;
      expect(review).toBe(expected);
    });
  it("should have to show  no review if no review exists", () => {
   wrapper = shallowMount(ShowReview, {
      propsData: {
         reviews:[]
      },
    });
    const expected = 0;
    let review = wrapper.findAll(".review").length;
    expect(review).toBe(expected);
  });
  it("should have to show  three reviews if there are three reviews in the list", () => {
   wrapper = shallowMount(ShowReview, {
      propsData: {
         reviews:[review1, review2, review3]
      
      },
    });
    const expected = 3;
    let review = wrapper.findAll(".review").length;
    expect(review).toBe(expected);
  });
});
