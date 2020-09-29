import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ShowHeart  from '@/components/ShowHeart.vue'


describe('ShowHeart.vue', () => {
      let wrapper,points,wrapper2,points2
    beforeEach(() => {
       points ={points:3}
       points2 ={points:0}
        wrapper = shallowMount(ShowHeart, {
            propsData:points
           
        }) 
        wrapper2 = shallowMount(ShowHeart, {
            propsData:points2
           
        }) 
    }),
    it("should have to show  3 red hearts  if points is 3",  () => {

       const expected= 3;
       let redheart = wrapper.findAll(".redheart").length

       expect (redheart).toBe(expected)

    });
    it("should have to show  no red hearts  if points is is 0",  () => {

        const expected= 5;
        let lightheart = wrapper2.findAll(".lightheart").length
        expect (lightheart).toBe(expected)
 
     })
})