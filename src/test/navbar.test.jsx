import { chercheData } from '../fonction/fonction'
import React, { useState as useStateMock, setState } from 'react';
// import * from 'react'
import Lien, { NavItem } from '../component/navbar/navbar'
// import renderer, { create, waitFor } from 'react-test-renderer';
import adresse from '../fonction/conf'
// import { render, screen } from '@testing-library/react'
import { shallow, mount, render } from 'enzyme';
import { Graph_count_type_planete } from '../component_planet/graph_planet';
import 'chai/register-should';
// const { act } = renderer;
import Modal_window from '../component/navbar/modal';
import {Modal} from 'react-bootstrap'
import Home from './aamock'
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
// const useStateSpy=jest.spyOn(React, "useState")
// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useState: jest.fn()
//   }));
//   const useStateMock = useState;

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useState: jest.fn(),
// }));

// import React, { useState } from "react";


jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

// export default Home;
describe('<Home />', () => {
    let wrapper;

    const setState = jest.fn();

    it('Should forward ref to BaseModal', () => {
        const noOp = () => {};
        const ref = React.createRef();
        mount(
          <Modal show={true} onHide={noOp} ref={ref}>
            <strong>Message</strong>
          </Modal>,
        );
        ref.current.dialog.should.exist;
      });

    // beforeEach(() => {
    //     useStateMock.mockImplementation(init => [init, setState]);
    //     useRouter.mockImplementation(() => ({
    //         pathname: '/planet'
    //     }))
    //     // const container = document.createElement("div");
    //     // document.body.appendChild(container);
    //     wrapper = mount(<Modal_window show={true} onHide={()=>{}} />)
    // },{timeout:15000});

    // afterEach(() => {
    //     jest.clearAllMocks();
    // });

    // describe('Count Up', () => {
        
    //     it('calls setCount with count + 1', () => {
    //         expect(wrapper.find('.modal').length).toEqual(1); 
    //         expect(wrapper).toBe(0)
    //         // console.log(wrapper.find('#count-up').debug()); 
    //         // wrapper.find('#count-up').simulate('click');
    //         // wrapper.find('.icon-button').first().simulate('click');
    //         // expect(setState).toHaveBeenLastCalledWith(true);
    //         // console.log(wrapper.find('h3').debug()); 
    //         // const Modal=wrapper.find(Modal_window).render()
    //         // wrapper.find('#count-up').simulate('click');
    //         // expect(setState).toHaveBeenLastCalledWith(2);
    //     });
    // });

})

// const useStateMock = jest.spyOn(React, 'useState');
// describe('Space test suite', () => {


//     it('test absence modal apparition ??cran', async () => {
//         useRouter.mockImplementation(() => ({
//             pathname: '/planet'
//         }))


//         const setOpen = jest.fn();
//         useStateMock.mockImplementation((init) => [init, setOpen]);
//         // const setOpen = jest.fn();
//         // useStateMock.mockImplementation((init) => [init, setOpen]);


//         const wrapper = mount(<NavItem />)


//         const gg = wrapper.find(Lien)
//         // const moddal = wrapper.find(Modal_window)
//         expect(wrapper.find(Lien).length).toBe(1)
//         // expect(wrapper.find(Modal_window).prop('show')).toBeTruthy()
//         const aLink = wrapper.find('.icon-button').first()
//         aLink.simulate("click")

//         // console.log("ee");
//         // const testInstance = tree.root;
//         // expect(wrapper.html()).toContain('Temps de d??veloppement');

//         // const submitButton = wrapper.find('.icon-button')
//         // let yy=submitButton[0].instance();


//         // wrapper.update()
//         // expect(setOpen).toHaveBeenLastCalledWith(true);
//         const modal = wrapper.find(Modal_window)
//         console.log(modal.html());
//         expect(wrapper.find(Modal_window).length).toBe(1)
//         expect(wrapper.find(Modal_window).prop('show')).toBeTruthy()

//         // expect(wrapper.html()).toContain('Temps de d??veloppement')

//     });


//     // it('renders correctly lien vers page plan??te', () => {

//     //     useRouter.mockImplementationOnce(() => ({
//     //         pathname: '/'
//     //     }))

//     //     render(<Lien />)
//     //     const lien = screen.getByText(/???/)

//     //     expect(lien.innerHTML).toMatch(/Dashboard exoplan??te/);
//     // });

//     // it('renders correctly lien vers page plan??te', () => {
//     //     useRouter.mockImplementationOnce(() => ({
//     //         pathname: '/planet'
//     //     }))
//     //     const tree = renderer
//     //         .create(<Lien />)
//     //         .toJSON();
//     //     expect(tree.children[0]).toMatch(/Suivi de campagne vaccinatoire/);
//     // });


//     // it('adresse origine de l api', () => {

//     //   expect(adresse).toEqual("http://68.183.74.150")
//     // });

// });