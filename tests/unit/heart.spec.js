import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import LikeHeart  from '@/components/LikeHeart.vue'


describe('LikeHeart.vue', () => {
      let wrapper
    beforeEach(() => {
        wrapper = shallowMount(LikeHeart, {
        }) 
       
    }),
    it("should have to show  5 white hearts  when rendering", async () => {

       const expected= 5;
       let lightheart = wrapper.findAll(".lightheart").length
       expect (lightheart).toBe(expected)

    })
    it("should have to show  5 red hearts  when clicking 5red hearts", async () => {

        const expected= 5;

        let lightheart = wrapper.find("#white5")
        await lightheart.trigger("click")
        let redheart = wrapper.findAll(".redheart").length
        expect (redheart).toBe(expected)
 
     })
     it("should have to show  3 red hearts  when clicking 3red hearts", async () => {

        const expected= 3;

        let lightheart = wrapper.find("#white3")
        await lightheart.trigger("click")
        let redheart = wrapper.findAll(".redheart").length
        expect (redheart).toBe(expected)
 
     })
     it("should have to remove 1 red hearts  when clicking 1red hearts", async () => {

        const expected= 2;
        let lightheart = wrapper.find("#white3")
        await lightheart.trigger("click")
        let bloodheart = wrapper.find("#red3")
        await bloodheart.trigger("click")
      
        let redheart = wrapper.findAll(".redheart").length
        expect (redheart).toBe(expected)
 
     })

})