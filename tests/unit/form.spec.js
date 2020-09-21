import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Form from '@/components/Form.vue'
//import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(Vuex)
//localVue.use(VueRouter)

describe('Form.vue', () => {
  let actions
  let store
  let newEvent
  beforeEach(() => {
    actions = {
        createEvent:jest.fn(),
        
    }
    store = new Vuex.Store({
      actions
    })
    
  })
  
  it('dispatches "createEvent" when button clicked',async () => {
    const wrapper = shallowMount(Form, { store, localVue, 
      data: () => ({
        newEvent: {name:"Kajsas kör", location:"Hemma",date:"2020-09-21"},
        time: "10:00",
    }),
    mocks:{
      $router:{
        push:jest.fn()
      }},
  })
    const button = wrapper.find('.formButton')
    await button.trigger("click")
    expect(actions.createEvent).toHaveBeenCalled()
  })
})